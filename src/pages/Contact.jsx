import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { motion } from 'framer-motion'
import IconBox from '../components/IconBox'
import PageHeader from '../components/PageHeader'
import MagneticButton from '../components/hero/MagneticButton'
import { Mail, Phone, Clock, Check, Calendar, Lightbulb, Sparkles } from 'lucide-react'

const expectSteps = [
  { icon: Check, text: "We receive your inquiry and review the details within one business day." },
  { icon: Calendar, text: "We schedule a discovery call to learn about your business, your goals, and the problem you're trying to solve." },
  { icon: Lightbulb, text: "We come back with a recommendation — a clear plan for what we'd build, how long it would take, and what it would cost." },
]

export default function Contact() {
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }

  return (
    <div ref={ref}>
      {/* Hero — Animated page header (#7) */}
      <PageHeader
        title="Let's Build Something Together"
        subtitle="Whether you have a fully formed idea or just a problem that needs solving, we'd love to hear about it. No pressure. No generic pitch. Just a real conversation."
        blobColor="accent"
      />

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 350, height: 350, top: '15%', right: '-8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 64,
            alignItems: 'start',
          }} className="contact-grid">
            {/* Form — Enhanced floating labels (#6) */}
            <div className="reveal">
              {submitted ? (
                <div className="card card--glass form-success" style={{ textAlign: 'center', padding: 48 }}>
                  <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(255, 159, 65,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 0 40px rgba(255, 159, 65,0.15)',
                  }}>
                    <Sparkles size={32} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 style={{ fontSize: 24, marginBottom: 12, fontWeight: 700 }}>Thanks for reaching out!</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
                    We'll be in touch within 48 hours to schedule a discovery call. If your project is urgent, feel free to call or email us directly.
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      height: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #FF9F41, #FF7733)',
                      margin: '24px auto 0',
                    }}
                  />
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                    <label>Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                  </p>
                  {error && (
                    <div style={{ background: 'rgba(255, 80, 80, 0.1)', border: '1px solid rgba(255, 80, 80, 0.3)', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
                      <p style={{ color: '#ff5050', fontSize: 14 }}>Something went wrong. Please try again or email us directly at hello@enigmasoftwaresystems.com.</p>
                    </div>
                  )}
                  <div className="grid-2">
                    <div className="form-group--enhanced">
                      <input type="text" name="name" placeholder=" " required id="contact-name" />
                      <label htmlFor="contact-name">Full Name *</label>
                    </div>
                    <div className="form-group--enhanced">
                      <input type="email" name="email" placeholder=" " required id="contact-email" />
                      <label htmlFor="contact-email">Email Address *</label>
                    </div>
                  </div>
                  <div className="grid-2" style={{ marginTop: 20 }}>
                    <div className="form-group--enhanced">
                      <input type="tel" name="phone" placeholder=" " id="contact-phone" />
                      <label htmlFor="contact-phone">Phone Number</label>
                    </div>
                    <div className="form-group--enhanced">
                      <input type="text" name="company" placeholder=" " id="contact-company" />
                      <label htmlFor="contact-company">Company Name</label>
                    </div>
                  </div>
                  <div className="form-group--enhanced" style={{ marginTop: 20 }}>
                    <select name="service" required defaultValue="" id="contact-service">
                      <option value="" disabled>Select a service...</option>
                      <option>Custom AI Systems</option>
                      <option>Mobile Applications</option>
                      <option>Web Applications</option>
                      <option>Not Sure Yet, Let's Talk</option>
                      <option>Other</option>
                    </select>
                    <label htmlFor="contact-service">Service Interest *</label>
                  </div>
                  <div className="form-group--enhanced" style={{ marginTop: 20 }}>
                    <textarea name="project" placeholder=" " id="contact-project" />
                    <label htmlFor="contact-project">Tell Us About Your Project</label>
                  </div>
                  <MagneticButton style={{ width: '100%', marginTop: 12 }}>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Send My Inquiry
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>

            {/* Right column */}
            <div className="reveal">
              {/* Contact info */}
              <div style={{ marginBottom: 40 }}>
                {[
                  { icon: Mail, label: 'Email Us', value: 'hello@enigmasoftwaresystems.com' },
                  { icon: Phone, label: 'Call Us', value: '(555) 123-4567' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24–48 hours' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <IconBox icon={item.icon} size={40} />
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-light)' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="card card--glass">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>What Happens Next?</h3>
                {expectSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, marginBottom: i < expectSteps.length - 1 ? 20 : 0, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: 'rgba(255, 159, 65,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}>{i + 1}</div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}
