/**
 * ShimmerButton — A Link-based button with a Huly-style shimmer / light-sweep
 * effect on hover. The shimmer is a real DOM <span> so it works reliably
 * regardless of wrapper transforms, framer-motion, or inline styles.
 */
import { Link } from 'react-router-dom'
import './ShimmerButton.css'

export default function ShimmerButton({
  to,
  children,
  className = '',
  style = {},
  ...props
}) {
  return (
    <Link
      to={to}
      className={`btn btn-primary shimmer-btn ${className}`}
      style={style}
      {...props}
    >
      <span className="shimmer-btn__content">{children}</span>
      <span className="shimmer-btn__glint" aria-hidden="true" />
    </Link>
  )
}

