const emailForm = document.querySelector('.send-email-form')

emailForm.addEventListener('submit', (e) => {
  const form = e.currentTarget // emailForm
  // 브라우저 기본 작동(서버 프로그램으로 입력된 정보 전달, 페이지 이동) 방지
  e.preventDefault()
  
  // 폼을 통해 입력된 사용자의 정보 제어
  console.log('controlthisform')
  
  // 클라이언트 측에서 자바스크립트를 사용해
  // 사용자 입력 정보가 유효하다면?
  const isAllValid = true
  if(isAllValid){
    form.submit()
  }
  
  
  //폼 초기화(native method)
  form.reset()
  
})

// --------------------------------------------------------------------------
// 실습: 폼 제출 제어 (Form Submission Control)
// --------------------------------------------------------------------------
const subscribeForm = document.getElementById('subscribeForm')
const messageBox = document.getElementById('messageBox')

subscribeForm.addEventListener('submit', (e) => {
  // [미션 1] 폼 제출 시 페이지 이동(새로고침)을 막는 코드를 작성하세요.
  // 여기에 코드 작성
  e.preventDefault()

  // [미션 2] 사용자가 입력한 이메일 값을 가져오세요.
  // 여기에 코드 작성
  const inputEmail = document.getElementById('userEmail')
  const {value} = inputEmail.split('@').at(0)
  console.log(`사용자가 입력한 이메일 주소는 "${value}" 입니다.`)
  //console.log(inputEmail.value)

  // [미션 3] 클라이언트 측 처리 결과를 화면의 메시지 박스에 보여주세요.
  //         출력 메시지 템플릿: "{email}님, 구독해주셔서 감사합니다!"
  //         메시지를 화면에 출력한 후, 입력창을 초기화합니다. (힌트: reset)
  // 여기에 코드 작성
const isAllValid = true
if(isAllValid){
  messageBox.textContent = `"${value}님, 구독해주셔서 감사합니다!"`
}
  // 폼 초기화 버튼
  const form = e.currentTarget
  form.reset()
})



// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - label(for)와 input(id)이 연결되어야 접근성이 향상됩니다.
// - name 속성은 서버나 JS에서 데이터를 추출하는 키(Key)가 됩니다.
// - e.preventDefault()는 클라이언트 중심의 현대적 웹 개발에서 필수입니다.
// --------------------------------------------------------------------------