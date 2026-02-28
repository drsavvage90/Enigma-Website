import { useReveal } from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'

const sections = [
  {
    title: 'Services',
    content: [
      'Enigma Software Systems provides custom software development services, including AI systems, mobile applications, and web applications. The specific scope, timeline, and deliverables for each project are defined in individual project agreements between Enigma and the client.',
    ],
  },
  {
    title: 'Use of Website',
    content: [
      'You may use this website for lawful purposes only. You agree not to use this site in any way that could damage, disable, or impair the site or interfere with any other party\'s use of the site.',
      'All content on this website — including text, graphics, logos, and design — is the property of Enigma Software Systems and is protected by applicable copyright and trademark laws.',
    ],
  },
  {
    title: 'Project Agreements',
    content: [
      'All software development projects are governed by separate project agreements that outline scope, pricing, timelines, intellectual property ownership, and other terms specific to each engagement. These Terms of Service apply to the use of this website and general interactions with Enigma Software Systems.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'Unless otherwise specified in a project agreement, clients retain ownership of the custom software developed for them. Enigma Software Systems retains ownership of proprietary tools, frameworks, and methodologies used in the development process.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'Enigma Software Systems provides this website and its content on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the information on this site.',
      'To the fullest extent permitted by law, Enigma Software Systems shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.',
    ],
  },
  {
    title: 'Privacy',
    content: [
      'Your use of this website is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.',
    ],
  },
  {
    title: 'Changes to These Terms',
    content: [
      'We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'If you have questions about these Terms of Service, please contact us at hello@enigmasoftwaresystems.com.',
    ],
  },
]

export default function TermsOfService() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Terms of Service"
        subtitle="The terms that govern your use of our website and services."
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
