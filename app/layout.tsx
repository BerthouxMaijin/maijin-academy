import type { Metadata } from 'next'
import { Inter, Manrope, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['400', '700', '800'] })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['400', '600', '700'] })

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
    <html lang="fr" className={`${inter.variable} ${manrope.variable} ${montserrat.variable} ${inter.className}`}>
      <body className="antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Nav - matching maijin.ch: frosted, sticky */}
          <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  <span className="text-pink">M</span>
                  <span className="text-navy">AI</span>
                  <span className="text-navy">JIN</span>
                </span>
                <span className="text-text-muted text-sm font-medium ml-1">Academy</span>
              </a>
              <div className="flex items-center gap-5 sm:gap-7">
                <a
                  href="/#formations"
                  className="hidden sm:block text-sm text-text-body hover:text-navy transition-colors"
                >
                  Formations
                </a>
                <a
                  href="/dashboard"
                  className="text-sm font-bold text-text-body hover:text-pink transition-colors"
                >
                  Mon espace
                </a>
                <a
                  href="/atelier/copilot"
                  className="hidden sm:block btn-pink px-5 py-2.5 text-sm font-semibold"
                >
                  S&apos;inscrire
                </a>
              </div>
            </div>
          </nav>

          <main className="flex-1">{children}</main>

          {/* Footer - dark navy matching maijin.ch */}
          <footer className="bg-navy text-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                    <span className="text-pink">M</span>
                    <span>AIJIN</span>
                    <span className="text-gray-400 text-sm font-medium ml-1">Academy</span>
                  </div>
                  <p className="mt-3 max-w-xs text-sm text-gray-400">
                    Formations IA intensives pour professionnels. Par mAIjin, experts en IA à Genève.
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="https://maijin.ch" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    maijin.ch
                  </a>
                  <a href="mailto:contact@maijin.ch" className="text-gray-400 hover:text-white transition-colors">
                    contact@maijin.ch
                  </a>
                  <span className="text-gray-500">+41 22 566 74 60</span>
                  <span className="text-gray-500">109 rue de Lyon, 1203 Genève</span>
                </div>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} mAIjin SA. Tous droits réservés.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
