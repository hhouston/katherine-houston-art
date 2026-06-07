'use client'
import { useState } from 'react'
import Link from 'next/link'
import { availableArtworks } from '@/lib/data'

export default function CollectPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState('')

  async function purchase(slug: string) {
    setLoading(slug)
    setError('')
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ artworkSlug: slug }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      setError(data.error ?? 'Checkout failed. Please try again.')
      setLoading(null)
    }
  }

  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '80px 60px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Collect</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,60px)', fontWeight: 300, lineHeight: 1.06, color: '#0D0D0C', marginBottom: 20 }}>Available Works</h1>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 560, lineHeight: 1.9 }}>
          All works ship directly from Katherine's Houston studio, fully insured and professionally packed. International shipping available on request.
        </p>
      </div>

      {/* Stripe test mode banner */}
      <div style={{ padding: '12px 60px', background: '#FFF3E0', borderBottom: '1px solid rgba(139,115,85,0.2)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#8B4513' }}>◈ Stripe test mode — no real charges will occur. Use card 4242 4242 4242 4242 with any future expiry.</span>
      </div>

      {error && <div style={{ padding: '12px 60px', background: '#FFEBEE', color: '#C62828', fontSize: 13 }}>{error}</div>}

      <section style={{ padding: '48px 60px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          {availableArtworks.map(art => (
            <div key={art.slug} style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={`/concept-1/works/${art.slug}`} style={{ display: 'block', overflow: 'hidden', marginBottom: 16, textDecoration: 'none' }}>
                <img src={art.image} alt={art.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </Link>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 6 }}>{art.series ?? art.medium}</div>
                <Link href={`/concept-1/works/${art.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 300, color: '#0D0D0C', marginBottom: 4, lineHeight: 1.3 }}>{art.title}</h3>
                </Link>
                <div style={{ fontSize: 12, color: '#6B6560', marginBottom: 16 }}>{art.dimensions} · {art.year}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16, marginTop: 8 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#0D0D0C' }}>${art.price?.toLocaleString()}</span>
                <button onClick={() => purchase(art.slug)} disabled={!!loading}
                  style={{ padding: '10px 20px', background: '#0D0D0C', color: '#FAFAF8', border: 'none', fontFamily: "'Inter', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading === art.slug ? 0.6 : 1 }}>
                  {loading === art.slug ? 'Loading…' : 'Purchase'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {availableArtworks.length === 0 && (
          <p style={{ textAlign: 'center', fontSize: 15, color: '#6B6560', padding: '60px 0' }}>All current works are in private collections. <Link href="/concept-1/cube-series/inquire" style={{ color: '#8B7355' }}>Inquire about commissions →</Link></p>
        )}
      </section>

      {/* Cube series CTA */}
      <section style={{ margin: '0 60px 100px', padding: 48, background: '#0D0D0C', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Also Available</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#F0EDE8', marginBottom: 8 }}>The Cube Series</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>Three-dimensional painted Plexiglas sculptures. Available by inquiry only.</p>
        </div>
        <Link href="/concept-1/cube-series/inquire" style={{ whiteSpace: 'nowrap', padding: '14px 32px', border: '1px solid rgba(255,255,255,0.3)', color: '#F0EDE8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Inquire →
        </Link>
      </section>
    </div>
  )
}
