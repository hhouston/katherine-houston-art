import Link from 'next/link'
import type { Metadata } from 'next'
import { featuredArtworks, artworks, pressItems } from '@/lib/data'

export const metadata: Metadata = { title: 'Katherine Houston — The Artisan\'s Story' }

const PORTRAIT = 'https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston.jpg'
const STUDIO = 'https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg'

export default function Concept3Home() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: '#F5F0E8', color: '#1E1810' }}>

      {/* Hero — editorial */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '88vh',
      }}>
        {/* Left: text */}
        <div style={{
          padding: '80px 80px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: '#F5F0E8',
        }}>
          <p style={{
            fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'rgba(139,69,19,0.7)', marginBottom: 28,
          }}>
            Houston, TX · Since 2000
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 72,
            fontWeight: 300, lineHeight: 1.0, color: '#1E1810', marginBottom: 16,
          }}>
            From finance<br />to<br /><em style={{ color: '#8B4513' }}>radiant light</em>
          </h1>
          <p style={{
            fontSize: 16, color: 'rgba(30,24,16,0.6)', lineHeight: 1.9,
            maxWidth: 420, marginBottom: 40, fontWeight: 300,
          }}>
            Katherine Houston left a career in finance to pursue the technique that had captivated her since her first class at the Glassell School — reverse painting on Plexiglas, where every stroke is a permanent commitment.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/concept-3/about" style={{
              display: 'inline-block', padding: '14px 36px',
              background: '#8B4513', color: '#F5F0E8',
              textDecoration: 'none', fontSize: 12, letterSpacing: '0.14em',
            }}>
              Read the Story
            </Link>
            <Link href="/concept-3/works" style={{
              display: 'inline-block', padding: '14px 36px',
              border: '1px solid rgba(139,69,19,0.35)', color: 'rgba(92,48,16,0.8)',
              textDecoration: 'none', fontSize: 12, letterSpacing: '0.14em',
            }}>
              View Works
            </Link>
          </div>
        </div>
        {/* Right: portrait */}
        <div style={{
          backgroundImage: `url('${PORTRAIT}')`,
          backgroundSize: 'cover', backgroundPosition: 'center top',
        }} />
      </section>

      {/* Pull quote */}
      <section style={{
        padding: '80px', background: '#EDE7DB',
        borderTop: '3px solid #8B4513',
        textAlign: 'center',
      }}>
        <blockquote style={{ margin: 0 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 32,
            fontWeight: 300, fontStyle: 'italic', color: '#1E1810',
            lineHeight: 1.65, maxWidth: 820, margin: '0 auto 24px',
          }}>
            "She paints the last thing you see first, building layers in reverse until the final surface becomes the viewing surface. The results are paintings of extraordinary luminosity — as if lit from within."
          </p>
          <cite style={{
            fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#8B4513', fontStyle: 'normal',
          }}>
            Texas Monthly, 2023
          </cite>
        </blockquote>
      </section>

      {/* Timeline */}
      <section style={{ padding: '100px 80px', background: '#F5F0E8' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
            The Journey
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 44,
            fontWeight: 300, color: '#1E1810', marginBottom: 56,
          }}>
            A Life in Paint
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 72, top: 0, bottom: 0,
              width: 1, background: 'rgba(139,69,19,0.2)',
            }} />

            {[
              { year: '2000', event: 'First class at the Glassell School of Art, Museum of Fine Arts Houston. Discovers reverse painting on Plexiglas.' },
              { year: '2003', event: 'Leaves finance permanently. Converts a room in her Houston home into a studio. Begins experimenting with jewel-toned glazes.' },
              { year: '2008', event: 'First gallery representation. The Coastal Series earns immediate collector attention for its luminous depth.' },
              { year: '2015', event: 'Begins the Cube Series — extending reverse painting into three-dimensional sculptural forms.' },
              { year: '2020', event: 'Featured in Texas Monthly. Represented by Laura Rathe Fine Art. Solo exhibition: "Luminous Boundaries."' },
              { year: '2024', event: 'Houston Chronicle names her among the most significant Texas painters of her generation. New large-format works underway.' },
            ].map(({ year, event }) => (
              <div key={year} style={{
                display: 'grid', gridTemplateColumns: '144px 1fr',
                gap: 32, marginBottom: 48, alignItems: 'flex-start',
              }}>
                <div style={{ textAlign: 'right', paddingRight: 32, position: 'relative' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                    fontWeight: 300, color: '#8B4513',
                  }}>
                    {year}
                  </span>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', right: -5, top: 8,
                    width: 9, height: 9, borderRadius: '50%',
                    background: '#8B4513',
                  }} />
                </div>
                <p style={{
                  fontSize: 15, color: 'rgba(30,24,16,0.7)',
                  lineHeight: 1.8, margin: 0,
                }}>
                  {event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process intro */}
      <section style={{
        padding: '100px 80px', background: '#EDE7DB',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
      }}>
        <div style={{
          height: 520,
          backgroundImage: `url('${STUDIO}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          border: '4px solid #F5F0E8',
        }} />
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
            The Technique
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 44,
            fontWeight: 300, color: '#1E1810', lineHeight: 1.2, marginBottom: 24,
          }}>
            Painting in<br /><em>reverse</em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            Katherine paints the foreground first — the most luminous lights and transparencies — then builds backward with increasingly opaque layers. The final viewing surface is the Plexiglas itself, which refracts and amplifies the colors behind it.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 32 }}>
            No corrections are possible. Each mark is permanent, locked beneath every layer that follows. It is, she says, the most honest form of painting she knows.
          </p>
          <Link href="/concept-3/process" style={{
            display: 'inline-block', padding: '13px 32px',
            border: '1px solid #8B4513', color: '#8B4513',
            textDecoration: 'none', fontSize: 12, letterSpacing: '0.14em',
          }}>
            Full Process →
          </Link>
        </div>
      </section>

      {/* Recent works — Instagram-style grid */}
      <section style={{ padding: '100px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 8 }}>
              Recent Works
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 40,
              fontWeight: 300, color: '#1E1810',
            }}>
              From the Studio
            </h2>
          </div>
          <Link href="/concept-3/works" style={{
            fontSize: 13, color: '#8B4513', textDecoration: 'none', letterSpacing: '0.06em',
          }}>
            View all works →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
          {artworks.slice(0, 8).map(art => (
            <Link key={art.slug} href={`/concept-3/works/${art.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                aspectRatio: '1',
                backgroundImage: `url('${art.image}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative',
                border: '2px solid #F5F0E8',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(30,24,16,0)',
                  display: 'flex', alignItems: 'flex-end', padding: 12,
                  transition: 'background 0.3s',
                }}>
                  <div style={{
                    background: 'rgba(245,240,232,0.95)', padding: '8px 12px', width: '100%',
                  }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
                      color: '#1E1810', marginBottom: 2,
                    }}>
                      {art.title}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(30,24,16,0.55)' }}>
                      {art.available ? (art.price ? `$${art.price.toLocaleString()}` : 'Inquire') : 'Sold'}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Press */}
      <section style={{
        padding: '80px', background: '#EDE7DB',
        borderTop: '1px solid rgba(139,69,19,0.1)',
      }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 40, textAlign: 'center' }}>
          In the Press
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
          {pressItems.slice(0, 2).map(p => (
            <div key={p.id} style={{
              padding: '36px', background: '#F5F0E8',
              border: '1px solid rgba(139,69,19,0.1)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 19,
                fontWeight: 300, fontStyle: 'italic', color: '#1E1810',
                lineHeight: 1.7, marginBottom: 20,
              }}>
                {p.excerpt}
              </p>
              <span style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#8B4513',
              }}>
                {p.publication} · {p.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Collect CTA */}
      <section style={{ padding: '100px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 16 }}>
          Collect
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.1, marginBottom: 16,
        }}>
          Own a Katherine Houston
        </h2>
        <p style={{
          fontSize: 15, color: 'rgba(30,24,16,0.55)', maxWidth: 500,
          margin: '0 auto 40px', lineHeight: 1.8,
        }}>
          Original paintings ship framed and insured with provenance documentation. Installment payment available.
        </p>
        <Link href="/concept-3/collect" style={{
          display: 'inline-block', padding: '16px 52px',
          background: '#8B4513', color: '#F5F0E8',
          textDecoration: 'none', fontSize: 13, letterSpacing: '0.14em',
        }}>
          View Available Works
        </Link>
      </section>

    </div>
  )
}
