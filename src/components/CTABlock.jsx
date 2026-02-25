/**
 * CTABlock — Premium CTA section with pulsing glow, animated text reveal,
 * and magnetic button. Appears at the bottom of every page.
 * Updated to Huly-inspired blue-violet glow with cream pill CTA.
 */
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from './hero/MagneticButton'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function CTABlock({ headline, text, buttonText = "Let's Talk", buttonTo = '/contact' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-dark)',
      }}
    >
      {/* Pulsing gradient glow — blue-violet */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(255, 159, 65, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'cta-glow-pulse 4s ease-in-out infinite',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 16,
              background: 'linear-gradient(135deg, #ffffff 0%, #ffe6cc 60%, #ffeee6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              color: 'var(--text-muted)',
              fontSize: 17,
              maxWidth: 560,
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            {text}
          </motion.p>

          <motion.div variants={itemVariants}>
            <MagneticButton>
              <Link to={buttonTo} className="btn btn-primary btn-lg">
                {buttonText} <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes cta-glow-pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }
      `}</style>
    </section>
  )
}
