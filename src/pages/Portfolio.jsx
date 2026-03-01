import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react'

export default function Portfolio() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="What We've Built"
        subtitle="Real projects. Real results. Here's a look at the custom software solutions we've delivered for businesses ready to modernize."
        blobColor="accent"
        primaryCta={{ text: 'Start Your Project', to: '/contact' }}
        secondaryCta={{ text: 'Explore Our Services', to: '/ai-systems' }}
      />

      {/* ═══ Every Project Starts with a Problem — with collage image ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <span className="badge badge--accent">Portfolio</span>
              <h2 className="display display--gradient heading-md">Every Project Starts With a Problem Worth Solving</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16, marginBottom: 16 }}>
                We don't take on projects just to stay busy. Every build started with a real business challenge — and ended with a custom solution that moved the needle. From mobile apps and AI platforms to client dashboards and chat assistants, the work we do spans industries and technologies.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                As our portfolio grows, this page will continue to expand. What you see here is just the beginning.
              </p>
            </div>
            <div className="portfolio-collage-image">
              <img
                src="/images/portfolio-collage.svg"
                alt="Grid of project mockups showing mobile apps, web dashboards, AI platforms, and chat assistants"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Project Spotlight — General Heating & Air ═══ */}
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
              {/* Project mockup — replace with final screenshots when available */}
              <div className="portfolio-spotlight-mockup">
                <img
                  src="/images/spotlight-gha.svg"
                  alt="General Heating & Air mobile app mockup showing service requests and scheduling"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Southern Ohio Mission Statement ═══ */}
      <section className="section--sm theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 400, height: 300, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container reveal" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <MapPin size={20} style={{ color: 'var(--accent)' }} />
            <span className="badge badge--accent">Southern Ohio</span>
          </div>
          <h2 className="display display--gradient heading-md" style={{ marginBottom: 16 }}>
            Bringing Modern Technology to Southern Ohio
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
            Southern Ohio businesses deserve the same caliber of technology that companies in major metros take for granted. We're here to change that. Enigma is leading the next wave of technological advancement in our region — building custom AI systems, mobile applications, and web platforms for the businesses that power our local economy.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
            From HVAC companies and healthcare practices to construction firms and local retailers, we're proving that world-class software doesn't have to come from Silicon Valley. It can come from right here — built by people who understand your market, your customers, and your community.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      {/* ═══ More Projects Coming ═══ */}
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
    </div>
  )
}
