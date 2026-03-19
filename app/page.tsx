import { ateliers } from '@/lib/ateliers'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const available = ateliers.filter((a) => a.status === 'available')
  const comingSoon = ateliers.filter((a) => a.status === 'coming-soon')

  return (
    <>
      {/* Hero - gradient matching mAIjin.ch */}
      <section className="hero-gradient relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-200">
            <Sparkles className="h-4 w-4" />
            Formations IA intensives · Par mAIjin · Genève
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Maîtrisez les outils IA
            <br />
            <span className="text-indigo-200">en 2 heures</span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-indigo-100/80 sm:text-xl">
            Des ateliers intensifs et pratiques pour les professionnels qui
            veulent exploiter le plein potentiel de l&apos;intelligence
            artificielle. Sans bullshit, 100% actionnable.
          </p>

          <Link
            href="/atelier/copilot"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl hover:-translate-y-0.5"
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
                className="card group flex flex-col p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{atelier.emoji}</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    Disponible
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold group-hover:text-primary transition-colors">
                  {atelier.title}
                </h3>
                <p className="mb-6 text-text-secondary">{atelier.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {atelier.price}{' '}
                    <span className="text-sm font-normal text-text-muted">
                      {atelier.currency} HT
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          {comingSoon.length > 0 && (
            <>
              <h3 className="mb-8 mt-20 text-center text-2xl font-bold text-text-muted">
                Bientôt disponibles
              </h3>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {comingSoon.map((atelier) => (
                  <div
                    key={atelier.slug}
                    className="card flex flex-col p-6 opacity-60"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-3xl">{atelier.emoji}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-text-muted">
                        Bientôt
                      </span>
                    </div>
                    <h4 className="mb-2 text-xl font-bold">{atelier.title}</h4>
                    <p className="text-sm text-text-secondary">
                      {atelier.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Trust / About */}
      <section className="section-alt px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Par <span className="gradient-text">mAIjin</span>, experts IA à Genève
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
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
