import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  ToggleLeft, DollarSign, ShieldCheck,
  BookOpen, Layers, Brain, Mic,
  BarChart3, FileText, CheckCircle, ArrowRight,
  ChevronDown,
  Stethoscope, Briefcase, Scale, UsersRound,
} from 'lucide-react'

const platformFeatures = [
  { icon: ToggleLeft, title: 'Every AI Model in One Place', desc: 'OpenAI, Anthropic, Google, Grok, Llama — your team picks the best model for every task from a single interface. Switch between models mid-conversation, compare responses side by side, and always know which model performs best for the work at hand.' },
  { icon: DollarSign, title: 'See Exactly What AI Costs You', desc: 'Per-message cost tracking, workspace budgets, and usage reporting give you full transparency into AI spending. No markup — you pay providers directly at their published rates. You\'ll always know what your organization is spending and where.' },
  { icon: Mic, title: 'Digital Note Taker', desc: 'Vault\'s AI-powered system acts as a digital note taker for meetings, interviews, and lectures. Record directly in the platform or upload audio files — then automatically get searchable text, summaries, and action items you can feed right back into AI conversations.' },
  { icon: BookOpen, title: 'Knowledge Base Powered by Your Data', desc: 'Upload your documents, playbooks, policies, and reference materials. Vault indexes them automatically and uses them to ground every AI response in your organization\'s actual knowledge — so your team gets answers informed by your data, not just the internet.' },
  { icon: Brain, title: 'Personas & Prompt Library', desc: 'Create reusable AI personas with custom instructions, tone guidelines, and domain context. Build a shared prompt library so your team starts from proven templates instead of writing prompts from scratch every time. The result is consistent, high-quality output across your entire organization.' },
  { icon: ShieldCheck, title: 'Security & Compliance Built In', desc: 'Every message is scanned for sensitive data before it reaches an AI provider. PII and PHI detection, configurable redaction rules, immutable audit logs, and workspace-level access controls keep your organization\'s information protected and your compliance team confident.' },
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
    desc: 'A tailored AI platform built around your team\'s actual workflows. Three AI models, SAML SSO, PII/PHI detection, custom workflow templates, a fully loaded knowledge base, digital note taker, and up to five integrations.',
    bestFor: 'Professional service firms, healthcare practices, legal teams, financial institutions, and growing organizations that need compliance-aware AI with custom workflows.',
    features: ['Everything in Starter', '3 AI models', 'SAML SSO', 'PII/PHI detection', 'Digital note taker', 'Up to 5 integrations'],
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
  {
    name: 'Essential',
    price: '$200/mo',
    bestFor: 'Starter',
    hours: '2 hrs/mo',
    response: 'Standard',
    includes: [
      'AI model updates as providers release new versions',
      'Security patches and vulnerability fixes',
      'Platform uptime monitoring',
      'Bug fixes and stability improvements',
      '2 hours of adjustments or minor changes per month',
      'Email support during business hours',
    ],
  },
  {
    name: 'Professional',
    price: '$400/mo',
    bestFor: 'Professional',
    hours: '4 hrs/mo',
    response: 'Next Business Day',
    includes: [
      'Everything in Essential',
      'AI model updates, including new model onboarding',
      'Security patches and compliance-related updates',
      'PII/PHI detection rule updates as regulations evolve',
      'Knowledge base maintenance and re-indexing',
      '4 hours of adjustments, feature tweaks, or workflow changes per month',
      'Next-business-day response on all support requests',
      'Quarterly platform review call',
    ],
  },
  {
    name: 'Enterprise',
    price: '$1,000/mo',
    bestFor: 'Enterprise',
    hours: '8 hrs/mo',
    response: 'Same Business Day',
    includes: [
      'Everything in Professional',
      'Priority AI model updates and beta access to new providers',
      'Proactive security monitoring and compliance patch management',
      'HIPAA/SOC2/GDPR/PCI audit support and documentation updates',
      'SSO and integration maintenance',
      '8 hours of development, feature work, or configuration changes per month',
      'Same-business-day response on all support requests',
      'Dedicated account manager',
      'Monthly platform review and optimization call',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom Quote',
    bestFor: 'Custom',
    hours: 'Flexible',
    response: 'Custom SLA',
    includes: [
      'Everything in Enterprise',
      'Unlimited AI model management across all providers',
      'Custom SLA with guaranteed response and resolution times',
      'Dedicated engineering hours scoped to your roadmap',
      'Multi-department platform administration',
      'Priority feature development and early access to new capabilities',
      'Custom reporting and executive dashboards',
      'On-call support options available',
    ],
  },
]

const audiences = [
  { icon: Stethoscope, title: 'Healthcare & Compliance-Heavy Industries', desc: 'HIPAA-ready, PII/PHI detection, audit logging, and self-hosted deployment options give your compliance team the controls they need to approve AI adoption.' },
  { icon: Briefcase, title: 'Professional Services & Consulting', desc: 'Custom personas, knowledge bases loaded with your frameworks, and multi-model access help your team deliver better work faster — with consistent quality across engagements.' },
  { icon: Scale, title: 'Legal & Financial Services', desc: 'Data residency controls, immutable audit trails, SSO, and workspace-level isolation keep sensitive client information protected while your team leverages AI for research, drafting, and analysis.' },
  { icon: UsersRound, title: 'Growing Teams & Departments', desc: 'Centralize AI access, track spending, and give every team member the right models and resources without anyone managing their own subscriptions or sharing passwords.' },
]

function MaintenancePlanCard({ plan }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`card card--glass card--glow maintenance-plan-card${open ? ' maintenance-plan-card--open' : ''}`}>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
      <p className="tier-price--sm">{plan.price}</p>
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

      {/* Accordion toggle */}
      <button
        className="maintenance-plan-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>What's Included</span>
        <ChevronDown size={16} style={{
          transition: 'transform 0.3s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          flexShrink: 0,
        }} />
      </button>

      {/* Accordion body */}
      <div className={`maintenance-plan-body${open ? ' open' : ''}`}>
        <div className="maintenance-plan-body__inner">
          {plan.includes.map((item, i) => (
            <div key={i} className="feature-check">
              <CheckCircle size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
              <span className="feature-check__text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function VaultByEnigma() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* SECTION 1 — HERO */}
      <PageHeader
        title="One Platform. Every AI Model. Complete Control."
        subtitle="Give your organization a private, branded AI workspace with access to the models you choose, enterprise security your compliance team will trust, and full transparency into every dollar spent. We set it up. You own it."
        blobColor="orange"
        primaryCta={{ text: 'Schedule a Consultation', to: '/contact' }}
        secondaryCta={{ text: 'See How It Works', to: '#how-it-works' }}
        image="/images/hero-vault.svg"
        imageAlt="Vault by Enigma — AI platform mockup on a computer screen"
        imageLayout="image-right"
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            {/* Left — Text */}
            <div>
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

            {/* Right — AI Model Logos */}
            <div className="ai-model-grid">
              {/* OpenAI / ChatGPT */}
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--openai">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.28 9.37a5.93 5.93 0 0 0-.51-4.88 6.01 6.01 0 0 0-6.47-2.9A5.93 5.93 0 0 0 10.83.01a6.01 6.01 0 0 0-5.73 4.15A5.93 5.93 0 0 0 1.13 7.8a6.01 6.01 0 0 0 .74 7.04 5.93 5.93 0 0 0 .51 4.88 6.01 6.01 0 0 0 6.47 2.9 5.93 5.93 0 0 0 4.47 1.58 6.01 6.01 0 0 0 5.73-4.15 5.93 5.93 0 0 0 3.97-3.64 6.01 6.01 0 0 0-.74-7.04ZM13.32 22.4a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.79-2.76a.78.78 0 0 0 .39-.67v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.5 4.48ZM3.56 18.29a4.49 4.49 0 0 1-.54-3.02l.14.09 4.79 2.76a.78.78 0 0 0 .78 0l5.85-3.38v2.33a.07.07 0 0 1-.03.06l-4.84 2.8a4.5 4.5 0 0 1-6.15-1.64ZM2.34 7.89a4.49 4.49 0 0 1 2.35-1.98v5.69a.78.78 0 0 0 .39.67l5.85 3.37-2.03 1.17a.07.07 0 0 1-.07 0L4 13.98a4.5 4.5 0 0 1-1.65-6.1Zm17.05 3.97-5.85-3.38L15.57 7.3a.07.07 0 0 1 .07 0l4.84 2.8a4.5 4.5 0 0 1-.69 8.1v-5.68a.78.78 0 0 0-.4-.67Zm2.01-3.03-.14-.09-4.79-2.77a.78.78 0 0 0-.78 0l-5.85 3.38V6.02a.07.07 0 0 1 .03-.06l4.84-2.8a4.5 4.5 0 0 1 6.7 4.67ZM8.69 13.16 6.67 12a.07.07 0 0 1-.04-.06V6.36a4.5 4.5 0 0 1 7.38-3.45l-.14.08L9.08 5.75a.78.78 0 0 0-.39.67v6.74Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="ai-model-card__name">ChatGPT</span>
                <span className="ai-model-card__company">OpenAI</span>
              </div>

              {/* Anthropic / Claude */}
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--anthropic">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.304 3.541h-3.48l6.15 16.918h3.48L17.304 3.54Zm-10.607 0L.546 20.459H4.1l1.273-3.646h6.475l1.273 3.646h3.554L10.525 3.54H6.697Zm-.51 10.283 2.224-6.37 2.225 6.37H6.187Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="ai-model-card__name">Claude</span>
                <span className="ai-model-card__company">Anthropic</span>
              </div>

              {/* Google / Gemini */}
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--gemini">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24A14.3 14.3 0 0 0 0 12 14.3 14.3 0 0 0 12 0a14.3 14.3 0 0 0 12 12 14.3 14.3 0 0 0-12 12Z" fill="url(#gemini-grad)"/>
                    <defs>
                      <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4285F4"/>
                        <stop offset=".5" stopColor="#9B72CB"/>
                        <stop offset="1" stopColor="#D96570"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="ai-model-card__name">Gemini</span>
                <span className="ai-model-card__company">Google</span>
              </div>

              {/* xAI / Grok */}
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--xai">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04 3h4.44l5.4 8.16L17.58 3h4.38L14.7 13.62 22.38 21h-4.5l-5.82-8.76L6.18 21H1.74l7.86-7.44L2.04 3Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="ai-model-card__name">Grok</span>
                <span className="ai-model-card__company">xAI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PLATFORM FEATURES (merged benefits + capabilities) */}
      <section className="section vault-features-section" style={{ position: 'relative' }}>
        <div className="vault-features-section__bg" />
        <div className="vault-features-section__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--accent">The Platform</span>
            <h2 className="display display--gradient heading-lg">Everything Your Team Needs to Use AI — In One Secure Workspace</h2>
            <p className="section-subtitle">
              Vault isn't another ChatGPT wrapper. It's a complete AI platform with multi-model access, built-in security, and the tools your organization needs to use AI productively, consistently, and on your terms.
            </p>
          </div>
          <div className="grid-3 reveal-group">
            {platformFeatures.map((f, i) => (
              <TiltCard key={i} className="card card--glass card--glow vault-feature-card reveal">
                <IconBox icon={f.icon} variant={i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'blue' : 'cyan'} />
                <h3 className="card-title">{f.title}</h3>
                <p className="card-desc">{f.desc}</p>
              </TiltCard>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section id="how-it-works" className="section theme-light">
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
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
                allowOverflow
                className={`card card--glass card--glow reveal vault-tier-card${tier.highlight ? ' vault-tier--highlight' : ''}`}
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
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
              <MaintenancePlanCard key={i} plan={plan} />
            ))}
          </div>

          <p className="reveal note-text">
            All maintenance plans are billed monthly and can be adjusted or cancelled with 30 days' notice. Annual discounts are available for every tier. Hours do not roll over month to month. Additional development beyond included hours is available at a preferred rate for active maintenance clients. Additional AI models beyond your tier's included count can be added at any time for a one-time setup fee of $500–$1,000 per model, depending on provider complexity.
          </p>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
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
