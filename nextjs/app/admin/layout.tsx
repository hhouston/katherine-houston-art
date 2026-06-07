'use client'
import { usePathname } from 'next/navigation'
import AdminNav from '@/components/admin/AdminNav'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLogin = pathname === '/admin/login'

  if (isLogin) return <>{children}</>

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", background: '#F4F3F0' }}>
      <AdminNav />
      <main style={{ flex: 1, padding: '40px 48px', overflowX: 'hidden' }}>
        {children}
      </main>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@300;400&display=swap" rel="stylesheet" />
    </div>
  )
}
