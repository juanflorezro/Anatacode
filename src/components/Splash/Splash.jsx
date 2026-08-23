import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './Splash.module.css'

// Se muestra solo en una carga real de la pagina (primera visita o F5) --
// nunca al navegar entre paginas del sitio, porque eso viviria en el
// montaje de App, no en cada cambio de ruta.
//
// Si la persona pidio reducir movimiento, no se muestra en absoluto: el
// unico proposito de este componente es la animacion, asi que sin ella
// no tiene sentido imponer ni un instante de espera.
const TOTAL_MS = 1550

const Splash = () => {
  const reducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(() => !reducedMotion)

  useEffect(() => {
    if (reducedMotion) return undefined
    const timer = setTimeout(() => setVisible(false), TOTAL_MS)
    return () => clearTimeout(timer)
  }, [reducedMotion])

  if (!visible) return null

  return (
    <div className={styles.overlay} aria-hidden="true">
      <svg viewBox="0 0 100 100" className={styles.icon}>
        <path
          d="M32,20 L68,50 L32,80"
          fill="none"
          stroke="#F1EEE7"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.chevron}
        />
        <circle cx="78" cy="28" r="6" fill="#E8B84B" className={styles.spark1} />
        <circle cx="87" cy="19" r="3.4" fill="#E8B84B" className={styles.spark2} />
        <circle cx="93" cy="12" r="2" fill="#E8B84B" className={styles.spark3} />
      </svg>
      <span className={styles.wordmark}>
        Anata<span className={styles.accent}>Code</span>
      </span>
    </div>
  )
}

export default Splash
