const mockPush = jest.fn()
let mockPathname = '/admin/dashboard'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => mockPathname,
}))

jest.mock('next/link', () => {
  const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  )
  Link.displayName = 'Link'
  return Link
})

import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AdminNav from '@/components/admin/AdminNav'

beforeEach(() => {
  jest.clearAllMocks()
  global.fetch = jest.fn().mockResolvedValue({ ok: true })
})

describe('AdminNav', () => {
  test('renders all nav items', () => {
    render(<AdminNav />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Inquiries')).toBeInTheDocument()
    expect(screen.getByText('Orders')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
  })

  test('nav links have correct hrefs', () => {
    render(<AdminNav />)
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', '/admin/dashboard')
    expect(screen.getByText('Inquiries').closest('a')).toHaveAttribute('href', '/admin/inquiries')
    expect(screen.getByText('Orders').closest('a')).toHaveAttribute('href', '/admin/orders')
    expect(screen.getByText('Analytics').closest('a')).toHaveAttribute('href', '/admin/analytics')
  })

  test('renders Katherine Houston branding', () => {
    render(<AdminNav />)
    expect(screen.getByText('Katherine Houston')).toBeInTheDocument()
    expect(screen.getByText('Admin Portal')).toBeInTheDocument()
  })

  test('renders View Site and Log Out controls', () => {
    render(<AdminNav />)
    expect(screen.getByText(/View Site/i)).toBeInTheDocument()
    expect(screen.getByText(/Log Out/i)).toBeInTheDocument()
  })

  test('calls logout endpoint and redirects on log out click', async () => {
    const user = userEvent.setup()
    render(<AdminNav />)
    await user.click(screen.getByText(/Log Out/i))
    expect(global.fetch).toHaveBeenCalledWith('/api/auth/logout', { method: 'POST' })
    expect(mockPush).toHaveBeenCalledWith('/admin/login')
  })
})
