import { useId } from 'react'
import './SpinningBadge.css'

const BADGE_TEXT = 'SHARIAH COMPLIANT : ISLAMIC VIABLE :'

function CenterIcon() {
  return (
    <svg
      className="spinning-badge__icon"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#1668E8" />
      <path
        d="M24 10V38M14 18L34 18M16 30H32"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function SpinningBadge() {
  const pathId = `circle-path-${useId().replace(/:/g, '')}`

  return (
    <div className="spinning-badge" aria-hidden="true">
      <div className="spinning-badge__spin">
        <svg viewBox="0 0 180 180" className="spinning-badge__svg">
          <defs>
            <path
              id={pathId}
              d="M 90,90 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="spinning-badge__text">
            <textPath href={`#${pathId}`} startOffset="0%">
              {BADGE_TEXT}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="spinning-badge__center">
        <CenterIcon />
      </div>
    </div>
  )
}
