import { useEffect, useRef, useState } from 'react'
import './Stats.css'

function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, shouldStart])
  return count
}

function StatCard({ value, suffix, label, icon, color, delay, started }) {
  const num = useCountUp(value, 2200, started)
  return (
    <div className="stat-card animate-on-scroll" style={{ transitionDelay: delay }}>
      <div className="stat-icon" style={{ background: color + '1a', border: `1px solid ${color}40` }}>
        {icon}
      </div>
      <div className="stat-value" style={{ color }}>
        {num}{suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar-track">
        <div className="stat-bar-fill" style={{ background: color, animationDelay: started ? delay : '9999s' }} />
      </div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" data-section="about" className="section stats-section" ref={sectionRef}>
      <div className="stats-bg-orb" />
      <div className="container">
        <div className="stats-grid">
          {/* Left — About text */}
          <div className="stats-about">
            <div className="section-label animate-on-scroll">About Us</div>
            <h2 className="stats-title animate-on-scroll animate-delay-1">
              Elaf <span className="gradient-text">Knowledge</span>
              <br />
              <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}>Systems</span>
            </h2>
            <p className="stats-desc animate-on-scroll animate-delay-2">
              Founded on the principles of Shariah compliance and global digital transformation,
              Elaf Knowledge Systems is a premier institution providing advisory, infrastructure,
              and educational services to financial institutions, governments, and enterprises
              seeking ethical and sustainable global expansion.
            </p>
            <p className="stats-desc animate-on-scroll animate-delay-3" style={{ marginTop: '16px' }}>
              Our multidisciplinary team of Shariah scholars, regulatory experts, technologists,
              and economists has a proven track record of delivering compliant, scalable solutions
              across emerging and developed markets.
            </p>
            <div className="stats-features animate-on-scroll animate-delay-4">
              {['Shariah Board Certification', 'Regulatory Intelligence', 'AI-Powered Compliance', 'Cross-Border Framework'].map((f) => (
                <div key={f} className="stats-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--clr-indigo)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stat cards */}
          <div className="stats-cards">
            <StatCard value={15} suffix="+" label="Years of Excellence" icon="🏛️" color="#5D5FEF" delay="0.1s" started={started} />
            <StatCard value={200} suffix="+" label="Global Clients" icon="🌍" color="#E2B93B" delay="0.2s" started={started} />
            <StatCard value={6} suffix="" label="Continents Served" icon="✈️" color="#27AE60" delay="0.3s" started={started} />
            <StatCard value={40} suffix="+" label="Jurisdictions" icon="⚖️" color="#E74C8B" delay="0.4s" started={started} />
          </div>
        </div>
      </div>
    </section>
  )
}
