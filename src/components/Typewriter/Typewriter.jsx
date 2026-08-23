import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './Typewriter.module.css'

const Typewriter = ({ as: Tag = 'h1', className, segments, speed = 26, startDelay = 150 }) => {
  const [ref, inView] = useInView()
  const reducedMotion = usePrefersReducedMotion()
  const totalLength = segments.reduce((sum, s) => sum + s.text.length, 0)
  const [revealed, setRevealed] = useState(0)
  const fullText = segments.map((s) => s.text).join(' ')

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(totalLength)
      return undefined
    }
    if (!inView) return undefined

    setRevealed(0)
    let count = 0
    let timeoutId

    const tick = () => {
      count += 1
      setRevealed(count)
      if (count < totalLength) {
        const jitter = Math.random() * 16 - 5
        timeoutId = setTimeout(tick, Math.max(12, speed + jitter))
      }
    }

    timeoutId = setTimeout(tick, startDelay)
    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reducedMotion, fullText, totalLength, speed, startDelay])

  const done = revealed >= totalLength
  let offset = 0

  return (
    <Tag className={className} ref={ref} aria-label={fullText}>
      <span aria-hidden="true">
        {segments.map((segment, index) => {
          const start = offset
          offset += segment.text.length
          const visibleCount = Math.min(Math.max(revealed - start, 0), segment.text.length)
          const isActiveSegment = !done && revealed >= start && revealed < start + segment.text.length

          return (
            <span key={index}>
              {segment.newLine && index > 0 && <br />}
              <span className={segment.accent ? styles.accent : undefined}>
                {segment.text.slice(0, visibleCount)}
              </span>
              {isActiveSegment && <span className={styles.cursor} />}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}

export default Typewriter
