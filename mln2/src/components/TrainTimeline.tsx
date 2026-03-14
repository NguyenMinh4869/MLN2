import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TrainTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trainRef = useRef<SVGRectElement | null>(null)
  const smokeRef = useRef<SVGEllipseElement | null>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const train = trainRef.current
    const smoke = smokeRef.current

    if (!container || !train || !smoke) return

    const ctx = gsap.context(() => {
      const trackWidth = 280

      gsap.fromTo(
        train,
        { x: 0 },
        {
          x: trackWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )

      gsap.fromTo(
        smoke,
        { opacity: 0.4, y: 0, scale: 1 },
        {
          opacity: 0.9,
          y: -14,
          scale: 1.2,
          repeat: -1,
          yoyo: true,
          duration: 1.6,
          ease: 'sine.inOut',
        },
      )
    }, container)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 md:block"
    >
      <div className="rounded-full border border-slate-700/70 bg-slate-950/80 px-6 py-3 shadow-soft-xl backdrop-blur">
        <div className="mb-2 flex flex-col items-center gap-1 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300/85">
          <span className="text-[10px] text-amber-300">
            Tem phiếu · Hành trình kinh tế Việt Nam · Thị trường số
          </span>
          <span className="text-[9px] font-normal tracking-[0.3em] text-slate-500">
            MLN122 · Scroll storytelling
          </span>
        </div>
        <svg
          viewBox="0 0 320 60"
          className="rail-noise h-14 w-[320px] text-slate-500/70"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="railGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="45%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          <line
            x1="20"
            y1="40"
            x2="300"
            y2="40"
            stroke="url(#railGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="46"
            x2="300"
            y2="46"
            stroke="#020617"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={0.8}
          />

          {Array.from({ length: 11 }).map((_, index) => {
            const x = 20 + index * 28
            return (
              <rect
                key={x}
                x={x}
                y={37}
                width="8"
                height="12"
                rx="1"
                fill="#020617"
                opacity={0.9}
              />
            )
          })}

          <g ref={trainRef} transform="translate(20, 18)">
            <rect width="36" height="16" rx="3" fill="#f97316" />
            <rect x="4" y="4" width="9" height="7" rx="1.5" fill="#0f172a" />
            <rect x="16" y="4" width="9" height="7" rx="1.5" fill="#0f172a" />
            <rect x="28" y="4" width="4" height="7" rx="1.5" fill="#0f172a" />

            <ellipse
              ref={smokeRef}
              className="train-smoke"
              cx="6"
              cy="-2"
              rx="6"
              ry="4"
              fill="#e5e7eb"
              fillOpacity={0.6}
            />

            <circle cx="10" cy="18" r="3" fill="#020617" />
            <circle cx="26" cy="18" r="3" fill="#020617" />
          </g>
        </svg>
      </div>
    </div>
  )
}

