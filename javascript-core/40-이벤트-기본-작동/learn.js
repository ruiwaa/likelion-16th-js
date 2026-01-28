// --------------------------------------------------------------------------
// 실습: 브라우저 기본 작동 방지 (Prevent Default)
// --------------------------------------------------------------------------

// [실습] 링크 이동 방지
// 1. <a> 요소를 선택하고 클릭 이벤트를 연결하세요.
// 2. e.preventDefault()를 호출하여 href에 설정된 주소로 이동하지 않도록 작성하세요.
// 3. 콘솔에 "링크 이동이 방지되었습니다."라고 출력하세요.
console.group("링크 기본 동작 방지 실습");

// 이곳에 코드를 작성하세요.
// 리디렉션 예시
// 넷플릭스에 로그인을 안한 상태라면 넷플릭스 들어가기전에 로그인 페이지가 나오는 것
const googleLink = document.querySelector('[href*="google"]');
googleLink.addEventListener("click", (e) => {
  //e.preventDefault();
});

googleLink.addEventListener("click", (e) => {
  if (e.defaultPrevented) {
    console.log("브라우저 기본 작동 방지");
  } else {
    console.log("브라우저 기본 작동 실행");
  }
});

console.groupEnd();

// [실습] 폼 제출 및 페이지 리디렉션 방지
// 1. <form> 요소의 submit 이벤트를 가로채세요.
// 2. 페이지가 새로고침되거나 action 주소로 리디렉션되지 않도록 방지하세요.
// 3. e.defaultPrevented 속성 값을 콘솔로 확인하는 로직을 작성하세요.
console.groupCollapsed("폼 제출 기본 동작 방지 실습");

// 이곳에 코드를 작성하세요.
const registerForm = document.querySelector('.js-register-form')

registerForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  console.log('폼에 전송하지 않습니다.(브라우저 기본 작동 방지')
})
console.groupEnd();

// [실습] 체크박스 상태 변경 방지 (응용)
// 1. <input type="checkbox"> 요소를 선택하고 클릭 이벤트를 연결하세요.
// 2. 특정 조건(예: confirm 확인)에 따라 체크 상태가 변하지 않도록 제어하세요.
// 3. 브라우저의 고유 동작이 실행되지 않았음을 사용자에게 알리세요.
console.groupCollapsed("체크박스 상태 변경 제어 실습");

// 이곳에 코드를 작성하세요.
const checkbox = document.querySelector(
  '.prevent-default-demo-checkbox [type="checkbox"]',
);

checkbox.addEventListener("change", (e) => {
  // 사용자가 행한 이벤트 타입은?
  console.log(e.type); // 'change'

  // 브라우저 기본 작동 방지 여부 (불리언 값)
  console.log("브라우저 기본 작동 방지 상태:", e.defaultPrevented);

  const checkboxInput = e.currentTarget;
  // 사용자가 체크박스의 체크 상태를 변경(change)한 후 값 읽기 = change
  console.log(checkboxInput.checked);
});

checkbox.addEventListener("click", (e) => {
  // 사용자가 행한 이벤트 타입은?
  console.log(e.type); // 'click'
  // 브라우저 기본 작동 방지한다면?
  e.preventDefault();
});

console.groupEnd();

// [실습] 방어적 프로그래밍과 기본 작동 확인
// 1. 이벤트 리스너 내부에서 e.preventDefault()를 실행한 후,
// 2. 실제 브라우저가 해당 이벤트를 '취소 가능한 상태'인지 e.cancelable 속성으로 확인하세요.
console.groupCollapsed("이벤트 취소 가능 여부 확인");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. e.preventDefault(): 브라우저가 가진 고유의 동작(이동, 새로고침 등)을 중단시킵니다.
// 2. 리디렉션 방지: 특히 폼 제출(submit) 시 데이터만 처리하고 페이지를 유지할 때 필수입니다.
// 3. 상태 확인: e.defaultPrevented가 true라면, 기본 동작이 이미 차단되었음을 의미합니다.
// 4. 주의사항: 모든 이벤트가 취소 가능한 것은 아닙니다. e.cancelable이 true인 경우에만 작동합니다.
// --------------------------------------------------------------------------
