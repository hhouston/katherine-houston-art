import { NextRequest, NextResponse } from 'next/server'
import { getInquiries, createInquiry } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const inquiries = await getInquiries()
  return NextResponse.json(inquiries)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, interest, message, artworkSlug } = body
  if (!name || !email || !interest) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  const inquiry = await createInquiry({ name, email, phone, interest, message, artworkSlug })
  return NextResponse.json(inquiry, { status: 201 })
}
