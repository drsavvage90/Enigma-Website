import { useParams, Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import CTABlock from '../components/CTABlock'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import blogPosts from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const ref = useReveal()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div ref={ref} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Post not found</h1>
          <Link to="/blog" className="link-arrow"><ArrowLeft size={14} /> Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref}>
      <section className="section theme-dark" style={{ paddingTop: 140 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <Link to="/blog" className="link-arrow" style={{ marginBottom: 32, display: 'inline-flex' }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
            {post.tags.map(tag => (
              <span key={tag} className="badge badge--accent" style={{ fontSize: 11 }}>{tag}</span>
            ))}
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, color: 'var(--text-dim)', fontSize: 14, marginBottom: 48 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <article className="blog-content" style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.8 }}>
            <p style={{ fontSize: 18, color: 'var(--text-light)', marginBottom: 32 }}>
              {post.description}
            </p>
            <p>
              This article is coming soon. We're currently writing in-depth content for each of our blog posts. Check back soon, or <Link to="/contact" style={{ color: 'var(--accent)' }}>reach out</Link> if you'd like to discuss this topic directly.
            </p>
          </article>
        </div>
      </section>

      <CTABlock
        headline="Want to Talk About This?"
        text="We're always happy to discuss your specific situation. No sales pitch — just a real conversation."
        buttonText="Get a Free Recommendation"
      />
    </div>
  )
}
