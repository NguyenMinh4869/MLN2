import { motion } from 'framer-motion'

type HeroSectionProps = {
  onStartJourney: () => void
}

export function HeroSection({ onStartJourney }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-shadow relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-900/80 px-6 py-12 md:px-12 md:py-16 lg:flex lg:items-center lg:gap-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#fbbf2408,transparent_55%),radial-gradient(circle_at_90%_100%,#38bdf80d,transparent_60%)]" />

      <div className="relative z-10 max-w-xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_#facc15]" />
          Chuyên đề MLN122 · Scroll Storytelling
        </p>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
          Chuyến tàu thời gian:
          <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-sky-300 bg-clip-text text-transparent">
            Từ Tem Phiếu đến Thị Trường Số
          </span>
        </h1>

        <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-200/90 md:text-base">
          Hành trình khám phá sự chuyển đổi của nền kinh tế Việt Nam từ cơ chế kế hoạch hóa bao
          cấp đến nền kinh tế thị trường định hướng xã hội chủ nghĩa.
        </p>

        <p className="max-w-xl text-sm leading-relaxed text-slate-300/85">
          Cuộn xuống và tưởng tượng bạn đang ngồi trên một chuyến tàu xuyên thời gian, đi qua những
          năm tháng tem phiếu, khủng hoảng, Đổi Mới và cả thời đại kinh tế số hôm nay.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={onStartJourney}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-xl transition hover:-translate-y-0.5 hover:shadow-[0_25px_80px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Bắt đầu hành trình
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/90 text-[11px] text-amber-200">
              ⬇
            </span>
          </button>

          <span className="flex items-center gap-2 text-xs text-slate-300/80">
            <span className="h-[1px] w-8 bg-gradient-to-r from-slate-500/60 to-slate-400/10" />
            Cuộn để tiếp tục câu chuyện
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full flex-1 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="rail-noise relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#facc1520,transparent_55%),radial-gradient(circle_at_90%_80%,#38bdf818,transparent_60%)]" />

          <motion.div
            initial={{ x: '-30%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-gradient-to-r from-amber-900/50 via-slate-900/80 to-sky-900/60 blur-3xl"
          />

          <div className="absolute inset-x-6 bottom-10">
            <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
              <span>Trước 1986</span>
              <span>Đổi mới</span>
              <span>Hiện nay</span>
            </div>
            <div className="h-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-sky-400 shadow-[0_0_25px_rgba(248,250,252,0.45)]" />
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-700/70 bg-slate-950/80 px-5 py-4 text-center text-xs text-slate-200/90 backdrop-blur">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                Viet Nam · 1945 → nay
              </span>
              <p className="text-[11px] leading-relaxed text-slate-200/90">
                Từ nền kinh tế bao cấp khan hiếm hàng hóa đến một nền kinh tế năng động, hội nhập và
                số hóa mạnh mẽ.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

