import { NextRequest, NextResponse } from 'next/server'
import { stripe, dollarsToStripe } from '@/lib/stripe'
import { getArtworkBySlug } from '@/lib/data'

export async function POST(req: NextRequest) {
  const { artworkSlug, successUrl, cancelUrl, buyerEmail } = await req.json()

  const artwork = getArtworkBySlug(artworkSlug)
  if (!artwork || !artwork.available || !artwork.price) {
    return NextResponse.json({ error: 'Artwork not available for purchase' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: buyerEmail,
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: dollarsToStripe(artwork.price),
          product_data: {
            name: artwork.title,
            description: `${artwork.medium} · ${artwork.dimensions} · ${artwork.year}`,
          },
        },
        quantity: 1,
      }],
      success_url: successUrl ?? `${req.nextUrl.origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl ?? `${req.nextUrl.origin}/concept-1/collect`,
      metadata: { artworkSlug },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[Stripe] Checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
