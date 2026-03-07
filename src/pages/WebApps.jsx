import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Monitor, ClipboardList, BarChart3, Workflow,
  Calculator, CalendarSync, FileCheck,
  FileSpreadsheet, Users, Cog, Globe, LineChart, Award,
  ArrowRight,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   BENEFITS — customer-outcome focused
   ═══════════════════════════════════════════════════ */
const benefits = [
  { icon: FileSpreadsheet, title: 'Replace Scattered Spreadsheets', desc: 'Centralize your data in one living system that’s always current. No more broken files and manual updates.' },
  { icon: Users, title: 'Give Customers Self-Service', desc: 'Clients check statuses, view reports, and manage accounts on their own schedule, reducing the "just checking in" messages.' },
  { icon: Cog, title: 'Automate the Manual Work', desc: 'Approvals, task routing, notifications, and data entry. The repetitive steps that slow you down happen automatically.' },
  { icon: Globe, title: 'Access From Anywhere', desc: 'Works in any browser, on any device, with nothing to install. Office, home, or on the go.' },
  { icon: LineChart, title: 'Faster, Better Decisions', desc: 'Live dashboards and real-time reporting put the information you need right in front of you.' },
  { icon: Award, title: 'Look Professional and Established', desc: 'A polished web platform signals to clients that you’re serious and invested in their experience.' },
]

/* ═══════════════════════════════════════════════════
   CLIENT PORTAL USE CASES
   ═══════════════════════════════════════════════════ */
const clientPortalUseCases = [
  { title: 'SEO & Marketing Dashboards', desc: 'Clients view live campaign performance, traffic data, and ROI metrics. No more monthly PDF reports.' },
  { title: 'Project Status Trackers', desc: 'Real-time milestones, deliverables, and timelines. They always know where things stand.' },
  { title: 'Account Management Portals', desc: 'Customers update info, view invoices, download documents, and communicate through a secure interface.' },
]

/* ═══════════════════════════════════════════════════
   ADMIN + CUSTOM TOOLS (merged)
   ═══════════════════════════════════════════════════ */
const internalTools = [
  { icon: ClipboardList, title: 'Project Management', desc: 'Assign tasks, set deadlines, and track status without relying on tools that don\'t fit your process.' },
  { icon: BarChart3, title: 'Operational Dashboards', desc: 'Team performance, pipeline status, revenue data, and KPIs, all in one place.' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'Route tasks, trigger approvals, send notifications, and eliminate manual handoffs.' },
  { icon: Calculator, title: 'Quoting & Estimator Tools', desc: 'Clients or your team generate quotes through a guided interface. No more spreadsheet pricing.' },
  { icon: CalendarSync, title: 'Scheduling & Coordination', desc: 'Manage availability, assign resources, and coordinate across teams in real time.' },
  { icon: FileCheck, title: 'Client Intake & Onboarding', desc: 'Replace paper forms with a digital intake process that routes info and kicks off your workflow.' },
]


export default function WebApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Smarter Tools for the Way You Work"
        subtitle="Your business runs on spreadsheets and email chains. We replace them with client portals, admin dashboards, and custom tools your team and customers actually want to use."
        blobColor="blue"
        primaryCta={{ text: 'Tell Us What You Need', to: '/contact' }}
        secondaryCta={{ text: 'See What We Build', to: '#what-we-build' }}
        image="/images/webapps-hero.jpg"
        imageAlt="Custom web application interface on a tablet device"
        imageLayout="image-right"
      />

      {/* ═══ THE PROBLEM ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <span className="badge badge--accent">Web Apps</span>
              <h2 className="display display--gradient heading-md">Your Business Runs on Spreadsheets and Email Chains. It Shouldn't.</h2>
              <p className="body-text">
                There's a good chance your business is running critical operations on tools that were never designed for what you're asking them to do. They're slow. They break. They force your team to waste time on manual work that should happen automatically.
              </p>
              <p className="body-text">
                A custom web application changes that. Instead of bending a generic tool to fit your workflow, you get a platform that matches how your business actually operates, accessible from any browser, on any device. Whether you need a client-facing portal, an internal admin dashboard, or a tool that doesn't exist yet, we build it.
              </p>
            </div>
            <TiltCard noGlow className="preview-box">
              <img
                src="/images/webapps-login.png"
                alt="Custom client login portal interface"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow" style={{ width: 500, height: 500, top: '-10%', right: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What Changes When You Stop Working Around Your Tools</h2>
          </div>
          <div className="grid-3 reveal-group">
            {benefits.map((b, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={b.icon} variant={i % 2 === 0 ? 'accent' : 'blue'} />
                <h3 className="card-title">{b.title}</h3>
                <p className="card-desc">{b.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT PORTALS ═══ */}
      <section id="what-we-build" className="section theme-darker">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Client-Facing</span>
              <h2 className="display display--gradient heading-lg">Your Customers Stop Calling for Updates. They Check for Themselves.</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                A client portal gives your customers a secure, branded environment where they can view reports, track progress, manage their account, and communicate with your team around the clock. It cuts the "just checking in" messages and gives your customers the instant access they expect.
              </p>
              {clientPortalUseCases.map((uc, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <p className="card-desc">
                    <span style={{ color: 'var(--accent)', marginRight: 8, fontWeight: 600 }}>&rarr;</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-light)' }}>{uc.title}</span>
                  </p>
                  <p className="card-desc--sm" style={{ paddingLeft: 20 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
            <TiltCard noGlow className="preview-box">
              <img
                src="/images/webapps-client-portal.jpg"
                alt="Client-facing analytics portal on a tablet device"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ ADMIN TOOLS + CUSTOM TOOLS (merged) ═══ */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <TiltCard noGlow className="preview-box">
              <img
                src="/images/webapps-internal-tools.jpg"
                alt="Internal admin dashboard being used in an office"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </TiltCard>
            <div>
              <span className="badge badge--blue">Internal Tools</span>
              <h2 className="display heading-lg heading-dark">
                Your Team Stops Toggling Between Five Platforms and Starts Getting Work Done
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 28 }}>
                Admin portals, workflow tools, quoting systems, intake forms. If your team needs it to operate, we build it. And if the tool you need doesn't fit neatly into a category, that's fine too. If you can describe it, we can build it.
              </p>
              <div className="grid-2" style={{ gap: 16 }}>
                {internalTools.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <IconBox icon={item.icon} size={36} />
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 2, color: 'var(--text-dark)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-body)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: 'var(--accent)', color: '#111' }}>
              Describe Your Ideal Tool
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS (compact) ═══ */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="badge badge--accent">Our Approach</span>
          <h2 className="display display--gradient heading-md" style={{ marginBottom: 16 }}>
            Built Around Your Workflow. Ready in Weeks, Not Months.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 8 }}>
            We start by understanding how your business actually runs, then design a tool that matches it. No templates. No forcing your process into someone else's box. Your team and your customers should never need a training manual.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
            <Link to="/how-we-work" className="link-arrow" style={{ fontSize: 16 }}>See our full 4-step process <ArrowRight size={14} /></Link>
          </p>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Ready to Replace the Workarounds?"
        text="Tell us what's broken in your workflow, or what tool you wish existed, and we'll build the solution."
        buttonText="Describe Your Ideal Tool"
      />
    </div>
  )
}
