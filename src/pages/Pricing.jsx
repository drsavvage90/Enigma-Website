import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  CheckCircle, ChevronDown, ArrowRight,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   1. VAULT TIERS
   ═══════════════════════════════════════════════════ */
const vaultTiers = [
  {
    name: 'Starter', price: '$1,999', detail: 'Full Platform Access | 1–2 weeks',
    desc: 'Your own branded AI workspace with every model, every core tool, and everything your team needs to replace scattered AI subscriptions with one system they\'ll actually use.',
    bestFor: 'Small to mid-size teams ready to centralize AI access, cut redundant subscriptions, and give everyone the same toolset.',
    features: ['Access to 2 Large Language Models', 'Your company branding on the platform', 'Workspaces to organize by team, project, or client', 'Custom personas and a shared prompt library', 'Document generation workflows (export AI work as PDF, DOCX, or Markdown)', 'Per-user cost tracking and usage dashboards', '30-day post-deployment support'],
    highlight: false,
  },
  {
    name: 'Professional', price: '$4,999', detail: 'Up to 2 Custom Features Built for You | 2–4 weeks',
    desc: 'Everything in Starter, plus enterprise security features and up to five custom-built AI tools designed around your workflows. This is where Vault stops being a platform and starts being your platform.',
    bestFor: 'Organizations that need more than chat - teams that want AI wired into their actual day-to-day operations, with the security to back it up.',
    features: ['Everything in Starter', 'Access to 4 Large Language Models', 'Up to 2 custom AI features built by our team (examples: instant proposal generators, client intake automation, report builders, smart document templates, internal knowledge search)', 'Built-in audio transcription with speaker identification', 'Up to 3 third-party integrations (CRM, project management, calendar, etc.)', 'Single sign-on (SAML SSO) - your team logs in with the credentials they already have', 'Automatic sensitive data detection before anything reaches the AI', 'Side-by-side model comparison to evaluate responses head-to-head', '60-day post-deployment support'],
    highlight: true,
  },
  {
    name: 'Enterprise', price: 'Starting at $11,988', detail: 'Compliance-Certified & Fully Tailored | 4–8+ weeks',
    desc: 'Everything in Professional, built to meet your compliance requirements, deployed on your terms, and managed with full audit control across every department.',
    bestFor: 'Regulated industries, multi-department organizations, and enterprises that need audit trails, budget controls, and total branding control.',
    features: ['Everything in Professional', 'Access to 6+ Large Language Models', 'Up to 5 custom AI features built by our team', 'Up to 5 third-party integrations', 'Full compliance certification support (HIPAA, SOC 2, data residency)', 'Role-based access control across six permission levels', 'Per-user and per-department budget caps with automated alerts', 'Complete audit logging for every action on the platform', 'Your branding on every screen - login, workspace, exports, everything', 'Self-hosted deployment option (your infrastructure, your data)', 'Dedicated account manager'],
    highlight: false,
  },
  {
    name: 'Custom', price: 'Custom Quote', detail: 'Discovery Required',
    desc: 'For organizations building an AI-powered product, rolling Vault out across hundreds of users, or needing capabilities that go beyond standard tiers.',
    bestFor: 'AI-powered products, large-scale rollouts, or needs that don\'t fit a box.',
    features: ['Fully custom scope through a paid discovery phase', 'Multi-department architecture with isolated workspaces', 'Roadmap features prioritized on your timeline', 'Custom SLA and dedicated engineering support'],
    highlight: false,
  },
]

/* ═══════════════════════════════════════════════════
   2. CUSTOM AI SYSTEM TIERS
   ═══════════════════════════════════════════════════ */
const aiTiers = [
  {
    name: 'Customer-Facing AI Assistant', price: 'From $2,999',
    desc: 'A branded chatbot trained on your business that handles FAQs, appointment scheduling, lead capture, or product recommendations. Your customers get instant answers; your team gets fewer repetitive calls.',
    bestFor: 'Businesses that want 24/7 customer support without hiring for it.',
    features: ['Trained on your business content and FAQs', 'Handles appointment scheduling and lead capture', 'Product or service recommendations', 'Branded to match your website and voice', 'Reduces repetitive calls and emails'],
    highlight: false,
  },
  {
    name: 'Internal Knowledge & Productivity Tools', price: 'From $4,999',
    desc: 'AI tools built for your team. Search across documents, summarize meeting notes, generate reports from your data, or automate workflows that eat up hours every week. Connects to the systems you already use.',
    bestFor: 'Teams drowning in documents, reports, or repetitive manual processes.',
    features: ['Search across internal documents in plain English', 'Meeting note summarization', 'Report generation from your data', 'Workflow automation for recurring tasks', 'Connects to the systems you already use'],
    highlight: true,
  },
  {
    name: 'Custom AI Integrations', price: 'Scoped Individually',
    desc: 'AI wired directly into your existing software stack. CRM enrichment, automated document processing, intelligent routing, data analysis pipelines - if there\'s a manual process that AI can handle, we\'ll scope it and give you a fixed quote.',
    bestFor: 'Organizations with manual processes that AI can automate inside their existing tools.',
    features: ['CRM enrichment and lead scoring', 'Automated document processing', 'Intelligent routing and classification', 'Data analysis pipelines', 'Fixed quote after scoping'],
    highlight: false,
  },
]

/* ═══════════════════════════════════════════════════
   3. MOBILE APP TIERS
   ═══════════════════════════════════════════════════ */
const mobileTiers = [
  {
    name: 'Simple App', price: '$2,999', timeline: '2–4 weeks',
    desc: 'A professional mobile presence that puts your business in your customers\' pockets. Think of it as your website\'s more useful sibling - with service listings, contact info, location details, and push notifications to stay top of mind.',
    bestFor: 'Local businesses, solo practitioners, and service providers who want to be findable and reachable from a phone.',
    features: ['Works on both iOS and Android', 'Up to 5–8 screens (home, services, about, contact, etc.)', 'Push notifications to reach your customers directly', 'Full app store submission on Apple and Google', '30 days of post-launch bug fixes and support'],
    highlight: false,
  },
  {
    name: 'Moderate App', price: '$7,999', timeline: '4–8 weeks',
    desc: 'Your app becomes a working tool, not just a brochure. Customers can log in, book appointments, view their history, or manage their account. You get a dashboard to manage everything behind the scenes.',
    bestFor: 'Growing businesses, service companies, and healthcare practices that need user accounts, scheduling, or admin controls.',
    features: ['Everything in Simple', 'User accounts with login, profiles, and personal dashboards', 'Admin panel so your team can manage users, content, and settings', 'Role-based permissions (owner, staff, customer)', 'Up to 2 integrations with your existing tools (calendar, CRM, payment processor)', 'Built-in analytics so you can see how the app is being used', '60 days of post-launch support'],
    highlight: true,
  },
  {
    name: 'Complex App', price: '$11,988', timeline: '8–16+ weeks',
    desc: 'Enterprise-grade functionality: real-time messaging, live tracking, multi-step workflows, and deep integrations with the systems your business already runs on. Built to handle compliance requirements if your industry demands it.',
    bestFor: 'Established businesses, healthcare organizations, logistics companies, and multi-location operations with complex workflows.',
    features: ['Everything in Moderate', 'Real-time features (live chat, order tracking, status updates)', 'Advanced workflow automation (multi-step approvals, routing, notifications)', 'Connects to your existing systems (EHR, ERP, inventory, payment platforms)', 'Healthcare and payment compliance support (HIPAA, PCI where applicable)', '90 days of post-launch support'],
    highlight: false,
  },
  {
    name: 'Custom App', price: 'Custom Quote', timeline: 'Discovery phase',
    desc: 'For original product ideas, legacy system overhauls, or projects that span multiple tiers. We start with a paid discovery phase to define exactly what you need, then give you a fixed quote.',
    bestFor: 'Startups with a product concept, businesses replacing legacy software, or anyone whose app doesn\'t fit neatly into the tiers above.',
    features: ['Fully custom scope defined through discovery', 'Flexible integrations with any system', 'Custom SLA and dedicated support', 'Architecture designed for your specific scale and use case'],
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
function TierCard({ tier, showDetail = false, featureLabel = "What's included:" }) {
  const [open, setOpen] = useState(false)
  return (
    <TiltCard
      allowOverflow
      className={`card card--glass card--glow reveal${tier.highlight ? ' vault-tier--highlight' : ''}`}
      style={tier.highlight ? { border: '1px solid rgba(255, 159, 65, 0.3)', position: 'relative' } : {}}
    >
      {tier.highlight && <span className="tier-popular-tag">Most Popular</span>}
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
      <p className="tier-price">{tier.price}</p>
      {tier.maintenance && (
        <p style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{tier.maintenance}</p>
      )}
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
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 0, marginTop: 'auto' }}>
        <button className="maintenance-plan-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span>{featureLabel}</span>
          <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0 }} />
        </button>
        <div className={`maintenance-plan-body${open ? ' open' : ''}`}>
          <div className="maintenance-plan-body__inner">
            {tier.features.map((f, fi) => (
              <div key={fi} className="feature-check">
                <CheckCircle size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span className="feature-check__text">{f}</span>
              </div>
            ))}
          </div>
        </div>
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
          PHASE 1 - VAULT BY ENIGMA
          ══════════════════════════════════════════════ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '10%', right: '-15%' }} />
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', marginBottom: 48 }}>
            <div>
              <span className="badge badge--accent">Vault by Enigma</span>
              <h2 className="display display--gradient heading-lg">Your Team's Private AI Workspace</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                Vault gives your entire team one secure place to use AI - every leading model, full conversation history, and usage tracking from day one. Every tier includes the complete platform. As you move up, you get custom-built features designed around how your organization actually works.
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: 14, marginTop: 12 }}>
                AI provider usage is billed at their published rates with no markup from us. Not sure if Vault is right for you? <Link to="/ai-systems" style={{ color: 'var(--accent)' }}>Compare all AI options →</Link>
              </p>
              <Link to="/vault" className="link-arrow" style={{ marginTop: 16, fontSize: 15 }}>
                Learn more about Vault <ArrowRight size={14} />
              </Link>
            </div>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <img src="/images/vault-hero.webp" alt="Vault by Enigma AI platform interface" width={500} height={300} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
          </div>
          <div className="grid-2 reveal-group" style={{ gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {vaultTiers.map((tier, i) => <TierCard key={i} tier={tier} showDetail />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 2 - CUSTOM AI SYSTEMS
          ══════════════════════════════════════════════ */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', marginBottom: 48 }}>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <img src="/images/aisystems-chatbots.webp" alt="AI chatbot interfaces on mobile devices" width={500} height={300} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
            <div>
              <span className="badge badge--blue">Custom AI Systems</span>
              <h2 className="display display--gradient heading-lg">AI That Works Inside Your Business</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                Not every AI project needs a full platform. Sometimes you need a chatbot that answers your customers' questions at 2 AM, a tool that lets your team search internal documents in plain English, or an integration that automates the report you build every Monday. We scope each project individually based on what it needs to do, and who it needs to do it for.
              </p>
              <Link to="/contact" className="link-arrow" style={{ marginTop: 16, fontSize: 15 }}>
                Get an AI Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid-2 reveal-group" style={{ gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {aiTiers.map((tier, i) => <TierCard key={i} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 3 - MOBILE APPS
          ══════════════════════════════════════════════ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 500, height: 500, top: '20%', left: '-15%' }} />
        <div className="container section-z">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', marginBottom: 48 }}>
            <div>
              <span className="badge badge--accent">Mobile Applications</span>
              <h2 className="display display--gradient heading-lg">One App. Both Platforms. Built for Your Business.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8 }}>
                Every mobile app we build works on iOS and Android from day one. The tiers below reflect what the app actually does, not just how many screens it has. Start with a free consultation, and we'll tell you exactly where your project lands.
              </p>
              <Link to="/mobile-apps" className="link-arrow" style={{ marginTop: 16, fontSize: 15 }}>
                Learn more about mobile apps <ArrowRight size={14} />
              </Link>
            </div>
            <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minWidth: 0 }}>
              <img src="/images/mobileapps-hero.webp" alt="Mobile app interfaces showing scheduling and dashboard" width={500} height={300} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
            </TiltCard>
          </div>
          <div className="grid-2 reveal-group" style={{ gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {mobileTiers.map((tier, i) => <TierCard key={i} tier={tier} featureLabel="What you're getting:" />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PHASE 4 - WEB APPS
          ══════════════════════════════════════════════ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div>
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
              <img src="/images/webapps-client-portal.jpg" alt="Client-facing web application portal" width={500} height={300} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 12 }} />
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
