import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import { ArrowUpRight, Smartphone } from 'lucide-react'

export default function Portfolio() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="What We've Built"
        subtitle="Real projects. Real results. Here's a look at the custom software solutions we've delivered for businesses ready to modernize."
        blobColor="accent"
      />

      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto' }}>
          <span className="badge badge--accent">Portfolio</span>
          <h2 className="display display--gradient heading-md">Every Project Starts With a Problem Worth Solving</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            We don't take on projects just to stay busy. Every build started with a real business challenge — and ended with a custom solution that moved the needle. As our portfolio grows, this page will continue to expand.
          </p>
        </div>
      </section>

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 400, height: 400, top: '10%', right: '-10%' }} />
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--blue">Case Study</span>
            <h2 className="display display--gradient heading-lg">Project Spotlight</h2>
          </div>
          <div className="card card--glass gradient-border reveal" style={{ padding: '40px 36px' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <span className="spotlight-tag spotlight-tag--industry">HVAC / Home Services</span>
              <span className="spotlight-tag spotlight-tag--service">Mobile Application</span>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
              General Heating & Air — Custom Mobile Application
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="spotlight-grid">
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Problem</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                  General Heating & Air relied on phone calls and manual scheduling to manage service requests. There was no easy way for homeowners to request service, check appointment status, or communicate with the team — leading to missed calls, scheduling confusion, and lost revenue.
                </p>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Solution</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                  Enigma built a custom mobile application that gives customers a direct, branded way to request service, schedule appointments, and track job status — all from their phone. The app integrates with the company's internal systems so the team sees every request in real time.
                </p>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Outcome</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Results pending post-launch — expected improvements in service bookings, reduced missed calls, and improved customer satisfaction.
                </p>
              </div>
              <div className="preview-box" style={{ height: 400 }}>
                <Smartphone size={64} style={{ color: 'var(--border-default)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--sm theme-light">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 12,
          }}>
            <ArrowUpRight size={24} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontSize: 22, color: 'var(--text-dark)' }}>More Projects in the Pipeline</h3>
          </div>
          <p style={{ color: 'var(--text-body)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            We're a young company building momentum fast. New case studies are added as projects launch and results come in. If you want to be our next success story, let's talk.
          </p>
        </div>
      </section>

      <CTABlock
        headline="Want Results Like These? Let's Build Yours."
        text="Every project on this page started with a conversation. Tell us about your business, and we'll show you what's possible."
        buttonText="Start Your Project"
      />

      <style>{`
        @media (max-width: 768px) {
          .spotlight-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
