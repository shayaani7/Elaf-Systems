import { useState } from 'react'
import corporateHubIcon from '../assets/corporaterhub.png'
import executiveIcon from '../assets/executive.png'
import logo from '../assets/logo.png'
import phoneIcon from '../assets/phone.png'
import timingIcon from '../assets/timing.png'
import './Footer.css'

const quickNavLinks = [
  { label: 'Elaf Shariah Advisory', href: '#service-card-shariah' },
  { label: 'Elaf LexiSync', href: '#service-card-lexisync' },
  { label: 'Elaf Digital Academy', href: '#service-card-academy' },
  { label: 'Leadership & Management', href: '#knowledge-systems' },
]

const legalLinks = [
  'Privacy Policy',
  'Terms and Conditions',
  'Disclaimer',
  'FAQs',
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Twitter', href: '#', icon: 'x' },
  { label: 'Facebook', href: '#', icon: 'f' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1500)
  }

  return (
    <footer className="footer">
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo" aria-label="Elaf Knowledge Systems">
                <img src={logo} alt="" className="footer-logo-img" />
              </a>
              <p className="footer-tagline">
                Bridging Classical Authority with Global Digital Infrastructure.
              </p>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <img src={corporateHubIcon} alt="" className="fci-icon-img" aria-hidden="true" />
                  <span>
                    Corporate Hub, Wah Cantt / Rawalpindi, Punjab, Pakistan
                  </span>
                </div>
                <div className="footer-contact-item">
                  <img src={executiveIcon} alt="" className="fci-icon-img" aria-hidden="true" />
                  <a href="mailto:executive@elafadvisory.com" className="footer-contact-link">
                    executive@elafadvisory.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <img src={phoneIcon} alt="" className="fci-icon-img" aria-hidden="true" />
                  <span>+92 300-000-0000 (WhatsApp / Direct)</span>
                </div>
                <div className="footer-contact-item">
                  <img src={timingIcon} alt="" className="fci-icon-img" aria-hidden="true" />
                  <span>
                    Mon – Sat: 8:00 AM – 5:00 PM (PKT)
                    <br />
                    Sunday: Closed
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-col-head">Quick Navigation</div>
              <ul className="footer-col-list">
                {quickNavLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-col-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-newsletter">
              <div className="footer-col-head">Executive Intelligence Briefing</div>
              <p className="footer-nl-desc">
                Subscribe for the latest updates on Islamic{'\n'}
                finance regulations and fintech innovations.
              </p>
              <form onSubmit={submit} className="footer-nl-form" noValidate>
                <input
                  id="footer-email-input"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setStatus('idle')
                  }}
                  className={`footer-nl-input${status === 'error' ? ' input-error' : ''}`}
                  disabled={status === 'loading' || status === 'success'}
                />
                <button
                  id="footer-subscribe-btn"
                  type="submit"
                  className="footer-nl-submit"
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' ? 'SUBSCRIBING…' : status === 'success' ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                </button>
              </form>
              {status === 'error' && (
                <div className="nl-msg nl-error">Please enter a valid email.</div>
              )}
              {status === 'success' && (
                <div className="nl-msg nl-ok">Subscribed successfully.</div>
              )}

              <div className="footer-social">
                <div className="footer-col-head footer-social-head">Follow Us</div>
                <div className="footer-social-icons">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="footer-social-icon"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Elaf Knowledge Systems. All Rights Reserved.</span>
            <div className="footer-bottom-right">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="footer-legal-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
