import './Process.css'

const steps = [
  {
    num: '1',
    title: 'Diagnostic Review',
    desc: 'Comprehensive assessment of your\ncurrent structures and objectives.',
    color: '#0A1628',
    textColor: '#fff',
  },
  {
    num: '2',
    title: 'Gap & Risk Identification',
    desc: 'Identifying structural, compliance, and\noperational gaps.',
    color: '#111F34',
    textColor: '#fff',
  },
  {
    num: '3',
    title: 'Financial Model Development',
    desc: 'Engineering the financial model and\noperational workflow.',
    color: '#202D40',
    textColor: '#fff',
  },
  {
    num: '4',
    title: 'Compliance Structuring',
    desc: 'Building regulator-ready frameworks\nand documentation.',
    color: '#394C69',
    textColor: '#fff',
  },
  {
    num: '5',
    title: 'Implementation Guidelines',
    desc: 'Guiding your development and\noperations teams through deployment.',
    color: '#546F9A',
    textColor: '#fff',
  },
  {
    num: '6',
    title: 'Governance & Oversight',
    desc: 'Continuous board representation and\naudit oversight.',
    color: '#739AD9',
    textColor: '#fff',
  },
]

export default function Process({ onBook }) {
  return (
    <section id="our-process" className="process-section">
      <div className="container">
        <div className="process-layout">
          {/* Left */}
          <div className="proc-left reveal">
            <h2 className="proc-title">Institutional-Grade Advisory Process.</h2>
            <p className="proc-sub">
              Our engagements follow a rigorously structured phase approach to ensure absolute clarity,
              regulator readiness, and unwavering investor confidence.
            </p>
            <div className="proc-actions">
              <button id="process-contact-btn" className="btn btn-purple proc-contact-btn" onClick={onBook}>
                Get in Contact
              </button>
            </div>
          </div>

          {/* Right — staircase steps */}
          <div className="proc-steps reveal reveal-d2">
            <div className="staircase">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  id={`process-step-${s.num}`}
                  className="step-pill"
                  style={{
                    marginRight: `${(steps.length - 1 - i) * 40}px`,
                    zIndex: i + 1,
                  }}
                >
                  <div className="step-pill-left" style={{ background: s.color }}>
                    <div className="step-num-badge">{s.num}</div>
                    <span className="step-title">{s.title}</span>
                  </div>
                  <div className="step-pill-right">
                    <span className="step-desc">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
