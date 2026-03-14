import { RevealOnScroll } from '../animations/useRevealOnScroll'

import img1 from '../assets/774454397831787585.jpg'
import img2 from '../assets/800755686774519410 (1).jpg'
import img3 from '../assets/800755686774519410.jpg'
import img4 from '../assets/1153943582601752545.jpg'
import img5 from '../assets/1370851979659165980 (1).jpg'
import img6 from '../assets/1370851979659165980 (2).jpg'
import img7 from '../assets/1370851979659165980 (3).jpg'
import img8 from '../assets/1370851979659165980.jpg'
import img9 from '../assets/1869410035052238140 (1).jpg'
import img10 from '../assets/1869410035052238140 (2).jpg'
import img11 from '../assets/1869410035052238140 (3).jpg'
import img12 from '../assets/1869410035052238140 (4).jpg'
import img13 from '../assets/1869410035052238140 (5).jpg'
import img14 from '../assets/1869410035052238140.jpg'
import img15 from '../assets/2059061842586630843.jpg'
import img16 from '../assets/2338742344258424626.jpg'
import img17 from '../assets/3588350391741229652.jpg'

const storyBlocks = [
  {
    title: 'Những tờ "giấy phép" sống',
    description: 'Trong thời kỳ kinh tế kế hoạch hóa, mọi nhu yếu phẩm đều được Nhà nước quản lý. Những tờ tem, phiếu cung cấp hàng hóa (thịt, gạo, vải vóc...) không chỉ là vật ngang giá, mà chính là "chiếc phao" để duy trì cuộc sống hàng ngày.',
    images: [img1, img2, img3, img4, img5]
  },
  {
    title: 'Phân phối theo định mức',
    description: 'Mỗi gia đình đều có một định mức nhất định tùy theo công việc. Mớ rau, lạng thịt... đều được đong đếm. Quan hệ cung - cầu thị trường bị loại bỏ, thay bằng sự chờ đợi đến lượt theo kế hoạch.',
    images: [img6, img7, img8, img9, img10]
  },
  {
    title: 'Xếp hàng & Mậu dịch',
    description: 'Để đổi được hàng, người dân phải xếp hàng rồng rắn bằng những viên gạch, chiếc nón rách để "đặt chỗ". Ai cũng mong mua được phần định mức của mình trước khi bảng "Hết hàng" treo lên.',
    images: [img11, img12, img13, img14]
  },
  {
    title: 'Động lực Đổi Mới',
    description: 'Những tờ tem phiếu xỉn màu lưu giữ ký ức về thời bao cấp khó khăn. Sự ngột ngạt của cơ chế ấy chính là động lực bức thiết dẫn đến kỳ Đại hội VI (1986) – quyết định phá bỏ cơ chế bao cấp.',
    images: [img15, img16, img17]
  }
]

export function GallerySection() {
  return (
    <section
      id="thu-vien-anh"
      className="relative mx-auto mt-12 w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <RevealOnScroll className="relative z-10 mb-20 space-y-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
          Chạm vào quá khứ · Storytelling
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Ký ức thời Tem Phiếu
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Hãy cuộn chậm lại, nhìn ngắm những tờ tem phiếu mộc mạc – những "chứng nhân lịch sử" 
          đã đi cùng dân tộc qua những năm tháng bao cấp vô cùng gian khó trước năm 1986.
        </p>
      </RevealOnScroll>

      <div className="relative space-y-32 pb-24">
        {storyBlocks.map((block, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-12 md:flex-row md:gap-16"
          >
            {/* Sticky Text Side */}
            <div className="flex-1 md:sticky md:top-32 md:w-1/3 space-y-6">
              <RevealOnScroll className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 text-xl font-bold text-brand-gold shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {block.title}
                  </h3>
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-brand-gold to-transparent opacity-50" />
                <p className="text-[15px] leading-8 text-slate-300 md:text-base">
                  {block.description}
                </p>
              </RevealOnScroll>
            </div>

            {/* Scrolling Images Side */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {block.images.map((img, i) => (
                  <RevealOnScroll
                    key={i}
                    delay={(i % 2) * 0.15}
                    className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-black shadow-2xl ${
                      i === 2 && block.images.length % 2 !== 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <div className="h-full w-full bg-[#050505]">
                      <img
                        src={img}
                        alt={`Ảnh tư liệu ${idx + 1}-${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 group-hover:opacity-90 grayscale-[30%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80" />
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative vertical timeline line, visible only on large screens */}
      <div className="absolute left-[calc(33.333333%+1rem)] top-40 bottom-24 hidden w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 md:block" />
    </section>
  )
}
