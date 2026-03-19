import type { Metadata } from 'next'
import Link from 'next/link'
import { Play, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mon espace | mAIjin Academy',
}

export default function DashboardPage() {
  // TODO: Fetch user's purchased ateliers from database
  const purchased = [
    {
      slug: 'copilot',
      title: 'Maîtriser Microsoft Copilot en 2 heures',
      emoji: '🤖',
      progress: 0,
      hasReplay: false,
    },
  ]

  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Mon espace</h1>
          <p className="mt-2 text-text-secondary">
            Retrouvez vos formations et replays
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mes formations</h2>

          {purchased.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="mb-4 text-text-secondary">
                Vous n&apos;avez pas encore de formation.
              </p>
              <Link
                href="/#formations"
                className="inline-flex rounded-xl bg-primary-soft px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-indigo-100"
              >
                Découvrir les ateliers
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {purchased.map((item) => (
                <Link
                  key={item.slug}
                  href={`/dashboard/formation/${item.slug}`}
                  className="card group flex items-center gap-6 p-6"
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        2h de contenu
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award className="h-4 w-4" />
                        Certificat disponible
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary group-hover:bg-indigo-100 transition-all">
                    <Play className="h-5 w-5 ml-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
