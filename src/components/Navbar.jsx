import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import MagneticButton from './hero/MagneticButton'

const serviceLinks = [
  { to: '/ai-systems', label: 'AI Systems' },
  { to: '/mobile-apps', label: 'Mobile Apps' },
  { to: '/web-apps', label: 'Web Apps' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { type: 'dropdown', label: 'Services', children: serviceLinks },
  { to: '/how-we-work', label: 'Our Process' },
  { to: '/industries', label: 'Industries' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/faq', label: 'FAQ' },
]

const servicePaths = serviceLinks.map(l => l.to)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleDropdownEnter = () => {
    clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }
  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const isServiceActive = servicePaths.includes(location.pathname)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      background: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      zIndex: 1000,
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
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
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', color: '#fff' }}>
            Enigma
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks.map((link) => {
            if (link.type === 'dropdown') {
              return (
                <div
                  key="services"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  style={{ position: 'relative' }}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: 0,
                      fontFamily: 'inherit',
                      fontSize: 14,
                      fontWeight: 500,
                      color: isServiceActive ? '#fff' : 'var(--text-muted)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => { if (!isServiceActive) e.currentTarget.style.color = 'var(--text-muted)' }}
                  >
                    {link.label}
                    <ChevronDown size={14} style={{
                      transition: 'transform 0.2s',
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }} />
                  </button>
                  <div
                    className={`dropdown-panel ${dropdownOpen ? 'open' : ''}`}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      marginLeft: -90,
                      paddingTop: 12,
                      transformOrigin: 'top center',
                    }}
                  >
                    <div style={{
                      background: 'rgba(16, 16, 24, 0.95)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 12,
                      padding: '8px 0',
                      minWidth: 180,
                      boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                    }}>
                      {link.children.map(child => (
                        <Link
                          key={child.to}
                          to={child.to}
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            fontSize: 14,
                            fontWeight: 500,
                            color: location.pathname === child.to ? 'var(--accent)' : 'var(--text-muted)',
                            transition: 'color 0.2s, background 0.2s',
                          }}
                          onMouseEnter={e => {
                            e.target.style.color = '#fff'
                            e.target.style.background = 'rgba(255,255,255,0.04)'
                          }}
                          onMouseLeave={e => {
                            e.target.style.color = location.pathname === child.to ? 'var(--accent)' : 'var(--text-muted)'
                            e.target.style.background = 'transparent'
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link${isActive ? ' nav-link--active' : ''}`}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--text-muted)' }}
              >
                {link.label}
              </Link>
            )
          })}
          <MagneticButton>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: 13 }}>
              Contact Us
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: '#fff',
            padding: 8,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-deep)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '32px 24px',
          zIndex: 999,
          overflowY: 'auto',
        }}>
          {navLinks.map((link, i) => {
            if (link.type === 'dropdown') {
              return (
                <div key="services-mobile">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '16px 0',
                      fontSize: 18,
                      fontWeight: 500,
                      color: isServiceActive ? 'var(--accent)' : '#fff',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid var(--border-subtle)',
                      opacity: 0,
                      animation: `fadeSlideIn 0.3s ${i * 50}ms forwards`,
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                    <ChevronDown size={18} style={{
                      transition: 'transform 0.3s',
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                      color: 'var(--text-dim)',
                    }} />
                  </button>
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: mobileServicesOpen ? 200 : 0,
                    opacity: mobileServicesOpen ? 1 : 0,
                    transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    {link.children.map(child => (
                      <Link key={child.to} to={child.to} style={{
                        display: 'block',
                        padding: '12px 0 12px 24px',
                        fontSize: 16,
                        fontWeight: 500,
                        color: location.pathname === child.to ? 'var(--accent)' : 'var(--text-muted)',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                      }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <Link key={link.to} to={link.to} style={{
                display: 'block',
                padding: '16px 0',
                fontSize: 18,
                fontWeight: 500,
                color: location.pathname === link.to ? 'var(--accent)' : '#fff',
                borderBottom: '1px solid var(--border-subtle)',
                opacity: 0,
                animation: `fadeSlideIn 0.3s ${i * 50}ms forwards`,
              }}>
                {link.label}
              </Link>
            )
          })}
          <Link to="/contact" className="btn btn-primary" style={{
            marginTop: 24,
            width: '100%',
            justifyContent: 'center',
            opacity: 0,
            animation: `fadeSlideIn 0.3s ${navLinks.length * 50}ms forwards`,
          }}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
