import { ateliers } from '@/lib/ateliers'
import { ArrowRight, Users, BookOpen, Building2 } from 'lucide-react'
import Link from 'next/link'
import { EmailCapture } from '@/components/email-capture'

export default function HomePage() {
  const available = ateliers.filter((a) => a.status === 'available')
  const comingSoon = ateliers.filter((a) => a.status === 'coming-soon')

  return (
    <>
      {/* Hero */}
      <section className="hero-pastel relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            L&apos;IA ne va pas remplacer votre métier.
            <br />
            <em className="not-italic text-pink">Mais quelqu&apos;un qui maîtrise l&apos;IA, si.</em>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-body sm:text-xl">
            Des ateliers de 2 heures pour maîtriser les outils IA qui comptent.
            Concrets, intensifs, et conçus par les formateurs qui ont accompagné Rolex, la RTS et 125 autres organisations.
          </p>

          <Link
            href="/atelier/copilot"
            className="btn-frosted inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold"
          >
            Découvrir l&apos;atelier Copilot
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-y border-gray-100 px-6 py-10">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="h-5 w-5 text-pink" />
              <span className="text-2xl sm:text-3xl font-extrabold text-navy">3 500+</span>
            </div>
            <p className="text-sm text-text-muted">professionnels formés</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <Building2 className="h-5 w-5 text-pink" />
              <span className="text-2xl sm:text-3xl font-extrabold text-navy">125+</span>
            </div>
            <p className="text-sm text-text-muted">organisations</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <BookOpen className="h-5 w-5 text-pink" />
              <span className="text-2xl sm:text-3xl font-extrabold text-navy">97%</span>
            </div>
            <p className="text-sm text-text-muted">taux de satisfaction</p>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Nos ateliers
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">
            Chaque atelier cible un outil précis. 2 heures. Zéro théorie inutile. Vous repartez autonome.
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
                    Prochaine session bientôt
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-navy group-hover:text-pink transition-colors">
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
                    Voir le programme <ArrowRight className="h-4 w-4" />
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
                  <div key={atelier.slug} className="card flex flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-3xl">{atelier.emoji}</span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-muted">
                        Bientôt
                      </span>
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-navy">{atelier.title}</h4>
                    <p className="text-sm text-text-body mb-4">{atelier.description}</p>
                    <p className="text-xs text-text-muted mb-3">Soyez prévenu·e du lancement :</p>
                    <EmailCapture context="coming-soon" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Par <span className="text-pink">mAIjin</span>, le cabinet IA de référence en Suisse romande
          </h2>
          <p className="text-lg text-text-body leading-relaxed mb-4">
            Nous ne mettons pas de l&apos;IA partout parce que c&apos;est à la mode.
            <strong className="text-navy"> Nous partons de vos besoins réels.</strong>
          </p>
          <p className="text-text-body leading-relaxed">
            Depuis janvier 2023, nous avons accompagné des organisations comme Rolex, la RTS, Lombard Odier, le Canton du Valais, la SNCF et des dizaines de PME romandes.
            Nos ateliers Academy sont le condensé de cette expérience terrain.
          </p>
        </div>
      </section>
    </>
  )
}
