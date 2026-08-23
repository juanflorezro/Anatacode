import { useEffect, useRef, useState } from 'react'

export function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}
