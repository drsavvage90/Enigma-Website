import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import AnimatedCounter from '../components/AnimatedCounter'
import TiltCard from '../components/TiltCard'
import VolumetricHero from '../components/hero/VolumetricHero'
import {
  ArrowRight, Brain, Smartphone, Globe,
  Wrench, Shield, Layers, Handshake,
} from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    title: 'Custom AI Systems',
    desc: 'Harness the power of leading AI models in a secure, branded platform built around your business. From our flagship multi-LLM environment to standalone chatbots, we make AI work for you.',
    link: '/ai-systems',
    linkText: 'Explore AI Systems',
    image: '/images/pillar-ai.svg',
    imageAlt: 'AI neural network and multi-model system',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Give your customers a direct, branded channel right in their pocket. We build custom mobile apps for service scheduling, e-commerce, loyalty programs, and more.',
    link: '/mobile-apps',
    linkText: 'Explore Mobile Apps',
    image: '/images/pillar-mobile.svg',
    imageAlt: 'Custom mobile app mockups on iOS and Android',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Replace clunky spreadsheets and disconnected workflows with streamlined, professional digital tools. Client portals, admin dashboards, and custom web applications.',
    link: '/web-apps',
    linkText: 'Explore Web Apps',
    image: '/images/pillar-web.svg',
    imageAlt: 'Web application dashboard interface',
  },
]

const differentiators = [
  { icon: Wrench, title: 'Custom-Built, Not Off-the-Shelf', text: 'Every product is designed specifically for your business, your workflows, and your goals. No templates. No generic solutions.' },
  { icon: Shield, title: 'Security-First Approach', text: 'Our platforms are built for data privacy and security from day one, suitable for regulated industries and businesses that take client data seriously.' },
  { icon: Layers, title: 'Full-Stack Capability', text: 'From AI to mobile to web, we handle your entire technology stack under one roof. One team. One vision. No juggling multiple vendors.' },
  { icon: Handshake, title: "We Don't Build and Walk Away", text: 'Continued maintenance, updates, and support through affordable annual plans. We\u2019re your long-term technology partner.' },
]

const trustTags = ['HVAC', 'Healthcare', 'Legal', 'Consulting', 'Service-Based Companies', 'Small & Mid-Sized Businesses']

const featureTags = [
  'AI Systems',
  'Mobile Apps',
  'Web Apps',
  'Client Portals',
  'Admin Dashboards',
  'Custom Integrations',
]

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
  'PostgreSQL', 'AWS', 'OpenAI', 'Claude', 'Gemini',
  'React Native', 'Docker', 'Vite', 'TailwindCSS',
]


export default function Home() {
  const ref = useReveal()
  const screenshotRef = useRef(null)

  // Intersection Observer for screenshot entrance animation
  useEffect(() => {
    const el = screenshotRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* ═══ HERO — Laser Beam Effect ═══ */}
      <VolumetricHero />

      {/* ═══ Vault Product Showcase ═══ */}
      <div style={{ background: '#08080d', paddingBottom: 80 }}>
        <div className="hero__screenshot-area">
          {/* Section heading */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="badge badge--accent">Flagship Product</span>
            <h2 className="display display--gradient heading-lg" style={{ marginBottom: 12 }}>
              Meet Vault by Enigma
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>
              A private, branded AI workspace with access to every leading model — secured, tracked, and controlled by your organization.
            </p>
          </div>

          {/* Screenshot with Alpha Tester cover */}
          <div ref={screenshotRef} className="hero__screenshot gradient-border">
            <div className="vault-screenshot-wrap">
              {/*
                TODO: Replace with real Vault screenshot or looping video/GIF.
                When ready, swap src to "/images/vault-screenshot.png" (or .mp4 via <video>).
              */}
              <img
                src="/images/vault-screenshot.svg"
                alt="Vault by Enigma — multi-LLM AI platform interface"
                loading="eager"
              />
              {/* CSS overlay bar to hide the "Alpha Tester" label */}
              <div className="vault-screenshot-cover" aria-hidden="true" />
            </div>
          </div>

          {/* Feature tags + Vault CTA */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <div className="hero__tags hero-fade hero-fade--4">
              {featureTags.map((tag, i) => (
                <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {i > 0 && <span className="tag-dot" />}
                  <span className="tag-label">{tag}</span>
                </span>
              ))}
            </div>
            <Link
              to="/vault"
              className="link-arrow"
              style={{ marginTop: 24, display: 'inline-flex', fontSize: 16 }}
            >
              Explore Vault <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ Animated Stats — Social Proof (#2) ═══ */}
      <div className="stats-row">
        <AnimatedCounter target={3} suffix="+" label="Projects Delivered" />
        <AnimatedCounter target={4} suffix="" label="Industries Served" />
        <AnimatedCounter target={100} suffix="%" label="Client Retention" />
        <AnimatedCounter target={3} suffix="" label="Core Service Lines" />
      </div>

      {/* ═══ Tech Stack Ticker (#10) ═══ */}
      <div className="tech-ticker" aria-label="Technologies we use">
        <div className="tech-ticker__track">
          {/* Duplicate for infinite scroll */}
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="tech-ticker__item">
              <div className="tech-ticker__dot" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Services — with TiltCards (#5) ═══ */}
      <section id="services" className="section theme-light" style={{ paddingTop: 100 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
            <span className="badge badge--accent">What We Build</span>
            <h2 className="display heading-lg heading-dark">
              Everything Your Business Needs
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              Three core pillars of custom technology, designed from scratch for the businesses they serve.
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
                  <img src={p.image} alt={p.imageAlt} />
                </div>
                {/* Card content */}
                <div style={{ padding: '24px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <IconBox icon={p.icon} />
                  <h3 style={{ fontSize: 22, marginTop: 16, marginBottom: 12, color: 'var(--text-dark)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                  <Link to={p.link} className="link-arrow">{p.linkText} <ArrowRight size={14} /></Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Enigma — with TiltCards (#5) ═══ */}
      <section className="section why-enigma-section noise-overlay">
        {/* Background image + overlay */}
        <div className="why-enigma-section__bg" />
        <div className="why-enigma-section__overlay" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="blob blob--blue float float--slow float--offset" style={{ width: 500, height: 500, top: '-20%', right: '-10%' }} />
          <div className="two-col section-z">
            <div className="reveal">
              <span className="badge badge--blue">Why Enigma</span>
              <h2 className="display display--gradient heading-lg">Why Businesses Choose Enigma</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 480 }}>
                We don't believe in one-size-fits-all. Every solution we build is purpose-designed for the client it serves — secure, intelligent, and ready to scale.
              </p>
            </div>
            <div className="grid-4 reveal-group" style={{ gap: 20 }}>
              {differentiators.map((d, i) => (
                <TiltCard key={i} className="card card--glass card--glow why-enigma-card reveal" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <IconBox icon={d.icon} size={40} variant="blue" />
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: '#fff' }}>{d.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{d.text}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Trust Bar ═══ */}
      <section style={{
        padding: '48px 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-deep)',
      }}>
        <div className="container reveal">
          <h3 style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: 20 }}>
            Trusted by Businesses Ready to Modernize
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
            {trustTags.map(tag => (
              <span key={tag} className="trust-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Ready to Build Something Extraordinary?"
        text="Tell us about your business, and we'll show you what's possible."
        buttonText="Let's Talk"
      />
    </div>
  )
}
