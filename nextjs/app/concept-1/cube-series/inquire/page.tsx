'use client'
import { useState } from 'react'
import Link from 'next/link'
import { cubeImages } from '@/lib/data'

export default function CubeInquirePage() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', interest: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function update(k: string, v: string) { setForm(f => ({ ...f, [k]: v })) }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${form.fname} ${form.lname}`.trim(),
        email: form.email,
        phone: form.phone,
        interest: form.interest || 'single',
        message: form.message,
      }),
    })
    if (res.ok) {
      setSuccess(true)
    } else {
      const d = await res.json()
      setError(d.error ?? 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  const inp = (key: string, type = 'text', placeholder = '') => (
    <input type={type} value={(form as Record<string, string>)[key]} onChange={e => update(key, e.target.value)}
      placeholder={placeholder} required={['fname', 'email', 'interest'].includes(key)}
      style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#F0EDE8', fontFamily: "'Inter', sans-serif", fontSize: 14, padding: '14px 16px', outline: 'none' }} />
  )

  return (
    <div style={{ paddingTop: 90, fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: '#0D0D0C', padding: '80px 60px 0', color: '#F0EDE8', textAlign: 'center' }}>
        <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Sculpture Series</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, lineHeight: 1.06, marginBottom: 20 }}>The Cube <em>Series</em></h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto 60px', lineHeight: 1.8 }}>Hand-painted Plexiglas sculptures. Each is unique. Available by inquiry only.</p>
      </div>

      {/* Gallery */}
      <div style={{ display: 'flex', gap: 4, overflow: 'hidden', background: '#0D0D0C' }}>
        {cubeImages.slice(0, 5).map(img => (
          <img key={img.src} src={img.src} alt={img.alt} style={{ flex: '1 1 0', height: 240, objectFit: 'cover', display: 'block' }} />
        ))}
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 100, padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
        {/* Left — about */}
        <div>
          <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 20 }}>About the Series</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, lineHeight: 1.18, marginBottom: 32 }}>Painting, made<br /><em>sculptural</em></h2>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 20 }}>The Cube Series extends Katherine's signature reverse-painting technique into three dimensions. Each cube is built from hand-cut Plexiglas panels that she paints from the back, then assembled into a precise six-sided sculptural form.</p>
          <p style={{ color: '#6B6560', lineHeight: 1.9, marginBottom: 40 }}>Light enters through the transparent acrylic and bounces between the painted surfaces — the result is a sculpture that shifts in character with every change in ambient light.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(0,0,0,0.06)', marginBottom: 60 }}>
            {[['Medium', 'Reverse-painted Plexiglas'], ['Dimensions', '6" × 6" × 6" standard'], ['Availability', 'Limited — by inquiry'], ['Edition', 'Each is unique']].map(([k, v]) => (
              <div key={k} style={{ background: '#FAFAF8', padding: '20px 24px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B7355', marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 14, color: '#0D0D0C' }}>{v}</div>
              </div>
            ))}
          </div>

          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'italic', color: '#0D0D0C', borderLeft: '2px solid #8B7355', paddingLeft: 24, lineHeight: 1.7 }}>
            "Each cube is six paintings in one object. Every angle reveals something new."
          </blockquote>
        </div>

        {/* Right — form */}
        <div style={{ background: '#0D0D0C', padding: '48px', color: '#F0EDE8' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 24 }}>✦</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, marginBottom: 16 }}>Inquiry Received</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>Thank you. Katherine will respond personally within 48 hours with availability, colorway options, and pricing.</p>
              <Link href="/concept-1" style={{ display: 'inline-block', marginTop: 32, padding: '12px 24px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                ← Return Home
              </Link>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '9.5px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Private Inquiry</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, lineHeight: 1.3, marginBottom: 10 }}>Inquire About<br />the Cube Series</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 36 }}>Katherine responds personally. She'll share availability, colorway options, and pricing.</p>

              {error && <p style={{ fontSize: 12, color: '#ff6677', marginBottom: 16 }}>{error}</p>}

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>First Name</label>{inp('fname', 'text', 'Jane')}</div>
                  <div><label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Last Name</label>{inp('lname', 'text', 'Smith')}</div>
                </div>
                <div><label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Email</label>{inp('email', 'email', 'jane@example.com')}</div>
                <div><label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Phone (optional)</label>{inp('phone', 'tel', '+1 (555) 000-0000')}</div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Area of Interest</label>
                  <select value={form.interest} onChange={e => update('interest', e.target.value)} required
                    style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#F0EDE8', fontFamily: "'Inter', sans-serif", fontSize: 14, padding: '14px 16px', outline: 'none', appearance: 'none' }}>
                    <option value="" disabled>Select one</option>
                    <option value="single">A single cube</option>
                    <option value="group">A group / curated set</option>
                    <option value="commission">A commissioned colorway</option>
                    <option value="gift">A gift</option>
                    <option value="corporate">Corporate / hospitality</option>
                    <option value="general">General information</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Message</label>
                  <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell Katherine about your space, taste, or what draws you to the cubes…"
                    style={{ width: '100%', minHeight: 120, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#F0EDE8', fontFamily: "'Inter', sans-serif", fontSize: 14, padding: '14px 16px', outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" disabled={submitting}
                  style={{ width: '100%', padding: '16px', background: '#FAFAF8', color: '#0D0D0C', border: 'none', fontFamily: "'Inter', sans-serif", fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? 'Sending…' : 'Send Inquiry'}
                </button>
              </form>
              <p style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.7 }}>Your information is never shared. Katherine reads every inquiry personally.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
