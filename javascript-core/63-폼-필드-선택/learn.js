
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
// 실습 2: 피드백 폼
// --------------------------------------------------------------------------
//보내기 버튼을 누르면 사용자가 입력한 이메일, 피드백 내용을 읽어와 화면에 얼럿(alert) 창을 띄웁니다.

;(() => {
  const form = document.getElementById('feedback-form')
  const formControls = form.elements
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const {value:email} = formControls.email
    const {value: textArea} = formControls.feedback
    alert(`이메일: ${email}, 텍스트 내용: ${textArea}`)// 객체여서, 문자열로 변환해줘야함
    

    e.currentTarget.reset()

  })
 


})//()


//[실습 3]
//사용자가 관심있는 프로그래밍 언어를 체크한 후, 선택 완료 버튼을 누르면 체크된 값을 콘솔 패널에 출력
;(() => {
const form = document.getElementById('radio-check-form')
const formControls = form.elements

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  
  const boxes = formControls.lang
  for(const checkedBox of boxes){

    //checked 속성으로 조건문 처리
  if(checkedBox.checked === true){
    console.log(checkedBox.value)
  }

  
}
  
 
})
})()
// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 순서가 중요하다면? -> index
// - 데이터 구조가 중요하다면? -> name
// - 특정 고유 요소가 필요하다면? -> id (대괄호 표기 주의)
// --------------------------------------------------------------------------