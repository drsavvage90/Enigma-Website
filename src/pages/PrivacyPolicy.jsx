import { useReveal } from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly when you fill out our contact form, including your name, email address, phone number, company name, and project details.',
      'We may automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, and pages visited. This data is collected through standard web server logs and analytics tools.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries, provide the services you request, communicate with you about your project, and improve our website and services.',
      'We do not sell, rent, or share your personal information with third parties for their marketing purposes.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect the personal information we collect. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.',
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties and encourage you to review their privacy policies.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete the personal information we hold about you. You may also opt out of communications from us at any time. To exercise these rights, contact us at hello@enigmasoftwaresystems.com.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or our data practices, please contact us at hello@enigmasoftwaresystems.com.',
    ],
  },
]

export default function PrivacyPolicy() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        blobColor="blue"
      />

      <section className="section theme-dark">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <p className="reveal" style={{ color: 'var(--text-dim)', fontSize: 14, marginBottom: 48 }}>
            Effective Date: January 1, 2025
          </p>
          {sections.map((s, i) => (
            <div key={i} className="reveal" style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h2>
              {s.content.map((p, j) => (
                <p key={j} style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
