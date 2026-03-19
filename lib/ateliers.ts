export interface Atelier {
  slug: string
  title: string
  tool: string
  emoji: string
  badge: string
  subheadline: string
  price: number
  teamPrice: number
  currency: string
  maxParticipants: number
  status: 'available' | 'coming-soon'
  description: string
  painPoints: { icon: string; text: string }[]
  modules: { title: string; description: string; topics: string[] }[]
  faq: { q: string; a: string }[]
}

export const ateliers: Atelier[] = [
  {
    slug: 'copilot',
    title: 'Maîtriser Microsoft Copilot en 2 heures',
    tool: 'Microsoft Copilot',
    emoji: '🤖',
    badge: 'Atelier intensif · 2h · En ligne',
    subheadline:
      "Arrêtez de sous-exploiter l'IA qui est déjà dans vos outils. Cet atelier vous donne les techniques concrètes pour transformer votre productivité avec Copilot dans Word, Excel, PowerPoint, Outlook et Teams.",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'available',
    description:
      'Maîtrisez Copilot dans Word, Excel, PowerPoint, Outlook et Teams. Gagnez 5h par semaine.',
    painPoints: [
      {
        icon: '⏰',
        text: "Vous passez plus de 2h par jour à rédiger des emails, comptes-rendus et présentations.",
      },
      {
        icon: '🤷',
        text: "Vous avez une licence Copilot mais n'exploitez que 10% de son potentiel.",
      },
      {
        icon: '👀',
        text: "Vous voyez vos collègues aller plus vite grâce à l'IA et vous vous sentez largué·e.",
      },
      {
        icon: '😤',
        text: "Vous n'avez pas le temps de vous former seul·e en regardant des tutos YouTube de 4h.",
      },
    ],
    modules: [
      {
        title: 'Les fondamentaux de Copilot',
        description:
          'Comprendre comment Copilot fonctionne, ses capacités réelles et ses limites.',
        topics: [
          'Architecture de Copilot et modèle de données',
          'Ce que Copilot peut (et ne peut pas) faire',
          'Les prérequis pour des résultats optimaux',
        ],
      },
      {
        title: "L'art du prompt dans Microsoft 365",
        description:
          "Écrire des instructions qui donnent des résultats précis du premier coup.",
        topics: [
          "Anatomie d'un bon prompt Copilot",
          'Les patterns qui marchent à tous les coups',
          'Itérer et affiner ses résultats',
        ],
      },
      {
        title: 'Cas pratiques par application',
        description:
          'Workflows concrets dans chaque application Microsoft 365.',
        topics: [
          'Word : rédaction, synthèse, reformulation',
          'Excel : analyse de données, formules, insights',
          'PowerPoint : création de présentations en 30 secondes',
          'Outlook : gestion des emails, résumés, réponses',
          'Teams : comptes-rendus de réunion automatiques',
        ],
      },
      {
        title: "Votre plan d'action personnalisé",
        description:
          'Repartez avec une routine IA adaptée à votre métier.',
        topics: [
          'Identifier vos quick wins immédiats',
          'Construire votre routine Copilot quotidienne',
          'Mesurer vos gains de temps',
        ],
      },
    ],
    faq: [
      {
        q: "Ai-je besoin d'une licence Microsoft 365 Copilot ?",
        a: "Oui, une licence active est nécessaire pour suivre les exercices pratiques. Si vous n'en avez pas encore, nous pouvons vous accompagner dans la mise en place.",
      },
      {
        q: "C'est adapté aux débutants ?",
        a: "Absolument. L'atelier est conçu pour tous les niveaux, du débutant complet à l'utilisateur intermédiaire qui veut passer au niveau supérieur.",
      },
      {
        q: "Aurai-je accès au replay ?",
        a: "Oui, l'enregistrement de l'atelier est disponible dans votre espace personnel pendant 30 jours.",
      },
      {
        q: 'Puis-je me faire rembourser ?',
        a: "Oui, remboursement intégral jusqu'à 48h avant le début de l'atelier, sans condition.",
      },
      {
        q: "C'est quoi mAIjin ?",
        a: "mAIjin est une société de conseil en intelligence artificielle basée à Genève. Nous accompagnons les entreprises suisses et françaises dans leur transformation IA.",
      },
      {
        q: 'Proposez-vous des formations sur-mesure ?',
        a: "Oui, nous proposons des ateliers privés adaptés à vos cas d'usage spécifiques. Contactez-nous pour un devis personnalisé.",
      },
    ],
  },
  {
    slug: 'codex',
    title: 'Maîtriser Codex en 2 heures',
    tool: 'Codex',
    emoji: '💻',
    badge: 'Bientôt disponible',
    subheadline:
      "Apprenez à utiliser l'IA pour coder plus vite et plus efficacement.",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'coming-soon',
    description:
      "Utilisez l'IA pour coder plus vite. Génération de code, debugging, refactoring.",
    painPoints: [],
    modules: [],
    faq: [],
  },
  {
    slug: 'cursor',
    title: 'Maîtriser Cursor en 2 heures',
    tool: 'Cursor',
    emoji: '⚡',
    badge: 'Bientôt disponible',
    subheadline:
      "L'éditeur de code IA qui change tout. Apprenez à en tirer le maximum.",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'coming-soon',
    description:
      "L'éditeur de code IA qui révolutionne le développement. Maîtrisez-le en 2h.",
    painPoints: [],
    modules: [],
    faq: [],
  },
]

export function getAtelier(slug: string): Atelier | undefined {
  return ateliers.find((a) => a.slug === slug)
}
