import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterCTA({
  headline = 'Get Free Software & AI Insights',
  text = "No spam — just practical advice on using technology to grow your business. Delivered monthly.",
}) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitting(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'newsletter',
        email: email.trim(),
      }).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true)
          if (window.gtag) window.gtag('event', 'sign_up', { event_category: 'newsletter' })
          if (window.plausible) window.plausible('Newsletter Signup')
        } else setError('Something went wrong. Please try again.')
      })
      .catch(() => setError('Something went wrong. Please try again.'))
      .finally(() => setSubmitting(false))
  }

  return (
    <section className="section theme-darker" style={{ position: 'relative' }}>
      <div className="container">
        <div className="card card--glass reveal" style={{
          maxWidth: 600,
          margin: '0 auto',
          padding: 'clamp(28px, 4vw, 48px)',
          textAlign: 'center',
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: 'rgba(255, 159, 65, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Mail size={22} style={{ color: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 700, marginBottom: 8 }}>
            {headline}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
            {text}
          </p>

          {submitted ? (
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 15 }}>
              You're in! Check your inbox for a confirmation.
            </p>
          ) : (
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                <label>Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
              </p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                aria-label="Email address"
                aria-invalid={!!error || undefined}
                style={{
                  flex: '1 1 220px',
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: error ? '1px solid rgba(255, 80, 80, 0.5)' : '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ padding: '12px 20px', fontSize: 14, flexShrink: 0, opacity: submitting ? 0.6 : 1 }}
              >
                {submitting ? 'Subscribing…' : <>Subscribe <ArrowRight size={14} /></>}
              </button>
              {error && (
                <p role="alert" style={{ width: '100%', color: '#ff5050', fontSize: 13, marginTop: 4 }}>{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
