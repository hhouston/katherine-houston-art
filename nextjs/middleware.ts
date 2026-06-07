import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getIronSession } from 'iron-session'
import type { AdminSession } from '@/types'

export const config = {
  matcher: ['/admin/:path*'],
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') return NextResponse.next()

  const response = NextResponse.next()
  const session = await getIronSession<AdminSession>(request, response, {
    password: process.env.SESSION_SECRET ?? 'katherine-houston-art-dev-secret-32chars!!',
    cookieName: 'kh-admin-session',
  })

  if (!session.adminLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return response
}
