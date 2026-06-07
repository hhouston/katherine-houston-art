import Link from 'next/link'
import { artworks, availableArtworks } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Works' }

export default function WorksPage({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  const showAvailableOnly = false
  const shown = showAvailableOnly ? availableArtworks : artworks

  return (
    <>
      <div style={{ paddingTop: 100, paddingBottom: 80 }}>
        {/* Header */}
        <div style={{ padding: '60px 60px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 16 }}>Portfolio</span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: '#0D0D0C', lineHeight: 1.1 }}>All Works</h1>
          </div>
          <div style={{ fontSize: 13, color: '#6B6560' }}>{artworks.length} works · {availableArtworks.length} available</div>
        </div>

        {/* Filter bar */}
        <div style={{ padding: '20px 60px', display: 'flex', gap: 12, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          {['All', 'Available', 'Coastal Series', 'Urban Series', 'Landscape Series'].map(f => (
            <button key={f} style={{
              padding: '6px 16px', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              background: f === 'All' ? '#0D0D0C' : 'transparent',
              color: f === 'All' ? '#FAFAF8' : '#6B6560',
              border: '1px solid rgba(0,0,0,0.15)', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
            }}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3, padding: '3px' }}>
          {shown.map(art => (
            <Link key={art.slug} href={`/concept-1/works/${art.slug}`} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', display: 'block', textDecoration: 'none', background: '#EAE6DE' }}>
              <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 300, color: '#fff', marginBottom: 4 }}>{art.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>{art.year} · {art.dimensions}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {art.price && <span style={{ fontSize: 13, color: '#C9A84C', fontWeight: 400 }}>${art.price.toLocaleString()}</span>}
                  <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: art.available ? '#4CAF50' : 'rgba(255,255,255,0.4)' }}>
                    {art.available ? 'Available' : 'Collected'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
