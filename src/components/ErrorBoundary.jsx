import { Component } from 'react'
import { ArrowLeft, RefreshCw } from 'lucide-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // If Sentry is loaded, forward the error
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.captureException(error, { extra: errorInfo })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050508',
          color: '#e0e0e0',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: 24,
        }}>
          <div style={{ maxWidth: 480 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Something went wrong</h1>
            <p style={{ color: '#888', lineHeight: 1.7, marginBottom: 32 }}>
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <RefreshCw size={16} /> Refresh Page
              </button>
              <a
                href="/"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <ArrowLeft size={16} /> Back to Home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
