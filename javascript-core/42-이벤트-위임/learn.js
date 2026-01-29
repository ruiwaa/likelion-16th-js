// --------------------------------------------------------------------------
// 실습: 이벤트 위임 (Event Delegation)
// --------------------------------------------------------------------------

// [실습] 기본적인 이벤트 위임 구현
// 1. 상위 요소인 .link-list에 하나의 클릭 이벤트 리스너만 등록하세요.
// 2. e.target 속성을 사용하여 실제 클릭된 요소가 무엇인지 콘솔에 찍어보세요.
console.groupCollapsed('이벤트 위임 기본 동작 확인')

// 이곳에 코드를 작성하세요.

// 이벤트 위임을 사용하지 않는다면??
// 5번 순환함(이벤트 위임 적용 안함) -> 비효율적
// for (const link of links) {
//   link.addEventListener('click', (event) => {
//     event.preventDefault()
//     const clickedLink = event.currentTarget
//     console.log(clickedLink)
//   })
// }


// 이벤트 위임이 필요한 이유
//사용자가 버튼을 눌렀는때 이벤트 버블링현상때문에 여러개의 대상을 불러오는데, 
// 이벤트 위임을 통해서 사용자가 누른 대상만 가져와서 최적화를 하는 과정이 필요

// 이벤트 위임(버블링)을 사용할 때
const list = document.querySelector('.link-list')
list.addEventListener('click', (e) =>{

  //브라우저 기본 작동 방지 -> ul, li는 브라우저 작동이 없음 (a만 해당)
 // e.preventDefault()


  // 현재 이벤트 리스너가 추가된 대상 -> e.currentTarget
  const eventCurrentTarget = e.currentTarget
  console.log('현재 이벤트 리스너가 추가된 대상', 'e.currentTarget =', eventCurrentTarget) // <ul>
  
  
  // 이벤트 발생한 대상(요소)
  // 이벤트 타켓: 이벤트 전파 중인 대상에서의 타켓을 가리키는 것
  const eventTarget = e.target
  console.log('이벤트 발생한 대상(요소)', 'e.target =', eventTarget) // <ul> or <li> or <a>
  
})


console.groupEnd()


// [실습] matches()를 활용한 타겟 검사
// 1. 클릭된 요소가 정확히 <a> 태그일 때만 동작하도록 조건문을 작성하세요.
// 2. matches('a')를 활용하여 조건이 충족될 때 e.preventDefault()를 실행하고 로그를 남기세요.
console.group('matches()를 사용한 타겟 매칭')

// 이곳에 코드를 작성하세요.
//상위 요소 내부의 모든 하위 요소에서 발생하는 이벤트를 감지

list.addEventListener('click', handleMatchesDemo)

// 이벤트 발생 대상 매칭 검사
function handleMatchesDemo(e) {
  // 이벤트 발생 대상
  const eventTarget = e.target // Element

  // 이벤트가 발생한 대상의 노드 이름 출력
  console.log(eventTarget.nodeName, eventTarget.localName) // nodeName = 대문자, localName = 소문자

  // 이벤트 발생 대상이 a[href] 요소인 경우 매칭 검사
  // Element.matches(selectors)
  const isLinkElement = eventTarget.matches('a[href]')

  // 만약 a[href] 요소가 맞다면?
  if (isLinkElement) {
    console.log('이벤트가 발생된 대상은 <a href> 요소입니다.')
    // 브라우저 기본 작동 방지
    e.preventDefault()
  } else {
    console.log('이벤트가 발생된 대상은 <a href> 요소가 아닙니다.')
  }

  

}

console.groupEnd()


// [실습] closest()를 활용한 중첩 요소 처리
// 1. <a> 태그 내부에 <span>이나 <svg>가 있는 경우를 대비하세요.
// 2. e.target.closest('a')를 사용하여 클릭된 지점에서 가장 가까운 <a> 요소를 찾으세요.
// 3. 찾은 대상이 존재할 때만 특정 로직이 실행되도록 방어적으로 작성하세요.
// 처음에 a요소에만 기본 브라우저 작동을 막아놨는데, 
// 그 안에 다른 요소들이 포함되는 경우에는 안에 요소까지 중지시키고 싶다면
// e.target.closest()메서드를 사용한다.
// css 방법도 가능
console.groupCollapsed('closest()를 사용한 중첩 구조 해결')

// 이곳에 코드를 작성하세요.
// a요소 안의 아이콘과 span 요소의 브라우저 작동을 막기 위한 방법
// 1. css 해결법: pointer-events: none 
// 2. 자바스크립트 해결법: closest() 메서드 사용 

list.addEventListener('click', handleClosestDemo)
function handleClosestDemo(e) {
  // 나를 포함해 가장 가까운 조상 요소 찾기
  const aLinkElement = e.target.closest('a[href]') // <a> or null
  if (aLinkElement) {
    console.log('이벤트가 발생된 대상은 <a href> 요소 또는 내부의 하위 요소입니다.')
    e.preventDefault()
  }
}

console.groupEnd()


// [실습] 동적 요소 생성 및 위임 확인 (응용)
// 1. 자바스크립트로 새로운 <li>와 <a>를 .link-list에 추가해 보세요.
// 2. 새로 추가된 요소에도 이벤트 리스너를 따로 등록하지 않고 위임된 이벤트가 잘 작동하는지 확인하세요.
console.groupCollapsed('동적 요소와 이벤트 위임의 이점')

// 이곳에 코드를 작성하세요.

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 이벤트 위임: 버블링을 이용해 부모 요소에서 자식들의 이벤트를 한꺼번에 관리하는 기법입니다.
// 2. 성능 최적화: 수많은 요소에 리스너를 거는 대신 단 하나만 사용하여 메모리를 아낍니다.
// 3. 동적 대응: 나중에 추가되는 자식 요소들에게도 이벤트 리스너가 자동으로 적용됩니다.
// 4. 중첩 처리: <a> 내부의 자식을 클릭해도 closest('a')를 쓰면 부모 링크를 정확히 낚아챌 수 있습니다.
// 5. CSS 해결법: 자식 요소에 pointer-events: none을 주면 자식을 투명하게 만들어 클릭을 통과시킵니다.
// --------------------------------------------------------------------------