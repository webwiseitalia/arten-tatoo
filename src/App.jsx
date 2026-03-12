import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Handle anchor clicks for smooth navigation
    const handleClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href?.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) lenis.scrollTo(target, { offset: -80 })
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <Storia />
        <Artisti />
        <Servizi />
        <Studi />
        <Portfolio />
        <Contatti />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
