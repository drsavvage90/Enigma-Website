import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { ArrowLeft, Brain, Smartphone, Globe, HelpCircle, Mail } from 'lucide-react'
import MagneticButton from '../components/hero/MagneticButton'

const quickLinks = [
  { to: '/ai-systems', label: 'AI Systems', icon: Brain },
  { to: '/mobile-apps', label: 'Mobile Apps', icon: Smartphone },
  { to: '/web-apps', label: 'Web Apps', icon: Globe },
  { to: '/faq', label: 'FAQ', icon: HelpCircle },
  { to: '/contact', label: 'Contact Us', icon: Mail },
]

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
          <p className="subtitle" style={{ marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            The page you're looking for doesn't exist or has been moved. Try one of these instead:
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 32,
          }}>
            {quickLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="card card--glass"
                style={{
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                <Icon size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {label}
              </Link>
            ))}
          </div>

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
