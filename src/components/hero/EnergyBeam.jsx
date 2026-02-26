import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 70

export default function EnergyBeam() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let w, h

    // Cached gradients to prevent rebuilding them 60 times a second
    let nebulaGrad, atmosGrad, midGrad, coreGrad, floorGrad, coreFlareGrad

    // Beam position calculations cached
    let beamX, beamTop, bottomY

    // Particles that drift upward through the beam
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      speed: 0.5 + Math.random() * 2.0, // Faster river
      opacity: Math.random() * 0.5 + 0.1,
      size: Math.random() * 2.0 + 0.5,
      // Minimal to zero expanding drift so they stay parallel to beam
      drift: (Math.random() - 0.5) * 0.1,
      phase: Math.random() * Math.PI * 2,
      splashed: false,
    }))

    function resetParticle(p) {
      const edgeBias = Math.random() > 0.5 ? 1 : -1
      // Beam core is ~w * 0.04 wide. Start them right on the edge (0.038 to 0.045)
      const ww = (w || window.innerWidth)
      const beamEdgeDist = ww * 0.038 + (Math.random() * ww * 0.007)

      p.x = (ww * 0.5) + (beamEdgeDist * edgeBias)
      p.y = -Math.random() * 60
      p.speed = 1.0 + Math.random() * 2.5 // Fast plasma river down
      p.drift = (Math.random() - 0.5) * 0.1 // Reset horizontal drift
      p.opacity = Math.random() * 0.5 + 0.3 // Brighter particles
      p.splashed = false
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      beamX = w * 0.65
      beamTop = 0
      bottomY = h * 0.95

      // Pre-compute static gradients perfectly sized to window
      nebulaGrad = ctx.createRadialGradient(beamX, h * 0.5, 0, beamX, h * 0.5, w * 0.6)
      nebulaGrad.addColorStop(0, 'rgba(0, 255, 255, 0.009)')
      nebulaGrad.addColorStop(0.2, 'rgba(0, 230, 255, 0.006)')
      nebulaGrad.addColorStop(0.4, 'rgba(0, 200, 255, 0.004)')
      nebulaGrad.addColorStop(0.7, 'rgba(0, 150, 255, 0.002)')
      nebulaGrad.addColorStop(1, 'rgba(0, 100, 255, 0)')

      atmosGrad = ctx.createLinearGradient(beamX - w * 0.3, 0, beamX + w * 0.3, 0)
      atmosGrad.addColorStop(0, 'rgba(0, 255, 255, 0.0)')
      atmosGrad.addColorStop(0.3, 'rgba(0, 255, 255, 0.003)')
      atmosGrad.addColorStop(0.5, 'rgba(0, 255, 255, 0.009)')
      atmosGrad.addColorStop(0.7, 'rgba(0, 255, 255, 0.003)')
      atmosGrad.addColorStop(1, 'rgba(0, 255, 255, 0.0)')

      midGrad = ctx.createLinearGradient(beamX - w * 0.1, 0, beamX + w * 0.1, 0)
      midGrad.addColorStop(0, 'rgba(0, 255, 255, 0.0)')
      midGrad.addColorStop(0.25, 'rgba(0, 255, 255, 0.0375)')
      midGrad.addColorStop(0.5, 'rgba(100, 255, 255, 0.075)')
      midGrad.addColorStop(0.75, 'rgba(0, 255, 255, 0.0375)')
      midGrad.addColorStop(1, 'rgba(0, 255, 255, 0.0)')

      coreGrad = ctx.createLinearGradient(beamX - w * 0.04, 0, beamX + w * 0.04, 0)
      coreGrad.addColorStop(0, 'rgba(150, 255, 255, 0.0)')
      coreGrad.addColorStop(0.3, 'rgba(200, 255, 255, 0.4)')
      coreGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)')
      coreGrad.addColorStop(0.7, 'rgba(200, 255, 255, 0.4)')
      coreGrad.addColorStop(1, 'rgba(150, 255, 255, 0.0)')

      const flareY = bottomY
      floorGrad = ctx.createRadialGradient(beamX, flareY, 0, beamX, flareY, w * 0.8)
      floorGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
      floorGrad.addColorStop(0.05, 'rgba(150, 255, 255, 0.7)')
      floorGrad.addColorStop(0.15, 'rgba(0, 255, 255, 0.4)')
      floorGrad.addColorStop(0.4, 'rgba(0, 200, 255, 0.15)')
      floorGrad.addColorStop(0.8, 'rgba(0, 100, 255, 0)')

      particles.forEach(p => resetParticle(p))
    }

    function draw(timestamp) {
      if (!w || !h) return // Ensure resize has run

      const sec = timestamp * 0.001
      ctx.clearRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'

      ctx.fillStyle = nebulaGrad
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = atmosGrad
      ctx.fillRect(beamX - w * 0.3, beamTop, w * 0.6, h)

      ctx.fillStyle = midGrad
      ctx.fillRect(beamX - w * 0.1, beamTop, w * 0.2, h)

      // Complex chaotic pulsing calculations
      const pulse1 = 1 + Math.sin(sec * 2.5) * 0.2
      const pulse2 = 1 + Math.sin(sec * 4.1 + 1.2) * 0.3
      const pulse3 = 1 + Math.sin(sec * 1.8 + 2.5) * 0.15

      // Base beam doubled in size
      ctx.fillStyle = coreGrad
      ctx.fillRect(beamX - w * 0.04 * pulse1, beamTop, w * 0.08 * pulse1, h)

      // Flowing water/plasma texture inside the beam
      ctx.save()
      ctx.beginPath()
      ctx.rect(beamX - w * 0.04 * pulse1, beamTop, w * 0.08 * pulse1, h)
      ctx.clip()

      // High-quality overlapping layered plasma waves
      ctx.globalCompositeOperation = 'screen'

      const waveCount = 12
      for (let wIdx = 0; wIdx < waveCount; wIdx++) {
        // Stagger their speeds and positions
        const speed = 100 + wIdx * 25
        const waveY = (sec * speed) % h

        // Complex noise/chaos in the snaking
        const noise = Math.sin(sec * 1.5 + wIdx * 1.2) * Math.cos(sec * 0.8 + wIdx * 2.1)
        const waveX = beamX + noise * (w * 0.02)

        // Pulsing thickness
        const waveWidth = w * 0.008 + Math.sin(sec * 3 + wIdx) * w * 0.004

        // Create a vertical gradient for each wave to make them look like soft liquid streaks
        const waveGrad = ctx.createLinearGradient(0, waveY - h * 0.1, 0, waveY + h * 0.1)
        // Alternate colors slightly between hot cyan and softer white-blues
        if (wIdx % 3 === 0) {
          waveGrad.addColorStop(0, 'rgba(255, 255, 255, 0)')
          waveGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.15 + (wIdx % 2) * 0.1})`)
          waveGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        } else {
          waveGrad.addColorStop(0, 'rgba(100, 255, 255, 0)')
          waveGrad.addColorStop(0.5, `rgba(100, 255, 255, ${0.2 + (wIdx % 2) * 0.15})`)
          waveGrad.addColorStop(1, 'rgba(100, 255, 255, 0)')
        }

        ctx.fillStyle = waveGrad

        // Draw an elongated stretched oval for the wave using rect to avoid path calculation overhead of ellipse
        ctx.fillRect(waveX - waveWidth, waveY - h * 0.1, waveWidth * 2, h * 0.2)

        // Draw wrapping wave if crossing bottom edge
        if (waveY + h * 0.1 > h) {
          ctx.fillRect(waveX - waveWidth, waveY - h - h * 0.1, waveWidth * 2, h * 0.2)
        }
      }
      ctx.restore()

      // Striations (Doubled spread and thickness)
      ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + pulse2 * 0.1})`
      ctx.fillRect(beamX - 3.0 * pulse1, beamTop, 6 * pulse1, h)

      ctx.fillStyle = `rgba(100, 255, 255, ${0.4 + pulse3 * 0.2})`
      ctx.fillRect(beamX - 12 - 4 * pulse2, beamTop, 2.5, h)
      ctx.fillRect(beamX + 12 + 4 * pulse2, beamTop, 2.5, h)

      // Bottom Flaring Splash
      ctx.save()
      ctx.translate(beamX, bottomY)
      ctx.scale(1, 0.15)
      ctx.beginPath()
      ctx.arc(0, 0, w * 0.8, 0, Math.PI * 2)
      ctx.fillStyle = floorGrad
      ctx.fill()
      ctx.restore()

      // High-intensity core flare at bottom intersection (must be rebuilt slightly based on pulse)
      // Since it requires pulse1/pulse2 blending, we rebuild THIS specific small gradient frame-by-frame
      // as it's small enough to not cause lag vs the massive floor/nebula ones.
      const coreFlareGrad = ctx.createRadialGradient(beamX, bottomY, 0, beamX, bottomY, w * 0.25)
      coreFlareGrad.addColorStop(0, `rgba(255, 255, 255, ${0.9 + pulse1 * 0.1})`)
      coreFlareGrad.addColorStop(0.1, `rgba(150, 255, 255, ${0.8 + pulse2 * 0.1})`)
      coreFlareGrad.addColorStop(0.4, 'rgba(0, 200, 255, 0)')

      ctx.save()
      ctx.translate(beamX, bottomY)
      ctx.scale(1, 0.1)
      ctx.beginPath()
      ctx.arc(0, 0, w * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = coreFlareGrad
      ctx.fill()
      ctx.restore()

      // ── Flowing particles (River down the sides and pooling at bottom) ──
      for (let pi = 0; pi < particles.length; pi++) {
        const p = particles[pi]
        // Very tight horizontal oscillation if falling, none if splashed
        const driftX = p.splashed ? 0 : Math.sin(sec * 1.5 + p.phase) * 3
        const progress = Math.min(p.y / h, 1)

        const fadeIn = Math.min(progress * 8, 1) // Fade in instantly at the top

        // If splashed, fade out based on how far horizontally they travel, instead of vertical depth
        const horizontalDist = Math.abs(p.x - beamX)
        const splashFade = p.splashed ? Math.max(0, 1 - (horizontalDist / (w * 0.3))) : 1

        // Vertical fade out only applies before they splash
        const verticalFade = p.splashed ? 1 : Math.min((1 - progress) * 5, 1)
        const fadeOut = verticalFade * splashFade
        const twinkle = 0.5 + Math.sin(sec * 4 + p.phase * 3) * 0.5
        const alpha = Math.max(0, p.opacity * fadeIn * fadeOut * twinkle)

        if (alpha > 0.01) {
          // Motion blur trailing logic
          const isFalling = !p.splashed
          const trailLength = isFalling ? p.speed * 4 : 0 // Stretch based on speed

          // Glow layer
          ctx.beginPath()
          if (isFalling) {
            ctx.moveTo(p.x + driftX, p.y - trailLength)
            ctx.lineTo(p.x + driftX, p.y + trailLength)
            ctx.lineWidth = p.size * 3
            ctx.lineCap = 'round'
            ctx.strokeStyle = `rgba(0, 200, 255, ${alpha * 0.5})`
            ctx.stroke()
          } else {
            ctx.arc(p.x + driftX, p.y, p.size * 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 200, 255, ${alpha * 0.5})`
            ctx.fill()
          }

          // Core bright particle layer
          ctx.beginPath()
          if (isFalling) {
            ctx.moveTo(p.x + driftX, p.y - trailLength * 0.5)
            ctx.lineTo(p.x + driftX, p.y + trailLength * 0.5)
            ctx.lineWidth = p.size
            ctx.lineCap = 'round'
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.stroke()
          } else {
            ctx.arc(p.x + driftX, p.y, p.size * 0.8, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.fill()
          }
        }

        p.y += p.speed
        p.x += p.drift

        // Hit the floor/pool - trigger splash
        if (!p.splashed && p.y >= bottomY - (Math.random() * 10)) {
          p.splashed = true
          p.y = bottomY - Math.random() * 5 // stick near bottom
          p.speed = 0 // Stop falling entirely

          // accelerate horizontally based on which side of the beam they landed on
          const dir = p.x < beamX ? -1 : 1
          p.drift = dir * (2 + Math.random() * 4) // Shoot out left or right quickly
        }

        // Reset if they flow too far outwards, or if they glitch off screen
        if (p.x < 0 || p.x > w || p.y > h + 30) {
          resetParticle(p)
        }
      }

      ctx.globalCompositeOperation = 'source-over'

      if (!prefersReduced) {
        animId = requestAnimationFrame(draw)
      }
    }

    resize()

    if (prefersReduced) {
      draw(0)
    } else {
      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
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
        pointerEvents: 'none',
        // Optional: Hint to browser to accelerate canvas composite
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  )
}
