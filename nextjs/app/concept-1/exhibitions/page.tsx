import { exhibitions } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Exhibitions' }

export default function ExhibitionsPage() {
  const solo = exhibitions.filter(e => e.type === 'solo')
  const group = exhibitions.filter(e => e.type === 'group')

  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '80px 60px 60px' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Exhibition History</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,60px)', fontWeight: 300, lineHeight: 1.06, color: '#0D0D0C' }}>Exhibitions</h1>
      </div>

      <section style={{ padding: '0 60px 100px' }}>
        {[{ label: 'Solo Exhibitions', items: solo }, { label: 'Group Exhibitions', items: group }].map(sec => (
          <div key={sec.label} style={{ marginBottom: 72 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 300, color: '#0D0D0C', marginBottom: 32, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>{sec.label}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(0,0,0,0.05)' }}>
              {sec.items.map(ex => (
                <div key={ex.id} style={{ background: '#FAFAF8', display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 32, padding: '20px 28px', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 300, color: 'rgba(0,0,0,0.2)' }}>{ex.year}</span>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>{ex.title}</div>
                    <div style={{ fontSize: 12, color: '#6B6560' }}>{ex.venue}</div>
                  </div>
                  <span style={{ fontSize: 11, color: '#6B6560', textAlign: 'right', whiteSpace: 'nowrap' }}>{ex.location}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
