import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Building2, Wrench, Shield, PackageOpen, Brain,
  ArrowRight,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   INDUSTRIES — focused, honest list (not 15 generic ones)
   ═══════════════════════════════════════════════════ */
const industries = [
  { name: 'HVAC', image: '/images/industry-hvac.svg' },
  { name: 'Healthcare', image: '/images/industry-healthcare.svg' },
  { name: 'Legal', image: '/images/industry-legal.svg' },
  { name: 'Consulting', image: '/images/industry-consulting.svg' },
  { name: 'Home Services', image: '/images/industry-home-services.svg' },
  { name: 'Professional Services', image: '/images/industry-professional.svg' },
]

/* ═══════════════════════════════════════════════════
   CATEGORIES — reframed around customer pain points
   ═══════════════════════════════════════════════════ */
const categories = [
  {
    image: '/images/ind_smb.webp',
    title: 'Small to Mid-Sized Businesses',
    problem: "You're competing against companies with bigger budgets and bigger tech teams.",
    solution: 'Custom software levels the playing field, giving you enterprise-grade tools without the enterprise price tag.',
    cta: { text: 'See what we build', to: '/ai-systems' },
  },
  {
    image: '/images/ind_service.webp',
    title: 'Service-Based Companies',
    problem: 'Your business runs on appointments, service calls, and client relationships, but your tools weren\'t built for that.',
    solution: 'We build the apps and portals that streamline how your customers interact with you.',
    cta: { text: 'Explore mobile apps', to: '/mobile-apps' },
  },
  {
    image: '/images/ind_regulated.webp',
    title: 'Regulated Industries',
    problem: 'You need modern software, but compliance requirements make most vendors a non-starter.',
    solution: 'Our security-first approach means your tools meet the compliance standards your industry demands, including healthcare privacy, financial regulations, and beyond.',
    cta: { text: 'Explore AI systems', to: '/ai-systems' },
  },
  {
    image: '/images/ind_saas.webp',
    title: 'Companies That Have Outgrown SaaS',
    problem: 'You\'re paying for five different platforms and none of them do exactly what you need.',
    solution: 'Stop bending generic tools. Get something purpose-built for how your business actually operates.',
    cta: { text: 'Explore web apps', to: '/web-apps' },
  },
  {
    image: '/images/ind_ai.webp',
    title: 'Businesses Ready for AI',
    problem: 'You know AI can help, but you don\'t know where to start, or you\'ve tried consumer tools and hit their limits.',
    solution: 'We build AI systems that are secure, practical, and tailored to your workflows, not generic chatbots.',
    cta: { text: 'See our AI platform', to: '/vault' },
  },
]


export default function Industries() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Technology That Fits Your Industry"
        subtitle="We work with businesses across a range of industries, with a focus on organizations ready to replace generic tools with custom software that actually fits."
        blobColor="orange"
        primaryCta={{ text: 'Tell Us About Your Business', to: '/contact' }}
        secondaryCta={{ text: 'Explore Our Services', to: '/ai-systems' }}
      />

      {/* ═══ INDUSTRY TICKER (trimmed to 6) ═══ */}
      <div className="industry-ticker" aria-label="Industries we serve">
        <div className="industry-ticker__track">
          {[...industries, ...industries].map((item, i) => (
            <div key={i} className="industry-ticker__item">
              <img src={item.image} alt={item.name} width={40} height={40} className="industry-ticker__image" loading="lazy" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ BUSINESS TYPES — pain point → solution structure ═══ */}
      <section className="section industries-types-section" style={{ position: 'relative' }}>
        <div className="industries-types-section__bg" />
        <div className="industries-types-section__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--blue">Who We Serve</span>
            <h2 className="display display--gradient heading-lg">Find Your Situation</h2>
            <p className="section-subtitle">
              Every industry has unique workflows and requirements. Here's how we help businesses like yours.
            </p>
          </div>
          <div className="industries-card-grid reveal-group">
            {categories.map((c, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal" style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <img src={c.image} alt={c.title} width={400} height={220} loading="lazy" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '24px' }}>
                  <h3 className="card-title">{c.title}</h3>
                  <p style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
                    The problem:
                  </p>
                  <p className="card-desc" style={{ marginBottom: 12 }}>{c.problem}</p>
                  <p style={{ color: 'var(--text-light)', fontSize: 14, lineHeight: 1.6 }}>
                    {c.solution}
                  </p>
                  <Link to={c.cta.to} className="link-arrow" style={{ marginTop: 14 }}>
                    {c.cta.text} <ArrowRight size={14} />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Don't See Your Industry? Let's Talk Anyway."
        text="Our approach works across industries because it starts with your business, not a template. Tell us what you need."
        buttonText="Tell Us About Your Business"
      />
    </div>
  )
}
