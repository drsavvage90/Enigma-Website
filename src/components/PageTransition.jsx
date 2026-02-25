/**
 * PageTransition — Wraps page content with a cinematic fade + slide
 * transition using Framer Motion's AnimatePresence.
 */
import { motion } from 'framer-motion'

const variants = {
    initial: {
        opacity: 0,
        y: 24,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
}

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    )
}
