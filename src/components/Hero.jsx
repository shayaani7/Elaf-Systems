import shariahIcon from '../assets/Vector (1).svg'
import commercialIcon from '../assets/Vector.svg'
import regulatorIcon from '../assets/hammer.png'
import BlurReveal from './BlurReveal'
import './Hero.css'

function OperationalIcon() {
  return (
    <svg
      className="hero-pill-icon hero-pill-icon--operational"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 84"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M76.5443 38.5482V41.7491C76.54 49.2516 74.1106 56.5518 69.6184 62.5608C65.1262 68.5699 58.812 72.9658 51.6173 75.0931C44.4226 77.2203 36.7331 76.9649 29.6954 74.3648C22.6578 71.7648 16.6492 66.9595 12.5657 60.6655C8.48226 54.3716 6.54271 46.9263 7.03635 39.44C7.53 31.9537 10.4304 24.8276 15.305 19.1243C20.1795 13.4211 26.7671 9.44635 34.0852 7.79292C41.4033 6.1395 49.0598 6.89596 55.9128 9.9495M76.5443 13.9157L41.7526 48.7422L31.3151 38.3047"
        stroke="#00ECB5"
        strokeWidth="7.82812"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const solutions = [
  { icon: shariahIcon, label: 'Ethical and strictly\nShariah-Compliant' },
  { icon: commercialIcon, label: 'Commercially viable\nand profitable' },
  { icon: regulatorIcon, label: 'Regulator-Ready', iconClass: 'hero-pill-icon--regulator' },
  { icon: 'operational', label: 'Operationally\nimplementable' },
]

export default function Hero({ onBook }) {
  return (
    <section id="home" className="hero">
      {/* Subtle grid overlay */}
      <div className="hero-grid" />

      <div className="hero-content">
        <BlurReveal
          as="h1"
          className="hero-title"
          lines={[
            {
              text: 'Bridging Classical Authority',
              lineClass: 'hero-title-line hero-title-line--medium',
            },
            {
              text: 'with Global Digital Infrastructure.',
              lineClass: 'hero-title-line hero-title-line--bold',
            },
          ]}
        />
        <p className="hero-sub reveal reveal-d1">
          Elaf Knowledge Systems is a premier corporate consortium engineering Tier-1 Shariah advisory,
          Islamic financial compliance, enterprise-grade linguistic data localization, and authentic
          digital learning architectures for the global market.
        </p>

        <div className="hero-solutions">
          <div className="hero-solutions-label reveal reveal-d2">Our Solutions:</div>
          <div className="hero-pills reveal reveal-d3">
            {solutions.map((s) => (
              <div key={s.label} className="hero-pill">
                {s.icon === 'operational' ? (
                  <OperationalIcon />
                ) : (
                  <img
                    src={s.icon}
                    alt=""
                    className={`hero-pill-icon${s.iconClass ? ` ${s.iconClass}` : ''}`}
                  />
                )}
                <span className="hero-pill-text">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
