import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

const CODE_SNIPPETS = [
    "const [state, setState] = useState(null);",
    "def train_model(epochs=100):",
    "display: flex; justify-content: center;",
    "<div>\n  <h1>Neural Net</h1>\n</div>",
    "function animate() { requestAnimationFrame(animate); }",
    "import { useFrame } from '@react-three/fiber';",
    ".neural-node { opacity: 0.8; transition: all 0.3s; }",
    "class QuantumAnalyzer:\n    def __init__(self):",
    "fetch('/api/data').then(res => res.json())"
];

export default function SceneComponents() {
    const { camera, raycaster } = useThree();

    // Set raycaster threshold so the small points are easy to click
    useEffect(() => {
        raycaster.params.Points.threshold = 2.5; // Large threshold so clusters are very easy to click
    }, [raycaster]);

    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(false);

    // Auto-shrink behavior: After expanding, wait a few seconds and return to normal
    useEffect(() => {
        if (selected !== null) {
            const timer = setTimeout(() => {
                setSelected(null);
            }, 2600); // Auto-closes and shrinks back down after 2.6 seconds (25% faster)

            return () => clearTimeout(timer);
        }
    }, [selected]);

    // Change cursor to a pointer when hovering over the clusters
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered]);

    // Define the network parameters
    const particleCount = 700;
    const numClusters = 7;
    const maxConnectionDistance = 1.6;

    // Speed multiplier (1.0 = normal, 1.25 = 25% faster)
    const speedMult = 1.25;

    const particlesRef = useRef(null);
    const linesRef = useRef(null);
    const textGroupRef = useRef(null);

    // Initial state setup for clustered network nodes
    const { positions, particleData, clusters, clusterTexts } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const particleData = [];

        // Setup central cluster nodes (the "brain centers" of the sub-networks)
        const clusters = Array.from({ length: numClusters }, (_, idx) => ({
            id: idx,
            basePos: new THREE.Vector3(
                (Math.random() - 0.5) * 16,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6
            ),
            pos: new THREE.Vector3(),
            vel: new THREE.Vector3(
                (Math.random() - 0.5) * 0.015 * speedMult,
                (Math.random() - 0.5) * 0.015 * speedMult,
                (Math.random() - 0.5) * 0.015 * speedMult
            ),
            expansion: 1.0,
            explosionVelocity: 0.0 // To track fast outwards explosion
        }));

        // Initialize pos to basePos
        clusters.forEach(c => c.pos.copy(c.basePos));

        for (let i = 0; i < particleCount; i++) {
            const clusterIdx = Math.floor(Math.random() * numClusters);
            const center = clusters[clusterIdx].pos;

            // Tighter spread around their specific cluster centers
            positions[i * 3] = center.x + (Math.random() - 0.5) * 4;
            positions[i * 3 + 1] = center.y + (Math.random() - 0.5) * 4;
            positions[i * 3 + 2] = center.z + (Math.random() - 0.5) * 4;

            particleData.push({
                clusterIdx,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02 * speedMult,
                    (Math.random() - 0.5) * 0.02 * speedMult,
                    (Math.random() - 0.5) * 0.02 * speedMult
                )
            });
        }

        // Initialize text snippets to float inside the clusters
        const clusterTexts = Array.from({ length: numClusters }).map(() => {
            return Array.from({ length: 5 }).map(() => ({ // 5 snippets per explosion
                text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
                offset: new THREE.Vector3(
                    (Math.random() - 0.5) * 5.0,
                    (Math.random() - 0.5) * 5.0,
                    (Math.random() - 0.5) * 5.0
                ),
                rotation: [
                    (Math.random() - 0.5) * 0.6,
                    (Math.random() - 0.5) * 0.6,
                    (Math.random() - 0.5) * 0.6
                ],
                // Add a random outward drift for the explosion effect
                driftLine: new THREE.Vector3(
                    (Math.random() - 0.5) * 2.0,
                    (Math.random() - 0.5) * 2.0,
                    (Math.random() - 0.5) * 2.0
                )
            }));
        });

        return { positions, particleData, clusters, clusterTexts };
    }, []);

    const maxLines = (particleCount * (particleCount - 1)) / 2;
    const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
    const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

    const initialCamPos = useMemo(() => new THREE.Vector3(0, 0, 8), []);

    useFrame((state, delta) => {
        if (!particlesRef.current || !linesRef.current) return;

        const positionsAttr = particlesRef.current.geometry.attributes.position;
        const pts = positionsAttr.array;

        // Convert 2D screen cursor to 3D world position at roughly the depth of the particles
        const mousePos = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5);
        mousePos.unproject(camera);
        const dir = mousePos.sub(camera.position).normalize();
        const distanceToZero = -camera.position.z / dir.z;
        const cursorWorld = camera.position.clone().add(dir.multiplyScalar(distanceToZero));

        // 1. Let clusters update their central positions and states
        for (let c = 0; c < numClusters; c++) {
            const cluster = clusters[c];

            // All clusters always keep drifting freely
            cluster.pos.add(cluster.vel);

            // Rebound if they drift too far off-screen
            if (cluster.pos.x > 10 || cluster.pos.x < -10) cluster.vel.x *= -1;
            if (cluster.pos.y > 6 || cluster.pos.y < -6) cluster.vel.y *= -1;
            if (cluster.pos.z > 4 || cluster.pos.z < -4) cluster.vel.z *= -1;

            // Constantly pull clusters slightly toward the center so they don't all hide in corners
            cluster.vel.x -= cluster.pos.x * (0.0001 * speedMult);
            cluster.vel.y -= cluster.pos.y * (0.0001 * speedMult);

            if (selected === c) {
                // This cluster is exploding — expand it in place
                cluster.explosionVelocity = THREE.MathUtils.lerp(cluster.explosionVelocity, 2.0, 0.3);
                cluster.expansion = THREE.MathUtils.lerp(cluster.expansion, 4.5, 0.2 * speedMult);
            } else {
                // Normal state or shrinking back from a previous explosion
                cluster.expansion = THREE.MathUtils.lerp(cluster.expansion, 1.0, 0.12 * speedMult);
                cluster.explosionVelocity = THREE.MathUtils.lerp(cluster.explosionVelocity, 0.0, 0.15);
            }
        }

        // 2. Animate the floating code fragments (Explosion effect)
        if (textGroupRef.current) {
            let textIdx = 0;
            const textChildren = textGroupRef.current.children;
            const time = state.clock.elapsedTime * speedMult;

            for (let c = 0; c < numClusters; c++) {
                const cluster = clusters[c];
                // Opacity is tied to expansion
                const opacity = Math.max(0, Math.min(1, (cluster.expansion - 2.0) / 1.5));

                for (let t = 0; t < 5; t++) {
                    const textMesh = textChildren[textIdx++];
                    if (textMesh) {
                        const snippet = clusterTexts[c][t];
                        const offset = snippet.offset;

                        // Slowly orbit texts around the cluster center, but push them outward based on explosionVelocity
                        const rotatedOffset = offset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), time * 0.1);

                        // The explosion pushing the texts outward playfully and dynamically
                        const dynamicDrift = snippet.driftLine.clone().multiplyScalar(cluster.explosionVelocity * Math.sin(time * 2 + t));

                        textMesh.position.copy(cluster.pos).add(rotatedOffset).add(dynamicDrift);

                        // Subtle floating up and down effect
                        textMesh.position.y += Math.sin(time + t * 2) * 0.3;

                        // Rotate the text slightly over time so they look like floating holograms
                        textMesh.rotation.x = snippet.rotation[0] + Math.sin(time * 0.5) * 0.2;
                        textMesh.rotation.y = snippet.rotation[1] + time * 0.1;
                        textMesh.rotation.z = snippet.rotation[2] + Math.cos(time * 0.5) * 0.1;

                        // Update material opacity
                        if (textMesh.material) {
                            textMesh.material.opacity = opacity;
                            textMesh.visible = opacity > 0.01;
                        }
                    }
                }
            }
        }

        let vertexPos = 0;
        let colorPos = 0;

        // 3. Update particle positions based on velocity and cursor interaction
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const p = new THREE.Vector3(pts[i3], pts[i3 + 1], pts[i3 + 2]);
            const data = particleData[i];
            const v = data.velocity;
            const cluster = clusters[data.clusterIdx];

            const dirToCenter = cluster.pos.clone().sub(p);
            const distToCenter = dirToCenter.length();

            // Base spring force holding it to the cluster center
            let pullForce = dirToCenter.clone().normalize().multiplyScalar(distToCenter * (0.003 * speedMult));

            if (cluster.expansion > 1.01) {
                // EXPANDED BEHAVIOR (Explosive shell)
                const expandRatio = (cluster.expansion - 1) / 3.5; // 0.0 to 1.0
                const optimalDist = 4.0 * expandRatio; // Target hollow radius for the expanded shell
                const safeDirToCenter = distToCenter > 0.001 ? dirToCenter.clone().normalize() : new THREE.Vector3(1, 0, 0);

                if (distToCenter < optimalDist) {
                    // Push outward if inside the hollow shell (Creates the fast explosion outwards)
                    const pushOutForce = safeDirToCenter.clone().multiplyScalar(-0.02 * speedMult * expandRatio);
                    pullForce.lerp(pushOutForce, expandRatio);
                } else {
                    // Pull gently back if outside
                    const softPull = safeDirToCenter.clone().multiplyScalar((distToCenter - optimalDist) * (0.004 * speedMult));
                    pullForce.lerp(softPull, expandRatio);
                }

                // Add a cinematic swirling motion around the Y axis when expanded
                const up = new THREE.Vector3(0, 1, 0);
                const swirlDir = new THREE.Vector3().crossVectors(safeDirToCenter, up).normalize();

                // Speed up the swirl dynamically during the explosion
                v.add(swirlDir.multiplyScalar((0.01 + cluster.explosionVelocity * 0.01) * speedMult * expandRatio));
            }

            v.add(pullForce);

            // Removed cursor repulsion so clusters are easy to target and click

            // Damping (friction) so they don't fly off forever
            v.multiplyScalar(0.90);

            // Add gentle random organic drift so the network pulses actively
            v.x += (Math.random() - 0.5) * (0.006 * speedMult);
            v.y += (Math.random() - 0.5) * (0.006 * speedMult);
            v.z += (Math.random() - 0.5) * (0.006 * speedMult);

            p.add(v);

            pts[i3] = p.x;
            pts[i3 + 1] = p.y;
            pts[i3 + 2] = p.z;

            // 4. Connect lines between closely neighboring particles
            for (let j = i + 1; j < particleCount; j++) {
                const dataJ = particleData[j];
                const isInterCluster = data.clusterIdx !== dataJ.clusterIdx;

                const j3 = j * 3;
                const distSq =
                    Math.pow(pts[i3] - pts[j3], 2) +
                    Math.pow(pts[i3 + 1] - pts[j3 + 1], 2) +
                    Math.pow(pts[i3 + 2] - pts[j3 + 2], 2);

                // Dynamically scale connection distance based on expansion state
                // Inter-cluster connections form bridging tendrils out to neighboring systems
                let dynamicMaxDist = maxConnectionDistance * cluster.expansion;
                if (isInterCluster) dynamicMaxDist *= 0.9;

                const maxDistSq = dynamicMaxDist * dynamicMaxDist;

                if (distSq < maxDistSq) {
                    const alpha = 1.0 - (distSq / maxDistSq);
                    const actualDist = Math.sqrt(distSq);
                    const closeness = 1.0 - (actualDist / dynamicMaxDist); // 1.0 = intersecting, 0.0 = edge

                    linePositions[vertexPos++] = pts[i3];
                    linePositions[vertexPos++] = pts[i3 + 1];
                    linePositions[vertexPos++] = pts[i3 + 2];

                    linePositions[vertexPos++] = pts[j3];
                    linePositions[vertexPos++] = pts[j3 + 1];
                    linePositions[vertexPos++] = pts[j3 + 2];

                    // Exponential spike to simulate them merging and getting heavily brighter when close
                    // Mute the spike slightly when expanded so we can read the code snippets without glare
                    const spikePower = cluster.expansion > 1.5 ? 0.3 : 1.8;
                    const intensitySpike = Math.pow(closeness, 3.0) * spikePower;

                    // Subtly vary hue based on cluster
                    const base_r = 0.0 + (data.clusterIdx % 3) * 0.15;
                    const base_g = 0.5 + (data.clusterIdx % 4) * 0.1;
                    const base_b = 1.0;

                    // Boost line intensity slightly when expanded to make the intricate web clearly visible
                    const boost = cluster.expansion > 1.5 ? 0.8 : 0.55;
                    const baseIntensity = alpha * boost;

                    // Combine base glow with exponential closeness spike
                    const final_r = (base_r * baseIntensity) + (intensitySpike * 0.2);
                    const final_g = (base_g * baseIntensity) + (intensitySpike * 0.8);
                    const final_b = (base_b * baseIntensity) + (intensitySpike * 1.0);

                    lineColors[colorPos++] = final_r;
                    lineColors[colorPos++] = final_g;
                    lineColors[colorPos++] = final_b;

                    lineColors[colorPos++] = final_r;
                    lineColors[colorPos++] = final_g;
                    lineColors[colorPos++] = final_b;
                }
            }
        }

        positionsAttr.needsUpdate = true;

        const lineGeo = linesRef.current.geometry;
        lineGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.color.needsUpdate = true;

        lineGeo.setDrawRange(0, vertexPos / 3);

        // Gentle parallax on the whole network group based on pointer
        if (particlesRef.current.parent) {
            particlesRef.current.parent.rotation.x = THREE.MathUtils.lerp(
                particlesRef.current.parent.rotation.x, state.pointer.y * 0.08, 0.05 * speedMult
            );
            particlesRef.current.parent.rotation.y = THREE.MathUtils.lerp(
                particlesRef.current.parent.rotation.y, state.pointer.x * 0.08, 0.05 * speedMult
            );
        }

        // Camera always drifts — scene stays alive during explosions
        const elapsed = state.clock.elapsedTime * speedMult;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, initialCamPos.x + Math.sin(elapsed * 0.1) * 0.4, 0.05 * speedMult);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, initialCamPos.y + Math.cos(elapsed * 0.08) * 0.4, 0.05 * speedMult);
        camera.lookAt(0, 0, 0);
    });

    return (
        <group>
            <points
                ref={particlesRef}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
                onPointerOut={() => setHovered(false)}
                onPointerDown={(e) => {
                    e.stopPropagation();
                    if (e.index !== undefined) {
                        const targetCluster = particleData[e.index].clusterIdx;
                        // Trigger the explosion!
                        setSelected(targetCluster);
                    }
                }}
            >
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.07}
                    color="#ffffff"
                    transparent={true}
                    opacity={0.85}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    sizeAttenuation={true}
                />
            </points>
            <lineSegments ref={linesRef} pointerEvents="none">
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={lineColors.length / 3}
                        array={lineColors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    vertexColors={true}
                    transparent={true}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    opacity={0.9}
                />
            </lineSegments>

            {/* Render 3D Text snippets that explode out */}
            <group ref={textGroupRef}>
                {clusterTexts.map((texts, cIdx) => (
                    texts.map((t, tIdx) => (
                        <Text
                            key={`${cIdx}-${tIdx}`}
                            position={[0, 0, 0]}
                            rotation={t.rotation}
                            fontSize={0.25}
                            color="#00f0ff"
                            anchorX="center"
                            anchorY="middle"
                            transparent={true}
                            opacity={0}
                            depthWrite={false}
                            blending={THREE.AdditiveBlending}
                        >
                            {t.text}
                        </Text>
                    ))
                ))}
            </group>
        </group>
    );
}
