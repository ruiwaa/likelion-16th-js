
;(() => {
  const form = document.querySelector('.user-registration-form')
  // HTMLFormElement 객체
  console.dir(form)
  
  // HTMLFormControlsCollection 객체
  console.log(form.elements)
  // 폼 컨트롤 객체에 접근
  // id, name 속성 또는 인덱스(index) 사용 접근 가능
  console.log(form.elements[0]) // 수집된 인덱스로 접근
  console.log(form.elements.userid) // name 속성으로 접근
  console.log(form.elements['user-nickname']) // id 속성으로 접근 (아이디명에 하이픈이 있기때문에, 대괄호 표기법으로 접근해야함)
  
  // 폼 컨트롤 반복 처리
  ;(() => {
    
    // for 문
    for (let i = 0, l = form.elements.length; i<l; ++i) {
      const element = form.elements[i]
      console.log(element.userid)
    }
  })//()
  
  ;(() => {
    
    // for...of 문
    for (const formControl of form.elements) {
      console.log(formControl)
    }
  })//()
  
  ;(() => {
    
    // forEach() 메서드 (배열화)
    Array.from(form.elements).forEach((formControl) => {
      console.log(formControl)
    })
  })()
  
})()

// --------------------------------------------------------------------------
// 실습: 폼 필드 선택하기 (form.elements)
// --------------------------------------------------------------------------
;(() => {
const formElement = document.getElementById('login-form')

formElement.addEventListener('submit',(e) => {
  // 기본 동작 방지
  e.preventDefault()

  // 폼 접근 컨트롤
  const formControls = formElement.elements
  // name 속성으로 아이디, 비밀번호 불러오기
  const {value: idControl} = formControls.userid
  const {value:passwordControl} = formControls.password

  // 콘솔 패널에 출력
  console.log({idControl, passwordControl})

  // 폼 리셋
  const form = e.currentTarget
  form.reset()


})


})()
// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 순서가 중요하다면? -> index
// - 데이터 구조가 중요하다면? -> name
// - 특정 고유 요소가 필요하다면? -> id (대괄호 표기 주의)
// --------------------------------------------------------------------------