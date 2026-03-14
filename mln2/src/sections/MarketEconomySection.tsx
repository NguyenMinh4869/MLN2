import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function MarketEconomySection() {
  return (
    <section
      id="thi-truong"
      className="section-shadow relative overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950/90 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0,#38bdf829,transparent_60%),radial-gradient(circle_at_100%_100%,#0ea5e926,transparent_65%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/80">
          Sau Đổi Mới · Thể chế kinh tế mới
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-sky-50 md:text-3xl lg:text-4xl">
          Cải cách thể chế kinh tế &amp; Nền kinh tế nhiều thành phần
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-sky-100/90 md:text-[15px]">
          Từ sau Đổi Mới, Việt Nam từng bước xây dựng và hoàn thiện thể chế{' '}
          <span className="font-semibold text-sky-200">
            kinh tế thị trường định hướng xã hội chủ nghĩa
          </span>
          , với nhiều loại hình sở hữu, nhiều thành phần kinh tế cùng phát triển.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1.1fr)]">
        <RevealOnScroll delay={0.1} className="space-y-5">
          <div className="grid gap-4 rounded-2xl border border-sky-500/40 bg-slate-950/85 p-4 text-[13px] text-sky-50/95 md:text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                Trước Đổi Mới
              </p>
              <ul className="mt-2 space-y-2 leading-relaxed">
                <li>• Nhà nước ấn định giá cả, phân phối hàng hóa theo kế hoạch.</li>
                <li>• Doanh nghiệp không có quyền tự chủ sản xuất – kinh doanh.</li>
                <li>• Sản xuất chủ yếu chạy theo chỉ tiêu, ít quan tâm hiệu quả.</li>
              </ul>
            </div>
            <div className="h-px bg-gradient-to-r from-sky-500/40 via-sky-300/60 to-sky-500/40" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                Sau Đổi Mới
              </p>
              <ul className="mt-2 space-y-2 leading-relaxed">
                <li>• Giá cả dần được xác lập theo quan hệ cung – cầu trên thị trường.</li>
                <li>• Doanh nghiệp được giao quyền tự chủ, tự chịu trách nhiệm về kết quả.</li>
                <li>
                  • Hình thành và phát triển các loại thị trường: hàng hóa, vốn, lao động, bất động
                  sản...
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 text-[13px] text-sky-50/95 md:text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Hoàn thiện khung khổ pháp lý
            </p>
            <p className="mt-2">
              Một loạt đạo luật kinh tế quan trọng ra đời, tạo hành lang pháp lý cho các chủ thể
              tham gia thị trường:
            </p>
            <div className="mt-3 grid gap-2 text-xs text-sky-100/90 sm:grid-cols-2 md:text-[13px]">
              <div className="rounded-xl border border-sky-500/25 bg-slate-900/70 px-3 py-2">
                <p className="font-semibold text-sky-100">Luật Doanh nghiệp</p>
                <p className="mt-1 text-[11px] text-sky-200/85">
                  Mở rộng quyền kinh doanh, bảo đảm quyền tự do thành lập doanh nghiệp.
                </p>
              </div>
              <div className="rounded-xl border border-sky-500/25 bg-slate-900/70 px-3 py-2">
                <p className="font-semibold text-sky-100">Luật Đầu tư</p>
                <p className="mt-1 text-[11px] text-sky-200/85">
                  Thu hút vốn đầu tư trong nước và nước ngoài, thúc đẩy tăng trưởng.
                </p>
              </div>
              <div className="rounded-xl border border-sky-500/25 bg-slate-900/70 px-3 py-2">
                <p className="font-semibold text-sky-100">Luật Đất đai</p>
                <p className="mt-1 text-[11px] text-sky-200/85">
                  Hoàn thiện cơ chế sử dụng đất như một loại tư liệu sản xuất đặc biệt.
                </p>
              </div>
              <div className="rounded-xl border border-sky-500/25 bg-slate-900/70 px-3 py-2">
                <p className="font-semibold text-sky-100">Luật Cạnh tranh</p>
                <p className="mt-1 text-[11px] text-sky-200/85">
                  Bảo vệ môi trường cạnh tranh lành mạnh, chống độc quyền, chống lạm dụng vị thế.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18} className="space-y-5">
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950/85 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Nền kinh tế nhiều thành phần
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-sky-50/95 md:text-sm">
              Các thành phần kinh tế cùng tồn tại, hợp tác và cạnh tranh bình đẳng theo pháp luật:
            </p>
            <div className="mt-3 grid gap-3 text-xs text-sky-50/95 sm:grid-cols-2 md:text-[13px]">
              <div className="flex items-start gap-2 rounded-xl border border-sky-500/30 bg-slate-900/80 px-3 py-2.5">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-sky-500/20 text-center text-[13px] leading-6">
                  ▲
                </div>
                <div>
                  <p className="font-semibold text-sky-100">Kinh tế nhà nước</p>
                  <p className="mt-1 text-[11px] text-sky-200/85">
                    Giữ vai trò chủ đạo trong những lĩnh vực then chốt, bảo đảm ổn định vĩ mô.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-sky-500/30 bg-slate-900/80 px-3 py-2.5">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-sky-500/20 text-center text-[13px] leading-6">
                  ◎
                </div>
                <div>
                  <p className="font-semibold text-sky-100">Kinh tế tập thể</p>
                  <p className="mt-1 text-[11px] text-sky-200/85">
                    Hợp tác xã kiểu mới, liên kết nông dân, tiểu thương, hộ sản xuất nhỏ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-sky-500/30 bg-slate-900/80 px-3 py-2.5">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-sky-500/20 text-center text-[13px] leading-6">
                  ★
                </div>
                <div>
                  <p className="font-semibold text-sky-100">Kinh tế tư nhân &amp; hộ gia đình</p>
                  <p className="mt-1 text-[11px] text-sky-200/85">
                    Động lực quan trọng tạo việc làm, đổi mới sáng tạo và khởi nghiệp.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-sky-500/30 bg-slate-900/80 px-3 py-2.5">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-sky-500/20 text-center text-[13px] leading-6">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-sky-100">Kinh tế có vốn đầu tư nước ngoài (FDI)</p>
                  <p className="mt-1 text-[11px] text-sky-200/85">
                    Nhà máy, khu công nghiệp, tập đoàn đa quốc gia – nối Việt Nam với chuỗi giá trị
                    toàn cầu.
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

