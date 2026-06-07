import Link from 'next/link'
import type { Metadata } from 'next'
import { artworks } from '@/lib/data'

export const metadata: Metadata = { title: 'Works' }

export default function Concept2Works() {
  return (
    <div style={{ padding: '60px 80px 100px', fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Original Works
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.1, marginBottom: 20,
        }}>
          All Works
        </h1>
        <div style={{ display: 'flex', gap: 2 }}>
          {['All', 'Available', 'Coastal Series', 'Urban Series', 'Horizon Series'].map(filter => (
            <span key={filter} style={{
              padding: '7px 16px', fontSize: 10, letterSpacing: '0.16em',
              textTransform: 'uppercase', cursor: 'pointer',
              border: '1px solid rgba(201,168,76,0.2)',
              color: filter === 'All' ? '#C9A84C' : 'rgba(240,237,232,0.4)',
            }}>
              {filter}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        columns: 3, columnGap: 3,
      }}>
        {artworks.map((art) => (
          <div key={art.slug} style={{ breakInside: 'avoid', marginBottom: 3, display: 'block', position: 'relative', overflow: 'hidden' }}>
            <Link href={`/concept-2/works/${art.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <img
                src={art.image}
                alt={art.title}
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(14,14,12,0)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: 20,
                background: 'linear-gradient(transparent 40%, rgba(14,14,12,0.92))',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                  fontWeight: 300, color: '#F0EDE8', marginBottom: 4,
                }}>
                  {art.title}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(240,237,232,0.5)', marginBottom: 8 }}>
                  {art.year} · {art.medium}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#C9A84C', fontFamily: "'Cormorant Garamond', serif" }}>
                    {art.available
                      ? (art.price ? `$${art.price.toLocaleString()}` : 'Inquire')
                      : 'Sold'}
                  </span>
                  {art.available && (
                    <span style={{
                      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: '#C9A84C', border: '1px solid rgba(201,168,76,0.5)', padding: '4px 10px',
                    }}>
                      Acquire
                    </span>
                  )}
                  {!art.available && (
                    <span style={{
                      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'rgba(240,237,232,0.3)',
                    }}>
                      Not Available
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
