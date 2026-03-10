import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  CheckCircle, ChevronDown, ArrowRight,
  Smartphone, Globe, Brain, Cpu,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   1. VAULT TIERS
   ═══════════════════════════════════════════════════ */
const vaultTiers = [
  {
    name: 'Starter', price: '$5,000', detail: '2 AI Models | 1-2 weeks',
    desc: 'Your own branded Vault instance with two AI models, cost tracking, workspaces, personas, knowledge base, and prompt management.',
    bestFor: 'Small to mid-size teams centralizing AI access.',
    features: ['2 AI models of your choice', 'Branded workspace', 'Cost tracking & workspaces', 'Personas & prompt library', 'Knowledge base', '30-day support'],
    highlight: false,
  },
  {
    name: 'Professional', price: '$10,000', detail: '3 AI Models | 2-4 weeks',
    desc: 'Tailored AI platform with single sign-on, automatic sensitive-data detection, custom workflows, built-in transcription, and up to five tool connections.',
    bestFor: 'Professional services, healthcare, legal, financial institutions.',
    features: ['Everything in Starter', '3 AI models', 'Single sign-on (SSO)', 'Sensitive data detection', 'Digital note taker', 'Up to 5 integrations'],
    highlight: true,
  },
  {
    name: 'Enterprise', price: '$20,000', detail: '5 AI Models | 4-8+ weeks',
    desc: 'Fully customized and compliance-certified. Healthcare, financial, and data privacy standards built in. Your branding everywhere. Hosted on your own infrastructure if needed.',
    bestFor: 'Regulated industries, multi-department organizations, enterprises.',
    features: ['Everything in Professional', '5 AI models', 'Full compliance certification', 'Your branding everywhere', 'Hosted on your infrastructure', 'Dedicated account manager'],
    highlight: false,
  },
  {
    name: 'Custom', price: 'Custom Quote', detail: 'Unlimited Models | Discovery required',
    desc: 'Unlimited models, roadmap features on your timeline, multi-department architectures, and full custom development.',
    bestFor: 'AI-powered products, large-scale rollouts, or needs beyond standard tiers.',
    features: ['Fully custom scope', 'Unlimited AI models', 'Paid discovery phase', 'Multi-department architecture', 'Custom SLA & support'],
    highlight: false,
  },
]

/* ═══════════════════════════════════════════════════
   3. MOBILE APP TIERS
   ═══════════════════════════════════════════════════ */
const mobileTiers = [
  {
    name: 'Simple App', price: '$3,000', timeline: '2-4 weeks',
    desc: 'A clean, professional mobile presence: informational app, service listings, basic contact, or a simple directory.',
    bestFor: 'Small businesses, sole proprietors, local service providers.',
    features: ['Works on iOS and Android', 'Up to 5-8 screens', 'Push notifications', 'App store submission', '30-day post-launch support'],
    highlight: false,
  },
  {
    name: 'Moderate App', price: '$8,000', timeline: '4-8 weeks',
    desc: 'Your app becomes a real working tool with user accounts, a management dashboard, admin tools, and connections to your existing systems.',
    bestFor: 'Growing businesses, service companies, healthcare practices.',
    features: ['Everything in Simple', 'User accounts & management dashboard', 'Admin panel & permission controls', 'Up to 2 integrations', 'Analytics & 60-day support'],
    highlight: true,
  },
  {
    name: 'Complex App', price: '$12,000', timeline: '8-16+ weeks',
    desc: 'Enterprise-grade: real-time features, complex workflows, multi-system integrations, and compliance support.',
    bestFor: 'Established businesses, healthcare, logistics, multi-location operations.',
    features: ['Everything in Moderate', 'Real-time chat & tracking', 'Advanced workflow automation', 'Connects to your existing systems', 'Healthcare & payment compliance', '90-day support'],
    highlight: false,
  },
  {
    name: 'Custom App', price: 'Custom Quote', timeline: 'Discovery phase',
    desc: 'Original concepts, legacy system integrations, or projects that span multiple tiers.',
    bestFor: 'Startups, unique product ideas, legacy systems.',
    features: ['Fully custom scope', 'Discovery phase included', 'Flexible integrations', 'Custom SLA & support'],
    highlight: false,
  },
]

/* ═══════════════════════════════════════════════════
   5. MAINTENANCE PLANS
   ═══════════════════════════════════════════════════ */
const maintenancePlans = [
  { name: 'Essential', price: '$200/mo', hours: '2 hrs/mo', response: 'Standard', bestFor: 'Simple apps & Vault Starter',
    includes: ['Bug fixes and crash resolution', 'OS compatibility updates', 'Security patches', 'Performance monitoring', '2 hours of adjustments per month', 'Email support during business hours'] },
  { name: 'Professional', price: '$400/mo', hours: '4 hrs/mo', response: 'Next Business Day', bestFor: 'Moderate apps & Vault Professional',
    includes: ['Everything in Essential', 'Priority bug fixes', 'Third-party connection maintenance', 'System performance tuning', '4 hours of feature work per month', 'Next-business-day response', 'Quarterly review call'] },
  { name: 'Premium', price: '$1,000/mo', hours: '8 hrs/mo', response: 'Same Business Day', bestFor: 'Complex apps & Vault Enterprise',
    includes: ['Everything in Professional', 'Same-day critical fixes', 'Proactive OS compatibility testing', 'Multi-system integration monitoring', 'Advanced security audits', '8 hours of development per month', 'Dedicated account manager', 'Monthly review call'] },
  { name: 'Custom', price: 'Custom Quote', hours: 'Flexible', response: 'Custom SLA', bestFor: 'Custom apps & Custom Vault',
    includes: ['Everything in Premium', 'Custom SLA with guaranteed response times', 'Dedicated engineering hours', 'Priority feature development', 'Multi-platform coordination', 'On-call support options'] },
]

/* ═══ Reusable tier card renderer ═══ */
function TierCard({ tier, showDetail = false }) {
  return (
    <TiltCard
      allowOverflow
      className={`card card--glass card--glow reveal${tier.highlight ? ' vault-tier--highlight' : ''}`}
      style={tier.highlight ? { border: '1px solid rgba(255, 159, 65, 0.3)', position: 'relative' } : {}}
    >
      {tier.highlight && <span className="tier-popular-tag">Most Popular</span>}
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
      <p className="tier-price">{tier.price}</p>
      {showDetail && tier.detail && (
        <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{tier.detail}</p>
      )}
      {tier.timeline && (
        <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>Timeline: {tier.timeline}</p>
      )}
      {!tier.timeline && <div style={{ marginBottom: 16 }} />}
      <p className="card-desc--sm" style={{ marginBottom: 16 }}>{tier.desc}</p>
      <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Best for:</p>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{tier.bestFor}</p>
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, marginTop: 'auto' }}>
        {tier.features.map((f, fi) => (
          <div key={fi} className="feature-check">
            <CheckCircle size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
            <span className="feature-check__text">{f}</span>
          </div>
        ))}
      </div>
    </TiltCard>
  )
}

/* ═══ Maintenance accordion ═══ */
function MaintenanceCard({ plan }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`card card--glass card--glow maintenance-plan-card${open ? ' maintenance-plan-card--open' : ''}`}>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
      <p className="tier-price--sm">{plan.price}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="plan-row"><span className="plan-row__label">Best For</span><span className="plan-row__value">{plan.bestFor}</span></div>
        <div className="plan-row"><span className="plan-row__label">Included Hours</span><span className="plan-row__value">{plan.hours}</span></div>
        <div className="plan-row"><span className="plan-row__label">Response Time</span><span className="plan-row__value">{plan.response}</span></div>
      </div>
      <button className="maintenance-plan-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>What's Included</span>
        <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0 }} />
      </button>
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

/* ═══ Section number badge ═══ */
function PhaseNumber({ num }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 12,
      background: 'rgba(255, 159, 65, 0.08)', border: '1px solid rgba(255, 159, 65, 0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 16, fontWeight: 700, color: 'var(--accent)',
      marginBottom: 12, flexShrink: 0,
    }}>
      {num}
    </div>
  )
}


export default function Pricing() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Transparent Pricing. No Surprises."
        subtitle="Every project is scoped individually, but you deserve to know the ballpark before we ever get on a call. Here's how our pricing works across all four service areas."
        blobColor="accent"
        primaryCta={{ text: 'Get a Custom Quote', to: '/contact' }}
      />

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">How Pricing Works</span>
          <h2 className="display display--gradient heading-md">Two Components. Both Straightforward.</h2>
          <div className="grid-2" style={{ maxWidth: 700, margin: '32px auto 0', gap: 24 }}>
            <div className="card card--glass" style={{ textAlign: 'center', padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>One-Time</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Project Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
                Design, development, and deployment of your custom software. Scoped individually. You'll know the exact cost before any work begins.
              </p>
            </div>
            <div className="card card--glass" style={{ textAlign: 'center', padding: 28 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Ongoing</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Maintenance & Support</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
                Monthly plans that keep your software updated, secure, and running. Includes development hours for changes and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 1 — VAULT BY ENIGMA
          ══════════════════════════════════════════════ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '10%', right: '-15%' }} />
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', marginBottom: 48 }}>
            <div>
              <PhaseNumber num="1" />
              <span className="badge badge--accent">Vault by Enigma</span>
              <h2 className="display display--gradient heading-lg">AI Platform Deployment</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                A private, branded AI workspace with multiple leading models, enterprise security, cost tracking, and team management. Every deployment includes the full platform. Tiers differ in model count, customization, and compliance certifications.
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: 14, marginTop: 12 }}>
                AI provider usage is billed at their published rates with no markup from us. Not sure if Vault is right for you? <Link to="/ai-systems" style={{ color: 'var(--accent)' }}>Compare all AI options</Link>.
              </p>
              <Link to="/vault" className="link-arrow" style={{ marginTop: 16, fontSize: 15 }}>
                Learn more about Vault <ArrowRight size={14} />
              </Link>
            </div>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <img src="/images/vault-hero.webp" alt="Vault by Enigma AI platform interface" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
          </div>
          <div className="grid-2 reveal-group" style={{ gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {vaultTiers.map((tier, i) => <TierCard key={i} tier={tier} showDetail />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 2 — CUSTOM AI SYSTEMS
          ══════════════════════════════════════════════ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <img src="/images/aisystems-chatbots.webp" alt="AI chatbot interfaces on mobile devices" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
            <div>
              <PhaseNumber num="2" />
              <span className="badge badge--blue">Custom AI Systems</span>
              <h2 className="display display--gradient heading-md" style={{ marginBottom: 16 }}>Standalone AI Tools & Integrations</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                Not every AI project needs the full Vault platform. Customer-facing chatbots, internal knowledge tools, document generators, data analyzers, and custom integrations are scoped individually based on complexity.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                {[
                  'Customer-facing chat assistants: from $3,000',
                  'Internal knowledge tools: from $5,000',
                  'Custom AI integrations: scoped individually',
                ].map((item, i) => (
                  <div key={i} className="feature-check">
                    <CheckCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get an AI Quote <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 3 — MOBILE APPS
          ══════════════════════════════════════════════ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 500, height: 500, top: '20%', left: '-15%' }} />
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', marginBottom: 48 }}>
            <div>
              <PhaseNumber num="3" />
              <span className="badge badge--accent">Mobile Applications</span>
              <h2 className="display display--gradient heading-lg">Mobile App Build Options</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                Every app is delivered on both iOS and Android. Every project starts with a free consultation to make sure you're in the right tier.
              </p>
              <Link to="/mobile-apps" className="link-arrow" style={{ marginTop: 16, fontSize: 15 }}>
                Learn more about mobile apps <ArrowRight size={14} />
              </Link>
            </div>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0 }}>
              <img src="/images/mobileapps-hero.webp" alt="Mobile app interfaces showing scheduling and dashboard" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
          </div>
          <div className="grid-2 reveal-group" style={{ gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {mobileTiers.map((tier, i) => <TierCard key={i} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 4 — WEB APPS
          ══════════════════════════════════════════════ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div>
              <PhaseNumber num="4" />
              <span className="badge badge--blue">Web Applications</span>
              <h2 className="display display--gradient heading-md" style={{ marginBottom: 16 }}>Web Apps Are Scoped Individually</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
                Client portals, admin dashboards, quoting tools, and custom web platforms vary too widely to fit into fixed tiers. Learn more about <Link to="/web-apps" style={{ color: 'var(--accent)' }}>what we build</Link>, or we'll scope yours during a free consultation and give you a clear, fixed quote before any work begins.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Web App Quote <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <img src="/images/webapps-client-portal.jpg" alt="Client-facing web application portal" loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAINTENANCE PLANS (applies to all services)
          ══════════════════════════════════════════════ */}
      <section className="section theme-dark">
        <div className="container">
          <div className="reveal section-header">
            <span className="badge badge--accent">Ongoing Support</span>
            <h2 className="display display--gradient heading-lg">Your Software Stays Current. Your Business Keeps Moving.</h2>
            <p className="section-subtitle">
              Every service above pairs with a maintenance plan. Operating system updates, security patches, provider changes, and your evolving needs all require ongoing attention. We handle it.
            </p>
          </div>
          <div className="grid-4 reveal-group">
            {maintenancePlans.map((plan, i) => (
              <MaintenanceCard key={i} plan={plan} />
            ))}
          </div>
          <p className="reveal note-text">
            All plans billed monthly. Cancel with 30 days' notice. Annual discounts available. Hours don't roll over. Additional development available at a preferred rate.
          </p>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Ready to Talk Numbers?"
        text="Every project starts with a free consultation. We'll scope your needs, recommend the right approach, and give you a clear quote with no surprises."
        buttonText="Get Your Custom Quote"
      />
    </div>
  )
}
