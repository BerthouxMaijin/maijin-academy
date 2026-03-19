'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'

export function StickyCTA({ price, currency, slug }: { price: number; currency: string; slug: string }) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-navy truncate">Atelier Copilot · 2h</p>
          <p className="text-xs text-text-muted">{price} {currency} · {12} places max</p>
        </div>
        <a
          href="#pricing"
          className="btn-pink flex-shrink-0 px-5 py-2.5 text-sm font-semibold flex items-center gap-1.5"
        >
          Réserver <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={() => setDismissed(true)} className="text-text-muted p-1 cursor-pointer">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
