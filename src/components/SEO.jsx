/**
 * SEO — Per-route metadata using React 19 native <head> hoisting.
 *
 * React 19 automatically hoists <title>, <meta>, and <link> elements
 * rendered anywhere in the component tree into <head>.
 *
 * Reads the current pathname from React Router, looks up the matching
 * entry in seoConfig, and renders the appropriate tags.
 */
import { useLocation } from 'react-router-dom'
import seoConfig, { defaultSeo, BASE } from '../seoConfig'

export default function SEO() {
  const { pathname } = useLocation()
  const config = seoConfig[pathname] || defaultSeo
  const { title, description, ogImage } = config

  const canonicalUrl = `${BASE}${pathname === '/' ? '' : pathname}`
  const imageUrl = `${BASE}${ogImage}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </>
  )
}
