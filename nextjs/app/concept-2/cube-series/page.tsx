import Link from 'next/link'
import type { Metadata } from 'next'
import { cubeImages } from '@/lib/data'

export const metadata: Metadata = { title: 'The Cube Series' }

export default function Concept2CubeSeries() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* Hero */}
      <div style={{ padding: '60px 80px 0' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Three-Dimensional Works
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05, marginBottom: 24,
        }}>
          The Cube Series
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, maxWidth: 640, fontWeight: 300 }}>
          Katherine Houston's Cube Series extends her reverse-painting practice into three dimensions. Each cube is a sculptural object — Plexiglas painted on all interior faces, creating a luminous, infinite-seeming interior. No two cubes are identical.
        </p>
      </div>

      {/* Scroll gallery */}
      <div style={{ margin: '60px 0', padding: '0 80px', display: 'flex', gap: 3, overflowX: 'auto' }}>
        {cubeImages.map((img) => (
          <div key={img.src} style={{
            flexShrink: 0, width: 360, height: 420,
            backgroundImage: `url('${img.src}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            border: '1px solid rgba(201,168,76,0.1)',
          }} />
        ))}
      </div>

      {/* Details */}
      <div style={{
        background: '#0A0A09', padding: '80px',
        borderTop: '1px solid rgba(201,168,76,0.08)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start',
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
            fontWeight: 300, color: '#F0EDE8', lineHeight: 1.2, marginBottom: 24,
          }}>
            Painting Inside<br /><em>a Form</em>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
            Each cube begins as a raw Plexiglas form — six faces, all interior. Katherine paints each face in isolation before assembly, planning for how the colors will bleed and reflect between surfaces once the cube is closed.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
            The final assembled cube is an object that seems to contain its own atmosphere — light enters, bounces between the painted faces, and emerges transformed.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300 }}>
            Works are available individually or as installed groups. Katherine has exhibited cubes as floor pieces, pedestal works, and suspended ceiling installations.
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
            {[
              { label: 'Sizes available', value: '12" × 12" × 12" / 18" × 18" × 18" / Custom' },
              { label: 'Editions', value: 'All unique — no editions' },
              { label: 'Materials', value: 'Cast Plexiglas, acrylic paint' },
              { label: 'Acquisition', value: 'By inquiry only' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                padding: '14px 20px', background: '#111110',
                border: '1px solid rgba(201,168,76,0.08)', gap: 16,
              }}>
                <span style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>
                  {label}
                </span>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,0.6)', fontWeight: 300 }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <Link href="/concept-2/cube-series/inquire" style={{
            display: 'block', padding: '16px 32px',
            background: '#C9A84C', color: '#0E0E0C', textDecoration: 'none',
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            fontWeight: 500, textAlign: 'center',
          }}>
            Inquire About a Cube
          </Link>
        </div>
      </div>

    </div>
  )
}
