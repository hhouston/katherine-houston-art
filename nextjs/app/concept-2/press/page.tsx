import type { Metadata } from 'next'
import { pressItems } from '@/lib/data'

export const metadata: Metadata = { title: 'Press' }

export default function Concept2Press() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Critical Reception
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05,
        }}>
          Press
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {pressItems.map((item, i) => (
          <div key={item.id} style={{
            padding: '56px 60px',
            background: i % 2 === 0 ? '#111110' : '#0D0D0C',
            border: '1px solid rgba(201,168,76,0.08)',
            display: 'grid', gridTemplateColumns: '200px 1fr', gap: 60, alignItems: 'start',
          }}>
            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 13,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#C9A84C', marginBottom: 8,
              }}>
                {item.publication}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(240,237,232,0.3)', marginBottom: 16 }}>
                {item.year}
              </div>
              <div style={{
                fontSize: 12, color: 'rgba(240,237,232,0.5)', fontStyle: 'italic',
              }}>
                {item.headline}
              </div>
            </div>
            <blockquote style={{
              margin: 0, padding: '0 0 0 40px',
              borderLeft: '2px solid rgba(201,168,76,0.3)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                fontWeight: 300, fontStyle: 'italic', color: '#F0EDE8',
                lineHeight: 1.75, margin: 0,
              }}>
                {item.excerpt}
              </p>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Press contact */}
      <div style={{
        marginTop: 64, padding: '36px 40px',
        border: '1px solid rgba(201,168,76,0.15)',
        background: '#0A0A09',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>
            Press Inquiries
          </div>
          <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.5)', fontWeight: 300 }}>
            High-resolution images and press materials available upon request.
          </p>
        </div>
        <a href="mailto:press@katherinehoustonart.com" style={{
          padding: '12px 28px', border: '1px solid #C9A84C', color: '#C9A84C',
          textDecoration: 'none', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          Contact Press
        </a>
      </div>
    </div>
  )
}
