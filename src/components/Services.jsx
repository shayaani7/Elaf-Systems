import arowIcon from '../assets/arow.png'
import blinkIcon from '../assets/blink.png'
import bitIcon from '../assets/bit.png'
import './Services.css'

const services = [
  {
    id: 'shariah',
    icon: arowIcon,
    title: 'Elaf Shariah Advisory',
    target: 'Islamic Banks, FinTech, SMEs, Startups, NGOs, and Investment Funds worldwide.',
    whatWeDo:
      'We design Shariah-compliant financial products (Murabaha, Musharaka, Ijarah, Sukuk), Islamic fintech structures, and institutional Shariah Supervisory Boards. We do not provide abstract opinions; we deliver executable financial architecture.',
  },
  {
    id: 'lexisync',
    icon: blinkIcon,
    title: 'Elaf LexiSync',
    target:
      'Silicon Valley Tech Giants, SaaS, App Developers, Global Enterprises, Legal & HR Departments.',
    whatWeDo:
      'Enterprise localization and linguistic technology. We support global expansion through continuous software localization, AI & MTPE optimization, RTL UI/UX compliance, and secure legal content management across English, Arabic, Urdu, Pashto, and Persian.',
  },
  {
    id: 'academy',
    icon: bitIcon,
    title: 'Elaf Digital Academy',
    target: 'EdTech Platforms, Digital Madaris, Islamic Universities, NGOs, and Global Schools.',
    whatWeDo:
      'Curriculum architecture and institutional learning systems. We design LMS-optimized Islamic finance programs, structured Arabic & Tajwid curricula, and conduct rigorous academic compliance audits.',
  },
]

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.id} id={`service-card-${s.id}`} className={`srv-card reveal reveal-d${i + 1}`}>
              <div className="srv-icon-wrap">
                <div className="srv-circle">
                  <img src={s.icon} alt="" className="srv-icon-img" />
                </div>
              </div>
              <h3 className="srv-title">{s.title}</h3>
              <div className="srv-desc">
                <p className="srv-target">
                  <span className="srv-label">Target:</span> {s.target}
                </p>
                <p className="srv-what-heading">What We Do:</p>
                <p className="srv-what-text">{s.whatWeDo}</p>
              </div>
              <a href="#" className="srv-learn-more">Learn more</a>
            </div>
          ))}
        </div>
        <div className="services-see-all reveal">
          <a href="#">See all features</a>
        </div>
      </div>
    </section>
  )
}
