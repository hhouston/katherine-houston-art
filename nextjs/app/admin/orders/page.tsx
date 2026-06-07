import Link from 'next/link'
import { getOrders } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Orders' }

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending:    { bg: '#FFF3E0', color: '#E65100' },
  paid:       { bg: '#F3F0FB', color: '#5E35B1' },
  processing: { bg: '#E1F5FE', color: '#0277BD' },
  shipped:    { bg: '#E3F2FD', color: '#1565C0' },
  delivered:  { bg: '#E8F5E9', color: '#2E7D32' },
  cancelled:  { bg: '#FFEBEE', color: '#C62828' },
}

export default async function OrdersPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams
  const all = await getOrders()
  const orders = status ? all.filter(o => o.status === status) : all
  const totalRevenue = all.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.amount, 0)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>Orders</h1>
          <p style={{ fontSize: 13, color: '#6B6560' }}>{all.length} total · ${totalRevenue.toLocaleString()} revenue</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[undefined, 'pending', 'paid', 'shipped', 'delivered'].map(s => (
            <Link key={s ?? 'all'} href={s ? `/admin/orders?status=${s}` : '/admin/orders'} style={{
              padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: 2,
              background: (status ?? undefined) === s ? '#0D0D0C' : '#fff',
              color: (status ?? undefined) === s ? '#F0EDE8' : '#6B6560',
              border: '1px solid rgba(0,0,0,0.1)',
            }}>{s ? s.charAt(0).toUpperCase() + s.slice(1) : 'All'}</Link>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
              {['Artwork', 'Buyer', 'Amount', 'Date', 'Status', 'Tracking', ''].map(h => (
                <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B6560', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => {
              const sc = STATUS_COLORS[order.status]
              return (
                <tr key={order.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <td style={{ padding: '14px 20px' }}>
                    <Link href={`/admin/orders/${order.id}`} style={{ textDecoration: 'none' }}>
                      <div style={{ fontSize: 13, color: '#0D0D0C', fontWeight: 400 }}>{order.artworkTitle}</div>
                    </Link>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ fontSize: 13, color: '#0D0D0C' }}>{order.buyerName}</div>
                    <div style={{ fontSize: 11, color: '#6B6560' }}>{order.buyerEmail}</div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 500, color: '#0D0D0C' }}>
                    ${order.amount.toLocaleString()}
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: '#6B6560', whiteSpace: 'nowrap' }}>
                    {new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, ...sc }}>{order.status}</span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: '#6B6560', fontFamily: 'monospace' }}>
                    {order.trackingNumber ?? '—'}
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <Link href={`/admin/orders/${order.id}`} style={{ fontSize: 11, color: '#8B7355', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Open →</Link>
                  </td>
                </tr>
              )
            })}
            {orders.length === 0 && (
              <tr><td colSpan={7} style={{ padding: '48px 20px', textAlign: 'center', fontSize: 13, color: '#6B6560' }}>No orders found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
