import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Building2, Wrench, Shield, PackageOpen, Brain,
} from 'lucide-react'

const industries = [
  'Healthcare', 'Construction', 'Legal', 'Consulting', 'Marketing',
  'HVAC', 'Real Estate', 'Manufacturing', 'Retail', 'Education',
  'Nonprofit', 'Finance', 'Hospitality', 'Logistics', 'Agriculture',
]

const categories = [
  { icon: Building2, title: 'Small to Mid-Sized Businesses', desc: "You're competing against companies with bigger budgets and bigger tech teams. Custom software levels the playing field — giving you enterprise-grade tools without the enterprise price tag." },
  { icon: Wrench, title: 'Service-Based Companies', desc: 'HVAC, healthcare, legal, consulting, and beyond. If your business runs on appointments, service calls, and client relationships, we build the apps and portals that streamline those interactions.' },
  { icon: Shield, title: 'Regulated Industries', desc: 'Healthcare, finance, legal, and other industries with strict compliance requirements need software built to those standards. Our security-first approach ensures your tools meet the regulations your industry demands.' },
  { icon: PackageOpen, title: 'Companies That Have Outgrown SaaS', desc: "You started with generic tools, but now you're bending them in ways they weren't designed for. If you're paying for five different platforms and none of them do exactly what you need, it's time for something purpose-built." },
  { icon: Brain, title: 'Businesses Ready to Integrate AI', desc: "You know AI can help your business, but you don't know where to start — or you've tried consumer tools and hit their limits. We build AI systems that are secure, practical, and tailored to your workflows." },
]

export default function Industries() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Technology That Fits Your Industry"
        subtitle="We serve businesses across a wide range of industries, with a focus on organizations that are ready to modernize their operations with intelligent, custom-built software."
        blobColor="orange"
        primaryCta={{ text: 'Contact Us', to: '/contact' }}
        secondaryCta={{ text: 'Explore Our Services', to: '/ai-systems' }}
      />

      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <span className="badge badge--accent">Our Focus</span>
          <h2 className="display display--gradient heading-md">We Don't Specialize in One Industry. We Specialize in Solving Problems.</h2>
          <p className="body-text">
            Every industry has unique workflows, compliance requirements, and customer expectations. We take the time to understand your world, then build software that's purpose-designed for it.
          </p>
        </div>
      </section>

      {/* Industry Ticker */}
      <div className="industry-ticker" aria-label="Industries we serve">
        <div className="industry-ticker__track">
          {[...industries, ...industries].map((name, i) => (
            <div key={i} className="industry-ticker__item">
              <div className="industry-ticker__dot" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section industries-types-section" style={{ position: 'relative' }}>
        <div className="industries-types-section__bg" />
        <div className="industries-types-section__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--blue">Who We Serve</span>
            <h2 className="display display--gradient heading-lg">Industries & Business Types</h2>
          </div>
          <div className="industries-card-grid reveal-group">
            {categories.map((c, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={c.icon} />
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sm theme-light">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="badge badge--accent">Tailored</span>
          <h2 className="display heading-lg heading-dark" style={{ marginBottom: 16 }}>
            Every Solution Is Adapted to Your World
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: 17, lineHeight: 1.8 }}>
            We don't just swap out a logo and call it customized. Every project we take on is shaped by the specific needs, workflows, and compliance requirements of the industry it serves. The result is software that doesn't feel like it was made for "businesses in general." It feels like it was made for yours.
          </p>
        </div>
      </section>

      <CTABlock
        headline="Don't See Your Industry? We Probably Still Fit."
        text="Our approach works across industries because it starts with your business, not a template. Tell us what you need, and we'll show you how custom software can help."
        buttonText="Tell Us About Your Business"
      />
    </div>
  )
}
