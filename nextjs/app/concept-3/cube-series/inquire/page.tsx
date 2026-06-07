'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function C3CubeInquirePage() {
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
      body: JSON.stringify({ name: `${form.fname} ${form.lname}`.trim(), email: form.email, phone: form.phone, interest: form.interest || 'single', message: form.message }),
    })
    if (res.ok) setSuccess(true)
    else { const d = await res.json(); setError(d.error ?? 'Something went wrong.') }
    setSubmitting(false)
  }

  const inp = (key: string, type = 'text', ph = '') => (
    <input type={type} value={(form as Record<string, string>)[key]} onChange={e => update(key, e.target.value)} placeholder={ph}
      required={['fname', 'email'].includes(key)}
      style={{ width: '100%', background: '#fff', border: '1px solid rgba(139,69,19,0.2)', color: '#1E1810', fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, padding: '12px 16px', outline: 'none' }} />
  )

  return (
    <div style={{ paddingTop: 90, fontFamily: "'Source Sans 3', sans-serif", background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px 100px' }}>
        <Link href="/concept-3/cube-series" style={{ fontSize: 11, color: '#8B4513', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block', marginBottom: 40 }}>← Back to Cube Series</Link>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, color: '#1E1810', lineHeight: 1.1, marginBottom: 12 }}>
          Inquire About<br /><em>the Cube Series</em>
        </h1>
        <p style={{ fontSize: 15, color: '#6B5A48', lineHeight: 1.8, maxWidth: 500, marginBottom: 48 }}>
          Katherine responds personally to every inquiry and will share availability, colorways, and pricing within 48 hours.
        </p>

        {success ? (
          <div style={{ background: '#fff', padding: '48px', textAlign: 'center', border: '1px solid rgba(139,69,19,0.12)' }}>
            <div style={{ fontSize: 32, color: '#8B4513', marginBottom: 20 }}>✦</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: '#1E1810', marginBottom: 12 }}>Inquiry Received</h2>
            <p style={{ fontSize: 14, color: '#6B5A48', lineHeight: 1.8, marginBottom: 24 }}>Thank you. Katherine will be in touch within 48 hours.</p>
            <Link href="/concept-3" style={{ display: 'inline-block', padding: '12px 28px', background: '#1E1810', color: '#F5F0E8', textDecoration: 'none', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Return Home</Link>
          </div>
        ) : (
          <form onSubmit={submit} style={{ background: '#fff', padding: '48px', border: '1px solid rgba(139,69,19,0.12)', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {error && <p style={{ fontSize: 12, color: '#C62828' }}>{error}</p>}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div><label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>First Name</label>{inp('fname', 'text', 'Jane')}</div>
              <div><label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>Last Name</label>{inp('lname', 'text', 'Smith')}</div>
            </div>
            <div><label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>Email</label>{inp('email', 'email', 'jane@example.com')}</div>
            <div><label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>Phone (optional)</label>{inp('phone', 'tel', '+1 555 000 0000')}</div>
            <div>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>I'm interested in</label>
              <select value={form.interest} onChange={e => update('interest', e.target.value)}
                style={{ width: '100%', background: '#fff', border: '1px solid rgba(139,69,19,0.2)', color: '#1E1810', fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, padding: '12px 16px', outline: 'none', appearance: 'none' }}>
                <option value="">Select one</option>
                <option value="single">A single cube for my collection</option>
                <option value="group">A group / curated set</option>
                <option value="gift">A gift</option>
                <option value="commission">A commissioned colorway</option>
                <option value="corporate">Corporate / hospitality project</option>
                <option value="general">Just learning more</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B4513', marginBottom: 8 }}>Tell Katherine more</label>
              <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="About your space, your taste, or what draws you to the cubes…"
                style={{ width: '100%', minHeight: 120, background: '#fff', border: '1px solid rgba(139,69,19,0.2)', color: '#1E1810', fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, padding: '12px 16px', outline: 'none', resize: 'vertical' }} />
            </div>
            <button type="submit" disabled={submitting} style={{ padding: '15px', background: '#1E1810', color: '#F5F0E8', border: 'none', fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.7 : 1 }}>
              {submitting ? 'Sending…' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
