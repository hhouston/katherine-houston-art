import Link from 'next/link'
import { featuredArtworks, pressItems } from '@/lib/data'
import WorksGrid from './WorksGrid'
import CubeSection from './CubeSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Katherine Houston — Abstract Painter',
  description: 'Houston-based abstract painter working in reverse paint on Plexiglas. Luminous, gallery-represented work available by inquiry and direct purchase.',
}

const galleries = [
  { name: 'Laura Rathe Fine Art', loc: 'Houston' },
  { name: 'The Russell Collection', loc: 'Austin' },
  { name: 'Jones & Terwilliger', loc: 'Fort Worth' },
]

export default function Concept1Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ height: '100vh', minHeight: 700, display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>
        <div style={{ background: "url('https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg') center/cover no-repeat", position: 'relative' }}>
          <span style={{ position: 'absolute', bottom: 32, left: 32, fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Houston, Texas · Studio</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 80px 80px', background: '#FAFAF8' }}>
          <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 28 }}>Abstract Painter · Houston, Texas</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(52px,6vw,88px)', fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.01em', marginBottom: 32, color: '#0D0D0C' }}>
            Katherine<br /><em>Houston</em>
          </h1>
          <blockquote style={{ fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: '#6B6560', lineHeight: 1.9, borderLeft: '2px solid #8B7355', paddingLeft: 24, marginBottom: 48, maxWidth: 380 }}>
            "I paint from the back of the glass forward — the very first mark I make is the last thing the viewer sees."
          </blockquote>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/concept-1/works" style={{ display: 'inline-block', padding: '14px 36px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              View Works
            </Link>
            <Link href="/concept-1/about" style={{ display: 'inline-block', padding: '14px 36px', border: '1px solid rgba(0,0,0,0.25)', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery rep bar */}
      <div style={{ background: '#0D0D0C', color: '#F0EDE8', padding: '28px 60px', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '9.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>Gallery Representation</span>
        <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
          {galleries.map(g => (
            <div key={g.name} style={{ fontFamily: "'Playfair Display', serif", fontSize: '13.5px', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>
              {g.name} <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontStyle: 'normal', color: 'rgba(255,255,255,0.35)', marginLeft: 8, letterSpacing: '0.1em' }}>{g.loc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Works */}
      <section style={{ padding: '110px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div>
            <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Selected Works</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px,3vw,46px)', fontWeight: 300, lineHeight: 1.18 }}>Recent paintings</h2>
          </div>
          <Link href="/concept-1/works" style={{ fontSize: '10.5px', letterSpacing: '0.17em', textTransform: 'uppercase', color: '#8B7355', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            View all works →
          </Link>
        </div>
        <WorksGrid artworks={featuredArtworks} />
      </section>

      {/* Cube Series with VR */}
      <CubeSection />

      {/* About */}
      <section style={{ padding: '110px 60px', background: '#EAE6DE' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston-1024x680.jpg" alt="Katherine Houston" style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', bottom: -12, right: -12, fontSize: 10, color: '#6B6560', letterSpacing: '0.15em', background: '#EAE6DE', padding: '8px 12px' }}>Houston, Texas · Studio portrait</span>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>The Artist</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px,3vw,44px)', fontWeight: 300, lineHeight: 1.18, marginBottom: 28 }}>A Practice Built<br />on <em>Letting Go</em></h2>
            <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>Katherine Houston is a Houston-based abstract painter working in a medium she has made entirely her own: reverse painting on Plexiglas. Rather than building layers in the conventional sense, she works from the finished surface backwards — the very first mark she makes is the last thing the viewer sees.</p>
            <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 36 }}>The result is work of unusual luminosity, with a depth and inner glow impossible to achieve on canvas or paper.</p>
            <Link href="/concept-1/about" style={{ display: 'inline-block', padding: '14px 36px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Full Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Press */}
      <section style={{ padding: '110px 60px', background: '#0D0D0C' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
          <div>
            <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Press</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, color: '#F0EDE8', lineHeight: 1.18 }}>What people say<br />about the work</h2>
          </div>
          <Link href="/concept-1/press" style={{ fontSize: '10.5px', letterSpacing: '0.17em', textTransform: 'uppercase', color: '#8B7355', textDecoration: 'none' }}>All press →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 40 }}>
          {pressItems.slice(0, 2).map(p => (
            <div key={p.id} style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 24 }}>{p.excerpt}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B7355' }}>— {p.publication}, {p.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Collect CTA */}
      <section style={{ padding: '110px 60px', background: '#EAE6DE', textAlign: 'center' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Collect</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24, color: '#0D0D0C' }}>
          Bring Katherine's work<br />into your home
        </h2>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.9 }}>
          Available works range from intimate studies to large-format paintings. All ship directly from Katherine's studio, fully insured.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Link href="/concept-1/collect" style={{ display: 'inline-block', padding: '14px 40px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Browse Available Works
          </Link>
          <Link href="/concept-1/cube-series/inquire" style={{ display: 'inline-block', padding: '14px 40px', border: '1px solid rgba(0,0,0,0.25)', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Cube Series Inquiry
          </Link>
        </div>
      </section>
    </>
  )
}
