import { NextRequest, NextResponse } from 'next/server'
import { getInquiry, updateInquiry, addReplyToInquiry } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const inquiry = await getInquiry(id)
  if (!inquiry) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(inquiry)
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const body = await req.json()

  let updated
  if (body.action === 'reply') {
    updated = await addReplyToInquiry(id, body.body)
  } else if (body.action === 'status') {
    updated = await updateInquiry(id, { status: body.status })
  } else if (body.action === 'notes') {
    updated = await updateInquiry(id, { adminNotes: body.adminNotes })
  } else {
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  }

  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(updated)
}
