import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App'
import './styles/global.css'

// Lazy-load Sentry only when a DSN is configured
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN
if (SENTRY_DSN) {
  import('https://browser.sentry-cdn.com/8.53.0/bundle.min.js').catch(() => {
    // Sentry CDN unavailable — site still works
  }).then(() => {
    if (window.Sentry) {
      window.Sentry.init({
        dsn: SENTRY_DSN,
        tracesSampleRate: 0.1,
        environment: import.meta.env.MODE,
      })
    }
  })
}

// Analytics — Plausible (privacy-friendly, no cookies) or GA4
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN
if (PLAUSIBLE_DOMAIN) {
  const s = document.createElement('script')
  s.defer = true
  s.dataset.domain = PLAUSIBLE_DOMAIN
  s.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(s)
}

const GA4_ID = import.meta.env.VITE_GA4_ID
if (GA4_ID) {
  const g = document.createElement('script')
  g.async = true
  g.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(g)
  g.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA4_ID, { send_page_view: true })
    window.gtag = gtag
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
