import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Lock, ShieldCheck, ShieldOff, Palette, Mic,
  Lightbulb, MessageSquare, BookOpen, Database,
  ToggleLeft, Clock, Brain,
  ArrowRight, Bot,
  Users, Headphones, CalendarCheck, FileSearch,
  Plug, BarChart3, Mail,
} from 'lucide-react'

/* ── Benefits of Enigma AI Systems ── */
const benefits = [
  { icon: Lock, title: 'Your Data Stays Private', desc: 'Unlike consumer AI tools, everything your team types stays in a secure environment you control. No data leaking into third-party training sets. No information shared with other users.' },
  { icon: Lightbulb, title: 'AI That Understands Your Business', desc: 'We integrate your business data, documents, and processes into the backend. Your AI doesn\'t give generic answers — it gives answers informed by your company\'s actual information.' },
  { icon: Palette, title: 'Branded to Your Company', desc: 'Every AI system we build carries your brand — your logo, your colors, your name. Your team and your clients interact with AI that feels like it belongs to your organization.' },
  { icon: Clock, title: 'Save Your Team Hours Every Week', desc: 'Automate repetitive tasks, generate documents, answer common questions, and surface information instantly. AI becomes a productivity multiplier — not a distraction.' },
  { icon: ToggleLeft, title: 'Start Small or Go All In', desc: 'Need a full AI platform? We build that. Need a simple chatbot that answers customer questions? We build that too. There\'s an entry point for every budget and every level of ambition.' },
  { icon: ShieldCheck, title: 'Built for Compliance', desc: 'PII/PHI detection, audit logging, role-based access, and configurable compliance toolkits. Our AI systems are designed for regulated industries from the ground up — healthcare, legal, finance, and beyond.' },
]

/* ── Customer-Facing AI Chat Assistants ── */
const customerAiFeatures = [
  { icon: Headphones, title: '24/7 Availability', desc: 'Your AI assistant never takes a break. Customers get instant answers to common questions any time of day — nights, weekends, and holidays included.' },
  { icon: Bot, title: 'Trained on Your Business', desc: 'Not a generic chatbot. We load your FAQs, service descriptions, pricing, policies, and processes so the assistant gives answers specific to your business.' },
  { icon: Users, title: 'Lead Capture & Routing', desc: 'When a visitor is ready to take the next step, the assistant captures their information and routes it to the right person on your team — automatically.' },
  { icon: Palette, title: 'Your Brand, Your Voice', desc: 'The assistant speaks in your tone, uses your terminology, and sits on your website with your branding. Customers interact with your company — not a third-party tool.' },
]

/* ── Internal Knowledge-Based AI Tools ── */
const internalAiFeatures = [
  { icon: BookOpen, title: 'Instant Access to Company Knowledge', desc: 'Your team asks questions in plain language and gets answers drawn from your actual documents — SOPs, training manuals, HR policies, product specs, and more.' },
  { icon: FileSearch, title: 'No More Digging Through Shared Drives', desc: 'Instead of searching folders and hoping to find the right file, your team asks the AI and gets the answer in seconds — with source references.' },
  { icon: Mic, title: 'Digital Note Taker', desc: 'Record meetings, interviews, and calls directly in the platform. AI-powered recording turns audio into searchable, shareable text with automatic summaries and action items.' },
  { icon: Database, title: 'Gets Smarter Over Time', desc: 'As you add new documents and refine responses, your internal AI tool becomes an increasingly valuable knowledge resource for your entire organization.' },
]

/* ── Custom AI Integrations ── */
const integrationExamples = [
  { icon: Mail, title: 'Email & Communication', desc: 'Automatically draft responses, summarize long email threads, or flag messages that need urgent attention.' },
  { icon: CalendarCheck, title: 'Scheduling & Operations', desc: 'Intelligent scheduling assistants, automated dispatch, and workflow triggers that keep your team on track.' },
  { icon: BarChart3, title: 'Reporting & Analytics', desc: 'Generate reports from raw data, surface trends your team would miss, and turn complex information into plain-language summaries.' },
  { icon: Plug, title: 'Connect Your Existing Tools', desc: 'We build AI-powered bridges between the tools you already use — CRMs, ERPs, project management platforms, and more.' },
]

/* ── Security & Privacy ── */
const securityPoints = [
  { icon: Lock, title: 'Private & Contained', desc: 'Your data lives in a secure environment you control. Nothing is shared with third-party training models or exposed to other users. What happens in your AI platform stays in your AI platform.' },
  { icon: ShieldCheck, title: 'Built for Compliance', desc: 'Our systems are designed with compliance in mind from the start. Healthcare, legal, finance, or any regulated industry — we build to meet the standards your business requires, including HIPAA, SOC2, and GDPR readiness.' },
  { icon: ShieldOff, title: 'Not Consumer-Grade', desc: 'Free AI tools are built for individuals, not businesses. Our platforms are engineered for professional use — with access controls, audit trails, PII detection, and data handling practices that consumer tools simply don\'t offer.' },
]

/* ── Process Steps ── */
const processSteps = [
  { num: '01', title: 'We Learn Your Business', desc: 'Every engagement starts with a free consultation. We learn how your team works, what challenges you\'re facing, and where AI can deliver the most impact. We\'ll recommend the right approach — whether that\'s a customer-facing assistant, an internal knowledge tool, a custom integration, or a combination.' },
  { num: '02', title: 'We Design the Solution', desc: 'Based on your needs, we design the AI system — selecting models, configuring security, planning integrations, and mapping the platform to your workflows. You\'ll know exactly what you\'re getting before any development begins.' },
  { num: '03', title: 'We Build and Integrate', desc: 'We build your AI system, load your business data, configure branding and permissions, and integrate with your existing tools. Everything is tested, polished, and production-ready before we hand it over.' },
  { num: '04', title: 'We Launch and Support', desc: 'We deploy the system, train your team, and provide dedicated post-launch support. Then our maintenance plans keep everything current, secure, and running smoothly as AI providers evolve.' },
]


export default function AISystems() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* SECTION 1 — HERO */}
      <PageHeader
        title="AI That Actually Knows Your Business"
        subtitle="Customer-facing chat assistants, internal knowledge tools, and custom AI integrations — all private, branded, and designed around the way your business actually works. Not generic. Not consumer-grade. Built for you."
        blobColor="orange"
        primaryCta={{ text: 'Schedule a Consultation', to: '/contact' }}
        secondaryCta={{ text: 'See Our Flagship Platform', to: '/vault' }}
        image="/images/hero-ai.svg"
        imageAlt="AI neural network and multi-model system visualization"
        imageLayout="image-left"
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">AI Systems</span>
          <h2 className="display display--gradient heading-md">Your Team Is Already Using AI. The Question Is Whether It's Working for You.</h2>
          <p className="body-text">
            Right now, there's a good chance people on your team are using ChatGPT, Claude, or other AI tools on personal accounts. They're typing sensitive business information into platforms you don't control, paying with personal credit cards, and working in silos where nobody else benefits from what they've built.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: 17, lineHeight: 1.8, marginTop: 16, fontWeight: 600 }}>
            That's not an AI strategy. That's a liability.
          </p>
          <p className="body-text">
            The businesses getting real value from AI aren't the ones handing employees a ChatGPT subscription and hoping for the best. They're the ones giving their teams purpose-built AI tools — connected to their business data, governed by their security policies, and designed for the work they actually do.
          </p>
          <p className="body-text">
            That's what we build. Whether you need a customer-facing assistant, an internal knowledge tool, or a custom integration that connects AI to your existing workflows — we deliver AI that's private, branded, and built around how your business operates.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What Enigma's AI Systems Do for Your Business</h2>
          </div>
          <div className="grid-3 reveal-group">
            {benefits.map((b, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={b.icon} variant={i % 2 === 0 ? 'accent' : 'blue'} />
                <h3 className="card-title">{b.title}</h3>
                <p className="card-desc">{b.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TWO PATHS TO AI */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--accent">Two Paths</span>
            <h2 className="display display--gradient heading-lg">AI Isn't One-Size-Fits-All. Pick the Path That Fits.</h2>
            <p className="section-subtitle">
              Some businesses are ready for a full-scale AI platform. Others just need a smart, focused tool that handles one job really well. We build both — and everything in between.
            </p>
          </div>
          <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* Vault / Multi-LLM Platform */}
            <TiltCard className="card card--glass card--glow reveal" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255, 159, 65, 0.2)' }}>
              <div className="ai-path-card__image">
                <img src="/images/card-vault-mockup.svg" alt="Vault by Enigma — multi-LLM AI platform mockup" />
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                  display: 'block',
                }}>
                  Flagship Product
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Multi-LLM AI Platform</h3>
                <p className="card-desc">
                  A private, branded AI workspace with multi-model access, enterprise security, team workspaces, a knowledge base, and full cost transparency. The complete AI infrastructure for your organization.
                </p>
                <Link to="/vault" className="link-arrow" style={{ marginTop: 16 }}>Explore Vault by Enigma <ArrowRight size={14} /></Link>
              </div>
            </TiltCard>
            {/* Chatbots & Integrations */}
            <TiltCard className="card card--glass card--glow reveal" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="ai-path-card__image">
                <img src="/images/card-chatbot-mobile.svg" alt="AI chatbot on a mobile phone screen" />
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--blue)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                  display: 'block',
                }}>
                  Accessible Entry Point
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>AI Chatbots & Integrations</h3>
                <p className="card-desc">
                  Standalone AI chatbots and custom integrations that bring intelligent automation to your business at an accessible price point. Secure, branded, and trained on your information.
                </p>
                <a href="#customer-ai" className="link-arrow" style={{ marginTop: 16 }}>Learn More <ArrowRight size={14} /></a>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CUSTOMER-FACING AI CHAT ASSISTANTS */}
      <section id="customer-ai" className="section theme-light">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56 }}>
            <div>
              <span className="badge badge--accent">Customer-Facing AI</span>
              <h2 className="display heading-lg heading-dark">
                An AI Assistant That Knows Your Business — On Your Website, 24/7
              </h2>
              <p className="body-text--light" style={{ marginBottom: 16 }}>
                Imagine a chat assistant on your website that doesn't just answer generic questions — it actually knows your services, your pricing, your policies, and your processes. When a potential customer visits your site at 9pm on a Saturday, they get real answers and a clear path to doing business with you.
              </p>
              <p className="body-text--light" style={{ marginBottom: 32 }}>
                We build customer-facing AI assistants that are trained on your information, branded to your company, and designed to convert visitors into leads — without adding headcount.
              </p>
              <div className="grid-2" style={{ gap: 16 }}>
                {customerAiFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <IconBox icon={f.icon} size={36} />
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>{f.title}</h4>
                      <p style={{ fontSize: 13, color: 'var(--text-body)', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="preview-box" style={{ height: 480, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <MessageSquare size={64} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INTERNAL KNOWLEDGE-BASED AI TOOLS */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 56 }}>
            <div className="preview-box" style={{ height: 480 }}>
              <BookOpen size={64} style={{ color: 'var(--border-default)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Internal AI Tools</span>
              <h2 className="display display--gradient heading-lg">
                Give Your Team Instant Access to Everything They Need to Know
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                Your company has years of accumulated knowledge locked inside documents, emails, and shared drives. Internal AI tools make that knowledge instantly accessible — your team asks a question in plain language and gets an accurate answer in seconds, pulled directly from your own data.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                No more waiting for the one person who knows the answer. No more digging through folders. Your business knowledge becomes a living, searchable resource that everyone on your team can tap into.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {internalAiFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <IconBox icon={f.icon} size={40} variant={i % 2 === 0 ? 'accent' : 'blue'} />
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{f.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM AI INTEGRATIONS */}
      <section className="section theme-light">
        <div className="container">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--accent">Custom Integrations</span>
            <h2 className="display heading-lg heading-dark">
              Connect AI to the Tools You Already Use
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              Not every AI project needs its own interface. Sometimes the biggest impact comes from connecting intelligent automation directly to the workflows and tools your team already relies on.
            </p>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {integrationExamples.map((ex, i) => (
              <TiltCard key={i} className="reveal" style={{
                padding: 28,
                borderRadius: 16,
                textAlign: 'left',
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
              }}>
                <IconBox icon={ex.icon} />
                <h4 style={{ fontSize: 16, fontWeight: 600, margin: '14px 0 8px', color: 'var(--text-dark)' }}>{ex.title}</h4>
                <p style={{ color: 'var(--text-body)', fontSize: 13, lineHeight: 1.65 }}>{ex.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — VAULT BY ENIGMA (brief callout) */}
      <section className="section--sm theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 350, height: 350, top: '10%', right: '-10%' }} />
        <div className="container section-z">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto' }}>
            <span className="badge badge--accent">Flagship Product</span>
            <h2 className="display display--gradient heading-lg">Looking for the Full AI Platform?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 8 }}>
              Vault by Enigma is our flagship multi-LLM platform — a private, branded AI workspace where your entire organization accesses every leading AI model from a single dashboard, with enterprise security, cost tracking, and complete control over your data.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
              If your needs go beyond a single assistant or integration, Vault is the full-scale solution.
            </p>
            <Link to="/vault" className="btn btn-primary btn-lg">
              Explore Vault by Enigma
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SECURITY & PRIVACY */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="section-z">
            <div className="reveal">
              <span className="badge badge--blue">Security & Privacy</span>
              <h2 className="display display--gradient heading-lg">The Biggest Risk with AI Isn't the Technology. It's Where Your Data Ends Up.</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto 16px', fontSize: 17, lineHeight: 1.7 }}>
                When your team uses free, consumer-grade AI tools, every prompt they type is being fed into systems you don't control. Your business data, your client information, your internal processes — all of it is going somewhere you can't see and can't govern.
              </p>
              <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
                Every AI system we build is designed to keep your information exactly where it belongs: under your control.
              </p>
            </div>
            <div className="grid-3 reveal-group">
              {securityPoints.map((s, i) => (
                <TiltCard key={i} className="card card--glass reveal" style={{ textAlign: 'left' }}>
                  <IconBox icon={s.icon} variant="cyan" />
                  <h4 className="card-title--sm">{s.title}</h4>
                  <p className="card-desc--sm">{s.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOW WE WORK */}
      <section className="section theme-dark">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">How We Work</span>
              <h2 className="display display--gradient heading-lg">You Tell Us What You Need. We Build the AI That Delivers It.</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                You don't need a technical team or AI expertise to work with us. We handle every step of the process — from understanding your business to deploying a production-ready system your team can use on day one.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {processSteps.map((step, i) => (
                  <div key={i} className="process-step">
                    <span className="process-num">
                      {step.num}
                    </span>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-light)', marginBottom: 4 }}>{step.title}</h4>
                      <p className="card-desc--sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="preview-box" style={{ height: 480 }}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <Brain size={64} style={{ color: 'var(--border-default)', marginBottom: 16 }} />
                <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>AI System Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA */}
      <CTABlock
        headline="Let's Build Your AI Advantage"
        text="Whether you need a customer-facing assistant, an internal knowledge tool, or a custom integration — tell us about your business and we'll show you what AI can do for it. Every conversation starts with a free consultation."
        buttonText="Schedule a Consultation"
      />
    </div>
  )
}
