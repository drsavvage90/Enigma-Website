import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Lock, ShieldCheck, ShieldOff, Palette, Mic,
  Lightbulb, LayoutGrid, MessageSquare, BookOpen,
  Cog, ToggleLeft, Layers, Clock, Brain,
} from 'lucide-react'

const benefits = [
  { icon: Lock, title: 'Your Data Stays Private', desc: 'Unlike consumer AI tools, everything your team types stays in a secure environment you control. No data leaking into third-party training sets. No information shared with other users.' },
  { icon: Lightbulb, title: 'AI That Understands Your Business', desc: 'We integrate your business data, documents, and processes into the backend. Your AI doesn\'t give generic answers — it gives answers informed by your company\'s actual information.' },
  { icon: ToggleLeft, title: 'One Platform, Multiple Models', desc: 'Access Claude, ChatGPT, Gemini, and Grok from a single dashboard. Your team picks the best model for each task without managing separate accounts or subscriptions.' },
  { icon: Palette, title: 'Branded to Your Company', desc: 'Every AI system we build carries your brand — your logo, your colors, your name. Your team and your clients interact with AI that feels like it belongs to your organization.' },
  { icon: Layers, title: 'Start Small or Go All In', desc: 'Need the full platform? We\'ll build it. Need a simple chatbot to answer customer questions? We\'ll build that too. There\'s an entry point for every budget and every level of ambition.' },
  { icon: Clock, title: 'Save Your Team Hours Every Week', desc: 'Automate repetitive tasks, generate documents, answer common questions, and surface information instantly. AI becomes a productivity multiplier — not a distraction.' },
]

const platformCapabilities = [
  { icon: ToggleLeft, title: 'Multi-Model Access', desc: 'Switch between Claude, ChatGPT, Gemini, Grok, and Llama based on the task at hand — all from one dashboard. Compare models side by side to find the best fit. No separate subscriptions. No context-switching.' },
  { icon: Palette, title: 'Your Brand, Your Platform', desc: 'Vault carries your logo, your colors, your name, and your domain. When your team or your clients use it, it feels like your product — because it is.' },
  { icon: ShieldCheck, title: 'Enterprise Security & Compliance', desc: 'PII/PHI detection, audit logging, role-based access, SSO, and configurable compliance toolkits. Your data stays private and protected — built for regulated industries from the ground up.' },
  { icon: BookOpen, title: 'Knowledge Base & Business-Aware AI', desc: 'Upload your documents, policies, and reference materials. Vault\'s RAG engine grounds AI responses in your organization\'s actual knowledge — not just generic model training.' },
  { icon: Mic, title: 'Built-In Audio Transcription', desc: 'Record meetings, calls, and interviews directly in the platform. Deepgram-powered transcription turns audio into searchable text that your team can feed directly into AI conversations.' },
  { icon: LayoutGrid, title: 'One Dashboard, Full Control', desc: 'Model selection, team workspaces, cost tracking, personas, prompt libraries, workflow automation, and document export — all managed from a single interface. No app-hopping. No scattered tools.' },
]

const chatbotUseCases = [
  { icon: MessageSquare, title: 'Customer-Facing Chat Assistants', desc: 'An AI chatbot on your website that answers common questions, guides visitors through your services, and captures leads — 24/7, without adding headcount. Your customers get instant answers. Your team focuses on higher-value work.' },
  { icon: BookOpen, title: 'Internal Knowledge Base Tools', desc: 'Give your team instant, conversational access to company policies, procedures, training materials, and documentation. No more digging through shared drives or asking the same questions in Slack.' },
  { icon: Cog, title: 'Custom AI Integrations', desc: 'Connect AI capabilities directly to the tools and workflows you already use. Automate repetitive tasks, generate reports, summarize documents, or build intelligent triggers that save your team hours every week.' },
]

const securityPoints = [
  { icon: Lock, title: 'Private & Contained', desc: 'Your data lives in a secure environment you control. Nothing is shared with third-party training models or exposed to other users. What happens in your AI platform stays in your AI platform.' },
  { icon: ShieldCheck, title: 'Built for Compliance', desc: 'Our systems are designed with compliance in mind from the start. Healthcare, legal, finance, or any regulated industry — we build to meet the standards your business requires, including HIPAA, SOC2, and GDPR readiness.' },
  { icon: ShieldOff, title: 'Not Consumer-Grade', desc: 'Free AI tools are built for individuals, not businesses. Our platforms are engineered for professional use — with access controls, audit trails, PII detection, and data handling practices that consumer tools simply don\'t offer.' },
]

const processSteps = [
  { num: '01', title: 'We Learn Your Business', desc: 'Every engagement starts with a free consultation. We learn how your team works, what challenges you\'re facing, and where AI can deliver the most impact. We\'ll recommend the right approach — whether that\'s the full Vault platform, a standalone chatbot, or something in between.' },
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
        subtitle="From our flagship multi-LLM platform to standalone chatbots and custom integrations — we build AI systems that are private, branded, and designed around the way your business actually works. Not generic. Not consumer-grade. Built for you."
        blobColor="orange"
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">AI Systems</span>
          <h2 className="display display--gradient heading-md">Your Team Is Already Using AI. The Question Is Whether It's Working for You.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Right now, there's a good chance people on your team are using ChatGPT, Claude, or other AI tools on personal accounts. They're typing sensitive business information into platforms you don't control, paying with personal credit cards, and working in silos where nobody else benefits from what they've built.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: 17, lineHeight: 1.8, marginTop: 16, fontWeight: 600 }}>
            That's not an AI strategy. That's a liability.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            The businesses getting real value from AI aren't the ones handing employees a ChatGPT subscription and hoping for the best. They're the ones giving their teams purpose-built AI tools — connected to their business data, governed by their security policies, and designed for the work they actually do.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            That's what we build. Whether you need a full-scale AI platform or a focused chatbot that handles one job really well, we deliver AI that's private, branded, and built around how your business operates.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What Enigma's AI Systems Do for Your Business</h2>
          </div>
          <div className="grid-3 reveal-group">
            {benefits.map((b, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={b.icon} variant={i % 2 === 0 ? 'accent' : 'blue'} />
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '14px 0 10px' }}>{b.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>{b.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TWO PATHS TO AI */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--accent">Two Paths</span>
            <h2 className="display display--gradient heading-lg">AI Isn't One-Size-Fits-All. Pick the Path That Fits.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              Some businesses are ready for a full-scale AI platform that becomes the nerve center of their operations. Others just need a smart, focused tool that handles one job really well. We build both — and everything in between.
            </p>
          </div>
          <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto' }}>
            <TiltCard className="card card--glass card--glow reveal" style={{ border: '1px solid rgba(255, 159, 65, 0.2)' }}>
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
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>
                A private, branded AI workspace with multi-model access, enterprise security, team workspaces, a knowledge base, and full cost transparency. The complete AI infrastructure for your organization.
              </p>
            </TiltCard>
            <TiltCard className="card card--glass card--glow reveal">
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
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>
                Standalone AI chatbots and custom integrations that bring intelligent automation to your business at an accessible price point. Secure, branded, and trained on your information.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FLAGSHIP PRODUCT: VAULT */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col reveal" style={{ marginBottom: 64 }}>
            <div>
              <span className="badge badge--accent">Flagship Product</span>
              <h2 className="display display--gradient heading-lg">Your Business. Your AI. One Platform.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                Vault by Enigma is our flagship AI workspace platform — a secure, fully branded environment where your entire organization can access the power of leading AI models from a single dashboard.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                This isn't consumer-grade AI with your logo on it. Vault is integrated with your business data, your processes, and your people from day one. It understands your workflows. It enforces your security policies. And it gives you complete transparency into every conversation and every dollar spent.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                Your team gets access to the AI models you choose — OpenAI, Anthropic, Google, xAI, and Meta — with team workspaces, a shared knowledge base, custom personas, workflow automation, audio transcription, and enterprise-grade security. You pay AI providers directly at their published rates with zero markup.
              </p>
            </div>
            <div className="preview-box" style={{ height: 420, minHeight: 300 }}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <LayoutGrid size={64} style={{ color: 'var(--border-default)', marginBottom: 16 }} />
                <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>Platform Dashboard Preview</p>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <h3 className="display display--gradient heading-md">Platform Capabilities</h3>
          </div>
          <div className="grid-3 reveal-group">
            {platformCapabilities.map((f, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={f.icon} variant={i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'blue' : 'cyan'} />
                <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — AI CHATBOTS & INTEGRATIONS */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div className="preview-box" style={{ height: 420, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <MessageSquare size={64} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Chatbots & Integrations</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                Not Ready for the Full Platform? Start Here.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16 }}>
                Not every business needs a full-scale AI workspace on day one. For organizations that want to start smaller — or solve a specific problem fast — we build standalone AI chatbots and custom integrations that bring intelligent automation to your business at a fraction of the cost.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16 }}>
                Think of it as your business's own AI assistant — but in a secure environment, trained on your information, and branded to your company. It answers questions your team or your customers ask, using the data you've given it. No generic responses. No data leaking to third parties. Just a focused AI tool that does one thing really well.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 32 }}>
                We handle the setup, load your business data into the backend, configure the tone and behavior, and hand you a polished, ready-to-use tool.
              </p>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 20, letterSpacing: '0.02em' }}>
                How Businesses Use AI Chatbots & Integrations:
              </h4>
              {chatbotUseCases.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                  <IconBox icon={c.icon} size={40} />
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: 'var(--text-dark)' }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SECURITY & PRIVACY */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
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
                  <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW WE WORK */}
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
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: 'var(--accent)',
                      minWidth: 40,
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                    }}>
                      {step.num}
                    </span>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-light)', marginBottom: 4 }}>{step.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
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

      {/* SECTION 9 — CTA */}
      <CTABlock
        headline="Let's Build Your AI Advantage"
        text="Whether you're ready for the full platform or want to start with a focused chatbot, we'll help you find the right fit. Tell us about your business, and we'll show you what AI can do for it. Every conversation starts with a free consultation."
        buttonText="Schedule a Consultation"
      />
    </div>
  )
}
