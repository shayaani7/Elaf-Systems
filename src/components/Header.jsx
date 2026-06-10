import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Elaf Shariah Advisory', href: '#service-card-shariah' },
  { label: 'Elaf LexiSync', href: '#service-card-lexisync' },
  { label: 'Elaf Digital Academy', href: '#service-card-academy' },
  { label: 'Leadership & Management', href: '#knowledge-systems' },
]

function Logo() {
  return (
    <a href="#home" className="nav-logo" aria-label="Elaf Knowledge Systems">
      <img src={logo} alt="Elaf Knowledge Systems" className="nav-logo-img" />
    </a>
  )
}

export default function Header({ onBook, mobileMenu, setMobileMenu }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 120
      let current = '#home'

      for (const item of navItems) {
        const el = document.getElementById(item.href.slice(1))
        if (el && el.offsetTop <= scrollPos) current = item.href
      }

      setActiveHref(current)
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      updateActiveSection()
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
        <div className="header-inner">
          <Logo />

          <nav className="header-nav hide-mobile">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className={`header-nav-item${activeHref === item.href ? ' nav-active' : ''}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-right">
            <button id="header-book-btn" className="header-book-btn hide-mobile" onClick={onBook}>
              Schedule a Consultation
            </button>
            <button
              id="hamburger-btn"
              className="hamburger hide-desktop"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              <span className={`hbar${mobileMenu ? ' open' : ''}`}/>
              <span className={`hbar${mobileMenu ? ' open' : ''}`}/>
              <span className={`hbar${mobileMenu ? ' open' : ''}`}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileMenu ? ' open' : ''}`}>
        <div className="mm-inner">
          <div className="mm-top">
            <Logo />
            <button className="mm-close" onClick={() => setMobileMenu(false)}>✕</button>
          </div>
          <nav className="mm-nav">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className={`mm-link${activeHref === item.href ? ' nav-active' : ''}`}
                onClick={() => setMobileMenu(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <button id="mobile-book-btn" className="btn btn-blue" style={{width:'100%',marginTop:24}} onClick={() => { setMobileMenu(false); onBook(); }}>
            Schedule a Consultation
          </button>
        </div>
      </div>
      {mobileMenu && <div className="mm-overlay" onClick={() => setMobileMenu(false)}/>}
    </>
  )
}
