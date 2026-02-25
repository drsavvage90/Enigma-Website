import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  Calendar, ShoppingCart, Star, Clock,
  Smartphone,
} from 'lucide-react'

const useCases = [
  { icon: Calendar, title: 'Service Request & Scheduling', desc: 'Let your customers request service, book appointments, and track job status right from their phone. Ideal for HVAC, plumbing, landscaping, and home services.' },
  { icon: ShoppingCart, title: 'E-Commerce & Product Ordering', desc: 'Give your customers a smooth, mobile-native purchasing experience. Browse products, place orders, manage accounts, and track deliveries.' },
  { icon: Star, title: 'Customer Engagement & Loyalty', desc: 'Keep your customers coming back with built-in loyalty programs, push notifications, exclusive offers, and engagement tools.' },
  { icon: Clock, title: 'Appointment Booking & Management', desc: 'Replace the phone tag and email chains with a simple booking interface. Perfect for healthcare, legal, consulting, and professional services.' },
]

export default function MobileApps() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Your Business, Right in Their Pocket"
        subtitle="Custom mobile applications that give your customers a direct, branded way to interact with your business — from scheduling and ordering to loyalty and engagement."
        blobColor="accent"
      />

      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <span className="badge badge--accent">Mobile Apps</span>
          <h2 className="display display--gradient heading-md">A Direct Channel to Your Customers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Your customers live on their phones. A custom mobile app gives them a seamless, branded way to engage with your business. We don't build generic apps from templates. Every mobile application we create is designed around your specific business workflows and your customers' real-world needs.
          </p>
        </div>
      </section>

      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--orange float float--fast float--offset" style={{ width: 400, height: 400, top: '-15%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge badge--blue">Use Cases</span>
            <h2 className="display display--gradient heading-lg">Built for Real-World Business Needs</h2>
          </div>
          <div className="grid-4 reveal-group" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {useCases.map((uc, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal">
                <IconBox icon={uc.icon} />
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '14px 0 10px' }}>{uc.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7 }}>{uc.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">Our Approach</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                Built for How Your Business Actually Works
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>
                We don't start with a template and force your business into it. We start with your workflows, your customer journey, and your operational needs — then we design an app that fits.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                Every app we build prioritizes customer-facing simplicity. Your end users shouldn't need a tutorial. They should open the app, understand it immediately, and accomplish what they came to do in a few taps. Behind the scenes, the app integrates with your business systems so nothing falls through the cracks.
              </p>
            </div>
            <div className="preview-box" style={{ height: 380, background: 'linear-gradient(135deg, #e8e8e8 0%, #f6f6f6 100%)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Smartphone size={80} style={{ color: 'rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Give Your Customers a Better Experience?"
        text="Tell us about your business and your customers, and we'll design a mobile app that makes their lives easier — and yours more efficient."
        buttonText="Let's Talk Mobile"
      />
    </div>
  )
}
