import { NavLink } from 'react-router-dom'
import Logomark from '../../components/Logomark/Logomark'
import styles from './Home.module.css'

const PILLARS = [
  {
    title: 'Software a medida',
    text: 'Analizamos, disenamos y desarrollamos aplicaciones y plataformas hechas para como ya trabaja tu equipo.',
  },
  {
    title: 'Integraciones',
    text: 'Conectamos tu CRM, ERP y demas herramientas mediante APIs, webhooks y conectores -- sin friccion ni copiar y pegar entre sistemas.',
  },
  {
    title: 'Inteligencia artificial',
    text: 'Asistentes, agentes y automatizacion que detectan patrones y ejecutan las tareas repetitivas por ti.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Diagnostico',
    text: 'Entendemos tu operacion, tus sistemas actuales y en donde se pierde mas tiempo.',
  },
  {
    step: '02',
    title: 'Diseno',
    text: 'Definimos la arquitectura de la solucion: que se construye, que se integra y que se automatiza.',
  },
  {
    step: '03',
    title: 'Implementacion',
    text: 'Desarrollamos, integramos y probamos, con entregas visibles durante todo el proceso.',
  },
  {
    step: '04',
    title: 'Soporte',
    text: 'Acompanamos y ajustamos la solucion a medida que tu empresa crece.',
  },
]

const Home = () => {
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
            Conecta todo tu stack.
            <br />
            <span className={styles.accentText}>Que la IA haga el resto.</span>
          </h1>
          <p className={styles.heroText}>
            AnataCode disena software, conecta tus herramientas y usa inteligencia
            artificial para automatizar lo repetitivo -- para que tu equipo se
            enfoque en lo que de verdad importa.
          </p>
          <div className={styles.heroActions}>
            <NavLink to="/contact-sales" className="btn btn-primary">
              Hablemos de tu proyecto
            </NavLink>
            <NavLink to="/services" className="btn btn-ghost">
              Ver servicios
            </NavLink>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <br />
        <div className={`grid-12 ${styles.pillarGrid}`}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className={`card ${styles.pillarCard}`}>
              <Logomark size={22} strokeWidth={14} color="var(--color-accent)" spark={false} />
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>De la idea al sistema en produccion.</h2>
        <ol className={`${styles.processGrid}`}>
          {PROCESS.map((item) => (
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
          <h2>Listo para conectar tu stack?</h2>
          <p>Cuentanos en que estas trabajando y te decimos como lo resolvemos.</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          Hablemos
        </NavLink>
      </section>
    </>
  )
}

export default Home
