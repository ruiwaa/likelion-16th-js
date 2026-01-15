// --------------------------------------------------------------------------
// 실습: 브라우저와 대화하는 방법 (Event Handling)
// --------------------------------------------------------------------------
// * 이벤트(Event): 성문 밖에서 발생하는 사건 (클릭, 키 입력 등)
// * 리스너(Listener): 사건을 기다리는 보초병 (addEventListener)
// * 핸들러(Handler): 사건 발생 시 수행하는 보초병의 행동 (함수)
// --------------------------------------------------------------------------

// 1. 대상 정하기 (보초병이 지킬 성문 선택)
const  gateButton = document.querySelector('.clickable')
console.log(gateButton)

// 전역에서 접근 가능하도록 공개 (window에서 접근 가능)
globalThis.gateButton = gateButton
// getEventListeners(gatebutton) 
// 전역 객체 속성으로 만들면 가능하다.
//window.gateButton = gateBUtton
// -> 이렇게 브라우저에서만 확인 가능 (자바스크립트 문서 내에서는 이렇게 작성 불가능 - 오류 발생!)

// 2. 이벤트 리스닝 (보초병 배치 및 귀 기울이기)
gateButton.addEventListener('click',() => {
// 연습: gateButton에 'click' 이벤트 리스너를 추가하고 콘솔에 메시지를 출력하세요.
console.log('🚪 성문을 두드렸어요!') // 이 함수를 실행(핸들러)
})



// --------------------------------------------------------------------------
// 실습: 이벤트로 DOM 조작 (클래스 토글 마법)
// --------------------------------------------------------------------------

// 시나리오: 버튼을 클릭할 때마다 배경색(body)과 버튼색을 반전시킵니다.

const clickedClassName = 'is-clicked'
const body = document.body // HTMLBodyElement

// [연습 1] 조건문을 사용하여 클래스 'is-clicked'를 수동으로 넣고 빼보세요.

// gateButton.addEventListener('click', function() {
//   const hasClickedClassName = gateButton.classList.contains(clickedClassName)
//   if(hasClickedClassName) {
//     gateButton.classList.remove(clickedClassName)
//     body.classList.remove(clickedClassName)
//   } else {
//     gateButton.classList.add(clickedClassName)
//     body.classList.add(clickedClassName)
//   }
// })

// [연습 2] 위 로직을 단축 주문인 toggle()로 한 줄씩 작성해 보세요.
gateButton.addEventListener('click', (e ) => {
  // 이벤트 리스너(이벤트 리스너로 연결된 함수)는 
  // 이벤트 객체를 전달받습니다.
  // 이벤트 리스너로 연결된 함수는 브라우저로부터 이벤트 객체를 전달받는다. 
  console.dir(e)
  gateButton.classList.toggle(clickedClassName)
  body.classList.toggle(clickedClassName)
})

// --------------------------------------------------------------------------
// 실습: 리스너 연결 상태 확인 (브라우저 콘솔용, 웹표준 아님)
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. addEventListener('타입', 핸들러)는 현대 웹 개발의 표준 주문입니다.
// 2. 핸들러 내부에서 classList.toggle()을 사용하면 ON/OFF 상태를 쉽게 만듭니다.
// 3. 레거시 모델(onclick)은 구조와 동작이 섞이므로 실제 프로젝트에서는 피해야 합니다.
// 4. 이벤트 객체(e)는 '누가, 어디서, 어떻게' 사건을 일으켰는지에 대한 보고서입니다.