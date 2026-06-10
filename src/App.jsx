import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyFail from './components/WhyFail'
import Divisions from './components/Divisions'
import Services from './components/Services'
import Process from './components/Process'
import Clients from './components/Clients'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import BookDemoModal from './components/BookDemoModal'

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })

  useEffect(() => {
    document.body.style.overflow = demoOpen || mobileMenu ? 'hidden' : ''
  }, [demoOpen, mobileMenu])

  return (
    <>
      <Header onBook={() => setDemoOpen(true)} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <main>
        <Hero onBook={() => setDemoOpen(true)} />
        <About />
        <WhyFail />
        <Divisions onBook={() => setDemoOpen(true)} />
        <Services />
        <Process onBook={() => setDemoOpen(true)} />
        <Clients />
        <CtaSection onBook={() => setDemoOpen(true)} />
      </main>
      <Footer />
      {demoOpen && <BookDemoModal onClose={() => setDemoOpen(false)} />}
    </>
  )
}
