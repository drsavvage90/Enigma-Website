import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import CTABlock from '../components/CTABlock'
import IconBox from '../components/IconBox'
import TiltCard from '../components/TiltCard'
import PageHeader from '../components/PageHeader'
import {
  ToggleLeft, DollarSign, ShieldCheck,
  BookOpen, Brain, Mic,
  CheckCircle, ArrowRight,
  Layers, BarChart3, FileText,
  Lock, ShieldOff,
} from 'lucide-react'

/* ═══ PLATFORM FEATURES ═══ */
const platformFeatures = [
  { image: '/images/vault_models.png', title: 'Multiple AI Models in One Place', desc: 'Your team stops managing separate subscriptions and starts working from one dashboard. Switch between OpenAI, Anthropic, Google, Grok, and more mid-conversation.' },
  { image: '/images/vault_costs.png', title: 'See Exactly What AI Costs You', desc: 'Per-message cost tracking, workspace budgets, and full usage reporting. Zero markup. You pay providers directly at their published rates.' },
  { image: '/images/vault_transcription.png', title: 'Built-In Transcription', desc: 'Record live meetings or upload audio files. Get searchable transcripts with speaker detection and feed them directly into AI conversations.' },
  { image: '/images/vault_knowledge.png', title: 'Your Knowledge, AI-Powered', desc: 'Upload your documents and policies. Vault indexes them so every AI response is grounded in your organization\'s actual knowledge.' },
  { image: '/images/vault_personas.png', title: 'Personas & Prompt Library', desc: 'Pre-configure AI with your tone, expertise, and context. Build a shared library of proven prompts so your entire team starts from what works.' },
  { image: '/images/vault_compliance.png', title: 'Your Compliance Team Will Say Yes', desc: 'Automatic detection of sensitive information, complete activity logs your compliance team can audit, and access controls that let you decide exactly who sees what.' },
]

/* ═══ FEATURE DEEP DIVES — compact with screenshots ═══ */
const deepDives = [
  {
    badge: 'Transcription', badgeVariant: 'accent',
    title: 'Turn Every Conversation Into Searchable Text',
    desc: 'Vault\'s built-in transcription captures every word, whether it\'s a live meeting or a recorded file. Searchable, organized by speaker, and ready to feed into your AI workflows.',
    features: ['Record live audio with real-time streaming', 'Speaker detection with color-coded labels', 'Start AI conversations directly from any transcript', 'Assign transcriptions to specific workspaces'],
    image: '/images/vault-transcription-light.png', imageAlt: 'Vault Transcription Interface',
    reversed: false, theme: 'theme-dark', id: 'transcription',
  },
  {
    badge: 'Workspaces', badgeVariant: 'blue',
    title: 'Organize AI by Team, Client, or Project',
    desc: 'Every conversation, transcript, and resource is scoped to the right group. Teams stay focused, client work stays isolated, and AI spending stays visible.',
    features: ['Dedicated workspaces for teams, departments, or clients', 'Configurable budgets with warn-or-block policies', 'Real-time cost tracking per workspace', 'Shared conversation history scoped to each group'],
    image: '/images/vault-workspaces-light.png', imageAlt: 'Vault Workspaces Interface',
    reversed: true, theme: 'theme-darker', id: 'workspaces',
  },
  {
    badge: 'Personas', badgeVariant: 'accent',
    title: 'AI That Already Knows How Your Team Works',
    desc: 'Pre-configure AI with your organization\'s context, tone, and expertise. Every team member gets consistent output without writing instructions from scratch.',
    features: ['Custom personas with tailored system instructions', 'Tag by role: Legal Reviewer, Marketing Writer, Analyst', 'Choose the AI model for each persona independently', 'Share across your organization with visibility controls'],
    image: '/images/vault-personas-light.png', imageAlt: 'Vault Personas Interface',
    reversed: false, theme: 'theme-dark', id: 'personas',
  },
  {
    badge: 'Prompt Library', badgeVariant: 'blue',
    title: 'Stop Rewriting the Same Prompts',
    desc: 'Build, organize, and share proven prompt templates. Your team starts from what works instead of starting from scratch every time.',
    features: ['Fill-in-the-blank templates your team customizes before each use', 'Organize prompts by category so your team finds what they need fast', 'Share prompt collections across your entire organization', 'Track which prompts drive the best results across your team'],
    image: '/images/vault-prompts-light.png', imageAlt: 'Vault Prompt Library Interface',
    reversed: true, theme: 'theme-darker', id: 'prompts',
  },
]

/* ═══ PRICING ═══ */
const pricingComponents = [
  { icon: Layers, title: 'Platform Deployment', tag: 'One-Time', price: 'From $5,000', desc: 'Setup, branding, provider configuration, security, and team onboarding.' },
  { icon: BarChart3, title: 'AI Provider Usage', tag: 'Ongoing', price: 'At-Cost', desc: 'You pay AI providers directly at their published rates. Zero markup.' },
  { icon: FileText, title: 'Maintenance', tag: 'Ongoing / Optional', price: 'From $200/mo', desc: 'Model updates, security patches, and included hours for adjustments.' },
]


export default function VaultByEnigma() {
  const ref = useReveal()

  return (
    <div ref={ref} className="vault-page">
      {/* ═══ HERO ═══ */}
      <PageHeader
        title="One Platform. Leading AI Models. Complete Control."
        subtitle="Your team gets multiple AI models in one place. You get full control over security, spending, and data. We set it up. You own it."
        blobColor="orange"
        primaryCta={{ text: 'See Vault in Action', to: '/contact' }}
        secondaryCta={{ text: 'See How It Works', to: '#how-it-works' }}
        image="/images/vault-hero-new.jpg"
        imageAlt="Vault by Enigma interactive AI workspace showing model selection and prompt interface"
        imageLayout="image-right"
        imageStyle={{ transform: 'none' }}
      />

      {/* ═══ PROBLEM + AI MODEL LOGOS ═══ */}
      <section className="section--sm theme-darker">
        <div className="container">
          <div className="two-col reveal" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <span className="badge badge--accent">Vault by Enigma</span>
              <h2 className="display display--gradient heading-md">Your Team Is Already Using AI. The Question Is Whether You're in Control.</h2>
              <p className="body-text">
                Right now, people across your organization are using ChatGPT, Claude, and Gemini on personal accounts, paying with personal credit cards, sharing sensitive information in platforms you don't control, and working in isolation where nobody else can see.
              </p>
              <p style={{ color: 'var(--text-light)', fontSize: 17, lineHeight: 1.8, marginTop: 16, fontWeight: 600 }}>
                Vault gives you one private workspace where every model, every conversation, and every dollar is under your control.
              </p>
            </div>
            <div className="ai-model-grid">
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--openai">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.28 9.37a5.93 5.93 0 0 0-.51-4.88 6.01 6.01 0 0 0-6.47-2.9A5.93 5.93 0 0 0 10.83.01a6.01 6.01 0 0 0-5.73 4.15A5.93 5.93 0 0 0 1.13 7.8a6.01 6.01 0 0 0 .74 7.04 5.93 5.93 0 0 0 .51 4.88 6.01 6.01 0 0 0 6.47 2.9 5.93 5.93 0 0 0 4.47 1.58 6.01 6.01 0 0 0 5.73-4.15 5.93 5.93 0 0 0 3.97-3.64 6.01 6.01 0 0 0-.74-7.04ZM13.32 22.4a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.79-2.76a.78.78 0 0 0 .39-.67v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.5 4.48ZM3.56 18.29a4.49 4.49 0 0 1-.54-3.02l.14.09 4.79 2.76a.78.78 0 0 0 .78 0l5.85-3.38v2.33a.07.07 0 0 1-.03.06l-4.84 2.8a4.5 4.5 0 0 1-6.15-1.64ZM2.34 7.89a4.49 4.49 0 0 1 2.35-1.98v5.69a.78.78 0 0 0 .39.67l5.85 3.37-2.03 1.17a.07.07 0 0 1-.07 0L4 13.98a4.5 4.5 0 0 1-1.65-6.1Zm17.05 3.97-5.85-3.38L15.57 7.3a.07.07 0 0 1 .07 0l4.84 2.8a4.5 4.5 0 0 1-.69 8.1v-5.68a.78.78 0 0 0-.4-.67Zm2.01-3.03-.14-.09-4.79-2.77a.78.78 0 0 0-.78 0l-5.85 3.38V6.02a.07.07 0 0 1 .03-.06l4.84-2.8a4.5 4.5 0 0 1 6.7 4.67ZM8.69 13.16 6.67 12a.07.07 0 0 1-.04-.06V6.36a4.5 4.5 0 0 1 7.38-3.45l-.14.08L9.08 5.75a.78.78 0 0 0-.39.67v6.74Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" fill="currentColor" /></svg>
                </div>
                <span className="ai-model-card__name">ChatGPT</span>
                <span className="ai-model-card__company">OpenAI</span>
              </div>
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--anthropic">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.48l6.15 16.918h3.48L17.304 3.54Zm-10.607 0L.546 20.459H4.1l1.273-3.646h6.475l1.273 3.646h3.554L10.525 3.54H6.697Zm-.51 10.283 2.224-6.37 2.225 6.37H6.187Z" fill="currentColor" /></svg>
                </div>
                <span className="ai-model-card__name">Claude</span>
                <span className="ai-model-card__company">Anthropic</span>
              </div>
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--gemini">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24A14.3 14.3 0 0 0 0 12 14.3 14.3 0 0 0 12 0a14.3 14.3 0 0 0 12 12 14.3 14.3 0 0 0-12 12Z" fill="url(#gemini-grad2)" /><defs><linearGradient id="gemini-grad2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4" /><stop offset=".5" stopColor="#9B72CB" /><stop offset="1" stopColor="#D96570" /></linearGradient></defs></svg>
                </div>
                <span className="ai-model-card__name">Gemini</span>
                <span className="ai-model-card__company">Google</span>
              </div>
              <div className="ai-model-card">
                <div className="ai-model-card__icon ai-model-card__icon--xai">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.04 3h4.44l5.4 8.16L17.58 3h4.38L14.7 13.62 22.38 21h-4.5l-5.82-8.76L6.18 21H1.74l7.86-7.44L2.04 3Z" fill="currentColor" /></svg>
                </div>
                <span className="ai-model-card__name">Grok</span>
                <span className="ai-model-card__company">xAI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM FEATURES GRID ═══ */}
      <section className="section vault-features-section" style={{ position: 'relative' }}>
        <div className="vault-features-section__bg" />
        <div className="vault-features-section__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal section-header">
            <span className="badge badge--accent">The Platform</span>
            <h2 className="display display--gradient heading-lg">Your Team Gets One Place for AI. You Get Complete Control.</h2>
            <p className="section-subtitle">
              Vault isn't another ChatGPT wrapper. It's a complete AI workspace with multi-model access, built-in security, and the tools your organization needs to use AI on your terms.
            </p>
          </div>
          <div className="grid-3 reveal-group">
            {platformFeatures.map((f, i) => (
              <TiltCard key={i} className="card card--glass card--glow vault-feature-card reveal" style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div className="vault-feature-card__media">
                  <img src={f.image} alt={f.title} loading="lazy" className="vault-feature-card__image" />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 className="card-title">{f.title}</h3>
                  <p className="card-desc">{f.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM SHOWCASE — full-width screenshot ═══ */}
      <section className="section--sm theme-darker">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <TiltCard noGlow style={{ borderRadius: 16, overflow: 'hidden', maxWidth: 960, margin: '0 auto', boxShadow: '0 8px 60px rgba(0,0,0,0.4)' }}>
            <img
              src="/images/claude-interface.png"
              alt="Vault by Enigma AI workspace interface showing chat, model selection, sidebar navigation with workspaces and transcriptions, and cost tracking"
              loading="lazy"
              style={{ width: '100%', display: 'block' }}
            />
          </TiltCard>
          <p className="reveal" style={{ color: 'var(--text-dim)', fontSize: 14, marginTop: 20, fontStyle: 'italic' }}>
            The Vault interface: multi-model AI, workspaces, cost tracking, and your knowledge base in one dashboard.
          </p>
        </div>
      </section>

      {/* ═══ FEATURE DEEP DIVES — with real screenshots ═══ */}
      {deepDives.map((dd) => (
        <section key={dd.id} id={dd.id} className={`section ${dd.theme}`}>
          <div className="container">
            <div className={`two-col${dd.reversed ? ' two-col--reversed' : ''} reveal`} style={{ gap: 56, alignItems: 'start' }}>
              <div>
                <span className={`badge badge--${dd.badgeVariant}`}>{dd.badge}</span>
                <h2 className="display display--gradient heading-md">{dd.title}</h2>
                <p className="body-text">{dd.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                  {dd.features.map((f, i) => (
                    <div key={i} className="feature-check">
                      <CheckCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <TiltCard noGlow className="preview-box vault-preview-box" style={{ padding: 0, alignSelf: 'center', height: 'auto', overflow: 'hidden' }}>
                <img src={dd.image} alt={dd.imageAlt} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </TiltCard>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ SECURITY & PRIVACY ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--blue float float--slow" style={{ width: 500, height: 500, top: '-15%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container section-z">
          <div className="reveal section-header" style={{ textAlign: 'center' }}>
            <span className="badge badge--blue">Security & Privacy</span>
            <h2 className="display display--gradient heading-lg">The Biggest Risk with AI Isn't the Technology. It's Where Your Data Ends Up.</h2>
            <p className="section-subtitle">
              When your team uses free AI tools, every prompt is fed into systems you don't control. Vault keeps your information exactly where it belongs: under your control.
            </p>
          </div>

          <div className="grid-3 reveal-group">
            {[
              { image: '/images/vault_private.png', title: 'Private & Contained', desc: 'Your data lives in a secure environment you control. Nothing is shared with third-party training models or exposed to other users. What happens in Vault stays in Vault.' },
              { image: '/images/vault_compliant.png', title: 'Built for Compliance', desc: 'Healthcare, finance, legal: whatever compliance standards your industry requires, we build to meet them. Automatic detection of sensitive data, complete audit trails, and configurable privacy rules come standard. We also establish contractual agreements (including BAAs) with AI providers to ensure your data is never used for model training.' },
              { image: '/images/vault_professional.png', title: 'Not Consumer-Grade', desc: 'Free AI tools are built for individuals. Vault is engineered for professional use, with access controls, audit trails, and data handling practices that consumer tools simply don\'t offer.' },
            ].map((s, i) => (
              <TiltCard key={i} className="card card--glass card--glow vault-feature-card reveal" style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div className="vault-feature-card__media">
                  <img src={s.image} alt={s.title} loading="lazy" className="vault-feature-card__image" />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Customer-voice FAQ — the questions your compliance team will ask */}
          <div className="reveal" style={{ maxWidth: 800, margin: '48px auto 0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, textAlign: 'center', color: '#fff' }}>
              The Questions Your Compliance Team Will Ask
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { q: 'Who can see my information?', a: 'Only the people you authorize. Every system has role-based access controls. Your data is never exposed to unauthorized users, including us.' },
                { q: 'What are you doing with my data?', a: 'Nothing. Your data belongs to you. We don\'t sell it, share it, mine it, or use it to train AI models. It sits in infrastructure you control, encrypted at rest and in transit.' },
                { q: 'Who is able to collect it?', a: 'No one you haven\'t approved. We don\'t embed third-party trackers or pass information to outside parties. You choose which external services connect and what they can access.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '20px 24px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{item.q}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="section theme-light">
        <div className="container">
          <div className="two-col reveal">
            <div>
              <span className="badge badge--accent">How It Works</span>
              <h2 className="display heading-lg" style={{ color: 'var(--text-dark)', WebkitTextFillColor: 'var(--text-dark)' }}>
                We Handle the Setup. Your Team Starts Using AI on Day One.
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 32 }}>
                You don't need a technical team to deploy Vault. We handle every step, from provider configuration to team onboarding.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {[
                  { num: '01', title: 'We Listen. You Talk About Your Business.', desc: 'Free consultation. We learn how your team uses AI, which models matter, and what compliance you need.' },
                  { num: '02', title: 'We Configure Everything.', desc: 'Provider accounts, branding, workspaces, knowledge base, roles, and permissions, all tailored to you.' },
                  { num: '03', title: 'You See Progress Every Step.', desc: 'We launch your private instance, onboard your team, and make sure your models, documents, and workflows are ready.' },
                  { num: '04', title: 'Your Platform Stays Current.', desc: 'New AI models, provider updates, and security patches are all handled behind the scenes with our maintenance plans.' },
                ].map((step, i) => (
                  <div key={i} className="process-step">
                    <span className="process-num">{step.num}</span>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>{step.title}</h4>
                      <p style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <TiltCard noGlow className="preview-box vault-preview-box">
              <img src="/images/vault-process.jpg" alt="Enigma team collaborating with client on AI deployment" style={{ width: '100%', display: 'block' }} />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="section theme-dark" style={{ position: 'relative' }}>
        <div className="blob blob--accent float float--slow" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container section-z">
          <div className="reveal section-header">
            <span className="badge badge--blue">Pricing</span>
            <h2 className="display display--gradient heading-lg">Transparent Pricing. No Hidden Fees.</h2>
            <p className="section-subtitle">Three components. All straightforward. We'll help you estimate total costs during your free consultation.</p>
          </div>
          <div className="grid-3 reveal-group">
            {pricingComponents.map((p, i) => (
              <TiltCard key={i} className="card card--glass card--glow reveal" style={{ textAlign: 'center' }}>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 14 }}>{p.tag}</span>
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: '6px 0 4px' }}>{p.title}</h3>
                <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>{p.price}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
              </TiltCard>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Vault Pricing for Your Team <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABlock
        headline="Ready to Take Control of AI?"
        text="Tell us about your team and how you're using AI today. We'll show you exactly how Vault fits and what it would cost."
        buttonText="Schedule Your Vault Consultation"
      />
    </div>
  )
}
