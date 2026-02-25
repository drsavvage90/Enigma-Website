import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  ToggleLeft, Palette, ShieldCheck,
  Mic, Lightbulb, LayoutGrid, MessageSquare,
  BookOpen, Cog, Lock, ClipboardCheck, ShieldOff,
} from 'lucide-react'

const platformFeatures = [
  { icon: ToggleLeft, title: 'Multi-LLM Selection', text: 'Switch between Claude, ChatGPT, Gemini, and Grok based on what you need — all from one dashboard.' },
  { icon: Palette, title: 'Custom Branding', text: 'The platform carries your brand, not ours. Your logo, your colors, your name.' },
  { icon: ShieldCheck, title: 'Secure Environment', text: 'Your data stays private and protected. Built for businesses that take security seriously, including regulated industries.' },
  { icon: Mic, title: 'Built-In Transcription', text: 'Record conversations, generate insights, create documentation, and follow up — all in one secure place.' },
  { icon: Lightbulb, title: 'Business-Aware AI', text: 'We integrate your business data so the AI understands your company, your people, and your processes from day one.' },
  { icon: LayoutGrid, title: 'One Dashboard, Full Control', text: 'Manage everything from a single interface — model selection, transcription, business data, and team access.' },
]

const chatbotUseCases = [
  { icon: MessageSquare, title: 'Customer-Facing Chat Assistants', text: 'Let an AI chatbot answer common questions, guide visitors through your services, and capture leads — 24/7.' },
  { icon: BookOpen, title: 'Internal Knowledge-Base Tools', text: 'Give your team instant access to company policies, procedures, and documentation through a conversational AI interface.' },
  { icon: Cog, title: 'Custom AI Integrations', text: 'Connect AI capabilities to your existing tools and workflows. Automate repetitive tasks, generate reports, and save hours every week.' },
]

const securityPoints = [
  { icon: Lock, title: 'Private & Contained', text: 'Your data lives in a secure environment that you control. Nothing is shared with third-party training models.' },
  { icon: ClipboardCheck, title: 'Built for Compliance', text: 'Designed with compliance in mind from the start. Healthcare, legal, finance, or any regulated industry.' },
  { icon: ShieldOff, title: 'Not Consumer-Grade', text: 'Our platforms are engineered for professional use — with access controls, audit trails, and enterprise data handling.' },
]

export default function AISystems() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* Hero — Animated (#7) */}
      <PageHeader
        title="AI That Actually Knows Your Business"
        subtitle="From our flagship multi-LLM platform to standalone chatbots and custom integrations, we build AI systems that are secure, branded, and designed around the way you work."
        blobColor="orange"
      />

      {/* Overview */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">AI Systems</span>
          <h2 className="display display--gradient heading-md">Intelligent Systems Built for the Real World</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            AI isn't one-size-fits-all. Some businesses need a full-scale intelligent platform. Others just need a smart chatbot. We build both — and everything in between. Every system we build is secure, customizable, and designed to make AI a practical tool for your business.
          </p>
        </div>
      </section>

      {/* Multi-LLM Platform */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ marginBottom: 48 }}>
            <span className="badge badge--accent">Flagship Product</span>
            <h2 className="display display--gradient heading-lg">Your Business. Your AI. One Platform.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 720, marginTop: 12 }}>
              Our multi-LLM AI platform is the crowning achievement of Enigma's AI division. It's a secure, fully branded environment where your team can access the power of leading AI models — Claude, ChatGPT, Gemini, and Grok — all from a single dashboard tailored to your business.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 720, marginTop: 16 }}>
              This isn't consumer-grade AI with your logo slapped on it. The platform is integrated with your business data, your processes, and your people from day one.
            </p>
          </div>

          {/* Platform mockup placeholder */}
          <div className="reveal preview-box" style={{ padding: 48, marginBottom: 64, minHeight: 300 }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <LayoutGrid size={64} style={{ color: 'var(--border-default)', marginBottom: 16 }} />
              <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>Platform Dashboard Preview</p>
            </div>
          </div>

          {/* Feature Grid — TiltCards (#5) */}
          <div className="grid-3 reveal-group">
            {platformFeatures.map((f, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={f.icon} />
                <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{f.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbots */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div className="preview-box" style={{ height: 360, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <MessageSquare size={64} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Chatbots & Integrations</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                Not Ready for the Full Platform? Start Here.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 32 }}>
                For companies that want to start smaller, we build standalone AI chatbots and custom integrations that bring intelligent automation to your business at an accessible price point.
              </p>
              {chatbotUseCases.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                  <IconBox icon={c.icon} size={40} />
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: 'var(--text-dark)' }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security — TiltCards (#5) */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal">
              <span className="badge badge--blue">Security</span>
              <h2 className="display display--gradient heading-lg">Your Data. Your Control. Always.</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
                The biggest risk with AI adoption isn't the technology — it's where your data ends up. Our platforms are different.
              </p>
            </div>
            <div className="grid-3 reveal-group">
              {securityPoints.map((s, i) => (
                <TiltCard key={i} className="card card--glass reveal" style={{ textAlign: 'left' }}>
                  <IconBox icon={s.icon} variant="cyan" />
                  <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{s.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Let's Build Your AI Advantage"
        text="Whether you're ready for the full platform or want to start with a simple chatbot, we'll help you find the right fit."
        buttonText="Schedule a Consultation"
      />
    </div>
  )
}
