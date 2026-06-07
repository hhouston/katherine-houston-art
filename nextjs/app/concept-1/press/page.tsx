import { pressItems } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Press' }

export default function PressPage() {
  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '80px 60px 60px' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>In the Media</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,60px)', fontWeight: 300, lineHeight: 1.06, color: '#0D0D0C' }}>Press</h1>
      </div>

      <section style={{ padding: '0 60px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
        {pressItems.map(p => (
          <div key={p.id} style={{ padding: '48px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 12 }}>{p.publication} · {p.year}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 300, color: '#0D0D0C', marginBottom: 24, lineHeight: 1.3 }}>{p.headline}</h2>
            <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontStyle: 'italic', color: '#6B6560', lineHeight: 1.8, flex: 1 }}>{p.excerpt}</blockquote>
          </div>
        ))}
      </section>

      {/* Press inquiries */}
      <section style={{ padding: '80px 60px', background: '#0D0D0C', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#F0EDE8', marginBottom: 16 }}>Press Inquiries</h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.8 }}>
          For interview requests, image licensing, or press preview access, please reach out directly.
        </p>
        <a href="mailto:katherineh@usa.net" style={{ display: 'inline-block', padding: '14px 36px', background: '#FAFAF8', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Contact Katherine
        </a>
      </section>
    </div>
  )
}
