import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TrainTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trainRef = useRef<SVGGElement | null>(null)
  const smokeRef = useRef<SVGEllipseElement | null>(null)

  useLayoutEffect(() => {
    const train = trainRef.current
    const smoke = smokeRef.current

    if (!train || !smoke) return

    const ctx = gsap.context(() => {
      // SVG viewBox is 0 0 320 60
      // Rail starts at x=20, ends at x=300 (length 280)
      // Train is at 20 initially. So it can move 280 - TrainWidth(36) = 244
      const trackWidth = 244

      gsap.fromTo(
        train,
        { x: 0 },
        {
          x: trackWidth,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 1,
          },
        }
      )

      gsap.fromTo(
        smoke,
        { opacity: 0.3, y: 0, scale: 0.8 },
        {
          opacity: 0.8,
          y: -18,
          scale: 1.5,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: 'power1.inOut',
        },
      )
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block"
    >
      <div className="flex flex-col items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/75 px-8 pt-3 pb-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all hover:bg-slate-900/90">
        <div className="mb-3 flex flex-col items-center gap-1.5 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-sky-400 drop-shadow-sm">
            Hành trình kinh tế Việt Nam
          </span>
          <span className="text-[9px] font-medium tracking-[0.35em] text-slate-400">
            TỪ TEM PHIẾU ĐẾN THỊ TRƯỜNG SỐ
          </span>
        </div>
        
        <svg
          viewBox="0 0 320 50"
          className="rail-noise h-[50px] w-[320px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="railGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Đuờng ray sáng */}
          <line
            x1="20"
            y1="36"
            x2="300"
            y2="36"
            stroke="url(#railGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Tàu hỏa */}
          <g ref={trainRef} transform="translate(20, 14)">
            {/* Đuôi khói */}
            <ellipse
              ref={smokeRef}
              className="train-smoke"
              cx="4"
              cy="-4"
              rx="5"
              ry="3"
              fill="#e2e8f0"
            />
            
            {/* Thân tàu */}
            <rect width="36" height="18" rx="4" fill="url(#railGradient)" />
            <rect x="1" y="1" width="34" height="16" rx="3" fill="#1e293b" />
            
            {/* Cửa sổ */}
            <rect x="5" y="4" width="8" height="6" rx="1.5" fill="#38bdf8" fillOpacity="0.8" />
            <rect x="16" y="4" width="8" height="6" rx="1.5" fill="#38bdf8" fillOpacity="0.8" />
            <rect x="27" y="4" width="4" height="6" rx="1.5" fill="#38bdf8" fillOpacity="0.8" />
            
            {/* Bánh xe */}
            <circle cx="8" cy="18" r="3.5" fill="#cbd5e1" />
            <circle cx="8" cy="18" r="1.5" fill="#0f172a" />
            
            <circle cx="28" cy="18" r="3.5" fill="#cbd5e1" />
            <circle cx="28" cy="18" r="1.5" fill="#0f172a" />
            
            {/* Trụ nối bánh xe */}
            <line x1="8" y1="18" x2="28" y2="18" stroke="#94a3b8" strokeWidth="1.5" />
          </g>
          
          {/* Các mốc thời gian dọc theo đường ray */}
          <circle cx="20" cy="36" r="3" fill="#fbbf24" stroke="#0f172a" strokeWidth="2" />
          <text x="20" y="48" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">1986</text>
          
          <circle cx="160" cy="36" r="3" fill="#f97316" stroke="#0f172a" strokeWidth="2" />
          <text x="160" y="48" fill="#f97316" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">ĐỔI MỚI</text>
          
          <circle cx="300" cy="36" r="3" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
          <text x="300" y="48" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">NAY</text>
        </svg>
      </div>
    </div>
  )
}

