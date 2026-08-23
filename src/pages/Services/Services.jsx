import { NavLink } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    title: 'Desarrollo de software a medida',
    text: 'Analisis, diseno, programacion e implementacion de aplicaciones y plataformas para tu operacion especifica -- no una plantilla generica.',
    span: 7,
  },
  {
    title: 'Integraciones y automatizacion',
    text: 'Conectamos sistemas, aplicaciones y servicios mediante APIs, webhooks, conectores y demas mecanismos de interoperabilidad.',
    span: 5,
  },
  {
    title: 'Inteligencia artificial',
    text: 'Asistentes virtuales, chatbots, agentes inteligentes y automatizacion basada en IA para las tareas repetitivas.',
    span: 5,
  },
  {
    title: 'CRM, ERP y plataformas de gestion',
    text: 'Implementacion, configuracion, personalizacion, integracion y soporte de sistemas CRM, ERP y demas herramientas de terceros.',
    span: 7,
  },
  {
    title: 'Consultoria y transformacion digital',
    text: 'Asesoria y acompanamiento en tecnologia, integracion de sistemas, automatizacion e inteligencia artificial.',
    span: 6,
  },
  {
    title: 'Capacitacion y transferencia de conocimiento',
    text: 'Entrenamos a tu equipo en las herramientas y sistemas que implementamos, para que el conocimiento se quede en tu empresa.',
    span: 6,
  },
]

const Services = () => {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <h1 className={styles.title}>Todo lo que tu stack necesita, en un mismo equipo.</h1>
        <p className={styles.text}>
          Desde el desarrollo de software propio hasta la integracion de lo
          que ya usas sin fragmentar el trabajo entre distintos proveedores.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <div className="grid-12">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="card"
              style={{ gridColumn: `span ${service.span}` }}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta-band">
        <div>
          <h2>No encuentras exactamente lo que buscas?</h2>
          <p>Cuentanos tu caso, casi siempre se resuelve combinando varios de estos servicios.</p>
        </div>
        <NavLink to="/contact-sales" className="btn btn-primary">
          Hablemos
        </NavLink>
      </section>
    </>
  )
}

export default Services
