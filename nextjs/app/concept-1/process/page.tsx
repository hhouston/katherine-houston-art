import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Process' }

const steps = [
  {
    num: '01', title: 'The Plexiglas surface',
    body: 'Katherine begins with a sheet of optically clear Plexiglas — the same acrylic used in museum display cases. Unlike canvas, Plexiglas has no tooth, no texture, no absorbency. Everything must be intentional.',
  },
  {
    num: '02', title: 'Painting in reverse',
    body: 'She paints on the back surface of the glass. The very first marks she lays down are the ones closest to the viewer in the finished work — the most luminous, most exposed layer. She works backwards through depth, building up color and form in the order opposite to how they\'ll be perceived.',
  },
  {
    num: '03', title: 'Building layers',
    body: 'Each layer must be completely dry before the next can be added. She works in passes, sometimes over days or weeks — refining, obscuring, revealing. The process demands a mental model of the finished painting held in reverse.',
  },
  {
    num: '04', title: 'The final seal',
    body: 'The last layer applied — the first one the eye sees when viewing the back — is typically a unifying ground: rich, warm, or luminous depending on the direction of the work. Then the Plexiglas is framed to float away from the wall, catching and casting light.',
  },
]

export default function ProcessPage() {
  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: '80px 60px 60px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>How It's Made</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.06, color: '#0D0D0C', maxWidth: 600 }}>
          Reverse painting<br /><em>on Plexiglas</em>
        </h1>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 560, marginTop: 24, lineHeight: 1.9 }}>
          A technique Katherine has developed over two decades — painting the finished surface first, working backwards through depth, creating a luminosity impossible to achieve on canvas.
        </p>
      </div>

      {/* Steps */}
      <section style={{ padding: '100px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          {steps.map(s => (
            <div key={s.num}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 300, color: 'rgba(0,0,0,0.06)', lineHeight: 1, marginBottom: 20 }}>{s.num}</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, marginBottom: 16 }}>{s.title}</h2>
              <p style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.9 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Studio image */}
      <div style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
        <img src="https://katherinehoustonart.com/wp-content/uploads/2020/03/katherine-houston-studio.jpg" alt="Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px,3vw,32px)', fontStyle: 'italic', color: '#fff', textAlign: 'center', maxWidth: 600, lineHeight: 1.5, padding: '0 40px' }}>
            "The process forces me to think about painting as a viewer would experience it, not as a painter builds it."
          </blockquote>
        </div>
      </div>

      {/* The Cube Series sidebar */}
      <section style={{ padding: '80px 60px', background: '#EAE6DE' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>Extended Practice</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, marginBottom: 24 }}>The Cube Series</h2>
            <p style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.9, marginBottom: 24 }}>
              The same technique, extended into three dimensions. Each cube is built from hand-cut Plexiglas panels that Katherine paints individually using the same reverse method, then assembles into a precise sculptural form. The result glows from within — six paintings in one object.
            </p>
            <a href="/concept-1/cube-series" style={{ display: 'inline-block', padding: '14px 32px', background: '#0D0D0C', color: '#FAFAF8', textDecoration: 'none', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Explore the Cubes
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            <img src="https://katherinehoustonart.com/wp-content/uploads/2022/01/Cube-Series-III-2.jpg" alt="Cube III" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
            <img src="https://katherinehoustonart.com/wp-content/uploads/2022/01/Cubes-in-profile-II.jpg" alt="Cubes in profile" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>
    </div>
  )
}
