import { NavLink } from 'react-router-dom'
import Logomark from '../../components/Logomark/Logomark'
import styles from './Products.module.css'

const SOLUTIONS = [
  {
    title: 'Integracion CRM / ERP',
    text: 'Conectamos tu CRM, ERP y demas plataformas de gestion con el resto de tus herramientas -- sin que tu equipo tenga que copiar datos a mano.',
    items: [
      'Conexion via APIs, webhooks y conectores',
      'Sincronizacion de datos en tiempo real',
      'Soporte y mantenimiento continuo',
    ],
  },
  {
    title: 'Automatizacion con IA',
    text: 'Disenamos agentes y flujos que detectan patrones y ejecutan las tareas repetitivas de tu operacion.',
    items: [
      'Asistentes virtuales y chatbots',
      'Automatizacion de procesos con IA',
      'Monitoreo y ajuste continuo',
    ],
  },
  {
    title: 'Plataforma a medida',
    text: 'Cuando ninguna herramienta de terceros se ajusta del todo, disenamos y desarrollamos software propio para tu operacion.',
    items: [
      'Analisis, diseno y desarrollo a medida',
      'Implementacion y despliegue',
      'Mantenimiento y soporte',
    ],
  },
  {
    title: 'Diagnostico de transformacion digital',
    text: 'Evaluamos tu stack actual, identificamos en donde se pierde mas tiempo y te entregamos una hoja de ruta clara.',
    items: [
      'Analisis de sistemas y procesos actuales',
      'Recomendaciones priorizadas',
      'Acompanamiento en la ejecucion',
    ],
  },
]

const Products = () => {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <h1 className={styles.title}>Paquetes pensados para necesidades reales.</h1>
        <p className={styles.text}>
          Cada solucion combina el servicio que necesitas con un alcance claro
          desde el primer dia. Si tu caso mezcla varias, tambien las
          combinamos.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={`grid-12 ${styles.grid}`}>
          {SOLUTIONS.map((solution) => (
            <article key={solution.title} className={`card ${styles.solutionCard}`}>
              <Logomark size={20} strokeWidth={15} color="var(--color-accent)" spark={false} />
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionText}>{solution.text}</p>
              <ul className={styles.solutionList}>
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>Ninguna se ajusta del todo?</h2>
          <p>Cuentanos que necesitas y armamos algo especifico para tu caso.</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          Hablemos
        </NavLink>
      </section>
    </>
  )
}

export default Products
