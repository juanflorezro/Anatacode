import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// Envuelve todas las rutas: Navbar y Footer se muestran una sola vez,
// el contenido de cada pagina se renderiza en <Outlet />.
const Layout = () => {
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
