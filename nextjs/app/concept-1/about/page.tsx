import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

const creds = [
  { k: 'Education', v: 'Glassell School of Art · University of Houston · Hudson River Valley Art Workshops' },
  { k: 'Instructors', v: 'Skip Lawrence · Quang Ho · Arthur Turner · Nancy Tankersley' },
  { k: 'Galleries', v: 'Laura Rathe Fine Art (Houston) · The Russell Collection (Austin) · Jones & Terwilliger (Fort Worth)' },
  { k: 'Exhibitions', v: 'Houston · Dallas · Austin · Chicago · Washington DC · California · New York' },
  { k: 'Collections', v: 'Private and corporate collections in the United States and internationally' },
  { k: 'Media', v: 'Texas Monthly · Houston Chronicle · Southwest Art · Modern Luxury Interiors' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '60vh' }}>
        <div style={{ background: "url('https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston.jpg') center/cover no-repeat" }} />
        <div style={{ padding: '80px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: '#FAFAF8' }}>
          <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>The Artist</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.06, color: '#0D0D0C' }}>Katherine<br /><em>Houston</em></h1>
        </div>
      </div>

      {/* Bio */}
      <section style={{ padding: '100px 60px', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80 }}>
        <div>
          <p style={{ fontSize: 18, fontFamily: "'Playfair Display', serif", fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: '#0D0D0C', marginBottom: 40 }}>
            "I paint from the back of the glass forward — the very first mark I make is the last thing the viewer sees."
          </p>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>Katherine Houston is a Houston-based abstract painter working in a medium she has made entirely her own: reverse painting on Plexiglas. Rather than building layers in the conventional sense, she works from the finished surface backwards — the very first mark she makes is the last thing the viewer sees.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>The result is work of unusual luminosity, with a depth and inner glow impossible to achieve on canvas or paper. Her paintings explore infinite space through color, with bold abstract compositions rooted in the real world — cities glimpsed at dusk, coastlines, landscapes held in memory.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>Trained at the Glassell School of Art and the University of Houston, Houston has spent over two decades refining her practice, studying under nationally recognized instructors including Skip Lawrence, Quang Ho, and Arthur Turner.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9 }}>Her work is held in private and corporate collections throughout the United States and internationally, and is represented by three galleries across Texas.</p>
        </div>
        <div>
          <img src="https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg" alt="Katherine Houston in her studio" style={{ width: '100%', objectFit: 'cover', display: 'block', marginBottom: 32 }} />
          <div style={{ fontSize: 11, color: '#6B6560', letterSpacing: '0.1em' }}>Katherine in her Houston studio, 2023</div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: '0 60px 100px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, marginBottom: 40 }}>Credentials &amp; Recognition</h2>
        <div style={{ display: 'grid', gap: 1, background: 'rgba(0,0,0,0.06)' }}>
          {creds.map(c => (
            <div key={c.k} style={{ background: '#FAFAF8', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '20px 24px' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B7355', paddingTop: 3 }}>{c.k}</span>
              <span style={{ fontSize: 14, color: '#0D0D0C', lineHeight: 1.7 }}>{c.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 60px', background: '#EAE6DE', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, marginBottom: 24 }}>Available for commissions and inquiries</h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Link href="/concept-1/collect" style={{ padding: '14px 36px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>View Available Works</Link>
          <Link href="/concept-1/cube-series/inquire" style={{ padding: '14px 36px', border: '1px solid rgba(0,0,0,0.25)', color: '#0D0D0C', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Make an Inquiry</Link>
        </div>
      </section>
    </div>
  )
}
