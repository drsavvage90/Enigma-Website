/**
 * ScrollToTopButton — A floating button with a progress ring that appears
 * after scrolling down. Smoothly scrolls back to top on click.
 */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SIZE = 44
const STROKE = 3
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ScrollToTopButton() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const pct = docHeight > 0 ? scrollTop / docHeight : 0
            setProgress(pct)
            setVisible(scrollTop > 400)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const strokeDashoffset = CIRCUMFERENCE * (1 - progress)

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleClick}
                    aria-label="Scroll to top"
                    style={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        width: SIZE,
                        height: SIZE,
                        borderRadius: '50%',
                        border: 'none',
                        background: 'rgba(17, 17, 21, 0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 900,
                        padding: 0,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    }}
                >
                    {/* Progress ring */}
                    <svg
                        width={SIZE}
                        height={SIZE}
                        style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
                    >
                        <circle
                            cx={SIZE / 2}
                            cy={SIZE / 2}
                            r={RADIUS}
                            fill="none"
                            stroke="rgba(255, 159, 65, 0.25)"
                            strokeWidth={STROKE}
                        />
                        <circle
                            cx={SIZE / 2}
                            cy={SIZE / 2}
                            r={RADIUS}
                            fill="none"
                            stroke="#FF9F41"
                            strokeWidth={STROKE}
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                        />
                    </svg>
                    <ArrowUp size={16} style={{ color: '#fff', position: 'relative' }} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
