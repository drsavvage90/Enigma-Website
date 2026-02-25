export default function IconBox({ icon: Icon, variant = 'accent', size = 48, glow = false }) {
  const variants = {
    accent: { bg: 'rgba(255, 159, 65, 0.1)', color: 'var(--accent)' },
    blue: { bg: 'rgba(255, 170, 51, 0.1)', color: 'var(--blue)' },
    cyan: { bg: 'rgba(255, 204, 102, 0.1)', color: 'var(--cyan)' },
    orange: { bg: 'rgba(255, 119, 51, 0.1)', color: 'var(--orange)' },
  }
  const v = variants[variant] || variants.accent

  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: v.bg,
      color: v.color,
      flexShrink: 0,
      position: glow ? 'relative' : undefined,
    }}>
      <Icon size={size * 0.5} />
      {glow && (
        <div style={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${v.bg} 0%, transparent 70%)`,
          zIndex: -1,
          opacity: 0.6,
        }} />
      )}
    </div>
  )
}
