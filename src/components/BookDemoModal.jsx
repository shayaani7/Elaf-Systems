import { useState } from 'react'
import './BookDemoModal.css'

const divs = ['Elaf Shariah Advisory', 'Elaf LexiSync', 'Elaf Digital Academy', 'General Inquiry']

export default function BookDemoModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', org: '', division: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const u = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (!form.org.trim()) e.org = 'Organization is required'
    if (!form.division) e.division = 'Please select a service'
    setErrors(e)
    return !Object.keys(e).length
  }

  const submit = e => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1800)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true">
        <button id="modal-close-btn" className="modal-x" onClick={onClose}>✕</button>

        {done ? (
          <div className="modal-done">
            <div className="modal-done-icon">✅</div>
            <h3>Consultation Scheduled!</h3>
            <p>Thank you, <strong>{form.name}</strong>. Our team will reach out to <strong>{form.email}</strong> within 24 hours.</p>
            <button className="btn btn-purple" onClick={onClose} style={{ marginTop: 20 }}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-head">
              <h2 className="modal-title">Schedule a Consultation</h2>
              <p className="modal-sub">Confidential · No commitment required · Response within 24 hours</p>
            </div>
            <form onSubmit={submit} noValidate className="modal-form">
              <div className="modal-row">
                <Field id="m-name" label="Full Name" error={errors.name}>
                  <input id="m-name" type="text" placeholder="Ahmed Al-Rashidi" value={form.name} onChange={e => u('name', e.target.value)} className={errors.name ? 'inp-err' : ''} />
                </Field>
                <Field id="m-email" label="Email Address" error={errors.email}>
                  <input id="m-email" type="email" placeholder="you@institution.com" value={form.email} onChange={e => u('email', e.target.value)} className={errors.email ? 'inp-err' : ''} />
                </Field>
              </div>
              <Field id="m-org" label="Organization" error={errors.org}>
                <input id="m-org" type="text" placeholder="Your Institution or Company" value={form.org} onChange={e => u('org', e.target.value)} className={errors.org ? 'inp-err' : ''} />
              </Field>
              <Field id="m-div" label="Service of Interest" error={errors.division}>
                <div className="modal-divs">
                  {divs.map(d => (
                    <button
                      key={d}
                      id={`mdiv-${d.toLowerCase().replace(/ /g, '-')}`}
                      type="button"
                      className={`modal-div-btn${form.division === d ? ' active' : ''}`}
                      onClick={() => { u('division', d); setErrors(p => ({...p, division: ''})) }}
                    >{d}</button>
                  ))}
                </div>
                {errors.division && <span className="field-err">{errors.division}</span>}
              </Field>
              <Field id="m-msg" label="Message (Optional)">
                <textarea id="m-msg" rows={4} placeholder="Describe your institution's needs..." value={form.message} onChange={e => u('message', e.target.value)} />
              </Field>
              <button id="modal-submit-btn" type="submit" className="btn btn-purple modal-submit" disabled={loading}>
                {loading ? <span className="nl-spin" style={{ width: 18, height: 18 }} /> : 'Submit Consultation Request →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div className="modal-field">
      <label className="modal-lbl" htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field-err">{error}</span>}
    </div>
  )
}
