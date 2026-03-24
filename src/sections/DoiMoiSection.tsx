import { motion } from 'framer-motion'
import { RevealOnScroll } from '../animations/useRevealOnScroll'
import { Sun, Sprout } from 'lucide-react'

export function DoiMoiSection() {
  return (
    <section
      id="doi-moi"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-brand-dark via-[#081812] to-[#041c14] px-6 py-16 md:px-16 md:py-24"
    >
      {/* Background Images */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/doimoi-bg.png')] bg-cover bg-center opacity-90 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0,#10b98135,transparent_60%),radial-gradient(circle_at_90%_100%,#38bdf820,transparent_60%)] mix-blend-screen" />

      {/* Animated Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute top-16 right-[-20px] text-[#10b981]/10"
      >
        <Sun size={220} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-16 left-12 text-[#38bdf8]/10"
      >
        <Sprout size={140} strokeWidth={1} />
      </motion.div>

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10b981]">
          1986 · Đại hội VI · Đổi Mới
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Đổi Mới 1986 – Bước ngoặt lịch sử
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-emerald-100/80 md:text-lg">
          Trước khủng hoảng kinh tế – xã hội sâu sắc, Việt Nam tiến hành cải cách toàn diện.
          Từ đây, nền kinh tế chuyển từ cơ chế tập trung quan liêu bao
          cấp sang{' '}
          <span className="font-bold text-white">
            kinh tế thị trường định hướng xã hội chủ nghĩa
          </span>
          .
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <RevealOnScroll delay={0.1} className="space-y-6 text-base text-emerald-100/80">
          <p className="leading-relaxed">
            Đổi Mới không chỉ là thay đổi chính sách kinh tế trước mắt, mà là{' '}
            <span className="font-bold text-emerald-400">thay đổi tư duy phát triển</span>. Coi
            trọng quy luật khách quan của kinh tế thị trường, đồng thời giữ vững định hướng cốt lõi.
          </p>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex gap-3">
              <span className="mt-1 text-[#10b981]">✦</span>
              <span>Thừa nhận tồn tại khách quan của sản xuất hàng hóa và các quy luật thị trường.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#10b981]">✦</span>
              <span>Mở rộng quyền tự chủ cho các doanh nghiệp trong sản xuất – kinh doanh.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#10b981]">✦</span>
              <span>Từng bước xóa bỏ chế độ tem phiếu, chuyển sang mua bán theo giá thị trường.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#10b981]">✦</span>
              <span>Thu hút mạnh mẽ các nguồn lực trong và ngoài nước cho phát triển.</span>
            </li>
          </ul>
        </RevealOnScroll>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card relative overflow-hidden rounded-[2rem] p-1"
          >
            <div className="relative h-full rounded-[1.8rem] bg-brand-dark/90 px-6 py-10 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0,#10b98115,transparent_70%)]" />

              <div className="relative space-y-4 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#10b981]">
                  Ánh sáng Đổi Mới
                </p>
                <p className="text-sm leading-relaxed text-emerald-100/80">
                  Ánh sáng lan tỏa dần, xua đi gam màu đen tối của thời kỳ bao cấp, mở ra{' '}
                  <span className="font-bold text-white">một quỹ đạo phát triển mới</span>{' '}
                  cho dân tộc.
                </p>

                <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
                <div className="absolute inset-x-0 top-1/2 -z-10 h-32 w-full -translate-y-1/2 rounded-full bg-[#10b981]/10 blur-[60px]" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mx-auto mt-8 flex max-w-xs flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-left text-[13px] text-white backdrop-blur shadow-2xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Từ khủng hoảng đến hồi sinh
                  </p>
                  <p className="leading-relaxed text-emerald-100/80">
                    Sự chuyển biến kỳ diệu khi:{' '}
                    <span className="font-bold text-emerald-400">
                      tôn trọng quy luật thị trường
                    </span>{' '}
                    kết hợp với sự điều tiết hài hòa.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

