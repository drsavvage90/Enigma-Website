import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  ToggleLeft, DollarSign, ShieldCheck, Users,
  BookOpen, Server, Layers, Brain, Mic,
  ShieldOff, ClipboardList, BarChart3,
  Workflow, FileText, CheckCircle,
  Stethoscope, Briefcase, Scale, UsersRound,
} from 'lucide-react'

const benefits = [
  { icon: ToggleLeft, title: 'Access Every Model in One Place', desc: 'OpenAI, Anthropic, Google, Grok, Llama — your team picks the best model for every task from a single interface. No more juggling separate accounts and passwords.' },
  { icon: DollarSign, title: 'See Exactly What AI Costs You', desc: 'Per-message cost tracking, workspace budgets, and usage reporting give you full transparency into AI spending. No markup — you pay providers directly at their published rates.' },
  { icon: ShieldCheck, title: 'Keep Sensitive Data Under Your Control', desc: 'PII and PHI detection scans every message before it reaches an AI provider. Configurable redaction rules, audit logging, and compliance toolkits protect your organization\'s information.' },
  { icon: Users, title: 'Give Every Team Their Own Space', desc: 'Isolated workspaces with their own models, policies, knowledge bases, and access controls. Marketing, legal, operations, and support can all use AI their way — within your guardrails.' },
  { icon: BookOpen, title: 'Ground AI in Your Organization\'s Knowledge', desc: 'Upload your documents, policies, and reference materials. Vault\'s RAG-powered knowledge base means AI responses are informed by your actual data — not just the internet.' },
  { icon: Server, title: 'Deploy It Your Way', desc: 'Cloud deployment on Vercel or self-hosted on Docker — with your branding, your domain, and your security policies. It\'s your platform. We just build and maintain it.' },
]

const capabilities = [
  { icon: ToggleLeft, title: 'Multi-Model Access & Comparison', desc: 'Your team gets access to every AI model you\'ve licensed — and can switch between them in a single conversation. The built-in model comparison tool lets you evaluate responses side by side, so you always know which model performs best for the task at hand.' },
  { icon: BookOpen, title: 'Knowledge Base & RAG', desc: 'Upload your documents, playbooks, policies, and reference materials. Vault indexes and chunks them automatically, then uses retrieval-augmented generation to ground AI responses in your organization\'s actual knowledge. Your team gets answers informed by your data — not just generic model training.' },
  { icon: Brain, title: 'Personas & Prompt Library', desc: 'Create reusable AI personas with custom instructions, tone guidelines, and domain context. Build a shared prompt library so your team starts from proven templates instead of writing prompts from scratch every time. The result is consistent, high-quality output across your entire organization.' },
  { icon: Workflow, title: 'Workflow Automation & Document Export', desc: 'Turn repetitive tasks into one-click workflows. Template-based document generation produces polished output in PDF, Word, Excel, PowerPoint, and Markdown formats — ready for clients, colleagues, or compliance files.' },
  { icon: Mic, title: 'Audio Transcription', desc: 'Record meetings, interviews, and calls directly in Vault or upload audio files. Deepgram-powered transcription turns audio into searchable, shareable text — with automatic naming, history, and the ability to feed transcripts directly into AI conversations for summarization or follow-up.' },
  { icon: ShieldOff, title: 'PII & PHI Detection', desc: 'Every message is scanned before it reaches an AI provider. Configurable detection rules identify and redact personally identifiable information and protected health information automatically. Your compliance team sets the rules. Vault enforces them.' },
  { icon: ClipboardList, title: 'Audit Logging & Usage Analytics', desc: 'Every significant action is captured in an immutable audit log — who used which model, what was sent, and when. Usage analytics and per-message cost tracking give you complete visibility into how your organization is using AI and what it\'s costing.' },
]

const processSteps = [
  { num: '01', title: 'We Learn What You Need', desc: 'Every deployment starts with a free consultation. We learn how your team plans to use AI, which models matter most, what compliance requirements you have, and what success looks like for your organization.' },
  { num: '02', title: 'We Configure Everything', desc: 'We set up your AI provider accounts, configure API connections, apply your branding, build your workspaces, load your knowledge base, and set up roles and permissions — all tailored to how your organization works.' },
  { num: '03', title: 'We Deploy and Train', desc: 'We launch your private Vault instance, walk your admin team through every feature, and provide hands-on training for your end users. When your team opens the platform, it\'s ready — with their models, their documents, and their workflows already in place.' },
  { num: '04', title: 'We Maintain and Evolve', desc: 'AI providers change constantly — new models, deprecated APIs, pricing updates, security patches. Our maintenance plans handle all of it so your platform stays current, secure, and running without interruption.' },
]

const pricingComponents = [
  { icon: Layers, title: 'Platform Deployment', tag: 'One-Time', price: 'From $5,000', desc: 'A one-time investment to set up, brand, and deploy your Vault instance. This covers everything from provider configuration and security setup to team onboarding. Tiers start at $5,000.' },
  { icon: BarChart3, title: 'AI Provider Usage', tag: 'Ongoing', price: 'At-Cost', desc: 'You pay AI providers directly at their published per-token rates. We set up and manage the connections — but the billing goes straight to your account. Zero markup.' },
  { icon: FileText, title: 'Maintenance', tag: 'Ongoing / Optional', price: 'From $200/mo', desc: 'Monthly plans that keep your platform updated, secure, and running smoothly. Covers model updates, security patches, and included hours for adjustments. Plans start at $200/month.' },
]

const deploymentTiers = [
  {
    name: 'Starter',
    price: '$5,000',
    models: '2 AI Models',
    timeline: '1–2 weeks',
    desc: 'The fastest path to a private AI workspace. Your organization gets its own branded Vault instance with two AI models of your choice, cost tracking, workspaces, personas, a shared knowledge base, and prompt management — deployed and ready in one to two weeks.',
    bestFor: 'Small to mid-size teams, departments, or organizations that want to centralize AI access with their own branding.',
    features: ['2 AI models of your choice', 'Branded workspace', 'Cost tracking & workspaces', 'Personas & prompt library', 'Knowledge base', '30-day post-launch support'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$10,000',
    models: '3 AI Models',
    timeline: '2–4 weeks',
    desc: 'A tailored AI platform built around your team\'s actual workflows. Three AI models, SAML SSO, PII/PHI detection, custom workflow templates, a fully loaded knowledge base, audio transcription, and up to five integrations.',
    bestFor: 'Professional service firms, healthcare practices, legal teams, financial institutions, and growing organizations that need compliance-aware AI with custom workflows.',
    features: ['Everything in Starter', '3 AI models', 'SAML SSO', 'PII/PHI detection', 'Audio transcription', 'Up to 5 integrations'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$20,000',
    models: '5 AI Models',
    timeline: '4–8+ weeks',
    desc: 'A fully customized, compliance-certified AI platform. Five AI models, custom feature development, HIPAA/SOC2/GDPR/PCI readiness, white-label branding, self-hosted Docker deployment, and a dedicated account manager.',
    bestFor: 'Regulated industries (healthcare, finance, legal), multi-department organizations, and enterprises that require compliance certifications and self-hosted infrastructure.',
    features: ['Everything in Professional', '5 AI models', 'HIPAA/SOC2/GDPR/PCI readiness', 'White-label branding', 'Self-hosted Docker deployment', 'Dedicated account manager'],
    highlight: false,
  },
  {
    name: 'Custom',
    price: 'Custom Quote',
    models: 'Unlimited Models',
    timeline: 'Discovery phase required',
    desc: 'For organizations whose vision extends beyond standard tiers. Unlimited AI models, roadmap features built on your timeline, multi-department architectures, and full custom development.',
    bestFor: 'Organizations building AI-powered products, large-scale multi-department rollouts, or anyone who needs something that doesn\'t exist yet.',
    features: ['Fully custom scope', 'Unlimited AI models', 'Paid discovery phase', 'Multi-department architecture', 'Roadmap features on your timeline', 'Custom SLA & support'],
    highlight: false,
  },
]

const maintenancePlans = [
  { name: 'Essential', price: '$200/mo', bestFor: 'Starter', hours: '2 hrs/mo', response: 'Standard' },
  { name: 'Professional', price: '$400/mo', bestFor: 'Professional', hours: '4 hrs/mo', response: 'Next Business Day' },
  { name: 'Enterprise', price: '$1,000/mo', bestFor: 'Enterprise', hours: '8 hrs/mo', response: 'Same Business Day' },
  { name: 'Custom', price: 'Custom Quote', bestFor: 'Custom', hours: 'Flexible', response: 'Custom SLA' },
]

const audiences = [
  { icon: Stethoscope, title: 'Healthcare & Compliance-Heavy Industries', desc: 'HIPAA-ready, PII/PHI detection, audit logging, and self-hosted deployment options give your compliance team the controls they need to approve AI adoption.' },
  { icon: Briefcase, title: 'Professional Services & Consulting', desc: 'Custom personas, knowledge bases loaded with your frameworks, and multi-model access help your team deliver better work faster — with consistent quality across engagements.' },
  { icon: Scale, title: 'Legal & Financial Services', desc: 'Data residency controls, immutable audit trails, SSO, and workspace-level isolation keep sensitive client information protected while your team leverages AI for research, drafting, and analysis.' },
  { icon: UsersRound, title: 'Growing Teams & Departments', desc: 'Centralize AI access, track spending, and give every team member the right models and resources without anyone managing their own subscriptions or sharing passwords.' },
]

export default function VaultByEnigma() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* SECTION 1 — HERO */}
      <PageHeader
        title="One Platform. Every AI Model. Complete Control."
        subtitle="Give your organization a private, branded AI workspace with access to the models you choose, enterprise security your compliance team will trust, and full transparency into every dollar spent. We set it up. You own it."
        blobColor="orange"
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">Vault by Enigma</span>
          <h2 className="display display--gradient heading-md">Your Team Is Already Using AI. The Question Is Whether You're in Control.</h2>
          <p className="body-text">
            Right now, people across your organization are using ChatGPT, Claude, Gemini, and other AI tools on personal accounts. They're paying with personal credit cards, sharing sensitive information with no compliance controls, and working in silos where nobody else can see — or benefit from — what they've built.
          </p>
          <p className="body-text">
            You have no visibility into what's being spent. No way to enforce data handling policies. No shared resources, no audit trail, and no way to compare which models actually work best for your team's tasks.
          </p>
          <p className="body-text">
            Vault by Enigma changes that. It gives your entire organization a single, private AI workspace where everyone has access to the models they need, every conversation is governed by your policies, and every dollar is tracked. You choose the AI providers. You control the data. You own the platform.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What Vault Does for Your Organization</h2>
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

      {/* SECTION 4 — PLATFORM CAPABILITIES */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--accent">Platform Capabilities</span>
            <h2 className="display display--gradient heading-lg">A Complete AI Platform — Not Just a Chat Interface</h2>
            <p className="section-subtitle">
              Vault isn't another ChatGPT wrapper. It's a full enterprise workspace with the tools your team needs to use AI productively, securely, and consistently.
            </p>
          </div>
          <div className="grid-3 reveal-group">
            {capabilities.map((c, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={c.icon} variant={i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'blue' : 'cyan'} />
                <h4 className="card-title--sm">{c.title}</h4>
                <p className="card-desc--sm">{c.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">How It Works</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                We Handle the Setup. You Get a Platform That's Ready to Use.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 32 }}>
                You don't need a technical team to deploy Vault. We handle every step — from provider accounts and API configuration to branding, security, and team onboarding. Here's how it works:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {processSteps.map((step, i) => (
                  <div key={i} className="process-step">
                    <span className="process-num">
                      {step.num}
                    </span>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>{step.title}</h4>
                      <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="preview-box" style={{ height: 520, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Layers size={80} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW PRICING WORKS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Pricing</span>
            <h2 className="display display--gradient heading-lg">You Pay for the Platform. You Pay Providers for Usage. That's It.</h2>
            <p className="section-subtitle">
              Vault's pricing is designed to be completely transparent. There are three components, and none of them have hidden fees:
            </p>
          </div>
          <div className="grid-3 reveal-group">
            {pricingComponents.map((p, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal" style={{ textAlign: 'center' }}>
                <IconBox icon={p.icon} variant={i === 0 ? 'accent' : i === 1 ? 'blue' : 'cyan'} />
                <span style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: 14,
                }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '6px 0 4px' }}>{p.title}</h3>
                <p className="tier-price--sm">
                  {p.price}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, textAlign: 'left' }}>{p.desc}</p>
              </TiltCard>
            ))}
          </div>
          <p className="reveal note-text">
            During your consultation, we'll help you estimate monthly AI costs based on your expected usage, recommend the right infrastructure, and make sure the total picture is clear before you commit to anything.
          </p>
        </div>
      </section>

      {/* SECTION 7 — DEPLOYMENT OPTIONS */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 500, height: 500, top: '20%', right: '-15%' }} />
        <div className="container section-z">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 16 }}>
            <span className="badge badge--accent">Deployment Options</span>
            <h2 className="display display--gradient heading-lg">Four Tiers. One Goal: The Right AI Platform for You.</h2>
            <p className="section-subtitle">
              Every deployment includes the full Vault platform — the tiers differ in how many AI models are included, how deeply we tailor it to your organization, and whether compliance certifications are part of the package.
            </p>
          </div>

          <div className="grid-4 reveal-group" style={{ marginTop: 48 }}>
            {deploymentTiers.map((tier, i) => (
              <TiltCard
                key={i}
                className={`card card--glass card--glow reveal${tier.highlight ? ' vault-tier--highlight' : ''}`}
                style={tier.highlight ? { border: '1px solid rgba(255, 159, 65, 0.3)', position: 'relative' } : {}}
              >
                {tier.highlight && (
                  <span className="tier-popular-tag">
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
                <p className="tier-price">
                  {tier.price}
                </p>
                <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                  {tier.models}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>
                  Timeline: {tier.timeline}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {tier.desc}
                </p>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Best for:
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  {tier.bestFor}
                </p>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, marginTop: 'auto' }}>
                  {tier.features.map((f, fi) => (
                    <div key={fi} className="feature-check">
                      <CheckCircle size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                      <span className="feature-check__text">{f}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — MAINTENANCE PLANS */}
      <section className="section--sm theme-dark">
        <div className="container">
          <div className="reveal section-header">
            <span className="badge badge--blue">Maintenance</span>
            <h2 className="display display--gradient heading-lg">AI Providers Change Constantly. Your Platform Shouldn't Break When They Do.</h2>
            <p className="section-subtitle">
              New models launch. APIs get deprecated. Pricing changes. Security vulnerabilities surface. Our maintenance plans handle all of it behind the scenes — so your team keeps using AI without interruption, and your compliance posture stays intact.
            </p>
          </div>

          <div className="grid-4 reveal-group">
            {maintenancePlans.map((plan, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                <p className="tier-price--sm">
                  {plan.price}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="plan-row">
                    <span className="plan-row__label">Best For</span>
                    <span className="plan-row__value">{plan.bestFor}</span>
                  </div>
                  <div className="plan-row">
                    <span className="plan-row__label">Included Hours</span>
                    <span className="plan-row__value">{plan.hours}</span>
                  </div>
                  <div className="plan-row">
                    <span className="plan-row__label">Response Time</span>
                    <span className="plan-row__value">{plan.response}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <p className="reveal note-text">
            All maintenance plans are billed monthly and can be adjusted or cancelled with 30 days' notice. Annual discounts are available for every tier. Hours do not roll over month to month. Additional development beyond included hours is available at a preferred rate for active maintenance clients. Additional AI models beyond your tier's included count can be added at any time for a one-time setup fee of $500–$1,000 per model, depending on provider complexity.
          </p>
        </div>
      </section>

      {/* SECTION 9 — WHO IT'S FOR */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow" style={{ width: 400, height: 400, top: '-10%', left: '-10%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--accent">Who It's For</span>
            <h2 className="display display--gradient heading-lg">Built for Organizations That Take AI Seriously</h2>
            <p className="section-subtitle">
              If your team uses AI, you need a platform that governs it.
            </p>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {audiences.map((a, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={a.icon} variant={i % 2 === 0 ? 'accent' : 'cyan'} />
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: '14px 0 10px' }}>{a.title}</h3>
                <p className="card-desc">{a.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA */}
      <CTABlock
        headline="Ready to Take Control of AI at Your Organization?"
        text="Tell us about your team, your compliance requirements, and how you're using AI today. We'll show you exactly how Vault fits — and what it would cost. Every conversation starts with a free consultation."
        buttonText="Schedule a Consultation"
      />
    </div>
  )
}
