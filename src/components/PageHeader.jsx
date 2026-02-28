/**
 * PageHeader — Premium animated page header with staggered text reveal.
 * Replaces the static page-header sections on all inner pages.
 */
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 16,
        },
    },
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 },
    },
}

export default function PageHeader({ title, subtitle, blobColor = 'accent' }) {
    const blobClass = `blob blob--${blobColor} float float--slow`

    useEffect(() => {
        const prev = document.title
        document.title = `${title} | Enigma Software Systems`
        const meta = document.querySelector('meta[name="description"]')
        const prevDesc = meta?.getAttribute('content')
        if (meta && subtitle) meta.setAttribute('content', subtitle)
        return () => {
            document.title = prev
            if (meta && prevDesc) meta.setAttribute('content', prevDesc)
        }
    }, [title, subtitle])

    return (
        <section className="page-header noise-overlay" style={{ position: 'relative' }}>
            <div className={blobClass} style={{ width: 500, height: 500, top: '-30%', left: '50%', transform: 'translateX(-50%)' }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>{title}</motion.h1>
                    <motion.p className="subtitle" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    {/* Animated accent line under subtitle */}
                    <motion.div
                        variants={lineVariants}
                        style={{
                            width: 60,
                            height: 3,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #FF9F41, #FF7733)',
                            margin: '20px auto 0',
                            transformOrigin: 'left center',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}
