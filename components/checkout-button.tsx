'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function CheckoutButton({
  slug,
  price,
  currency,
  variant = 'default',
}: {
  slug: string
  price: number
  currency: string
  variant?: 'default' | 'large' | 'hero'
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

  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all disabled:opacity-60 disabled:cursor-wait cursor-pointer'

  const variants = {
    hero: `${base} btn-frosted px-10 py-5 text-lg`,
    large: `${base} btn-pink px-10 py-5 text-lg`,
    default: `${base} btn-pink w-full px-8 py-3.5 text-sm`,
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={variants[variant]}
    >
      {loading ? (
        'Redirection...'
      ) : (
        <>
          Réserver ma place — {price} {currency}
          <ArrowRight className={variant === 'default' ? 'h-4 w-4' : 'h-5 w-5'} />
        </>
      )}
    </button>
  )
}
