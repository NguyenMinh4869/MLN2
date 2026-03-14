import { motion } from 'framer-motion'
import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function DoiMoiSection() {
  return (
    <section
      id="doi-moi"
      className="section-shadow relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/90 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0,#22c55e33,transparent_55%),radial-gradient(circle_at_90%_100%,#38bdf829,transparent_55%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          1986 · Đại hội VI · Đổi Mới
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-emerald-50 md:text-3xl lg:text-4xl">
          Đổi Mới 1986 – Bước ngoặt lịch sử
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/90 md:text-[15px]">
          Trước khủng hoảng kinh tế – xã hội sâu sắc, Việt Nam tiến hành cải cách toàn diện bắt đầu
          từ Đại hội Đảng VI năm 1986. Từ đây, nền kinh tế chuyển từ cơ chế tập trung quan liêu bao
          cấp sang{' '}
          <span className="font-semibold text-emerald-200">
            kinh tế thị trường định hướng xã hội chủ nghĩa
          </span>
          .
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-8 grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-center">
        <RevealOnScroll delay={0.1} className="space-y-4 text-sm text-emerald-100/90">
          <p>
            Đổi Mới không chỉ là thay đổi chính sách kinh tế trước mắt, mà là{' '}
            <span className="font-semibold text-emerald-200">thay đổi tư duy phát triển</span>, coi
            trọng quy luật khách quan của kinh tế thị trường, đồng thời giữ vững định hướng xã hội
            chủ nghĩa.
          </p>
          <ul className="space-y-2 text-[13px] leading-relaxed md:text-sm">
            <li>• Thừa nhận tồn tại khách quan của sản xuất hàng hóa và các quy luật thị trường.</li>
            <li>• Mở rộng quyền tự chủ cho các doanh nghiệp trong sản xuất – kinh doanh.</li>
            <li>• Từng bước xóa bỏ chế độ tem phiếu, chuyển sang mua bán theo giá thị trường.</li>
            <li>• Thu hút mạnh mẽ các nguồn lực trong và ngoài nước cho phát triển.</li>
          </ul>
        </RevealOnScroll>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-900/90 via-slate-950 to-slate-900/95 p-[1px]"
          >
            <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-slate-950/95 via-slate-950 to-emerald-900/80 px-5 py-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0,#22c55e33,transparent_50%),radial-gradient(circle_at_80%_100%,#4ade8033,transparent_55%)] mix-blend-soft-light" />

              <div className="relative space-y-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Ánh sáng Đổi Mới
                </p>
                <p className="text-[13px] leading-relaxed text-emerald-50/95 md:text-sm">
                  Hình dung ánh sáng lan tỏa dần, xua đi gam màu u tối của thời bao cấp, mở ra{' '}
                  <span className="font-semibold text-emerald-200">một quỹ đạo phát triển mới</span>{' '}
                  cho nền kinh tế Việt Nam.
                </p>

                <div className="mt-4 h-24 w-full rounded-full bg-gradient-to-r from-amber-400/40 via-emerald-400/55 to-sky-300/45 blur-2xl" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="relative mx-auto flex max-w-xs flex-col gap-2 rounded-2xl border border-emerald-500/50 bg-slate-950/75 px-4 py-3 text-left text-[13px] text-emerald-50/95 shadow-soft-xl backdrop-blur"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
                    Từ khủng hoảng đến đổi mới
                  </p>
                  <p>
                    Đổi Mới 1986 khẳng định:{' '}
                    <span className="font-semibold text-emerald-200">
                      tôn trọng quy luật thị trường
                    </span>{' '}
                    nhưng Nhà nước vẫn giữ vai trò định hướng, điều tiết để bảo đảm công bằng xã
                    hội.
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

