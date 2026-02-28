import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { to: '/ai-systems', label: 'AI Systems' },
      { to: '/mobile-apps', label: 'Mobile Apps' },
      { to: '/web-apps', label: 'Web Apps' },
      { to: '/vault', label: 'Vault by Enigma' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/how-we-work', label: 'How We Work' },
      { to: '/industries', label: 'Industries' },
      { to: '/portfolio', label: 'Portfolio' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
    ],
  },
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
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
        }}>
          {/* Brand */}
          <div className="footer-reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div className="footer-logo-icon" style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 18,
                color: '#fff',
              }}>E</div>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>
                Enigma Software Systems
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Custom AI systems, mobile applications, and web applications purpose-built for your business.
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: 13, marginTop: 24, fontStyle: 'italic' }}>
              Made with precision by Enigma
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map(group => (
            <div key={group.title} className="footer-reveal">
              <h4 style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-dim)',
                marginBottom: 20,
              }}>
                {group.title}
              </h4>
              {group.links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: 'block',
                    fontSize: 14,
                    color: 'var(--text-muted)',
                    padding: '7px 0',
                    transition: 'color 0.2s, padding-left 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.paddingLeft = '0' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
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
            <Link to="/privacy-policy" style={{ fontSize: 13, color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-muted)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ fontSize: 13, color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-muted)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
