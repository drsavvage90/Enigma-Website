import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { BeamMaterial } from '../../shaders/BeamMaterial';

extend({ BeamMaterial });

// ── Cinematic Floating Dust ───────────────────────────────────────
// Low opacity points that float subtly throughout the volume
function DustParticles({ count = 200 }) {
    const pointsRef = useRef(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread dust randomly, heavily clustered inside the main cylinder bounds
            positions[i * 3] = (Math.random() - 0.5) * 6;     // X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 14; // Y height 
            positions[i * 3 + 2] = (Math.random() - 0.5) * 6;  // Z depth
        }
        return { positions };
    }, [count]);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Drift the particle system extremely slowly, like faint smoke or bokeh
            pointsRef.current.rotation.y += delta * 0.05;
            pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
            </bufferGeometry>
            {/* Extremely soft, dark blend that only catches highlights */}
            <pointsMaterial
                size={0.04}
                color="#7859a8"
                transparent={true}
                opacity={0.15}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                sizeAttenuation={true}
            />
        </points>
    );
}

// ── Main Scene Driver ───────────────────────────────────────────
export default function SceneComponents() {
    const matOuterRef = useRef(null);
    const matInnerRef = useRef(null);
    const beamGroupRef = useRef(null);

    // Grab camera to inject cinematic low-amplitude panning
    const { camera } = useThree();
    const initialCamPos = useMemo(() => new THREE.Vector3(0, 0, 8), []);

    // Track scroll playfully without triggering React renders
    const scrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        // Passive listener for high performance scrolling
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Memoize geometries and colors to prevent recreation on re-renders
    const { geoOuter, geoInner, colorBottom, colorMiddle, colorTop } = useMemo(() => {
        return {
            geoOuter: new THREE.CylinderGeometry(1.2, 4.0, 14, 32, 1, true),
            geoInner: new THREE.CylinderGeometry(0.5, 1.8, 14, 32, 1, true),
            // Refined, dark Huly.io inspired gradient
            colorBottom: new THREE.Color('#0f2b5c'),
            colorMiddle: new THREE.Color('#391f5c'),
            colorTop: new THREE.Color('#7a4b3a')
        }
    }, []);

    // Strict cleanup for single-page applications
    useEffect(() => {
        return () => {
            geoOuter.dispose();
            geoInner.dispose();
        };
    }, [geoOuter, geoInner]);

    useFrame((state, delta) => {
        const elapsed = state.clock.elapsedTime;

        // 1. Elegant Fade-in (Smoothly scale intensity over 2.5 seconds)
        const fadeIn = Math.min(elapsed / 2.5, 1.0);

        // 2. Scroll-Triggered Dimming
        const scrollIntensityPhase = Math.max(1.0 - (scrollRef.current / 700.0), 0.05);

        // Outer halo is large but very faint. Inner core is tight and pushing intense Bloom.
        const currentIntOuter = 0.6 * fadeIn * scrollIntensityPhase;
        const currentIntInner = 1.3 * fadeIn * scrollIntensityPhase;

        // 3. Drive Shader Animation & Intensities
        if (matOuterRef.current) {
            matOuterRef.current.time = elapsed;
            matOuterRef.current.intensity = currentIntOuter;
        }
        if (matInnerRef.current) {
            matInnerRef.current.time = elapsed;
            matInnerRef.current.intensity = currentIntInner;
        }

        // 4. Parallax Group Updates
        if (beamGroupRef.current) {
            // Auto-panning base rotation
            beamGroupRef.current.rotation.y += delta * 0.03;

            // Refined subtle Mouse Parallax 
            const targetX = (state.pointer.y * Math.PI) * 0.03;
            const targetZ = -(state.pointer.x * Math.PI) * 0.03;

            beamGroupRef.current.rotation.x = THREE.MathUtils.lerp(
                beamGroupRef.current.rotation.x, targetX, 0.03
            );
            beamGroupRef.current.rotation.z = THREE.MathUtils.lerp(
                beamGroupRef.current.rotation.z, targetZ, 0.03
            );
        }

        // 5. Cinematic Camera Drift (Simulates highly stabilized drone or dolly panning)
        camera.position.x = initialCamPos.x + Math.sin(elapsed * 0.15) * 0.2;
        camera.position.y = initialCamPos.y + Math.cos(elapsed * 0.1) * 0.15;
        // Ensure standard lookAt vector so the horizon stays level during the move
        camera.lookAt(0, 0, 0);
    });

    return (
        <group>
            {/* The Dual-core Volumetric Light Laser */}
            <group ref={beamGroupRef} position={[0, -1, 0]}>

                {/* Large, Soft Outer Halo */}
                <mesh geometry={geoOuter} rotation={[0, 0, Math.PI / 12]}>
                    <beamMaterial
                        ref={matOuterRef}
                        transparent={true}
                        depthWrite={false}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                        colorBottom={colorBottom}
                        colorMiddle={colorMiddle}
                        colorTop={colorTop}
                        isCore={0.0}
                        intensity={0.0}
                    />
                </mesh>

                {/* Tight, Intense Inner Core */}
                <mesh geometry={geoInner} rotation={[0, 0, Math.PI / 12]}>
                    <beamMaterial
                        ref={matInnerRef}
                        transparent={true}
                        depthWrite={false}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                        colorBottom={colorBottom}
                        colorMiddle={colorMiddle}
                        colorTop={colorTop}
                        isCore={1.0}
                        intensity={0.0}
                    />
                </mesh>

            </group>

            {/* Faint ambient dust scattered inside the light */}
            <DustParticles count={250} />
        </group>
    );
}
