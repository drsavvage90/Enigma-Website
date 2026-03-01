import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';
import './LaserBeamHero.css';

// Lazy loading WebGL ensures we never execute 3D code during SSR or on fast mobile loads
const SceneWrapper = lazy(() => import('../three/SceneWrapper'));

// ── Animation variants ─────────────────────────────
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.4 },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(20px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
    },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(15px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
};

const ctaVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
};


export default function VolumetricHero() {
    const containerRef = useRef(null);
    const [inView, setInView] = useState(true);

    // Performance context
    const { isClient, isMobile, isLowPower, reducedMotion } = useDeviceDetect();

    // Pause WebGL rendering when scrolled out of view to save battery/thermals
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Provide a beautiful CSS-only fallback gradient for mobile / SSR / disabled motion
    const CustomFallback = () => (
        <div style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            background: `
                radial-gradient(ellipse at 65% -20%, rgba(255, 159, 65, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(40, 60, 100, 0.2) 0%, transparent 50%),
                linear-gradient(180deg, #08080F 0%, #040406 100%)
            `,
            zIndex: 0
        }} />
    );

    // Render logic: Ensure no heavy 3D ever touches mobile or unmounted apps
    const shouldRender3D = isClient && !isMobile && !reducedMotion;

    return (
        <section ref={containerRef} className="laser-hero" style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#020202' }}>

            {/* ── Background Layer — Canvas receives pointer events ── */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                {shouldRender3D ? (
                    <Suspense fallback={<CustomFallback />}>
                        {inView && <SceneWrapper isActive={inView} disableBloom={isLowPower} containerRef={containerRef} />}
                    </Suspense>
                ) : (
                    <CustomFallback />
                )}
            </div>

            {/* ── Content Layer — pointer-events: none so clicks pass through to canvas ── */}
            <motion.div
                className="laser-hero__content"
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={containerVariants}
                style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}
            >
                <motion.h1 className="laser-hero__title" variants={titleVariants} style={{ pointerEvents: 'auto' }}>
                    Custom Software.<br />
                    <span className="laser-hero__word--accent">Intelligent Solutions.</span>
                </motion.h1>

                <motion.p className="laser-hero__subtitle" variants={subtitleVariants} style={{ pointerEvents: 'auto' }}>
                    We design, build, and deploy custom AI systems,
                    mobile applications, and web applications —
                    purpose-built for your business.
                </motion.p>

                <motion.div variants={ctaVariants} style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 0 }}>
                    <MagneticButton>
                        <Link to="/contact" className="laser-hero__cta">
                            SCHEDULE A CONSULTATION
                            <ArrowRight size={14} strokeWidth={2.5} style={{ marginLeft: '6px' }} />
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#services" className="laser-hero__cta laser-hero__cta--ghost">
                            LEARN MORE
                        </a>
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
