import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import VolumetricHero from '../components/hero/VolumetricHero'
import {
  ArrowRight, Brain, Smartphone, Globe,
  Wrench, Shield, Layers, Handshake,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   SERVICE PILLARS — customer-centric descriptions
   ═══════════════════════════════════════════════════ */
const pillars = [
  {
    icon: Brain,
    title: 'Custom AI Systems',
    desc: 'Stop your team from using AI on personal accounts with no oversight. Give them a private, branded AI workspace you actually control.',
    link: '/ai-systems',
    linkText: 'Explore AI Systems',
    image: '/images/pillar-ai.png',
    imageAlt: 'AI neural network and multi-model system',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Your customers book, order, and pay right from their phone. A branded app on their home screen, one tap away.',
    link: '/mobile-apps',
    linkText: 'Explore Mobile Apps',
    image: '/images/pillar-mobile.png',
    imageAlt: 'Custom mobile app mockups on iOS and Android',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Replace the spreadsheets and email chains with client portals, admin dashboards, and custom tools your team actually wants to use.',
    link: '/web-apps',
    linkText: 'Explore Web Apps',
    image: '/images/pillar-web.png',
    imageAlt: 'Web application dashboard interface',
  },
]

/* ═══════════════════════════════════════════════════
   DIFFERENTIATORS — reframed around customer outcomes
   ═══════════════════════════════════════════════════ */
const differentiators = [
  {
    icon: Wrench,
    title: 'Designed Around Your Business, Not a Template',
    text: 'Your workflows are unique. Your software should be too. Every product we build starts with your operations, your customers, and your goals.',
  },
  {
    icon: Shield,
    title: 'Your Data Stays Under Your Control',
    text: 'Every platform we build is secured from day one with role-based access, encryption, and compliance-ready architecture for businesses that take client data seriously.',
  },
  {
    icon: Layers,
    title: 'One Team for Your Entire Tech Stack',
    text: 'AI, mobile, and web, all under one roof. You get one team, one vision, and no juggling multiple vendors who don\'t talk to each other.',
  },
  {
    icon: Handshake,
    title: 'A Long-Term Partner, Not a One-Time Contractor',
    text: 'You’ll never have to search for a new vendor when you need changes. Ongoing maintenance, updates, and support keep your software current and your business moving.',
  },
]

/* ═══════════════════════════════════════════════════
   INDUSTRIES — honest, focused list
   ═══════════════════════════════════════════════════ */
const industries = ['HVAC', 'Healthcare', 'Legal', 'Consulting', 'Service-Based Companies']


export default function Home() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO — Volumetric 3D Effect (preserved) ═══ */}
      <VolumetricHero />

      {/* ═══ SERVICES — Three Pillars with TiltCards ═══ */}
      <section id="services" className="section theme-light" style={{ paddingTop: 100 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
            <span className="badge badge--accent">What We Build</span>
            <h2 className="display heading-lg heading-dark">
              Three Ways We Help Your Business Work Smarter
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              Custom technology designed around how your business actually operates, not the other way around.
            </p>
          </div>

          <div className="grid-3 reveal-group">
            {pillars.map((p, i) => (
              <TiltCard key={i} className="reveal" style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 16,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden',
              }}>
                {/* Card image */}
                <div className="pillar-card__image">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                </div>
                {/* Card content */}
                <div style={{ padding: '24px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--text-dark)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                  <Link to={p.link} className="link-arrow">{p.linkText} <ArrowRight size={14} /></Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY ENIGMA — Differentiators with TiltCards ═══ */}
      <section className="section why-enigma-section noise-overlay">
        {/* Background image + overlay */}
        <div className="why-enigma-section__bg" />
        <div className="why-enigma-section__overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 500, height: 500, top: '-20%', right: '-10%' }} />
          <div className="section-z">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="badge badge--blue">Why Enigma</span>
              <h2 className="display display--gradient heading-lg">Why Businesses Choose Enigma</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 600, margin: '0 auto 24px' }}>
                Your business isn't generic, and your software shouldn't be either. Everything we build is designed for the specific business it serves, secured from the ground up, and backed by a team that sticks around.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8 }}>
                {industries.map(tag => (
                  <span key={tag} className="trust-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto', gap: 20 }}>
              {differentiators.map((d, i) => (
                <TiltCard key={i} className="card card--glass card--glow why-enigma-card reveal" style={{ padding: '28px 28px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <IconBox icon={d.icon} size={40} variant="blue" />
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6, color: '#fff' }}>{d.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{d.text}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Not Sure Where to Start?"
        text="Tell us what's not working in your business, and we'll show you what's possible."
        buttonText="Get a Free Recommendation"
      />
    </div>
  )
}
