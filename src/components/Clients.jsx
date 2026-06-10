import alimLogo from '../assets/alim.png'
import amplifyLogo from '../assets/amplify.png'
import australianInstituteLogo from '../assets/australian insitute.png'
import eqrazLogo from '../assets/eqraz.png'
import goldenPromiseLogo from '../assets/goldenpromise.png'
import mLogo from '../assets/m.png'
import malcoCapitalLogo from '../assets/malcocapital.png'
import marsLogo from '../assets/mars.png'
import metaLogo from '../assets/meta.png'
import quan2umLogo from '../assets/quan2um.png'
import sTepesLogo from '../assets/s.tepes.png'
import smartLogo from '../assets/smart.png'
import sofanceLogo from '../assets/sofance.png'
import starLogo from '../assets/star.png'
import systemRapidLogo from '../assets/systemrapid.png'
import thbigworldLogo from '../assets/thbigworld.png'
import zycusLogo from '../assets/zycus.png'
import './Clients.css'

const marqueeRow1 = [
  { src: starLogo, alt: 'Client logo' },
  { src: metaLogo, alt: 'Meta' },
  { src: mLogo, alt: 'Murooj' },
  { src: marsLogo, alt: 'Mars' },
  { src: sofanceLogo, alt: 'Sofance', className: 'client-logo--sofance' },
  { src: smartLogo, alt: 'Smart Solutions' },
  { src: alimLogo, alt: 'Alim University' },
]

const marqueeRow2 = [
  { src: thbigworldLogo, alt: 'thebigword', className: 'client-logo--thbigworld' },
  { src: australianInstituteLogo, alt: 'Australian Institute of Business' },
  { src: systemRapidLogo, alt: 'SystemRapid' },
  { src: sTepesLogo, alt: 'Stepes' },
  { src: eqrazLogo, alt: 'EQRAZ' },
  { src: goldenPromiseLogo, alt: 'Golden Promise', className: 'client-logo--golden-promise' },
  { src: amplifyLogo, alt: 'Amplify' },
  { src: malcoCapitalLogo, alt: 'Malco Capital' },
  { src: zycusLogo, alt: 'Zycus' },
  { src: quan2umLogo, alt: 'Quan2um', className: 'client-logo--quan2um' },
]

function MarqueeRow({ logos }) {
  const loop = [...logos, ...logos]

  return (
    <div className="marquee-track">
      <div className="marquee-content">
        {loop.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className={`client-logo${logo.className ? ` ${logo.className}` : ''}`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="client-logo-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="contact-us" className="clients-section">
      <div className="container">
        <div className="clients-banner reveal">
          <div className="clients-banner-top">Trusted by</div>
          <h2 className="clients-headline">200+ Global Clients Across 6 Continents</h2>
          <div className="clients-regions">
            USA · UK · UAE · KSA · Kuwait · Canada · Australia · Germany · France · MENA Region
          </div>
        </div>
      </div>

      <div className="clients-marquee reveal reveal-d1">
        <MarqueeRow logos={marqueeRow1} />
        <MarqueeRow logos={marqueeRow2} />
      </div>

      <div className="container">
        <div className="clients-cta reveal reveal-d2">
          <a href="#" className="clients-case-studies">VIEW DETAILED CASE STUDIES</a>
        </div>
      </div>
    </section>
  )
}
