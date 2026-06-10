import arowIcon from '../assets/arow.png'
import blinkIcon from '../assets/blink.png'
import bitIcon from '../assets/bit.png'
import homeImage from '../assets/home.png'
import './WhyFail.css'

const failures = [
  {
    id: 'financial',
    icon: arowIcon,
    title: 'Financial Innovation Without Ethical\nCompliance',
    titleWidth: 485,
    desc: 'Products that generate revenue but fail\nShariah governance, creating massive\nregulatory exposure.',
  },
  {
    id: 'technology',
    icon: blinkIcon,
    title: 'Technology Expansion Without Cultural Localization',
    titleWidth: 497,
    desc: 'Digital platforms that expand globally\nwithout proper linguistic data, ruining\nnative UX.',
  },
  {
    id: 'knowledge',
    icon: bitIcon,
    title: 'Knowledge Platforms Without Authentic\nScholarship',
    titleWidth: 501,
    desc: 'Educational platforms that lack verified,\nclassical institutional roots.',
  },
]

export default function WhyFail() {
  return (
    <section className="whyfail-section">
      <div className="whyfail-hero">
        <img
          src={homeImage}
          alt=""
          className="whyfail-home-deco"
          aria-hidden="true"
        />
        <div className="container whyfail-header-inner">
          <h2 className="whyfail-title reveal">
            Why Institutions Fail in Ethical Finance and Global Expansion.
          </h2>
          <p className="whyfail-sub reveal reveal-d1">
            Global organizations are currently facing a modern institutional challenge, often struggling
            with one of three critical structural gaps:
          </p>
        </div>
      </div>

      <div className="container">
        <div className="whyfail-grid">
          {failures.map((f, i) => (
            <div key={f.id} id={`fail-card-${f.id}`} className={`fail-card reveal reveal-d${i + 1}`}>
              <div className="fail-icon-wrap">
                <div className="fail-icon-circle">
                  <img src={f.icon} alt="" className="fail-icon-img" />
                </div>
              </div>
              <h3
                className="fail-title"
                style={f.titleWidth ? { width: `${f.titleWidth}px` } : undefined}
              >
                {f.title}
              </h3>
              <p className="fail-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
