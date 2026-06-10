import { Fragment, useEffect, useRef } from 'react'
import { initBlurReveal } from '../utils/blurReveal'

function renderWords(text) {
  return text.split(' ').map((word, i) => (
    <span key={i}>
      {i > 0 && ' '}
      <span className="word">{word}</span>
    </span>
  ))
}

/**
 * Reusable blur-reveal heading/text block.
 * Splits each line into .word spans and triggers stagger on mount.
 */
export default function BlurReveal({
  as: Tag = 'div',
  className = '',
  lines = [],
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return undefined
    return initBlurReveal(ref.current)
  }, [])

  return (
    <Tag ref={ref} className={`blur-reveal${className ? ` ${className}` : ''}`}>
      {lines.length > 0
        ? lines.map((line, lineIdx) => (
            <Fragment key={lineIdx}>
              {lineIdx > 0 && <br />}
              <span className={line.lineClass || ''}>{renderWords(line.text)}</span>
            </Fragment>
          ))
        : children}
    </Tag>
  )
}
