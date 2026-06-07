import Link from 'next/link'
import type { Metadata } from 'next'
import { cubeImages } from '@/lib/data'

export const metadata: Metadata = { title: 'The Cube Series' }

export default function Concept3CubeSeries() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif" }}>

      {/* Header */}
      <div style={{ padding: '60px 80px 0' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Three-Dimensional Works
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05, marginBottom: 24,
        }}>
          The Cube Series
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(30,24,16,0.6)', lineHeight: 1.9, maxWidth: 640 }}>
          Begun in 2015, the Cube Series extends Katherine's reverse-painting practice into three dimensions. Each sculpture is a Plexiglas form painted on all interior faces — a luminous, self-contained world.
        </p>
      </div>

      {/* Gallery */}
      <div style={{ margin: '60px 80px', display: 'flex', gap: 12, overflowX: 'auto' }}>
        {cubeImages.map((img) => (
          <div key={img.src} style={{
            flexShrink: 0, width: 340, height: 380,
            backgroundImage: `url('${img.src}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            border: '4px solid #EDE7DB',
          }} />
        ))}
      </div>

      {/* Story + details */}
      <div style={{
        background: '#EDE7DB', padding: '80px',
        borderTop: '1px solid rgba(139,69,19,0.1)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
            fontWeight: 300, color: '#1E1810', lineHeight: 1.2, marginBottom: 24,
          }}>
            The inside<br /><em>becomes the artwork</em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            The Cube Series emerged from a question Katherine posed to herself in 2015: what happens when there's no "back" to flip to? When the viewing surface is every surface at once?
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            She began painting the interior faces of Plexiglas boxes before assembly — each face planned in conversation with the others, knowing that the completed cube would make all six faces visible simultaneously.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9 }}>
            The result is a work that changes as you move around it. Light enters through whatever face you are not currently viewing. The interior seems to contain its own atmosphere.
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 32 }}>
            {[
              { label: 'Sizes', value: '12" × 12" × 12" · 18" × 18" × 18" · Custom' },
              { label: 'Editions', value: 'All unique — no editions' },
              { label: 'Materials', value: 'Cast Plexiglas, acrylic paint' },
              { label: 'Installation', value: 'Floor, pedestal, or suspended' },
              { label: 'Acquisition', value: 'By inquiry only' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'grid', gridTemplateColumns: '140px 1fr',
                padding: '14px 20px', background: '#F5F0E8', gap: 16,
                border: '1px solid rgba(139,69,19,0.06)',
              }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.65)' }}>
                  {label}
                </span>
                <span style={{ fontSize: 14, color: 'rgba(30,24,16,0.65)' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <Link href="/concept-3/cube-series/inquire" style={{
            display: 'block', padding: '16px 32px',
            background: '#8B4513', color: '#F5F0E8', textDecoration: 'none',
            fontSize: 13, letterSpacing: '0.12em', textAlign: 'center',
          }}>
            Inquire About a Cube
          </Link>
        </div>
      </div>

    </div>
  )
}
