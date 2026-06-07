import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArtworkBySlug, artworks } from '@/lib/data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return artworks.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const art = getArtworkBySlug(slug)
  return { title: art?.title ?? 'Work' }
}

export default async function ArtworkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const art = getArtworkBySlug(slug)
  if (!art) notFound()

  return (
    <div style={{ paddingTop: 90 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', minHeight: 'calc(100vh - 90px)' }}>
        {/* Image */}
        <div style={{ background: '#F0EDE8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60 }}>
          <img src={art.image} alt={art.title} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
        </div>

        {/* Info */}
        <div style={{ padding: '60px 48px', borderLeft: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
          <Link href="/concept-1/works" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B7355', textDecoration: 'none', marginBottom: 48 }}>
            ← All Works
          </Link>

          {art.series && <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 16 }}>{art.series}</span>}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, color: '#0D0D0C', lineHeight: 1.18, marginBottom: 8 }}>{art.title}</h1>
          <p style={{ fontSize: 13, color: '#6B6560', marginBottom: 40 }}>{art.year}</p>

          <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(0,0,0,0.06)', marginBottom: 36 }}>
            {[
              { k: 'Medium', v: art.medium },
              { k: 'Dimensions', v: art.dimensions },
              { k: 'Year', v: art.year },
              { k: 'Status', v: art.available ? 'Available' : 'Collected' },
            ].map(({ k, v }) => (
              <div key={k} style={{ background: '#FAFAF8', padding: '16px 20px' }}>
                <dt style={{ fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 6 }}>{k}</dt>
                <dd style={{ fontSize: 13, color: '#0D0D0C' }}>{String(v)}</dd>
              </div>
            ))}
          </dl>

          {art.price && art.available && (
            <div style={{ fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#0D0D0C', marginBottom: 12 }}>
              ${art.price.toLocaleString()}
            </div>
          )}

          {art.description && (
            <p style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.9, marginBottom: 40, flex: 1 }}>{art.description}</p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'auto' }}>
            {art.available ? (
              <>
                <Link href={`/concept-1/collect`} style={{ display: 'block', padding: '14px 24px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>
                  Purchase — ${art.price?.toLocaleString()}
                </Link>
                <Link href="/concept-1/cube-series/inquire" style={{ display: 'block', padding: '14px 24px', border: '1px solid rgba(0,0,0,0.2)', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>
                  Inquire About This Work
                </Link>
              </>
            ) : (
              <p style={{ fontSize: 12, color: '#6B6560', fontStyle: 'italic' }}>This work is in a private collection. Similar works are available — <Link href="/concept-1/cube-series/inquire" style={{ color: '#8B7355' }}>contact Katherine</Link>.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
