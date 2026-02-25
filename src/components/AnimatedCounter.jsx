/**
 * AnimatedCounter — A number that counts up from 0 when it scrolls into view.
 * Uses requestAnimationFrame for smooth 60fps counting.
 */
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({
    target,
    suffix = '',
    prefix = '',
    duration = 2000,
    label,
}) {
    const ref = useRef(null)
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    observer.unobserve(el)

                    const start = performance.now()
                    const animate = (now) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * target))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration, hasAnimated])

    return (
        <div ref={ref} className="stat-counter">
            <div className="stat-counter__number">
                {prefix}{count}{suffix}
            </div>
            <div className="stat-counter__label">{label}</div>
        </div>
    )
}
