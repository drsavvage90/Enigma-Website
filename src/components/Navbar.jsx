import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Smartphone, Globe, Users, Workflow, Building2, HelpCircle } from 'lucide-react'
import MagneticButton from './hero/MagneticButton'

const serviceLinks = [
  { to: '/ai-systems', label: 'AI Systems', icon: Brain },
  { to: '/mobile-apps', label: 'Mobile Apps', icon: Smartphone },
  { to: '/web-apps', label: 'Web Apps', icon: Globe },
]

const aboutLinks = [
  { to: '/about', label: 'About Us', icon: Users },
  { to: '/how-we-work', label: 'Our Process', icon: Workflow },
  { to: '/industries', label: 'Who We Serve', icon: Building2 },
  { to: '/faq', label: 'FAQ', icon: HelpCircle },
]

const navLinks = [
  { to: '/vault', label: 'Vault', title: 'Vault — private AI workspace for teams' },
  { type: 'dropdown', key: 'services', label: 'Services', children: serviceLinks },
  { type: 'dropdown', key: 'about', label: 'About', children: aboutLinks },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  // { to: '/portfolio', label: 'Portfolio' }, // Hidden temporarily
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // 'services' | 'about' | null
  const [mobileDropdowns, setMobileDropdowns] = useState({})
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRefs = useRef({})
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* eslint-disable react-hooks/set-state-in-effect -- close menu on route change */
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleClick = (e) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown]
        if (ref && !ref.contains(e.target)) {
          setOpenDropdown(null)
        }
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [openDropdown])

  const handleDropdownEnter = (key) => {
    clearTimeout(timeoutRef.current)
    setOpenDropdown(key)
  }
  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const isDropdownActive = (children) => children.some(c => c.to === location.pathname)

  return (
    <nav aria-label="Main navigation" style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 64,
      background: scrolled ? 'rgba(5, 5, 8, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      zIndex: 1000,
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
    }}>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo — links to homepage */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img src="/logo.webp" alt="Enigma Logo" width={32} height={32} style={{
            borderRadius: 8,
            objectFit: 'cover'
          }} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', color: '#fff' }}>
            Enigma
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {navLinks.map((link) => {
            if (link.type === 'dropdown') {
              const isOpen = openDropdown === link.key
              const isActive = isDropdownActive(link.children)
              return (
                <div
                  key={link.key}
                  ref={el => dropdownRefs.current[link.key] = el}
                  onMouseEnter={() => handleDropdownEnter(link.key)}
                  onMouseLeave={handleDropdownLeave}
                  style={{ position: 'relative' }}
                >
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : link.key)}
                    aria-expanded={isOpen}
                    aria-label={`${link.label} menu`}
                    className={`nav-dropdown-btn${isActive ? ' nav-dropdown-btn--active' : ''}`}
                  >
                    {link.label}
                    <ChevronDown size={13} style={{
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      marginLeft: 2,
                    }} />
                  </button>
                  <div
                    className={`dropdown-panel ${isOpen ? 'open' : ''}`}
                    style={{
                      position: 'absolute', top: '100%', left: '50%',
                      marginLeft: -100, paddingTop: 10, transformOrigin: 'top center',
                    }}
                  >
                    <div style={{
                      background: 'rgba(12, 12, 20, 0.97)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 12, padding: '6px 0', minWidth: 200,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                    }}>
                      {link.children.map(child => {
                        const Icon = child.icon
                        const childActive = location.pathname === child.to
                        return (
                          <Link
                            key={child.to}
                            to={child.to}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 12,
                              padding: '11px 20px', fontSize: 14, fontWeight: 500,
                              color: childActive ? 'var(--accent)' : 'var(--text-muted)',
                              transition: 'color 0.2s, background 0.2s',
                              background: childActive ? 'rgba(255, 159, 65, 0.05)' : 'transparent',
                              borderLeft: childActive ? '2px solid var(--accent)' : '2px solid transparent',
                            }}
                            onMouseEnter={e => { if (!childActive) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' } }}
                            onMouseLeave={e => { if (!childActive) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' } }}
                            {...(childActive && { 'aria-current': 'page' })}
                          >
                            <Icon size={16} style={{ opacity: 0.6, flexShrink: 0 }} />
                            {child.label}
                          </Link>
                        )
                      })}
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
                {...(isActive && { 'aria-current': 'page' })}
                {...(link.title && { title: link.title })}
              >
                {link.label}
              </Link>
            )
          })}
          <MagneticButton style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '9px 22px', fontSize: 13 }}>
              Contact Us
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', color: '#fff', padding: 8,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile backdrop */}
      <div style={{
        position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease', zIndex: 998,
      }} onClick={() => setMobileOpen(false)} />

      {/* Mobile sidebar */}
      <div style={{
        position: 'fixed', top: 64, right: 0, bottom: 0,
        width: 300, maxWidth: '85vw',
        background: 'rgba(10, 10, 16, 0.98)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 0', zIndex: 999, overflowY: 'auto',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Logo at top of sidebar */}
        <div style={{ padding: '0 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/logo.webp" alt="Enigma Logo" width={28} height={28} style={{
              borderRadius: 7,
              objectFit: 'cover'
            }} />
            <span style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Enigma</span>
          </Link>
        </div>

        {navLinks.map((link) => {
          if (link.type === 'dropdown') {
            const isOpen = mobileDropdowns[link.key]
            const isActive = isDropdownActive(link.children)
            return (
              <div key={link.key + '-mobile'}>
                <button
                  onClick={() => toggleMobileDropdown(link.key)}
                  aria-expanded={isOpen}
                  aria-label={`${link.label} menu`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '14px 24px', fontSize: 15, fontWeight: 500,
                    color: isActive ? 'var(--accent)' : '#fff',
                    background: 'none', border: 'none', textAlign: 'left',
                    fontFamily: 'inherit', cursor: 'pointer',
                  }}
                >
                  {link.label}
                  <ChevronDown size={16} style={{
                    transition: 'transform 0.3s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    color: 'var(--text-dim)',
                  }} />
                </button>
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? 300 : 0,
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                  {link.children.map(child => {
                    const Icon = child.icon
                    const childActive = location.pathname === child.to
                    return (
                      <Link key={child.to} to={child.to} style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '12px 24px 12px 32px', fontSize: 14, fontWeight: 500,
                        color: childActive ? 'var(--accent)' : 'var(--text-muted)',
                        borderLeft: childActive ? '2px solid var(--accent)' : '2px solid transparent',
                      }}>
                        <Icon size={15} style={{ opacity: 0.5, flexShrink: 0 }} />
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          }

          const isActive = location.pathname === link.to
          return (
            <Link key={link.to} to={link.to} style={{
              display: 'block', padding: '14px 24px', fontSize: 15, fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#fff',
              borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
            }}
              {...(isActive && { 'aria-current': 'page' })}
              {...(link.title && { title: link.title })}
            >
              {link.label}
            </Link>
          )
        })}

        <div style={{ padding: '20px 24px 0' }}>
          <Link to="/contact" className="btn btn-primary" style={{
            width: '100%', justifyContent: 'center', padding: '12px 24px', fontSize: 14,
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
