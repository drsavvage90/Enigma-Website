/**
 * ParticleField — A subtle, interactive starfield / particle network.
 * Uses pure canvas for performance. Particles gently drift and react
 * when the user moves their mouse (within a threshold distance).
 */
import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 60
const MAX_SPEED = 0.25
const MOUSE_RADIUS = 160
const LINE_DISTANCE = 120
const BASE_OPACITY = 0.12 // subtle 10-15% range

export default function ParticleField() {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: -9999, y: -9999 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        let animId
        let particles = []

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            canvas.width = canvas.offsetWidth * dpr
            canvas.height = canvas.offsetHeight * dpr
            ctx.scale(dpr, dpr)
        }

        const createParticles = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * MAX_SPEED,
                vy: (Math.random() - 0.5) * MAX_SPEED,
                r: Math.random() * 1.5 + 0.5,
            }))
        }

        const draw = () => {
            const w = canvas.offsetWidth
            const h = canvas.offsetHeight
            ctx.clearRect(0, 0, w, h)

            const mx = mouseRef.current.x
            const my = mouseRef.current.y

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Mouse repulsion (gentle push)
                const dx = p.x - mx
                const dy = p.y - my
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < MOUSE_RADIUS && dist > 0) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.6
                    p.vx += (dx / dist) * force * 0.15
                    p.vy += (dy / dist) * force * 0.15
                }

                // Dampen velocity
                p.vx *= 0.99
                p.vy *= 0.99

                // Move
                p.x += p.vx
                p.y += p.vy

                // Wrap
                if (p.x < 0) p.x = w
                if (p.x > w) p.x = 0
                if (p.y < 0) p.y = h
                if (p.y > h) p.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${BASE_OPACITY})`
                ctx.fill()

                // Draw connecting lines to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j]
                    const lx = p.x - q.x
                    const ly = p.y - q.y
                    const ld = Math.sqrt(lx * lx + ly * ly)
                    if (ld < LINE_DISTANCE) {
                        const lineAlpha = (1 - ld / LINE_DISTANCE) * BASE_OPACITY * 0.6
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(q.x, q.y)
                        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            animId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        }

        const handleMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 }
        }

        resize()
        createParticles()
        draw()

        window.addEventListener('resize', resize)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'auto',
            }}
        />
    )
}
