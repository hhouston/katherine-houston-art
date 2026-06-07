/**
 * @jest-environment node
 */
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn().mockResolvedValue(undefined),
    mkdir: jest.fn().mockResolvedValue(undefined),
  },
}))

import * as fsModule from 'fs'
import {
  getInquiries, getInquiry, createInquiry, updateInquiry, addReplyToInquiry,
  getOrders, getOrder, createOrder, updateOrder,
} from '@/lib/db'
import type { Inquiry, Order } from '@/types'

const readFileMock = fsModule.promises.readFile as jest.Mock
const writeFileMock = fsModule.promises.writeFile as jest.Mock

const seedInquiry: Inquiry = {
  id: 'seed-1',
  createdAt: '2024-01-01T00:00:00.000Z',
  name: 'Jane Doe',
  email: 'jane@example.com',
  interest: 'single',
  message: 'Hello',
  status: 'new',
  replies: [],
}

const seedOrder: Order = {
  id: 'ord-1',
  createdAt: '2024-01-01T00:00:00.000Z',
  buyerName: 'John Smith',
  buyerEmail: 'john@example.com',
  artworkSlug: 'coastal-light-i',
  artworkTitle: 'Coastal Light I',
  amount: 480000,
  currency: 'usd',
  status: 'paid',
}

beforeEach(() => {
  jest.clearAllMocks()
})

// ── Inquiries ────────────────────────────────────────────────────────────────

describe('getInquiries', () => {
  test('returns parsed array from file', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await getInquiries()
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('seed-1')
  })

  test('returns empty array when file does not exist', async () => {
    readFileMock.mockRejectedValue(new Error('ENOENT'))
    const result = await getInquiries()
    expect(result).toEqual([])
  })
})

describe('getInquiry', () => {
  test('returns inquiry by id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await getInquiry('seed-1')
    expect(result?.name).toBe('Jane Doe')
  })

  test('returns undefined for missing id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await getInquiry('not-found')
    expect(result).toBeUndefined()
  })
})

describe('createInquiry', () => {
  beforeEach(() => {
    readFileMock.mockResolvedValue(JSON.stringify([]))
  })

  test('sets status to new', async () => {
    const inq = await createInquiry({ name: 'Alice', email: 'alice@example.com', interest: 'gift', message: 'Hi' })
    expect(inq.status).toBe('new')
  })

  test('sets createdAt', async () => {
    const inq = await createInquiry({ name: 'Alice', email: 'alice@example.com', interest: 'gift', message: 'Hi' })
    expect(inq.createdAt).toBeTruthy()
    expect(new Date(inq.createdAt).getTime()).not.toBeNaN()
  })

  test('initialises replies as empty array', async () => {
    const inq = await createInquiry({ name: 'Alice', email: 'alice@example.com', interest: 'gift', message: 'Hi' })
    expect(inq.replies).toEqual([])
  })

  test('generates unique ids across two calls', async () => {
    const [a, b] = await Promise.all([
      createInquiry({ name: 'A', email: 'a@example.com', interest: 'single', message: '' }),
      createInquiry({ name: 'B', email: 'b@example.com', interest: 'single', message: '' }),
    ])
    expect(a.id).not.toBe(b.id)
  })

  test('prepends to existing list', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    await createInquiry({ name: 'New', email: 'new@example.com', interest: 'single', message: '' })
    const written = JSON.parse((writeFileMock.mock.calls[0][1] as string))
    expect(written[0].name).toBe('New')
    expect(written[1].id).toBe('seed-1')
  })
})

describe('updateInquiry', () => {
  test('updates fields and returns updated inquiry', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await updateInquiry('seed-1', { status: 'read' })
    expect(result?.status).toBe('read')
  })

  test('returns null for non-existent id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await updateInquiry('ghost', { status: 'read' })
    expect(result).toBeNull()
  })
})

describe('addReplyToInquiry', () => {
  test('appends reply and sets status to replied', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await addReplyToInquiry('seed-1', 'Thank you for your inquiry.')
    expect(result?.replies).toHaveLength(1)
    expect(result?.replies[0].body).toBe('Thank you for your inquiry.')
    expect(result?.status).toBe('replied')
  })

  test('returns null for non-existent id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedInquiry]))
    const result = await addReplyToInquiry('ghost', 'Hi')
    expect(result).toBeNull()
  })
})

// ── Orders ───────────────────────────────────────────────────────────────────

describe('getOrders', () => {
  test('returns parsed array from file', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedOrder]))
    const result = await getOrders()
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('ord-1')
  })

  test('returns empty array on read error', async () => {
    readFileMock.mockRejectedValue(new Error('ENOENT'))
    expect(await getOrders()).toEqual([])
  })
})

describe('getOrder', () => {
  test('finds order by id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedOrder]))
    expect((await getOrder('ord-1'))?.buyerName).toBe('John Smith')
  })

  test('returns undefined for missing id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedOrder]))
    expect(await getOrder('missing')).toBeUndefined()
  })
})

describe('createOrder', () => {
  beforeEach(() => {
    readFileMock.mockResolvedValue(JSON.stringify([]))
  })

  test('generates an id and createdAt', async () => {
    const order = await createOrder({ ...seedOrder, id: undefined as never, createdAt: undefined as never })
    expect(order.id).toBeTruthy()
    expect(new Date(order.createdAt).getTime()).not.toBeNaN()
  })
})

describe('updateOrder', () => {
  test('updates fields', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedOrder]))
    const result = await updateOrder('ord-1', { status: 'shipped', trackingNumber: '1Z999' })
    expect(result?.status).toBe('shipped')
    expect(result?.trackingNumber).toBe('1Z999')
  })

  test('returns null for missing id', async () => {
    readFileMock.mockResolvedValue(JSON.stringify([seedOrder]))
    expect(await updateOrder('nope', { status: 'shipped' })).toBeNull()
  })
})
