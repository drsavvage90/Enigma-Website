import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Hammer, Zap, MessageCircle, Users,
  BarChart3, Code2, Scale, Megaphone,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   CULTURE VALUES — customer-centric framing
   ═══════════════════════════════════════════════════ */
const values = [
  {
    icon: Hammer,
    title: "Builder's Mentality",
    text: "We identify the problem, design the solution, and start building. Every team member is a maker, not a meeting scheduler.",
  },
  {
    icon: Zap,
    title: 'Small Team, Fast Decisions',
    text: "No bureaucracy. No layers of approval. Your project never stalls waiting for someone's signature.",
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    text: "You'll always know where your project stands, what's working, and what needs to change. No runaround.",
  },
  {
    icon: Users,
    title: 'Partners, Not Vendors',
    text: "We invest in understanding your business because your success is our success. We don't disappear after launch.",
  },
]

/* ═══════════════════════════════════════════════════
   TEAM EXPERTISE — what matters to the customer
   ═══════════════════════════════════════════════════ */
const expertise = [
  { icon: BarChart3, label: 'Business Strategy & Consulting' },
  { icon: Megaphone, label: 'Marketing' },
  { icon: Code2, label: 'Full-Stack Software Development' },
  { icon: Scale, label: 'Legal Expertise & Compliance' },
]


export default function About() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Built Different. On Purpose."
        subtitle="We're a team of builders, strategists, and problem-solvers creating custom software for businesses that deserve better than off-the-shelf."
        blobColor="accent"
        primaryCta={{ text: 'Contact Us', to: '/contact' }}
        secondaryCta={{ text: 'See Our Work', to: '/portfolio' }}
        image="/images/hero-about.svg"
        imageAlt="The Enigma Software Systems team"
        imageLayout="image-right"
      />

      {/* ═══ STORY + LEADERSHIP (merged into one section) ═══ */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 350, height: 350, top: '5%', right: '-8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col reveal" style={{ alignItems: 'start', gap: 56 }}>
            <div>
              <span className="badge badge--accent">Our Story</span>
              <h2 className="display display--gradient heading-lg">From Frustration to Foundation</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                If you're a small or mid-sized business, you've probably noticed your options are lousy: expensive enterprise software that wasn't built for you, or cheap tools that break the moment you try to scale. Based in Southern Ohio and serving clients nationwide, we built Enigma to give you a third option: custom AI systems, mobile applications, and web platforms designed specifically for the businesses they serve.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Our team brings together backgrounds in business strategy, marketing, full-stack development, and legal expertise, giving us a uniquely well-rounded perspective on building technology that works in the real world. We've built businesses, served clients across industries, and learned firsthand what it takes to turn an idea into a working product.
              </p>

              {/* Expertise tags */}
              <div className="expertise-grid">
                {expertise.map((e, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <e.icon size={18} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)' }}>{e.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership photo */}
            <TiltCard noGlow className="about-team-photo">
              <img
                src="/images/team-photo.svg"
                alt="Enigma Software Systems team"
                loading="lazy"
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ CULTURE — How We Operate ═══ */}
      <section className="section theme-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="badge badge--accent">Culture</span>
            <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
              How We Operate
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
              We run lean, move fast, and treat every client like a partner, not a ticket number.
            </p>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 900, margin: '0 auto' }}>
            {values.map((v, i) => (
              <TiltCard key={i} className="reveal" style={{
                padding: 32,
                borderRadius: 16,
                textAlign: 'left',
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
              }}>
                <IconBox icon={v.icon} />
                <h3 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px', color: 'var(--text-dark)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.7 }}>{v.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VISION QUOTE ═══ */}
      <section className="section about-vision-section" style={{ position: 'relative' }}>
        <div className="about-vision-section__bg" />
        <div className="about-vision-section__overlay" />
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 350, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container reveal" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <blockquote style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 800,
            margin: '0 auto 24px',
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #ffffff 0%, #d5d8f6 60%, #fdf7fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingBottom: '0.1em',
          }}>
            "We believe every company, regardless of size, deserves software that is secure, intelligent, and built specifically for them."
          </blockquote>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>
            Our vision is to become the trusted technology partner for businesses ready to embrace AI and custom software as competitive advantages, not just buzzwords.
          </p>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Want to Meet the Team Behind the Work?"
        text="Tell us about your business and we'll show you what's possible."
        buttonText="Book a 15-Minute Intro Call"
      />
    </div>
  )
}
