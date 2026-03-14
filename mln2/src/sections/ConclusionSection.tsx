import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function ConclusionSection() {
  return (
    <section
      id="ket-luan"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-brand-dark via-brand-dark to-[#050505] px-6 py-16 md:px-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0,#facc1515,transparent_55%),radial-gradient(circle_at_85%_100%,#38bdf812,transparent_60%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
          Trang cuối · Tư duy tổng kết
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Kinh tế thị trường định hướng xã hội chủ nghĩa
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là kết quả của cả một
          hành trình Đổi Mới thể chế, đa dạng hóa thành phần kinh tế và hài hòa các quan hệ lợi ích
          trong xã hội.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12} className="relative z-10 mt-12 grid gap-8 md:grid-cols-3">
        <div className="glass-card rounded-[1.5rem] p-6 text-[15px] text-slate-300 transition-all hover:bg-white/5 hover:-translate-y-1">
          <p className="font-display text-lg font-bold text-brand-gold">
            Đổi mới thể chế
          </p>
          <div className="my-3 h-px w-10 bg-brand-gold/50" />
          <p className="leading-relaxed">
            Hoàn thiện khung pháp lý, tôn trọng quy luật thị trường nhưng vẫn bảo đảm vai trò quản
            lý vĩ mô của Nhà nước.
          </p>
        </div>
        <div className="glass-card rounded-[1.5rem] p-6 text-[15px] text-slate-300 transition-all hover:bg-white/5 hover:-translate-y-1">
          <p className="font-display text-lg font-bold text-brand-gold">
            Đa dạng thành phần kinh tế
          </p>
          <div className="my-3 h-px w-10 bg-brand-gold/50" />
          <p className="leading-relaxed">
            Các thành phần kinh tế bình đẳng trước pháp luật, cùng phát triển lâu dài, hợp tác và
            cạnh tranh lành mạnh.
          </p>
        </div>
        <div className="glass-card rounded-[1.5rem] p-6 text-[15px] text-slate-300 transition-all hover:bg-white/5 hover:-translate-y-1">
          <p className="font-display text-lg font-bold text-brand-gold">
            Hài hòa quan hệ lợi ích
          </p>
          <div className="my-3 h-px w-10 bg-brand-gold/50" />
          <p className="leading-relaxed">
            Kết hợp chặt chẽ lợi ích của Nhà nước, doanh nghiệp và người lao động; gắn tăng trưởng
            với tiến bộ và công bằng xã hội.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="relative z-10 mt-12 max-w-3xl">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-[1px]">
          <div className="relative rounded-[1.95rem] bg-gradient-to-r from-black/80 to-black/40 px-8 py-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,#facc1515,transparent_50%)]" />
            <p className="font-bold uppercase tracking-[0.25em] text-brand-gold text-xs">
              Câu hỏi gợi mở
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Nếu coi chuyến tàu thời gian này là hành trình của chính mình, bạn sẽ đặt câu hỏi gì
              cho thế hệ đi trước và thế hệ tương lai về cách phát triển kinh tế gắn với công bằng xã
              hội?
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

