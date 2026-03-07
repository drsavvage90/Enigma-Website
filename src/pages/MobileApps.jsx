import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Calendar, ShoppingCart, Star, Clock,
  Smartphone, Workflow, Bell, Trophy,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

/* ═══════════════════════════════════════════════════
   BENEFITS — customer-outcome focused
   ═══════════════════════════════════════════════════ */
const benefits = [
  { icon: Clock, title: 'Save Your Customers Time', desc: 'Booking, ordering, and service requests happen in a few taps. A faster experience means happier, more loyal customers.' },
  { icon: Smartphone, title: 'Be Where Your Customers Are', desc: 'Your app lives on their home screen, not buried in a browser. That daily visibility keeps your business top of mind.' },
  { icon: Workflow, title: 'Streamline Your Operations', desc: 'Orders flow in automatically. Appointments sync. Service requests route to the right team — no manual work required.' },
  { icon: Bell, title: 'Push Notifications That Drive Action', desc: 'Send reminders, updates, and offers directly to their phone. Timely, relevant messages — not inbox clutter.' },
  { icon: Star, title: 'Build Real Customer Loyalty', desc: 'Reward repeat business, offer exclusive deals, and create engagement tools that turn one-time buyers into long-term clients.' },
  { icon: Trophy, title: 'Stand Out From Competitors', desc: 'A polished app signals that your business is serious and modern. It sets you apart from competitors still relying on phone calls.' },
]

/* ═══════════════════════════════════════════════════
   USE CASES — with customer outcome one-liners
   ═══════════════════════════════════════════════════ */
const useCases = [
  {
    icon: Calendar,
    title: 'Service Requests & Scheduling',
    desc: 'Your customers request service, pick a time, and track status — all from their phone. No more missed calls or scheduling confusion.',
    outcome: 'Your customers stop calling and start booking in 30 seconds.',
    ideal: 'HVAC, plumbing, landscaping, electrical, home services.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Ordering',
    desc: 'Customers browse, place orders, manage accounts, and track deliveries from a branded app built just for them.',
    outcome: 'Your customers browse, buy, and track — without ever opening a browser.',
    ideal: 'Retail, food & beverage, specialty stores, wholesale.',
  },
  {
    icon: Star,
    title: 'Engagement & Loyalty',
    desc: 'Built-in loyalty programs, push notifications for offers, and personalized tools keep customers coming back.',
    outcome: 'Your regulars feel rewarded. Your one-time buyers come back.',
    ideal: 'Restaurants, salons, fitness, coffee shops, retail.',
  },
  {
    icon: Clock,
    title: 'Appointment Booking',
    desc: 'Self-service booking with available times, confirmations, and automatic reminders. Fewer no-shows. Less admin work.',
    outcome: 'No more phone tag. No more no-shows.',
    ideal: 'Healthcare, law firms, consultants, salons, professional services.',
  },
]


export default function MobileApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="Your Business, Right in Their Pocket"
        subtitle="Your customers book, order, and pay — right from their phone. A custom mobile app on iOS and Android, designed around how they interact with your business."
        blobColor="accent"
        primaryCta={{ text: 'Get a Free Estimate', to: '/contact' }}
        secondaryCta={{ text: 'See Use Cases', to: '#use-cases' }}
        image="/images/mobileapps-hero.png"
        imageAlt="Three mobile app interfaces showing roles selection, calendar scheduling, and user dashboard"
        imageLayout="image-right"
      />

      {/* ═══ THE PROBLEM ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <span className="badge badge--accent">Mobile Apps</span>
              <h2 className="display display--gradient heading-md">Your Customers Are Already on Their Phones. The Question Is Whether They're Using Your App.</h2>
              <p className="body-text">
                A custom mobile app puts your business directly on your customer's home screen. It's not a website they have to search for. It's not an email they have to dig through. It's your business, one tap away, ready when they are. And because it's built around how your business actually operates, people use it every week — not download it and forget.
              </p>
            </div>
            <TiltCard noGlow className="preview-box">
              <img
                src="/images/mobileapps-direct-line.png"
                alt="Mobile app messaging interface on a phone screen"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">How Your Customers' Experience Changes With an App</h2>
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

      {/* ═══ USE CASES ═══ */}
      <section id="use-cases" className="section mobile-usecases-section" style={{ position: 'relative' }}>
        <div className="mobile-usecases-section__bg" />
        <div className="mobile-usecases-section__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--accent">Use Cases</span>
            <h2 className="display display--gradient heading-lg">See How It Works for Businesses Like Yours</h2>
          </div>
          <div className="grid-2 reveal-group" style={{ maxWidth: 900, margin: '0 auto', gap: 24 }}>
            {useCases.map((uc, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={uc.icon} variant={i % 2 === 0 ? 'accent' : 'cyan'} />
                <h3 className="card-title">{uc.title}</h3>
                <p className="card-desc">{uc.desc}</p>
                <p style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginTop: 12, fontStyle: 'italic' }}>
                  {uc.outcome}
                </p>
                <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginTop: 8, letterSpacing: '0.02em' }}>
                  Ideal for: <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{uc.ideal}</span>
                </p>
              </TiltCard>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              See Yourself Here? Get a Free Estimate
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section--sm theme-light">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 48, alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <span className="badge badge--accent">Our Approach</span>
              <h2 className="display heading-lg heading-dark" style={{ marginBottom: 16 }}>
                From Discovery Call to App Store in as Little as 4 Weeks
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: 17, lineHeight: 1.8, marginBottom: 8 }}>
                We start with your workflows, your customer journey, and your operations — then build an app that fits you, not a template. Every app we deliver works on both iOS and Android.
              </p>
              <p style={{ color: 'var(--text-body)', fontSize: 16 }}>
                <Link to="/how-we-work" className="link-arrow" style={{ fontSize: 16 }}>See our full 4-step process <ArrowRight size={14} /></Link>
              </p>
            </div>
            <TiltCard noGlow className="preview-box" style={{ flex: 1, background: '#F6F6F9', borderRadius: 16, overflow: 'hidden' }}>
              <img
                src="/images/mobileapps-approach.jpg"
                alt="Enigma consultant shaking hands with a client"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Ready to Give Your Customers a Better Experience?"
        text="Tell us about your business and your customers. We'll design a mobile app that makes their lives easier and yours more efficient."
        buttonText="Get Your App Estimate"
      />
    </div>
  )
}
