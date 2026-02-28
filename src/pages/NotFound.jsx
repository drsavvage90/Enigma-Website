import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { ArrowLeft } from 'lucide-react'
import MagneticButton from '../components/hero/MagneticButton'

export default function NotFound() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="page-header noise-overlay" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-30%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p style={{
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 16,
          }}>
            404
          </p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, marginBottom: 16 }}>
            Page Not Found
          </h1>
          <p className="subtitle" style={{ marginBottom: 32 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <MagneticButton>
            <Link to="/" className="btn btn-primary btn-lg">
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
