/**
 * @jest-environment node
 */
jest.mock('@/lib/db', () => ({
  createInquiry: jest.fn(),
  getInquiries: jest.fn(),
}))

jest.mock('@/lib/auth', () => ({
  getSession: jest.fn(),
}))

import { NextRequest } from 'next/server'
import { GET, POST } from '@/app/api/inquiries/route'
import { createInquiry, getInquiries } from '@/lib/db'
import { getSession } from '@/lib/auth'
import type { Inquiry } from '@/types'

const mockCreateInquiry = createInquiry as jest.Mock
const mockGetInquiries = getInquiries as jest.Mock
const mockGetSession = getSession as jest.Mock

function makePost(body: Record<string, unknown>) {
  return new NextRequest('http://localhost/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const validBody = { name: 'Jane Doe', email: 'jane@example.com', interest: 'single', message: 'Hello' }

const createdInquiry: Inquiry = {
  id: 'new-1',
  createdAt: new Date().toISOString(),
  status: 'new',
  replies: [],
  ...validBody,
}

beforeEach(() => jest.clearAllMocks())

describe('POST /api/inquiries', () => {
  test('creates inquiry and returns 201', async () => {
    mockCreateInquiry.mockResolvedValue(createdInquiry)
    const res = await POST(makePost(validBody))
    expect(res.status).toBe(201)
    const data = await res.json()
    expect(data.id).toBe('new-1')
    expect(mockCreateInquiry).toHaveBeenCalledWith(expect.objectContaining({ name: 'Jane Doe' }))
  })

  test('returns 400 when name is missing', async () => {
    const { name: _, ...body } = validBody
    const res = await POST(makePost(body))
    expect(res.status).toBe(400)
    expect(mockCreateInquiry).not.toHaveBeenCalled()
  })

  test('returns 400 when email is missing', async () => {
    const { email: _, ...body } = validBody
    const res = await POST(makePost(body))
    expect(res.status).toBe(400)
  })

  test('returns 400 when interest is missing', async () => {
    const { interest: _, ...body } = validBody
    const res = await POST(makePost(body))
    expect(res.status).toBe(400)
  })
})

describe('GET /api/inquiries', () => {
  test('returns 401 when not authenticated', async () => {
    mockGetSession.mockResolvedValue({ adminLoggedIn: false })
    const req = new NextRequest('http://localhost/api/inquiries')
    const res = await GET()
    expect(res.status).toBe(401)
  })

  test('returns inquiries when authenticated', async () => {
    mockGetSession.mockResolvedValue({ adminLoggedIn: true })
    mockGetInquiries.mockResolvedValue([createdInquiry])
    const res = await GET()
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toHaveLength(1)
    expect(data[0].id).toBe('new-1')
  })
})
