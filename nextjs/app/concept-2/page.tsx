import Link from 'next/link'
import type { Metadata } from 'next'
import { featuredArtworks, artworks, pressItems, cubeImages } from '@/lib/data'

export const metadata: Metadata = { title: 'Katherine Houston — Immersive Dark' }

const PORTRAIT = 'https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston.jpg'
const STUDIO = 'https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg'

export default function Concept2Home() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#0E0E0C' }}>

      {/* Hero */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Background studio image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${STUDIO}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.18,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(14,14,12,0.95) 45%, rgba(14,14,12,0.3))',
        }} />

        {/* Floating artwork panels */}
        <div style={{
          position: 'absolute', right: '5%', top: '10%',
          display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6,
          width: 420, opacity: 0.85,
        }}>
          {featuredArtworks.slice(0, 4).map((art, i) => (
            <div key={art.slug} style={{
              aspectRatio: i === 0 ? '3/4' : i === 1 ? '4/3' : '1',
              backgroundImage: `url('${art.image}')`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(201,168,76,0.2)',
            }} />
          ))}
        </div>

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 80px', maxWidth: 680 }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#C9A84C', marginBottom: 24,
          }}>
            Houston, TX · Reverse Painting on Plexiglas
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 78,
            fontWeight: 300, lineHeight: 1.0, color: '#F0EDE8', marginBottom: 12,
          }}>
            Katherine<br /><span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Houston</span>
          </h1>
          <p style={{
            fontSize: 15, color: 'rgba(240,237,232,0.6)', lineHeight: 1.8,
            maxWidth: 460, marginBottom: 40, fontWeight: 300,
          }}>
            Paintings of extraordinary luminosity — built in reverse, layer by layer, until light becomes the subject itself.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/concept-2/works" style={{
              display: 'inline-block', padding: '14px 36px',
              background: '#C9A84C', color: '#0E0E0C',
              textDecoration: 'none', fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 500,
            }}>
              Acquire Works
            </Link>
            <Link href="/concept-2/process" style={{
              display: 'inline-block', padding: '14px 36px',
              border: '1px solid rgba(240,237,232,0.3)', color: 'rgba(240,237,232,0.7)',
              textDecoration: 'none', fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              The Process
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        background: '#0A0A09',
        padding: '28px 80px',
        display: 'flex', justifyContent: 'center', gap: 80,
      }}>
        {[
          { value: '24', label: 'Years of Practice' },
          { value: '300+', label: 'Works Completed' },
          { value: '12', label: 'Gallery Representations' },
          { value: '7', label: 'Cube Series Sculptures' },
        ].map(({ value, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 36,
              fontWeight: 300, color: '#C9A84C', lineHeight: 1,
            }}>
              {value}
            </div>
            <div style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.4)', marginTop: 6,
            }}>
              {label}
            </div>
          </div>
        ))}
      </section>

      {/* Featured works grid */}
      <section style={{ padding: '100px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <p style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: 12,
            }}>
              Available Works
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 42,
              fontWeight: 300, color: '#F0EDE8', lineHeight: 1.1,
            }}>
              Selected Works
            </h2>
          </div>
          <Link href="/concept-2/works" style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.4)', textDecoration: 'none',
          }}>
            View All Works →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {artworks.slice(0, 6).map(art => (
            <Link key={art.slug} href={`/concept-2/works/${art.slug}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                aspectRatio: '4/5',
                backgroundImage: `url('${art.image}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(14,14,12,0.9))',
                padding: '40px 20px 20px',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 18,
                  fontWeight: 300, color: '#F0EDE8', marginBottom: 4,
                }}>
                  {art.title}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(240,237,232,0.5)', letterSpacing: '0.06em' }}>
                  {art.medium} · {art.dimensions}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <span style={{ fontSize: 13, color: '#C9A84C', fontFamily: "'Cormorant Garamond', serif" }}>
                    {art.available ? (art.price ? `$${art.price.toLocaleString()}` : 'Inquire') : 'Sold'}
                  </span>
                  {art.available && (
                    <span style={{
                      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)', padding: '4px 10px',
                    }}>
                      Acquire
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About / Process 3-step */}
      <section style={{
        background: '#0A0A09', padding: '100px 80px',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16 }}>
              About the Artist
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 48,
              fontWeight: 300, color: '#F0EDE8', lineHeight: 1.15, marginBottom: 24,
            }}>
              Painting in reverse,<br /><em>revealing light</em>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              Katherine Houston spent twenty-four years perfecting a technique that inverts the conventional logic of painting. Working on the back face of Plexiglas, she lays in what will ultimately be the foreground first — the lightest, most luminous touches — then builds rearward with increasingly opaque layers.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300 }}>
              The result is paintings that seem lit from within: jewel-toned, impossibly deep, and utterly unlike anything achievable on canvas or board.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { num: '01', title: 'Prime the Surface', desc: 'The Plexiglas sheet is cleaned and primed. Katherine plans the composition in reverse — what the viewer sees last, she paints first.' },
              { num: '02', title: 'Build in Layers', desc: 'Transparent glazes of jewel-toned acrylic are applied one layer at a time. Each layer must cure fully before the next is added. A single work may require 20–40 sessions.' },
              { num: '03', title: 'Seal & Flip', desc: 'The final backing layer seals the composition. The panel is flipped to reveal the painting through the glass — luminous, depth-filled, and irreproducible by other means.' },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{
                padding: '28px 32px', background: '#111110',
                border: '1px solid rgba(201,168,76,0.1)',
                display: 'flex', gap: 24, alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 32,
                  fontWeight: 300, color: 'rgba(201,168,76,0.3)', lineHeight: 1, flexShrink: 0,
                }}>
                  {num}
                </span>
                <div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                    fontWeight: 300, color: '#F0EDE8', marginBottom: 8,
                  }}>
                    {title}
                  </div>
                  <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.5)', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cube Series */}
      <section style={{ padding: '100px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
              Three-Dimensional Works
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 42,
              fontWeight: 300, color: '#F0EDE8',
            }}>
              The Cube Series
            </h2>
          </div>
          <Link href="/concept-2/cube-series" style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.4)', textDecoration: 'none',
          }}>
            Explore Series →
          </Link>
        </div>

        <div style={{ display: 'flex', gap: 3, overflowX: 'auto' }}>
          {cubeImages.map((img) => (
            <div key={img.src} style={{
              flexShrink: 0, width: 280, height: 320,
              backgroundImage: `url('${img.src}')`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
          ))}
        </div>
      </section>

      {/* Press quotes */}
      <section style={{
        background: '#0A0A09', padding: '100px 80px',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}>
        <p style={{
          fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#C9A84C', marginBottom: 48, textAlign: 'center',
        }}>
          Critical Reception
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, maxWidth: 1100, margin: '0 auto' }}>
          {pressItems.slice(0, 2).map(p => (
            <div key={p.id} style={{
              padding: '48px 44px', background: '#111110',
              border: '1px solid rgba(201,168,76,0.08)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                fontWeight: 300, fontStyle: 'italic', color: '#F0EDE8',
                lineHeight: 1.7, marginBottom: 24,
              }}>
                {p.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C',
                }}>
                  {p.publication}
                </span>
                <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.3)' }}>{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collect CTA */}
      <section style={{
        padding: '120px 80px', textAlign: 'center',
        background: 'linear-gradient(to bottom, #0E0E0C, #0A0A09)',
      }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20 }}>
          Acquire
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 56,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.1, marginBottom: 20,
        }}>
          Collect a Katherine Houston
        </h2>
        <p style={{
          fontSize: 14, color: 'rgba(240,237,232,0.5)', maxWidth: 540,
          margin: '0 auto 48px', lineHeight: 1.8, fontWeight: 300,
        }}>
          Original paintings available for acquisition. All works ship framed and insured, with provenance documentation.
        </p>
        <Link href="/concept-2/collect" style={{
          display: 'inline-block', padding: '16px 56px',
          background: '#C9A84C', color: '#0E0E0C',
          textDecoration: 'none', fontSize: 12, letterSpacing: '0.2em',
          textTransform: 'uppercase', fontWeight: 500,
        }}>
          View Available Works
        </Link>
      </section>

    </div>
  )
}
