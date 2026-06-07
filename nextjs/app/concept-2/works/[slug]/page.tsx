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

export default async function Concept2ArtworkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const art = getArtworkBySlug(slug)
  if (!art) notFound()

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      <Link href="/concept-2/works" style={{
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'rgba(240,237,232,0.4)', textDecoration: 'none', display: 'inline-block', marginBottom: 48,
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
              border: '1px solid rgba(201,168,76,0.1)',
            }}
          />
        </div>

        {/* Info */}
        <div style={{ paddingTop: 20 }}>
          {art.series && (
            <p style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: 16,
            }}>
              {art.series}
            </p>
          )}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
            fontWeight: 300, color: '#F0EDE8', lineHeight: 1.1, marginBottom: 32,
          }}>
            {art.title}
          </h1>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            border: '1px solid rgba(201,168,76,0.1)', marginBottom: 32,
          }}>
            {[
              { label: 'Year', value: art.year },
              { label: 'Medium', value: art.medium },
              { label: 'Dimensions', value: art.dimensions },
              { label: 'Availability', value: art.available ? 'Available' : 'Not Available' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: '18px 24px', borderBottom: '1px solid rgba(201,168,76,0.08)',
              }}>
                <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.35)', marginBottom: 6 }}>
                  {label}
                </div>
                <div style={{
                  fontSize: 14, color: label === 'Availability' && art.available ? '#C9A84C' : '#F0EDE8',
                }}>
                  {String(value)}
                </div>
              </div>
            ))}
          </div>

          {art.price && (
            <div style={{
              marginBottom: 32,
              padding: '20px 24px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}>
              <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.35)', marginBottom: 8 }}>
                Acquisition Price
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: '#C9A84C' }}>
                ${art.price.toLocaleString()}
              </div>
            </div>
          )}

          {art.description && (
            <p style={{
              fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9,
              fontWeight: 300, marginBottom: 40,
            }}>
              {art.description}
            </p>
          )}

          {art.available ? (
            <div style={{ display: 'flex', gap: 12 }}>
              <Link href="/concept-2/collect" style={{
                flex: 1, display: 'block', padding: '16px 32px',
                background: '#C9A84C', color: '#0E0E0C', textDecoration: 'none',
                fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                fontWeight: 500, textAlign: 'center',
              }}>
                Acquire This Work
              </Link>
            </div>
          ) : (
            <div style={{
              padding: '16px 24px', border: '1px solid rgba(240,237,232,0.1)',
              fontSize: 12, color: 'rgba(240,237,232,0.3)', textAlign: 'center',
              letterSpacing: '0.1em',
            }}>
              This work has been acquired
            </div>
          )}

          <p style={{
            marginTop: 20, fontSize: 11, color: 'rgba(240,237,232,0.3)',
            lineHeight: 1.7, fontWeight: 300,
          }}>
            All works ship insured with provenance documentation. Contact the studio for collector inquiries or installment payment arrangements.
          </p>
        </div>
      </div>
    </div>
  )
}
