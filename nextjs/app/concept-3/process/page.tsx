import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'The Process' }

const STUDIO = 'https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg'

export default function Concept3Process() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif" }}>

      {/* Header */}
      <div style={{ padding: '60px 80px 0' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          Technique
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05, maxWidth: 600, marginBottom: 24,
        }}>
          Reverse Painting<br /><em>on Plexiglas</em>
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(30,24,16,0.6)', lineHeight: 1.9, maxWidth: 640 }}>
          A technique built on permanence, patience, and a willingness to commit to every mark — knowing nothing can be undone.
        </p>
      </div>

      {/* Studio image */}
      <div style={{
        margin: '60px 80px',
        height: 460,
        backgroundImage: `url('${STUDIO}')`,
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        border: '4px solid #EDE7DB',
      }} />

      {/* Process narrative */}
      <div style={{
        padding: '0 80px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start',
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
            fontWeight: 300, color: '#1E1810', lineHeight: 1.2, marginBottom: 24,
          }}>
            Why paint in reverse?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            Conventional painting builds from dark to light, from ground to surface — the painter works forward in time, always able to revise, correct, and reconsider. Katherine inverts this entirely.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            Working on the back face of the Plexiglas, she lays in what the viewer will ultimately see as the foreground first — the most luminous, transparent marks. Every subsequent layer moves backward in pictorial space, building toward opacity. The final layer — the one she applies last — is the one farthest from the viewer's eye.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9 }}>
            The effect is a kind of optical depth that no canvas-based painting can achieve: light not just reflected but transmitted, refracting through the Plexiglas itself before reaching the viewer.
          </p>
        </div>
        <blockquote style={{
          margin: 0, padding: '40px 40px',
          background: '#EDE7DB', border: '1px solid rgba(139,69,19,0.1)',
          borderLeft: '4px solid #8B4513',
          alignSelf: 'start', marginTop: 60,
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
            fontWeight: 300, fontStyle: 'italic', color: '#1E1810',
            lineHeight: 1.7, margin: '0 0 20px',
          }}>
            "There are no erasers in this process. Every decision accumulates. I've had to make peace with that — and it changed how I make decisions in general."
          </p>
          <cite style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', fontStyle: 'normal' }}>
            Katherine Houston
          </cite>
        </blockquote>
      </div>

      {/* Three phases */}
      <div style={{ background: '#EDE7DB', padding: '80px', borderTop: '1px solid rgba(139,69,19,0.1)' }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'rgba(139,69,19,0.7)', marginBottom: 48,
        }}>
          Three Phases
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            {
              num: '01',
              phase: 'Surface Preparation',
              body: 'A sheet of museum-quality cast Plexiglas is selected — Katherine inspects each piece under raking light for optical clarity. The composition is planned in reverse and sketched on paper as a mirror-image guide. Sizes range from intimate 12" studies to large-format 48" × 60" panels.',
            },
            {
              num: '02',
              phase: 'Reverse Construction',
              body: 'Working from the front face of the Plexiglas, Katherine lays in the most luminous lights and transparencies — the "foreground" of the final painting — first. Each glaze of jewel-toned acrylic must cure fully before the next layer is applied. A single work may require 20–40 studio sessions. No corrections are possible; each mark is sealed permanently beneath the layer that follows.',
            },
            {
              num: '03',
              phase: 'Seal & Reveal',
              body: 'The final layer is an opaque ground — the structural "back" of the painting. Once sealed, the panel is flipped to reveal the work through the Plexiglas viewing surface. The reveal is the moment of reckoning: the painting is seen for the first time as the viewer will always see it, through glass, the colors transmitted rather than merely reflected.',
            },
          ].map(({ num, phase, body }) => (
            <div key={num} style={{
              padding: '40px 44px', background: '#F5F0E8',
              border: '1px solid rgba(139,69,19,0.08)',
              display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40,
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
                fontWeight: 300, color: 'rgba(139,69,19,0.2)', lineHeight: 1,
              }}>
                {num}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
                  fontWeight: 300, color: '#1E1810', marginBottom: 16, lineHeight: 1.2,
                }}>
                  {phase}
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, margin: 0 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div style={{ padding: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
            Materials
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 38,
            fontWeight: 300, color: '#1E1810', lineHeight: 1.2, marginBottom: 24,
          }}>
            Why Plexiglas?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 16 }}>
            Plexiglas (cast acrylic glass) has a refractive index and optical clarity that amplifies transparent acrylic glazes in a way glass itself cannot — while being lighter, stronger, and less prone to breakage.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9 }}>
            Katherine uses only cast acrylic sheet — not extruded — for its superior optical clarity and UV stability. Works are archival and expected to outlast any painting on organic support.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            { label: 'Support', value: 'Cast Plexiglas (PMMA), 1/4" to 1/2"' },
            { label: 'Medium', value: 'Archival acrylic, transparent glazes' },
            { label: 'Process', value: 'Reverse application — foreground first' },
            { label: 'Archival life', value: '200+ years (UV-stable)' },
            { label: 'Installation', value: 'Standoff mount or flush-frame' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr',
              padding: '14px 20px', background: '#EDE7DB', gap: 16,
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
      </div>

    </div>
  )
}
