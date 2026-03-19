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
        <div className="aurora" />
        <div className="grid-bg relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b border-border/50 bg-midnight/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="gradient-text">mAIjin</span>
                <span className="text-gray-400 font-light">Academy</span>
              </a>
              <div className="flex items-center gap-4 sm:gap-6">
                <a
                  href="/#formations"
                  className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Formations
                </a>
                <a
                  href="/dashboard"
                  className="rounded-lg border border-border px-4 py-2 text-sm text-gray-300 hover:border-accent/50 hover:text-white transition-all"
                >
                  Mon espace
                </a>
              </div>
            </div>
          </nav>

          {/* Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-border/50 py-12">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="gradient-text font-bold">mAIjin</span>
                  <span className="text-gray-500 font-light">Academy</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <a href="mailto:contact@maijin.ch" className="hover:text-gray-300 transition-colors">
                    Contact
                  </a>
                  <span>Genève, Suisse</span>
                </div>
                <p className="text-sm text-gray-600">
                  &copy; {new Date().getFullYear()} mAIjin SA
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
