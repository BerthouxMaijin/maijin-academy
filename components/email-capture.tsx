'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function EmailCapture({ context = 'default' }: { context?: 'default' | 'coming-soon' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    // For now, redirect to Beehiiv newsletter signup with email prefilled
    // Later: integrate with Resend API to build own list
    window.open(`https://maijin.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, '_blank')
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium py-3">
        <Check className="h-5 w-5" />
        Merci ! Vérifiez votre boîte mail.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        required
        className="flex-1 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-text-muted focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20 transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-pink px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
      >
        {context === 'coming-soon' ? 'Me prévenir' : "M'inscrire"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}
