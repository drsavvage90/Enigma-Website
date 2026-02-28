/**
 * CustomCursor — A hollow circle that follows the mouse with a springy delay,
 * using mix-blend-mode: difference to invert colors it passes over.
 * Only rendered on non-touch (pointer: fine) devices.
 */
import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CURSOR_SIZE = 40
const CURSOR_SIZE_HOVER = CURSOR_SIZE * 1.6
const SPRING_CONFIG = { stiffness: 300, damping: 28, mass: 0.4 }

const baseStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    borderRadius: '50%',
    border: '2px solid #fff',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    transition: 'width 0.3s, height 0.3s, border-width 0.3s',
}

export default function CustomCursor() {
    const [visible, setVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springX = useSpring(cursorX, SPRING_CONFIG)
    const springY = useSpring(cursorY, SPRING_CONFIG)
    const trackedElements = useRef(new WeakSet())

    const onEnter = useCallback(() => setIsHovering(true), [])
    const onLeave = useCallback(() => setIsHovering(false), [])

    useEffect(() => {
        // Don't show on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        let hasShown = false
        const move = (e) => {
            cursorX.set(e.clientX - CURSOR_SIZE / 2)
            cursorY.set(e.clientY - CURSOR_SIZE / 2)
            if (!hasShown) {
                hasShown = true
                setVisible(true)
            }
        }

        const addHoverListeners = () => {
            const targets = document.querySelectorAll('a, button, [role="button"], .magnetic-btn')
            targets.forEach((el) => {
                if (trackedElements.current.has(el)) return
                trackedElements.current.add(el)
                el.addEventListener('mouseenter', onEnter)
                el.addEventListener('mouseleave', onLeave)
            })
        }

        window.addEventListener('mousemove', move, { passive: true })
        addHoverListeners()
        const observer = new MutationObserver(addHoverListeners)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', move)
            observer.disconnect()
        }
    }, [cursorX, cursorY, onEnter, onLeave])

    if (!visible) return null

    return (
        <motion.div
            aria-hidden="true"
            style={{
                ...baseStyle,
                x: springX,
                y: springY,
                width: isHovering ? CURSOR_SIZE_HOVER : CURSOR_SIZE,
                height: isHovering ? CURSOR_SIZE_HOVER : CURSOR_SIZE,
                borderWidth: isHovering ? 3 : 2,
            }}
        />
    )
}
