// 버튼 클릭으로 메뉴 토글

// 버튼 요소 변수
// const button = document.querySelector('.button')

// // 클릭 되었을 떄의 클래스 이름 추가
// const clickedClassName = 'is-clicked'

// // 버튼 클릭 시 나타나는 메뉴 변수 
// const memuIsClicked = document.querySelector('.nav')

//  버튼 메뉴 토글 
//  버튼을 클릭했을 때(이벤트), 메뉴가 토글(핸들러) 실행
//  메뉴 토글 실행 함수 만들기
// const handleClick= (e) => {
//   button.classList.toggle(clickedClassName)
//   memuIsClicked.classList.toggle(clickedClassName)
// }

//  button.addEventListener('click', handleClick)


// 선생님이 짠 코드
// html <head>>내부에서 <script>가 호출되면
// html 파서가 문서의 객체를 읽지 못하고, 자바스크립트 문서부터 
// 읽기 때문에 null 값이 나옴

//* 해결 방법 */
//html 문서 객체화가 되면 자바스크립트를 실행하는 이벤트 생성 (defer의 속성을 대체)
globalThis.addEventListener('DOMContentLoaded',() => {
 const siteContainer = document.querySelector('.site-container') 
 const openButton = siteContainer.querySelector('[data-id= "open-button"]')

 // 프로그램 상수 
 const OFFCANVAS_ACTIVE_CLASSNAME = 'off-canvas-is-open'
 // 문서에서 찾은 객체 기억
 const body = document.body
 
 
 
 // 메뉴 열기 버튼을 사용자가 클릭(마우스, 키보드)하면
 openButton.addEventListener('click',() => {
const hasClassName = body.classList.contains(OFFCANVAS_ACTIVE_CLASSNAME)
  // 이벤트가 감지되면 이벤트리스너 실행됨
  // 웹 API 에 의해 큐로 옮겨져 대기 중인 콜백함수가 이벤트 루프에 의해 콜 스택에 옮겨짐
  // 콜 스택에서 실행된 콜백 함수는 결과를 반환하고 메모리 상에서 삭제된다.
  console.log('메뉴 열기')

  // body 요소에 활성 클레스 제어
  // body.classList.add(OFFCANVAS_ACTIVE_CLASSNAME)

  
  // 1) if문으로 제어
// if(hasClassName){
 //   body.classList.remove(OFFCANVAS_ACTIVE_CLASSNAME)
  // }
  // else{
  //   body.classList.add(OFFCANVAS_ACTIVE_CLASSNAME)
  // }
      
// 2) 토글 메서드로 제어
body.classList.toggle(OFFCANVAS_ACTIVE_CLASSNAME)
    })
    

})





