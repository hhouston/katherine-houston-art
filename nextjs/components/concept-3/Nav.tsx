import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#F5F0E8', borderBottom: '1px solid rgba(139,69,19,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 72,
    }}>
      <Link href="/concept-3" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 18, fontWeight: 400, letterSpacing: '0.14em',
        color: '#5C3010', textDecoration: 'none', textTransform: 'uppercase',
      }}>
        Katherine Houston
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[
          { label: 'Works', href: '/concept-3/works' },
          { label: 'Story', href: '/concept-3/about' },
          { label: 'Process', href: '/concept-3/process' },
          { label: 'Exhibitions', href: '/concept-3/exhibitions' },
          { label: 'Press', href: '/concept-3/press' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 13, letterSpacing: '0.08em',
            color: 'rgba(92,48,16,0.65)', textDecoration: 'none',
          }}>
            {label}
          </Link>
        ))}
        <Link href="/concept-3/collect" style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 12, letterSpacing: '0.1em',
          color: '#F5F0E8', textDecoration: 'none',
          background: '#8B4513', padding: '10px 22px',
        }}>
          Collect
        </Link>
      </div>

      <Link href="/" style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(92,48,16,0.3)', textDecoration: 'none',
        position: 'absolute', bottom: 6, left: 48,
      }}>
        ← All Concepts
      </Link>
    </nav>
  )
}
