import type { Metadata } from 'next'
import { pressItems } from '@/lib/data'

export const metadata: Metadata = { title: 'Press' }

export default function Concept3Press() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Critical Reception
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05,
        }}>
          Press
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {pressItems.map((item) => (
          <div key={item.id} style={{
            padding: '52px 60px',
            background: '#EDE7DB',
            border: '1px solid rgba(139,69,19,0.08)',
            display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, alignItems: 'start',
          }}>
            <div>
              <div style={{
                fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#8B4513', marginBottom: 8, fontWeight: 600,
              }}>
                {item.publication}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(30,24,16,0.45)', marginBottom: 16 }}>
                {item.year}
              </div>
              <div style={{ fontSize: 14, color: 'rgba(30,24,16,0.6)', fontStyle: 'italic', lineHeight: 1.5 }}>
                {item.headline}
              </div>
            </div>
            <blockquote style={{
              margin: 0, padding: '0 0 0 36px',
              borderLeft: '3px solid rgba(139,69,19,0.3)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 21,
                fontWeight: 300, fontStyle: 'italic', color: '#1E1810',
                lineHeight: 1.75, margin: 0,
              }}>
                {item.excerpt}
              </p>
            </blockquote>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 56, padding: '32px 36px',
        border: '1px solid rgba(139,69,19,0.15)',
        background: '#F5F0E8',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>
            Press Inquiries
          </div>
          <p style={{ fontSize: 13, color: 'rgba(30,24,16,0.55)' }}>
            High-resolution images and press materials available upon request.
          </p>
        </div>
        <a href="mailto:press@katherinehoustonart.com" style={{
          padding: '12px 28px', background: '#8B4513', color: '#F5F0E8',
          textDecoration: 'none', fontSize: 13,
        }}>
          Contact Press
        </a>
      </div>
    </div>
  )
}
