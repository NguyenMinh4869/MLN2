import { motion } from 'framer-motion'

type HeroSectionProps = {
  onStartJourney: () => void
}

export function HeroSection({ onStartJourney }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-[#0c0d12] via-[#050505] to-[#0a0a0c] px-6 py-16 md:px-16 md:py-24 lg:flex lg:items-center lg:gap-16"
    >
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
      </div>
      
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="relative z-10 w-full lg:w-[55%] space-y-8 lg:pr-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold shadow-glow-gold"></span>
            </span>
            Chuyên đề MLN122 · Scroll Storytelling
          </p>
        </motion.div>

        <motion.h1 
          className="font-display text-balance text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl lg:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          Chuyến tàu thời gian
          <span className="mt-2 block bg-gradient-to-r from-brand-gold via-orange-400 to-brand-red bg-clip-text text-transparent pb-2 leading-snug">
            Từ Tem Phiếu đến Thị Trường Số
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Hành trình khám phá sự chuyển đổi vĩ đại của nền kinh tế Việt Nam từ cơ chế kế hoạch hóa bao cấp đến nền kinh tế thị trường hội nhập toàn cầu.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <button
            type="button"
            onClick={onStartJourney}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#050505] transition-all hover:scale-105 hover:bg-brand-gold hover:shadow-glow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            <span className="relative z-10 transition-colors">
              Khởi hành chuyến tàu
            </span>
            <div className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#050505] text-[11px] text-white transition-transform group-hover:translate-y-1">
              ↓
            </div>
          </button>

          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-slate-400">
            <span className="h-[1px] w-12 bg-gradient-to-r from-slate-500/60 to-transparent" />
            Cuộn để khám phá
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 w-full lg:w-[45%] lg:mt-0 flex flex-col justify-center items-center lg:items-end">
        <motion.div
           initial={{ opacity: 0, y: 40, rotateX: -15, rotateY: 15 }}
           animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
           style={{ transformPerspective: 1000 }}
           className="glass-card relative w-full max-w-[26rem] overflow-hidden rounded-[2.5rem] p-[1px] shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-[2.5rem]" />
          <div className="relative w-full rounded-[2.45rem] bg-brand-dark/90 px-8 py-10 flex flex-col gap-8 overflow-hidden backdrop-blur-2xl">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-gold/15 blur-[60px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-blue/15 blur-[60px]" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                Dấu ấn thời gian
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-3">3 Cột mốc lịch sử</h3>
            </div>

            <div className="relative z-10 ml-3 mt-4 space-y-8 border-l border-white/10 before:absolute before:inset-y-0 before:-left-[1px] before:w-[2px] before:bg-gradient-to-b before:from-brand-red before:via-brand-gold before:to-brand-blue">
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1.5 h-[8px] w-[8px] rounded-full bg-brand-red shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <h4 className="font-display text-[15px] font-bold tracking-tight text-white mb-1 drop-shadow-md">Trước 1986</h4>
                <p className="text-sm leading-relaxed text-slate-400">Nền kinh tế bao cấp, phân phối bằng hiện vật và tem phiếu.</p>
              </div>
              
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1.5 h-[8px] w-[8px] rounded-full bg-brand-gold shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                <h4 className="font-display text-[15px] font-bold tracking-tight text-brand-gold mb-1 drop-shadow-md">Đại hội VI (1986)</h4>
                <p className="text-sm leading-relaxed text-slate-200">Quyết định Đổi Mới, mở cửa xóa bỏ tư duy quan liêu.</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1.5 h-[8px] w-[8px] rounded-full bg-brand-blue shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <h4 className="font-display text-[15px] font-bold tracking-tight text-white mb-1 drop-shadow-md">Hiện tại</h4>
                <p className="text-sm leading-relaxed text-slate-400">Kinh tế thị trường năng động, hội nhập quốc tế mạnh mẽ.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

