import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Calendar, ShoppingCart, Star, Clock,
  Smartphone, Workflow, Bell, Trophy,
  CheckCircle,
} from 'lucide-react'

const benefits = [
  { icon: Clock, title: 'Save Your Customers Time', desc: 'Booking, ordering, and service requests happen in a few taps — no phone calls, no waiting on hold. A faster experience means happier, more loyal customers.' },
  { icon: Smartphone, title: 'Be Where Your Customers Are', desc: 'Your app lives on their home screen, not buried in a browser. That kind of daily visibility keeps your business top of mind and drives repeat engagement.' },
  { icon: Workflow, title: 'Streamline Your Operations', desc: 'Every app integrates with your systems. Orders flow in automatically. Appointments sync. Service requests route to the right team — no manual work required.' },
  { icon: Bell, title: 'Stay Connected with Push Notifications', desc: 'Send reminders, updates, offers, and alerts directly to their phone. No inbox clutter — just timely, relevant messages that drive action.' },
  { icon: Star, title: 'Build Real Customer Loyalty', desc: 'Reward repeat business, offer exclusive in-app deals, and create engagement tools that turn one-time buyers into long-term clients.' },
  { icon: Trophy, title: 'Stand Out from Your Competition', desc: 'A polished, branded app signals that your business is serious, modern, and invested in the customer experience. It sets you apart from competitors still relying on phone calls and paper forms.' },
]

const useCases = [
  { icon: Calendar, title: 'Service Requests & Scheduling', desc: 'Your customers can request service, choose a time that works, and track the status of their job — all from their phone. No more missed calls, phone tag, or scheduling confusion. Your team gets the request instantly, and your customer gets peace of mind.', ideal: 'HVAC, plumbing, landscaping, cleaning, electrical, and home services.' },
  { icon: ShoppingCart, title: 'E-Commerce & Product Ordering', desc: 'Give your customers a smooth, mobile-native shopping experience. They can browse your products, place orders, manage their account, and track deliveries — all from a branded app that feels like it was built just for them. Because it was.', ideal: 'Retail shops, food & beverage, specialty stores, and wholesale suppliers.' },
  { icon: Star, title: 'Customer Engagement & Loyalty', desc: 'Turn one-time buyers into regulars. Built-in loyalty programs, push notifications for special offers, and personalized engagement tools keep your customers coming back — and spending more when they do. Your app becomes the reason they choose you over the competition.', ideal: 'Restaurants, salons, fitness studios, coffee shops, and retail stores.' },
  { icon: Clock, title: 'Appointment Booking & Management', desc: 'Replace the back-and-forth of scheduling with a simple, self-service booking interface. Your customers pick an available time, confirm the appointment, and get automatic reminders — all from the app. Fewer no-shows. Less admin work. A better experience for everyone.', ideal: 'Healthcare practices, law firms, consultants, salons, and professional services.' },
]

const processSteps = [
  { num: '01', title: 'We Learn Your Business', desc: 'Every project starts with a free consultation. We learn how your customers interact with you, where the friction is, and what a great experience looks like for your industry.' },
  { num: '02', title: 'We Design Around Your Customers', desc: 'Your end users drive every design decision. We build interfaces that are intuitive from the first tap — no tutorials needed, no confusion, just a clean path to getting things done.' },
  { num: '03', title: 'We Build & Integrate', desc: 'We develop your app, connect it to your backend systems, and make sure everything works together — from order processing and scheduling to notifications and reporting.' },
  { num: '04', title: 'We Launch & Support', desc: 'We handle App Store and Google Play submission, walk you through the finished product, and provide post-launch support to make sure everything runs smoothly from day one.' },
]

const buildTiers = [
  {
    name: 'Simple App',
    price: '$3,000',
    timeline: '2–4 weeks',
    desc: 'The perfect starting point if you want a clean, professional mobile presence without complexity. Think: an informational app, service listings, a basic contact form, or a simple directory.',
    bestFor: 'Small businesses, sole proprietors, local service providers, churches, and community organizations.',
    features: ['iOS and Android from one codebase', 'Up to 5–8 screens', 'Push notifications', 'App store submission', '30-day post-launch support'],
    highlight: false,
  },
  {
    name: 'Moderate App',
    price: '$8,000',
    timeline: '4–8 weeks',
    desc: 'This is where your app becomes a real working tool for your business. User accounts, a custom backend, admin tools, and third-party integrations let you manage appointments, orders, memberships, or customer data — all through the app.',
    bestFor: 'Growing businesses, service companies, membership organizations, healthcare practices, and nonprofits.',
    features: ['Everything in Simple', 'User accounts & custom backend', 'Admin panel & role-based access', 'Up to 2 integrations', 'Analytics & 60-day support'],
    highlight: true,
  },
  {
    name: 'Complex App',
    price: '$12,000',
    timeline: '8–16+ weeks',
    desc: 'Enterprise-grade functionality for businesses with serious requirements. Real-time features, complex workflows, multi-system integrations, compliance needs, and advanced analytics — all architected to scale.',
    bestFor: 'Established businesses, healthcare organizations, logistics companies, and multi-location operations.',
    features: ['Everything in Moderate', 'Real-time chat & tracking', 'Advanced workflow automation', 'Multiple integrations (EHR, CRM, ERP)', 'Offline mode & compliance support (HIPAA, PCI)', '90-day post-launch support'],
    highlight: false,
  },
  {
    name: 'Custom App',
    price: 'Custom Quote',
    timeline: 'Determined during discovery',
    desc: 'Some projects don\'t fit into a box, and that\'s exactly what this tier is for. Whether you have a completely original app concept, need to integrate with legacy systems, or want to combine mobile with web or IoT — we\'ll design a solution that makes sense.',
    bestFor: 'Startups, unique product ideas, legacy system integrations, and organizations with needs that span multiple tiers.',
    features: ['Fully custom scope', 'Discovery phase included', 'Flexible integrations', 'Custom SLA & support'],
    highlight: false,
  },
]

const maintenancePlans = [
  { name: 'Essential', price: '$200/mo', bestFor: 'Simple Apps', hours: '2 hrs/mo', response: 'Standard' },
  { name: 'Professional', price: '$400/mo', bestFor: 'Moderate Apps', hours: '4 hrs/mo', response: 'Next Business Day' },
  { name: 'Premium', price: '$1,000/mo', bestFor: 'Complex Apps', hours: '8 hrs/mo', response: 'Same Business Day' },
  { name: 'Custom', price: 'Custom Quote', bestFor: 'Custom Apps', hours: 'Flexible', response: 'Custom SLA' },
]

export default function MobileApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* SECTION 1 — HERO */}
      <PageHeader
        title="Your Business, Right in Their Pocket"
        subtitle="Give your customers a faster, easier way to interact with your business — a custom mobile app that works the way they do, available on both iOS and Android."
        blobColor="accent"
      />

      {/* SECTION 2 — THE PROBLEM / FRAMING */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <span className="badge badge--accent">Mobile Apps</span>
          <h2 className="display display--gradient heading-md">A Direct Line to Your Customers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Your customers are already on their phones. They're scheduling appointments, placing orders, and checking statuses from wherever they are. The question is whether they're doing those things through your app — or through someone else's.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            A custom mobile app puts your business directly on your customer's home screen. It's not a website they have to search for. It's not an email they have to dig through. It's your business, one tap away, ready when they are.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            We don't build generic apps from templates. Every app we create is designed around how your business actually operates and what your customers actually need. The result is an app people use every week — not one that gets downloaded and forgotten.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '-10%', left: '-15%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--blue">Benefits</span>
            <h2 className="display display--gradient heading-lg">What a Custom Mobile App Does for Your Business</h2>
          </div>
          <div className="grid-3 reveal-group">
            {benefits.map((b, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={b.icon} variant={i % 2 === 0 ? 'accent' : 'blue'} />
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '14px 0 10px' }}>{b.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>{b.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <section className="section theme-darker" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 400, height: 400, top: '-15%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--accent">Use Cases</span>
            <h2 className="display display--gradient heading-lg">See How It Works for Businesses Like Yours</h2>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {useCases.map((uc, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={uc.icon} variant={i % 2 === 0 ? 'accent' : 'cyan'} />
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '14px 0 10px' }}>{uc.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>{uc.desc}</p>
                <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginTop: 12, letterSpacing: '0.02em' }}>
                  Ideal for: <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{uc.ideal}</span>
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR APPROACH */}
      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Our Approach</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                Designed Around You, Not Around a Template
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>
                A lot of app companies start with a template and ask you to fit your business into it. We do the opposite. We start with your workflows, your customer journey, and your day-to-day operations — and we build an app that fits you.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 32 }}>
                Every app we deliver is designed for customer-facing simplicity. Your users shouldn't need a tutorial. They should open the app, understand it immediately, and accomplish what they came to do in just a few taps. Behind the scenes, the app connects to your business systems so nothing falls through the cracks — orders, appointments, messages, and data all flow where they need to go, automatically.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {processSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: 'var(--accent)',
                      minWidth: 40,
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                    }}>
                      {step.num}
                    </span>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>{step.title}</h4>
                      <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="preview-box" style={{ height: 520, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Smartphone size={80} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILD OPTIONS / PRICING */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 500, height: 500, top: '20%', right: '-15%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 16 }}>
            <span className="badge badge--blue">Build Options</span>
            <h2 className="display display--gradient heading-lg">Four Tiers. One Goal: The Right App for You.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              Every app we build is delivered on both iOS and Android. Every project starts with a free consultation to make sure you're in the right tier — and if your needs fall between tiers, we'll create a custom quote.
            </p>
          </div>

          <div className="grid-4 reveal-group" style={{ marginTop: 48 }}>
            {buildTiers.map((tier, i) => (
              <TiltCard
                key={i}
                className={`card card--glass card--glow reveal${tier.highlight ? ' mobile-tier--highlight' : ''}`}
                style={tier.highlight ? { border: '1px solid rgba(255, 159, 65, 0.3)', position: 'relative' } : {}}
              >
                {tier.highlight && (
                  <span style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                    color: '#111118',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-pill)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
                <p style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '8px 0',
                }}>
                  {tier.price}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>
                  Timeline: {tier.timeline}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {tier.desc}
                </p>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Best for:
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  {tier.bestFor}
                </p>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, marginTop: 'auto' }}>
                  {tier.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                      <CheckCircle size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — MAINTENANCE PLANS */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--accent">Maintenance</span>
            <h2 className="display display--gradient heading-lg">Your App Stays Current. Your Business Keeps Moving.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>
              A mobile app is a living product. iOS and Android release major updates every year, third-party services evolve, and security threats don't take breaks. Our maintenance plans handle the behind-the-scenes work so your app stays fast, secure, and always available for your customers.
            </p>
          </div>

          <div className="grid-4 reveal-group">
            {maintenancePlans.map((plan, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #FF9F41 0%, #FF7733 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '8px 0 16px',
                }}>
                  {plan.price}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--text-dim)' }}>Best For</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{plan.bestFor}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--text-dim)' }}>Included Hours</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{plan.hours}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--text-dim)' }}>Response Time</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{plan.response}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <p className="reveal" style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.7, textAlign: 'center', maxWidth: 700, margin: '32px auto 0' }}>
            All maintenance plans are billed monthly and can be adjusted or cancelled with 30 days' notice. Annual discounts are available for every tier. Hours do not roll over month to month. Additional development beyond included hours is available at a preferred rate for maintenance clients.
          </p>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <CTABlock
        headline="Ready to Give Your Customers a Better Experience?"
        text="Tell us about your business and your customers, and we'll design a mobile app that makes their lives easier — and yours more efficient. Every project starts with a free consultation."
        buttonText="Let's Talk Mobile"
      />
    </div>
  )
}
