import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Building2, Wrench, Shield, PackageOpen, Brain,
} from 'lucide-react'

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
      />

      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <span className="badge badge--accent">Our Focus</span>
          <h2 className="display display--gradient heading-md">We Don't Specialize in One Industry. We Specialize in Solving Problems.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Every industry has unique workflows, compliance requirements, and customer expectations. We take the time to understand your world, then build software that's purpose-designed for it.
          </p>
        </div>
      </section>

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--fast float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--blue">Who We Serve</span>
            <h2 className="display display--gradient heading-lg">Industries & Business Types</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
          }} className="reveal-group">
            {categories.map((c, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={c.icon} />
                <h3 style={{ fontSize: 20, fontWeight: 600, margin: '14px 0 10px' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>{c.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sm theme-light">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="badge badge--accent">Tailored</span>
          <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)', marginBottom: 16 }}>
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
