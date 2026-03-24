import { RevealOnScroll } from '../animations/useRevealOnScroll'
import { Ticket, Building } from 'lucide-react'
import { motion } from 'framer-motion'

export function BaoCapSection() {
  return (
    <section
      id="bao-cap"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#1a1410] via-[#0f0a07] to-brand-dark px-6 py-16 md:px-16 md:py-24"
    >
      {/* Background Images */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/baocap-bg.png')] bg-cover bg-center opacity-20 grayscale mix-blend-luminosity" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,#fbbf2430,transparent_55%),radial-gradient(circle_at_100%_100%,#facc1515,transparent_60%)] mix-blend-screen" />

      {/* Animated Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 right-20 text-[#fde68a]/10"
      >
        <Ticket size={160} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-20 left-10 text-[#fde68a]/5"
      >
        <Building size={200} strokeWidth={1} />
      </motion.div>

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b28a5a]">
          Trước Đổi Mới · Thời bao cấp
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-[#fde68a] md:text-5xl lg:text-6xl">
          Kinh tế Kế hoạch hóa Tập trung
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-[#fef3c7]/80 md:text-lg">
          Trước năm 1986, nền kinh tế Việt Nam vận hành theo cơ chế kế hoạch hóa tập trung bao cấp.
          Nhà nước quyết định phần lớn hoạt động sản xuất, phân phối và giá cả trong nền kinh tế.
        </p>

        <div className="grid gap-8 pt-8 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <div className="space-y-6 text-base text-[#fef3c7]/80">
            <div className="space-y-4">
              <p className="font-display text-lg font-semibold text-[#facc15]">
                Đặc trưng cốt lõi:
              </p>
              <ul className="space-y-3 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f59e0b] shadow-glow-gold" />
                  <span>
                    Về sở hữu:{' '}
                    <span className="font-semibold text-white">Nhà nước và tập thể</span> chiếm chủ đạo, tư hữu bị xóa bỏ cơ bản.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f59e0b] shadow-glow-gold" />
                  <span>
                    Về phân phối:{' '}
                    <span className="font-semibold text-white">Mua bằng tem phiếu</span> thay vì giao dịch thanh toán trên thị trường.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f59e0b] shadow-glow-gold" />
                  <span>
                    Về quản lý:{' '}
                    <span className="font-semibold text-white">Mệnh lệnh hành chính</span>, Nhà nước quyết định sản xuất cái gì, bao nhiêu, cho ai.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 space-y-4">
              <p className="font-display text-lg font-semibold text-[#facc15]">
                3 hình thức "Bao Cấp" chủ yếu:
              </p>
              <div className="grid gap-3 text-sm md:text-[15px]">
                <div className="glass-card rounded-xl p-4 transition-colors hover:bg-white/5">
                  <span className="font-bold text-white">Bao cấp qua giá:</span> Nhà nước quyết định giá nông sản và tư liệu sản xuất thấp hơn nhiều so với giá trị thực.
                </div>
                <div className="glass-card rounded-xl p-4 transition-colors hover:bg-white/5">
                  <span className="font-bold text-white">Bao cấp qua tem phiếu:</span> Hàng hóa thiết yếu được phân phối theo định mức ngặt nghèo, loại bỏ quan hệ cung cầu.
                </div>
                <div className="glass-card rounded-xl p-4 transition-colors hover:bg-white/5">
                  <span className="font-bold text-white">Bao cấp vốn:</span> Doanh nghiệp quốc doanh được cấp vốn, vật tư và bù lỗ toàn bộ nếu kinh doanh kém hiệu quả.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b28a5a]">
              Hình ảnh ẩn dụ
            </p>
            <div className="glass-card grid gap-3 rounded-2xl p-5">
              <div className="rounded-xl border border-white/5 bg-black/40 p-4 transition-all hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl">
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-[#fde68a]">
                  Tem phiếu
                </p>
                <p className="mt-1.5 text-sm text-[#fef3c7]/70">
                  Phiếu gạo, phiếu vải... tượng trưng cho việc tiếp cận hàng hóa thông
                  qua phân phối tập trung.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/30 p-4 transition-all hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl">
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-[#fde68a]">
                  Xếp hàng mua gạo
                </p>
                <p className="mt-1.5 text-sm text-[#fef3c7]/70">
                  Hình ảnh người dân xếp hàng dài bất kể nắng mưa để đổi nhu yếu phẩm.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4 transition-all hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl">
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-[#fde68a]">
                  Cửa hàng mậu dịch
                </p>
                <p className="mt-1.5 text-sm text-[#fef3c7]/70">
                  Không gian mua bán khép kín, giá cố định, ít lựa chọn – đối lập với siêu thị hiện đại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25} className="relative z-10 mt-12 grid gap-4 md:grid-cols-3">
        <div className="group rounded-2xl border border-white/5 bg-black/40 p-5 text-center transition-all hover:bg-brand-red/10">
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">Khan hiếm hàng hóa</p>
        </div>
        <div className="group rounded-2xl border border-white/5 bg-black/40 p-5 text-center transition-all hover:bg-brand-gold/10">
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">Động lực sản xuất yếu</p>
        </div>
        <div className="group rounded-2xl border border-white/5 bg-black/40 p-5 text-center transition-all hover:bg-[#b28a5a]/20">
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">Đời sống khó khăn</p>
        </div>
      </RevealOnScroll>
    </section>
  )
}

