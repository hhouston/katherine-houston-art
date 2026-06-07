import { getInquiries, getOrders } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Analytics' }

export default async function AnalyticsPage() {
  const [inquiries, orders] = await Promise.all([getInquiries(), getOrders()])

  const revenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.amount, 0)
  const avgOrder = orders.length ? Math.round(revenue / orders.length) : 0

  const byInterest = inquiries.reduce<Record<string, number>>((acc, inq) => {
    acc[inq.interest] = (acc[inq.interest] ?? 0) + 1
    return acc
  }, {})

  const byStatus = inquiries.reduce<Record<string, number>>((acc, inq) => {
    acc[inq.status] = (acc[inq.status] ?? 0) + 1
    return acc
  }, {})

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>Analytics</h1>
        <p style={{ fontSize: 13, color: '#6B6560' }}>Site performance overview — connect Google Analytics for real-time traffic data.</p>
      </div>

      {/* Revenue summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Revenue', val: `$${revenue.toLocaleString()}` },
          { label: 'Total Orders', val: orders.length },
          { label: 'Avg Order Value', val: `$${avgOrder.toLocaleString()}` },
          { label: 'Conversion Rate', val: `${inquiries.length ? Math.round((orders.length / inquiries.length) * 100) : 0}%` },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', padding: '24px 28px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#0D0D0C' }}>{s.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        {/* Inquiry breakdown */}
        <div style={{ background: '#fff', padding: '24px 28px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#0D0D0C', marginBottom: 20 }}>Inquiries by Interest</div>
          {Object.entries(byInterest).map(([k, v]) => (
            <div key={k} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: '#0D0D0C', textTransform: 'capitalize' }}>{k.replace('-', ' ')}</span>
                <span style={{ fontSize: 13, color: '#6B6560' }}>{v}</span>
              </div>
              <div style={{ height: 4, background: '#F0EDE8', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${(v / inquiries.length) * 100}%`, background: '#8B7355', borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry status */}
        <div style={{ background: '#fff', padding: '24px 28px', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#0D0D0C', marginBottom: 20 }}>Inquiries by Status</div>
          {Object.entries(byStatus).map(([k, v]) => (
            <div key={k} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: '#0D0D0C', textTransform: 'capitalize' }}>{k}</span>
                <span style={{ fontSize: 13, color: '#6B6560' }}>{v}</span>
              </div>
              <div style={{ height: 4, background: '#F0EDE8', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${(v / inquiries.length) * 100}%`, background: '#0D0D0C', borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Analytics setup prompt */}
      <div style={{ background: '#FFF9EC', border: '1px solid rgba(139,115,85,0.2)', padding: '24px 28px', borderRadius: 2 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#0D0D0C', marginBottom: 8 }}>Connect Google Analytics for traffic data</div>
        <p style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>
          To see page views, traffic sources, and visitor behavior, add your Google Analytics measurement ID to your environment variables:
        </p>
        <code style={{ display: 'block', marginTop: 12, padding: '10px 14px', background: '#F0EDE8', fontSize: 12, color: '#0D0D0C', borderRadius: 2 }}>
          NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
        </code>
      </div>
    </>
  )
}
