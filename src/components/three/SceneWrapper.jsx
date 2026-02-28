import React, { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneComponents from './SceneComponents';
import PostProcessing from './PostProcessing';

const SceneWrapper = memo(function SceneWrapper({ isActive, disableBloom, containerRef }) {
    return (
        <Canvas
            shadows={false}
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{
                antialias: false,
                powerPreference: 'high-performance',
                alpha: false,
                stencil: false,
                depth: true
            }}
            frameloop={isActive ? 'always' : 'never'}
            eventSource={containerRef}
            eventPrefix="client"
            style={{ pointerEvents: 'none' }}
        >
            <Suspense fallback={null}>
                <SceneComponents />
                {!disableBloom && <PostProcessing />}
            </Suspense>
        </Canvas>
    );
});

export default SceneWrapper;
