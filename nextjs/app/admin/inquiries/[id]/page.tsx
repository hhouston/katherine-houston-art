'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Inquiry } from '@/types'

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  new:     { bg: '#FFF3E0', color: '#E65100' },
  read:    { bg: '#F3F0FB', color: '#5E35B1' },
  replied: { bg: '#E8F5E9', color: '#2E7D32' },
  closed:  { bg: '#F5F5F5', color: '#6B6560' },
}

export default function InquiryDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [replyText, setReplyText] = useState('')
  const [sending, setSending] = useState(false)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    fetch(`/api/inquiries/${id}`).then(r => r.json()).then(d => {
      setInquiry(d)
      setNotes(d.adminNotes ?? '')
    })
  }, [id])

  async function sendReply() {
    if (!replyText.trim()) return
    setSending(true)
    const res = await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reply', body: replyText }),
    })
    const updated = await res.json()
    setInquiry(updated)
    setReplyText('')
    setSending(false)
  }

  async function updateStatus(status: string) {
    const res = await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'status', status }),
    })
    const updated = await res.json()
    setInquiry(updated)
  }

  async function saveNotes() {
    await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'notes', adminNotes: notes }),
    })
  }

  if (!inquiry) return <p style={{ color: '#6B6560', fontSize: 13 }}>Loading…</p>

  const sc = STATUS_COLORS[inquiry.status]

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <Link href="/admin/inquiries" style={{ fontSize: 11, color: '#6B6560', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>← Inquiries</Link>
        <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
        <span style={{ fontSize: 11, color: '#6B6560' }}>{inquiry.name}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        {/* Main */}
        <div>
          {/* Header */}
          <div style={{ background: '#fff', padding: '28px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>{inquiry.name}</h1>
                <a href={`mailto:${inquiry.email}`} style={{ fontSize: 13, color: '#8B7355', textDecoration: 'none' }}>{inquiry.email}</a>
                {inquiry.phone && <span style={{ fontSize: 13, color: '#6B6560', marginLeft: 16 }}>{inquiry.phone}</span>}
              </div>
              <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 2, ...sc }}>{inquiry.status}</span>
            </div>
            <div style={{ fontSize: 11, color: '#6B6560', marginBottom: 8 }}>
              <strong style={{ color: '#0D0D0C' }}>Interest:</strong> {inquiry.interest}
              {' · '}
              <strong style={{ color: '#0D0D0C' }}>Received:</strong> {new Date(inquiry.createdAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
            </div>
          </div>

          {/* Original message */}
          <div style={{ background: '#fff', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', marginBottom: 16 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Message</div>
            <p style={{ fontSize: 14, color: '#0D0D0C', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{inquiry.message}</p>
          </div>

          {/* Replies */}
          {inquiry.replies.map(reply => (
            <div key={reply.id} style={{ background: '#F4F9F4', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2E7D32' }}>Reply sent</span>
                <span style={{ fontSize: 11, color: '#6B6560' }}>{new Date(reply.sentAt).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}</span>
              </div>
              <p style={{ fontSize: 14, color: '#0D0D0C', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{reply.body}</p>
            </div>
          ))}

          {/* Reply form */}
          <div style={{ background: '#fff', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Reply to {inquiry.name}</div>
            <textarea
              value={replyText} onChange={e => setReplyText(e.target.value)}
              placeholder={`Hi ${inquiry.name.split(' ')[0]}, thank you for your interest…`}
              style={{
                width: '100%', minHeight: 160, fontFamily: "'Inter', sans-serif", fontSize: 14,
                border: '1px solid rgba(0,0,0,0.12)', padding: '14px 16px', outline: 'none',
                color: '#0D0D0C', background: '#FAFAF8', resize: 'vertical',
              }}
            />
            <button onClick={sendReply} disabled={sending || !replyText.trim()} style={{
              marginTop: 12, padding: '12px 28px', background: '#0D0D0C', color: '#F0EDE8',
              border: 'none', fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', cursor: 'pointer', opacity: (sending || !replyText.trim()) ? 0.5 : 1,
            }}>
              {sending ? 'Sending…' : 'Send Reply'}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Status */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Status</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['new', 'read', 'replied', 'closed'].map(s => (
                <button key={s} onClick={() => updateStatus(s)} style={{
                  padding: '10px 14px', textAlign: 'left', border: '1px solid rgba(0,0,0,0.1)',
                  background: inquiry.status === s ? '#0D0D0C' : '#fff',
                  color: inquiry.status === s ? '#F0EDE8' : '#6B6560',
                  fontSize: 12, textTransform: 'capitalize', cursor: 'pointer', borderRadius: 2,
                  fontFamily: "'Inter', sans-serif",
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Admin notes */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 12 }}>Private Notes</div>
            <textarea
              value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="Notes visible only to you…"
              style={{
                width: '100%', minHeight: 100, fontFamily: "'Inter', sans-serif", fontSize: 13,
                border: '1px solid rgba(0,0,0,0.1)', padding: '10px 12px', outline: 'none',
                color: '#0D0D0C', background: '#FAFAF8', resize: 'vertical',
              }}
            />
            <button onClick={saveNotes} style={{
              marginTop: 8, padding: '8px 16px', background: 'transparent', color: '#8B7355',
              border: '1px solid rgba(139,115,85,0.4)', fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2,
            }}>Save Notes</button>
          </div>
        </div>
      </div>
    </>
  )
}
