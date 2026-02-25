import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    const el = ref.current
    if (el) {
      el.querySelectorAll('.reveal, .reveal--scale, .reveal--left, .reveal--right').forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
