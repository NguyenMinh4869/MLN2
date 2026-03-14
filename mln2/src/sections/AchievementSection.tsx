import { achievements } from '../data/storyData'
import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function AchievementSection() {
  return (
    <section
      id="thanh-tuu"
      className="section-shadow relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-b from-slate-950 via-emerald-950/95 to-slate-950 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,#22c55e33,transparent_55%),radial-gradient(circle_at_100%_100%,#38bdf824,transparent_60%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Thành tựu sau Đổi Mới
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-emerald-50 md:text-3xl lg:text-4xl">
          Kết quả của sự chuyển đổi
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/90 md:text-[15px]">
          Hơn ba thập kỷ Đổi Mới đã làm thay đổi căn bản diện mạo kinh tế – xã hội Việt Nam, nâng
          cao đời sống của hàng triệu người dân.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12} className="relative z-10 mt-8 grid gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-2xl border border-emerald-400/50 bg-slate-950/80 px-4 py-5 text-center shadow-soft-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
            {achievements.gdpGrowthLabel}
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-emerald-100">
            {achievements.gdpGrowthValue}
          </p>
          <p className="mt-2 text-[11px] text-emerald-100/80">
            Việt Nam nằm trong nhóm các nước có tốc độ tăng trưởng cao trong khu vực.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-emerald-400/50 bg-slate-950/80 px-4 py-5 text-center shadow-soft-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
            {achievements.povertyReductionLabel}
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-emerald-100">
            {achievements.povertyReductionValue}
          </p>
          <p className="mt-2 text-[11px] text-emerald-100/80">
            Việt Nam được quốc tế ghi nhận là một trong những câu chuyện giảm nghèo thành công.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-emerald-400/50 bg-slate-950/80 px-4 py-5 text-center shadow-soft-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
            {achievements.manufacturingLabel}
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-emerald-100">
            {achievements.manufacturingValue}
          </p>
          <p className="mt-2 text-[11px] text-emerald-100/80">
            Nhiều tập đoàn lớn đặt nhà máy, trung tâm sản xuất tại Việt Nam, tạo việc làm và giá trị
            xuất khẩu cao.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}

