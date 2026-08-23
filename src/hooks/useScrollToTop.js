import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de pagina sube al inicio -- sin importar si el enlace se
// dio click desde el nav, el footer o cualquier boton del sitio, porque
// esto reacciona al cambio de ruta, no a quien lo disparo.
// Si la ruta trae un #ancla, en cambio, intenta llevar a esa seccion.
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'instant' })
        return undefined
      }
    }

    // behavior: 'instant' es a proposito -- el sitio tiene
    // "scroll-behavior: smooth" global (para anclas dentro de la misma
    // pagina), y sin esto, cambiar de pagina animaria el scroll en vez
    // de saltar directo al inicio.
    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    scrollTop()

    // Reafirma el scroll un par de veces mas: justo despues de navegar,
    // las fuentes todavia pueden estar cargando y el encabezado con el
    // efecto de escritura recien esta empezando a crecer -- ambas cosas
    // pueden mover el layout un poco. Esto lo vuelve a corregir sin que
    // se note.
    const rafId = requestAnimationFrame(() => {
      scrollTop()
      requestAnimationFrame(scrollTop)
    })
    const timeoutId = setTimeout(scrollTop, 250)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, [pathname, hash])
}
