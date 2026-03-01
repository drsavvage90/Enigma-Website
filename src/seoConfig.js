/**
 * Centralized SEO metadata for every route.
 *
 * Each key is a pathname.  Values are consumed by <SEO />.
 *   title       — full <title> (≤ 60 chars ideal)
 *   description — meta description (≤ 160 chars ideal)
 *   ogImage     — open-graph / twitter card image path (absolute from public/)
 */

const SITE = 'Enigma Software Systems'
const BASE  = 'https://www.enigmasoftwaresystems.com'
const OG_DEFAULT = '/images/og-default.png'

const seoConfig = {
  '/': {
    title: `${SITE} | Custom Software. Intelligent Solutions.`,
    description:
      'Custom AI Systems, Mobile Applications, and Web Applications purpose-built for your business. Security-first, full-stack software from a team that builds different.',
    ogImage: OG_DEFAULT,
  },
  '/about': {
    title: `About Us | ${SITE}`,
    description:
      'Meet the builders, strategists, and problem-solvers behind Enigma. We create custom software for businesses that deserve better than off-the-shelf.',
    ogImage: OG_DEFAULT,
  },
  '/ai-systems': {
    title: `Custom AI Systems | ${SITE}`,
    description:
      'Private, branded AI platforms — customer-facing chat assistants, internal knowledge tools, and custom integrations built around the way your business works.',
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
      'Replace spreadsheets and clunky workarounds with streamlined web applications — client portals, admin dashboards, and custom tools your team will actually use.',
    ogImage: OG_DEFAULT,
  },
  '/vault': {
    title: `Vault by Enigma — Multi-LLM AI Platform | ${SITE}`,
    description:
      'One platform, every AI model, complete control. A private, branded AI workspace with enterprise security, cost transparency, and the models you choose.',
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
