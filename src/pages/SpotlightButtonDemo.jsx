/**
 * SpotlightButtonDemo — Showcase page for the SpotlightButton component
 * on a dark background so the glow effect is clearly visible.
 */
import SpotlightButton from '../components/SpotlightButton'

export default function SpotlightButtonDemo() {
  return (
    <section className="spotlight-demo">
      <h1 className="spotlight-demo__title">SpotlightButton Demo</h1>
      <p className="spotlight-demo__subtitle">
        Move your cursor across the buttons to see the tracking glow effect.
      </p>

      {/* Row 1 — default */}
      <div className="spotlight-demo__row">
        <SpotlightButton href="#demo">See in Action</SpotlightButton>
      </div>

      {/* Row 2 — variants */}
      <div className="spotlight-demo__row">
        <SpotlightButton href="#demo">Get Started</SpotlightButton>

        <SpotlightButton href="#demo" showArrow={false}>
          No Arrow
        </SpotlightButton>

        <SpotlightButton to="/contact">
          Contact Us
        </SpotlightButton>
      </div>
    </section>
  )
}
