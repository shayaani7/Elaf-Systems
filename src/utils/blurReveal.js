const STAGGER_MS = 180
const TRIGGER_DELAY_MS = 150

/**
 * Initialize word-by-word blur reveal on a .blur-reveal container.
 * Expects child .word spans (or splits plain text if none exist).
 */
export function initBlurReveal(container) {
  if (!container) return () => {}

  let words = [...container.querySelectorAll('.word')]

  if (!words.length) {
    splitTextIntoWords(container)
    words = [...container.querySelectorAll('.word')]
  }

  words.forEach((word, index) => {
    word.classList.remove('visible')
    word.style.setProperty('--delay', `${index * STAGGER_MS}ms`)
  })

  const trigger = () => {
    words.forEach((word) => word.classList.add('visible'))
  }

  let timer
  if (document.readyState === 'loading') {
    const onReady = () => {
      timer = setTimeout(trigger, TRIGGER_DELAY_MS)
    }
    document.addEventListener('DOMContentLoaded', onReady, { once: true })
    return () => {
      document.removeEventListener('DOMContentLoaded', onReady)
      clearTimeout(timer)
      words.forEach((word) => word.classList.remove('visible'))
    }
  }

  timer = setTimeout(trigger, TRIGGER_DELAY_MS)
  return () => {
    clearTimeout(timer)
    words.forEach((word) => word.classList.remove('visible'))
  }
}

function splitTextIntoWords(container) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
  const textNodes = []

  while (walker.nextNode()) {
    const node = walker.currentNode
    if (node.textContent.trim()) textNodes.push(node)
  }

  textNodes.forEach((node) => {
    const parts = node.textContent.split(/(\s+)/)
    const fragment = document.createDocumentFragment()

    parts.forEach((part) => {
      if (!part) return
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part))
      } else {
        const span = document.createElement('span')
        span.className = 'word'
        span.textContent = part
        fragment.appendChild(span)
      }
    })

    node.parentNode.replaceChild(fragment, node)
  })
}

export function initAllBlurReveals(root = document) {
  root.querySelectorAll('.blur-reveal').forEach(initBlurReveal)
}
