import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../../components/Logomark/Logomark'
import styles from './Home.module.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={styles.hero}>
        <Logomark
          size={420}
          strokeWidth={7}
          color="var(--color-accent)"
          spark={false}
          className={styles.heroGhost}
        />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>
            {t.home.heroTitleLine1}
            <br />
            <span className={styles.accentText}>{t.home.heroTitleLine2}</span>
          </h1>
          <p className={styles.heroText}>{t.home.heroText}</p>
          <div className={styles.heroActions}>
            <NavLink to="/contact-sales" className="btn btn-primary">
              {t.home.ctaPrimary}
            </NavLink>
            <NavLink to="/services" className="btn btn-ghost">
              {t.home.ctaGhost}
            </NavLink>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <br />
        <div className={`grid-12 ${styles.pillarGrid}`}>
          {t.home.pillars.map((pillar) => (
            <article key={pillar.title} className={`card ${styles.pillarCard}`}>
              <Logomark size={22} strokeWidth={14} color="var(--color-accent)" spark={false} />
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <span className="eyebrow">{t.home.processEyebrow}</span>
        <h2 className={styles.sectionTitle}>{t.home.processTitle}</h2>
        <ol className={styles.processGrid}>
          {t.home.process.map((item) => (
            <li key={item.step} className={styles.processItem}>
              <span className={styles.processStep}>{item.step}</span>
              <h3 className={styles.processTitle}>{item.title}</h3>
              <p className={styles.processText}>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.home.ctaBandTitle}</h2>
          <p>{t.home.ctaBandText}</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          {t.home.ctaBandButton}
        </NavLink>
      </section>
    </>
  )
}

export default Home
