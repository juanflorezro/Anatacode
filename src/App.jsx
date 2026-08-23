import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/Layout/Layout'
import Splash from './components/Splash/Splash'

// Paginas
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import ZohoPremium from './pages/ZohoPremium/ZohoPremium'
import ContactSales from './pages/ContactSales/ContactSales'

function App() {
  return (
    <LanguageProvider>
      {/* Vive aqui, no dentro de las rutas: solo se monta una vez, cuando
          arranca la aplicacion (carga nueva o F5) -- nunca al navegar
          entre paginas con el nav o el footer. */}
      <Splash />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/zoho" element={<ZohoPremium />} />
            <Route path="/contact-sales" element={<ContactSales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

