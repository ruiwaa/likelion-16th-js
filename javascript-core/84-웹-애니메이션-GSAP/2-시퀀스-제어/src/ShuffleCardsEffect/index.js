import initCards from './cards'
import initCursor from './cursor'
import initControls from './controls'
import initShuffleSound from './shuffleSound'
import './style.css'

/**
 * 카드 셔플 기능을 초기화하고 제어하는 함수
 * 
 * @param {HTMLElement} mountElement 마운트할 요소
 * @param {Object} cardOptions 카드 옵션 
 * @param {number} [cardOptions.count] 카드 개수 (기본값: 20장)
 * @param {string[]} [cardOptions.colors] 카드 컬러 배열 (기본값: '#0F172A' | '#1f2937' | '#db2777')
 * @param {string[]} [cardOptions.brands] 카드 브랜드 배열 (기본값: 'SAMSUNG' | 'HYUNDAI' | 'VISA' | 'MASTER' | 'AMEX')
 * @returns {void}
 */
export function init(mountElement, cardOptions = {})  {
  if (!mountElement && mountElement.nodeType !== document.ELEMENT_NODE) {
    throw new Error('문서에 마운트할 요소가 없습니다.')
  }
  
  mountElement.insertAdjacentHTML('beforebegin', '<div data-noise-overlay></div>')
  mountElement.insertAdjacentHTML('afterbegin', '<div data-card-stage></div>')
  
  
  const playSound = initShuffleSound()
  const allCards = initCards(cardOptions)
  const createRipple = initCursor()

  initControls(mountElement)

  const spreadButton = mountElement.querySelector('[data-spread-action]')
  const gatherButton = mountElement.querySelector('[data-gather-action]')

  spreadButton.addEventListener('click', handleMultipleSpread)
  gatherButton.addEventListener('click', handleGather)
  document.addEventListener('click', handleSpread)

  /**
   * 클릭 이벤트 발생 시 카드를 퍼트리는 핸들러
   * @param {MouseEvent} e 클릭 이벤트 객체
   */
  function handleSpread(e) {
    spreadCards(e)
  }

  /**
   * 여러 번 카드를 퍼트리는 효과를 주는 핸들러
   * @param {MouseEvent} e 클릭 이벤트 객체
   */
  function handleMultipleSpread(e) {
    e.stopPropagation()
    createRipple(e)
    const delays = [0, 150, 300, 450]
    delays.forEach((delay) => setTimeout(() => spreadCards(), delay))
  }

  /**
   * 카드를 모으는 핸들러
   * @param {MouseEvent} e 클릭 이벤트 객체
   */
  function handleGather(e) {
    e.stopPropagation()
    createRipple(e)
    gatherCards()
  }

  /**
   * 카드를 무작위로 퍼트리는 함수
   * @param {MouseEvent} [e] 클릭 이벤트 객체 (선택적)
   */
  function spreadCards(e) {
    if (e) createRipple(e)
    playSound()

    gsap.to(allCards, {
      x: () => (Math.random() - 0.5) * globalThis.innerWidth * 1.8,
      y: () => (Math.random() - 0.5) * globalThis.innerHeight * 1.6,
      z: () => (Math.random() - 0.5) * 2000,
      rotationX: () => Math.random() * 720,
      rotationY: () => Math.random() * 720,
      duration: 0.8,
      ease: 'expo.out',
      scale: (i, target) => (gsap.getProperty(target, 'z') < 0 ? 0.5 : 1.3),
      filter: (i, target) => gsap.getProperty(target, 'z') < 0 ? 'blur(8px)' : 'blur(0px)',
    })
  }

  /**
   * 퍼져있는 카드를 중앙으로 모으는 함수
   */
  function gatherCards() {
    setTimeout(playSound, 300)

    gsap.to(allCards, {
      x: 0,
      y: 0,
      z: (i) => i * 0.5,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'elastic.out(1, 0.8)',
      stagger: {
        amount: 0.5,
        from: 'center',
      },
    })
  }
}

export default { init }
