import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#0E0E0C', borderBottom: '1px solid rgba(201,168,76,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 72,
    }}>
      <Link href="/concept-2" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 18, fontWeight: 300, letterSpacing: '0.18em',
        color: '#C9A84C', textDecoration: 'none', textTransform: 'uppercase',
      }}>
        Katherine Houston
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[
          { label: 'Works', href: '/concept-2/works' },
          { label: 'About', href: '/concept-2/about' },
          { label: 'Process', href: '/concept-2/process' },
          { label: 'Exhibitions', href: '/concept-2/exhibitions' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.65)', textDecoration: 'none',
          }}>
            {label}
          </Link>
        ))}
        <Link href="/concept-2/collect" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#C9A84C', textDecoration: 'none',
          border: '1px solid #C9A84C', padding: '9px 20px',
        }}>
          Collect
        </Link>
      </div>

      <Link href="/" style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(240,237,232,0.25)', textDecoration: 'none',
        position: 'absolute', bottom: 6, left: 48,
      }}>
        ← All Concepts
      </Link>
    </nav>
  )
}
