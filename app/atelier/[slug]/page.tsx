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
  Target,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
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
    openGraph: { title: atelier.title, description: atelier.subheadline, type: 'website' },
  }
}

export default async function AtelierPage({ params }: Props) {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier || atelier.status !== 'available') notFound()

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO — Big Promise + Curiosity (Sugarman)
          "The sole purpose of the first sentence is to get
          you to read the second sentence."
          ════════════════════════════════════════════════ */}
      <section className="hero-pastel relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 btn-frosted px-5 py-2.5 text-sm font-medium text-navy">
            {atelier.badge}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Vos collègues utilisent déjà Copilot.
            <br />
            <em className="not-italic text-pink">La différence ? Ils savent quoi lui demander.</em>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-text-body sm:text-xl">
            En 2 heures, vous passerez de &laquo;&nbsp;je ne sais pas par où commencer&nbsp;&raquo; à &laquo;&nbsp;je viens de faire en 3 minutes ce qui me prenait 45 minutes&nbsp;&raquo;.
          </p>

          <p className="mx-auto mb-10 max-w-xl text-base text-text-muted">
            L&apos;atelier qui a déjà transformé le quotidien de 3&nbsp;500+ professionnels chez Rolex, la RTS, Lombard Odier et 125 autres organisations.
          </p>

          <div className="flex flex-col items-center gap-4">
            <CheckoutButton slug={slug} price={atelier.price} currency={atelier.currency} variant="hero" />
            <p className="text-sm text-text-muted">
              {atelier.maxParticipants} places max · Satisfait ou remboursé
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SOCIAL PROOF BAR — Trust immediately (Ogilvy)
          ════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-gray-100 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-text-muted mb-4">Ils ont formé leurs équipes avec nous</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-navy/60">
            <span>Rolex</span>
            <span className="text-gray-300">·</span>
            <span>RTS</span>
            <span className="text-gray-300">·</span>
            <span>Lombard Odier</span>
            <span className="text-gray-300">·</span>
            <span>Le Temps</span>
            <span className="text-gray-300">·</span>
            <span>Canton du Valais</span>
            <span className="text-gray-300">·</span>
            <span>Shiseido</span>
            <span className="text-gray-300">·</span>
            <span>BCV</span>
            <span className="text-gray-300">·</span>
            <span>SNCF</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          THE PROBLEM — Emotional resonance (Masterson)
          Make them feel the pain BEFORE offering the cure.
          ════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Soyons honnêtes.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-body">
            Si vous êtes ici, c&apos;est probablement parce que l&apos;une de ces situations vous parle&nbsp;:
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <span className="mb-3 block text-3xl">⏰</span>
              <p className="font-semibold text-navy mb-2">Vous y passez des heures.</p>
              <p className="text-text-body leading-relaxed">Emails, comptes-rendus, présentations... Vous savez que Copilot pourrait vous aider, mais chaque tentative donne un résultat &laquo;&nbsp;moyen&nbsp;&raquo;. Alors vous revenez à vos méthodes.</p>
            </div>
            <div className="card p-6">
              <span className="mb-3 block text-3xl">🤷</span>
              <p className="font-semibold text-navy mb-2">Vous avez la licence. Pas le mode d&apos;emploi.</p>
              <p className="text-text-body leading-relaxed">Votre entreprise paie 30&nbsp;CHF/mois par utilisateur pour Copilot. Vous l&apos;utilisez pour &laquo;&nbsp;résumer un mail&nbsp;&raquo; de temps en temps. Autant dire&nbsp;: vous roulez en Ferrari sur le parking.</p>
            </div>
            <div className="card p-6">
              <span className="mb-3 block text-3xl">👀</span>
              <p className="font-semibold text-navy mb-2">Certains collègues vont 3x plus vite que vous.</p>
              <p className="text-text-body leading-relaxed">Et ce n&apos;est pas parce qu&apos;ils sont plus intelligents. Ils ont simplement compris comment parler à l&apos;IA. La bonne nouvelle&nbsp;? Ça s&apos;apprend. En 2 heures.</p>
            </div>
            <div className="card p-6">
              <span className="mb-3 block text-3xl">😤</span>
              <p className="font-semibold text-navy mb-2">Vous n&apos;avez pas le temps de vous former seul·e.</p>
              <p className="text-text-body leading-relaxed">Les tutos YouTube de 4 heures, les articles de blog contradictoires, les formations théoriques sans exercice... Vous avez besoin de concret, et vous avez besoin que ça aille vite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          THE HIDDEN COST — What inaction costs (Ogilvy)
          "Facts sell more than adjectives."
          ════════════════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="card-solid p-8 sm:p-10 border-l-4 border-l-pink">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Ce que vous ne voyez pas&nbsp;: le coût de l&apos;inaction.</h3>
                <p className="text-text-body leading-relaxed mb-4">
                  Nos audits terrain auprès de 125 organisations révèlent un fait surprenant&nbsp;:
                  <strong className="text-navy"> 68 à 79% des collaborateurs utilisent déjà l&apos;IA</strong> — mais de manière informelle, sans méthode, et souvent avec des outils gratuits qui n&apos;offrent aucune garantie sur vos données.
                </p>
                <p className="text-text-body leading-relaxed">
                  Résultat&nbsp;? Des prompts inefficaces, des résultats décevants, et un outil à 30&nbsp;CHF/mois/utilisateur qui dort dans un coin. <strong className="text-navy">Le vrai coût, ce n&apos;est pas la formation. C&apos;est de continuer sans.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          THE TRANSFORMATION — Ownership experience (Sugarman)
          Make them FEEL what life looks like AFTER.
          ════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Imaginez votre lundi matin, dans 2 semaines.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-body">
            Après cet atelier, voici à quoi ressemblera votre quotidien&nbsp;:
          </p>

          <div className="space-y-4">
            {[
              { icon: <TrendingUp className="h-5 w-5" />, text: 'Vous ouvrez Outlook. 47 emails non lus. En 3 clics, Copilot vous résume les urgences. Vous répondez aux 5 plus importants en 8 minutes. Avant, c\'était 45.' },
              { icon: <TrendingUp className="h-5 w-5" />, text: 'Votre manager demande une analyse Excel "pour 14h". Vous écrivez un prompt de 2 lignes. Copilot génère le tableau croisé, les graphiques et les insights. Livré à 11h30.' },
              { icon: <TrendingUp className="h-5 w-5" />, text: 'Réunion Teams de 45 minutes. Vous sortez. Le compte-rendu structuré, avec les décisions et les actions, est déjà prêt. Vous cliquez sur "Envoyer".' },
              { icon: <TrendingUp className="h-5 w-5" />, text: 'Présentation client vendredi ? Vous donnez 3 bullet points à Copilot. Il génère un PowerPoint de 12 slides. Vous ajustez 2 visuels. Total : 20 minutes au lieu de 3 heures.' },
            ].map((item, i) => (
              <div key={i} className="card flex items-start gap-4 p-5 sm:p-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                  {item.icon}
                </div>
                <p className="text-text-body leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-lg font-semibold text-navy">
            Ce n&apos;est pas de la science-fiction. C&apos;est ce que font déjà nos 3&nbsp;500 anciens participants.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROGRAMME — Fascinations (Sugarman)
          "Curiosity-driven bullets that force you to buy."
          ════════════════════════════════════════════════ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Le programme. Dense. Concret. Actionnable.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-text-body">
            Pas de théorie creuse. Chaque minute est conçue pour que vous repartiez autonome.
          </p>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: 'Comprendre la machine',
                duration: '20 min',
                desc: 'Comment Copilot "pense". Ce qu\'il voit, ce qu\'il ne voit pas. La différence entre ceux qui obtiennent des résultats médiocres et ceux qui gagnent 5h par semaine.',
                bullets: [
                  'Le modèle mental qui change tout (et que 90% des utilisateurs ignorent)',
                  'Les 3 limites de Copilot que personne ne vous explique',
                  'Pourquoi vos données d\'entreprise sont la clé de résultats spectaculaires',
                ],
              },
              {
                num: 2,
                title: "L'art du prompt — version Microsoft 365",
                duration: '30 min',
                desc: 'Oubliez les "prompts magiques" de LinkedIn. Ici, vous apprenez la structure qui marche à tous les coups, dans chaque application.',
                bullets: [
                  'La formule R.O.C.E. : Rôle, Objectif, Contexte, Exigences — le framework que nos 3 500 participants utilisent au quotidien',
                  'Pourquoi "Résume ce document" est le pire prompt possible (et quoi écrire à la place)',
                  "Comment itérer intelligemment quand le premier résultat n'est pas parfait",
                ],
              },
              {
                num: 3,
                title: 'Application par application',
                duration: '50 min — le cœur de l\'atelier',
                desc: 'Exercices pratiques sur VOS cas d\'usage. Vous repartez avec des prompts prêts à l\'emploi pour chaque outil.',
                bullets: [
                  'Word : rédiger un rapport de 10 pages structuré en 4 minutes',
                  'Excel : faire parler vos données sans écrire une seule formule',
                  'PowerPoint : transformer 3 bullet points en présentation client en 90 secondes',
                  'Outlook : traiter 50 emails en moins de 15 minutes, sans rien rater',
                  'Teams : le compte-rendu de réunion qui s\'écrit tout seul (et qui est réellement utile)',
                ],
              },
              {
                num: 4,
                title: 'Votre plan d\'action personnel',
                duration: '20 min',
                desc: 'Vous repartez avec une routine IA concrète, adaptée à VOTRE métier. Pas un template générique — votre plan.',
                bullets: [
                  'Les 3 "quick wins" que vous implémenterez dès lundi matin',
                  'Comment mesurer vos gains de temps réels (spoiler : attendez-vous à une surprise)',
                  'Le piège de la "perfection Copilot" — et comment l\'éviter',
                ],
              },
            ].map((mod) => (
              <div key={mod.num} className="card-solid flex gap-5 p-6 sm:gap-8 sm:p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink text-white text-lg font-bold">
                  {mod.num}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-navy">{mod.title}</h3>
                    <span className="text-sm text-text-muted">{mod.duration}</span>
                  </div>
                  <p className="mb-4 text-text-body italic">{mod.desc}</p>
                  <ul className="space-y-2">
                    {mod.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-text-body">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FORMAT
          ════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Conçu pour les gens qui n&apos;ont pas de temps à perdre
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">
            2 heures. Pas 2 jours. Pas un MOOC de 40 heures que vous ne finirez jamais.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Clock className="h-6 w-6" />, title: '2h chrono', desc: 'En live, sur Zoom ou Teams. Pas une minute de perdue.' },
              { icon: <Users className="h-6 w-6" />, title: `${atelier.maxParticipants} personnes max`, desc: "Assez petit pour que chacun pose ses questions. Assez grand pour échanger entre pairs." },
              { icon: <Target className="h-6 w-6" />, title: 'Vos cas réels', desc: "Vous travaillez sur VOS emails, VOS fichiers, VOS présentations. Pas sur des exemples théoriques." },
              { icon: <Video className="h-6 w-6" />, title: 'Replay 30 jours', desc: "Vous avez raté un passage ? Vous voulez revoir un prompt ? Le replay est dans votre espace." },
              { icon: <MessageCircle className="h-6 w-6" />, title: 'Slack pendant 2 semaines', desc: "Accès direct à Jean-Baptiste pour vos questions post-formation. Pas un chatbot — un humain." },
              { icon: <Award className="h-6 w-6" />, title: 'Certificat mAIjin', desc: 'Attestation officielle à ajouter sur LinkedIn et à présenter à votre management.' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-pink">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-navy">{item.title}</h3>
                <p className="text-sm text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS — Social Proof (Ogilvy)
          "The consumer is not a moron. She is your wife."
          ════════════════════════════════════════════════ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Ce qu&apos;ils en disent
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">
            3&nbsp;500 professionnels formés. Voici ce qui revient le plus souvent.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <p className="text-text-body leading-relaxed mb-4 italic">
                &laquo;&nbsp;Son approche à la fois claire, rigoureuse et inspirante m&apos;a permis de plonger concrètement dans les outils IA. Je me sens désormais armé pour accompagner les organisations.&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-soft flex items-center justify-center text-sm font-bold text-pink">AP</div>
                <div>
                  <p className="text-sm font-semibold text-navy">Alexandre Pahud</p>
                  <p className="text-xs text-text-muted">Co-fondateur, Swiss Governance Hub</p>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <p className="text-text-body leading-relaxed mb-4 italic">
                &laquo;&nbsp;Après seulement trois sessions, je maîtrise bien mieux le prompt engineering. Un gain de temps précieux et des contenus IA qualitatifs et compétitifs.&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-soft flex items-center justify-center text-sm font-bold text-pink">MH</div>
                <div>
                  <p className="text-sm font-semibold text-navy">Mélanie Hong</p>
                  <p className="text-xs text-text-muted">Podcast strategist &amp; marketer</p>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <p className="text-text-body leading-relaxed mb-4 italic">
                &laquo;&nbsp;Jean-Baptiste est hyper pédagogue, structuré et généreux. Je repars avec des idées et des outils directement activables. Un vrai booster d&apos;efficacité.&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-soft flex items-center justify-center text-sm font-bold text-pink">LG</div>
                <div>
                  <p className="text-sm font-semibold text-navy">Laurent Gautier</p>
                  <p className="text-xs text-text-muted">Directeur des Opérations, Orange Advertising</p>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <p className="text-text-body leading-relaxed mb-4 italic">
                &laquo;&nbsp;Excellente formation, bonne cadence et formation variée. L&apos;intégralité de notre inspection a été accompagnée sur 6 demi-journées.&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-soft flex items-center justify-center text-sm font-bold text-pink">PS</div>
                <div>
                  <p className="text-sm font-semibold text-navy">Peter Schnyder</p>
                  <p className="text-xs text-text-muted">Directeur Inspection des Finances, Canton du Valais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INSTRUCTOR — Credibility (Ogilvy)
          ════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="card flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-pink text-white text-3xl font-bold">
              JB
            </div>
            <div className="text-center sm:text-left">
              <h2 className="mb-1 text-2xl font-bold">Jean-Baptiste Berthoux</h2>
              <p className="mb-4 font-medium text-pink">Chief AI Officer &middot; Co-fondateur mAIjin &middot; Genève</p>
              <p className="text-text-body leading-relaxed mb-3">
                Ingénieur de formation, passé par Grenoble École de Management, Jean-Baptiste forme des professionnels à l&apos;IA depuis janvier 2023.
                Son approche&nbsp;? Zéro jargon, 100% terrain. Chaque prompt qu&apos;il enseigne vient de cas réels rencontrés chez ses clients.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
                <span className="font-semibold text-navy">3&nbsp;500+</span> professionnels formés
                <span className="font-semibold text-navy">125+</span> organisations
                <span className="font-semibold text-navy">17&nbsp;500+</span> abonnés LinkedIn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PRICING — Value framing + Anchoring (Ogilvy/Sugarman)
          ════════════════════════════════════════════════ */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Combien vaut 5 heures par semaine&nbsp;?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-text-body">
            Nos participants rapportent un gain moyen de 5 à 10h par semaine. À 80&nbsp;CHF/h, cela représente 400 à 800&nbsp;CHF économisés chaque semaine. Le retour sur investissement&nbsp;? Dès la première semaine.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card-solid relative overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-pink" />
              <h3 className="mb-1 text-lg font-semibold">Individuel</h3>
              <p className="mb-6 text-sm text-text-muted">Pour les professionnels autonomes</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy">{atelier.price}</span>
                <span className="ml-2 text-text-muted">{atelier.currency} HT</span>
              </div>
              <p className="mb-8 text-xs text-text-muted">Soit moins de 0,85 CHF par jour sur un an</p>
              <ul className="mb-8 space-y-3">
                {[
                  "2h d'atelier live avec Jean-Baptiste",
                  'Exercices sur vos propres cas d\'usage',
                  'Replay disponible 30 jours',
                  'Accès Slack direct pendant 2 semaines',
                  'Certificat mAIjin Academy',
                  'Bibliothèque de prompts prêts à l\'emploi',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-body">
                    <Check className="h-4 w-4 flex-shrink-0 text-pink" /> {f}
                  </li>
                ))}
              </ul>
              <CheckoutButton slug={slug} price={atelier.price} currency={atelier.currency} />
            </div>

            <div className="card-solid relative overflow-hidden p-8" style={{ borderColor: 'var(--color-lavender)' }}>
              <div className="absolute inset-x-0 top-0 h-1 lavender-bg" />
              <div className="mb-4 inline-flex rounded-full bg-lavender-soft px-3 py-1 text-xs font-medium text-violet-700">
                Le plus demandé
              </div>
              <h3 className="mb-1 text-lg font-semibold">Équipe (5+)</h3>
              <p className="mb-6 text-sm text-text-muted">Atelier privé pour votre entreprise</p>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy">{atelier.teamPrice}</span>
                <span className="ml-2 text-text-muted">{atelier.currency} HT / pers.</span>
              </div>
              <p className="mb-8 text-xs text-text-muted">-17% par rapport au tarif individuel</p>
              <ul className="mb-8 space-y-3">
                {[
                  'Tout le plan Individuel',
                  'Atelier privé, date de votre choix',
                  "Exercices adaptés à votre secteur",
                  'Compte-rendu + plan d\'action équipe',
                  'Facture entreprise suisse',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-body">
                    <Check className="h-4 w-4 flex-shrink-0 text-pink" /> {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:contact@maijin.ch?subject=Atelier%20Copilot%20équipe&body=Bonjour%2C%20je%20souhaite%20organiser%20un%20atelier%20Copilot%20pour%20mon%20équipe." className="btn-frosted block w-full py-3.5 text-center text-sm font-semibold">
                Nous contacter <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 flex items-start gap-4 card-solid p-6">
            <ShieldCheck className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-navy mb-1">Garantie satisfait ou remboursé</p>
              <p className="text-sm text-text-body">Si l&apos;atelier ne vous apporte pas de valeur concrète, nous vous remboursons intégralement. Sans condition. Jusqu&apos;à 48h avant la session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ — Objection handling (Masterson)
          ════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Vos questions, nos réponses
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "Ai-je besoin d'une licence Microsoft 365 Copilot ?",
                a: "Oui, une licence active est nécessaire pour les exercices pratiques. Si votre entreprise hésite encore à investir dans les licences, cet atelier est justement le meilleur argument : vous repartirez avec des cas d'usage concrets et un ROI mesurable pour convaincre votre direction.",
              },
              {
                q: "C'est adapté si je n'y connais rien ?",
                a: "C'est même le cas idéal. L'atelier part de zéro et vous amène à l'autonomie en 2 heures. Nos participants viennent de tous horizons : marketing, finance, RH, direction générale. Aucun prérequis technique.",
              },
              {
                q: "Je suis déjà à l'aise avec ChatGPT. C'est pour moi ?",
                a: "Copilot et ChatGPT sont deux mondes différents. La force de Copilot, c'est qu'il a accès à VOS données (emails, fichiers, réunions). Les techniques de prompting sont spécifiques. Même nos participants les plus avancés découvrent des usages qu'ils n'imaginaient pas.",
              },
              {
                q: "2 heures, c'est suffisant ?",
                a: "C'est le format que nous avons affiné après 125 missions en entreprise. Assez long pour couvrir les 5 applications clés avec des exercices. Assez court pour rester concentré et ne pas empiéter sur votre journée. Nos évaluations post-formation montrent un taux de satisfaction de 97%.",
              },
              {
                q: "Puis-je faire financer la formation par mon entreprise ?",
                a: "Absolument. Nous fournissons un devis, une convention de formation et une facture conformes aux standards suisses. C'est un investissement déductible. La plupart de nos participants sont financés par leur employeur.",
              },
              {
                q: "C'est quoi mAIjin ?",
                a: "mAIjin est le cabinet de référence en transformation IA en Suisse romande. Fondé à Genève en 2025, nous avons accompagné plus de 3 500 professionnels et 125 organisations — de la PME locale à Rolex. Notre philosophie : \"Pas d'IA partout parce que c'est à la mode. On part de vos besoins réels.\"",
              },
            ].map((item, i) => (
              <details key={i} className="card-solid group cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold text-navy [list-style:none] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="faq-answer mt-4 leading-relaxed text-text-body">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA — Urgency + Emotion (Sugarman)
          "The close should be as strong as the opening."
          ════════════════════════════════════════════════ */}
      <section className="hero-pastel px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
            Dans 2 heures, vous ne verrez plus {atelier.tool} de la même façon.
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg text-text-body">
            La question n&apos;est pas &laquo;&nbsp;est-ce que l&apos;IA va changer mon métier&nbsp;?&raquo;
          </p>
          <p className="mx-auto mb-10 max-w-xl text-lg font-semibold text-navy">
            La question, c&apos;est&nbsp;: est-ce que vous serez prêt·e quand ça arrivera&nbsp;?
          </p>
          <CheckoutButton slug={slug} price={atelier.price} currency={atelier.currency} variant="large" />
          <p className="mt-4 text-sm text-text-muted">
            {atelier.maxParticipants} places · Satisfait ou remboursé · Certificat inclus
          </p>
        </div>
      </section>
    </>
  )
}
