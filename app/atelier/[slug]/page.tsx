import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ateliers, getAtelier } from '@/lib/ateliers'
import { CheckoutButton } from '@/components/checkout-button'
import {
  Check,
  Clock,
  Users,
  Video,
  MessageCircle,
  Award,
  Sparkles,
  Target,
  ChevronDown,
} from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ateliers
    .filter((a) => a.status === 'available')
    .map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier) return {}
  return {
    title: `${atelier.title} | mAIjin Academy`,
    description: atelier.subheadline,
    openGraph: {
      title: atelier.title,
      description: atelier.subheadline,
      type: 'website',
    },
  }
}

export default async function AtelierPage({ params }: Props) {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier || atelier.status !== 'available') notFound()

  return (
    <>
      {/* ─── HERO (gradient like mAIjin.ch) ─── */}
      <section className="hero-gradient relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-indigo-200">
            <Sparkles className="h-4 w-4" />
            {atelier.badge}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Maîtrisez
            <br />
            <span className="text-indigo-200">{atelier.tool}</span>
            <br />
            en moins de 2&nbsp;heures
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-indigo-100/80 sm:text-xl">
            {atelier.subheadline}
          </p>

          <div className="flex flex-col items-center gap-4">
            <CheckoutButton
              slug={slug}
              price={atelier.price}
              currency={atelier.currency}
              variant="hero"
            />
            <p className="text-sm text-indigo-200/70">
              Places limitées à {atelier.maxParticipants} participants ·
              Satisfait ou remboursé
            </p>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Vous vous{' '}
            <span className="gradient-text">reconnaissez</span>&nbsp;?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
            Si une de ces situations vous parle, cet atelier est fait pour vous.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {atelier.painPoints.map((point, i) => (
              <div
                key={i}
                className="card p-6"
              >
                <span className="mb-3 block text-3xl">{point.icon}</span>
                <p className="text-text-secondary leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMME ─── */}
      <section className="section-alt px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Ce que vous allez{' '}
            <span className="gradient-text">maîtriser</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-text-secondary">
            Un programme dense et 100% actionnable, conçu pour que vous soyez
            autonome dès la fin de l&apos;atelier.
          </p>

          <div className="space-y-6">
            {atelier.modules.map((mod, i) => (
              <div
                key={i}
                className="card flex gap-5 p-6 sm:gap-8 sm:p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-md shadow-primary/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{mod.title}</h3>
                  <p className="mb-4 text-text-secondary">{mod.description}</p>
                  <ul className="space-y-2">
                    {mod.topics.map((topic, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMAT ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Le format <span className="gradient-text">idéal</span> pour
            apprendre
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
            Intensif, pratique, et conçu pour les professionnels qui n&apos;ont
            pas de temps à perdre.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: '2h en live',
                desc: 'Atelier en direct sur Zoom ou Teams. Interactif et personnalisé.',
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: `${atelier.maxParticipants} participants max`,
                desc: "Petit groupe pour garantir l'attention et les échanges.",
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: 'Exercices pratiques',
                desc: "Travaillez sur vos propres cas d'usage pendant l'atelier.",
              },
              {
                icon: <Video className="h-6 w-6" />,
                title: 'Replay 30 jours',
                desc: "Accédez à l'enregistrement pour revoir les points clés.",
              },
              {
                icon: <MessageCircle className="h-6 w-6" />,
                title: 'Support Slack',
                desc: '2 semaines de support post-formation pour vos questions.',
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: 'Certificat',
                desc: 'Attestation de formation à partager sur LinkedIn.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMATEUR ─── */}
      <section className="section-alt px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="card flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-3xl font-bold shadow-lg shadow-primary/20">
              JB
            </div>
            <div className="text-center sm:text-left">
              <h2 className="mb-1 text-2xl font-bold">
                Jean-Baptiste Berthoux
              </h2>
              <p className="mb-4 font-medium text-primary">
                Co-fondateur &middot; mAIjin &middot; Genève
              </p>
              <p className="text-text-secondary leading-relaxed">
                Expert en transformation IA pour les entreprises suisses et
                françaises. Accompagne les équipes dans l&apos;adoption des outils
                d&apos;intelligence artificielle au quotidien. Formateur passionné,
                convaincu que l&apos;IA doit être accessible à tous les
                professionnels — pas seulement aux techs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Investissez dans votre{' '}
            <span className="gradient-text">productivité</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-secondary">
            2 heures aujourd&apos;hui pour gagner des centaines d&apos;heures
            demain.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Individual */}
            <div className="card relative overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-violet-500" />
              <h3 className="mb-1 text-lg font-semibold">Individuel</h3>
              <p className="mb-6 text-sm text-text-muted">
                Pour les professionnels autonomes
              </p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">{atelier.price}</span>
                <span className="ml-2 text-text-muted">
                  {atelier.currency} HT
                </span>
              </div>
              <ul className="mb-8 space-y-3">
                {[
                  "2h d'atelier en direct",
                  'Exercices pratiques',
                  'Replay 30 jours',
                  'Support Slack 2 semaines',
                  'Certificat de formation',
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <CheckoutButton
                slug={slug}
                price={atelier.price}
                currency={atelier.currency}
              />
            </div>

            {/* Team */}
            <div className="card relative overflow-hidden border-primary/30 p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="mb-4 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                Meilleur rapport qualité-prix
              </div>
              <h3 className="mb-1 text-lg font-semibold">Équipe (5+)</h3>
              <p className="mb-6 text-sm text-text-muted">
                Pour les entreprises et équipes
              </p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">
                  {atelier.teamPrice}
                </span>
                <span className="ml-2 text-text-muted">
                  {atelier.currency} HT / pers.
                </span>
              </div>
              <ul className="mb-8 space-y-3">
                {[
                  'Tout le plan Individuel',
                  'Atelier privé pour votre équipe',
                  "Cas d'usage personnalisés",
                  'Compte-rendu post-formation',
                  'Facture entreprise',
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:contact@maijin.ch?subject=Atelier%20équipe%20Copilot"
                className="block w-full rounded-xl border border-cyan-200 bg-cyan-50 py-3.5 text-center text-sm font-semibold text-cyan-700 transition-all hover:bg-cyan-100"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-alt px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>

          <div className="space-y-3">
            {atelier.faq.map((item, i) => (
              <details key={i} className="card group cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold [list-style:none] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="faq-answer mt-4 leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="hero-gradient px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
            Prêt·e à transformer votre façon de travailler&nbsp;?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-indigo-100/80">
            Rejoignez le prochain atelier et maîtrisez {atelier.tool} en
            2&nbsp;heures. Vos collègues vous demanderont votre secret.
          </p>
          <CheckoutButton
            slug={slug}
            price={atelier.price}
            currency={atelier.currency}
            variant="hero"
          />
          <p className="mt-4 text-sm text-indigo-200/60">
            Satisfait ou remboursé jusqu&apos;à 48h avant l&apos;atelier
          </p>
        </div>
      </section>
    </>
  )
}
