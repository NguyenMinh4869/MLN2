import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function ConclusionSection() {
  return (
    <section
      id="ket-luan"
      className="section-shadow relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0,#fbbf2420,transparent_55%),radial-gradient(circle_at_85%_100%,#38bdf81f,transparent_60%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/80">
          Trang cuối · Tư duy tổng kết
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
          Kinh tế thị trường định hướng xã hội chủ nghĩa
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-[15px]">
          Mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là kết quả của cả một
          hành trình Đổi Mới thể chế, đa dạng hóa thành phần kinh tế và hài hòa các quan hệ lợi ích
          trong xã hội.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12} className="relative z-10 mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-5 text-[13px] text-slate-50/95 md:text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/90">
            Đổi mới thể chế
          </p>
          <p className="mt-2 leading-relaxed">
            Hoàn thiện khung pháp lý, tôn trọng quy luật thị trường nhưng vẫn bảo đảm vai trò quản
            lý vĩ mô của Nhà nước.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-5 text-[13px] text-slate-50/95 md:text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/90">
            Đa dạng thành phần kinh tế
          </p>
          <p className="mt-2 leading-relaxed">
            Các thành phần kinh tế bình đẳng trước pháp luật, cùng phát triển lâu dài, hợp tác và
            cạnh tranh lành mạnh.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-5 text-[13px] text-slate-50/95 md:text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/90">
            Hài hòa quan hệ lợi ích
          </p>
          <p className="mt-2 leading-relaxed">
            Kết hợp chặt chẽ lợi ích của Nhà nước, doanh nghiệp và người lao động; gắn tăng trưởng
            với tiến bộ và công bằng xã hội.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="relative z-10 mt-10 max-w-3xl">
        <div className="rounded-2xl border border-slate-600/70 bg-slate-950/90 px-5 py-4 text-sm text-slate-100/90 shadow-soft-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300/90">
            Câu hỏi gợi mở
          </p>
          <p className="mt-2 text-[13px] leading-relaxed md:text-sm">
            Nếu coi chuyến tàu thời gian này là hành trình của chính mình, bạn sẽ đặt câu hỏi gì
            cho thế hệ đi trước và thế hệ tương lai về cách phát triển kinh tế gắn với công bằng xã
            hội?
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}

