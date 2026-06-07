import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'The Process' }

const STUDIO = 'https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg'

export default function Concept2Process() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* Header */}
      <div style={{ padding: '60px 80px 0' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Technique
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05, maxWidth: 600,
        }}>
          Reverse Painting<br /><em>on Plexiglas</em>
        </h1>
      </div>

      {/* Studio image */}
      <div style={{
        margin: '60px 80px',
        height: 480,
        backgroundImage: `url('${STUDIO}')`,
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        border: '1px solid rgba(201,168,76,0.1)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(14,14,12,0.7) 0%, rgba(14,14,12,0) 60%)',
        }} />
        <div style={{ position: 'relative', padding: '48px', maxWidth: 480 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 24,
            fontStyle: 'italic', color: '#F0EDE8', lineHeight: 1.6,
          }}>
            "The surface is the final thing the paint touches — and the first thing the eye sees."
          </p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ padding: '0 80px 80px', maxWidth: 780 }}>
        <p style={{ fontSize: 15, color: 'rgba(240,237,232,0.65)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
          Reverse painting on Plexiglas is one of the most demanding and singular techniques in contemporary painting. Unlike conventional painting — where the artist builds from ground to surface — Katherine works from the viewing surface backward, committing to every mark in an irreversible sequence.
        </p>
        <p style={{ fontSize: 15, color: 'rgba(240,237,232,0.65)', lineHeight: 1.9, fontWeight: 300 }}>
          The result is a luminosity that collectors describe as light coming from within the painting rather than reflecting off it. This is not metaphor — it is optics. The Plexiglas itself refracts and transmits, creating an effect that no canvas or board can replicate.
        </p>
      </div>

      {/* Three phases */}
      <div style={{ background: '#0A0A09', padding: '80px', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <p style={{
          fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#C9A84C', marginBottom: 48, textAlign: 'center',
        }}>
          Three Phases
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {[
            {
              phase: 'Phase I',
              title: 'Surface Preparation',
              icon: '◻',
              desc: [
                'A sheet of museum-quality Plexiglas is selected for flatness and optical clarity. Katherine works with material up to 60" × 80".',
                'The surface is cleaned with archival solvents, then inspected under raking light for any micro-scratches that might read in the final work.',
                'The composition is mapped in reverse — sketched on paper, then consulted continually as a mirror-image guide.',
              ],
            },
            {
              phase: 'Phase II',
              title: 'Reverse Construction',
              icon: '◈',
              desc: [
                'Working from the front face of the Plexiglas — what will ultimately be the viewing surface — Katherine lays in the most luminous, transparent marks first. These become the "lights" of the painting.',
                'Layer by layer she builds rearward, each glaze of acrylic curing fully before the next is applied. Jewel tones — cerulean, amber, cadmium — are mixed to precise translucency.',
                'A single painting may require 20–40 studio sessions over several months. No corrections are possible — each layer is permanent beneath the one that follows.',
              ],
            },
            {
              phase: 'Phase III',
              title: 'Seal & Reveal',
              icon: '◑',
              desc: [
                'The final layer is an opaque ground — the "back" of the painting that the viewer never sees but which gives the work its structural integrity and prevents light from washing out the colors.',
                'Once sealed and dry, the panel is carefully flipped. The Plexiglas surface now faces the viewer, and for the first time the painting is seen as intended.',
                'The effect is immediate and unmistakable: colors appear to glow from within, depth feels impossible, and the light in the room becomes a co-author of the work.',
              ],
            },
          ].map(({ phase, title, icon, desc }) => (
            <div key={phase} style={{
              padding: '44px 36px', background: '#111110',
              border: '1px solid rgba(201,168,76,0.08)',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 48,
                color: 'rgba(201,168,76,0.25)', marginBottom: 16, lineHeight: 1,
              }}>
                {icon}
              </div>
              <div style={{
                fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase',
                color: '#C9A84C', marginBottom: 10,
              }}>
                {phase}
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
                fontWeight: 300, color: '#F0EDE8', marginBottom: 28, lineHeight: 1.2,
              }}>
                {title}
              </h2>
              {desc.map((para, i) => (
                <p key={i} style={{
                  fontSize: 13, color: 'rgba(240,237,232,0.5)', lineHeight: 1.9,
                  fontWeight: 300, marginBottom: 14,
                }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Materials note */}
      <div style={{ padding: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16 }}>
            Materials
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
            fontWeight: 300, color: '#F0EDE8', lineHeight: 1.2, marginBottom: 24,
          }}>
            Why Plexiglas?
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: 16 }}>
            Plexiglas (acrylic glass) is optically superior to glass for this technique — it is lighter, more impact-resistant, and has a refractive index that amplifies the luminosity of transparent acrylic glazes.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300 }}>
            Katherine uses cast acrylic sheet — not extruded — which has superior optical clarity and UV stability. Works are archival and designed to outlast any painting on organic support.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { label: 'Support', value: 'Cast Plexiglas (PMMA), 1/4" to 1/2" thickness' },
            { label: 'Medium', value: 'Acrylic paint, archival-grade transparent glazes' },
            { label: 'Process', value: 'Reverse application — foreground first, ground last' },
            { label: 'Archival life', value: '200+ years (UV-stable, no organic support degradation)' },
            { label: 'Installation', value: 'Standoff mount or flush-frame, per collector preference' },
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
      </div>

    </div>
  )
}
