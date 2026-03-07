import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { motion } from 'framer-motion'
import IconBox from '../components/IconBox'
import PageHeader from '../components/PageHeader'
import MagneticButton from '../components/hero/MagneticButton'
import { Mail, Clock, Check, Calendar, Lightbulb, Sparkles, MapPin } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const expectSteps = [
  { icon: Check, text: "We review your inquiry within one business day." },
  { icon: Calendar, text: "We schedule a free discovery call to learn about your business and the problem you're trying to solve." },
  { icon: Lightbulb, text: "We come back with a recommendation: what we'd build, how long it would take, and what it would cost." },
]

export default function Contact() {
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = (formData) => {
    const errors = {}
    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    if (!name || name.length < 2) errors.name = 'Please enter your full name.'
    if (!email || !EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const errors = validate(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setSubmitting(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true)
          // Track conversion event for analytics
          if (window.gtag) window.gtag('event', 'generate_lead', { event_category: 'contact', event_label: formData.get('service') })
          if (window.plausible) window.plausible('Contact Form Submission')
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setSubmitting(false))
  }

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Let's Build Something Together"
        subtitle="Tell us what's not working in your business. We'll tell you if we can help."
        blobColor="accent"
      />

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 350, height: 350, top: '15%', right: '-8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">
            {/* ═══ FORM ═══ */}
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
                    We'll be in touch within 24 hours to schedule a discovery call. If your project is urgent, email us directly.
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
                <>
                  {/* Reassurance line above the form */}
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: 14,
                    marginBottom: 20,
                    padding: '12px 16px',
                    borderRadius: 10,
                    background: 'rgba(255, 159, 65, 0.06)',
                    border: '1px solid rgba(255, 159, 65, 0.12)',
                    lineHeight: 1.6,
                  }}>
                    Most people hear back within 24 hours.
                  </p>
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} aria-describedby={error ? 'form-error' : undefined}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                      <label>Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                    </p>
                    {error && (
                      <div id="form-error" role="alert" style={{ background: 'rgba(255, 80, 80, 0.1)', border: '1px solid rgba(255, 80, 80, 0.3)', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
                        <p style={{ color: '#ff5050', fontSize: 14 }}>Something went wrong. Please try again or email us directly at hello@enigmasoftwaresystems.com.</p>
                      </div>
                    )}
                    <div className="grid-2">
                      <div className="form-group--enhanced">
                        <input type="text" name="name" placeholder=" " required id="contact-name" aria-invalid={!!fieldErrors.name || undefined} aria-describedby={fieldErrors.name ? 'name-error' : undefined} />
                        <label htmlFor="contact-name">Full Name *</label>
                        {fieldErrors.name && <p id="name-error" role="alert" style={{ color: '#ff5050', fontSize: 13, marginTop: 4 }}>{fieldErrors.name}</p>}
                      </div>
                      <div className="form-group--enhanced">
                        <input type="email" name="email" placeholder=" " required id="contact-email" aria-invalid={!!fieldErrors.email || undefined} aria-describedby={fieldErrors.email ? 'email-error' : undefined} />
                        <label htmlFor="contact-email">Email Address *</label>
                        {fieldErrors.email && <p id="email-error" role="alert" style={{ color: '#ff5050', fontSize: 13, marginTop: 4 }}>{fieldErrors.email}</p>}
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
                      <label htmlFor="contact-project">Briefly describe your project (optional)</label>
                    </div>
                    <MagneticButton style={{ width: '100%', marginTop: 12 }}>
                      <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.6 : 1 }}>
                        {submitting ? 'Sending…' : "Send | We'll Reply Within 24 Hours"}
                      </button>
                    </MagneticButton>
                  </form>
                </>
              )}
            </div>

            {/* ═══ RIGHT COLUMN ═══ */}
            <div className="reveal">
              {/* Contact info — removed fake phone number */}
              <div style={{ marginBottom: 40 }}>
                {[
                  { icon: Mail, label: 'Email Us', value: 'hello@enigmasoftwaresystems.com' },
                  { icon: MapPin, label: 'Location', value: 'Southern Ohio · Serving clients nationwide' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
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

              {/* What Happens Next */}
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
    </div>
  )
}
