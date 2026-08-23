import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Typewriter from '../../components/Typewriter/Typewriter'
import styles from './Services.module.css'

const SPANS = [7, 5, 5, 7, 6, 6]

const Services = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Typewriter as="h1" className={styles.title} segments={[{ text: t.services.title }]} />
        <p className={styles.text}>{t.services.text}</p>
      </section>

      <section className={`container ${styles.section}`}>
        <div className="grid-12">
          {t.services.items.map((service, index) => (
            <article
              key={service.title}
              className={`card span-${SPANS[index] ?? 6}`}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.services.ctaBandTitle}</h2>
          <p>{t.services.ctaBandText}</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          {t.services.ctaBandButton}
        </NavLink>
      </section>
    </>
  )
}

export default Services
