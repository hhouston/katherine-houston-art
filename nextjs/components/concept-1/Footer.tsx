import Link from 'next/link'

export default function C1Footer() {
  return (
    <>
      <footer style={{ background: '#0D0D0C', color: '#F0EDE8', padding: '72px 60px 0', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60 }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Katherine Houston</div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 240 }}>Abstract painter working in reverse paint on Plexiglas · Houston, Texas</p>
          <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
            <a href="https://instagram.com/katherinehoustonart" target="_blank" rel="noreferrer" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Instagram ↗</a>
          </div>
        </div>
        {[
          { head: 'Works', links: [{ href: '/concept-1/works', l: 'All Works' }, { href: '/concept-1/cube-series', l: 'Cube Series' }, { href: '/concept-1/collect', l: 'Available Works' }] },
          { head: 'Artist', links: [{ href: '/concept-1/about', l: 'About' }, { href: '/concept-1/process', l: 'Process' }, { href: '/concept-1/exhibitions', l: 'Exhibitions' }, { href: '/concept-1/press', l: 'Press' }] },
          { head: 'Contact', links: [{ href: 'mailto:katherineh@usa.net', l: 'Email Katherine' }, { href: '/concept-1/cube-series/inquire', l: 'Cube Series Inquiry' }, { href: '/', l: '← All Concepts' }] },
        ].map(col => (
          <div key={col.head}>
            <h4 style={{ fontSize: '9.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>{col.head}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(l => (
                <li key={l.l}>
                  <Link href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{l.l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ background: '#0D0D0C', padding: '24px 60px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 60 }}>
        <span>© 2026 Katherine Houston. All rights reserved.</span>
        <span>hhouston / katherine-houston-art</span>
      </div>
    </>
  )
}
