import Link from 'next/link'

const links = [
  { href: '/concept-1/works', label: 'Works' },
  { href: '/concept-1/about', label: 'About' },
  { href: '/concept-1/process', label: 'Process' },
  { href: '/concept-1/exhibitions', label: 'Exhibitions' },
  { href: '/concept-1/press', label: 'Press' },
]

export default function C1Nav() {
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 60px',
        background: 'rgba(250,250,248,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <Link href="/concept-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 300, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0D0D0C', textDecoration: 'none' }}>
          Katherine Houston
        </Link>
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{ fontSize: '10.5px', letterSpacing: '0.17em', textTransform: 'uppercase', color: '#0D0D0C', textDecoration: 'none', fontWeight: 400 }}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/concept-1/collect" style={{ fontSize: '10.5px', letterSpacing: '0.17em', textTransform: 'uppercase', color: '#FAFAF8', textDecoration: 'none', fontWeight: 400, padding: '9px 24px', background: '#0D0D0C' }}>
              Collect
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
