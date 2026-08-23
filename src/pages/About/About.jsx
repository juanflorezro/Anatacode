import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Typewriter from '../../components/Typewriter/Typewriter'
import styles from './About.module.css'

const About = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={`container ${styles.section}`}>
        <Typewriter
          as="h1"
          className={styles.title}
          segments={[{ text: t.about.titleMain }, { text: t.about.titleAccent, accent: true }]}
        />

        <div className={styles.copyGrid}>
          <p className={styles.lead}>{t.about.lead}</p>
          <div className={styles.copyCol}>
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <Typewriter as="h2" className={styles.sectionTitle} segments={[{ text: t.about.valuesTitle }]} />
        <div className="grid-12">
          {t.about.values.map((value) => (
            <article key={value.title} className={`card ${styles.valueCard}`}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueText}>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.about.ctaBandTitle}</h2>
          <p>{t.about.ctaBandText}</p>
        </div>
        <div className="cta-band-actions">
          <NavLink to="/services" className="btn btn-ghost">
            {t.about.ctaServices}
          </NavLink>
          <NavLink to="/contact-sales" className="btn btn-primary">
            {t.about.ctaTalk}
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default About
