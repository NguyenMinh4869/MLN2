import { achievements } from '../data/storyData'
import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function AchievementSection() {
  return (
    <section
      id="thanh-tuu"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#011b33] via-[#022424] to-brand-dark px-6 py-16 md:px-16 md:py-24"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/thitruong-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,#10b98122,transparent_60%),radial-gradient(circle_at_100%_100%,#38bdf81a,transparent_65%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10b981]">
          Thành tựu sau Đổi Mới
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Kết quả của sự chuyển đổi
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-emerald-100/80 md:text-lg">
          Hơn ba thập kỷ Đổi Mới đã làm thay đổi căn bản diện mạo kinh tế – xã hội Việt Nam, nâng
          cao đời sống của hàng triệu người dân và củng cố vị thế quốc gia trên trường quốc tế.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12} className="relative z-10 mt-12 grid gap-8 md:grid-cols-3">
        <div className="glass-card flex flex-col justify-between rounded-[2rem] p-8 text-center transition-transform hover:-translate-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#10b981]">
            {achievements.gdpGrowthLabel}
          </p>
          <p className="mt-6 mb-4 font-display text-5xl font-bold tracking-tight text-white drop-shadow-md">
            {achievements.gdpGrowthValue}
          </p>
          <div className="mx-auto mb-4 h-px w-12 bg-emerald-500/30" />
          <p className="text-sm leading-relaxed text-emerald-100/70">
            Việt Nam nằm trong nhóm các nước có tốc độ tăng trưởng cao và ổn định nhất khu vực.
          </p>
        </div>

        <div className="glass-card flex flex-col justify-between rounded-[2rem] p-8 text-center transition-transform hover:-translate-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#10b981]">
            {achievements.povertyReductionLabel}
          </p>
          <p className="mt-6 mb-4 font-display text-5xl font-bold tracking-tight text-white drop-shadow-md">
            {achievements.povertyReductionValue}
          </p>
          <div className="mx-auto mb-4 h-px w-12 bg-emerald-500/30" />
          <p className="text-sm leading-relaxed text-emerald-100/70">
            Được cộng đồng quốc tế ghi nhận là một trong những câu chuyện giảm nghèo ấn tượng nhất toàn cầu.
          </p>
        </div>

        <div className="glass-card flex flex-col justify-between rounded-[2rem] p-8 text-center transition-transform hover:-translate-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#10b981]">
            {achievements.manufacturingLabel}
          </p>
          <p className="mt-6 mb-4 font-display text-5xl font-bold tracking-tight text-white drop-shadow-md">
            {achievements.manufacturingValue}
          </p>
          <div className="mx-auto mb-4 h-px w-12 bg-emerald-500/30" />
          <p className="text-sm leading-relaxed text-emerald-100/70">
            Nhiều tập đoàn công nghệ lớn đặt trung tâm sản xuất tại Việt Nam, nâng tỷ trọng xuất khẩu công nghệ cao.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}

