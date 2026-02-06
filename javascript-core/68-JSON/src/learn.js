import './styles/main.css'

(() => {
  const macbookPro = {
    operatingSystem: 'macOS Sequoia 15.5(24F74)',
    processor: '2.4GHz 8core Intel Core i9',
    memory: 64,
  }

  // JS → JSON (서버에 보내기 전에 변환)
  // const jsonString = JSON.stringify(macbookPro, ['processor', 'memory'])
  const jsonString = JSON.stringify(macbookPro, null, 2)

  const output = document.querySelector('.output-container')
  output.textContent = jsonString


  // JSON → JS (서버에서 가져온 후 변환)
  const parsedMacbookPro = JSON.parse(jsonString)
  console.log(parsedMacbookPro)
}) //()

// --------------------------------------------------------------------------
// 실습: JSON 파싱 및 데이터 정리 (Data Massaging)
// --------------------------------------------------------------------------

;(() => {
  
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.github.com/users/yamoo9/repos')

  // 서버에 보낼 데이터
  const data = {
    message: '배고파요!'
  }

  // 요청할 때 보낼 데이터(js 객체 -> json 문자열화)
  // xhr.send(JSON.stringify(data))
  xhr.send(null)

  // 응답 받은 결과(json 문자열 -> js 객체화)
  xhr.addEventListener('readystatechange', (e) => {
    const { response } = e.currentTarget
    // console.log(response, typeof response)
    // json string -> js object
    const repos = JSON.parse(response)
    // 실제 필요한 정보만 데이터 정리(massage)
    const massagedRepos = repos.map(({ name, visibility, private: priv, url }) => {
      return {
        name,
        visibility,
        private: priv,
        url,
      }
    })

    console.log(massagedRepos)
  })

})()







// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - JSON은 "JavaScript Object Notation"의 약자로 데이터 전송을 위한 문자열 포맷입니다.
// - JSON.parse()는 문자열을 객체로 변환하며 통신 응답 처리의 필수 단계입니다.
// - JSON.stringify()는 객체를 문자열로 변환하며 서버로 데이터를 보낼 때 주로 사용합니다.
// - 데이터 정리(Data Massaging)는 원본 데이터에서 불필요한 정보를 걷어내고 
//   프론트엔드 로직에 최적화된 구조로 재가공하는 과정을 말합니다.
// --------------------------------------------------------------------------