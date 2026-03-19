import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAtelier } from '@/lib/ateliers'
import { Play, CheckCircle, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier) return {}
  return { title: `${atelier.title} | Mon espace` }
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params
  const atelier = getAtelier(slug)
  if (!atelier) notFound()

  const chapters = atelier.modules.map((mod, i) => ({
    title: mod.title,
    duration: i === 2 ? '45 min' : '25 min',
    videoUrl: null as string | null,
    completed: false,
  }))

  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à mon espace
        </Link>

        <div className="mb-10">
          <span className="text-4xl">{atelier.emoji}</span>
          <h1 className="mt-4 text-3xl font-bold">{atelier.title}</h1>
          <p className="mt-2 text-text-secondary">{atelier.subheadline}</p>
        </div>

        <div className="card mb-8 flex aspect-video items-center justify-center overflow-hidden">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft">
              <Play className="h-8 w-8 text-primary ml-1" />
            </div>
            <p className="text-text-secondary">
              Le replay sera disponible ici après votre atelier
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Vidéo hébergée via Loom ou YouTube
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="mb-4 text-xl font-semibold">Chapitres</h2>
          {chapters.map((chapter, i) => (
            <div
              key={i}
              className={`card flex items-center gap-4 p-4 ${
                chapter.videoUrl
                  ? 'cursor-pointer'
                  : 'opacity-60'
              }`}
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                  chapter.completed
                    ? 'bg-emerald-50 text-emerald-500'
                    : chapter.videoUrl
                      ? 'bg-primary-soft text-primary'
                      : 'bg-slate-100 text-text-muted'
                }`}
              >
                {chapter.completed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : chapter.videoUrl ? (
                  <Play className="h-5 w-5 ml-0.5" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{chapter.title}</h3>
                <p className="text-sm text-text-muted">{chapter.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
