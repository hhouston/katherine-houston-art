import Link from 'next/link'
import { getInquiries, getOrders } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard' }

function StatCard({ label, value, sub, href, color }: { label: string; value: string | number; sub?: string; href?: string; color?: string }) {
  const card = (
    <div style={{
      background: '#fff', padding: '28px 32px', borderRadius: 2,
      border: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 12 }}>{label}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: color ?? '#0D0D0C', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: '#6B6560', marginTop: 8 }}>{sub}</div>}
    </div>
  )
  return href ? <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>{card}</Link> : card
}

export default async function DashboardPage() {
  const [inquiries, orders] = await Promise.all([getInquiries(), getOrders()])

  const newInquiries = inquiries.filter(i => i.status === 'new').length
  const totalRevenue = orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + o.amount, 0)
  const pendingOrders = orders.filter(o => ['pending', 'paid', 'processing'].includes(o.status)).length

  const recentInquiries = inquiries.slice(0, 5)
  const recentOrders = orders.slice(0, 5)

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>
          Good morning, Katherine
        </h1>
        <p style={{ fontSize: 13, color: '#6B6560' }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 40 }}>
        <StatCard label="New Inquiries" value={newInquiries} sub={`${inquiries.length} total`} href="/admin/inquiries" color={newInquiries > 0 ? '#8B4513' : undefined} />
        <StatCard label="Open Orders" value={pendingOrders} sub={`${orders.length} total`} href="/admin/orders" />
        <StatCard label="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} sub="All time" />
        <StatCard label="Shipped Orders" value={orders.filter(o => o.status === 'shipped').length} sub={`${orders.filter(o => o.status === 'delivered').length} delivered`} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Recent Inquiries */}
        <div style={{ background: '#fff', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 13, fontWeight: 500, color: '#0D0D0C' }}>Recent Inquiries</h2>
            <Link href="/admin/inquiries" style={{ fontSize: 11, color: '#8B7355', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>View all →</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {recentInquiries.map(inq => (
                <tr key={inq.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <td style={{ padding: '14px 24px' }}>
                    <Link href={`/admin/inquiries/${inq.id}`} style={{ textDecoration: 'none' }}>
                      <div style={{ fontSize: 13, color: '#0D0D0C', fontWeight: 400, marginBottom: 2 }}>{inq.name}</div>
                      <div style={{ fontSize: 11, color: '#6B6560' }}>{inq.email}</div>
                    </Link>
                  </td>
                  <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                    <span style={{
                      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2,
                      background: inq.status === 'new' ? '#FFF3E0' : inq.status === 'replied' ? '#E8F5E9' : '#F5F5F5',
                      color: inq.status === 'new' ? '#E65100' : inq.status === 'replied' ? '#2E7D32' : '#6B6560',
                    }}>{inq.status}</span>
                  </td>
                  <td style={{ padding: '14px 24px 14px 0', fontSize: 11, color: '#6B6560', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {new Date(inq.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Orders */}
        <div style={{ background: '#fff', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 13, fontWeight: 500, color: '#0D0D0C' }}>Recent Orders</h2>
            <Link href="/admin/orders" style={{ fontSize: 11, color: '#8B7355', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>View all →</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <td style={{ padding: '14px 24px' }}>
                    <Link href={`/admin/orders/${order.id}`} style={{ textDecoration: 'none' }}>
                      <div style={{ fontSize: 13, color: '#0D0D0C', fontWeight: 400, marginBottom: 2 }}>{order.artworkTitle}</div>
                      <div style={{ fontSize: 11, color: '#6B6560' }}>{order.buyerName}</div>
                    </Link>
                  </td>
                  <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                    <span style={{
                      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2,
                      background: order.status === 'shipped' ? '#E3F2FD' : order.status === 'delivered' ? '#E8F5E9' : '#FFF3E0',
                      color: order.status === 'shipped' ? '#1565C0' : order.status === 'delivered' ? '#2E7D32' : '#E65100',
                    }}>{order.status}</span>
                  </td>
                  <td style={{ padding: '14px 24px 14px 0', fontSize: 12, color: '#0D0D0C', textAlign: 'right', fontWeight: 500 }}>
                    ${order.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {recentOrders.length === 0 && (
            <p style={{ padding: '32px 24px', fontSize: 13, color: '#6B6560', textAlign: 'center' }}>No orders yet.</p>
          )}
        </div>
      </div>
    </>
  )
}
