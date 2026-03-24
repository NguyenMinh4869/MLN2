import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'
import { crisisRules } from '../data/storyData'
import { RevealOnScroll } from '../animations/useRevealOnScroll'
import { TrendingDown, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const labels = ['Sản xuất', 'Phân phối', 'Giá cả']

const data = {
  labels,
  datasets: [
    {
      label: 'Cung thực tế',
      data: [40, 35, 30],
      borderColor: '#e63946',
      backgroundColor: '#e63946',
      tension: 0.35,
    },
    {
      label: 'Cầu xã hội',
      data: [75, 80, 85],
      borderColor: '#4a90e2',
      backgroundColor: '#4a90e2',
      tension: 0.35,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#e5e7eb',
        font: { size: 11 },
      },
    },
    tooltip: {
      backgroundColor: '#050505',
      borderColor: '#4a90e2',
      borderWidth: 1,
      titleFont: { size: 11 },
      bodyFont: { size: 11 },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#cbd5f5',
        font: { size: 11 },
      },
      grid: { color: 'rgba(255,255,255,0.05)' },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 100,
      ticks: {
        color: '#cbd5f5',
        font: { size: 10 },
        callback: (value: number | string) => `${value}%`,
      },
      grid: { color: 'rgba(255,255,255,0.05)' },
    },
  },
}

export function CrisisSection() {
  return (
    <section
      id="khung-hoang"
      className="section-shadow relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-brand-dark via-[#1a0f12] to-[#261014] px-6 py-16 md:px-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/images/baocap-bg.png')] bg-cover bg-center opacity-[0.09] grayscale mix-blend-luminosity" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#e6394635,transparent_60%),radial-gradient(circle_at_90%_100%,#facc1515,transparent_60%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay" />

      {/* Animated Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-32 right-12 text-brand-red/10"
      >
        <TrendingDown size={180} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-32 left-12 text-brand-gold"
      >
        <AlertTriangle size={150} strokeWidth={1} />
      </motion.div>

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
          Khủng hoảng kinh tế · MLN122
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Sụp đổ của các quy luật kinh tế
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-rose-100/80 md:text-lg">
          Trong cơ chế kế hoạch hóa tập trung, các quy luật kinh tế khách quan bị xem nhẹ hoặc phủ
          nhận hoàn toàn. Điều đó khiến nền kinh tế tổn thương sâu sắc, kéo theo lạm phát phi mã.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-12 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start md:gap-12">
        <RevealOnScroll delay={0.1} className="space-y-4">
          <div className="glass-card rounded-2xl p-6 transition-colors hover:bg-white/5">
            <p className="font-display text-lg font-semibold text-brand-red">
              Infographic Cung – Cầu
            </p>
            <p className="mt-2 text-sm leading-relaxed text-rose-100/70">
              Biểu đồ mô phỏng tình trạng{' '}
              <span className="font-bold text-white">cung thấp – cầu cao</span> khiến khan
              hiếm hàng hóa trở nên trầm trọng trong nền kinh tế bao cấp.
            </p>
            <div className="mt-6 h-64 w-full rounded-xl bg-black/40 p-4 border border-white/5">
              <Line data={data} options={options} />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="space-y-6">
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold text-[#fde68a]">
              Ba quy luật bị chối bỏ
            </p>
            <div className="space-y-3 text-sm">
              {crisisRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-xl border border-white/5 bg-black/40 px-4 py-3 transition-all hover:bg-white/5 hover:translate-x-1"
                >
                  <p className="font-bold text-white">{rule.title}</p>
                  <p className="mt-1.5 text-xs text-rose-100/70 leading-relaxed">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card space-y-4 rounded-2xl p-6 border border-brand-red/20">
            <p className="font-display text-lg font-semibold text-brand-red">
              Hệ lụy trực tiếp
            </p>
            <ul className="space-y-3 text-[13px] sm:text-sm leading-relaxed text-rose-100/80">
              <li className="flex items-start gap-2"><span className="text-brand-red">■</span> Sản xuất đình đốn, năng suất lao động cực kỳ thấp.</li>
              <li className="flex items-start gap-2"><span className="text-brand-red">■</span> Khan hiếm hàng hóa, đời sống nhân dân vô cùng khó khăn.</li>
              <li className="flex items-start gap-2"><span className="text-brand-red">■</span> Lạm phát phi mã, tiền lương thực tế mất giá thảm hại.</li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

