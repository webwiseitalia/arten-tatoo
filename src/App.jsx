import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Storia from './components/Storia'
import Artisti from './components/Artisti'
import Servizi from './components/Servizi'
import Studi from './components/Studi'
import Portfolio from './components/Portfolio'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="bg-arten-black min-h-screen">
      <Navbar />
      <Hero />
      <Storia />
      <Artisti />
      <Servizi />
      <Studi />
      <Portfolio />
      <Contatti />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
