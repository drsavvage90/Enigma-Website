/**
 * useSpotlightButtons - Global event-delegation hook that adds a
 * cursor-tracking radial-gradient spotlight to all .btn-primary and
 * .laser-hero__cta buttons. Works for dynamically rendered elements.
 */
import { useEffect } from 'react'

const SELECTOR = '.btn-primary, .laser-hero__cta'

export default function useSpotlightButtons() {
  useEffect(() => {
    function handleMouseMove(e) {
      const btn = e.target.closest(SELECTOR)
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      btn.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`)
      btn.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`)
      btn.setAttribute('data-spotlight', 'true')
    }

    function handleMouseLeave(e) {
      const btn = e.target.closest(SELECTOR)
      if (!btn) return
      if (!btn.contains(e.relatedTarget)) {
        btn.removeAttribute('data-spotlight')
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseout', handleMouseLeave, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])
}

