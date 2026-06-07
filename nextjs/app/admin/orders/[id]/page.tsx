'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import type { Order } from '@/types'

const STATUSES = ['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled']
const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending:    { bg: '#FFF3E0', color: '#E65100' },
  paid:       { bg: '#F3F0FB', color: '#5E35B1' },
  processing: { bg: '#E1F5FE', color: '#0277BD' },
  shipped:    { bg: '#E3F2FD', color: '#1565C0' },
  delivered:  { bg: '#E8F5E9', color: '#2E7D32' },
  cancelled:  { bg: '#FFEBEE', color: '#C62828' },
}

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [order, setOrder] = useState<Order | null>(null)
  const [tracking, setTracking] = useState('')
  const [carrier, setCarrier] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch(`/api/orders/${id}`).then(r => r.json()).then((d: Order) => {
      setOrder(d)
      setTracking(d.trackingNumber ?? '')
      setCarrier(d.trackingCarrier ?? '')
      setNotes(d.adminNotes ?? '')
    })
  }, [id])

  async function updateOrder(updates: Partial<Order>) {
    setSaving(true)
    const res = await fetch(`/api/orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
    const updated = await res.json()
    setOrder(updated)
    setSaving(false)
  }

  if (!order) return <p style={{ color: '#6B6560', fontSize: 13 }}>Loading…</p>

  const sc = STATUS_COLORS[order.status]

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <Link href="/admin/orders" style={{ fontSize: 11, color: '#6B6560', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>← Orders</Link>
        <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
        <span style={{ fontSize: 11, color: '#6B6560' }}>{order.artworkTitle}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
        {/* Main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Order summary */}
          <div style={{ background: '#fff', padding: '28px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
              <div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>{order.artworkTitle}</h1>
                <p style={{ fontSize: 13, color: '#6B6560' }}>Order #{order.id.split('-')[0]}</p>
              </div>
              <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 2, ...sc }}>{order.status}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {[
                { label: 'Amount', val: `$${order.amount.toLocaleString()} ${order.currency}` },
                { label: 'Ordered', val: new Date(order.createdAt).toLocaleDateString('en-US', { dateStyle: 'medium' }) },
                { label: 'Payment', val: order.stripePaymentIntentId ?? 'Manual' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 14, color: '#0D0D0C', fontFamily: 'monospace' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer */}
          <div style={{ background: '#fff', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Buyer</div>
            <div style={{ fontSize: 14, color: '#0D0D0C', marginBottom: 4 }}>{order.buyerName}</div>
            <a href={`mailto:${order.buyerEmail}`} style={{ fontSize: 13, color: '#8B7355', textDecoration: 'none' }}>{order.buyerEmail}</a>
            {order.shippingAddress && (
              <address style={{ marginTop: 16, fontSize: 13, color: '#6B6560', fontStyle: 'normal', lineHeight: 1.7 }}>
                {order.shippingAddress.line1}<br />
                {order.shippingAddress.line2 && <>{order.shippingAddress.line2}<br /></>}
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}<br />
                {order.shippingAddress.country}
              </address>
            )}
          </div>

          {/* Shipping */}
          <div style={{ background: '#fff', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Shipping</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, color: '#6B6560', marginBottom: 8 }}>Tracking Number</label>
                <input value={tracking} onChange={e => setTracking(e.target.value)} placeholder="1Z999AA1012345678"
                  style={{ width: '100%', fontFamily: "'Inter', sans-serif", fontSize: 13, border: '1px solid rgba(0,0,0,0.12)', padding: '10px 12px', outline: 'none', color: '#0D0D0C' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 11, color: '#6B6560', marginBottom: 8 }}>Carrier</label>
                <select value={carrier} onChange={e => setCarrier(e.target.value)}
                  style={{ width: '100%', fontFamily: "'Inter', sans-serif", fontSize: 13, border: '1px solid rgba(0,0,0,0.12)', padding: '10px 12px', outline: 'none', color: '#0D0D0C', background: '#fff', appearance: 'none' }}>
                  <option value="">Select carrier</option>
                  {['UPS', 'FedEx', 'USPS', 'DHL', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <button onClick={() => updateOrder({ trackingNumber: tracking, trackingCarrier: carrier })} disabled={saving}
              style={{ padding: '10px 24px', background: '#0D0D0C', color: '#F0EDE8', border: 'none', fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2 }}>
              {saving ? 'Saving…' : 'Save Tracking'}
            </button>
          </div>

          {/* Admin notes */}
          <div style={{ background: '#fff', padding: '24px 32px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 12 }}>Private Notes</div>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Internal notes…"
              style={{ width: '100%', minHeight: 100, fontFamily: "'Inter', sans-serif", fontSize: 13, border: '1px solid rgba(0,0,0,0.1)', padding: '10px 12px', outline: 'none', color: '#0D0D0C', resize: 'vertical' }} />
            <button onClick={() => updateOrder({ adminNotes: notes })} disabled={saving}
              style={{ marginTop: 8, padding: '8px 20px', background: 'transparent', color: '#8B7355', border: '1px solid rgba(139,115,85,0.4)', fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2 }}>
              Save Notes
            </button>
          </div>
        </div>

        {/* Sidebar — status */}
        <div style={{ background: '#fff', padding: '24px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', alignSelf: 'start' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>Update Status</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {STATUSES.map(s => (
              <button key={s} onClick={() => updateOrder({ status: s as Order['status'] })} style={{
                padding: '10px 14px', textAlign: 'left', border: '1px solid rgba(0,0,0,0.1)',
                background: order.status === s ? '#0D0D0C' : '#fff',
                color: order.status === s ? '#F0EDE8' : '#6B6560',
                fontSize: 12, textTransform: 'capitalize', cursor: 'pointer', borderRadius: 2,
                fontFamily: "'Inter', sans-serif",
              }}>{s}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
