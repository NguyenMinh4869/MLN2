import { RevealOnScroll } from '../animations/useRevealOnScroll'
import { LineChart, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export function MarketEconomySection() {
  return (
    <section
      id="thi-truong"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-brand-dark via-[#05111b] to-[#011b33] px-6 py-16 md:px-16 md:py-24"
    >
      {/* Background Images */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/thitruong-bg.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0,#38bdf835,transparent_60%),radial-gradient(circle_at_100%_100%,#0ea5e920,transparent_65%)] mix-blend-screen" />

      {/* Animated Icons */}
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-24 left-10 text-brand-blue/10"
      >
        <Globe size={200} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-24 right-12 text-[#38bdf8]/10"
      >
        <LineChart size={180} strokeWidth={1} />
      </motion.div>

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
          Sau Đổi Mới · Thể chế kinh tế mới
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Cải cách thể chế kinh tế &amp; Nền kinh tế nhiều thành phần
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-sky-100/80 md:text-lg">
          Từ sau Đổi Mới, Việt Nam từng bước xây dựng và hoàn thiện thể chế{' '}
          <span className="font-bold text-brand-blue">
            kinh tế thị trường định hướng xã hội chủ nghĩa
          </span>
          , với nhiều loại hình sở hữu, nhiều thành phần kinh tế cùng phát triển.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[1.3fr_1.1fr]">
        <RevealOnScroll delay={0.1} className="space-y-8">
          <div className="glass-card grid gap-4 rounded-2xl p-6 text-sm text-sky-50/90 md:text-[15px]">
            <div>
              <p className="font-display text-base font-bold text-sky-300">
                Trước Đổi Mới
              </p>
              <ul className="mt-3 space-y-2 leading-relaxed text-sky-100/70">
                <li className="flex gap-2"><span className="text-sky-500/50">■</span> Nhà nước ấn định giá cả, phân phối hàng hóa theo kế hoạch.</li>
                <li className="flex gap-2"><span className="text-sky-500/50">■</span> Doanh nghiệp không có quyền tự chủ sản xuất – kinh doanh.</li>
                <li className="flex gap-2"><span className="text-sky-500/50">■</span> Sản xuất chủ yếu chạy theo chỉ tiêu, ít quan tâm hiệu quả.</li>
              </ul>
            </div>
            <div className="my-2 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />
            <div>
              <p className="font-display text-base font-bold text-sky-300">
                Sau Đổi Mới
              </p>
              <ul className="mt-3 space-y-2 leading-relaxed text-sky-100/70">
                <li className="flex gap-2"><span className="text-brand-blue">■</span> Giá cả dần được xác lập theo quan hệ cung – cầu trên thị trường.</li>
                <li className="flex gap-2"><span className="text-brand-blue">■</span> Doanh nghiệp được giao quyền tự chủ, tự chịu trách nhiệm.</li>
                <li className="flex gap-2">
                  <span className="text-brand-blue">■</span> Hình thành các loại thị trường: hàng hóa, vốn, lao động, bất động sản...
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-2xl border border-brand-blue/20 p-6 text-sm text-sky-50/90 md:text-[15px]">
            <p className="font-display text-lg font-bold text-white">
              Hoàn thiện khung khổ pháp lý
            </p>
            <p className="mt-2 text-sky-100/80">
              Một loạt đạo luật kinh tế quan trọng ra đời, tạo hành lang pháp lý cho các chủ thể
              tham gia thị trường:
            </p>
            <div className="mt-6 grid gap-3 text-xs text-sky-100/90 sm:grid-cols-2 md:text-[13px]">
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-4 transition hover:bg-white/5">
                <p className="font-bold text-white">Luật Doanh nghiệp</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Mở rộng quyền kinh doanh, bảo đảm quyền tự do thành lập doanh nghiệp.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-4 transition hover:bg-white/5">
                <p className="font-bold text-white">Luật Đầu tư</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Thu hút vốn đầu tư trong nước và nước ngoài, thúc đẩy tăng trưởng.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-4 transition hover:bg-white/5">
                <p className="font-bold text-white">Luật Đất đai</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Hoàn thiện cơ chế sử dụng đất như một loại tư liệu sản xuất đặc biệt.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-4 transition hover:bg-white/5">
                <p className="font-bold text-white">Luật Cạnh tranh</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Bảo vệ môi trường cạnh tranh lành mạnh, chống độc quyền, chống lạm dụng vị thế.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18} className="space-y-8">
           <div className="glass-card rounded-2xl border border-brand-blue/20 p-6 text-sm text-sky-50/90 md:text-[15px]">
            <p className="font-display text-lg font-bold text-white">
              Nhà nước Kiến tạo & Hài hòa lợi ích
            </p>
            <p className="mt-2 text-[13px] md:text-sm text-sky-100/80 leading-relaxed">
              Nhà nước chuyển từ "quản lý bằng mệnh lệnh" sang "kiến tạo phát triển" và điều tiết vĩ mô, đảm bảo hài hòa 3 vai trò cơ bản:
            </p>
            <div className="mt-6 grid gap-3 text-xs text-sky-100/90 sm:grid-cols-1 md:text-[13px]">
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3">
                <p className="font-bold flex items-center gap-2 text-brand-blue"><span className="text-lg">🏛️</span> Nhà nước</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Thu ngân sách, xây dựng kết cấu hạ tầng, giữ vững ổn định kinh tế vĩ mô.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3">
                <p className="font-bold flex items-center gap-2 text-brand-blue"><span className="text-lg">🏢</span> Doanh nghiệp</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Tự do kinh doanh, tìm kiếm lợi nhuận, cung cấp hàng hóa dịch vụ, tái đầu tư mở rộng sản xuất.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3">
                <p className="font-bold flex items-center gap-2 text-brand-blue"><span className="text-lg">👥</span> Người lao động</p>
                <p className="mt-2 text-[12px] text-sky-100/60 leading-relaxed">
                  Làm việc tăng thu nhập, đảm bảo việc làm, có bảo hiểm xã hội và phúc lợi tốt, đồng hành với phát triển kinh tế.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <p className="font-display text-lg font-bold text-white">
              Cơ cấu Kinh tế nhiều thành phần
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sky-100/80 md:text-[15px]">
              Các thành phần kinh tế cùng tồn tại, hợp tác và cạnh tranh bình đẳng theo pháp luật:
            </p>
            <div className="mt-6 grid gap-4 text-xs text-sky-50/95 sm:grid-cols-2 md:text-[13px]">
              <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/40 p-4 transition hover:bg-white/5 hover:-translate-y-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  ▲
                </div>
                <div>
                  <p className="font-bold text-white">Nhà nước</p>
                  <p className="mt-1 text-[12px] text-sky-100/60 leading-relaxed">
                    Giữ vai trò chủ đạo, bảo đảm ổn định vĩ mô.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/40 p-4 transition hover:bg-white/5 hover:-translate-y-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  ◎
                </div>
                <div>
                  <p className="font-bold text-white">Tập thể</p>
                  <p className="mt-1 text-[12px] text-sky-100/60 leading-relaxed">
                    Hợp tác xã kiểu mới, liên kết kinh tế vừa và nhỏ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/40 p-4 transition hover:bg-white/5 hover:-translate-y-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  ★
                </div>
                <div>
                  <p className="font-bold text-white">Tư nhân &amp; hộ gia đình</p>
                  <p className="mt-1 text-[12px] text-sky-100/60 leading-relaxed">
                    Động lực quan trọng, tự do khởi nghiệp sáng tạo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/40 p-4 transition hover:bg-white/5 hover:-translate-y-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  🌐
                </div>
                <div>
                  <p className="font-bold text-white">Đầu tư nước ngoài (FDI)</p>
                  <p className="mt-1 text-[12px] text-sky-100/60 leading-relaxed">
                    Cầu nối thị trường và công nghệ quốc tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

