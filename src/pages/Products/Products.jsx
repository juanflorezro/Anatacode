import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import Logomark from '../../components/Logomark/Logomark'
import Typewriter from '../../components/Typewriter/Typewriter'
import styles from './Products.module.css'

const Products = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className={`container ${styles.intro}`}>
        <Typewriter as="h1" className={styles.title} segments={[{ text: t.products.title }]} />
        <p className={styles.text}>{t.products.text}</p>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={`grid-12 ${styles.grid}`}>
          {t.products.items.map((solution) => (
            <article key={solution.title} className={`card ${styles.solutionCard}`}>
              <Logomark size={20} strokeWidth={15} color="var(--color-accent)" spark={false} />
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionText}>{solution.text}</p>
              <ul className={styles.solutionList}>
                {solution.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>{t.products.ctaBandTitle}</h2>
          <p>{t.products.ctaBandText}</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          {t.products.ctaBandButton}
        </NavLink>
      </section>
    </>
  )
}

export default Products
