import exchangeImage from '../assets/exchange.png'
import './Divisions.css'

export default function Divisions({ onBook }) {
  return (
    <section id="divisions" className="divisions-section">
      <div className="container">
        <div className="divisions-layout">
          <div className="div-left">
            <div className="div-spec reveal">Specializations</div>
            <h2 className="div-title reveal reveal-d1">
              Strategic Infrastructure Across Three Specialized Divisions.
            </h2>
            <p className="div-sub reveal reveal-d2">
              Technology alone cannot build ethical economies. Traditional scholarship alone cannot
              scale globally. Elaf integrates theology, finance, language technology, and education
              into one unified operational framework.
            </p>
            <div className="div-actions reveal reveal-d3">
              <button id="divisions-explore-btn" className="btn btn-purple div-explore-btn" onClick={onBook}>
                Explore our services below ↓
              </button>
            </div>
          </div>

          <div className="div-visual reveal reveal-d2">
            <img
              src={exchangeImage}
              alt="Financial growth and market analytics visualization"
              className="div-visual-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
