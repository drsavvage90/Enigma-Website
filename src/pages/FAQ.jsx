import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import PageHeader from '../components/PageHeader'
import { ChevronDown, Info, Brain, DollarSign, Settings } from 'lucide-react'

const faqSections = [
  {
    icon: Info,
    title: 'General Questions',
    items: [
      { q: 'What does Enigma Software Systems do?', a: 'We design, build, and deploy custom software for businesses. Our three core service areas are custom AI systems, mobile applications, and web applications. Everything we build is purpose-designed for the client it serves — no templates, no generic solutions.' },
      { q: 'Who do you typically work with?', a: 'We work with small to mid-sized businesses, service-based companies, organizations in regulated industries, and companies that have outgrown off-the-shelf SaaS platforms. If your business needs custom technology to operate better or serve clients better, we are a good fit.' },
      { q: 'How is this different from off-the-shelf software?', a: 'Off-the-shelf software is built for everyone, which means it is optimized for no one. Custom software is designed around your specific workflows, your customers, and your goals. It fits your business instead of forcing your business to fit it.' },
    ],
  },
  {
    icon: Brain,
    title: 'AI-Specific Questions',
    items: [
      { q: 'What is the multi-LLM platform?', a: "It's our flagship AI product — a secure, fully branded platform where your team can access leading AI models like Claude, ChatGPT, Gemini, and Grok from a single dashboard. It's customized to your business, integrated with your data, and built for privacy and security." },
      { q: 'Is my data secure on your AI platform?', a: "Yes. Unlike consumer-grade AI tools, our platform is built with data privacy and security as a foundation. Your data stays in a secure environment that you control. It's not shared with third-party training models or exposed to other users." },
      { q: 'What AI models do you support?', a: "Our multi-LLM platform currently supports Claude, ChatGPT, Gemini, and Grok. You can switch between models based on the task at hand. We'll continue to add models as the AI landscape evolves." },
      { q: "What's the difference between the platform and a chatbot?", a: 'The multi-LLM platform is a full-featured AI environment with multiple models, transcription, business-aware intelligence, and custom branding. A standalone chatbot is a simpler, more affordable tool designed for a specific use case. Both are secure and customizable, but the platform is significantly more capable.' },
    ],
  },
  {
    icon: DollarSign,
    title: 'Project & Pricing Questions',
    items: [
      { q: 'How does pricing work?', a: "We use a combination of project-based development fees and recurring annual maintenance plans. The project fee covers design, development, and deployment. The annual plan covers ongoing support, updates, hosting, and maintenance. Every project is scoped individually, so we'll provide a clear quote after our discovery conversation." },
      { q: 'How long does a typical project take?', a: "Timelines vary by scope, but most projects move from discovery to launch within weeks, not months. We're a small, focused team that moves fast. We'll give you a realistic timeline during the discovery phase." },
      { q: "What's included in ongoing support?", a: "Our annual maintenance plans cover bug fixes, security updates, feature adjustments, hosting, and ongoing technical support. We don't build and walk away. When your business evolves or you need changes, we're here to help." },
    ],
  },
  {
    icon: Settings,
    title: 'Technical Questions',
    items: [
      { q: 'Where is my software hosted?', a: "We handle hosting as part of our service. Your application is deployed on secure, reliable infrastructure. Hosting details are discussed during scoping, and we'll recommend the best setup based on your needs." },
      { q: 'Can your software integrate with tools I already use?', a: 'In most cases, yes. We build with integration in mind and can connect your custom application with existing platforms, CRMs, payment processors, scheduling tools, and more.' },
      { q: 'Do I own the final product?', a: 'Yes. The software we build for you is yours. You own the product. The specifics of ownership and intellectual property are outlined clearly in our project agreements.' },
      { q: 'Can you help with compliance requirements like HIPAA?', a: 'Yes. We build with compliance in mind from the start. If your industry requires specific security standards, we design your solution to meet those requirements. We also have legal expertise on our team.' },
    ],
  },
]

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <ChevronDown size={18} style={{
          transition: 'transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          color: 'var(--text-dim)',
          flexShrink: 0,
          marginLeft: 16,
        }} />
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Straight answers to the questions we hear most. If yours isn't here, reach out — we're happy to talk."
        blobColor="blue"
      />

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--fast float--offset" style={{ width: 350, height: 350, bottom: '5%', left: '-8%' }} />
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {faqSections.map((section, i) => (
            <div key={i} className="reveal" style={{ marginBottom: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <section.icon size={20} style={{ color: 'var(--accent)' }} />
                <span className="badge badge--accent" style={{ margin: 0 }}>{section.title}</span>
              </div>
              {section.items.map((item, j) => (
                <AccordionItem key={j} question={item.q} answer={item.a} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <CTABlock
        headline="Still Have Questions? Let's Talk."
        text="We'd rather have a real conversation than send you a brochure. Reach out and we'll answer anything that isn't covered here."
        buttonText="Contact Us"
      />
    </div>
  )
}
