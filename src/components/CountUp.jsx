import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(value); return }
    const el = ref.current
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setN(Math.round(value * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    // 관찰이 동작하지 않는 환경(인쇄, 일부 웹뷰)에서는 4초 후 최종값 표시
    const fallback = setTimeout(() => setN((v) => (v === 0 ? value : v)), 4000)
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(fallback) }
  }, [value, duration])
  return <span ref={ref}>{n.toLocaleString('ko-KR')}</span>
}
