import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import TiltCard from '../components/TiltCard'
import { MessageSquareCheck, Clock, ThumbsUp, HelpCircle } from 'lucide-react'

/* ═══════════════════════════════════════════════════
   PROCESS STEPS — customer-centric titles, 1 paragraph
   each, with concrete timelines
   ═══════════════════════════════════════════════════ */
const steps = [
  {
    num: '01',
    title: 'We Listen. You Talk About Your Business.',
    timeline: '1–2 days',
    text: "Every project starts with a free consultation. We learn your workflows, your pain points, and your goals. By the end, we'll have a shared understanding of what we're building and why it matters.",
  },
  {
    num: '02',
    title: 'You See Progress Every Step of the Way.',
    timeline: '1–2 weeks',
    text: "Development is iterative. You'll see progress along the way and give feedback at every stage. Your input shapes the product. We don't disappear for three months and come back with something you've never seen.",
  },
  {
    num: '03',
    title: 'Launch Day Feels Exciting, Not Stressful.',
    timeline: '1 day',
    text: "We handle deployment, integration, and team onboarding. Your data is in place, your team knows the tool, and your customers have a seamless experience from day one.",
  },
  {
    num: '04',
    title: 'You Never Have to Search for a New Vendor.',
    timeline: 'Ongoing',
    text: "Affordable maintenance plans keep your product current, secure, and performing. When you need changes, we're a phone call away, not a new vendor search.",
  },
]

const whatToExpect = [
  { icon: MessageSquareCheck, text: 'Direct Access to Your Team' },
  { icon: Clock, text: 'Most Projects Launch in 4–8 Weeks' },
  { icon: ThumbsUp, text: 'Your Input Shapes Every Decision' },
]


export default function HowWeWork() {
  const ref = useReveal()
  const lineRefs = useRef([])

  // Intersection observer for timeline line draw animation
  useEffect(() => {
    const observers = []
    lineRefs.current.forEach((el) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="From Idea to Launch, and Beyond"
        subtitle="Here's how we take your project from a conversation to a working product your team uses every day, and keep it running long after launch."
        blobColor="blue"
        primaryCta={{ text: 'Book a Free Discovery Call', to: '/contact' }}
        secondaryCta={{ text: 'Explore Our Services', to: '/ai-systems' }}
        image="/images/process-hero.jpg"
        imageAlt="Laptop displaying a digital security and cloud sync interface on a desk"
        imageLayout="image-right"
      />

      {/* ═══ TIMELINE — animated draw line preserved ═══ */}
      <section className="section process-timeline-section" style={{ position: 'relative' }}>
        <div className="process-timeline-section__bg" />
        <div className="process-timeline-section__overlay" />
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--accent">Our Process</span>
            <h2 className="display display--gradient heading-lg">Four Steps to Your Solution</h2>
          </div>
          {steps.map((step, i) => (
            <div key={i} className="timeline-step reveal">
              <div className="timeline-number">{step.num}</div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{step.title}</h3>
                <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginBottom: 10, letterSpacing: '0.03em' }}>
                  Typical timeline: {step.timeline}
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{step.text}</p>
              </div>
              {/* Animated draw line */}
              {i < steps.length - 1 && (
                <div
                  ref={el => lineRefs.current[i] = el}
                  className="timeline-line"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="section--sm theme-light">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <span className="badge badge--blue">The Experience</span>
          <h2 className="display heading-lg heading-dark" style={{ marginBottom: 12 }}>
            What Working With Us Feels Like
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: 17, lineHeight: 1.8, maxWidth: 700, margin: '0 auto 40px' }}>
            You'll have direct access to the people building your product. No layers, no runaround. Communication is clear, updates are frequent, and your input is always welcome.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', marginBottom: 48 }}>
            {whatToExpect.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <item.icon size={20} style={{ color: 'var(--accent)' }} />
                <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-dark)' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* FAQ callout — addresses #1 objection */}
          <TiltCard noGlow style={{
            maxWidth: 600,
            margin: '0 auto',
            padding: '28px 32px',
            borderRadius: 16,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
            textAlign: 'left',
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start',
          }}>
            <HelpCircle size={24} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 6 }}>
                "What if I don't have technical knowledge?"
              </h4>
              <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7 }}>
                You don't need any. We handle every technical decision, from architecture and design to deployment and maintenance. You bring the business knowledge. We bring the engineering.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Let's Start With a Conversation"
        text="A real conversation about your business and what we can build together. Your discovery call is free."
        buttonText="Book Your Free Discovery Call"
      />
    </div>
  )
}
