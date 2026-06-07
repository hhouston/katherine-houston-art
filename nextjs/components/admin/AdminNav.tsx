'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '⊞' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: '✉' },
  { href: '/admin/orders', label: 'Orders', icon: '◈' },
  { href: '/admin/analytics', label: 'Analytics', icon: '◉' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <aside style={{
      width: 220, flexShrink: 0, background: '#0D0D0C', color: '#F0EDE8',
      display: 'flex', flexDirection: 'column', minHeight: '100vh',
      position: 'sticky', top: 0,
    }}>
      <div style={{ padding: '32px 24px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 300, letterSpacing: '0.1em', marginBottom: 4 }}>
          Katherine Houston
        </div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Admin Portal
        </div>
      </div>

      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {navItems.map(item => {
          const active = pathname.startsWith(item.href)
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '11px 12px', borderRadius: 4, marginBottom: 2,
              textDecoration: 'none', fontSize: 13,
              background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: active ? '#F0EDE8' : 'rgba(255,255,255,0.45)',
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <Link href="/" target="_blank" style={{
          display: 'block', padding: '10px 12px', fontSize: 11,
          color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
        }}>View Site ↗</Link>
        <button onClick={handleLogout} style={{
          display: 'block', width: '100%', textAlign: 'left',
          padding: '10px 12px', fontSize: 11, background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>Log Out</button>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300&display=swap');`}</style>
    </aside>
  )
}
