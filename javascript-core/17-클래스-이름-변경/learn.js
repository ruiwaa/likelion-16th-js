// --------------------------------------------------------------------------
// 실습: 클래스 이름을 이용한 스타일 조작 (classList API)
// --------------------------------------------------------------------------
// * 지팡이(JavaScript)로 직접 색칠하기보다 옷(CSS Class)을 갈아입히는 것이 효율적입니다.
// * add / remove / replace / contains / toggle 주문을 익혀봅시다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 1. 클래스 이름 추가 (add)
// --------------------------------------------------------------------------

// [연습] 'text-primary' 클래스를 추가하세요.
//.prose 요소 찾기
const prose =document.querySelector('.prose')
console.log(prose) // main class  -> HTMLElement


//prose 요소 안에서 h1 요소 찾기
const proseHeading = prose.querySelector('h1')
console.dir(proseHeading)

//element.style     // CSS declaration {item, length, ...}
//element.classList //DOMTokenList {add, remove, replace, contains, toggle}
console.log(proseHeading.classList) 

// 클래스 이름 추가
proseHeading.classList.add('color-gold')

// [연습] 'text-primary' 클래스를 추가하세요.
//proseHeading.classList.add('text-primary')

// [연습] 'text-primary'와 'font-bold' 클래스를 동시에 추가하세요.
proseHeading.classList.add('text-primary','font-bold')

// 설명:
// classList.add()는 기존 클래스를 유지하면서 새로운 클래스를 덧입힙니다.


// --------------------------------------------------------------------------
// 2. 클래스 이름 제거 (remove)
// --------------------------------------------------------------------------

// [연습] 위에서 추가했던 'text-primary' 클래스를 제거하세요.
console.log(proseHeading.classList)
// proseHeading.classList.remove('text-primary')

// [연습] 'text-primary'와 'font-bold' 클래스를 한 번에 제거하세요.
proseHeading.classList.remove('text-primary', 'font-bold')


// 설명:
// remove() 메서드는 해당 클래스가 존재할 때만 삭제하며, 없어도 에러가 발생하지 않습니다.


// --------------------------------------------------------------------------
// 3. 클래스 이름 교체 (replace)
// --------------------------------------------------------------------------


//proseHeading 참조 객체 (HTMLHeadingElement)
// 클래스 이름 속성 값을 교체 가능 (elment.classlist.replace())
proseHeading.classList.replace('color-silver', 'font-bold')

// 실습 HTML 예시: <p class="message is-danger">오류 발생</p>


// [연습] 'is-danger' 클래스를 'is-success' 클래스로 교체하세요.
const messageElement = prose.querySelector('.message')
console.log(messageElement)
const replacement = messageElement.classList.replace('is-danger', 'is-success')
if(replacement){
  console.log('교체 성공!')
  
}else {
  console.warn('교체 실패!')
}
console.log('교체 여부:',replacement)

// 설명:
// remove()와 add()를 각각 실행하는 것보다 훨씬 간결하고 안전하게 스타일을 전환합니다.


// --------------------------------------------------------------------------
// 4. 클래스 포함 여부 확인 (contains)
// --------------------------------------------------------------------------
const targetElement = prose.querySelector('.target')
// console.log(targetElement)

// 검토할 클래스 이름을 기억하는 변수
let checkClassName = 'text-primary'

// target 요소에 text-primary 클래스 값을 가지고 있는 지 확인
const hasTextPrimaryClass = targetElement.classList.contains(checkClassName)

// console.log(hasTextPrimaryClass)
  // 만약 해당 클래스 이름이 있다면
if (hasTextPrimaryClass) {
  // 해당 클래스 이름 제거
  targetElement.classList.remove(checkClassName)
}
// 만약 해당 클래스 이름이 없다면
else {
  // 해당 클래스 이름 추가
  targetElement.classList.add(checkClassName)
}
console.log(hasTextPrimaryClass)



// 설명:
// 결과값으로 true/false를 반환하므로 복잡한 조건부 로직을 짤 때 필수적입니다.


// --------------------------------------------------------------------------
// 5. 클래스 이름 토글 (toggle)
// --------------------------------------------------------------------------

// [연습] target 요소에 'active' 클래스를 토글 처리하세요.

//토글 on -> off, off -> on

// 조건문을 사용할 경우
// classlist.contains, classList.remove , classList.add

let activeClassName = 'active'
const hasActiveClass = targetElement.classList.contains(activeClassName)

// if (hasActiveClass) {
//   targetElement.classList.remove(activeClassName)
// } else {
//   targetElement.classList.add(activeClassName)
// }



// 기본 메서드 이름은 remove
let methodName = 'remove'

// 대상 요소(객체)의 클래스 이름을 제어
// methodName 변수에 설정된 이름(문자열)의 기능 실행
// targetElement.classList[methodName](activeClassName)
// targetElement.classList // DOMTokenList { add, remove, ... }
// DOMTokenList.add()    // 객체.속성
// DOMTokenList['add']() // 객체['속성이름']

// 만약 요소가 활성 클래스 이름을 포함하고 있다면
if (!hasActiveClass) {
  // 메서드 이름을 add로 변경
  methodName = 'add'
}
// 메서드 이름은 가지고 있을 경우 'remove'
// 가지고 있지 않을 경우에는 'add'
targetElement.classList[methodName](activeClassName)

// 편의를 위한 토글 메서드를 사용하는 경우 (껐다 켰다 반복)
//targetElement.classList.toggle(activeClassName) //on
//targetElement.classList.toggle(activeClassName) //off
//targetElement.classList.toggle(activeClassName)
//targetElement.classList.toggle(activeClassName)



// 설명:
// 다크모드 스위치나 아코디언 메뉴처럼 켰다 껐다(On/Off) 하는 UI 구현 시 가장 많이 쓰입니다.


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. add() / remove() : 가장 기본적인 스타일 입히기와 벗기기
// 2. replace(old, new) : 두 동작을 한 줄로 줄여주는 매끄러운 교체 주문
// 3. contains() : 스타일 존재 유무를 파악하여 다음 마법(로직)을 결정
// 4. toggle() : 상태를 반전시키는 만능 스위치 주문
// 5. 마법사(JS)는 명령만 내리고, 실제 디자인은 옷장(CSS)에서 관리합니다.