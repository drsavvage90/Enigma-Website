/**
 * LaserBeamHero — Huly.io-inspired hero with animated laser beam light rays.
 *
 * Thin, glowing white/blue lines sweep across a dark background in a
 * continuous loop, creating a fiber-optic / prism refraction effect.
 * Framer Motion handles the text + CTA reveal animations.
 */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'
import EnergyBeam from './EnergyBeam'
import './LaserBeamHero.css'

// ── Animation variants ─────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 14, mass: 0.9 },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.0 },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1.3 },
  },
}

const line1Words = ['Custom', 'Software.']
const line2Words = ['Intelligent', 'Solutions.']

export default function LaserBeamHero() {
  return (
    <section className="laser-hero">
      {/* ── Central glow source ── */}
      <div className="laser-hero__glow" aria-hidden="true" />

      {/* ── Energy beam flowing trails ── */}
      <EnergyBeam />

      {/* ── Semi-transparent overlay ── */}
      <div className="laser-hero__overlay" aria-hidden="true" />

      {/* ── Content ── */}
      <motion.div
        className="laser-hero__content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="laser-hero__title">
          {/* Line 1 — white text */}
          <span className="laser-hero__line">
            {line1Words.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                variants={wordVariants}
                className="laser-hero__word"
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — orange text */}
          <span className="laser-hero__line">
            {line2Words.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                variants={wordVariants}
                className="laser-hero__word laser-hero__word--accent"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p className="laser-hero__subtitle" variants={subtitleVariants}>
          We design, build, and deploy custom AI systems,
          mobile applications, and web applications —
          purpose-built for your business, your workflows,
          and your growth.
        </motion.p>

        <motion.div variants={ctaVariants}>
          <MagneticButton>
            <Link to="/contact" className="laser-hero__cta">
              SCHEDULE A CONSULTATION
              <ArrowRight size={14} style={{ marginLeft: '4px' }} />
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
