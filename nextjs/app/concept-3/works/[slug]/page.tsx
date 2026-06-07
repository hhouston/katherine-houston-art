import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { artworks, getArtworkBySlug } from '@/lib/data'

export async function generateStaticParams() {
  return artworks.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const art = getArtworkBySlug(slug)
  return { title: art?.title ?? 'Artwork' }
}

export default async function Concept3ArtworkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const art = getArtworkBySlug(slug)
  if (!art) notFound()

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      <Link href="/concept-3/works" style={{
        fontSize: 13, color: 'rgba(92,48,16,0.55)', textDecoration: 'none',
        display: 'inline-block', marginBottom: 48,
      }}>
        ← Back to Works
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Image */}
        <div>
          <img
            src={art.image}
            alt={art.title}
            style={{
              width: '100%', display: 'block',
              border: '4px solid #EDE7DB',
            }}
          />
        </div>

        {/* Info */}
        <div style={{ paddingTop: 16 }}>
          {art.series && (
            <p style={{
              fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(139,69,19,0.7)', marginBottom: 12,
            }}>
              {art.series}
            </p>
          )}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
            fontWeight: 300, color: '#1E1810', lineHeight: 1.1, marginBottom: 32,
          }}>
            {art.title}
          </h1>

          <div style={{ borderTop: '1px solid rgba(139,69,19,0.1)', marginBottom: 28 }}>
            {[
              { label: 'Year', value: art.year },
              { label: 'Medium', value: art.medium },
              { label: 'Dimensions', value: art.dimensions },
              { label: 'Availability', value: art.available ? 'Available' : 'Not Available' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr',
                padding: '14px 0', borderBottom: '1px solid rgba(139,69,19,0.1)',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.6)' }}>
                  {label}
                </span>
                <span style={{
                  fontSize: 14,
                  color: label === 'Availability' && art.available ? '#8B4513' : '#1E1810',
                }}>
                  {String(value)}
                </span>
              </div>
            ))}
          </div>

          {art.price && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.6)', marginBottom: 8 }}>
                Price
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 40,
                fontWeight: 300, color: '#8B4513',
              }}>
                ${art.price.toLocaleString()}
              </div>
            </div>
          )}

          {art.description && (
            <p style={{
              fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9,
              marginBottom: 36,
            }}>
              {art.description}
            </p>
          )}

          {art.available ? (
            <Link href="/concept-3/collect" style={{
              display: 'block', padding: '16px 32px',
              background: '#8B4513', color: '#F5F0E8', textDecoration: 'none',
              fontSize: 13, letterSpacing: '0.12em', textAlign: 'center',
            }}>
              Collect This Work
            </Link>
          ) : (
            <div style={{
              padding: '16px 24px', border: '1px solid rgba(139,69,19,0.15)',
              fontSize: 13, color: 'rgba(30,24,16,0.4)', textAlign: 'center',
            }}>
              This work has been acquired
            </div>
          )}

          <p style={{
            marginTop: 20, fontSize: 12, color: 'rgba(30,24,16,0.4)',
            lineHeight: 1.7,
          }}>
            All works ship framed and insured with provenance documentation.
          </p>
        </div>
      </div>
    </div>
  )
}
