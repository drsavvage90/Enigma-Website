/**
 * HeroText — Cinematic staggered text reveal for the hero H1 + subtitle.
 *
 * - Line 1 ("Custom Software.") slides up word-by-word with spring physics.
 * - Line 2 ("Intelligent Solutions.") slides up with a slight delay, plus a
 *   periodic gradient shimmer that sweeps through the orange text.
 * - Subtitle paragraph fades / slides up after the H1 finishes animating.
 */
import { motion } from 'framer-motion'
import './HeroText.css'

// ── Container orchestrator ───────────────────────────────
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
}

// ── Individual word animation ────────────────────────────
const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 30 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 14,
            mass: 0.8,
        },
    },
}

// ── Subtitle fade-in ─────────────────────────────────────
const subtitleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.9, // starts after H1 finishes
        },
    },
}

const line1Words = ['Custom', 'Software.']
const line2Words = ['Intelligent', 'Solutions.']

export default function HeroText() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ perspective: 600 }}
        >
            {/* ── H1 ── */}
            <h1 className="hero__title" style={{ margin: 0 }}>
                {/* Line 1 — white text */}
                <span className="hero-text__line">
                    {line1Words.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className="hero-text__word"
                        >
                            {word}
                        </motion.span>
                    ))}
                </span>

                {/* Line 2 — orange gradient + shimmer */}
                <span className="hero-text__line">
                    {line2Words.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className="hero-text__word hero-text__word--accent"
                        >
                            {word}
                        </motion.span>
                    ))}
                    {/* Shimmer overlay that periodically sweeps through */}
                    <span className="hero-text__shimmer" aria-hidden="true" />
                </span>
            </h1>

            {/* ── Subtitle Paragraph ── */}
            <motion.p className="hero__subtitle" variants={subtitleVariants}>
                We design, build, and deploy custom AI systems, mobile applications,
                and web applications — purpose-built for your business, your workflows,
                and your growth.
            </motion.p>
        </motion.div>
    )
}
