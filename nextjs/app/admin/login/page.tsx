'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      const { error: msg } = await res.json()
      setError(msg ?? 'Invalid credentials')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0D0D0C', fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: 400, padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 300, color: '#F0EDE8', letterSpacing: '0.1em', marginBottom: 8 }}>
            Katherine Houston
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Admin Portal
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>
              Email
            </label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              required autoComplete="email"
              style={{
                width: '100%', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)', color: '#F0EDE8',
                fontFamily: "'Inter', sans-serif", fontSize: 14, padding: '14px 16px', outline: 'none',
              }}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>
              Password
            </label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              required autoComplete="current-password"
              style={{
                width: '100%', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)', color: '#F0EDE8',
                fontFamily: "'Inter', sans-serif", fontSize: 14, padding: '14px 16px', outline: 'none',
              }}
              placeholder="••••••••••"
            />
          </div>

          {error && <p style={{ fontSize: 12, color: '#ff6677', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', marginTop: 8,
            background: '#F0EDE8', color: '#0D0D0C', border: 'none',
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.2em',
            textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
          }}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
          This page is not publicly linked. For Katherine's use only.
        </p>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Playfair+Display:wght@300&display=swap" rel="stylesheet" />
    </div>
  )
}
