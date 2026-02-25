/**
 * MagneticButton — A wrapper that makes any child element subtly "pull"
 * toward the user's cursor on hover, with a dynamic glow effect.
 * Uses framer-motion's useSpring for organic, springy movement.
 */
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const MAGNETIC_STRENGTH = 0.35 // how much the button follows the cursor
const SPRING_CONFIG = { stiffness: 200, damping: 20, mass: 0.5 }

export default function MagneticButton({ children, className = '', style = {}, ...props }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, SPRING_CONFIG)
    const springY = useSpring(y, SPRING_CONFIG)

    const handleMouseMove = (e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        x.set((e.clientX - cx) * MAGNETIC_STRENGTH)
        y.set((e.clientY - cy) * MAGNETIC_STRENGTH)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            className={`magnetic-btn ${className}`}
            style={{ x: springX, y: springY, display: 'inline-block', ...style }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </motion.div>
    )
}
