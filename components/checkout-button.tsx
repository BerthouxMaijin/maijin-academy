'use client'

import { useState } from 'react'
import { Zap } from 'lucide-react'

export function CheckoutButton({
  slug,
  price,
  currency,
  variant = 'default',
}: {
  slug: string
  price: number
  currency: string
  variant?: 'default' | 'large'
}) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        window.location.href = `mailto:contact@maijin.ch?subject=Réservation atelier&body=Je souhaite réserver une place pour l'atelier.`
      }
    } catch {
      window.location.href = `mailto:contact@maijin.ch?subject=Réservation atelier`
    }
    setLoading(false)
  }

  const isLarge = variant === 'large'

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`cta-glow inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white transition-all hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 disabled:cursor-wait cursor-pointer ${
        isLarge ? 'px-10 py-5 text-lg' : 'w-full px-8 py-3.5 text-sm'
      }`}
    >
      {loading ? (
        'Redirection vers le paiement...'
      ) : (
        <>
          <Zap className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
          Réserver ma place — {price} {currency}
        </>
      )}
    </button>
  )
}
