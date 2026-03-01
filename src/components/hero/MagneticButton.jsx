/**
 * MagneticButton — Spotlight-hover wrapper.
 * Tracks the cursor position over the child button and exposes
 * --spotlight-x / --spotlight-y CSS custom properties so a ::before
 * pseudo-element can render a radial-gradient glow that follows the mouse.
 * Also toggles a `data-spotlight` attribute so CSS can show/hide the glow.
 */
import { useRef, memo, useCallback } from 'react'

export default memo(function MagneticButton({ children, className = '', style = {}, ...props }) {
    const ref = useRef(null)

    const handleMouseMove = useCallback((e) => {
        const el = ref.current
        if (!el) return
        // Find the actual button/link child inside the wrapper
        const btn = el.querySelector('.btn-primary, .laser-hero__cta') || el.firstElementChild
        if (!btn) return
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        btn.style.setProperty('--spotlight-x', `${x}px`)
        btn.style.setProperty('--spotlight-y', `${y}px`)
        btn.setAttribute('data-spotlight', 'true')
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        const btn = el.querySelector('.btn-primary, .laser-hero__cta') || el.firstElementChild
        if (!btn) return
        btn.removeAttribute('data-spotlight')
    }, [])

    return (
        <div
            ref={ref}
            className={`magnetic-btn ${className}`}
            style={{ display: 'inline-block', ...style }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    )
})
