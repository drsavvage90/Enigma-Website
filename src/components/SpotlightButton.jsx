/**
 * SpotlightButton — Huly-style mouse-tracking glow pill button.
 *
 * AMPLIFIED edition — three visual layers:
 *   Layer 0 — Outer halo: large radial glow that spills beyond the button bounds
 *   Layer 1 — Border glow: dual rotating conic-gradient halos on the border edge
 *   Layer 2 — Inner spotlight: two stacked radial-gradient orbs following cursor X
 *
 * Props:
 *   children   — button label (string or JSX)
 *   href       — link destination (renders <a>); falls back to <button> if omitted
 *   to         — react-router <Link> destination (takes priority over href)
 *   showArrow  — show trailing arrow icon (default true)
 *   className  — extra classes on the outer wrapper
 *   faceClass  — extra classes on the inner button face
 *   style      — inline styles on the outer wrapper
 *   ...rest    — forwarded to the clickable element
 */
import { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './SpotlightButton.css'

export default function SpotlightButton({
  children = 'See in Action',
  href,
  to,
  showArrow = true,
  className = '',
  faceClass = '',
  style,
  ...rest
}) {
  const spotlightRef = useRef(null)
  const haloRef = useRef(null)
  const wrapperRef = useRef(null)

  /* ── Mouse handlers — direct DOM writes for 60fps ── */
  const handleMouseMove = useCallback((e) => {
    const wrapper = wrapperRef.current
    const spotlight = spotlightRef.current
    const halo = haloRef.current
    if (!wrapper || !spotlight) return

    const rect = wrapper.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = (x / rect.width) * 100

    // Move inner spotlight orbs
    spotlight.style.transform = `translateX(${x}px)`
    // Move outer halo via left %
    if (halo) halo.style.left = `${pct}%`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const wrapper = wrapperRef.current
    const spotlight = spotlightRef.current
    const halo = haloRef.current
    if (!wrapper || !spotlight) return

    // Snap back to center
    const rect = wrapper.getBoundingClientRect()
    spotlight.style.transform = `translateX(${rect.width / 2}px)`
    if (halo) halo.style.left = '50%'
  }, [])

  /* ── Determine tag type ── */
  const Tag = to ? Link : href ? 'a' : 'button'
  const linkProps = to ? { to } : href ? { href } : { type: 'button' }

  return (
    <span
      ref={wrapperRef}
      className={`spotlight-btn ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 0 — outer ambient halo (spills beyond button) */}
      <span ref={haloRef} className="spotlight-btn__halo" aria-hidden="true" />

      {/* Layer 1 — rotating border glow */}
      <span className="spotlight-btn__border-glow" aria-hidden="true" />
      <span
        className="spotlight-btn__border-glow spotlight-btn__border-glow--flipped"
        aria-hidden="true"
      />

      {/* The button face */}
      <Tag
        className={`spotlight-btn__face spotlight-btn__face--warm ${faceClass}`}
        {...linkProps}
        {...rest}
      >
        {children}
        {showArrow && (
          <svg
            className="spotlight-btn__arrow"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3.333 8h9.334M8.667 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Tag>

      {/* Layer 3 — cursor-tracking spotlight orbs (ABOVE the face) */}
      <span ref={spotlightRef} className="spotlight-btn__spotlight" aria-hidden="true">
        <span className="spotlight-btn__spot-ambient" />
        <span className="spotlight-btn__spot-wide" />
        <span className="spotlight-btn__spot-tight" />
      </span>
    </span>
  )
}
