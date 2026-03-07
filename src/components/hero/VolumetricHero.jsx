import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './LaserBeamHero.css';

function HeroBackground() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: '#020202',
            pointerEvents: 'none'
        }}>
            <img
                src="/assets/Hero-Section Main.webp"
                alt="Enigma Software Systems — custom software development for AI, mobile, and web applications"
                className="hero-image-animate"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6,
                    pointerEvents: 'none'
                }}
            />
            <div className="hero-breathing-overlay" />
        </div>
    );
}

export default function VolumetricHero() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="laser-hero" style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#020202' }}>

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

                <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 0 }}>
                    <MagneticButton>
                        <Link to="/contact" className="laser-hero__cta">
                            GET A FREE RECOMMENDATION
                            <ArrowRight size={14} strokeWidth={2.5} style={{ marginLeft: '6px' }} />
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#services" className="laser-hero__cta laser-hero__cta--ghost">
                            SEE WHAT WE BUILD
                        </a>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
