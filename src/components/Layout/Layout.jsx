import { Outlet } from 'react-router-dom'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// Envuelve todas las rutas: Navbar y Footer se muestran una sola vez,
// el contenido de cada pagina se renderiza en <Outlet />.
//
// useScrollToTop vive aqui porque Layout no se vuelve a montar entre
// paginas (solo cambia el <Outlet />) -- así que sin este hook, cambiar
// de ruta desde el nav, el footer o cualquier boton dejaria el scroll
// donde estaba en la pagina anterior.
const Layout = () => {
  useScrollToTop()

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
