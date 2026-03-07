import { useSyncExternalStore } from 'react';

function useMediaQuery(query, serverDefault = false) {
    return useSyncExternalStore(
        (callback) => {
            const mql = window.matchMedia(query);
            mql.addEventListener('change', callback);
            return () => mql.removeEventListener('change', callback);
        },
        () => window.matchMedia(query).matches,
        () => serverDefault,
    );
}

export function useDeviceDetect() {
    const isClient = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );

    const isMobile = useMediaQuery('(max-width: 768px)', true);
    const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', false);

    const isLowPower = useSyncExternalStore(
        (callback) => {
            const mql = window.matchMedia('(max-width: 768px)');
            mql.addEventListener('change', callback);
            return () => mql.removeEventListener('change', callback);
        },
        () => {
            const mobile = window.matchMedia('(max-width: 768px)').matches;
            const lowConcurrency = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
            return mobile || lowConcurrency;
        },
        () => true,
    );

    return { isMobile, isLowPower, reducedMotion, isClient };
}
