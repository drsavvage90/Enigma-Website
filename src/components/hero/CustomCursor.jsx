/**
 * CustomCursor — A hollow circle that follows the mouse with a springy delay,
 * using mix-blend-mode: difference to invert colors it passes over.
 * Only rendered on non-touch (pointer: fine) devices.
 */
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CURSOR_SIZE = 40
const SPRING_CONFIG = { stiffness: 300, damping: 28, mass: 0.4 }

export default function CustomCursor() {
    const [visible, setVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springX = useSpring(cursorX, SPRING_CONFIG)
    const springY = useSpring(cursorY, SPRING_CONFIG)

    useEffect(() => {
        // Don't show on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        const move = (e) => {
            cursorX.set(e.clientX - CURSOR_SIZE / 2)
            cursorY.set(e.clientY - CURSOR_SIZE / 2)
            if (!visible) setVisible(true)
        }

        const addHoverListeners = () => {
            const targets = document.querySelectorAll('a, button, [role="button"], .magnetic-btn')
            targets.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true))
                el.addEventListener('mouseleave', () => setIsHovering(false))
            })
        }

        window.addEventListener('mousemove', move)
        // Observe DOM changes to add hover listeners to dynamic elements
        addHoverListeners()
        const observer = new MutationObserver(addHoverListeners)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', move)
            observer.disconnect()
        }
    }, [visible, cursorX, cursorY])

    if (!visible) return null

    return (
        <motion.div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: springX,
                y: springY,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
                borderRadius: '50%',
                border: '2px solid #fff',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference',
                transition: 'width 0.3s, height 0.3s, border-width 0.3s',
                ...(isHovering
                    ? { width: CURSOR_SIZE * 1.6, height: CURSOR_SIZE * 1.6, borderWidth: 3 }
                    : {}),
            }}
        />
    )
}
