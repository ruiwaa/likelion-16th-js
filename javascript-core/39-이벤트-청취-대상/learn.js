// --------------------------------------------------------------------------
// 실습: 이벤트 핸들러 내 요소 참조 (Event Target)
// --------------------------------------------------------------------------

// [실습] this 키워드를 사용한 요소 참조
// 1. 일반 함수(function)를 이벤트 리스너 콜백으로 등록하세요.
// 2. 함수 내부에서 this가 가리키는 대상의 배경색을 변경하는 로직을 작성하세요.
// 3. 주의: 화살표 함수를 사용할 때와의 차이점을 콘솔로 확인해 보세요.
console.group("this 키워드 활용 실습");

// 이곳에 코드를 작성하세요.
const jsToggleButton = document.querySelector(".js-button-toggle");
jsToggleButton.addEventListener("click", handleChangeBGColor);

// 이벤트 핸들러 함수 분리
function handleChangeBGColor() {
  console.log("this =", this); // HTMLButtonElement: <button>
  // console.log(this === jsToggleButton) // true

  // 시각 디자인
  this.style.setProperty("background-color", "#c3a6ff");
  // [접근성 고려] 프레스(press) 상태 전환
  if (this.getAttribute("aria-pressed") === "false") {
    this.setAttribute("aria-pressed", "true");
  } else {
    this.setAttribute("aria-pressed", "false");
  }
}

jsToggleButton.addEventListener("mouseenter", (e) => {
  // 이벤트 객체(Event Object)
  // addEventListener()에 전달된 콜백 함수에 전달됩니다.
  // (e) => {}
  // console.log(e) // PointerEvent {} 또는 MouseEvent{}

  //화살표 콜백 함수를 사용한다면? e.currenTarget을 사용하라
  console.log(e.currentTarget);

  // this 키워드
  // 화살표 함수 표현식 내부
  // 그러면 화살표 함수 식 안에서 this는? 무엇을 가리키는가?
  // console.log(this) // this !== jsToggleButton(윈도우 객체가 나옴)
  // 이벤트 안의 함수에서 this 사용하면, 이벤트가 연결된 대상을 가리킴
  // 이벤트 콜백함수를 화살표 함수식으로 사용한 후 this키워드를 쓸 경우에는,
  //이벤트가 연결된 대상이 아닌 윈도우 객체이다!!
  //결론: 이벤트를 생성할 때, this키워드를 사용할 경우 화살표 함수식과 만나게 하지 마라!❌
});

// 요약!!
// 조건: addEventListener() 메서드의 리스너 함수를 화살표 함수 표현식으로 작성한 경우
// 상황: ⚠️ this는 이벤트가 발생한 대상이 아니게 됩니다.
//      ✅ 이벤트 객체의 currentTarget 속성은 항상 이벤트가 발생한 대상을 가리킵니다.

console.groupEnd();

// [실습] e.currentTarget을 사용한 요소 참조
// 1. 이벤트 리스너 콜백의 첫 번째 인자로 이벤트 객체(e)를 받으세요.
// 2. e.currentTarget 속성을 사용하여 이벤트를 수신한 요소에 접근하세요.
// 3. 변수 이름(button, someButton 등)에 상관없이 동작하도록 로직을 작성하세요.
console.groupCollapsed("e.currentTarget 활용 실습");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// [실습] 화살표 함수에서의 요소 참조 (방어적 프로그래밍)
// 1. 화살표 함수 내부에서 this를 사용했을 때 어떤 결과가 나오는지 테스z트하세요.
// 2. 화살표 함수를 사용하면서도 요소를 안전하게 참조하기 위해 e.currentTarget을 활용하세요.
console.groupCollapsed("화살표 함수와 요소 참조");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// [실습] 변수 이름 독립성 테스트 (Refactoring)
// 1. 외부 함수를 선언하고 이를 여러 버튼의 이벤트 리스너로 등록하세요.
// 2. 함수 내부에서 특정 변수명이 아닌 '참조 키워드'를 사용하여 재사용 가능한 코드를 만드세요.
console.groupCollapsed("재사용 가능한 핸들러 작성");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. this (일반 함수): 이벤트를 수신(청취)한 요소 그 자체를 가리킵니다.
// 2. e.currentTarget: 이벤트 리스너가 등록된 요소를 명확히 참조하며 가장 권장되는 방법입니다.
// 3. 화살표 함수 주의: 화살표 함수 내부의 this는 상위 스코프(대개 Window)를 가리킵니다.
//    - 화살표 함수를 즐겨 쓰신다면 반드시 e.currentTarget을 사용해 요소를 참조하세요!
// 4. 독립성: 변수 이름에 의존하지 않는 코드를 짜야 리팩토링과 유지보수가 쉬워집니다.
// --------------------------------------------------------------------------
