import { useState } from 'react'
import './TagFilter.css'

const tags = [
  { id: 'institutional', label: 'Institutional Infrastructure', icon: '🏦' },
  { id: 'defi', label: 'Decentralized Finance', icon: '⛓️' },
  { id: 'settlement', label: 'Cross-Border Settlement', icon: '🌐' },
  { id: 'ai', label: 'AI-Driven Compliance', icon: '🤖' },
  { id: 'sukuk', label: 'Sukuk & Islamic Bonds', icon: '📜' },
  { id: 'governance', label: 'ESG & Governance', icon: '🌱' },
  { id: 'tokenization', label: 'Asset Tokenization', icon: '🔐' },
  { id: 'training', label: 'Professional Training', icon: '🎓' },
]

const tagContent = {
  institutional: {
    title: 'Institutional Infrastructure',
    desc: 'We design and implement end-to-end institutional frameworks for banks, investment firms, and government entities seeking compliant global operational infrastructure.',
    stats: [{ v: '50+', l: 'Institutions Served' }, { v: '99.9%', l: 'Uptime SLA' }, { v: '40+', l: 'Jurisdictions' }],
    workflow: ['Assessment & Gap Analysis', 'Framework Design', 'Technology Integration', 'Compliance Certification', 'Ongoing Monitoring'],
  },
  defi: {
    title: 'Decentralized Finance (DeFi)',
    desc: 'Bridging Shariah-compliant principles with blockchain-based decentralized protocols. We screen, certify, and structure DeFi products that meet Islamic finance standards.',
    stats: [{ v: '$2B+', l: 'Assets Certified' }, { v: '15+', l: 'DeFi Protocols' }, { v: '3', l: 'Blockchains Supported' }],
    workflow: ['Protocol Analysis', 'Shariah Screening', 'Smart Contract Audit', 'Fatwa Issuance', 'Ongoing Compliance'],
  },
  settlement: {
    title: 'Cross-Border Settlement',
    desc: 'Our multi-currency, multi-jurisdiction settlement layer enables compliant, near-instant cross-border transfers aligned with SWIFT, ISO 20022, and Shariah requirements.',
    stats: [{ v: '120+', l: 'Currencies' }, { v: '<2s', l: 'Settlement Time' }, { v: '6', l: 'Continents Active' }],
    workflow: ['KYC/AML Screening', 'Shariah Compliance Check', 'FX Conversion', 'Settlement Execution', 'Audit Trail Generation'],
  },
  ai: {
    title: 'AI-Driven Compliance',
    desc: 'Machine learning models trained on Shariah jurisprudence databases, global AML/CFT regulations, and market data to deliver real-time, intelligent compliance decisions.',
    stats: [{ v: '99.7%', l: 'Accuracy Rate' }, { v: '<100ms', l: 'Decision Speed' }, { v: '10M+', l: 'Transactions/Day' }],
    workflow: ['Data Ingestion', 'ML Model Scoring', 'Rule Engine Check', 'Human Review Flag', 'Decision & Reporting'],
  },
  sukuk: {
    title: 'Sukuk & Islamic Bonds',
    desc: 'Full-lifecycle sukuk structuring, from initial Shariah screening and structure design to regulatory filing, investor prospectus, and ongoing compliance reporting.',
    stats: [{ v: '$500M+', l: 'Sukuk Structured' }, { v: '25+', l: 'Issuances' }, { v: '8+', l: 'Structures Supported' }],
    workflow: ['Shariah Structure Selection', 'Asset Identification', 'Legal Documentation', 'Rating & Pricing', 'Issuance & Listing'],
  },
  governance: {
    title: 'ESG & Governance',
    desc: 'Integrating Environmental, Social, and Governance (ESG) principles with Islamic finance ethics for institutions seeking dual-compliant, sustainable investment strategies.',
    stats: [{ v: '30+', l: 'ESG Frameworks' }, { v: '100%', l: 'TCFD Aligned' }, { v: '15+', l: 'SDGs Addressed' }],
    workflow: ['Materiality Assessment', 'ESG Score Mapping', 'Shariah Alignment', 'Reporting Framework', 'Third-Party Verification'],
  },
  tokenization: {
    title: 'Asset Tokenization',
    desc: 'Converting real-world assets — real estate, commodities, trade receivables — into Shariah-compliant digital tokens on regulated blockchain infrastructure.',
    stats: [{ v: '$300M+', l: 'Assets Tokenized' }, { v: '5+', l: 'Asset Classes' }, { v: '2', l: 'Regulatory Sandboxes' }],
    workflow: ['Asset Legal Wrapping', 'Shariah Certification', 'Token Minting', 'Market Making', 'Secondary Market Listing'],
  },
  training: {
    title: 'Professional Training',
    desc: 'Internationally accredited professional development programmes for Islamic finance practitioners, compliance officers, and board-level executives.',
    stats: [{ v: '5,000+', l: 'Graduates' }, { v: '20+', l: 'Programmes' }, { v: '95%', l: 'Satisfaction Rate' }],
    workflow: ['Needs Assessment', 'Curriculum Design', 'Live Instruction', 'Practical Assessment', 'Certification & CPD'],
  },
}

export default function TagFilter() {
  const [active, setActive] = useState('institutional')
  const content = tagContent[active]

  return (
    <section id="services" data-section="services" className="section tagfilter-section">
      <div className="tagfilter-bg-orb" />
      <div className="container">
        <div className="tagfilter-header">
          <div className="section-label animate-on-scroll">Our Services</div>
          <h2 className="tagfilter-title animate-on-scroll animate-delay-1">
            Explore Our{' '}
            <span className="gradient-text">Service Areas</span>
          </h2>
          <p className="tagfilter-subtitle animate-on-scroll animate-delay-2">
            Select a domain to explore how Elaf delivers compliant, scalable solutions.
          </p>
        </div>

        {/* Tag Pills */}
        <div className="tagfilter-pills animate-on-scroll animate-delay-2">
          {tags.map((t) => (
            <button
              id={`tag-${t.id}`}
              key={t.id}
              className={`tag-pill${active === t.id ? ' tag-pill-active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span className="tag-pill-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="tagfilter-content animate-on-scroll animate-delay-3" key={active}>
          <div className="tfc-left">
            <h3 className="tfc-title">{content.title}</h3>
            <p className="tfc-desc">{content.desc}</p>
            {/* Stats */}
            <div className="tfc-stats">
              {content.stats.map((s) => (
                <div key={s.l} className="tfc-stat">
                  <div className="tfc-stat-val gradient-text">{s.v}</div>
                  <div className="tfc-stat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="tfc-right">
            <div className="tfc-workflow-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-indigo)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              Service Workflow
            </div>
            <div className="tfc-workflow">
              {content.workflow.map((step, i) => (
                <div key={step} className="tfc-step">
                  <div className="tfc-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="tfc-step-line">
                    <div className="tfc-step-dot" />
                    {i < content.workflow.length - 1 && <div className="tfc-step-connector" />}
                  </div>
                  <div className="tfc-step-label">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
