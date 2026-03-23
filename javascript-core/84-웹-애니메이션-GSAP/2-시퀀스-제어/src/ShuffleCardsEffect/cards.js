const CARD_INFO = {
  count: 20,
  colors: ['#0F172A', '#1f2937', '#db2777'],
  brands: ['SAMSUNG', 'HYUNDAI', 'VISA', 'MASTER', 'AMEX'],
}

/**
 * 카드 초기화 함수
 * @param {Object} options - 카드 초기화 옵션
 * @param {number} [options.count] - 생성할 카드 개수
 * @param {string[]} [options.colors] - 카드 배경 색상 배열
 * @param {string[]} [options.brands] - 카드 브랜드 이름 배열
 * @returns {NodeListOf<Element>} 생성된 모든 카드 요소
 * @throws {Error} [data-card-stage] 요소가 없을 경우 에러 발생
 */
export default function initCards(options = {}) {

  const { count, colors, brands } = { ...CARD_INFO, ...options }

  const stage = document.querySelector('[data-card-stage]')
  if (!stage) throw new Error('문서에 [data-card-stage] 요소가 없습니다.')

  for (let i = 0; i < count; i++) {
    const card = document.createElement('div')
    const cardLabel = `크레딧 카드 ${i+1}`
    
    card.dataset.card = cardLabel
    card.setAttribute('aria-label', cardLabel)
    card.style.setProperty('background', `linear-gradient(135deg, ${colors[i % colors.length]}, #000)`)
    
    const brandName = brands[Math.floor(Math.random() * brands.length)]
    
    card.innerHTML = `
      <div style="font-size: 1.2rem;">${brandName}</div>
      <div style="margin-top:40px;opacity:0.5;font-size:0.6rem;">PREMIUM</div>
    `
    stage.appendChild(card)
  }

  const allCards = document.querySelectorAll('[data-card]')

  gsap.set(allCards, {
    x: 0,
    y: 0,
    z: (i) => i * 0.25,
  })

  return allCards
}
