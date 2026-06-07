import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#EDE7DB', borderTop: '1px solid rgba(139,69,19,0.1)',
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
            fontSize: 20, fontWeight: 400, letterSpacing: '0.12em',
            color: '#5C3010', marginBottom: 16, textTransform: 'uppercase',
          }}>
            Katherine Houston
          </div>
          <p style={{
            fontSize: 13, color: 'rgba(92,48,16,0.6)', lineHeight: 1.9,
            fontFamily: "'Source Sans 3', sans-serif",
          }}>
            Houston-based abstract painter.<br />
            Reverse painting on Plexiglas.<br />
            Gallery-represented since 2000.
          </p>
        </div>

        {/* Works */}
        <div>
          <div style={{
            fontFamily: "'Source Sans 3', sans-serif", fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(139,69,19,0.7)', marginBottom: 20, fontWeight: 600,
          }}>
            Works
          </div>
          {[
            { label: 'All Works', href: '/concept-3/works' },
            { label: 'Cube Series', href: '/concept-3/cube-series' },
            { label: 'Collect', href: '/concept-3/collect' },
          ].map(({ label, href }) => (
            <div key={href} style={{ marginBottom: 10 }}>
              <Link href={href} style={{
                fontFamily: "'Source Sans 3', sans-serif", fontSize: 13,
                color: 'rgba(92,48,16,0.55)', textDecoration: 'none',
              }}>
                {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Studio */}
        <div>
          <div style={{
            fontFamily: "'Source Sans 3', sans-serif", fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(139,69,19,0.7)', marginBottom: 20, fontWeight: 600,
          }}>
            Studio
          </div>
          {[
            { label: 'The Story', href: '/concept-3/about' },
            { label: 'Process', href: '/concept-3/process' },
            { label: 'Exhibitions', href: '/concept-3/exhibitions' },
            { label: 'Press', href: '/concept-3/press' },
          ].map(({ label, href }) => (
            <div key={href} style={{ marginBottom: 10 }}>
              <Link href={href} style={{
                fontFamily: "'Source Sans 3', sans-serif", fontSize: 13,
                color: 'rgba(92,48,16,0.55)', textDecoration: 'none',
              }}>
                {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontFamily: "'Source Sans 3', sans-serif", fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(139,69,19,0.7)', marginBottom: 20, fontWeight: 600,
          }}>
            Contact
          </div>
          <p style={{
            fontSize: 13, color: 'rgba(92,48,16,0.55)', lineHeight: 2,
            fontFamily: "'Source Sans 3', sans-serif",
          }}>
            Laura Rathe Fine Art<br />
            Houston, TX<br />
            <a href="mailto:studio@katherinehoustonart.com" style={{ color: '#8B4513', textDecoration: 'none' }}>
              studio@katherinehoustonart.com
            </a>
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(139,69,19,0.1)',
        paddingTop: 24, maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 12, color: 'rgba(92,48,16,0.35)', fontFamily: "'Source Sans 3', sans-serif" }}>
          © {new Date().getFullYear()} Katherine Houston. All rights reserved.
        </span>
        <Link href="/" style={{
          fontSize: 11, color: 'rgba(92,48,16,0.35)', textDecoration: 'none',
          fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          ← Back to Concepts
        </Link>
      </div>
    </footer>
  )
}
