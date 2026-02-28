/**
 * TiltCard — A card wrapper that applies a 3D perspective tilt effect
 * tracking the cursor position, with a directional border glow.
 * Uses refs instead of state for per-frame updates to avoid re-renders.
 */
import { useRef, useState, useCallback } from 'react'

const TILT_MAX = 8 // degrees
const GLOW_SIZE = 200

export default function TiltCard({ children, className = '', style = {}, ...props }) {
    const ref = useRef(null)
    const glowRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = useCallback((e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2

        const rotateX = ((y - cy) / cy) * -TILT_MAX
        const rotateY = ((x - cx) / cx) * TILT_MAX

        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

        if (glowRef.current) {
            glowRef.current.style.top = `${y - GLOW_SIZE / 2}px`
            glowRef.current.style.left = `${x - GLOW_SIZE / 2}px`
        }
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (el) {
            el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
        }
        setIsHovering(false)
    }, [])

    const handleMouseEnter = useCallback(() => {
        setIsHovering(true)
    }, [])

    return (
        <div
            ref={ref}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transition: isHovering
                    ? 'transform 0.1s ease-out'
                    : 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden',
                ...style,
            }}
            {...props}
        >
            {children}
            {/* Directional glow that follows cursor */}
            {isHovering && (
                <div
                    ref={glowRef}
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        width: GLOW_SIZE,
                        height: GLOW_SIZE,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255, 159, 65, 0.12) 0%, transparent 70%)',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />
            )}
        </div>
    )
}
