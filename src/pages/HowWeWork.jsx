import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import { MessageSquareCheck, Clock, ThumbsUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Discovery & Consultation',
    text: "Every project starts with a conversation. We sit down with you to understand your business, your workflows, your pain points, and your goals. We don't pitch you a pre-packaged solution. We listen first, then we design.\n\nThis phase is about alignment. By the end of discovery, we'll have a shared understanding of what we're building, why it matters, and how it fits into your operations.",
  },
  {
    num: '02',
    title: 'Design & Development',
    text: "We build purpose-designed solutions, not templates with your logo on them. Development is iterative, meaning you'll see progress along the way and have the opportunity to provide feedback at every stage.\n\nYour input shapes the product. We don't disappear for three months and come back with a finished product you've never seen. You're part of the process from the first wireframe to the final feature.",
  },
  {
    num: '03',
    title: 'Deployment & Launch',
    text: "When the product is ready, we don't just send you a zip file and wish you luck. We handle deployment, integration into your existing operations, and make sure everything is running smoothly before we call it done.\n\nLaunch day should feel exciting, not stressful. We make sure your team knows how to use the tool, your data is in place, and your customers have a seamless experience from day one.",
  },
  {
    num: '04',
    title: 'Ongoing Support & Maintenance',
    text: "Software isn't a one-and-done project. We offer affordable annual maintenance plans that keep your product current, secure, and performing.\n\nThis is what separates us from contractors who build and walk away. We're your technology partner for the long haul. When you need changes, we're a phone call away, not a new vendor search.",
  },
]

const whatToExpect = [
  { icon: MessageSquareCheck, text: 'Direct Access to Your Team' },
  { icon: Clock, text: 'Weeks, Not Months' },
  { icon: ThumbsUp, text: 'Your Input Shapes the Product' },
]

export default function HowWeWork() {
  const ref = useReveal()
  const lineRefs = useRef([])

  // Intersection observer for timeline line draw (#8)
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
      {/* Hero — Animated (#7) */}
      <PageHeader
        title="From Idea to Launch, and Beyond"
        subtitle="We don't just build software and hand you the keys. Here's how we take your project from concept to a working product — and keep it running long after launch."
        blobColor="blue"
      />

      {/* Timeline — with draw line animation (#8) */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 350, height: 350, top: '10%', right: '-8%' }} />
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--accent">Our Process</span>
            <h2 className="display display--gradient heading-lg">Four Steps to Your Solution</h2>
          </div>
          {steps.map((step, i) => (
            <div key={i} className="timeline-step reveal">
              <div className="timeline-number">{step.num}</div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                {step.text.split('\n\n').map((para, j) => (
                  <p key={j} style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: j === 0 ? 12 : 0 }}>{para}</p>
                ))}
              </div>
              {/* Animated draw line (replaces the static ::after) */}
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

      {/* What to Expect */}
      <section className="section--sm theme-light">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <span className="badge badge--blue">The Experience</span>
          <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)', marginBottom: 12 }}>
            What Working With Us Feels Like
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: 17, lineHeight: 1.8, maxWidth: 700, margin: '0 auto 40px' }}>
            We keep things simple. You'll have direct access to the people building your product — no account managers, no layers, no runaround. Communication is clear, updates are frequent, and your input is always welcome.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {whatToExpect.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <item.icon size={20} style={{ color: 'var(--accent)' }} />
                <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-dark)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Let's Start With a Conversation"
        text="No commitment. No generic pitch. Just a real conversation about your business, your needs, and what we can build together."
        buttonText="Schedule a Discovery Call"
      />
    </div>
  )
}
