import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const BeamMaterial = shaderMaterial(
  {
    time: 0,
    colorBottom: new THREE.Color('#0a1930'), // Deep premium blue
    colorMiddle: new THREE.Color('#2d1b4e'), // Subtle violet
    colorTop: new THREE.Color('#5a3a2a'),    // Faint warm edge
    intensity: 1.0,
    isCore: 0.0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying float vDepth;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vDepth = -mvPosition.z; // Capture depth for atmospheric fading
        
        gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 colorBottom;
    uniform vec3 colorMiddle;
    uniform vec3 colorTop;
    uniform float intensity;
    uniform float isCore;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying float vDepth;

    void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // 1. Fresnel Fading
        // Adjust the Fresnel power based on whether it's the core or the softer outer halo
        float fresnel = dot(normal, viewDir);
        fresnel = clamp(fresnel, 0.0, 1.0);
        
        if (isCore > 0.5) {
            fresnel = pow(fresnel, 0.8); // Wider, brighter feeling for inner core
        } else {
            fresnel = pow(fresnel, 2.5); // Very soft, edge-only glow for the outer halo
        }

        // 2. Vertical Tapering
        // Smooth transition fading out at the top and bottom
        float verticalFade = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);

        // 3. Atmospheric Depth Fading
        // Simulates distance falloff inside a volume
        float depthFade = smoothstep(0.0, 15.0, vDepth);
        depthFade = 1.0 - clamp(depthFade, 0.0, 1.0);

        // 4. Subtle Volumetric Flow
        // Low-frequency sine waves instead of expensive noise loops
        float wave1 = sin(vUv.y * 12.0 - time * 1.2) * 0.5 + 0.5;
        float wave2 = sin(vUv.y * 6.0 + vUv.x * 6.0 - time * 0.8) * 0.5 + 0.5;
        float waves = (wave1 + wave2) * 0.5;
        
        // The outer halo shows more "dust/wave" detail than the solid hot core
        float detail = mix(1.0, waves, 0.4 - (isCore * 0.3));

        // 5. Sophisticated Color Mixing
        // Smoothly interpolates from deep blue -> violet -> warm champagne edge
        vec3 colorMix = mix(colorBottom, colorMiddle, smoothstep(0.0, 0.5, vUv.y));
        colorMix = mix(colorMix, colorTop, smoothstep(0.5, 1.0, vUv.y));

        // Combine
        float alpha = fresnel * verticalFade * detail * depthFade * intensity;

        gl_FragColor = vec4(colorMix * intensity, alpha);
    }
  `
);
