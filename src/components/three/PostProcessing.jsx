import React, { memo } from 'react';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

// disableBloom prop stops the heavy renderer when running on low-power mobile or old hardware
const PostProcessing = memo(function PostProcessing({ disableBloom }) {
    if (disableBloom) return null;

    return (
        <EffectComposer disableNormalPass multisampling={0}>
            {/* 
               Bloom parameters tuned for cinematic, non-overpowering elegance 
               - Reduced intensity prevents text/headline washout
               - Higher threshold (0.95) restricts bloom ONLY to the tight inner core (isCore=1)
            */}
            <Bloom
                intensity={0.65}
                luminanceThreshold={0.95}
                luminanceSmoothing={0.7}
                mipmapBlur
                resolutionScale={0.5}
            />

            <Vignette
                eskil={false}
                offset={0.15}
                darkness={0.8}
                blendFunction={BlendFunction.NORMAL}
            />
        </EffectComposer>
    );
});

export default PostProcessing;
