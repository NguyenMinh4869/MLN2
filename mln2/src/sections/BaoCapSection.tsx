import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function BaoCapSection() {
  return (
    <section
      id="bao-cap"
      className="section-shadow relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-sepia-900/95 via-sepia-900/90 to-slate-900/95 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,#fbbf2422,transparent_55%),radial-gradient(circle_at_100%_100%,#faf5e722,transparent_55%)] opacity-50 mix-blend-soft-light" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
          Trước Đổi Mới · Thời bao cấp
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-amber-50 md:text-3xl lg:text-4xl">
          Thời kỳ Kinh tế Kế hoạch hóa Tập trung
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-amber-100/90 md:text-[15px]">
          Trước năm 1986, nền kinh tế Việt Nam vận hành theo cơ chế kế hoạch hóa tập trung bao cấp.
          Nhà nước quyết định phần lớn hoạt động sản xuất, phân phối và giá cả trong nền kinh tế.
        </p>

        <div className="grid gap-6 pt-4 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:gap-10">
          <div className="space-y-4 text-sm text-amber-100/90">
            <p>
              <span className="font-semibold text-amber-200">Đặc điểm chính:</span>
            </p>
            <ul className="space-y-2 text-[13px] leading-relaxed md:text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span>
                  Sở hữu chủ yếu là{' '}
                  <span className="font-semibold text-amber-200">sở hữu nhà nước và tập thể</span>{' '}
                  (hợp tác xã).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span>
                  Hàng hóa thiết yếu được phân phối theo kế hoạch,{' '}
                  <span className="font-semibold text-amber-200">mua bằng tem phiếu</span> theo định
                  mức.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span>
                  Doanh nghiệp nhà nước không có quyền tự chủ,{' '}
                  <span className="font-semibold text-amber-200">sản xuất theo chỉ tiêu</span> được
                  giao.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span>
                  Thiếu cơ chế cạnh tranh, dẫn đến{' '}
                  <span className="font-semibold text-amber-200">hiệu quả kinh tế thấp</span> và
                  khan hiếm hàng hóa triền miên.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-[13px] text-amber-100/90 md:text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
              Hình ảnh ẩn dụ
            </p>
            <div className="grid gap-3 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-sepia-900/80 via-sepia-900/60 to-slate-900/80 p-4">
              <div className="rounded-xl border border-amber-500/25 bg-black/20 px-3 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Tem phiếu
                </p>
                <p className="mt-1 text-xs text-amber-100/90">
                  Phiếu gạo, phiếu vải, phiếu thịt... tượng trưng cho việc tiếp cận hàng hóa thông
                  qua chế độ phân phối, không phải qua thị trường.
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/15 bg-black/15 px-3 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Xếp hàng mua gạo
                </p>
                <p className="mt-1 text-xs text-amber-100/90">
                  Hình ảnh người dân xếp hàng dài trước cửa hàng mậu dịch để mua những nhu yếu phẩm
                  tối thiểu.
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/10 bg-black/10 px-3 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Cửa hàng mậu dịch
                </p>
                <p className="mt-1 text-xs text-amber-100/90">
                  Không gian mua bán khép kín, giá cả cố định, ít lựa chọn – đối lập với siêu thị,
                  trung tâm thương mại ngày nay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25} className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-amber-500/25 bg-black/30 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
          <p>Khan hiếm hàng hóa</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-black/25 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
          <p>Động lực sản xuất yếu</p>
        </div>
        <div className="rounded-2xl border border-amber-500/15 bg-black/20 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
          <p>Đời sống nhân dân khó khăn</p>
        </div>
      </RevealOnScroll>
    </section>
  )
}

