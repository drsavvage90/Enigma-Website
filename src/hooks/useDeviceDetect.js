import { useState, useEffect } from 'react';

export function useDeviceDetect() {
    // Default to true for mobile to ensure SSR / initial render defaults to a fast, light fallback
    const [isMobile, setIsMobile] = useState(true);
    const [isLowPower, setIsLowPower] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Flag to tell us when we have safely mounted on the client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const mobileQuery = window.matchMedia('(max-width: 768px)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        setIsMobile(mobileQuery.matches);
        setReducedMotion(motionQuery.matches);

        // Estimate GPU capability (phones or old laptops = low power)
        const isLowConcurrency = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
        setIsLowPower(mobileQuery.matches || isLowConcurrency);

        const handleMobileChange = (e) => setIsMobile(e.matches);
        const handleMotionChange = (e) => setReducedMotion(e.matches);

        mobileQuery.addEventListener('change', handleMobileChange);
        motionQuery.addEventListener('change', handleMotionChange);

        return () => {
            mobileQuery.removeEventListener('change', handleMobileChange);
            motionQuery.removeEventListener('change', handleMotionChange);
        };
    }, []);

    return { isMobile, isLowPower, reducedMotion, isClient };
}
