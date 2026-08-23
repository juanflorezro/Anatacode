import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../Logomark/Logomark'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/products', label: t.nav.products },
    { to: '/zoho', label: t.nav.zoho },
  ]

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Logomark size={26} strokeWidth={12} color="var(--color-text)" />
          <span className={styles.brandWord}>
            Anata<span className={styles.brandAccent}>Code</span>
          </span>
        </NavLink>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact-sales"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />

          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
