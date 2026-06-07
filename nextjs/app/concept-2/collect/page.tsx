'use client'
import Link from 'next/link'
import { useState } from 'react'
import { availableArtworks } from '@/lib/data'
import type { Artwork } from '@/types'

function AcquireButton({ art }: { art: Artwork }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleAcquire() {
    setStatus('loading')
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artworkSlug: art.slug }),
      })
      if (!res.ok) throw new Error('checkout failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div style={{
        padding: '12px 16px', background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.3)',
        fontSize: 11, color: '#C9A84C', textAlign: 'center', lineHeight: 1.5,
      }}>
        Proceeding to secure checkout…<br />
        <span style={{ fontSize: 10, opacity: 0.6 }}>Mock checkout — not live</span>
      </div>
    )
  }

  return (
    <button
      onClick={handleAcquire}
      disabled={status === 'loading'}
      style={{
        width: '100%', padding: '12px 20px',
        background: status === 'loading' ? 'rgba(201,168,76,0.4)' : '#C9A84C',
        color: '#0E0E0C', border: 'none', cursor: status === 'loading' ? 'default' : 'pointer',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {status === 'loading' ? 'Processing…' : status === 'error' ? 'Try Again' : 'Acquire'}
    </button>
  )
}

export default function Concept2Collect() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{
        marginBottom: 12,
        padding: '12px 20px', background: 'rgba(201,168,76,0.07)',
        border: '1px solid rgba(201,168,76,0.15)',
        fontSize: 11, color: 'rgba(240,237,232,0.5)', letterSpacing: '0.08em',
      }}>
        Stripe integration in test mode — no real transactions will occur.
      </div>

      <div style={{ marginBottom: 56, marginTop: 40 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Acquire
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05, marginBottom: 16,
        }}>
          Available Works
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.5)', maxWidth: 580, lineHeight: 1.8, fontWeight: 300 }}>
          All works ship insured with provenance documentation. Installment payment arrangements available — contact the studio.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {availableArtworks.map(art => (
          <div key={art.slug} style={{
            background: '#111110', border: '1px solid rgba(201,168,76,0.08)',
            overflow: 'hidden',
          }}>
            <Link href={`/concept-2/works/${art.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                aspectRatio: '4/3',
                backgroundImage: `url('${art.image}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
            </Link>
            <div style={{ padding: '24px' }}>
              <Link href={`/concept-2/works/${art.slug}`} style={{ textDecoration: 'none' }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                  fontWeight: 300, color: '#F0EDE8', marginBottom: 6,
                }}>
                  {art.title}
                </h2>
              </Link>
              <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.4)', marginBottom: 4 }}>
                {art.year} · {art.medium}
              </p>
              <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.4)', marginBottom: 16 }}>
                {art.dimensions}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
                  fontWeight: 300, color: '#C9A84C',
                }}>
                  {art.price ? `$${art.price.toLocaleString()}` : 'Inquire'}
                </span>
              </div>
              <AcquireButton art={art} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
