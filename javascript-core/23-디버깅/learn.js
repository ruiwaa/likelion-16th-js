// --------------------------------------------------------------------------
// 실습: 개발자의 성장 지표 (Debugging & Mindset)
// --------------------------------------------------------------------------
// * 에러(Error) : 실패가 아닌 '더 나은 코드를 위한 단서'
// * 디버깅(Debugging) : 문제의 원인을 분석하고 해결해 나가는 성장의 과정
// * 초보자 : 오류 상황에 당황하며 자신의 논리 오류를 수용하기 어려워함
// * 전문가 : 오류를 당연한 과정으로 받아들이고 침착하게 단서를 추적함
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 성장 마인드셋 분석 실습
// --------------------------------------------------------------------------

// [퀴즈] 오류가 발생했을 때, 숙련된 개발자의 사고 흐름은 어떻게 될까요?
// 1. 당황하여 코드를 모두 지운다.
// 2. "어디서 잘못됐을까?" 스스로 질문하며 메시지를 읽는다.(정답)
// 3. "분명 맞게 짰는데 왜 안 되지?"라며 운을 탓한다.


// 설명:
// 훌륭한 개발자가 되기 위해 필요한 핵심 역량은 '완벽한 코드 작성'이 아닙니다.
// 오히려 자신의 실수를 빠르게 인정하고, 브라우저가 주는 메시지(단서)를 바탕으로
// 문제를 해결해 나가는 '태도'와 '기술'이 실력을 결정짓습니다.


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 실수는 전문가도 피할 수 없는 프로그래밍의 자연스러운 일부입니다.
// 2. 디버깅은 단순히 버그를 잡는 것이 아니라 논리적 사고를 훈련하는 기회입니다.
// 3. 오류 메시지는 여러분을 공격하는 도구가 아니라 성장을 돕는 나침반입니다.
// 4. "왜 안 되지?"라는 의문보다 "어떻게 작동하고 있지?"라는 분석이 먼저입니다.
// --------------------------------------------------------------------------
// 실습 1
const button = document.querySelector('.button')

button.addEventListener('click', e => {
  console.log('버튼 클릭!')
})

// 실습 2

const saveButton = document.querySelector('#save-btn')

saveButton.addEventListener('click', () => {
  alert('저장되었습니다!')
})
console.log(saveButton)

// 실습 3
const alarmButton = document.querySelector('.alarm-button')

alarmButton.addEventListener('click', handleRing) // 핸들러 함수를 불러와야함, 실행이 아님

function handleRing() {
  window.alert('알림!')
}
console.log(alarmButton)

// 실습 4 클래스명 오타, 이벤트 리스너 이름의 오류
const submitButton = document.querySelector('.submit-btn')

submitButton.addEventListener('click', () => {
  console.log('제출 완료!')
})
console.log(submitButton)

// 실습 5 이벤트 리스너 오타
const closeButton = document.querySelector('.close-btn')
console.log(closeButton)

closeButton.addEventListener('click', () => {
  console.log('닫기 버튼 클릭!')
})


// 실습 6 연산 부분의 오류(타입 변환해야함)
const cart = document.querySelector('[data-id="cart"]')
const price = cart.querySelector('[data-id="price"]').textContent
const quantity = cart.querySelector('[data-id="quantity"]').textContent
const calcButton = cart.querySelector('[data-id="calc-button"]')
const resultDisplay = cart.querySelector('[data-id="total-result"]')

calcButton.addEventListener('click', () => {
  const priceNumber = Number(price.replace(',', ''))
  const quantityNumber = Number(quantity)
  const total = priceNumber * quantityNumber
  resultDisplay.textContent = total.toLocaleString() //반환값에 꼼마를 넣어줄 수 있는 메서드
})



// --------------------------------------------------------------------------
// 실습: 린터(Linter) - 당신의 친절한 코드 교정 파트너
// --------------------------------------------------------------------------
// * 린터 : 코드의 잠재적 버그와 스타일 오류를 잡아주는 실시간 감시자
// * ESLint : 가장 대표적인 JavaScript 린팅 도구
// * 전문가의 태도 : 린터의 경고(빨간 줄)를 귀찮아하지 않고, 품질 향상의 단서로 활용함
// --------------------------------------------------------------------------


// [시나리오 01] 존재하지 않는 변수 사용 (ReferenceError 예방)
// 아래 코드에서 'userName'에 빨간 줄이 뜬다면, 린터가 "선언되지 않았어요!"라고 외치는 중입니다.
function greetUser() {
  // ⚠️ 린터가 'no-undef' 오류를 표시합니다.
  // console.log('안녕하세요, ' + userName + '님!') 
}

// [시나리오 02] 선언만 하고 사용하지 않는 변수 (리소스 정리)
// 'isLoggedIn' 변수 밑에 노란색 또는 빨간색 줄이 있나요? 
// 린터는 "안 쓸 거면 지워서 코드를 가볍게 만드세요"라고 조언합니다.
const isLoggedIn = true 

// [시나리오 03] 전역 변수(Global) 처리법
// 브라우저 환경이 아닌 곳에서 'window'나 'document'를 쓰면 린터가 당황할 수 있습니다.
// 그럴 때 상단에 주석을 달아 안심시켜주세요. (/* global document */)
const title = document.querySelector('h1')


// --------------------------------------------------------------------------
// 린터 지능 향상 실습 (직접 고쳐보기)
// --------------------------------------------------------------------------

// [퀴즈] 아래 코드에서 린터가 지적할 만한 '잠재적 문제'는 무엇일까요?
// (힌트: 오타, 선언되지 않은 변수, 닫히지 않은 괄호 등)

// if (true) {
// 	conosle.log('데이터를 전송합니다.')
// }

// data.forEach(item) => {
//   render(item)
// })


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 린터는 단순한 감시자가 아니라 협업을 위한 '규칙 반장'입니다.
// 2. 빨간 줄은 에러가 나기 전에 미리 막아주는 '방어막' 역할을 합니다.
// 3. ESLint 설정을 통해 팀원 모두가 동일한 스타일의 코드를 쓰게 됩니다.
// 4. "내 코드는 완벽해"라는 생각보다 린터의 피드백을 수용할 때 실력이 늡니다.
// --------------------------------------------------------------------------