import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import { ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="What We've Built"
        subtitle="Real projects. Real business problems solved. Here's a look at the custom software we've delivered."
        blobColor="accent"
        primaryCta={{ text: 'Start Your Project', to: '/contact' }}
        secondaryCta={{ text: 'Explore Our Services', to: '/ai-systems' }}
      />

      {/* ═══ INTRO + COLLAGE ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <span className="badge badge--accent">Portfolio</span>
              <h2 className="display display--gradient heading-md">Every Project Starts With a Problem Worth Solving</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
                We don't take on projects just to stay busy. Every build started with a real business challenge — and ended with a custom solution that moved the needle. From mobile apps and AI platforms to client dashboards and chat assistants, the work we do spans industries and technologies.
              </p>
            </div>
            <div className="portfolio-collage-image">
              <img loading="lazy"
                src="/images/portfolio-collage.svg"
                alt="Grid of project mockups showing mobile apps, web dashboards, AI platforms, and chat assistants"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY — General Heating & Air ═══ */}
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
            <div className="spotlight-grid">
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Problem</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                  Imagine relying on phone calls to manage every service request. That's where General Heating & Air was — missed calls, scheduling confusion, and no way for homeowners to request service, check status, or communicate with the team outside business hours. Every missed call was a potential lost customer.
                </p>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Solution</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                  We built a custom mobile app that puts service requests, appointment scheduling, and job tracking directly in the homeowner's hands. Customers open the app, request service in under 30 seconds, pick a time that works, and track status in real time. Every request flows into the team's systems instantly.
                </p>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Experience</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Built in 6 weeks from discovery call to App Store submission. Service requests that used to require a phone call now happen with a few taps — on the customer's schedule, not the office's.
                </p>
              </div>
              <div className="portfolio-spotlight-mockup">
                <img loading="lazy"
                  src="/images/spotlight-gha.svg"
                  alt="General Heating & Air mobile app mockup showing service requests and scheduling"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MORE WORK — visual showcase ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center' }}>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 40px rgba(0,0,0,0.3)' }}>
              <img loading="lazy"
                src="/images/aisystems-chatbots.webp"
                alt="AI chatbot assistant interfaces on mobile devices"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </TiltCard>
            <div>
              <span className="badge badge--accent">Also in Development</span>
              <h3 className="display display--gradient heading-sm" style={{ marginBottom: 12 }}>AI Chatbots, Client Portals, and More</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Beyond mobile apps, we're building AI-powered chat assistants, branded client portals, and internal dashboards for businesses across HVAC, healthcare, legal, and professional services. New case studies are added as projects launch.
              </p>
              <Link to="/contact" className="link-arrow" style={{ fontSize: 16 }}>
                Want to be our next case study? <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Want to Be Our Next Success Story?"
        text="Every project on this page started with a conversation. Tell us about your business and we'll show you what's possible."
        buttonText="Start Your Project"
      />
    </div>
  )
}
