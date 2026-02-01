// --------------------------------------------------------------------------
// 실습: 이벤트 리스너 제거 (Event Listener Removal)
// --------------------------------------------------------------------------

// [실습] 기명 함수를 이용한 리스너 등록과 제거
// 1. 실행할 로직을 담은 기명 함수(handleClick)를 별도로 정의하세요.
// 2. 버튼 요소에 해당 함수를 클릭 리스너로 등록하세요.
// 3. removeEventListener를 사용하여 등록된 리스너를 정확히 제거해 보세요.
console.group("removeEventListener() 기본 사용법");

// 이곳에 코드를 작성하세요.
// const buttonGroup = document.querySelector('.js-button-group')
// const addButton = buttonGroup.querySelector('[aria-label*="추가"]'),
//       removeButton = buttonGroup.querySelector('[aria-label*="제거"]')
// console.log(addButton, removeButton)

// 배열을 사용하여 요소 찾기
const buttonGroup = document.querySelector(".js-button-group");
const buttons = Array.from(buttonGroup.children);
const allRemoveButton = buttons.at(0);
const addButton = buttons.at(1);
const logButton = buttons.at(2);
const removeButton = buttons.at(3);
const onceButton = buttons.at(-1);
const logMessage = () => {
  console.log("당신은 방금 로그 버튼을 눌렀습니다. 🫵🏻");
};

// 단 한 번만 작동하는 버튼 이벤트 리스너
onceButton.addEventListener("click", handleOnceClick);

function handleOnceClick() {
  console.log("작동 중 ....");
  // 리스너 내부에 자기 자신을 호출 또는 {once: true} 옵션 사용
  onceButton.removeEventListener("click", handleOnceClick);
}

// 추가된 모든 이벤트 일괄 제거
// 이벤트에 중첩된 형태라면, 핸들러 함수값을
// 각각의 변수로 분리해서 함수 표현식으로 정리해주기

// 1단계: 중첩된 핸들러 함수 값 변수로 분리
const myFn1 = () => {
  console.log("로그 버튼에 클릭 이벤트 리스너 추가");
  logButton.addEventListener("click", logMessage);
};

const myFn2 = () => {
  console.log("로그 버튼에 클릭 이벤트 리스너 제거");
  logButton.removeEventListener("click", logMessage);
};

// 2단계 추가/ 삭제 이벤트 먼저 만들어 주기
addButton.addEventListener("click", myFn1);
removeButton.addEventListener("click", myFn2);

// 3단계 추가/ 삭제 이벤트 리스너 일괄 삭제 이벤트에 연결해주기
allRemoveButton.addEventListener("click", () => {
  // addButton, logButton, removeButton에
  // 연결된(추가된) 이벤트 리스너 모두 제거
  console.log(
    "추가, 로그, 제거 모든 버튼에 연결된(추가된) 이벤트 리스너 일괄 제거",
  );
  addButton.removeEventListener("click", myFn1);
  removeButton.removeEventListener("click", myFn2);
  logButton.removeEventListener("click", logMessage);
});

// 로그 추가/제거 이벤트 만들기
// 로그 버튼을 추가/제거 이벤트에 '중첩'

addButton.addEventListener("click", () => {
  console.log("로그 버튼에 클릭 이벤트 리스너 추가");

  logButton.addEventListener("click", logMessage);
});

removeButton.addEventListener("click", () => {
  console.log("로그 버튼에 클릭 이벤트 리스너 제거");

  logButton.removeEventListener("click", logMessage);
});

console.groupEnd();

// [실습] 익명 함수의 참조 문제 확인
// 1. addEventListener에 익명 화살표 함수를 직접 전달하여 등록하세요.
// 2. 동일한 모양의 익명 함수를 removeEventListener에 전달하여 제거를 시도해 보세요.
// 3. 제거되지 않고 여전히 이벤트가 발생하는 원인을 주석으로 적어보세요.
console.groupCollapsed("익명 함수 참조 문제 확인");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// [실습] 스스로 제거되는 '한 번만 실행' 리스너
// 1. 실행될 때 자기 자신을 제거하는(Self-removal) 함수를 작성하세요.
// 2. 함수 내부에서 e.currentTarget과 removeEventListener를 활용하세요.
// 3. 버튼을 여러 번 클릭해도 콘솔 로그가 단 한 번만 찍히는지 확인하세요.
console.groupCollapsed("리스너 내부에서 자기 자신 제거");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// [실습] { once: true } 옵션 활용
// 1. 별도의 제거 로직 없이 { once: true } 옵션객체를 사용하여 이벤트를 등록하세요.
// 2. 리스너 내부 로직을 작성하고 실행 결과가 위 실습과 동일한지 비교해 보세요.
console.groupCollapsed("{ once: true } 옵션 활용");

// 이곳에 코드를 작성하세요.

console.groupEnd();

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 동일 참조 원칙: 제거할 때는 반드시 추가할 때 사용한 '완전히 동일한 함수'를 전달해야 합니다.
// 2. 익명 함수의 한계: 이름 없는 함수는 참조를 유지할 수 없어 나중에 개별적으로 제거할 수 없습니다.
// 3. 메모리 관리: 불필요한 이벤트는 즉시 제거하여 메모리 누수를 방지하는 것이 고급 개발자의 매너입니다.
// 4. 편리한 옵션: 단순 일회성 이벤트는 직접 제거하는 대신 { once: true }를 쓰는 것이 가장 효율적입니다.
// --------------------------------------------------------------------------
