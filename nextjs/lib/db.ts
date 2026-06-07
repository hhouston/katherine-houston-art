import { promises as fs } from 'fs'
import path from 'path'
import type { Inquiry, Order } from '@/types'

const DATA_DIR = path.join(process.cwd(), 'data')

async function readJson<T>(file: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeJson<T>(file: string, data: T[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(path.join(DATA_DIR, file), JSON.stringify(data, null, 2))
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

// Inquiries
export async function getInquiries(): Promise<Inquiry[]> {
  return readJson<Inquiry>('inquiries.json')
}

export async function getInquiry(id: string): Promise<Inquiry | undefined> {
  const all = await getInquiries()
  return all.find(i => i.id === id)
}

export async function createInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status' | 'replies'>): Promise<Inquiry> {
  const all = await getInquiries()
  const inquiry: Inquiry = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
    status: 'new',
    replies: [],
  }
  all.unshift(inquiry)
  await writeJson('inquiries.json', all)
  // TODO: send email notification via Resend/SendGrid
  console.log(`[Inquiry] New inquiry from ${inquiry.name} <${inquiry.email}>`)
  return inquiry
}

export async function updateInquiry(id: string, updates: Partial<Inquiry>): Promise<Inquiry | null> {
  const all = await getInquiries()
  const idx = all.findIndex(i => i.id === id)
  if (idx === -1) return null
  all[idx] = { ...all[idx], ...updates }
  await writeJson('inquiries.json', all)
  return all[idx]
}

export async function addReplyToInquiry(id: string, body: string): Promise<Inquiry | null> {
  const all = await getInquiries()
  const idx = all.findIndex(i => i.id === id)
  if (idx === -1) return null
  all[idx].replies.push({ id: generateId(), sentAt: new Date().toISOString(), body })
  all[idx].status = 'replied'
  await writeJson('inquiries.json', all)
  // TODO: send reply email via Resend/SendGrid
  console.log(`[Reply] Sent reply to ${all[idx].email}`)
  return all[idx]
}

// Orders
export async function getOrders(): Promise<Order[]> {
  return readJson<Order>('orders.json')
}

export async function getOrder(id: string): Promise<Order | undefined> {
  const all = await getOrders()
  return all.find(o => o.id === id)
}

export async function createOrder(data: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
  const all = await getOrders()
  const order: Order = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }
  all.unshift(order)
  await writeJson('orders.json', all)
  return order
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
  const all = await getOrders()
  const idx = all.findIndex(o => o.id === id)
  if (idx === -1) return null
  all[idx] = { ...all[idx], ...updates }
  await writeJson('orders.json', all)
  return all[idx]
}
