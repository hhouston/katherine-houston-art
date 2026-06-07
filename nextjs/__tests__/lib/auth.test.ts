// Auth functions that touch iron-session / next/headers are not tested here;
// only the pure credential check is testable without a Next.js server context.
jest.mock('iron-session', () => ({ getIronSession: jest.fn() }))
jest.mock('next/headers', () => ({ cookies: jest.fn() }))

import { verifyAdminCredentials } from '@/lib/auth'

const defaultEmail = 'katherineh@usa.net'
const defaultPassword = 'Art@Katherine2024'

describe('verifyAdminCredentials', () => {
  const savedEmail = process.env.ADMIN_EMAIL
  const savedPassword = process.env.ADMIN_PASSWORD

  beforeEach(() => {
    delete process.env.ADMIN_EMAIL
    delete process.env.ADMIN_PASSWORD
  })

  afterAll(() => {
    process.env.ADMIN_EMAIL = savedEmail
    process.env.ADMIN_PASSWORD = savedPassword
  })

  test('returns true for correct default credentials', () => {
    expect(verifyAdminCredentials(defaultEmail, defaultPassword)).toBe(true)
  })

  test('returns false for wrong password', () => {
    expect(verifyAdminCredentials(defaultEmail, 'wrongpassword')).toBe(false)
  })

  test('returns false for wrong email', () => {
    expect(verifyAdminCredentials('wrong@example.com', defaultPassword)).toBe(false)
  })

  test('returns false for both wrong', () => {
    expect(verifyAdminCredentials('a@b.com', 'bad')).toBe(false)
  })

  test('is case-sensitive for email', () => {
    expect(verifyAdminCredentials(defaultEmail.toUpperCase(), defaultPassword)).toBe(false)
  })

  test('uses ADMIN_EMAIL and ADMIN_PASSWORD env vars when set', () => {
    process.env.ADMIN_EMAIL = 'custom@test.com'
    process.env.ADMIN_PASSWORD = 'CustomPass123'

    expect(verifyAdminCredentials('custom@test.com', 'CustomPass123')).toBe(true)
    expect(verifyAdminCredentials(defaultEmail, defaultPassword)).toBe(false)
  })
})
