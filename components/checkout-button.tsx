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

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all disabled:opacity-60 disabled:cursor-wait cursor-pointer'

  const variantClasses = {
    hero: 'bg-white text-primary shadow-lg hover:bg-indigo-50 hover:shadow-xl hover:-translate-y-0.5 px-10 py-5 text-lg',
    large:
      'cta-btn px-10 py-5 text-lg',
    default:
      'cta-btn w-full px-8 py-3.5 text-sm',
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {loading ? (
        'Redirection vers le paiement...'
      ) : (
        <>
          <Zap className={variant === 'default' ? 'h-4 w-4' : 'h-5 w-5'} />
          Réserver ma place — {price} {currency}
        </>
      )}
    </button>
  )
}
