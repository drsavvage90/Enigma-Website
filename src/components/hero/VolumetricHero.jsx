import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './LaserBeamHero.css';

export default function VolumetricHero() {
    const containerRef = useRef(null);

    // ── Background Layer ──
    const HeroBackground = () => (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: '#020202',
            pointerEvents: 'none' // Crucial: prevents hover-based browser overlays
        }}>
            {/* ── Background Image Layer ── */}
            <img
                src="/assets/Hero-Section Main.webp"
                alt="Enigma Background"
                className="hero-image-animate"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6,
                    pointerEvents: 'none'
                }}
            />

            {/* Optional dark overlay for text readability */}
            <div className="hero-breathing-overlay" />
        </div>
    );

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
                    Replace the spreadsheets, clunky tools, and manual work
                    slowing your business down. Get custom AI, mobile apps,
                    and web platforms built around how you actually operate.
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
