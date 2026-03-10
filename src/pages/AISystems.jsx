import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Lock, Palette, Lightbulb, Clock, Brain,
  ArrowRight, Bot, Headphones,
  FileText, BarChart3, ShieldCheck,
  Plug, BookOpen, Mic, Users,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   BENEFITS — customer-outcome focused
   ═══════════════════════════════════════════════════ */
const benefits = [
  { image: '/images/benefit_privacy.webp', title: 'Your Data Stays Private', desc: 'Everything your team types stays in a secure environment you control. No data leaking into third-party training sets.' },
  { image: '/images/benefit_knowledge.webp', title: 'AI That Knows Your Business', desc: 'We integrate your documents and processes so AI gives answers informed by your company\'s actual information, not generic responses.' },
  { image: '/images/benefit_branding.webp', title: 'Branded to Your Company', desc: 'Your logo, your colors, your name. Your team and clients interact with AI that feels like it belongs to your organization.' },
  { image: '/images/benefit_time.webp', title: 'Hours Saved Every Week', desc: 'Automate repetitive tasks, generate documents, and surface information instantly. AI becomes a productivity multiplier for your team.' },
]

/* ═══════════════════════════════════════════════════
   EXAMPLES OF WHAT WE BUILD — illustrative, not exhaustive
   ═══════════════════════════════════════════════════ */
const examples = [
  { icon: Headphones, title: 'Customer-Facing Chat Assistants', desc: 'An AI on your website that knows your services, pricing, and processes, answering customer questions and capturing leads 24/7.', image: '/images/card-ai-chatbot.svg' },
  { icon: BookOpen, title: 'Internal Knowledge Tools', desc: 'Your team asks a question in plain language and gets an answer from your actual documents (SOPs, policies, manuals) in seconds.', image: '/images/card-ai-knowledge.svg' },
  { icon: FileText, title: 'Document Generation & Automation', desc: 'AI that drafts proposals, contracts, reports, or estimates based on your templates and client data. First drafts in seconds, not hours.', image: '/images/card-ai-docgen.svg' },
  { icon: BarChart3, title: 'Data Analysis & Insight Dashboards', desc: 'Connect your existing data and surface trends, anomalies, and recommendations in plain language. Turn raw numbers into decisions.', image: '/images/card-ai-analytics.svg' },
  { icon: ShieldCheck, title: 'Quality Control & Review', desc: 'AI that reviews work product before it goes out, checking for brand voice, factual accuracy, missing clauses, or formatting standards.', image: '/images/card-ai-review.svg' },
  { icon: Plug, title: 'Custom Integrations & Workflow AI', desc: 'AI-powered connections between your existing tools like customer databases, email, scheduling platforms, and more. Automate the handoffs your team does manually today.', image: '/images/card-ai-workflow.svg' },
]


export default function AISystems() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="AI That Actually Knows Your Business"
        subtitle="We build custom AI systems designed around the way your business actually works. Private, branded, and connected to your data. Not generic tools. Not consumer-grade. Built for you."
        blobColor="orange"
        primaryCta={{ text: 'See How AI Fits Your Business', to: '/contact' }}
        secondaryCta={{ text: 'See Our Flagship Platform', to: '/vault' }}
        image="/images/aisystems-hero.jpg"
        imageAlt="User interacting with an AI chat interface on a laptop"
        imageLayout="image-left"
      />

      {/* ═══ THE PROBLEM ═══ */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="badge badge--accent">The Problem</span>
          <h2 className="display display--gradient heading-md">There's a Good Chance Your Team Is Using AI Right Now on Accounts You Don't Control.</h2>
          <p className="body-text">
            They're typing sensitive business information into ChatGPT and Claude on personal accounts. Paying with personal credit cards. Working in isolation where nobody else benefits from what they've built. That's not an AI strategy. That's a liability.
          </p>
          <p className="body-text">
            The businesses getting real value from AI aren't handing employees a subscription and hoping for the best. They're giving their teams purpose-built AI tools connected to their data, governed by their policies, and designed for the work they actually do.
          </p>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What Changes When AI Actually Works for You</h2>
          </div>
          <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto', gap: 24 }}>
            {benefits.map((b, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: 260, overflow: 'hidden' }}>
                  <img src={b.image} alt={b.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 className="card-title">{b.title}</h3>
                  <p className="card-desc">{b.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE BUILD — examples of range, not categories ═══ */}
      <section className="section theme-light">
        <div className="container">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--accent">What We Build</span>
            <h2 className="display heading-lg heading-dark">
              If Your Business Has a Problem, AI Can Probably Solve It
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              We don't sell a fixed menu of AI products. We learn how your business operates, identify where AI can deliver the most impact, and build exactly what you need. Here are some examples of what that looks like:
            </p>
          </div>
          <div className="grid-3 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {examples.map((ex, i) => (
              <TiltCard key={i} className="reveal" style={{
                padding: 0,
                borderRadius: 16,
                textAlign: 'left',
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ height: 180, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={ex.image} alt={ex.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <IconBox icon={ex.icon} />
                  <h4 style={{ fontSize: 16, fontWeight: 600, margin: '12px 0 8px', color: 'var(--text-dark)' }}>{ex.title}</h4>
                  <p style={{ color: 'var(--text-body)', fontSize: 13, lineHeight: 1.65 }}>{ex.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ color: 'var(--text-body)', fontSize: 16, fontStyle: 'italic' }}>
              Don't see your use case? That's fine. These are just examples. Tell us what you need and we'll design the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TWO PATHS — visual showcase ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--blue">Two Starting Points</span>
            <h2 className="display display--gradient heading-md">Start With a Focused Tool or Go All In. We Build Both.</h2>
            <p className="section-subtitle">
              Some businesses are ready for a full-scale AI platform. Others just need a smart, focused tool that handles one job really well. There's an entry point for every budget.
            </p>
          </div>
          <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto', gap: 24 }}>
            <TiltCard className="card card--glass card--glow reveal" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img src="/images/aisystems-multi-llm.webp" alt="Multi-LLM AI platform model selection interface" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Vault: Full AI Platform</h3>
                <p className="card-desc">A private AI workspace with multiple leading models, enterprise security, cost tracking, and team management. The complete AI infrastructure.</p>
                <Link to="/vault" className="link-arrow" style={{ marginTop: 12 }}>Explore Vault <ArrowRight size={14} /></Link>
              </div>
            </TiltCard>
            <TiltCard className="card card--glass card--glow reveal" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img src="/images/aisystems-chatbots.webp" alt="AI chatbot interface on mobile devices" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Standalone AI Tools</h3>
                <p className="card-desc">A single AI system built for a specific job: a chatbot, a document generator, a data analyzer, or anything else your business needs.</p>
                <Link to="/contact" className="link-arrow" style={{ marginTop: 12 }}>Tell Us What You Need <ArrowRight size={14} /></Link>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT COMES TOGETHER — two real-world scenarios with images ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow float--offset" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />
        <div className="container section-z">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--accent">In Practice</span>
            <h2 className="display display--gradient heading-lg">What This Looks Like for Real Businesses</h2>
          </div>

          {/* Scenario 1: Customer-facing */}
          <div className="two-col reveal" style={{ gap: 56, marginBottom: 64 }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: '#fff' }}>For Your Customers</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                A potential customer visits your website at 9pm on a Saturday. Instead of a generic contact form, they're greeted by an AI assistant that knows your services, your pricing, your service area, and your scheduling availability. They get real answers, book an appointment, and become a lead, all while your team is off the clock.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: Headphones, text: '24/7 availability: nights, weekends, holidays' },
                  { icon: Bot, text: 'Trained on your FAQs, pricing, and processes' },
                  { icon: Users, text: 'Captures leads and routes them to your team' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <IconBox icon={f.icon} size={36} variant="accent" />
                    <span style={{ color: 'var(--text-muted)', fontSize: 15 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <TiltCard noGlow className="preview-box">
              <img src="/images/aisystems-customer.jpg" alt="AI chat assistant on a business website" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </TiltCard>
          </div>

          {/* Scenario 2: Internal */}
          <div className="two-col two-col--reversed reveal" style={{ gap: 56 }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: '#fff' }}>For Your Team</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                A new employee needs to find your company's policy on a specific procedure. Instead of searching shared drives or waiting for the one person who knows the answer, they ask your internal AI tool in plain language and get an accurate response pulled directly from your own documents in seconds.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: BookOpen, text: 'Answers from your actual SOPs, manuals, and policies' },
                  { icon: Mic, text: 'Record meetings and turn them into searchable text' },
                  { icon: Brain, text: 'Gets smarter as you add documents over time' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <IconBox icon={f.icon} size={36} variant="blue" />
                    <span style={{ color: 'var(--text-muted)', fontSize: 15 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <TiltCard noGlow className="preview-box">
              <img src="/images/aisystems-internal.jpg" alt="Internal AI knowledge base interface" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Let's Build Your AI Advantage"
        text="Tell us about your business and we'll show you where AI can make the biggest impact. Every conversation starts with a free consultation."
        buttonText="Get a Custom AI Recommendation"
      />
    </div>
  )
}
