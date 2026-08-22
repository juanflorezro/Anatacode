import { NavLink } from 'react-router-dom'
import Logomark from '../Logomark/Logomark'
import styles from './Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <div className={styles.brandRow}>
            <Logomark size={22} strokeWidth={13} color="var(--color-text)" />
            <span className={styles.brandWord}>
              Anata<span className={styles.brandAccent}>Code</span>
            </span>
          </div>
          <p className={styles.tagline}>software · integrations · AI</p>
        </div>

        <nav className={styles.links} aria-label="Enlaces del sitio">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">Nosotros</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/products">Soluciones</NavLink>
          <NavLink to="/contact-sales">Contacto</NavLink>
        </nav>

        <div className={styles.contact}>
          <a href="mailto:hola@anatacode.com">hola@anatacode.com</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} AnataCode. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
