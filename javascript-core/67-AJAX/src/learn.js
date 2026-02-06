import './styles/main.css'


// --------------------------------------------------------------------------
// AJAX 비동기 통신 가이드
// --------------------------------------------------------------------------
{
  function callAjax() {
    // 비동기 통신을 하기 위한 객체 생성
    // 정보를 통신하기 위한 객체를 만듦
    const xhr = new XMLHttpRequest()

    // 어떤 방법으로 어디에 요청을 할 것인가?
    // get를 사용(어디로 보낼 것인가??)
    xhr.open('GET', 'https://api.github.com/users/yamoo9/repos')

    // 응답을 받을 이벤트 리스너 추가
    xhr.addEventListener('readystatechange', (e) => {
      // 서버에서 응답이 오면 이벤트 객체를 통해 정보 확인
     const xhr = e.currentTarget

      // 응답된 본문(body), 페이로드(payload)
      // 응답받아 데이터를 가져오는 과정은 fetching 이라고 한다.
     console.log('응답된 결과:\n', xhr.response)
    })

    // 요청
    xhr.send()
  }

  const button = document.querySelector('button.call-ajax')

  button.addEventListener('click', () => {
    console.log('AJAX 호출')
    callAjax()  
  })
}

// --------------------------------------------------------------------------
// 실습: XMLHttpRequest(XHR)를 이용한 AJAX 통신
// --------------------------------------------------------------------------

const usernameInput = document.getElementById('github-username')
const fetchButton = document.querySelector('.button-fetch')
const responseLog = document.getElementById('response-log')

/**
 * GitHub API에 사용자 정보를 요청하는 함수
 * @param {string} username - 조회할 GitHub 계정 이름
 */
function requestGitHubUser(username) {
  
  // 1. XHR 객체 생성
  // 서버와 통신을 담당할 XMLHttpRequest 인스턴스를 생성하세요
  const xhr = new XMLHttpRequest()  
  
  // 2. 응답 이벤트 리스너 설정 (load 이벤트)
  // 서버로부터 응답이 완료되었을 때 실행될 로직을 작성합니다  
  // - 응답 받은 JSON 문자열을 자바스크립트 객체로 변환하세요
  // - 변환된 객체를 콘솔에 출력하여 확인해 보세요
  // - 응답 결과를 화면에 출력하는 로직을 작성하세요
  // - 성공 시 유저 정보를 표시하고 실패 시 에러 메시지를 출력합니다
  // - 보안을 위해 DOMPurify.sanitize() 사용을 권장합니다
  xhr.addEventListener('readystatechange', (e) => {
    const xhr = e.currentTarget
    console.log(
      xhr.status, // 통신 상태 (200 OK)
      xhr.readyState, // 0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE 
      xhr.response, // 응답 데이터
      xhr.responseText, // 응답 데이터 텍스트 포맷
      // JSON으로 변경
    )
  })    

  // 3. 요청 구성 (GET 메서드, API URL)
  // .open() 메서드를 사용해 요청 방식과 목적지 URL을 설정하세요
  // URL: https://api.github.com/users/{username}
  xhr.open('GET', `https://api.github.com/users/${username}`)

  // 4. 요청 전송
  // .send() 메서드를 호출하여 서버에 실제 요청을 전달하세요
  xhr.send(null)
}


// 버튼 클릭 이벤트 연결
fetchButton.addEventListener('click', () => {
  const username = usernameInput.value.trim()
  
  if (!username) {
    alert('사용자 이름을 입력해 주세요!')
    return
  }

  // UI 화면 업데이트
  responseLog.textContent = '데이터 로딩 중...'
  // 데이터 가져오기 (Data Fetching) 요청
  // 클라이언트(사용자의 브라우저)가 GitHub API 서버에 요청
  requestGitHubUser(username)

  // 입력 필드 초기화
  usernameInput.value = ''
})

// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - AJAX는 페이지 새로고침 없이 서버와 통신하여 사용자 경험을 높여줍니다.
// - XMLHttpRequest의 load 이벤트를 통해 응답(Response) 시점을 감지합니다.
// - 서버 응답 데이터(JSON 문자열)는 JSON.parse()를 통해 객체로 변환해 사용합니다.
// - API 사용 시 서버 측의 요청 제한(Rate Limit) 정책을 항상 확인해야 합니다.
// --------------------------------------------------------------------------

/**
1. AJAX란 무엇을 말하나요?
2. 왜 AJAX를 사용할까요?
3. 요청(Request)은 무엇인가요?
4. 응답(Response)은 무엇일까요?
5. 페치(Fetch)란 무엇인가요?
6. 요청 제한이란 무엇을 말하나요?
 */