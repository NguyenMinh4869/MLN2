import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function TheorySection() {
  return (
    <section
      id="ly-thuyet"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-brand-dark via-[#111] to-black px-6 py-16 md:px-16 md:py-24"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#facc1515,transparent_50%),radial-gradient(circle_at_90%_100%,#38bdf812,transparent_60%)] mix-blend-screen" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
          Tài liệu chính · Tổng kết lý luận
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Khung lý thuyết cốt lõi
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Tóm lược quá trình chuyển đổi từ hình thái kinh tế kế hoạch hóa sang nền kinh tế thị trường định hướng XHCN, điểm tựa lý luận cho toàn bộ lịch sử phát triển của dân tộc.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-2">
        <RevealOnScroll delay={0.05} className="space-y-6">
          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              01. Bối cảnh trước Đổi Mới
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Nền kinh tế kế hoạch hóa tập trung bao cấp: Nhà nước quyết định tuyệt đối. Sở hữu toàn dân và tập thể. Phân phối dựa trên tem phiếu. Cơ chế thiếu phản ứng thị trường và động lực lợi ích, dẫn tới khủng hoảng kéo dài.
            </p>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              02. Bước ngoặt 1986
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Đại hội VI khởi xướng đường lối Đổi Mới. Khẳng định sự tồn tại khách quan của thị trường. Thay đổi tư duy kinh tế: từ bỏ hiện vật hóa sang phát triển kinh tế hàng hóa, mở cửa kinh tế với thế giới.
            </p>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              03. Cải cách thể chế sâu rộng
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Xóa bỏ cơ chế "xin - cho", pháp điển hóa các quy tắc thị trường qua hàng loạt đạo luật (Luật Doanh nghiệp, Luật Đầu tư). Trao quyền tự chủ thực sự cho mọi loại hình doanh nghiệp.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12} className="space-y-6">
          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              04. Đa dạng hình thức sở hữu
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Xây dựng nền kinh tế nhiều thành phần: Kinh tế Nhà nước, Tập thể, Tư nhân, và FDI. Thừa nhận vai trò động lực to lớn của sở hữu tư nhân trong cạnh tranh, sáng tạo và giải quyết việc làm.
            </p>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              05. Hài hòa lợi ích & Công bằng
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Coi giá trị con người là cốt lõi. Gắn kết sự thịnh vượng kinh tế với tiến bộ, công bằng xã hội (bảo vệ quyền lợi NLĐ, an sinh XH, bảo hiểm, nâng mức lương tối thiểu) thông qua điều tiết vĩ mô.
            </p>
          </div>

          <div className="glass-card rounded-[1.5rem] p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
            <p className="font-display text-lg font-bold text-brand-gold">
              06. Kỳ tích tăng trưởng
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              Chuyển hóa từ một quốc gia thiếu ăn trở thành trung tâm cung ứng toàn cầu. Khối lượng GDP không ngừng tăng trưởng mạnh mẽ song hành cùng công cuộc giảm nghèo được quốc tế công nhận là kỳ tích.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

