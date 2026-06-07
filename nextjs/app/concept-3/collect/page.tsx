'use client'
import Link from 'next/link'
import { useState } from 'react'
import { availableArtworks } from '@/lib/data'
import type { Artwork } from '@/types'

function CollectButton({ art }: { art: Artwork }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleCollect() {
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
        padding: '12px 16px', background: 'rgba(139,69,19,0.08)',
        border: '1px solid rgba(139,69,19,0.2)',
        fontSize: 12, color: '#8B4513', textAlign: 'center', lineHeight: 1.6,
      }}>
        Proceeding to secure checkout…<br />
        <span style={{ fontSize: 11, opacity: 0.7 }}>Mock checkout — not live</span>
      </div>
    )
  }

  return (
    <button
      onClick={handleCollect}
      disabled={status === 'loading'}
      style={{
        width: '100%', padding: '13px 20px',
        background: status === 'loading' ? 'rgba(139,69,19,0.4)' : '#8B4513',
        color: '#F5F0E8', border: 'none', cursor: status === 'loading' ? 'default' : 'pointer',
        fontSize: 13, letterSpacing: '0.1em', fontFamily: "'Source Sans 3', sans-serif",
      }}
    >
      {status === 'loading' ? 'Processing…' : status === 'error' ? 'Try Again' : 'Collect This Work'}
    </button>
  )
}

export default function Concept3Collect() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{
        marginBottom: 16,
        padding: '12px 20px', background: 'rgba(139,69,19,0.05)',
        border: '1px solid rgba(139,69,19,0.12)',
        fontSize: 12, color: 'rgba(30,24,16,0.5)',
      }}>
        Stripe integration in test mode — no real transactions will occur.
      </div>

      <div style={{ marginBottom: 56, marginTop: 36 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Collect
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05, marginBottom: 16,
        }}>
          Available Works
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.55)', maxWidth: 560, lineHeight: 1.8 }}>
          All works ship framed and insured with provenance documentation. Installment payment arrangements available through the studio.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {availableArtworks.map(art => (
          <div key={art.slug} style={{
            background: '#EDE7DB', border: '1px solid rgba(139,69,19,0.08)',
            overflow: 'hidden',
          }}>
            <Link href={`/concept-3/works/${art.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                aspectRatio: '4/3',
                backgroundImage: `url('${art.image}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
            </Link>
            <div style={{ padding: '24px' }}>
              <Link href={`/concept-3/works/${art.slug}`} style={{ textDecoration: 'none' }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                  fontWeight: 300, color: '#1E1810', marginBottom: 6,
                }}>
                  {art.title}
                </h2>
              </Link>
              <p style={{ fontSize: 12, color: 'rgba(30,24,16,0.5)', marginBottom: 4 }}>
                {art.year} · {art.medium}
              </p>
              <p style={{ fontSize: 12, color: 'rgba(30,24,16,0.5)', marginBottom: 16 }}>
                {art.dimensions}
              </p>
              <div style={{ marginBottom: 16 }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
                  fontWeight: 300, color: '#8B4513',
                }}>
                  {art.price ? `$${art.price.toLocaleString()}` : 'Inquire'}
                </span>
              </div>
              <CollectButton art={art} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
