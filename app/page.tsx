import { ateliers } from '@/lib/ateliers'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const available = ateliers.filter((a) => a.status === 'available')
  const comingSoon = ateliers.filter((a) => a.status === 'coming-soon')

  return (
    <>
      {/* Hero - soft pastel gradient like maijin.ch */}
      <section className="hero-pastel relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Maîtrisez les outils IA
            <br />
            <em className="not-italic text-pink">en 2 heures</em>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-body sm:text-xl">
            Des ateliers intensifs et pratiques pour les professionnels qui
            veulent exploiter le plein potentiel de l&apos;intelligence
            artificielle. Sans bullshit, 100% actionnable.
          </p>

          <Link
            href="/atelier/copilot"
            className="btn-frosted inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold"
          >
            Découvrir l&apos;atelier Copilot
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-6 text-sm text-text-muted">
            Audit &bull; Formation &bull; Consulting IA
            <br />
            à Genève, Lausanne, Fribourg, Neuchâtel, Valais
          </p>
        </div>
      </section>

      {/* Available Workshops */}
      <section id="formations" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Nos formations
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">
            Nous formons et accompagnons les professionnels qui veulent
            intégrer l&apos;IA dans leur métier.
          </p>

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
                <h3 className="mb-2 text-2xl font-bold group-hover:text-pink transition-colors">
                  {atelier.title}
                </h3>
                <p className="mb-6 text-text-body">{atelier.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-navy">
                    {atelier.price}{' '}
                    <span className="text-sm font-normal text-text-muted">
                      {atelier.currency} HT
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-pink font-semibold group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {comingSoon.length > 0 && (
            <>
              <h3 className="mb-8 mt-20 text-center text-xl font-bold text-text-muted">
                Bientôt disponibles
              </h3>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {comingSoon.map((atelier) => (
                  <div key={atelier.slug} className="card flex flex-col p-6 opacity-50">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-3xl">{atelier.emoji}</span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-muted">
                        Bientôt
                      </span>
                    </div>
                    <h4 className="mb-2 text-lg font-bold">{atelier.title}</h4>
                    <p className="text-sm text-text-body">{atelier.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Trust - matching maijin.ch "Qui sommes-nous" */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Par <span className="text-pink">mAIjin</span>, experts IA à Genève
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            Grâce à notre pédagogie, nous permettons à vos équipes <strong className="text-navy">d&apos;utiliser la bonne IA</strong>,
            au bon endroit, avec la bonne méthode. Pas de gadgets. Pas de promesses floues.
            Juste des outils et une vision claire.
          </p>
        </div>
      </section>
    </>
  )
}
