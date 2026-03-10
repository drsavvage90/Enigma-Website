import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './LaserBeamHero.css';

function HeroBackground() {
    const [videoReady, setVideoReady] = React.useState(false);
    const containerRef = React.useRef(null);
    const videoRef = React.useRef(null);

    // Defer video loading until hero is visible (eliminates LCP contention)
    React.useEffect(() => {
        const el = containerRef.current;
        const video = videoRef.current;
        if (!el || !video) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.load(); // triggers <source> loading
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: '#020202',
            pointerEvents: 'none'
        }}>
            {/* Static first frame — loads instantly (56 KB WebP), shown until video is ready */}
            <img
                src="/assets/hero-static.webp"
                alt="Enigma Software Systems — custom software development for AI, mobile, and web applications"
                className="hero-image-animate"
                width={1280}
                height={720}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: videoReady ? 0 : 0.6,
                    transition: 'opacity 0.8s ease',
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
            {/* Animated video — deferred via IntersectionObserver (2.3 MB MP4) */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                onCanPlay={() => setVideoReady(true)}
                aria-hidden="true"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: videoReady ? 0.6 : 0,
                    transition: 'opacity 0.8s ease',
                    pointerEvents: 'none',
                }}
            >
                <source src="/assets/hero-animated.mp4" type="video/mp4" />
                <source src="/assets/hero-animated.webm" type="video/webm" />
            </video>
            <div className="hero-breathing-overlay" />
        </div>
    );
}

export default function VolumetricHero() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="laser-hero" style={{ width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#020202', padding: '160px 0' }}>

            {/* ── Background Layer ── */}
            <HeroBackground />

            {/* ── Content Layer — pointer-events: none so clicks pass through to canvas ── */}
            <div
                className="laser-hero__content"
                style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}
            >
                <h1 className="laser-hero__title" style={{ pointerEvents: 'auto' }}>
                    Custom Software.<br />
                    <span className="laser-hero__word--accent">Intelligent Solutions.</span>
                </h1>

                <p className="laser-hero__subtitle" style={{ pointerEvents: 'auto' }}>
                    Custom software development for small businesses — AI systems,
                    mobile apps, and HIPAA-ready web platforms built around how
                    you actually operate. Based in Ohio, serving clients nationwide.
                </p>

                <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 48 }}>
                    <MagneticButton>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Get a Free Recommendation
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#services" className="btn btn-ghost btn-lg">
                            See What We Build
                        </a>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
