'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Artwork } from '@/types'

export default function WorksGrid({ artworks }: { artworks: Artwork[] }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const first = artworks[0]
  const rest = artworks.slice(1, 5)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 3 }}>
      {/* Featured large */}
      <Link href={`/concept-1/works/${first.slug}`} style={{ gridRow: 'span 2', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}
        onMouseEnter={() => setHovered(first.slug)} onMouseLeave={() => setHovered(null)}>
        <img src={first.image} alt={first.title} style={{ width: '100%', height: '100%', minHeight: 560, objectFit: 'cover', display: 'block', transform: hovered === first.slug ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 45%, transparent 70%)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#fff', marginBottom: 4 }}>{first.title}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em' }}>{first.year} · {first.medium}</div>
          {first.available && <div style={{ fontSize: 10, color: '#C9A84C', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 8 }}>Available</div>}
        </div>
      </Link>

      {/* Smaller 4 */}
      {rest.map(art => (
        <Link key={art.slug} href={`/concept-1/works/${art.slug}`} style={{ position: 'relative', overflow: 'hidden', textDecoration: 'none' }}
          onMouseEnter={() => setHovered(art.slug)} onMouseLeave={() => setHovered(null)}>
          <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', minHeight: 260, objectFit: 'cover', display: 'block', transform: hovered === art.slug ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 45%, transparent 70%)', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ fontSize: 13, fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#fff', marginBottom: 2 }}>{art.title}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>{art.year}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
