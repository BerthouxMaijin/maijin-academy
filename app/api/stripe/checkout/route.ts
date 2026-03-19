import { NextRequest, NextResponse } from 'next/server'
import { getAtelier } from '@/lib/ateliers'

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json()
    const atelier = getAtelier(slug)

    if (!atelier) {
      return NextResponse.json({ error: 'Atelier introuvable' }, { status: 404 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Paiement non configuré', message: 'Contactez contact@maijin.ch' },
        { status: 503 }
      )
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'chf',
            product_data: {
              name: atelier.title,
              description: `Atelier intensif · 2h · ${atelier.maxParticipants} participants max`,
            },
            unit_amount: atelier.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin}/atelier/${slug}`,
      metadata: { atelierSlug: slug },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    )
  }
}
