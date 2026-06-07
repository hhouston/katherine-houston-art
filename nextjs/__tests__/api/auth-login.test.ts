/**
 * @jest-environment node
 */
const mockSave = jest.fn().mockResolvedValue(undefined)
const mockSession = { adminLoggedIn: false, save: mockSave }

jest.mock('@/lib/auth', () => ({
  verifyAdminCredentials: jest.fn(),
  getSession: jest.fn(),
}))

import { NextRequest } from 'next/server'
import { POST } from '@/app/api/auth/login/route'
import { verifyAdminCredentials, getSession } from '@/lib/auth'

const mockVerify = verifyAdminCredentials as jest.Mock
const mockGetSession = getSession as jest.Mock

function makePost(body: Record<string, unknown>) {
  return new NextRequest('http://localhost/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

beforeEach(() => {
  jest.clearAllMocks()
  mockGetSession.mockResolvedValue({ ...mockSession, save: mockSave })
})

describe('POST /api/auth/login', () => {
  test('returns 200 and sets session for valid credentials', async () => {
    mockVerify.mockReturnValue(true)
    const session = { adminLoggedIn: false, save: mockSave }
    mockGetSession.mockResolvedValue(session)

    const res = await POST(makePost({ email: 'admin@example.com', password: 'secret' }))
    expect(res.status).toBe(200)
    expect(session.adminLoggedIn).toBe(true)
    expect(mockSave).toHaveBeenCalled()
  })

  test('returns 401 for invalid credentials', async () => {
    mockVerify.mockReturnValue(false)
    const res = await POST(makePost({ email: 'bad@example.com', password: 'wrong' }))
    expect(res.status).toBe(401)
    expect(mockSave).not.toHaveBeenCalled()
  })

  test('calls verifyAdminCredentials with provided email and password', async () => {
    mockVerify.mockReturnValue(false)
    await POST(makePost({ email: 'test@example.com', password: 'pass' }))
    expect(mockVerify).toHaveBeenCalledWith('test@example.com', 'pass')
  })
})
