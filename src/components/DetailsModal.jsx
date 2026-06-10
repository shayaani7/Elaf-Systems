import './DetailsModal.css'

export default function DetailsModal({ data, onClose }) {
  const { title, content, icon, color, points, tag } = data

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal-box details-modal-box">
        <button id="details-modal-close-btn" className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="details-header" style={{ borderBottomColor: color + '40' }}>
          <div className="details-icon" style={{ background: color + '18', border: `1px solid ${color}40` }}>
            <span style={{ fontSize: 32 }}>{icon}</span>
          </div>
          <div>
            <div className="pill" style={{ background: color + '18', color: color, border: `1px solid ${color}40`, fontSize: '10px', marginBottom: 8 }}>{tag}</div>
            <h2 className="details-title">{title}</h2>
          </div>
        </div>

        <p className="details-content">{content}</p>

        {points && points.length > 0 && (
          <div className="details-points">
            <div className="details-points-title">Key Capabilities</div>
            {points.map((p) => (
              <div key={p} className="details-point-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {p}
              </div>
            ))}
          </div>
        )}

        <div className="details-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <button className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
