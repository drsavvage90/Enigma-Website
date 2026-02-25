import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Monitor, ClipboardList, BarChart3, Workflow,
  Calculator, CalendarSync, FileCheck,
} from 'lucide-react'

const webTools = [
  { icon: Calculator, title: 'Custom Quoting & Estimator Tools', text: 'Let clients or your team generate quotes, estimates, or proposals through a guided web interface.' },
  { icon: CalendarSync, title: 'Scheduling & Resource Coordination', text: 'Manage availability, assign resources, and coordinate schedules across teams or locations.' },
  { icon: FileCheck, title: 'Client Intake & Onboarding Systems', text: 'Replace paper forms and email chains with a streamlined digital intake process that captures information and kicks off your workflow automatically.' },
]

export default function WebApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Smarter Tools for the Way You Work"
        subtitle="Custom web applications that replace scattered spreadsheets, disconnected email chains, and clunky workarounds with streamlined, professional digital experiences."
        blobColor="blue"
      />

      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="display display--gradient heading-md">Browser-Based Tools That Run Your Business Better</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Most businesses are running critical operations on spreadsheets, shared drives, and email threads — tools that were never designed for what they're being asked to do. Whether you need a client-facing portal, an internal admin dashboard, or a custom web tool, we build it.
          </p>
        </div>
      </section>

      <section className="section theme-dark">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Client-Facing</span>
              <h2 className="display display--gradient heading-lg">Client Portals</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Give your customers a secure, branded environment where they can view reports, track progress, manage their account, and interact with your business — all in one place.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                No more emailing PDFs back and forth. A client portal puts everything your customers need at their fingertips — available 24/7, with login-protected access.
              </p>
              <div style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 8 }}><span style={{ color: 'var(--accent)', marginRight: 8 }}>→</span> SEO reporting dashboards for campaign performance</p>
                <p style={{ marginBottom: 8 }}><span style={{ color: 'var(--accent)', marginRight: 8 }}>→</span> Project status trackers with real-time milestones</p>
                <p><span style={{ color: 'var(--accent)', marginRight: 8 }}>→</span> Account management portals for invoices and communication</p>
              </div>
            </div>
            <div className="preview-box" style={{ height: 380 }}>
              <Monitor size={80} style={{ color: 'var(--border-default)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div className="preview-box" style={{ height: 380, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <BarChart3 size={80} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Internal Tools</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                Admin Portals
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>
                Your team needs tools that are just as polished as what your clients see. Admin portals are internal-facing web applications designed to streamline team management, workflow tracking, data visualization, and operational oversight.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: ClipboardList, text: 'Internal project management dashboards with task assignments and deadlines' },
                  { icon: BarChart3, text: 'Operational oversight tools with real-time data visualization' },
                  { icon: Workflow, text: 'Workflow management platforms that route tasks and automate approvals' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <IconBox icon={item.icon} size={36} />
                    <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6, paddingTop: 6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-darker">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="blob blob--accent" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal">
              <h2 className="display display--gradient heading-lg">If You Can Describe It, We Can Build It</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
                Sometimes the tool your business needs doesn't fit neatly into a category. If you've ever said "I wish there was a tool that did this," there's a good chance we can build it.
              </p>
            </div>
            <div className="grid-3 reveal-group">
              {webTools.map((t, i) => (
                <TiltCard key={i} className="card card--glow reveal" style={{ textAlign: 'left' }}>
                  <IconBox icon={t.icon} />
                  <h4 style={{ fontSize: 17, fontWeight: 600, margin: '14px 0 8px' }}>{t.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{t.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Stop Working Around Your Tools. Start Working With Them."
        text="Tell us what's broken in your workflow, and we'll build the tool that fixes it."
        buttonText="Let's Talk Web Apps"
      />
    </div>
  )
}
