import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#09090A', borderTop: '1px solid rgba(201,168,76,0.12)',
      padding: '64px 48px 40px',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48,
        maxWidth: 1200, margin: '0 auto', marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20, fontWeight: 300, letterSpacing: '0.16em',
            color: '#C9A84C', marginBottom: 16, textTransform: 'uppercase',
          }}>
            Katherine Houston
          </div>
          <p style={{
            fontSize: 12, color: 'rgba(240,237,232,0.4)', lineHeight: 1.9,
            fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
          }}>
            Houston-based abstract painter.<br />
            Reverse painting on Plexiglas.<br />
            Gallery-represented since 2000.
          </p>
        </div>

        {/* Works */}
        <div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 10,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)', marginBottom: 20,
          }}>
            Works
          </div>
          {[
            { label: 'All Works', href: '/concept-2/works' },
            { label: 'Cube Series', href: '/concept-2/cube-series' },
            { label: 'Acquire', href: '/concept-2/collect' },
          ].map(({ label, href }) => (
            <div key={href} style={{ marginBottom: 10 }}>
              <Link href={href} style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: 11,
                color: 'rgba(240,237,232,0.45)', textDecoration: 'none',
                letterSpacing: '0.08em',
              }}>
                {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Studio */}
        <div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 10,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)', marginBottom: 20,
          }}>
            Studio
          </div>
          {[
            { label: 'About', href: '/concept-2/about' },
            { label: 'Process', href: '/concept-2/process' },
            { label: 'Exhibitions', href: '/concept-2/exhibitions' },
            { label: 'Press', href: '/concept-2/press' },
          ].map(({ label, href }) => (
            <div key={href} style={{ marginBottom: 10 }}>
              <Link href={href} style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: 11,
                color: 'rgba(240,237,232,0.45)', textDecoration: 'none',
                letterSpacing: '0.08em',
              }}>
                {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 10,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)', marginBottom: 20,
          }}>
            Contact
          </div>
          <p style={{
            fontSize: 11, color: 'rgba(240,237,232,0.4)', lineHeight: 2,
            fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
          }}>
            Laura Rathe Fine Art<br />
            Houston, TX<br />
            <a href="mailto:studio@katherinehoustonart.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>
              studio@katherinehoustonart.com
            </a>
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(240,237,232,0.06)',
        paddingTop: 24, maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 11, color: 'rgba(240,237,232,0.2)', fontFamily: "'Montserrat', sans-serif" }}>
          © {new Date().getFullYear()} Katherine Houston. All rights reserved.
        </span>
        <Link href="/" style={{
          fontSize: 10, color: 'rgba(240,237,232,0.2)', textDecoration: 'none',
          fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          ← Back to Concepts
        </Link>
      </div>
    </footer>
  )
}
