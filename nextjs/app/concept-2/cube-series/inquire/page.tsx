'use client'
import Link from 'next/link'
import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 16px',
  background: '#111110', border: '1px solid rgba(201,168,76,0.2)',
  color: '#F0EDE8', fontSize: 14, fontFamily: "'Montserrat', sans-serif",
  fontWeight: 300, outline: 'none', boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 10, letterSpacing: '0.22em',
  textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: 8,
}

export default function Concept2CubeInquire() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          interest: 'single',
          artworkSlug: 'cube-series',
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        fontFamily: "'Montserrat', sans-serif",
        padding: '120px 80px', textAlign: 'center',
        minHeight: '60vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 64,
          fontWeight: 300, color: '#C9A84C', marginBottom: 24,
        }}>
          Thank you.
        </div>
        <p style={{ fontSize: 15, color: 'rgba(240,237,232,0.6)', lineHeight: 1.9, maxWidth: 440, fontWeight: 300, marginBottom: 40 }}>
          Your inquiry has been received. Katherine's studio typically responds within 48 hours.
        </p>
        <Link href="/concept-2/cube-series" style={{
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(240,237,232,0.4)', textDecoration: 'none',
        }}>
          ← Back to Cube Series
        </Link>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '60px 80px 100px' }}>
      <Link href="/concept-2/cube-series" style={{
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'rgba(240,237,232,0.4)', textDecoration: 'none', display: 'inline-block', marginBottom: 48,
      }}>
        ← Cube Series
      </Link>

      <div style={{ maxWidth: 600 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Inquire
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 52,
          fontWeight: 300, color: '#F0EDE8', lineHeight: 1.1, marginBottom: 16,
        }}>
          Cube Series Inquiry
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.5)', lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
          All cube works are available by inquiry only. Please share your interest and any installation context — Katherine responds personally to every message.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input
                name="name" value={form.name} onChange={handleChange}
                required style={inputStyle} placeholder="Your name"
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                required style={inputStyle} placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Phone</label>
            <input
              name="phone" value={form.phone} onChange={handleChange}
              style={inputStyle} placeholder="Optional"
            />
          </div>

          <div>
            <label style={labelStyle}>Message *</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              required rows={6}
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="Tell us about your interest — installation space, size preference, timeline..."
            />
          </div>

          {status === 'error' && (
            <div style={{
              padding: '12px 16px', background: 'rgba(180,40,40,0.1)',
              border: '1px solid rgba(180,40,40,0.3)', fontSize: 12,
              color: 'rgba(240,180,180,0.9)',
            }}>
              Something went wrong. Please try again or email the studio directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '16px 48px',
              background: status === 'loading' ? 'rgba(201,168,76,0.5)' : '#C9A84C',
              color: '#0E0E0C', border: 'none',
              cursor: status === 'loading' ? 'default' : 'pointer',
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              fontWeight: 500, fontFamily: "'Montserrat', sans-serif",
              alignSelf: 'flex-start',
            }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}
