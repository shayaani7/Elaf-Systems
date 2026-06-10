import './CtaSection.css'

export default function CtaSection({ onBook }) {
  return (
    <section className="cta-section" aria-labelledby="cta-section-title">
      <div className="cta-section-inner reveal">
        <h2 id="cta-section-title" className="cta-title">
          Build Your Financial Strategy on an Unshakable Foundation.
        </h2>
        <p className="cta-desc">
          Partner with globally recognized Shariah experts to structure compliant, commercially
          viable, and regulator-ready financial solutions.
        </p>
        <button
          id="cta-schedule-btn"
          type="button"
          className="btn btn-purple cta-btn"
          onClick={onBook}
        >
          SCHEDULE EXECUTIVE CONSULTATION
        </button>
      </div>
    </section>
  )
}
