import type { Metadata } from 'next'
import { exhibitions } from '@/lib/data'

export const metadata: Metadata = { title: 'Exhibitions' }

export default function Concept3Exhibitions() {
  const years = [...new Set(exhibitions.map(e => e.year))].sort((a, b) => b - a)

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      <div style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Exhibition History
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05,
        }}>
          Exhibitions
        </h1>
      </div>

      <div style={{ maxWidth: 900 }}>
        {years.map(year => (
          <div key={year} style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 36,
                fontWeight: 300, color: '#8B4513', lineHeight: 1,
              }}>
                {year}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(139,69,19,0.15)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 20 }}>
              {exhibitions.filter(e => e.year === year).map(ex => (
                <div key={ex.id} style={{
                  padding: '24px 28px',
                  background: '#EDE7DB',
                  border: '1px solid rgba(139,69,19,0.08)',
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  alignItems: 'center', gap: 24,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                      fontWeight: 300, color: '#1E1810', marginBottom: 6,
                    }}>
                      {ex.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(30,24,16,0.55)' }}>
                      {ex.venue} · {ex.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 12, color: 'rgba(30,24,16,0.45)', marginBottom: 6 }}>
                      {ex.month} {ex.year}
                    </div>
                    <span style={{
                      display: 'inline-block', padding: '4px 14px', fontSize: 11,
                      background: ex.type === 'solo' ? '#8B4513' : 'transparent',
                      color: ex.type === 'solo' ? '#F5F0E8' : 'rgba(30,24,16,0.5)',
                      border: ex.type === 'solo' ? 'none' : '1px solid rgba(30,24,16,0.2)',
                    }}>
                      {ex.type === 'solo' ? 'Solo Exhibition' : 'Group Show'}
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
