import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Design Concepts — Katherine Houston' }

export default function ConceptSelectorPage() {
  return (
    <main style={{
      fontFamily: "'Inter', sans-serif",
      background: '#0E0E0C', color: '#F0EDE8',
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '60px 40px',
    }}>
      <header style={{ textAlign: 'center', marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.4)', marginBottom: 16 }}>
          hhouston / katherine-houston-art · Next.js App
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, lineHeight: 1.1, marginBottom: 12 }}>
          Katherine <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Houston</span>
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.45)', fontWeight: 300 }}>
          Choose a design concept to explore the full site
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, maxWidth: 1100, width: '100%' }}>
        {concepts.map(c => (
          <div key={c.num} style={{
            background: '#161612', padding: '48px 36px',
            border: '1px solid rgba(240,237,232,0.06)',
            display: 'flex', flexDirection: 'column', gap: 20,
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.3)' }}>Concept 0{c.num}</span>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: c.titleColor }}>{c.name}</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {c.swatches.map((s, i) => <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', background: s, border: '1px solid rgba(255,255,255,0.12)' }} />)}
            </div>
            <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.5)', lineHeight: 1.8, fontWeight: 300, flex: 1 }}>{c.desc}</p>
            <Link href={c.href} style={{
              display: 'inline-block', padding: '12px 28px',
              border: '1px solid rgba(240,237,232,0.2)', color: 'rgba(240,237,232,0.7)',
              textDecoration: 'none', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', textAlign: 'center',
            }}>Open Concept {c.num} →</Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, display: 'flex', gap: 24, alignItems: 'center' }}>
        <Link href="/admin/login" style={{ fontSize: 11, color: 'rgba(240,237,232,0.25)', letterSpacing: '0.12em', textDecoration: 'none', textTransform: 'uppercase' }}>
          Admin →
        </Link>
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
    </main>
  )
}

const concepts = [
  {
    num: 1,
    name: 'Gallery Standard',
    href: '/concept-1',
    titleColor: '#B09070',
    swatches: ['#FAFAF8', '#0D0D0C', '#8B7355', '#EAE6DE'],
    desc: 'White-cube gallery aesthetic inspired by Gagosian and Pace. Split-screen hero, gallery rep bar, works grid with hover reveal. Most institutional and prestigious feel.',
  },
  {
    num: 2,
    name: 'Immersive Dark',
    href: '/concept-2',
    titleColor: '#C9A84C',
    swatches: ['#0E0E0C', '#1E1E18', '#C9A84C', '#F0EDE8'],
    desc: 'Dark, dramatic, collector-oriented. Vibrant artworks glow against near-black. Gold accents, "Acquire" language, Plexiglas process in 3 steps.',
  },
  {
    num: 3,
    name: 'The Artisan\'s Story',
    href: '/concept-3',
    titleColor: '#C8A08A',
    swatches: ['#F5F0E8', '#1E1810', '#8B4513', '#C8B89A'],
    desc: 'Warm, editorial, story-driven. Cream tones, personal journey from finance to art, timeline, full process explainer. Most conversion-friendly for social traffic.',
  },
]
