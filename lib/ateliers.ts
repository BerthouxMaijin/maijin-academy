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
  // Copywriting fields
  heroHeadline: string
  heroHighlight: string
  painPointsTitle: string
  painPointsIntro: string
  painPoints: { icon: string; title: string; text: string }[]
  hiddenCostTitle: string
  hiddenCostText: string
  hiddenCostPunchline: string
  transformationTitle: string
  transformationIntro: string
  transformations: string[]
  transformationPunchline: string
  programme: { title: string; duration: string; desc: string; bullets: string[] }[]
  faq: { q: string; a: string }[]
}

export const ateliers: Atelier[] = [
  // ═══════════════════════════════════════
  // COPILOT
  // ═══════════════════════════════════════
  {
    slug: 'copilot',
    title: 'Maîtriser Microsoft Copilot en 2 heures',
    tool: 'Microsoft Copilot',
    emoji: '🤖',
    badge: 'Atelier intensif · 2h · En ligne',
    subheadline:
      "En 2 heures, vous passerez de « je ne sais pas par où commencer » à « je viens de faire en 3 minutes ce qui me prenait 45 minutes ».",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'available',
    description: 'Maîtrisez Copilot dans Word, Excel, PowerPoint, Outlook et Teams. Gagnez 5h par semaine.',

    heroHeadline: 'Vos collègues utilisent déjà Copilot.',
    heroHighlight: 'La différence ? Ils savent quoi lui demander.',
    painPointsTitle: 'Soyons honnêtes.',
    painPointsIntro: "Si vous êtes ici, c'est probablement parce que l'une de ces situations vous parle :",
    painPoints: [
      { icon: '⏰', title: 'Vous y passez des heures.', text: "Emails, comptes-rendus, présentations... Vous savez que Copilot pourrait vous aider, mais chaque tentative donne un résultat « moyen ». Alors vous revenez à vos méthodes." },
      { icon: '🤷', title: "Vous avez la licence. Pas le mode d'emploi.", text: "Votre entreprise paie 30 CHF/mois par utilisateur pour Copilot. Vous l'utilisez pour « résumer un mail » de temps en temps. Autant dire : vous roulez en Ferrari sur le parking." },
      { icon: '👀', title: 'Certains collègues vont 3x plus vite que vous.', text: "Et ce n'est pas parce qu'ils sont plus intelligents. Ils ont simplement compris comment parler à l'IA. La bonne nouvelle ? Ça s'apprend. En 2 heures." },
      { icon: '😤', title: "Vous n'avez pas le temps de vous former seul·e.", text: "Les tutos YouTube de 4 heures, les articles de blog contradictoires, les formations théoriques sans exercice... Vous avez besoin de concret, et vous avez besoin que ça aille vite." },
    ],
    hiddenCostTitle: "Ce que vous ne voyez pas : le coût de l'inaction.",
    hiddenCostText: "Nos audits terrain auprès de 125 organisations révèlent un fait surprenant : 68 à 79% des collaborateurs utilisent déjà l'IA — mais de manière informelle, sans méthode, et souvent avec des outils gratuits qui n'offrent aucune garantie sur vos données.",
    hiddenCostPunchline: "Le vrai coût, ce n'est pas la formation. C'est de continuer sans.",
    transformationTitle: 'Imaginez votre lundi matin, dans 2 semaines.',
    transformationIntro: 'Après cet atelier, voici à quoi ressemblera votre quotidien :',
    transformations: [
      "Vous ouvrez Outlook. 47 emails non lus. En 3 clics, Copilot vous résume les urgences. Vous répondez aux 5 plus importants en 8 minutes. Avant, c'était 45.",
      "Votre manager demande une analyse Excel \"pour 14h\". Vous écrivez un prompt de 2 lignes. Copilot génère le tableau croisé, les graphiques et les insights. Livré à 11h30.",
      "Réunion Teams de 45 minutes. Vous sortez. Le compte-rendu structuré, avec les décisions et les actions, est déjà prêt. Vous cliquez sur \"Envoyer\".",
      "Présentation client vendredi ? Vous donnez 3 bullet points à Copilot. Il génère un PowerPoint de 12 slides. Vous ajustez 2 visuels. Total : 20 minutes au lieu de 3 heures.",
    ],
    transformationPunchline: "Ce n'est pas de la science-fiction. C'est ce que font déjà nos 3 500 anciens participants.",
    programme: [
      {
        title: 'Comprendre la machine',
        duration: '20 min',
        desc: "Comment Copilot \"pense\". Ce qu'il voit, ce qu'il ne voit pas. La différence entre ceux qui obtiennent des résultats médiocres et ceux qui gagnent 5h par semaine.",
        bullets: [
          'Le modèle mental qui change tout (et que 90% des utilisateurs ignorent)',
          'Les 3 limites de Copilot que personne ne vous explique',
          "Pourquoi vos données d'entreprise sont la clé de résultats spectaculaires",
        ],
      },
      {
        title: "L'art du prompt — version Microsoft 365",
        duration: '30 min',
        desc: "Oubliez les \"prompts magiques\" de LinkedIn. Ici, vous apprenez la structure qui marche à tous les coups, dans chaque application.",
        bullets: [
          'La formule R.O.C.E. : Rôle, Objectif, Contexte, Exigences — le framework que nos 3 500 participants utilisent au quotidien',
          "Pourquoi \"Résume ce document\" est le pire prompt possible (et quoi écrire à la place)",
          "Comment itérer intelligemment quand le premier résultat n'est pas parfait",
        ],
      },
      {
        title: 'Application par application',
        duration: "50 min — le cœur de l'atelier",
        desc: "Exercices pratiques sur VOS cas d'usage. Vous repartez avec des prompts prêts à l'emploi pour chaque outil.",
        bullets: [
          'Word : rédiger un rapport de 10 pages structuré en 4 minutes',
          'Excel : faire parler vos données sans écrire une seule formule',
          'PowerPoint : transformer 3 bullet points en présentation client en 90 secondes',
          'Outlook : traiter 50 emails en moins de 15 minutes, sans rien rater',
          "Teams : le compte-rendu de réunion qui s'écrit tout seul (et qui est réellement utile)",
        ],
      },
      {
        title: "Votre plan d'action personnel",
        duration: '20 min',
        desc: "Vous repartez avec une routine IA concrète, adaptée à VOTRE métier. Pas un template générique — votre plan.",
        bullets: [
          'Les 3 "quick wins" que vous implémenterez dès lundi matin',
          "Comment mesurer vos gains de temps réels (spoiler : attendez-vous à une surprise)",
          'Le piège de la "perfection Copilot" — et comment l\'éviter',
        ],
      },
    ],
    faq: [
      { q: "Ai-je besoin d'une licence Microsoft 365 Copilot ?", a: "Oui, une licence active est nécessaire pour les exercices pratiques. Si votre entreprise hésite encore à investir dans les licences, cet atelier est justement le meilleur argument : vous repartirez avec des cas d'usage concrets et un ROI mesurable pour convaincre votre direction." },
      { q: "C'est adapté si je n'y connais rien ?", a: "C'est même le cas idéal. L'atelier part de zéro et vous amène à l'autonomie en 2 heures. Nos participants viennent de tous horizons : marketing, finance, RH, direction générale. Aucun prérequis technique." },
      { q: "Je suis déjà à l'aise avec ChatGPT. C'est pour moi ?", a: "Copilot et ChatGPT sont deux mondes différents. La force de Copilot, c'est qu'il a accès à VOS données (emails, fichiers, réunions). Les techniques de prompting sont spécifiques. Même nos participants les plus avancés découvrent des usages qu'ils n'imaginaient pas." },
      { q: "2 heures, c'est suffisant ?", a: "C'est le format que nous avons affiné après 125 missions en entreprise. Assez long pour couvrir les 5 applications clés avec des exercices. Assez court pour rester concentré. Nos évaluations post-formation montrent un taux de satisfaction de 97%." },
      { q: "Puis-je faire financer la formation par mon entreprise ?", a: "Absolument. Nous fournissons un devis, une convention de formation et une facture conformes aux standards suisses. C'est un investissement déductible. La plupart de nos participants sont financés par leur employeur." },
      { q: "C'est quoi mAIjin ?", a: "mAIjin est le cabinet de référence en transformation IA en Suisse romande. Fondé à Genève en 2025, nous avons accompagné plus de 3 500 professionnels et 125 organisations — de la PME locale à Rolex. Notre philosophie : \"Pas d'IA partout parce que c'est à la mode. On part de vos besoins réels.\"" },
    ],
  },

  // ═══════════════════════════════════════
  // CODEX (OpenAI Codex / AI Coding)
  // ═══════════════════════════════════════
  {
    slug: 'codex',
    title: 'Maîtriser Codex en 2 heures',
    tool: 'Codex',
    emoji: '💻',
    badge: 'Atelier intensif · 2h · En ligne',
    subheadline:
      "L'IA qui écrit du code est déjà là. En 2 heures, vous apprendrez à la piloter pour coder 5x plus vite — sans sacrifier la qualité.",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'available',
    description: "L'IA qui code pour vous. Génération, debugging, refactoring — apprenez à la piloter en 2h.",

    heroHeadline: "Les développeurs les plus rapides ne tapent plus de code.",
    heroHighlight: "Ils le dirigent.",
    painPointsTitle: "Le développement a changé. Vous aussi ?",
    painPointsIntro: "Si vous codez encore comme en 2023, voici ce que vous vivez probablement :",
    painPoints: [
      { icon: '🐌', title: "Le code boilerplate vous ralentit.", text: "Vous passez 60% de votre temps sur du code structurel, des patterns que vous avez écrits cent fois. L'IA peut générer tout ça en quelques secondes — si vous savez lui demander." },
      { icon: '🔍', title: "Le debugging est un gouffre de temps.", text: "Traquer un bug dans 2 000 lignes, c'est souvent 2 heures de frustration. L'IA identifie le problème et propose un fix en 30 secondes. Encore faut-il formuler la bonne question." },
      { icon: '📚', title: "Chaque nouveau framework = repartir de zéro.", text: "React, Next.js, Python, Go... Vous passez plus de temps à lire la doc qu'à coder. L'IA connaît toutes les docs. Elle est votre pair programmer qui ne dort jamais." },
      { icon: '😬', title: "Vous avez testé GitHub Copilot et c'était... bof.", text: "Des suggestions à côté de la plaque, du code qu'il faut réécrire, des hallucinations. Le problème n'est pas l'outil — c'est la façon dont vous l'utilisez." },
    ],
    hiddenCostTitle: "Pendant que vous hésitez, d'autres livrent.",
    hiddenCostText: "Les équipes de développement qui maîtrisent l'IA coding livrent 40 à 55% de code en plus par sprint — sans augmenter les heures. Ce n'est pas une stat marketing, c'est ce que rapportent GitHub et McKinsey. La question n'est plus \"est-ce que l'IA code bien\" mais \"est-ce que je sais la piloter\".",
    hiddenCostPunchline: "Chaque semaine sans IA coding, c'est du temps de développement que vous ne récupérerez jamais.",
    transformationTitle: "Votre prochain sprint, version augmentée.",
    transformationIntro: "Après cet atelier, voici ce qui change :",
    transformations: [
      "Nouveau ticket : \"Créer une API REST avec auth JWT\". Vous décrivez la spec en 5 lignes à Codex. Il génère le endpoint, le middleware, les tests. Vous reviewez et ajustez. Temps : 20 minutes au lieu de 3 heures.",
      "Bug critique en production. Vous collez la stack trace + le contexte. Codex identifie le problème, explique le pourquoi, et propose un fix testé. Votre PM n'en revient pas.",
      "Migration de codebase legacy ? Vous donnez l'ancien code à l'IA avec les specs du nouveau framework. Elle refactore, module par module, en respectant vos conventions.",
      "Code review de 500 lignes d'un junior. Vous demandez à l'IA une analyse. Elle repère 3 problèmes de sécurité, 2 optimisations, et suggère des tests manquants. Le tout en 2 minutes.",
    ],
    transformationPunchline: "Les meilleurs développeurs de 2026 ne sont pas ceux qui codent le plus vite. Ce sont ceux qui pilotent le mieux l'IA.",
    programme: [
      {
        title: "Comprendre comment l'IA \"code\"",
        duration: '20 min',
        desc: "Comment les modèles de langage génèrent du code. Ce qu'ils font bien, ce qu'ils font mal, et pourquoi ça change tout pour votre workflow.",
        bullets: [
          "Pourquoi l'IA est excellente en boilerplate mais dangereuse en logique métier",
          "Le modèle mental du \"pilote\" vs le \"passager\" — la distinction qui sépare les juniors des seniors en IA coding",
          "Les 3 types de tâches où l'IA vous fait gagner le plus de temps (et les 2 où il faut être vigilant)",
        ],
      },
      {
        title: "Prompting pour développeurs",
        duration: '30 min',
        desc: "Les techniques de prompt qui transforment un code médiocre en code production-ready. Pas de la théorie — des patterns que vous réutiliserez demain.",
        bullets: [
          "Le pattern \"Spec → Code → Test\" qui divise votre temps de développement par 3",
          "Comment décrire une architecture pour que l'IA génère du code structuré (pas du spaghetti)",
          "L'art du \"prompt itératif\" : refine, contraindre, spécialiser — en 3 étapes",
        ],
      },
      {
        title: "Cas pratiques — votre stack, vos problèmes",
        duration: "50 min — le cœur de l'atelier",
        desc: "On travaille sur VOS projets. API, frontend, scripts, data — peu importe votre stack, les principes sont les mêmes.",
        bullets: [
          "Générer une API complète (routes, validation, tests) en moins de 10 minutes",
          "Refactorer du code legacy sans tout casser — la méthode pas-à-pas",
          "Debugging assisté : du stack trace au fix en 60 secondes",
          "Écrire des tests unitaires que vous n'auriez jamais eu le courage d'écrire à la main",
          "Documentation automatique qui ne ressemble pas à de la doc auto-générée",
        ],
      },
      {
        title: "Intégrer l'IA dans votre workflow quotidien",
        duration: '20 min',
        desc: "Quel outil pour quel usage. Comment structurer votre workflow pour maximiser le gain sans perdre en qualité.",
        bullets: [
          "GitHub Copilot vs Claude Code vs ChatGPT : le guide honnête (on n'a rien à vendre)",
          "Le workflow \"IA-first\" que nos clients dev les plus avancés utilisent au quotidien",
          "Les red flags : quand NE PAS faire confiance à l'IA (et comment vérifier)",
        ],
      },
    ],
    faq: [
      { q: "C'est pour quel niveau technique ?", a: "Vous devez savoir coder. Que vous soyez junior ou senior, l'atelier est adapté — les juniors apprennent à coder plus vite, les seniors apprennent à déléguer intelligemment. Prérequis : savoir lire et écrire du code dans au moins un langage." },
      { q: "Quel langage / stack est couvert ?", a: "Les principes sont agnostiques. On montre des exemples en JavaScript/TypeScript, Python et SQL, mais les techniques s'appliquent à toute stack. L'objectif est de vous apprendre à PILOTER l'IA, pas un outil spécifique." },
      { q: "C'est quoi la différence avec Cursor (l'autre atelier) ?", a: "Codex est un atelier sur l'IA coding en général : comment utiliser les modèles d'IA pour coder, peu importe l'outil. Cursor est un atelier spécifique sur l'éditeur Cursor et son workflow unique. Si vous débutez en IA coding, commencez par Codex." },
      { q: "Mon entreprise a des politiques strictes sur l'IA. C'est compatible ?", a: "On aborde les enjeux de sécurité et de confidentialité du code. On explique comment utiliser l'IA coding en entreprise de manière sûre (modèles on-premise, filtrage des données sensibles, bonnes pratiques)." },
      { q: "2 heures pour devenir un expert en IA coding ?", a: "Non. 2 heures pour être autonome et savoir quand et comment utiliser l'IA dans votre workflow quotidien. L'expertise vient avec la pratique — on vous donne les fondations solides pour y arriver vite." },
      { q: "C'est quoi mAIjin ?", a: "mAIjin est le cabinet de référence en transformation IA en Suisse romande. 3 500+ professionnels formés, 125+ organisations. Notre équipe maîtrise Claude Code, Cursor, les APIs OpenAI/Anthropic — on forme aussi bien des marketeurs que des développeurs." },
    ],
  },

  // ═══════════════════════════════════════
  // CURSOR
  // ═══════════════════════════════════════
  {
    slug: 'cursor',
    title: 'Maîtriser Cursor en 2 heures',
    tool: 'Cursor',
    emoji: '⚡',
    badge: 'Atelier intensif · 2h · En ligne',
    subheadline:
      "Cursor n'est pas juste un éditeur de code. C'est un copilote intelligent qui comprend votre projet entier. En 2 heures, vous apprendrez à en exploiter le plein potentiel.",
    price: 297,
    teamPrice: 247,
    currency: 'CHF',
    maxParticipants: 12,
    status: 'available',
    description: "L'éditeur IA qui comprend tout votre codebase. Apprenez à le piloter comme un pro en 2h.",

    heroHeadline: "VS Code était révolutionnaire. Cursor l'a rendu obsolète.",
    heroHighlight: "Et vous n'en utilisez même pas 10%.",
    painPointsTitle: "Cursor installé. Et après ?",
    painPointsIntro: "Vous avez téléchargé Cursor parce que tout le monde en parle. Mais concrètement :",
    painPoints: [
      { icon: '😕', title: "Vous utilisez Cursor comme VS Code.", text: "Tab pour accepter une suggestion, Cmd+K de temps en temps... C'est comme avoir un assistant personnel et ne lui demander que l'heure. Les power users, eux, codent des features entières en 10 minutes." },
      { icon: '🤯', title: "Trop de features, pas de méthode.", text: "Composer, Chat, Cmd+K, @mentions, .cursorrules, context... Vous ne savez pas quoi utiliser quand. Résultat : vous alternez entre l'IA et le code manuel sans vraie stratégie." },
      { icon: '🗑️', title: "L'IA génère du code que vous jetez.", text: "Les suggestions sont souvent à côté. Vous passez plus de temps à corriger le code généré qu'à l'écrire vous-même. Le problème n'est pas Cursor — c'est comment vous lui donnez du contexte." },
      { icon: '💸', title: "20$/mois pour un autocomplete glorifié.", text: "Vous payez Pro mais n'utilisez que le Tab completion. À ce prix-là, l'investissement ne se justifie que si vous savez exploiter Composer, les agents, et le contexte codebase." },
    ],
    hiddenCostTitle: "Les développeurs qui maîtrisent Cursor ont un avantage déloyal.",
    hiddenCostText: "Pendant que vous écrivez du code ligne par ligne, ils décrivent ce qu'ils veulent en langage naturel et Cursor génère des features entières. Pas du code jetable — du code propre, testé, qui respecte les conventions du projet. La différence ? Ils ont passé 2 heures à apprendre les bons patterns.",
    hiddenCostPunchline: "L'outil est le même. Le résultat dépend de celui qui le pilote.",
    transformationTitle: "Votre workflow, après cet atelier.",
    transformationIntro: "Voici ce que vous ferez naturellement :",
    transformations: [
      "Nouveau composant React ? Vous ouvrez Composer, décrivez le comportement en 3 phrases, mentionnez @design-system. Cursor génère le composant, les props, les styles, et les tests. Vous reviewez en 2 minutes.",
      "Bug report du QA : \"le filtre date ne marche pas sur Safari\". Vous sélectionnez le composant, Cmd+K → \"Fix Safari date filter compatibility\". Fix appliqué, testé, commité. Temps total : 90 secondes.",
      "Refactoring d'un module de 800 lignes ? Vous sélectionnez le fichier, demandez à l'agent Cursor de le découper en modules propres en respectant vos conventions. Il propose un plan, vous validez, il exécute.",
      "On-boarding sur un nouveau repo ? Vous posez des questions au Chat en mentionnant @codebase. Cursor a indexé tout le projet — il vous explique l'architecture, les patterns, les dépendances. Comme un senior dev disponible 24/7.",
    ],
    transformationPunchline: "Cursor n'est pas un gadget. C'est un multiplicateur de force. Encore faut-il savoir l'utiliser.",
    programme: [
      {
        title: 'Le modèle mental Cursor',
        duration: '20 min',
        desc: "Comprendre COMMENT Cursor \"voit\" votre code. Pourquoi le contexte est roi, et comment l'utiliser à votre avantage.",
        bullets: [
          "La hiérarchie des contextes : fichier < sélection < @mentions < .cursorrules — et pourquoi ça change tout",
          "Pourquoi Cursor donne de meilleurs résultats que ChatGPT pour le code (et quand ce n'est PAS le cas)",
          "Le fichier .cursorrules qui transforme un outil générique en assistant spécialisé pour votre projet",
        ],
      },
      {
        title: "Les 3 modes de Cursor — et quand utiliser chacun",
        duration: '30 min',
        desc: "Tab, Cmd+K, Composer, Agent — chaque mode a son cas d'usage. La plupart des gens n'en utilisent qu'un. Vous maîtriserez les quatre.",
        bullets: [
          "Tab completion : les raccourcis et réglages qui doublent sa pertinence",
          "Cmd+K (inline edit) : l'outil parfait pour les modifications chirurgicales",
          "Composer : coder des features multi-fichiers entières en langage naturel",
          "Agent mode : laisser Cursor planifier ET exécuter des tâches complexes",
        ],
      },
      {
        title: "Exercices pratiques — votre code, vos projets",
        duration: "50 min — le cœur de l'atelier",
        desc: "On passe en mode pratique. Vous ouvrez votre projet (ou un repo fourni) et on applique tout ensemble.",
        bullets: [
          "Générer un CRUD complet (API + frontend + tests) en moins de 15 minutes avec Composer",
          "Configurer .cursorrules pour que chaque suggestion respecte VOS conventions",
          "Le workflow \"describe → generate → review → iterate\" qui élimine 80% du code boilerplate",
          "Utiliser @codebase, @docs, @web pour donner le bon contexte au bon moment",
          "Multi-fichier : comment Cursor modifie 5 fichiers de manière cohérente en une seule commande",
        ],
      },
      {
        title: "Construire votre setup Cursor parfait",
        duration: '20 min',
        desc: "Les réglages, extensions, et habitudes des power users. Vous repartez avec un Cursor optimisé pour votre stack.",
        bullets: [
          "Les 5 settings que les power users changent en premier (et pourquoi)",
          "Comment rédiger un .cursorrules qui fait la différence entre code médiocre et code excellent",
          "L'arbre de décision : Tab vs Cmd+K vs Composer vs Agent — pour chaque situation",
        ],
      },
    ],
    faq: [
      { q: "Faut-il Cursor Pro (payant) ?", a: "Recommandé mais pas obligatoire. La version gratuite permet de suivre l'atelier. Mais si vous êtes sérieux, les 20$/mois de Pro se rentabilisent dès le premier jour — vous comprendrez pourquoi pendant l'atelier." },
      { q: "Je viens de VS Code. La transition est difficile ?", a: "Cursor EST VS Code (c'est un fork). Tous vos raccourcis, extensions et settings fonctionnent. Vous gagnerez les fonctionnalités IA sans rien perdre de vos habitudes." },
      { q: "C'est adapté à mon langage / framework ?", a: "Cursor fonctionne avec tous les langages. On montre des exemples en TypeScript/React et Python, mais les techniques s'appliquent à tout : Go, Rust, Java, PHP, Swift... Le contexte et le prompting sont agnostiques." },
      { q: "Quelle différence avec l'atelier Codex ?", a: "Codex enseigne les principes de l'IA coding (agnostique d'outil). Cursor est un deep dive sur l'outil Cursor spécifiquement : ses 4 modes, .cursorrules, Composer, agents. Si vous utilisez déjà Cursor, prenez celui-ci." },
      { q: "C'est aussi utile pour des développeurs seniors ?", a: "Surtout pour eux. Les juniors apprennent à coder plus vite. Les seniors apprennent à architecturer avec l'IA — déléguer le boilerplate, se concentrer sur la logique métier. Nos participants seniors sont souvent les plus enthousiastes." },
      { q: "C'est quoi mAIjin ?", a: "mAIjin est le cabinet de référence en transformation IA en Suisse romande. Notre équipe utilise Claude Code et Cursor au quotidien pour développer des solutions IA pour nos clients. On enseigne ce qu'on pratique." },
    ],
  },
]

export function getAtelier(slug: string): Atelier | undefined {
  return ateliers.find((a) => a.slug === slug)
}
