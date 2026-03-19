import { ateliers } from '@/lib/ateliers'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const available = ateliers.filter((a) => a.status === 'available')
  const comingSoon = ateliers.filter((a) => a.status === 'coming-soon')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px]" />
          <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-brand/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent-light">
            <Sparkles className="h-4 w-4" />
            Formations IA intensives · Par mAIjin · Genève
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Maîtrisez les outils IA
            <br />
            <span className="gradient-text">en 2 heures</span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Des ateliers intensifs et pratiques pour les professionnels qui
            veulent exploiter le plein potentiel de l&apos;intelligence
            artificielle. Sans bullshit, 100% actionnable.
          </p>

          <Link
            href="/atelier/copilot"
            className="cta-glow inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-indigo-500 hover:to-violet-500"
          >
            Découvrir l&apos;atelier Copilot
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Available Workshops */}
      <section id="formations" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Formations <span className="gradient-text">disponibles</span>
          </h2>

          <div className="mx-auto max-w-2xl space-y-6">
            {available.map((atelier) => (
              <Link
                key={atelier.slug}
                href={`/atelier/${atelier.slug}`}
                className="glass-card group flex flex-col p-8 transition-all duration-300 hover:border-accent/50 hover:scale-[1.01]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{atelier.emoji}</span>
                  <span className="rounded-full bg-emerald-brand/10 px-3 py-1 text-xs font-medium text-emerald-brand">
                    Disponible
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold group-hover:text-accent-light transition-colors">
                  {atelier.title}
                </h3>
                <p className="mb-6 text-gray-400">{atelier.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {atelier.price}{' '}
                    <span className="text-sm font-normal text-gray-400">
                      {atelier.currency} HT
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-accent-light group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          {comingSoon.length > 0 && (
            <>
              <h3 className="mb-8 mt-20 text-center text-2xl font-bold text-gray-500">
                Bientôt disponibles
              </h3>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {comingSoon.map((atelier) => (
                  <div
                    key={atelier.slug}
                    className="glass-card flex flex-col p-6 opacity-50"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-3xl">{atelier.emoji}</span>
                      <span className="rounded-full bg-gray-700/50 px-3 py-1 text-xs text-gray-400">
                        Bientôt
                      </span>
                    </div>
                    <h4 className="mb-2 text-xl font-bold">{atelier.title}</h4>
                    <p className="text-sm text-gray-500">
                      {atelier.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Par <span className="gradient-text">mAIjin</span>, experts IA
          </h2>
          <p className="text-lg text-gray-400">
            mAIjin accompagne les entreprises suisses et françaises dans leur
            transformation IA. Nos ateliers sont le fruit de centaines
            d&apos;heures d&apos;accompagnement terrain auprès de professionnels
            de tous secteurs.
          </p>
        </div>
      </section>
    </>
  )
}
