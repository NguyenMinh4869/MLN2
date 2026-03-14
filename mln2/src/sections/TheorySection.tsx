import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function TheorySection() {
  return (
    <section
      id="ly-thuyet"
      className="section-shadow relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#fbbf2420,transparent_55%),radial-gradient(circle_at_90%_100%,#38bdf81f,transparent_60%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/80">
          Tài liệu chính · Trích từ ghi chú MLN122
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
          Khung lý thuyết: Từ kinh tế kế hoạch hóa đến kinh tế thị trường định hướng XHCN
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-[15px]">
          Phần này tóm lược những nội dung cốt lõi trong README – cũng là “xương sống” lý luận cho
          toàn bộ câu chuyện trên website.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-2">
        <RevealOnScroll delay={0.05} className="space-y-4 text-sm text-slate-100/90">
          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              1. Bối cảnh trước Đổi Mới
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Nền kinh tế kế hoạch hóa tập trung, bao cấp – Nhà nước quyết định hầu hết hoạt động
              sản xuất, phân phối, giá cả; sở hữu chủ yếu là nhà nước và tập thể, phân phối bằng tem
              phiếu, doanh nghiệp thiếu tự chủ, động lực cạnh tranh yếu dẫn tới khan hiếm hàng hóa.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              2. Chuyển sang kinh tế thị trường định hướng XHCN
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Sau Đổi Mới 1986, Việt Nam xây dựng mô hình kinh tế thị trường nhưng vẫn giữ vững mục
              tiêu xã hội chủ nghĩa: vận hành theo quy luật cung – cầu, giá trị, cạnh tranh; Nhà
              nước định hướng phát triển, đảm bảo công bằng xã hội và ổn định vĩ mô.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              3. Cải cách thể chế kinh tế
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Từ cơ chế “mệnh lệnh – chỉ tiêu pháp lệnh” sang thừa nhận cơ chế thị trường, trao quyền
              tự chủ cho doanh nghiệp và hình thành các loại thị trường (hàng hóa, vốn, lao động, bất
              động sản); đồng thời ban hành các luật quan trọng như Luật Doanh nghiệp, Luật Đầu tư,
              Luật Đất đai, Luật Cạnh tranh.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12} className="space-y-4 text-sm text-slate-100/90">
          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              4. Nền kinh tế nhiều thành phần
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Từ chỗ chỉ có kinh tế nhà nước và kinh tế tập thể, sau Đổi Mới đã xuất hiện đầy đủ các
              thành phần: kinh tế nhà nước, tập thể, tư nhân, hộ gia đình, kinh tế có vốn đầu tư nước
              ngoài (FDI) – cùng tồn tại, hợp tác và cạnh tranh bình đẳng theo pháp luật.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              5. Hài hòa các quan hệ lợi ích
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Kết hợp chặt chẽ lợi ích Nhà nước (thu ngân sách, hạ tầng, ổn định vĩ mô), lợi ích
              doanh nghiệp (tự do kinh doanh, lợi nhuận, mở rộng sản xuất) và lợi ích người lao động,
              xã hội (thu nhập, việc làm, an sinh – lương tối thiểu, bảo hiểm xã hội, giảm nghèo).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-600/70 bg-slate-950/85 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              6. Kết quả chuyển đổi
            </p>
            <p className="mt-2 text-[13px] leading-relaxed">
              Tốc độ tăng trưởng GDP cao trong nhiều thập kỷ, Việt Nam trở thành trung tâm sản xuất
              và xuất khẩu lớn ở châu Á, hàng chục triệu người thoát nghèo, mức sống người dân được
              cải thiện rõ rệt – khẳng định tính đúng đắn của đường lối Đổi Mới.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

