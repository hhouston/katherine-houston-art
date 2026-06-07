jest.mock('stripe', () => jest.fn().mockImplementation(() => ({})))

import { formatPrice, dollarsToStripe } from '@/lib/stripe'

describe('formatPrice', () => {
  test('formats cents as USD currency', () => {
    expect(formatPrice(480000)).toBe('$4,800.00')
  })

  test('formats small amounts', () => {
    expect(formatPrice(100)).toBe('$1.00')
  })

  test('formats zero', () => {
    expect(formatPrice(0)).toBe('$0.00')
  })

  test('formats amounts with cents', () => {
    expect(formatPrice(99950)).toBe('$999.50')
  })
})

describe('dollarsToStripe', () => {
  test('converts whole dollar amounts to cents', () => {
    expect(dollarsToStripe(4800)).toBe(480000)
    expect(dollarsToStripe(1)).toBe(100)
    expect(dollarsToStripe(0)).toBe(0)
  })

  test('rounds fractional results', () => {
    expect(dollarsToStripe(9.99)).toBe(999)
    expect(dollarsToStripe(4800.50)).toBe(480050)
  })

  test('dollarsToStripe and formatPrice are inverse', () => {
    const dollars = 3200
    const cents = dollarsToStripe(dollars)
    expect(formatPrice(cents)).toBe('$3,200.00')
  })
})
