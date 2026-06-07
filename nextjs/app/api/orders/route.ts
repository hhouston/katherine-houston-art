import { NextRequest, NextResponse } from 'next/server'
import { getOrders, createOrder } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  if (!session.adminLoggedIn) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const orders = await getOrders()
  return NextResponse.json(orders)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const order = await createOrder({
    ...body,
    status: 'pending',
    currency: 'USD',
  })
  return NextResponse.json(order, { status: 201 })
}
