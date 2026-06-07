import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'The Story' }

const PORTRAIT = 'https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston-1024x680.jpg'

export default function Concept3About() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", padding: '60px 80px 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: 72, maxWidth: 700 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(139,69,19,0.7)', marginBottom: 12 }}>
          The Artist's Journey
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#1E1810', lineHeight: 1.05,
        }}>
          Katherine Houston
        </h1>
      </div>

      {/* Portrait + opening */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}>
        <div>
          <img
            src={PORTRAIT}
            alt="Katherine Houston"
            style={{ width: '100%', display: 'block', border: '4px solid #EDE7DB' }}
          />
        </div>
        <div style={{ paddingTop: 16 }}>
          <blockquote style={{ margin: '0 0 32px', padding: '0 0 0 24px', borderLeft: '3px solid #8B4513' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 24,
              fontWeight: 300, fontStyle: 'italic', color: '#1E1810',
              lineHeight: 1.6, margin: 0,
            }}>
              "The Plexiglas surface became my partner. I don't paint on it — I paint into it."
            </p>
          </blockquote>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            Katherine Houston arrived at painting by a circuitous route. A decade in finance gave her discipline and an eye for structure; a first class at the Glassell School of Art gave her purpose. The medium was reverse painting on Plexiglas — a technique so counterintuitive it amounts to a philosophical stance about commitment and permanence.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
            She left finance within two years. The studio took over. The Glassell became a second home. And the Plexiglas paintings — luminous, jewel-toned, unlike anything her collectors had seen — began to find their audience.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(30,24,16,0.65)', lineHeight: 1.9 }}>
            Today, Katherine works from her Houston studio and is represented by Laura Rathe Fine Art. Her work has been exhibited nationally and reviewed in Texas Monthly, the Houston Chronicle, Southwest Art, and Modern Luxury Interiors. She is best known for the Coastal Series and the sculptural Cube Series.
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div style={{
        borderTop: '1px solid rgba(139,69,19,0.12)', paddingTop: 60,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {[
          {
            label: 'Education',
            items: [
              'Glassell School of Art',
              'Museum of Fine Arts Houston',
              'Ongoing independent study in materials science',
            ],
          },
          {
            label: 'Gallery Representation',
            items: [
              'Laura Rathe Fine Art — Houston, TX',
              'Jones & Terwilliger — Fort Worth, TX',
              'Galerie Tara — Chicago, IL',
              'The Russell Collection — Austin, TX',
            ],
          },
          {
            label: 'Selected Press',
            items: [
              'Texas Monthly · 2023',
              'Houston Chronicle · 2024',
              'Southwest Art · 2022',
              'Modern Luxury Interiors · 2023',
            ],
          },
        ].map(({ label, items }) => (
          <div key={label} style={{
            padding: '32px 28px', background: '#EDE7DB',
            border: '1px solid rgba(139,69,19,0.08)',
          }}>
            <div style={{
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#8B4513', marginBottom: 20, fontWeight: 600,
            }}>
              {label}
            </div>
            {items.map(item => (
              <p key={item} style={{
                fontSize: 14, color: 'rgba(30,24,16,0.65)', lineHeight: 1.8,
                marginBottom: 6,
              }}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
