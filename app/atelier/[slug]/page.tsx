import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ateliers, getAtelier } from '@/lib/ateliers'
import { CheckoutButton } from '@/components/checkout-button'
import { StickyCTA } from '@/components/sticky-cta'
import {
  Check, Clock, Users, Video, MessageCircle, Award, Target,
  ChevronDown, ArrowRight, ShieldCheck, TrendingUp, AlertTriangle,
} from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ateliers.filter((a) => a.status === 'available').map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier) return {}
  const ogUrl = `/api/og?title=${encodeURIComponent(atelier.title)}&subtitle=${encodeURIComponent('Atelier intensif · 2h · par mAIjin Academy')}`
  return {
    title: `${atelier.title} | mAIjin Academy`,
    description: atelier.subheadline,
    openGraph: { title: atelier.title, description: atelier.subheadline, type: 'website', images: [{ url: ogUrl, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: atelier.title, description: atelier.subheadline, images: [ogUrl] },
  }
}

export default async function AtelierPage({ params }: Props) {
  const { slug } = await params
  const a = getAtelier(slug)
  if (!a || a.status !== 'available') notFound()

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Course', name: a.title, description: a.subheadline,
    provider: { '@type': 'Organization', name: 'mAIjin Academy', url: 'https://maijin-academy.vercel.app', address: { '@type': 'PostalAddress', addressLocality: 'Genève', addressCountry: 'CH' } },
    offers: { '@type': 'Offer', price: a.price, priceCurrency: a.currency, availability: 'https://schema.org/InStock' },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', duration: 'PT2H', instructor: { '@type': 'Person', name: 'Jean-Baptiste Berthoux', jobTitle: 'Chief AI Officer' } },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '3500', bestRating: '5' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyCTA price={a.price} currency={a.currency} slug={slug} />

      {/* HERO */}
      <section className="hero-pastel relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 btn-frosted px-5 py-2.5 text-sm font-medium text-navy">{a.badge}</div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {a.heroHeadline}<br /><em className="not-italic text-pink">{a.heroHighlight}</em>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-text-body sm:text-xl">{a.subheadline}</p>
          <p className="mx-auto mb-10 max-w-xl text-base text-text-muted">
            L&apos;atelier qui a déjà transformé le quotidien de 3&nbsp;500+ professionnels chez Rolex, la RTS, Lombard Odier et 125 autres organisations.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CheckoutButton slug={slug} price={a.price} currency={a.currency} variant="hero" />
            <p className="text-sm text-text-muted">{a.maxParticipants} places max · Satisfait ou remboursé</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-white border-y border-gray-100 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-text-muted mb-4">Ils ont formé leurs équipes avec nous</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-navy/60">
            {['Rolex', 'RTS', 'Lombard Odier', 'Le Temps', 'Canton du Valais', 'Shiseido', 'BCV', 'SNCF'].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">{a.painPointsTitle}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-body">{a.painPointsIntro}</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {a.painPoints.map((p, i) => (
              <div key={i} className="card p-6">
                <span className="mb-3 block text-3xl">{p.icon}</span>
                <p className="font-semibold text-navy mb-2">{p.title}</p>
                <p className="text-text-body leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN COST */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="card-solid p-8 sm:p-10 border-l-4 border-l-pink">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">{a.hiddenCostTitle}</h3>
                <p className="text-text-body leading-relaxed mb-4">{a.hiddenCostText}</p>
                <p className="text-text-body leading-relaxed"><strong className="text-navy">{a.hiddenCostPunchline}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">{a.transformationTitle}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-body">{a.transformationIntro}</p>
          <div className="space-y-4">
            {a.transformations.map((t, i) => (
              <div key={i} className="card flex items-start gap-4 p-5 sm:p-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <p className="text-text-body leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-navy">{a.transformationPunchline}</p>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Le programme. Dense. Concret. Actionnable.</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-text-body">Pas de théorie creuse. Chaque minute est conçue pour que vous repartiez autonome.</p>
          <div className="space-y-6">
            {a.programme.map((mod, i) => (
              <div key={i} className="card-solid flex gap-5 p-6 sm:gap-8 sm:p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink text-white text-lg font-bold">{i + 1}</div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-navy">{mod.title}</h3>
                    <span className="text-sm text-text-muted">{mod.duration}</span>
                  </div>
                  <p className="mb-4 text-text-body italic">{mod.desc}</p>
                  <ul className="space-y-2">
                    {mod.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-text-body">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Conçu pour les gens qui n&apos;ont pas de temps à perdre</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">2 heures. Pas 2 jours. Pas un MOOC de 40 heures que vous ne finirez jamais.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Clock className="h-6 w-6" />, title: '2h chrono', desc: 'En live, sur Zoom ou Teams. Pas une minute de perdue.' },
              { icon: <Users className="h-6 w-6" />, title: `${a.maxParticipants} personnes max`, desc: "Assez petit pour poser vos questions. Assez grand pour échanger entre pairs." },
              { icon: <Target className="h-6 w-6" />, title: 'Vos cas réels', desc: "Vous travaillez sur VOS projets, pas sur des exemples théoriques." },
              { icon: <Video className="h-6 w-6" />, title: 'Replay 30 jours', desc: "Raté un passage ? Le replay est dans votre espace." },
              { icon: <MessageCircle className="h-6 w-6" />, title: 'Slack pendant 2 semaines', desc: "Accès direct à Jean-Baptiste. Pas un chatbot — un humain." },
              { icon: <Award className="h-6 w-6" />, title: 'Certificat mAIjin', desc: 'Attestation officielle à ajouter sur LinkedIn.' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-pink">{item.icon}</div>
                <h3 className="mb-2 font-semibold text-navy">{item.title}</h3>
                <p className="text-sm text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Ce qu&apos;ils en disent</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">3&nbsp;500 professionnels formés. Voici ce qui revient le plus souvent.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { quote: "Son approche claire, rigoureuse et inspirante m'a permis de plonger concrètement dans les outils IA. Je me sens désormais armé pour accompagner les organisations.", name: 'Alexandre Pahud', role: 'Co-fondateur, Swiss Governance Hub', img: '/alexandre-pahud.jpg' },
              { quote: "Après seulement trois sessions, je maîtrise bien mieux le prompt engineering. Un gain de temps précieux et des contenus IA qualitatifs et compétitifs.", name: 'Mélanie Hong', role: 'Podcast strategist & marketer', img: '/melanie-hong.jpg' },
              { quote: "Jean-Baptiste est hyper pédagogue, structuré et généreux. Je repars avec des idées et des outils directement activables. Un vrai booster d'efficacité.", name: 'Laurent Gautier', role: "Directeur des Opérations, Orange Advertising", img: '/laurent-gautier.jpg' },
              { quote: "Excellente formation, bonne cadence et formation variée. L'intégralité de notre inspection a été accompagnée sur 6 demi-journées.", name: 'Peter Schnyder', role: "Directeur Inspection des Finances, Canton du Valais", img: null },
            ].map((t, i) => (
              <div key={i} className="card p-6">
                <p className="text-text-body leading-relaxed mb-4 italic">&laquo;&nbsp;{t.quote}&nbsp;&raquo;</p>
                <div className="flex items-center gap-3">
                  {t.img ? (
                    <Image src={t.img} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-pink-soft flex items-center justify-center text-sm font-bold text-pink">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="card flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
            <Image src="/jean-baptiste-berthoux.jpg" alt="Jean-Baptiste Berthoux" width={96} height={96} className="h-24 w-24 flex-shrink-0 rounded-full object-cover" />
            <div className="text-center sm:text-left">
              <h2 className="mb-1 text-2xl font-bold">Jean-Baptiste Berthoux</h2>
              <p className="mb-4 font-medium text-pink">Chief AI Officer &middot; Co-fondateur mAIjin &middot; Genève</p>
              <p className="text-text-body leading-relaxed mb-3">
                Ingénieur de formation, passé par Grenoble École de Management, Jean-Baptiste forme des professionnels à l&apos;IA depuis janvier 2023.
                Son approche&nbsp;? Zéro jargon, 100% terrain. Chaque technique qu&apos;il enseigne vient de cas réels rencontrés chez ses clients.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
                <span><span className="font-semibold text-navy">3&nbsp;500+</span> professionnels formés</span>
                <span><span className="font-semibold text-navy">125+</span> organisations</span>
                <span><span className="font-semibold text-navy">17&nbsp;500+</span> abonnés LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Combien vaut 5 heures par semaine&nbsp;?</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">Le retour sur investissement&nbsp;? Dès la première semaine.</p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card-solid relative overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-pink" />
              <h3 className="mb-1 text-lg font-semibold">Individuel</h3>
              <p className="mb-6 text-sm text-text-muted">Pour les professionnels autonomes</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy">{a.price}</span>
                <span className="ml-2 text-text-muted">{a.currency} HT</span>
              </div>
              <p className="mb-8 text-xs text-text-muted">Soit moins de 0,85 CHF par jour sur un an</p>
              <ul className="mb-8 space-y-3">
                {["2h d'atelier live avec Jean-Baptiste", "Exercices sur vos propres cas d'usage", 'Replay disponible 30 jours', 'Accès Slack direct pendant 2 semaines', 'Certificat mAIjin Academy', "Bibliothèque de ressources prêtes à l'emploi"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-body"><Check className="h-4 w-4 flex-shrink-0 text-pink" />{f}</li>
                ))}
              </ul>
              <CheckoutButton slug={slug} price={a.price} currency={a.currency} />
            </div>
            <div className="card-solid relative overflow-hidden p-8" style={{ borderColor: 'var(--color-lavender)' }}>
              <div className="absolute inset-x-0 top-0 h-1 lavender-bg" />
              <div className="mb-4 inline-flex rounded-full bg-lavender-soft px-3 py-1 text-xs font-medium text-violet-700">Le plus demandé</div>
              <h3 className="mb-1 text-lg font-semibold">Équipe (5+)</h3>
              <p className="mb-6 text-sm text-text-muted">Atelier privé pour votre entreprise</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy">{a.teamPrice}</span>
                <span className="ml-2 text-text-muted">{a.currency} HT / pers.</span>
              </div>
              <p className="mb-8 text-xs text-text-muted">-17% par rapport au tarif individuel</p>
              <ul className="mb-8 space-y-3">
                {['Tout le plan Individuel', 'Atelier privé, date de votre choix', 'Exercices adaptés à votre secteur', "Compte-rendu + plan d'action équipe", 'Facture entreprise suisse'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-body"><Check className="h-4 w-4 flex-shrink-0 text-pink" />{f}</li>
                ))}
              </ul>
              <a href={`mailto:contact@maijin.ch?subject=Atelier%20${encodeURIComponent(a.tool)}%20équipe`} className="btn-frosted block w-full py-3.5 text-center text-sm font-semibold">
                Nous contacter <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-4 card-solid p-6">
            <ShieldCheck className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-navy mb-1">Garantie satisfait ou remboursé</p>
              <p className="text-sm text-text-body">Si l&apos;atelier ne vous apporte pas de valeur concrète, nous vous remboursons intégralement. Sans condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Vos questions, nos réponses</h2>
          <div className="space-y-3">
            {a.faq.map((item, i) => (
              <details key={i} className="card-solid group cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold text-navy [list-style:none] [&::-webkit-details-marker]:hidden">
                  {item.q}<ChevronDown className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="faq-answer mt-4 leading-relaxed text-text-body">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-pastel px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
            Dans 2 heures, vous ne verrez plus {a.tool} de la même façon.
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg text-text-body">La question n&apos;est pas &laquo;&nbsp;est-ce que l&apos;IA va changer mon métier&nbsp;?&raquo;</p>
          <p className="mx-auto mb-10 max-w-xl text-lg font-semibold text-navy">La question, c&apos;est&nbsp;: est-ce que vous serez prêt·e quand ça arrivera&nbsp;?</p>
          <CheckoutButton slug={slug} price={a.price} currency={a.currency} variant="large" />
          <p className="mt-4 text-sm text-text-muted">{a.maxParticipants} places · Satisfait ou remboursé · Certificat inclus</p>
        </div>
      </section>
    </>
  )
}
