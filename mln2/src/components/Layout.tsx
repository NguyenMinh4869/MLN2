import type { ReactNode } from 'react'
import { TrainTimeline } from './TrainTimeline'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-rail-gradient text-slate-100">
      <TrainTimeline />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_0_0,#fb923c11,transparent_55%),radial-gradient(circle_at_100%_100%,#0ea5e911,transparent_55%)] mix-blend-screen" />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-4 pb-24 pt-10 md:px-10 lg:px-16 lg:pt-16">
        {children}
      </main>
    </div>
  )
}

