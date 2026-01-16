//Dom content loaded
globalThis.addEventListener('DOMContentLoaded',() => {

  // 버튼 요소 변수
  const button = document.querySelector('.button')
  
  // // 클릭 되었을 떄의 클래스 이름 추가
  const clickedClassName = 'is-clicked'
  
  // // 버튼 클릭 시 나타나는 메뉴 변수 
  // div 요소에 스타일을 적용하려고 했음
  // 문제: 버튼 클릭시 제목과 메뉴 열기 버튼도 이동을 해야 하는데, 버튼만 이동.
  // 해결: 바디 요소에 클래스 이름 속성 추가 
  const memuIsClicked = document.querySelector('body')
  
  //  버튼 메뉴 토글 
  //  버튼을 클릭했을 때(이벤트), 메뉴가 토글(핸들러) 실행
  //  메뉴 토글 실행 함수 만들기
  const handleClick= () => {
  button.classList.toggle(clickedClassName)
  memuIsClicked.classList.toggle('onsite-container')
   }
  
  button.addEventListener('click', handleClick)
})

