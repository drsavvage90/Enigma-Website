import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import ScrollToTopButton from './components/ScrollToTopButton'
import ScrollProgress from './components/ScrollProgress'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const AISystems = lazy(() => import('./pages/AISystems'))
const MobileApps = lazy(() => import('./pages/MobileApps'))
const WebApps = lazy(() => import('./pages/WebApps'))
const VaultByEnigma = lazy(() => import('./pages/VaultByEnigma'))
const HowWeWork = lazy(() => import('./pages/HowWeWork'))
const Industries = lazy(() => import('./pages/Industries'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="loading-screen" />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/ai-systems" element={<PageTransition><AISystems /></PageTransition>} />
              <Route path="/mobile-apps" element={<PageTransition><MobileApps /></PageTransition>} />
              <Route path="/web-apps" element={<PageTransition><WebApps /></PageTransition>} />
              <Route path="/vault" element={<PageTransition><VaultByEnigma /></PageTransition>} />
              <Route path="/how-we-work" element={<PageTransition><HowWeWork /></PageTransition>} />
              <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
              <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
