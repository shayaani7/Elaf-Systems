import './Failures.css'

const failures = [
  {
    id: 'regulatory',
    icon: '⚠️',
    color: '#E2B93B',
    tag: 'Regulatory Risk',
    title: 'Regulatory & Compliance Blind Spots',
    short: 'Most institutions underestimate the complexity of multi-jurisdictional Shariah compliance, leading to costly legal exposures.',
    full: 'Many financial institutions enter new markets without fully understanding the layered requirements of Shariah-compliant operations. From varying fatwas across jurisdictions to inconsistent audit standards, the compliance landscape is treacherous without specialist guidance. Elaf provides end-to-end regulatory intelligence, mapping requirements across 40+ jurisdictions to ensure institutions are never caught off-guard.',
    points: ['Fatwa inconsistencies across jurisdictions', 'Audit framework misalignment', 'Undisclosed interest clauses in contracts', 'Missing regulatory reporting standards'],
  },
  {
    id: 'technology',
    icon: '⚡',
    color: '#5D5FEF',
    tag: 'Digital Infrastructure',
    title: 'Outdated Technology & Integration Failures',
    short: 'Legacy core banking systems and fragmented digital architecture prevent ethical finance institutions from scaling globally.',
    full: 'Institutions trying to expand globally often find their technology stack fundamentally incompatible with modern cross-border settlement requirements, tokenised asset frameworks, and real-time compliance reporting. Elaf\'s Digital Infrastructure division bridges this gap with modular, API-first solutions that integrate seamlessly with existing systems while enabling compliance-grade digital transformation.',
    points: ['Legacy core banking incompatibility', 'No real-time compliance reporting', 'Fragmented data architecture', 'Missing tokenisation capabilities'],
  },
  {
    id: 'knowledge',
    icon: '📚',
    color: '#27AE60',
    tag: 'Knowledge Gaps',
    title: 'Knowledge Deficits & Institutional Blind Spots',
    short: 'Without access to deep Shariah scholarship and global market intelligence, institutions make uninformed strategic decisions.',
    full: 'The gap between classical Islamic finance scholarship and modern global market dynamics is wide. Institutions often rely on generalist advisors who lack the depth of Shariah expertise required for complex financial instruments, sukuk structuring, or cross-border ethical fund management. Elaf\'s Knowledge Academy provides specialised training, research, and advisory services to close this gap permanently.',
    points: ['Weak Shariah scholar networks', 'Limited sukuk structuring expertise', 'No access to ethical fund research', 'Poor board-level governance training'],
  },
]

export default function Failures({ onDetails }) {
  return (
    <section id="failures" data-section="failures" className="section failures-section">
      <div className="failures-bg-orb" />
      <div className="container">
        <div className="failures-header">
          <div className="section-label animate-on-scroll">Why Institutions Fail</div>
          <h2 className="failures-title animate-on-scroll animate-delay-1">
            Why Institutions Fail in{' '}
            <span className="gradient-text">Ethical Finance</span>
            <br />
            and Global Expansion
          </h2>
          <p className="failures-subtitle animate-on-scroll animate-delay-2">
            Three systemic challenges prevent institutions from achieving compliant global growth —
            and Elaf is positioned to solve all three.
          </p>
        </div>

        <div className="failures-grid">
          {failures.map((f, i) => (
            <div
              key={f.id}
              id={`failure-card-${f.id}`}
              className="failure-card animate-on-scroll glass-card"
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
              onClick={() => onDetails({ title: f.title, content: f.full, icon: f.icon, color: f.color, points: f.points, tag: f.tag })}
            >
              <div className="failure-card-top">
                <div className="failure-icon" style={{ background: f.color + '18', border: `1px solid ${f.color}40` }}>
                  <span>{f.icon}</span>
                </div>
                <span className="pill" style={{ background: f.color + '18', color: f.color, border: `1px solid ${f.color}40`, fontSize: '10px' }}>
                  {f.tag}
                </span>
              </div>

              <h3 className="failure-title">{f.title}</h3>
              <p className="failure-desc">{f.short}</p>

              <div className="failure-points">
                {f.points.slice(0, 2).map((p) => (
                  <div key={p} className="failure-point">
                    <div className="fp-dot" style={{ background: f.color }} />
                    {p}
                  </div>
                ))}
              </div>

              <button className="failure-read-more" style={{ color: f.color }}>
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>

              {/* Hover glow */}
              <div className="failure-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${f.color}20 0%, transparent 70%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
