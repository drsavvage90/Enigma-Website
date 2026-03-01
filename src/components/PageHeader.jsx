/**
 * PageHeader — Premium animated page header with staggered text reveal.
 *
 * Supports three image modes:
 *   imageLayout="image-right"  — split grid: text left, image right
 *   imageLayout="image-left"   — split grid: image left, text right
 *   imageLayout="background"   — full-width background image with dark overlay
 *   (no imageLayout)           — original centered text-only hero
 *
 * Optional CTA buttons:
 *   primaryCta  — { text, to }  solid filled button
 *   secondaryCta — { text, to } outlined / ghost button
 */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
        transition: { type: 'spring', stiffness: 100, damping: 16 },
    },
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 },
    },
}

const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 90, damping: 16, delay: 0.15 },
    },
}

const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
    },
}

export default function PageHeader({
    title,
    subtitle,
    blobColor = 'accent',
    primaryCta,
    secondaryCta,
    image,
    imageAlt = '',
    imageLayout, // 'image-right' | 'image-left' | 'background' | undefined
}) {
    const blobClass = `blob blob--${blobColor} float float--slow`
    const hasCta = primaryCta || secondaryCta
    const isSplit = imageLayout === 'image-left' || imageLayout === 'image-right'
    const isBackground = imageLayout === 'background'

    /* ── Shared text block ── */
    const accentLineStyle = {
        width: 60,
        height: 3,
        borderRadius: 2,
        background: 'linear-gradient(90deg, #FF9F41, #FF7733)',
        margin: isSplit ? '20px 0 0' : '20px auto 0',
        transformOrigin: 'left center',
    }

    const renderCta = () =>
        hasCta ? (
            <motion.div className="page-header__ctas" variants={ctaVariants}>
                {primaryCta && (
                    <Link to={primaryCta.to} className="btn btn-primary btn-lg">
                        {primaryCta.text}
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                )}
                {secondaryCta &&
                    (secondaryCta.to.startsWith('#') ? (
                        <a href={secondaryCta.to} className="btn btn-ghost btn-lg">
                            {secondaryCta.text}
                        </a>
                    ) : (
                        <Link to={secondaryCta.to} className="btn btn-ghost btn-lg">
                            {secondaryCta.text}
                        </Link>
                    ))}
            </motion.div>
        ) : null

    const textBlock = (
        <motion.div
            className={isSplit ? 'page-header__text' : undefined}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants}>{title}</motion.h1>
            <motion.p className="subtitle" variants={itemVariants}>
                {subtitle}
            </motion.p>
            <motion.div variants={lineVariants} style={accentLineStyle} />
            {renderCta()}
        </motion.div>
    )

    /* ── Image block (for split layouts) ── */
    const imageBlock = image ? (
        <motion.div
            className="page-header__image"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
        >
            <img src={image} alt={imageAlt} />
        </motion.div>
    ) : null

    /* ── Section class list ── */
    const sectionClasses = [
        'page-header',
        'noise-overlay',
        isSplit && 'page-header--split',
        isBackground && 'page-header--bg-image',
    ]
        .filter(Boolean)
        .join(' ')

    /* ── Background-image style ── */
    const sectionStyle = {
        position: 'relative',
        ...(isBackground && image
            ? {
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }
            : {}),
    }

    /* ── Render ── */
    return (
        <section className={sectionClasses} style={sectionStyle}>
            {isBackground && <div className="page-header__overlay" />}
            <div
                className={blobClass}
                style={{
                    width: 500,
                    height: 500,
                    top: '-30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />
            <div
                className={`container${isSplit ? ' page-header__grid' : ''}`}
                style={{ position: 'relative', zIndex: 1 }}
            >
                {isSplit && imageLayout === 'image-left' ? (
                    <>
                        {imageBlock}
                        {textBlock}
                    </>
                ) : isSplit ? (
                    <>
                        {textBlock}
                        {imageBlock}
                    </>
                ) : (
                    textBlock
                )}
            </div>
        </section>
    )
}
