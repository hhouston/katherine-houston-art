export interface Artwork {
  slug: string
  title: string
  year: number
  medium: string
  dimensions: string
  series?: string
  image: string
  thumbImage?: string
  price?: number
  available: boolean
  featured?: boolean
  description?: string
}

export interface Exhibition {
  id: string
  title: string
  venue: string
  location: string
  year: number
  month: string
  type: 'solo' | 'group'
  link?: string
}

export interface PressItem {
  id: string
  publication: string
  headline: string
  excerpt: string
  year: number
  url?: string
}

export interface Inquiry {
  id: string
  createdAt: string
  name: string
  email: string
  phone?: string
  interest: string
  message: string
  artworkSlug?: string
  status: 'new' | 'read' | 'replied' | 'closed'
  adminNotes?: string
  replies: InquiryReply[]
}

export interface InquiryReply {
  id: string
  sentAt: string
  body: string
}

export interface Order {
  id: string
  createdAt: string
  buyerName: string
  buyerEmail: string
  artworkSlug: string
  artworkTitle: string
  amount: number
  currency: string
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  stripePaymentIntentId?: string
  shippingAddress?: ShippingAddress
  trackingNumber?: string
  trackingCarrier?: string
  adminNotes?: string
}

export interface ShippingAddress {
  line1: string
  line2?: string
  city: string
  state: string
  zip: string
  country: string
}

export interface CartItem {
  artwork: Artwork
  quantity: number
}

export interface AdminSession {
  adminLoggedIn: boolean
}
