import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

const HF_TOKEN = import.meta.env.VITE_HF_TOKEN
const MODEL_NAME = "Qwen/Qwen2.5-7B-Instruct"

interface Message {
  role: 'user' | 'bot'
  text: string
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Chào bạn! Tôi là trợ lý AI Qwen 2.5 kiến thức về Kinh tế thị trường định hướng XHCN. Bạn muốn tìm hiểu gì hôm nay?' }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [errorContext, setErrorContext] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setIsLoading(true)

    try {
      setErrorContext(null);
      // Hugging Face Inference API (using the OpenAI-compatible endpoint)
      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            model: MODEL_NAME,
            messages: [
              {
                role: "system",
                content: `Bạn là trợ lý AI chính thức của website "Kinh tế thị trường định hướng XHCN". 
Nhiệm vụ của bạn là giải đáp các câu hỏi dựa trên nội dung kiến thức có trong website này.

Bối cảnh kiến thức của website:
1. Thời kỳ Bao Cấp (trước 1986): Nền kinh tế kế hoạch hóa tập trung, phân phối bằng tem phiếu, sở hữu nhà nước và tập thể chiếm tuyệt đối, cơ chế "xin - cho" dẫn đến khủng hoảng.
2. Bước ngoặt Đổi Mới (1986): Đại hội VI khởi xướng, chuyển sang kinh tế hàng hóa nhiều thành phần, mở cửa kinh tế.
3. Thể chế kinh tế: Xây dựng hệ thống pháp luật gồm Luật Doanh nghiệp, Luật Đầu tư, Luật Đất đai, Luật Cạnh tranh. Doanh nghiệp được tự chủ kinh doanh, giá cả theo cung cầu.
4. Cơ cấu thành phần: Kinh tế Nhà nước (chủ đạo), Tập thể, Tư nhân (động lực quan trọng), và FDI (vốn đầu tư nước ngoài).
5. Vai trò Nhà nước: Chuyển từ quản lý mệnh lệnh sang "Nhà nước kiến tạo", điều tiết vĩ mô, đảm bảo hài hòa lợi ích giữa Nhà nước - Doanh nghiệp - Người lao động, gắn tăng trưởng với công bằng xã hội.
6. Thành tựu: Việt Nam từ quốc gia thiếu ăn trở thành trung tâm cung ứng toàn cầu, GDP tăng trưởng mạnh, giảm nghèo kỳ tích.

Hãy xưng hô "Tôi" và gọi người dùng là "Bạn" hoặc "Bạn trẻ". Trả lời ngắn gọn, súc tích, chuyên nghiệp và luôn bám sát các kiến thức trên.`
              },
              ...messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'assistant',
                content: m.text
              })),
              { role: "user", content: userMsg }
            ],
            max_tokens: 1024,
            temperature: 0.7,
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setErrorContext(`HF Status: ${response.status} - ${errorData.error || 'Unknown Error'}`);
        throw new Error(errorData.error || `HF Error: ${response.status}`);
      }

      const result = await response.json()
      const botResponse = result.choices[0].message.content

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }])
    } catch (error: any) {
      console.error("AI Assistant Error:", error)
      const finalErrMsg = errorContext
        ? `Lỗi kết nối (${errorContext}). Bạn vui lòng kiểm tra HF_TOKEN và gói dịch vụ trên Hugging Face.`
        : 'Sự cố kết nối hệ thống. Bạn hãy thử lại sau vài giây nhé!';
      setMessages(prev => [...prev, { role: 'bot', text: finalErrMsg }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, rotate: 2 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] glass-card flex flex-col overflow-hidden rounded-[2rem] shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 p-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold border border-brand-gold/20 shadow-lg">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">AI Assistant</h3>
                  <p className="text-[11px] text-brand-gold/80 font-medium uppercase tracking-wider">Trợ lý kiến thức</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white border border-white/10 ${msg.role === 'user' ? 'bg-brand-blue/30' : 'bg-brand-gold/30'}`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`rounded-2xl p-4 text-[14px] leading-relaxed shadow-sm ${msg.role === 'user'
                      ? 'bg-brand-blue/20 text-blue-50 rounded-tr-none'
                      : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold/30 flex items-center justify-center text-white border border-white/10">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 border border-white/5">
                      <Loader2 size={18} className="animate-spin text-brand-gold" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-black/20 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi trợ lý AI..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold/40 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 h-9 w-9 rounded-full bg-brand-gold/80 hover:bg-brand-gold text-brand-dark flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:bg-brand-gold/80"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all transform ${isOpen ? 'bg-brand-dark border border-white/10' : 'bg-gradient-to-tr from-brand-gold to-brand-gold/70'
          }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-blue text-[10px] items-center justify-center font-bold">1</span>
          </span>
        )}
      </motion.button>
    </div>
  )
}
