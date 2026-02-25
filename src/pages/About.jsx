import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Hammer, Zap, MessageCircle, Users,
  BarChart3, Code2, Scale, ShieldCheck,
} from 'lucide-react'

const values = [
  { icon: Hammer, title: "Builder's Mentality", text: "We don't sit in meetings about meetings. We identify the problem, design the solution, and start building. Every team member is a maker." },
  { icon: Zap, title: 'Small Teams, Fast Decisions', text: "No bureaucracy. No layers of approval. Our small team structure means decisions happen quickly, and your project never stalls." },
  { icon: MessageCircle, title: 'Direct Communication', text: "We say what we mean and we mean what we say. You'll always know where your project stands, what's working, and what needs to change." },
  { icon: Users, title: 'Partners, Not Vendors', text: "We don't disappear after launch. We invest in understanding your business because your success is our success." },
]

const expertise = [
  { icon: BarChart3, label: 'Business Strategy & Consulting' },
  { icon: Code2, label: 'Full-Stack Software Development' },
  { icon: Scale, label: 'Legal Expertise & Compliance' },
  { icon: ShieldCheck, label: 'Military Leadership & Discipline' },
]

export default function About() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* Hero — Animated (#7) */}
      <PageHeader
        title="Built Different. On Purpose."
        subtitle="We're a team of builders, strategists, and problem-solvers creating custom software for businesses that deserve better than off-the-shelf."
        blobColor="accent"
      />

      {/* Company Story */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 350, height: 350, top: '5%', right: '-8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Our Story</span>
              <h2 className="display display--gradient heading-lg">From Frustration to Foundation</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Enigma Software Systems was born from a simple observation: most businesses are stuck choosing between expensive enterprise solutions that don't fit and cheap off-the-shelf tools that don't scale.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Our founding team comes from the intersection of digital marketing, business consulting, and software development. We've spent years helping businesses grow, and we kept running into the same wall. The software available to small and mid-sized companies wasn't built for them.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                So we built Enigma to close that gap. We design, build, and deploy intelligent digital solutions — custom AI systems, mobile applications, and web applications — purpose-built for the businesses they serve.
              </p>
            </div>
            <div className="preview-box" style={{ height: 400 }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: 700,
                fontSize: 48,
                color: '#fff',
                boxShadow: '0 0 60px rgba(255, 159, 65,0.25)',
              }}>E</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture — TiltCards (#5) */}
      <section className="section theme-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="badge badge--accent">Culture</span>
            <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
              How We Operate
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
              We run lean, move fast, and treat every client like a partner — not a ticket number. Our culture is built on a few non-negotiables:
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
                <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px', color: 'var(--text-dark)' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.7 }}>{v.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-20%', right: '-5%' }} />
          <div className="two-col reveal" style={{ position: 'relative', zIndex: 1 }}>
            <div className="preview-box" style={{ height: 380 }}>
              <Users size={80} style={{ color: 'var(--border-default)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Leadership</span>
              <h2 className="display display--gradient heading-lg">Who's Behind Enigma</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Enigma is led by a lean founding team with an uncommon mix of experience. Our leadership brings together backgrounds in business strategy, full-stack software development, legal expertise, and military service — giving us a uniquely well-rounded perspective on building technology that works in the real world.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                We're not career academics or big-tech refugees. We're entrepreneurs who've built businesses, served clients across industries, and learned firsthand what it takes to turn an idea into a working product.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {expertise.map((e, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <e.icon size={18} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)' }}>{e.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 350, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container reveal" style={{ position: 'relative', textAlign: 'center' }}>
          <blockquote style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 400,
            lineHeight: 1.3,
            maxWidth: 800,
            margin: '0 auto 24px',
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #ffffff 0%, #d5d8f6 60%, #fdf7fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            "We believe every company, regardless of size, deserves software that is secure, intelligent, and built specifically for them."
          </blockquote>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>
            Our long-term vision is to become the trusted technology partner for businesses ready to embrace AI and custom software as competitive advantages — not just buzzwords.
          </p>
        </div>
      </section>

      <CTABlock
        headline="Ready to Work With a Team That Gets It?"
        text="We'd love to hear about your business and show you what's possible."
        buttonText="Get in Touch"
      />
    </div>
  )
}
