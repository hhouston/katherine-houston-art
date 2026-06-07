import { NextRequest, NextResponse } from 'next/server'
import { getSession, verifyAdminCredentials } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }
  const session = await getSession()
  session.adminLoggedIn = true
  await session.save()
  return NextResponse.json({ ok: true })
}
