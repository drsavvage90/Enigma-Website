import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import { ChevronDown, ArrowRight } from 'lucide-react'

/* ═══════════════════════════════════════════════════
   FAQ DATA — rewritten with specific numbers,
   customer-first framing, and objection-handling Qs
   ═══════════════════════════════════════════════════ */
const faqSections = [
  {
    title: 'General Questions',
    items: [
      { q: 'What does Enigma Software Systems do?', a: 'If your business needs custom technology like an AI platform, a mobile app, or a web tool, we design, build, and deploy it. Everything is built specifically for the business it serves. No templates. No generic solutions.' },
      { q: 'Who do you typically work with?', a: 'Small to mid-sized businesses, service-based companies, regulated industries, and organizations that have outgrown off-the-shelf SaaS platforms. If your business needs custom technology to operate better or serve clients better, we’re a good fit.' },
      { q: 'How is this different from off-the-shelf software?', a: 'Off-the-shelf software is built for everyone, which means it’s optimized for no one. Custom software is designed around your specific workflows, your customers, and your goals. It fits your business instead of forcing your business to fit it.' },
      { q: 'What if I don’t have technical knowledge?', a: 'You don’t need any. We handle every technical decision, from architecture and design to deployment and maintenance. You bring the business knowledge. We bring the engineering.' },
    ],
  },
  {
    title: 'AI-Specific Questions',
    items: [
      { q: 'What is Vault by Enigma?', a: 'Vault is our flagship AI platform: a private, branded workspace where your team accesses leading AI models (Claude, ChatGPT, Gemini, Grok) from a single dashboard. It includes cost tracking, workspaces, transcription, a knowledge base, and enterprise security. Think of it as AI infrastructure for your organization.' },
      { q: 'Is my data secure on your AI platform?', a: 'Yes. Your data stays in a secure environment you control. It’s never shared with third-party training models or exposed to other users. We build with automatic sensitive-data detection, complete activity logs, and controls that let you decide exactly who sees what.' },
      { q: 'What if I just need a simple chatbot, not a full platform?', a: 'We build that too. A customer-facing AI assistant trained on your business information starts at a fraction of the Vault platform cost. We’ll recommend the right approach during your free consultation.' },
    ],
    sectionCta: { text: 'Learn more about our AI systems', to: '/ai-systems' },
  },
  {
    title: 'Pricing & Timeline Questions',
    items: [
      { q: 'How much does a typical project cost?', a: 'Mobile apps start at $3,000. AI platforms start at $5,000. Web applications are scoped individually based on complexity. Maintenance plans start at $200/month. We’ll give you a clear, specific quote after a free discovery conversation.' },
      { q: 'How long does a typical project take?', a: 'Most projects launch in 4–8 weeks. Complex builds with compliance requirements or multiple integrations may take 12–16 weeks. We’ll give you a realistic timeline during discovery.' },
      { q: 'What’s included in ongoing support?', a: 'Bug fixes, security updates, feature adjustments, OS compatibility updates, and ongoing technical support. Plans include monthly development hours for changes and improvements. We don’t build and walk away.' },
      { q: 'What if I need changes after launch?', a: 'That’s exactly what maintenance plans are for. Every plan includes monthly development hours for adjustments, new features, and workflow changes. Additional hours are available at a preferred rate.' },
    ],
  },
  {
    title: 'Technical Questions',
    items: [
      { q: 'Do I own the final product?', a: 'Yes. The software we build for you is yours. Ownership and intellectual property are outlined clearly in our project agreements.' },
      { q: 'Can your software integrate with tools I already use?', a: 'In most cases, yes. We build with integration in mind, including customer databases, payment processors, scheduling tools, accounting systems, email platforms, and more.' },
      { q: 'Can you help with compliance requirements like HIPAA?', a: 'Yes. We build with compliance in mind from the start. Our team includes legal expertise, and we design solutions to meet healthcare, financial, and data privacy compliance requirements.' },
      { q: 'Can I see a prototype before committing?', a: 'During the design phase, you’ll see wireframes and prototypes before any development begins. You’ll know exactly what you’re getting, and your feedback shapes every decision.' },
    ],
  },
]

/* ═══════════════════════════════════════════════════
   ACCORDION COMPONENT — preserved from original
   ═══════════════════════════════════════════════════ */
function AccordionItem({ question, answer, id }) {
  const [open, setOpen] = useState(false)
  const triggerId = `faq-trigger-${id}`
  const panelId = `faq-panel-${id}`
  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        id={triggerId}
      >
        <span>{question}</span>
        <ChevronDown size={18} style={{
          transition: 'transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          color: 'var(--text-dim)',
          flexShrink: 0,
          marginLeft: 16,
        }} />
      </button>
      <div
        className={`accordion-body ${open ? 'open' : ''}`}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   FAQ SCHEMA — preserved for SEO
   ═══════════════════════════════════════════════════ */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap(s =>
    s.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

export default function FAQ() {
  const ref = useReveal()

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Straight answers to the questions we hear most. If yours isn't here, reach out. We're happy to talk."
        blobColor="blue"
        image="/images/hero-faq-bg.svg"
        imageAlt=""
        imageLayout="background"
      />

      {/* ═══ FAQ SECTIONS ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--fast float--offset" style={{ width: 350, height: 350, bottom: '5%', left: '-8%' }} />
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {faqSections.map((section, i) => (
            <div key={i} className="reveal" style={{ marginBottom: 48 }}>
              <span className="badge badge--accent" style={{ marginBottom: 8 }}>{section.title}</span>
              {section.items.map((item, j) => (
                <AccordionItem key={j} id={`${i}-${j}`} question={item.q} answer={item.a} />
              ))}
              {section.sectionCta && (
                <div style={{ marginTop: 16, paddingLeft: 4 }}>
                  <Link to={section.sectionCta.to} className="link-arrow" style={{ fontSize: 15 }}>
                    {section.sectionCta.text} <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Still Have Questions? Let's Talk."
        text="We'd rather have a real conversation than send you a brochure. Your discovery call is free."
        buttonText="Book a Free Call"
      />
    </div>
  )
}
