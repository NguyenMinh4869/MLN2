import { RevealOnScroll } from '../animations/useRevealOnScroll'

export function AuthorsSection() {
  const authors = [
    { name: 'Nguyễn Hoàng Minh', id: 'SE180474' },
    { name: 'Nguyễn Thiện Phúc', id: 'SE183040' },
    { name: 'Phồng Đạt Khìn', id: 'SS180128' },
  ]

  const tools = [
    { name: 'ChatGPT', description: 'Để lấy và xử lý dữ liệu' },
    { name: 'Cursor', description: 'Hỗ trợ thiết kế và lập trình giao diện' },
    { name: 'Vercel', description: 'Triển khai và vận hành trang web' },
  ]

  return (
    <section
      id="authors"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#050505] to-brand-dark px-6 py-16 md:px-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      
      <div className="relative z-10 grid gap-16 lg:grid-cols-2">
        {/* Authors Column */}
        <div className="space-y-8">
          <RevealOnScroll>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Đội ngũ thực hiện
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Thành viên nhóm
            </h2>
          </RevealOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {authors.map((author, index) => (
              <RevealOnScroll key={author.id} delay={index * 0.1}>
                <div className="glass-card flex items-center justify-between rounded-2xl p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                      {author.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-gold/80 mt-1">
                      {author.id}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Tools Column */}
        <div className="space-y-8">
          <RevealOnScroll delay={0.2}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Công nghệ hỗ trợ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Công cụ AI & Nền tảng
            </h2>
          </RevealOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {tools.map((tool, index) => (
              <RevealOnScroll key={tool.name} delay={0.3 + index * 0.1}>
                <div className="glass-card flex items-center gap-6 rounded-2xl p-6 transition-all hover:bg-white/5 hover:-translate-y-1">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 border border-cyan-400/20">
                    {tool.name === 'ChatGPT' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    )}
                    {tool.name === 'Cursor' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
                    )}
                    {tool.name === 'Vercel' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 3 14 9-14 9V3z"/></svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Footer copyright style */}
      <RevealOnScroll delay={0.6} className="relative z-10 mt-20 border-t border-white/5 pt-8 text-center">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">
          © 2024 Dự án Học Tập MLN - Nhóm SE-SS
        </p>
      </RevealOnScroll>
    </section>
  )
}
