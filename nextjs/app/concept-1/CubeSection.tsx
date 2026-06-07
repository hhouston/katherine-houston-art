'use client'
import { useVRCubeIntro, VRCubeOverlay } from '@/components/concept-1/VRCubeIntro'
import { cubeImages } from '@/lib/data'

export default function CubeSection() {
  const { overlayRef, trigger } = useVRCubeIntro()

  return (
    <>
      <VRCubeOverlay overlayRef={overlayRef} />
      <section style={{ background: '#0D0D0C', padding: '96px 0 80px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto 52px', padding: '0 60px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: 11, color: '#C9A84C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>★ Best Seller</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, color: '#F0EDE8', lineHeight: 1.18, marginBottom: 20 }}>The Cube Series</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 36 }}>
            Her most sought-after work. Three-dimensional acrylic sculptures that bring the same luminous reverse-painting technique into physical form — each Cube a one-of-a-kind collectible object that transforms any interior.
          </p>
          <button onClick={trigger} style={{
            padding: '14px 32px', background: 'transparent', color: '#F0EDE8',
            border: '1px solid rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif",
            fontSize: '9.5px', letterSpacing: '0.22em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.2s',
          }}>
            Inquire About the Cube Series
          </button>
        </div>

        {/* Scroll gallery */}
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {cubeImages.map(img => (
            <img key={img.src} src={img.src} alt={img.alt}
              style={{ height: 280, width: 'auto', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'start', display: 'block' }} />
          ))}
        </div>
        <p style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textAlign: 'center', padding: '0 60px' }}>
          Available by inquiry · Limited availability
        </p>
      </section>
    </>
  )
}
