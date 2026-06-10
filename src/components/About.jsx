import { useEffect, useRef, useState } from 'react'
import centerCircle from '../assets/circel.png'
import bitcoinIcon from '../assets/bitcoin.png'
import coinImage from '../assets/coin.png'
import handImage from '../assets/hand.png'
import SpinningBadge from './SpinningBadge'
import './About.css'

function useCountUp(target, started) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) return
    let v = 0
    const step = target / 80
    const t = setInterval(() => {
      v += step
      if (v >= target) { setVal(target); clearInterval(t) }
      else setVal(Math.floor(v))
    }, 20)
    return () => clearInterval(t)
  }, [target, started])
  return val
}

function StatBubble({ value, suffix, label, bg, color, started, className }) {
  const n = useCountUp(value, started)
  return (
    <div className={`stat-bubble ${className || ''}`} style={{ background: bg }}>
      <div className="stat-val" style={{ color }}>{n}{suffix}</div>
      <div className="stat-lbl" style={{ color: color === '#fff' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)' }}>{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="knowledge-systems" className="about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div className="about-left">
            <h2 className="about-title reveal">
              <span className="about-title-line">Elaf Knowledge</span>
              <span className="about-title-line">Systems</span>
            </h2>
            <p className="about-desc reveal reveal-d2">
              {`Elaf Knowledge Systems is a premier corporate
consortium engineering Tier-1 Shariah advisory,
Islamic financial compliance, enterprise-grade linguistic
data localization, and authentic digital learning architectures
for the global market.`}
            </p>
            <div className="about-actions reveal reveal-d3">
              <button id="about-explore-btn" className="btn btn-purple about-explore-btn">
                Start Exploring
              </button>
              <SpinningBadge />
            </div>
          </div>

          {/* Right — stats */}
          <div className="about-right">
            <div className="about-top-stats reveal reveal-d1">
              <div className="about-visual-wrap">
                <img src={handImage} alt="" className="about-deco-hand" aria-hidden="true" />
                <img src={coinImage} alt="" className="about-deco-coin" aria-hidden="true" />

                <div className="about-years-row">
                  <div className="about-years-text">
                    <span className="about-years-val">{started ? '15+' : '0+'}</span>
                    <span className="about-years-lbl">Years experience</span>
                  </div>
                  <img src={bitcoinIcon} alt="" className="about-bitcoin-icon" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* 200+ Global Clients — full-width purple */}
            <div className="about-clients-bar reveal reveal-d2">
              <div className="about-clients-val">{started ? '200+' : '0+'}</div>
              <div className="about-clients-lbl">Global Clients</div>
            </div>

            {/* Bottom row */}
            <div className="about-bottom-row reveal reveal-d3">
              {/* 4M+ Words Localized */}
              <div className="about-words-card about-stat-pill">
                <div className="about-stat-val">{started ? '4M+' : '0+'}</div>
                <div className="about-words-lbl">Words Localized</div>
              </div>

              <img
                src={centerCircle}
                alt=""
                className="about-center-badge"
                aria-hidden="true"
              />

              {/* 100+ Financial Models */}
              <div className="about-models-card about-stat-pill">
                <div className="about-models-text">
                  <span className="about-stat-val">{started ? '100+' : '0+'}</span>
                  <span className="about-models-lbl">
                    Financial Models
                    <br />
                    Engineered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
