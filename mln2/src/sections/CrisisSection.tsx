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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const labels = ['Sản xuất', 'Phân phối', 'Giá cả']

const data = {
  labels,
  datasets: [
    {
      label: 'Cung thực tế',
      data: [40, 35, 30],
      borderColor: '#fb7185',
      backgroundColor: '#fb7185',
      tension: 0.35,
    },
    {
      label: 'Cầu xã hội',
      data: [75, 80, 85],
      borderColor: '#38bdf8',
      backgroundColor: '#38bdf8',
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
      backgroundColor: '#020617',
      borderColor: '#38bdf8',
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
      grid: { color: 'rgba(148,163,184,0.18)' },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 100,
      ticks: {
        color: '#cbd5f5',
        font: { size: 10 },
        callback: (value: number | string) => `${value}%`,
      },
      grid: { color: 'rgba(30,64,175,0.45)' },
    },
  },
}

export function CrisisSection() {
  return (
    <section
      id="khung-hoang"
      className="section-shadow relative overflow-hidden rounded-3xl border border-rose-700/60 bg-gradient-to-b from-slate-950 via-slate-950 to-rose-950/90 px-6 py-12 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#f9731622,transparent_55%),radial-gradient(circle_at_90%_100%,#0f172a66,transparent_55%)] mix-blend-soft-light" />

      <RevealOnScroll className="relative z-10 max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300/80">
          Khủng hoảng kinh tế · MLN122
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-rose-50 md:text-3xl lg:text-4xl">
          Khi các quy luật kinh tế bị chối bỏ
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-rose-100/90 md:text-[15px]">
          Trong cơ chế kế hoạch hóa tập trung, nhiều quy luật kinh tế khách quan bị xem nhẹ hoặc phủ
          nhận. Điều đó khiến nền kinh tế vận hành méo mó, để lại hậu quả nặng nề.
        </p>
      </RevealOnScroll>

      <div className="relative z-10 mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-start">
        <RevealOnScroll delay={0.1} className="space-y-4">
          <div className="rounded-2xl border border-rose-600/60 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">
              Infographic cung – cầu
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-rose-100/90">
              Biểu đồ mô phỏng tình trạng{' '}
              <span className="font-semibold text-rose-200">cung thấp – cầu cao</span> khiến khan
              hiếm hàng hóa trở nên phổ biến trong nền kinh tế bao cấp.
            </p>
            <div className="mt-4 h-52 w-full rounded-xl bg-slate-900/70 p-3">
              <Line data={data} options={options} />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200/90">
              Ba quy luật bị phủ nhận
            </p>
            <div className="space-y-3 text-[13px] text-rose-50/90 md:text-sm">
              {crisisRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-xl border border-rose-600/40 bg-slate-950/80 px-3 py-2.5"
                >
                  <p className="font-semibold text-rose-100">{rule.title}</p>
                  <p className="mt-1 text-xs text-rose-100/85">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-rose-700/70 bg-slate-950/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200/90">
              Hậu quả kinh tế – xã hội
            </p>
            <ul className="space-y-2 text-[13px] leading-relaxed text-rose-100/90 md:text-sm">
              <li>• Sản xuất đình đốn, năng suất thấp.</li>
              <li>• Khan hiếm hàng hóa, đời sống nhân dân vô cùng khó khăn.</li>
              <li>• Lạm phát phi mã, tiền lương thực tế giảm mạnh.</li>
              <li>• Niềm tin xã hội bị thử thách, nhu cầu đổi mới trở nên bức thiết.</li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

