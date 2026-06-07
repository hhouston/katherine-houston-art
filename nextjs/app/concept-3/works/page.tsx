import Link from 'next/link'
import type { Metadata } from 'next'
import { artworks } from '@/lib/data'

export const metadata: Metadata = { title: 'Works' }

export default function Concept3Works() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Original Works
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 56,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05, marginBottom: 24,
        }}>
          All Works
        </h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {['All', 'Available', 'Coastal Series', 'Urban Series', 'Landscape Series'].map(filter => (
            <span key={filter} style={{
              padding: '7px 18px', fontSize: 12, cursor: 'pointer',
              border: '1px solid',
              borderColor: filter === 'All' ? '#8B4513' : 'rgba(139,69,19,0.2)',
              color: filter === 'All' ? '#8B4513' : 'rgba(92,48,16,0.5)',
              background: filter === 'All' ? 'rgba(139,69,19,0.06)' : 'transparent',
            }}>
              {filter}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        columns: 3, columnGap: 16,
      }}>
        {artworks.map((art) => (
          <div key={art.slug} style={{
            breakInside: 'avoid', marginBottom: 16,
            background: '#EDE7DB', border: '1px solid rgba(139,69,19,0.08)',
            overflow: 'hidden',
          }}>
            <Link href={`/concept-3/works/${art.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <img
                src={art.image}
                alt={art.title}
                style={{ width: '100%', display: 'block' }}
              />
              <div style={{ padding: '16px 20px 20px' }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                  fontWeight: 300, color: '#1E1810', marginBottom: 4,
                }}>
                  {art.title}
                </h2>
                <p style={{ fontSize: 12, color: 'rgba(30,24,16,0.55)', marginBottom: 8 }}>
                  {art.year} · {art.medium}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 18,
                    color: art.available ? '#8B4513' : 'rgba(30,24,16,0.4)',
                  }}>
                    {art.available
                      ? (art.price ? `$${art.price.toLocaleString()}` : 'Inquire')
                      : 'Sold'}
                  </span>
                  {art.available && (
                    <span style={{
                      fontSize: 11, color: '#8B4513', border: '1px solid rgba(139,69,19,0.35)',
                      padding: '3px 12px',
                    }}>
                      Collect
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
