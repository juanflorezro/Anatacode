import { NavLink } from 'react-router-dom'
import styles from './About.module.css'

const VALUES = [
  {
    title: 'Pragmatismo',
    text: 'Construimos soluciones que funcionan desde el primer dia en produccion, no solo en la demo.',
  },
  {
    title: 'Transparencia',
    text: 'Siempre sabes en que estamos trabajando, que decisiones se tomaron y por que.',
  },
  {
    title: 'Acompanamiento',
    text: 'No entregamos y desaparecemos: damos soporte y ajustamos la solucion a medida que tu empresa crece.',
  },
]

const About = () => {
  return (
    <>
      <section className={`container ${styles.section}`}>
        <span className="eyebrow">nosotros</span>
        <h1 className={styles.title}>
          La tecnologia deberia adaptarse a tu operacion,
          <span className={styles.accentText}> no al reves.</span>
        </h1>

        <div className={styles.copyGrid}>
          <p className={styles.lead}>
            AnataCode es un equipo de tecnologia dedicado al desarrollo de
            software, la integracion de sistemas y la inteligencia artificial
            aplicada a procesos reales de negocio.
          </p>
          <div className={styles.copyCol}>
            <p>
              Disenamos, desarrollamos e implementamos las soluciones -- y
              tambien nos quedamos para mantenerlas funcionando. Trabajamos
              tanto en la construccion de software propio como en conectar
              las herramientas que tu empresa ya usa: CRM, ERP, plataformas
              de gestion y demas sistemas, mediante APIs, webhooks y
              conectores.
            </p>
            <p>
              Prestamos servicios a empresas en Colombia y tambien a clientes
              internacionales, acompanando desde el analisis inicial hasta la
              capacitacion del equipo que usara la solucion todos los dias.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Como trabajamos</h2>
        <div className={`grid-12`}>
          {VALUES.map((value) => (
            <article key={value.title} className={`card ${styles.valueCard}`}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueText}>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>Quieres saber que podemos hacer por ti?</h2>
          <p>Revisa el detalle de nuestros servicios o cuentanos tu proyecto directamente.</p>
        </div>
        <div className="cta-band-actions">
          <NavLink to="/services" className="btn btn-ghost">
            Ver servicios
          </NavLink>
          <NavLink to="/contact-sales" className="btn btn-primary">
            Hablemos
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default About
