import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Monitor, ClipboardList, BarChart3, Workflow,
  Calculator, CalendarSync, FileCheck,
  FileSpreadsheet, Users, Cog, Globe, LineChart, Award,
} from 'lucide-react'

const benefits = [
  { icon: FileSpreadsheet, title: 'Replace Scattered Spreadsheets', desc: 'Stop relying on files that break, get out of sync, and require manual updates. A web app centralizes your data in one living system that\'s always current.' },
  { icon: Users, title: 'Give Your Customers Self-Service', desc: 'Let clients check statuses, view reports, manage accounts, and get answers on their own schedule — reducing the "just checking in" messages that eat up your team\'s day.' },
  { icon: Cog, title: 'Automate the Manual Work', desc: 'Approvals, task routing, notifications, data entry — the repetitive steps that slow your team down can happen automatically, so they can focus on higher-value work.' },
  { icon: Globe, title: 'Access From Anywhere', desc: 'A web app works in any browser, on any device, with nothing to install. Your team and your customers can use it from the office, from home, or from their phone.' },
  { icon: LineChart, title: 'Make Better Decisions, Faster', desc: 'Live dashboards, real-time reporting, and clean data visualization put the information you need right in front of you — no digging through inboxes or exporting spreadsheets.' },
  { icon: Award, title: 'Look Professional and Established', desc: 'A polished, branded web platform signals to your clients that you\'re serious, organized, and invested in their experience. It sets you apart from competitors using generic tools.' },
]

const clientPortalUseCases = [
  { title: 'SEO & Marketing Dashboards', desc: 'Clients log in to view live campaign performance, traffic data, keyword rankings, and ROI metrics — no more monthly PDF reports sent over email.' },
  { title: 'Project Status Trackers', desc: 'Clients see real-time milestones, deliverables, and timelines for their projects. They always know where things stand without asking.' },
  { title: 'Account Management Portals', desc: 'Customers update their own information, view invoices, download documents, and communicate with your team through a secure, organized interface.' },
]

const adminPortalUseCases = [
  { icon: ClipboardList, title: 'Internal Project Management', desc: 'Assign tasks, set deadlines, track status, and keep every team member aligned — without relying on clunky spreadsheets or a tool that doesn\'t fit your process.' },
  { icon: BarChart3, title: 'Operational Dashboards', desc: 'See the metrics that matter in real time — team performance, pipeline status, revenue data, and operational KPIs — all visualized in one place.' },
  { icon: Workflow, title: 'Workflow Automation Platforms', desc: 'Route tasks to the right people automatically, trigger approvals, send notifications, and eliminate the manual handoffs that slow your team down.' },
]

const customTools = [
  { icon: Calculator, title: 'Custom Quoting & Estimator Tools', desc: 'Let clients or your internal team generate quotes, estimates, or proposals through a guided web interface. No more manual spreadsheets or back-and-forth emails to price a job.' },
  { icon: CalendarSync, title: 'Scheduling & Resource Coordination', desc: 'Manage availability, assign resources, and coordinate schedules across teams or locations. Everyone sees the same real-time picture, so nothing gets double-booked or missed.' },
  { icon: FileCheck, title: 'Client Intake & Onboarding Systems', desc: 'Replace paper forms and email chains with a streamlined digital intake process. Capture information, route it to the right team, and kick off your workflow automatically — from the first interaction.' },
]

const whyEnigma = [
  { title: 'Built Around Your Workflow', desc: 'We start by understanding how your business actually runs — then we design a tool that matches it. No forcing your process into someone else\'s template.' },
  { title: 'Designed for the People Using It', desc: 'Your team and your customers should never need a training manual. Every interface we build prioritizes clarity, speed, and ease of use.' },
  { title: 'Integrated With Your Systems', desc: 'Your web app connects to the tools you already use — CRMs, payment processors, calendars, email platforms, and more. Data flows where it needs to go, automatically.' },
  { title: 'Built to Scale With You', desc: 'What works for 10 users today should work for 1,000 tomorrow. We architect every web app for reliability and growth from day one.' },
]

export default function WebApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* SECTION 1 — HERO */}
      <PageHeader
        title="Smarter Tools for the Way You Work"
        subtitle="Custom web applications that replace the spreadsheets, scattered email threads, and clunky workarounds slowing your business down — with streamlined, professional tools your team and customers will actually want to use."
        blobColor="blue"
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <span className="badge badge--accent">Web Apps</span>
          <h2 className="display display--gradient heading-md">Stop Working Around Your Tools. Start Working With Them.</h2>
          <p className="body-text">
            Right now, there's a good chance your business is running critical operations on spreadsheets, shared drives, and email threads — tools that were never designed for what you're asking them to do. They're slow. They break. They force your team to waste time on manual work that should happen automatically.
          </p>
          <p className="body-text">
            A custom web application changes that. Instead of bending a generic tool to fit your workflow, you get a purpose-built platform — accessible from any browser, on any device — that matches how your business actually operates. Your team works faster, your customers get a better experience, and you stop losing time to workarounds.
          </p>
          <p className="body-text">
            Whether you need a client-facing portal, an internal admin dashboard, or a custom tool that doesn't exist yet — we build it.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow" style={{ width: 500, height: 500, top: '-10%', right: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What a Custom Web App Does for Your Business</h2>
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

      {/* SECTION 4 — CLIENT PORTALS */}
      <section className="section theme-darker">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Client-Facing</span>
              <h2 className="display display--gradient heading-lg">Give Your Customers a Place to Self-Serve</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                Your customers shouldn't have to call you for a status update. They shouldn't have to email you asking for a report you've already generated. And they definitely shouldn't be waiting on your team to do something they could do themselves in 30 seconds.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                A client portal gives your customers a secure, branded environment where they can view reports, track progress, manage their account, download files, and communicate with your team — all in one place, available 24/7. It reduces the volume of "just checking in" messages, frees up your team's time, and gives your customers the instant access they expect from a modern business.
              </p>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-light)', marginBottom: 16, letterSpacing: '0.02em' }}>
                How Businesses Use Client Portals:
              </h4>
              {clientPortalUseCases.map((uc, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <p className="card-desc">
                    <span style={{ color: 'var(--accent)', marginRight: 8, fontWeight: 600 }}>→</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-light)' }}>{uc.title}</span>
                  </p>
                  <p className="card-desc--sm" style={{ paddingLeft: 20 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
            <div className="preview-box" style={{ height: 480 }}>
              <Monitor size={80} style={{ color: 'var(--border-default)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ADMIN PORTALS */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div className="preview-box" style={{ height: 480, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <BarChart3 size={80} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <span className="badge badge--blue">Internal Tools</span>
              <h2 className="display heading-lg heading-dark">
                One Dashboard for Everything Your Team Needs
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16 }}>
                Your team deserves tools that are just as polished as what your customers see. Right now, they're probably toggling between five different platforms to manage the work, check the data, and keep things moving. That's not efficient — it's exhausting.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 28 }}>
                An admin portal is an internal web application built around your team's real workflows. It centralizes management, tracking, reporting, and operational oversight into a single hub — designed specifically for how your business runs. Less tool-switching. Less confusion. More time spent on the work that actually matters.
              </p>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, letterSpacing: '0.02em' }}>
                How Businesses Use Admin Portals:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {adminPortalUseCases.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <IconBox icon={item.icon} size={36} />
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2, color: 'var(--text-dark)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM WEB TOOLS */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="blob blob--accent" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="section-z">
            <div className="reveal">
              <span className="badge badge--accent">Custom Tools</span>
              <h2 className="display display--gradient heading-lg">If You Can Describe It, We Can Build It</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto 16px', fontSize: 17, lineHeight: 1.7 }}>
                Sometimes the tool your business needs doesn't fit neatly into "client portal" or "admin dashboard." That's fine — we build any browser-based application your business needs to operate more efficiently or serve your customers better.
              </p>
              <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto 48px', fontSize: 17, lineHeight: 1.7 }}>
                If you've ever said "I wish there was a tool that did this" — there's a good chance we can build it. And because it's custom, it won't come with the bloat, workarounds, or limitations of an off-the-shelf product.
              </p>
            </div>
            <div className="reveal" style={{ marginBottom: 32 }}>
              <h3 className="display display--gradient heading-sm">Examples of What We've Built:</h3>
            </div>
            <div className="grid-3 reveal-group">
              {customTools.map((t, i) => (
                <TiltCard key={i} className="card card--glass card--glow reveal" style={{ textAlign: 'left' }}>
                  <IconBox icon={t.icon} variant={i === 0 ? 'accent' : i === 1 ? 'blue' : 'cyan'} />
                  <h4 className="card-title--sm">{t.title}</h4>
                  <p className="card-desc--sm">{t.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHY ENIGMA */}
      <section className="section theme-dark">
        <div className="container">
          <div className="reveal section-header">
            <span className="badge badge--blue">Why Enigma</span>
            <h2 className="display display--gradient heading-lg">We Build Tools That Fit. Not Tools You Fit Into.</h2>
            <p className="section-subtitle">
              Every web application we build starts with your business — your processes, your team's workflow, and your customers' expectations. We don't hand you a template with your logo on it. We architect a solution that matches how you actually work, and we make sure it's built to grow with you.
            </p>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {whyEnigma.map((item, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <CTABlock
        headline="Ready to Replace the Workarounds?"
        text="Tell us what's broken in your workflow — or what tool you wish existed — and we'll build the solution. Every project starts with a free consultation to understand your business and map out the right approach."
        buttonText="Let's Talk Web Apps"
      />
    </div>
  )
}
