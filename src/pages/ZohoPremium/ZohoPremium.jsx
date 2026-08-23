import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../../components/Logomark/Logomark'
import styles from './ZohoPremium.module.css'

// 4 en la primera fila, 3 en la segunda, y la ultima (resto del ecosistema)
// ocupa el ancho completo como cierre.
const APP_SPANS = [3, 3, 3, 3, 4, 4, 4, 12]

const ZohoPremium = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={styles.hero}>
        <Logomark
          size={380}
          strokeWidth={7}
          color="var(--color-accent)"
          spark={false}
          className={styles.heroGhost}
        />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>
            {t.zoho.heroTitleLine1}
            <br />
            <span className={styles.accentText}>{t.zoho.heroTitleLine2}</span>
          </h1>
          <p className={styles.heroText}>{t.zoho.heroText}</p>
          <div className={styles.heroActions}>
            <NavLink to="/contact-sales" className="btn btn-primary">
              {t.zoho.ctaPrimary}
            </NavLink>
            <NavLink to="/products" className="btn btn-ghost">
              {t.zoho.ctaGhost}
            </NavLink>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{t.zoho.appsTitle}</h2>
        <div className="grid-12">
          {t.zoho.apps.map((app, index) => (
            <article
              key={app.title}
              className={`card ${styles.appCard} span-${APP_SPANS[index] ?? 4}`}
            >
              <Logomark size={20} strokeWidth={15} color="var(--color-accent)" spark={false} />
              <h3 className={styles.appTitle}>{app.title}</h3>
              <p className={styles.appText}>{app.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.detailGrid}`}>
        {t.zoho.sections.map((item) => (
          <div key={item.title} className={styles.detailItem}>
            <h3 className={styles.detailTitle}>{item.title}</h3>
            <p className={styles.detailText}>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.zoho.ctaBandTitle}</h2>
          <p>{t.zoho.ctaBandText}</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          {t.zoho.ctaBandButton}
        </NavLink>
      </section>
    </>
  )
}

export default ZohoPremium
