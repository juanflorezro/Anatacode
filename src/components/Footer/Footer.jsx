import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../Logomark/Logomark'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useLanguage()
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
          <NavLink to="/">{t.nav.home}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/services">{t.nav.services}</NavLink>
          <NavLink to="/products">{t.nav.products}</NavLink>
          <NavLink to="/zoho">{t.nav.zoho}</NavLink>
          <NavLink to="/case-studies">{t.nav.cases}</NavLink>
          <NavLink to="/contact-sales">{t.nav.contact}</NavLink>
        </nav>

        <div className={styles.contact}>
          <a href="mailto:administracion@anatacode.com">administracion@anatacode.com</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} AnataCode. {t.footer.rights}</span>
      </div>
    </footer>
  )
}

export default Footer
