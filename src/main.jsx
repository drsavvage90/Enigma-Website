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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
