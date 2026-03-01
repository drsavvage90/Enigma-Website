import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const serviceLinks = [
  { to: '/ai-systems', label: 'Custom AI Systems' },
  { to: '/mobile-apps', label: 'Mobile Applications' },
  { to: '/web-apps', label: 'Web Applications' },
  { to: '/vault', label: 'Vault by Enigma' },
]

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/industries', label: 'Industries' },
  { to: '/portfolio', label: 'Portfolio' },
]

const supportLinks = [
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.footer-reveal').forEach(child => child.classList.add('visible'))
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="noise-overlay" style={{
      padding: '80px 0 40px',
      background: '#0A0A10',
      position: 'relative',
    }}>
      {/* Gradient divider */}
      <div className="footer-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column — Logo + description + location */}
          <div className="footer-reveal">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24, textDecoration: 'none' }}>
              <div className="footer-logo-icon" style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 22,
                color: '#fff',
                boxShadow: '0 0 30px rgba(255, 159, 65, 0.15)',
                flexShrink: 0,
              }}>E</div>
              <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.01em' }}>
                Enigma Software Systems
              </span>
            </Link>

            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
              Custom AI systems, mobile applications, and web applications purpose-built for your business.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16 }}>
              <MapPin size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 }}>
                Based in Southern Ohio
              </span>
            </div>

            <p style={{ color: 'var(--text-dim)', fontSize: 13, marginTop: 20, fontStyle: 'italic' }}>
              Made with precision by Enigma
            </p>
          </div>

          {/* Services */}
          <div className="footer-reveal">
            <h4 style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-dim)',
              marginBottom: 20,
            }}>
              Services
            </h4>
            {serviceLinks.map(link => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="footer-reveal">
            <h4 style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-dim)',
              marginBottom: 20,
            }}>
              Company
            </h4>
            {companyLinks.map(link => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="footer-reveal">
            <h4 style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-dim)',
              marginBottom: 20,
            }}>
              Support
            </h4>
            {supportLinks.map(link => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: 60,
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          position: 'relative',
        }}>
          <div className="footer-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
          <p style={{ fontSize: 13, color: 'var(--text-dim)' }}>
            &copy; {new Date().getFullYear()} Enigma Software Systems. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
