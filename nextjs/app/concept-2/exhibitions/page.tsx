import type { Metadata } from 'next'
import { exhibitions } from '@/lib/data'

export const metadata: Metadata = { title: 'Exhibitions' }

export default function Concept2Exhibitions() {
  const years = [...new Set(exhibitions.map(e => e.year))].sort((a, b) => b - a)

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Exhibition History
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05,
        }}>
          Exhibitions
        </h1>
      </div>

      <div style={{ maxWidth: 900 }}>
        {years.map(year => (
          <div key={year} style={{ marginBottom: 56 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24,
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 42,
                fontWeight: 300, color: '#C9A84C', lineHeight: 1,
              }}>
                {year}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.15)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 28 }}>
              {exhibitions.filter(e => e.year === year).map(ex => (
                <div key={ex.id} style={{
                  padding: '24px 32px',
                  background: '#111110',
                  border: '1px solid rgba(201,168,76,0.08)',
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  alignItems: 'start', gap: 24,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                      fontWeight: 300, color: '#F0EDE8', marginBottom: 6,
                    }}>
                      {ex.title}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(240,237,232,0.5)' }}>
                      {ex.venue} · {ex.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: 'rgba(240,237,232,0.4)', marginBottom: 6 }}>
                      {ex.month} {ex.year}
                    </div>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px', fontSize: 9,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      border: '1px solid',
                      borderColor: ex.type === 'solo' ? '#C9A84C' : 'rgba(240,237,232,0.2)',
                      color: ex.type === 'solo' ? '#C9A84C' : 'rgba(240,237,232,0.35)',
                    }}>
                      {ex.type === 'solo' ? 'Solo' : 'Group'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
