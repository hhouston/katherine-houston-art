import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import type { AdminSession } from '@/types'

export const sessionOptions = {
  password: process.env.SESSION_SECRET ?? 'katherine-houston-art-dev-secret-32chars!!',
  cookieName: 'kh-admin-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
  },
}

export async function getSession() {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions)
  return session
}

export async function requireAdmin() {
  const session = await getSession()
  if (!session.adminLoggedIn) {
    return null
  }
  return session
}

export function verifyAdminCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL ?? 'katherineh@usa.net'
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Art@Katherine2024'
  return email === adminEmail && password === adminPassword
}
