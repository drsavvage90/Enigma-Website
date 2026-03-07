/**
 * Centralized SEO metadata for every route.
 *
 * Each key is a pathname.  Values are consumed by <SEO />.
 *   title       — full <title> (≤ 60 chars ideal)
 *   description — meta description (≤ 160 chars ideal)
 *   ogImage     — open-graph / twitter card image path (absolute from public/)
 */

const SITE = 'Enigma Software Systems'
const BASE = import.meta.env.VITE_SITE_URL || 'https://www.enigmasoftwaresystems.com'
const OG_DEFAULT = '/images/og-default.png'

const seoConfig = {
  '/': {
    title: `Custom Software Development | ${SITE}`,
    description:
      'Custom AI systems, mobile apps, and web applications for small businesses. HIPAA-ready, security-first software development from Ohio, serving clients nationwide.',
    ogImage: OG_DEFAULT,
  },
  '/about': {
    title: `About Us | ${SITE}`,
    description:
      'Meet the builders, strategists, and problem-solvers behind Enigma. We create custom software for businesses that deserve better than off-the-shelf.',
    ogImage: OG_DEFAULT,
  },
  '/ai-systems': {
    title: `Custom AI Systems for Business | ${SITE}`,
    description:
      'Private AI platforms for small business — customer-facing chatbots, internal knowledge tools, and multi-LLM integrations. Secure, branded, and built for your workflows.',
    ogImage: OG_DEFAULT,
  },
  '/mobile-apps': {
    title: `Custom Mobile Apps | ${SITE}`,
    description:
      'Give your customers a faster, easier way to interact with your business — custom iOS and Android apps for scheduling, e-commerce, loyalty, and more.',
    ogImage: OG_DEFAULT,
  },
  '/web-apps': {
    title: `Custom Web Applications | ${SITE}`,
    description:
      'HIPAA-compliant web apps, client portals, and admin dashboards built to replace spreadsheets. Custom web application development for businesses ready to modernize.',
    ogImage: OG_DEFAULT,
  },
  '/vault': {
    title: `Vault by Enigma — Multi-LLM AI Platform | ${SITE}`,
    description:
      'One platform, multiple AI models, complete control. A private, branded AI workspace with enterprise security, cost transparency, and the models you choose.',
    ogImage: OG_DEFAULT,
  },
  '/how-we-work': {
    title: `How We Work | ${SITE}`,
    description:
      'From discovery call to launch and beyond — learn how Enigma takes your project from concept to a working product with ongoing support.',
    ogImage: OG_DEFAULT,
  },
  '/industries': {
    title: `Industries We Serve | ${SITE}`,
    description:
      'Custom software for HVAC, healthcare, legal, consulting, and service-based businesses. Technology purpose-built for your industry.',
    ogImage: OG_DEFAULT,
  },
  '/portfolio': {
    title: `Portfolio | ${SITE}`,
    description:
      'Real projects, real results. Explore the custom software solutions Enigma has delivered for businesses ready to modernize.',
    ogImage: OG_DEFAULT,
  },
  '/faq': {
    title: `FAQ | ${SITE}`,
    description:
      'Straight answers to the questions we hear most — pricing, timelines, process, technology, and what it\'s like to work with Enigma.',
    ogImage: OG_DEFAULT,
  },
  '/pricing': {
    title: `Pricing | ${SITE}`,
    description:
      'Transparent pricing for custom AI systems, mobile apps, and web applications. See what your project might cost — no hidden fees, no surprises.',
    ogImage: OG_DEFAULT,
  },
  '/contact': {
    title: `Contact Us | ${SITE}`,
    description:
      'Ready to build something? Reach out for a free consultation — no pressure, no generic pitch, just a real conversation about your project.',
    ogImage: OG_DEFAULT,
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${SITE}`,
    description:
      'How Enigma Software Systems collects, uses, and protects your information.',
    ogImage: OG_DEFAULT,
  },
  '/terms-of-service': {
    title: `Terms of Service | ${SITE}`,
    description:
      'The terms that govern your use of the Enigma Software Systems website and services.',
    ogImage: OG_DEFAULT,
  },
  '/blog': {
    title: `Blog | ${SITE}`,
    description:
      'Insights on custom software development, AI for small business, HIPAA compliance, mobile apps, and building technology that works for your business.',
    ogImage: OG_DEFAULT,
  },
  '/blog/why-custom-software-beats-off-the-shelf': {
    title: `Why Custom Software Beats Off-the-Shelf | ${SITE}`,
    description:
      'Off-the-shelf tools get you started, but custom software scales with your operations. Here\'s when it makes sense to invest in purpose-built technology.',
    ogImage: OG_DEFAULT,
  },
  '/blog/ai-chatbots-for-small-business': {
    title: `AI Chatbots for Small Business | ${SITE}`,
    description:
      'A clear breakdown of what an AI chatbot can realistically do for a small business, what it costs, and whether it\'s worth the investment.',
    ogImage: OG_DEFAULT,
  },
  '/blog/hipaa-compliant-web-apps-what-you-need': {
    title: `Building HIPAA-Compliant Web Apps | ${SITE}`,
    description:
      'If your business handles patient data, your web app needs more than an SSL certificate. A practical guide to HIPAA compliance in custom web applications.',
    ogImage: OG_DEFAULT,
  },
  '/blog/mobile-app-vs-mobile-website': {
    title: `Mobile App vs. Mobile Website | ${SITE}`,
    description:
      'Not every business needs a native app. How to decide between a mobile-optimized website and a custom iOS/Android application for your business.',
    ogImage: OG_DEFAULT,
  },
}

/** Fallback used for unmatched routes (e.g. 404). */
export const defaultSeo = {
  title: `Page Not Found | ${SITE}`,
  description:
    'The page you\'re looking for doesn\'t exist or has been moved.',
  ogImage: OG_DEFAULT,
}

export { BASE }
export default seoConfig
