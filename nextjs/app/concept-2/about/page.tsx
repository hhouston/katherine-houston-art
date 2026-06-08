import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

const PORTRAIT = 'https://katherinehoustonart.com/wp-content/uploads/2020/02/katherine-houston.jpg'

export default function Concept2About() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          The Artist
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.05,
        }}>
          Katherine Houston
        </h1>
      </div>

      {/* Portrait + bio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}>
        <div>
          <img
            src={PORTRAIT}
            alt="Katherine Houston"
            style={{
              width: '100%', display: 'block',
              border: '1px solid rgba(201,168,76,0.12)',
            }}
          />
        </div>
        <div style={{ paddingTop: 12 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
            fontWeight: 300, fontStyle: 'italic', color: '#F0EDE8',
            lineHeight: 1.6, marginBottom: 32,
          }}>
            "The Plexiglas surface became my partner. It holds light differently than anything else — you don't paint on it, you paint into it."
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
            Katherine Houston is a Houston, Texas-based abstract painter known for her luminous, jewel-toned works executed in reverse on Plexiglas. Her technique — painting the foreground first, building toward opacity — produces a depth and radiance unique in contemporary American painting.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
            Trained at the Glassell School of Art (Museum of Fine Arts Houston), Katherine has exhibited extensively across Texas and the national gallery circuit. She is represented by Laura Rathe Fine Art (Houston) and has been reviewed in Texas Monthly, the Houston Chronicle, Southwest Art, and Modern Luxury Interiors.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, fontWeight: 300 }}>
            Her work is held in private collections throughout Texas, Chicago, New York, and California, and is particularly sought after by collectors of luminous abstraction who value the site-responsive quality of the Plexiglas medium.
          </p>
        </div>
      </div>

      {/* Credentials grid */}
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 60,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2,
      }}>
        {[
          {
            label: 'Education',
            items: [
              'Glassell School of Art, Museum of Fine Arts Houston',
              'Continuing studies in materials science of Plexiglas media',
            ],
          },
          {
            label: 'Gallery Representation',
            items: [
              'Laura Rathe Fine Art, Houston TX',
              'Jones & Terwilliger Galleries, Fort Worth TX',
              'Galerie Tara, Chicago IL',
              'The Russell Collection, Austin TX',
            ],
          },
          {
            label: 'Notable Press',
            items: [
              'Texas Monthly, 2023',
              'Houston Chronicle, 2024',
              'Southwest Art, 2022',
              'Modern Luxury Interiors, 2023',
            ],
          },
        ].map(({ label, items }) => (
          <div key={label} style={{
            padding: '36px 32px', background: '#111110',
            border: '1px solid rgba(201,168,76,0.08)',
          }}>
            <div style={{
              fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: 20,
            }}>
              {label}
            </div>
            {items.map(item => (
              <p key={item} style={{
                fontSize: 13, color: 'rgba(240,237,232,0.55)', lineHeight: 1.8,
                marginBottom: 8, fontWeight: 300,
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
