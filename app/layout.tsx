import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mAIjin Academy — Formations IA pour professionnels',
  description:
    "Maîtrisez les outils IA en 2 heures. Ateliers intensifs par mAIjin, experts en IA à Genève.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Navigation - light, clean, matching mAIjin.ch */}
          <nav className="sticky top-0 z-50 border-b border-card-border bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="gradient-text">mAIjin</span>
                <span className="text-text-secondary font-light">Academy</span>
              </a>
              <div className="flex items-center gap-4 sm:gap-6">
                <a
                  href="/#formations"
                  className="hidden sm:block text-sm text-text-secondary hover:text-text transition-colors"
                >
                  Formations
                </a>
                <a
                  href="/dashboard"
                  className="rounded-lg border border-card-border px-4 py-2 text-sm text-text-secondary hover:border-primary/40 hover:text-primary transition-all"
                >
                  Mon espace
                </a>
              </div>
            </div>
          </nav>

          {/* Content */}
          <main className="flex-1">{children}</main>

          {/* Footer - dark navy matching mAIjin.ch */}
          <footer className="bg-navy text-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-indigo-400">mAIjin</span>
                    <span className="text-slate-400 font-light">Academy</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    Formations IA intensives pour professionnels
                  </p>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <a
                    href="https://maijin.ch"
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    maijin.ch
                  </a>
                  <a
                    href="mailto:contact@maijin.ch"
                    className="hover:text-white transition-colors"
                  >
                    contact@maijin.ch
                  </a>
                </div>
                <div className="text-sm text-slate-500">
                  <p>&copy; {new Date().getFullYear()} mAIjin SA &middot; Genève, Suisse</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
