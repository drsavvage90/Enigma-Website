import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHeader from '../components/PageHeader'
import CTABlock from '../components/CTABlock'
import { ArrowRight, Clock } from 'lucide-react'
import blogPosts from '../data/blogPosts'

export default function Blog() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <PageHeader
        title="Blog"
        subtitle="Insights on custom software, AI, and building technology that actually works for your business."
        blobColor="accent"
      />

      <section className="section theme-dark">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card card--glass"
                style={{
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, transform 0.2s',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="badge badge--accent" style={{ fontSize: 11 }}>{tag}</span>
                  ))}
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, flex: 1 }}>
                  {post.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-dim)', fontSize: 13 }}>
                    <Clock size={13} /> {post.readTime}
                  </span>
                  <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Have a Question About Your Tech?"
        text="We write about what we know — and we're happy to talk through your specific situation for free."
        buttonText="Get in Touch"
      />
    </div>
  )
}
