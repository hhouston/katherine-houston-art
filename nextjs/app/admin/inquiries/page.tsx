import Link from 'next/link'
import { getInquiries } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Inquiries' }

const STATUS_LABELS: Record<string, string> = { new: 'New', read: 'Read', replied: 'Replied', closed: 'Closed' }
const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  new:     { bg: '#FFF3E0', color: '#E65100' },
  read:    { bg: '#F3F0FB', color: '#5E35B1' },
  replied: { bg: '#E8F5E9', color: '#2E7D32' },
  closed:  { bg: '#F5F5F5', color: '#6B6560' },
}

export default async function InquiriesPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams
  const all = await getInquiries()
  const inquiries = status ? all.filter(i => i.status === status) : all

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#0D0D0C', marginBottom: 4 }}>Inquiries</h1>
          <p style={{ fontSize: 13, color: '#6B6560' }}>{all.length} total · {all.filter(i => i.status === 'new').length} new</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[undefined, 'new', 'replied', 'read', 'closed'].map(s => (
            <Link key={s ?? 'all'} href={s ? `/admin/inquiries?status=${s}` : '/admin/inquiries'} style={{
              padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: 2,
              background: (status ?? undefined) === s ? '#0D0D0C' : '#fff',
              color: (status ?? undefined) === s ? '#F0EDE8' : '#6B6560',
              border: '1px solid rgba(0,0,0,0.1)',
            }}>
              {s ? STATUS_LABELS[s] : 'All'}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 2, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
              {['Name', 'Email', 'Interest', 'Date', 'Status', ''].map(h => (
                <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B6560', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inquiries.map(inq => (
              <tr key={inq.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)', transition: 'background 0.1s' }}>
                <td style={{ padding: '14px 20px' }}>
                  <span style={{ fontSize: 13, color: '#0D0D0C', fontWeight: 400 }}>{inq.name}</span>
                </td>
                <td style={{ padding: '14px 20px', fontSize: 13, color: '#6B6560' }}>{inq.email}</td>
                <td style={{ padding: '14px 20px', fontSize: 12, color: '#6B6560', maxWidth: 200 }}>
                  <span style={{ textTransform: 'capitalize' }}>{inq.interest.replace('-', ' ')}</span>
                </td>
                <td style={{ padding: '14px 20px', fontSize: 12, color: '#6B6560', whiteSpace: 'nowrap' }}>
                  {new Date(inq.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <span style={{
                    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2,
                    ...STATUS_COLORS[inq.status],
                  }}>{STATUS_LABELS[inq.status]}</span>
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <Link href={`/admin/inquiries/${inq.id}`} style={{
                    fontSize: 11, color: '#8B7355', textDecoration: 'none',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>Open →</Link>
                </td>
              </tr>
            ))}
            {inquiries.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '48px 20px', textAlign: 'center', fontSize: 13, color: '#6B6560' }}>No inquiries found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
