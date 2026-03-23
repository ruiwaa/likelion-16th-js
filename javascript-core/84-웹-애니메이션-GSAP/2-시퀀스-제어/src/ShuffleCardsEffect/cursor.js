const CURSOR_SIZE = 8

function initCursor() {
  const { body } = document

  const cursor = document.createElement('div')
  cursor.dataset.customCursor = 'true'
  cursor.style.setProperty('--size', `${CURSOR_SIZE}px`)
  body.appendChild(cursor)

  globalThis.addEventListener('mousemove', handleMouseMove)

  function handleMouseMove(e) {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.05,
      ease: 'power1.out',
    })
  }

  function createRipple(e) {
    const ripple = document.createElement('div')
    ripple.dataset.cursorRipple = 'true'
    body.appendChild(ripple)

    gsap.set(ripple, {
      left: e.clientX,
      top: e.clientY,
      width: 0,
      height: 0,
      opacity: 1,
    })

    gsap.to(ripple, {
      width: 200,
      height: 200,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => ripple.remove(),
    })
  }

  return createRipple
}

export default initCursor