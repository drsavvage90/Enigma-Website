/**
 * ScrollProgress — A thin gradient bar at the very top of the viewport
 * that fills from left to right as the user scrolls down the page.
 */
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: 2,
        background: 'linear-gradient(90deg, #FF9F41, #FF7733, #FF9F41)',
        zIndex: 1100,
        transition: 'width 0.1s linear',
        boxShadow: progress > 0.01 ? '0 0 10px rgba(255, 159, 65, 0.5)' : 'none',
      }}
    />
  )
}
