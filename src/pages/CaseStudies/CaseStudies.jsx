import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../../components/Logomark/Logomark'
import Typewriter from '../../components/Typewriter/Typewriter'
import styles from './CaseStudies.module.css'

const CaseStudies = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Typewriter as="h1" className={styles.title} segments={[{ text: t.cases.title }]} />
        <p className={styles.text}>{t.cases.intro}</p>
      </section>

      <section className={`container ${styles.list}`}>
        {t.cases.items.map((item, index) => (
          <article key={item.title} className={styles.item}>
            <div className={styles.itemHeader}>
              <Logomark size={22} strokeWidth={14} color="var(--color-accent)" spark={false} />
              <span className={styles.itemNumber}>0{index + 1}</span>
              <h2 className={styles.itemTitle}>{item.title}</h2>
            </div>
            <div className={styles.itemBody}>
              <div className={styles.itemBlock}>
                <span className={styles.itemLabel}>{t.cases.contextLabel}</span>
                <p>{item.context}</p>
              </div>
              <div className={styles.itemBlock}>
                <span className={styles.itemLabel}>{t.cases.workLabel}</span>
                <p>{item.work}</p>
              </div>
              <div className={`${styles.itemBlock} ${styles.itemResult}`}>
                <span className={styles.itemLabel}>{t.cases.resultLabel}</span>
                <p>{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={`container ${styles.closingWrap}`}>
        <p className={styles.closing}>{t.cases.closing}</p>
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.cases.ctaBandTitle}</h2>
          <p>{t.cases.ctaBandText}</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          {t.cases.ctaBandButton}
        </NavLink>
      </section>
    </>
  )
}

export default CaseStudies
