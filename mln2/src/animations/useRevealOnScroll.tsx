import { motion, useAnimation, useInView } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  useEffect(() => {
    if (isInView) {
      void controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

