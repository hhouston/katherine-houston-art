import Link from 'next/link'
import { cubeImages } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'The Cube Series' }

export default function CubeSeriesPage() {
  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: '#0D0D0C', padding: '80px 60px 0', textAlign: 'center', color: '#F0EDE8' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Best Seller · Sculpture Series</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px,6vw,80px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.01em', marginBottom: 24 }}>
          The Cube<br /><em>Series</em>
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 540, margin: '0 auto 60px', lineHeight: 1.8 }}>
          Three-dimensional Plexiglas sculptures — each face uniquely hand-painted. One-of-a-kind objects that carry the same luminous depth as her paintings.
        </p>
      </div>

      {/* Photo strip */}
      <div style={{ display: 'flex', gap: 4, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', background: '#0D0D0C' }}>
        {cubeImages.map(img => (
          <img key={img.src} src={img.src} alt={img.alt} style={{ height: 340, width: 'auto', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'start', display: 'block' }} />
        ))}
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: 100, padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
        <div>
          <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>About the Series</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, lineHeight: 1.18, marginBottom: 32 }}>Painting, made<br /><em>sculptural</em></h2>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>The Cube Series extends Katherine's signature reverse-painting technique into three dimensions. Each cube is built from hand-cut Plexiglas panels that she paints from the back — then assembled into a precise six-sided form.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>The result is a sculpture with an inner luminosity you cannot achieve on canvas. Light enters through the transparent acrylic and bounces between the painted surfaces, giving each cube a glow that shifts as you move around it.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9 }}>No two cubes are identical. Each face is painted independently, making every cube a genuinely unique object — six abstract paintings assembled into a single three-dimensional work.</p>

          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(0,0,0,0.06)' }}>
            {[
              { k: 'Medium', v: 'Reverse-painted Plexiglas' },
              { k: 'Dimensions', v: '6" × 6" × 6" standard' },
              { k: 'Availability', v: 'Limited — by inquiry' },
              { k: 'Edition', v: 'Each is unique' },
            ].map(item => (
              <div key={item.k} style={{ background: '#FAFAF8', padding: '20px 24px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 6 }}>{item.k}</div>
                <div style={{ fontSize: 14, color: '#0D0D0C' }}>{item.v}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            <img src="https://katherinehoustonart.com/wp-content/uploads/2022/01/Cube-Series-III-2.jpg" alt="Cube III" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
            <img src="https://katherinehoustonart.com/wp-content/uploads/2022/01/Cubes-in-profile-II.jpg" alt="Cubes in profile" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

        {/* Inquiry CTA */}
        <div style={{ background: '#0D0D0C', padding: '48px', alignSelf: 'start', position: 'sticky', top: 100, color: '#F0EDE8' }}>
          <p style={{ fontSize: '9.5px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Private Inquiry</p>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, lineHeight: 1.3, marginBottom: 16 }}>Inquire About<br />the Cube Series</h3>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 36 }}>Katherine responds personally to every inquiry. She'll share availability, current colorway options, and pricing.</p>
          <Link href="/concept-1/cube-series/inquire" style={{ display: 'block', padding: '15px', background: '#FAFAF8', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>
            Submit an Inquiry
          </Link>
          <p style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.7 }}>Typically responds within 48 hours</p>
        </div>
      </div>
    </div>
  )
}
