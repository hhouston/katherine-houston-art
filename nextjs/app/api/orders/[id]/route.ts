import { NextRequest, NextResponse } from 'next/server'
import { getOrder, updateOrder } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const order = await getOrder(id)
  if (!order) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(order)
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const updates = await req.json()
  const order = await updateOrder(id, updates)
  if (!order) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(order)
}
