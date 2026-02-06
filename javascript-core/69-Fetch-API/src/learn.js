// --------------------------------------------------------------------------
// 실습: Fetch API를 이용한 비동기 데이터 처리
// --------------------------------------------------------------------------
console.log('Fetch API 사용법')

const ENDPOINT ='http://api.github.com/users/ruiwaa'
const responseUser = fetch(ENDPOINT)


;(() => {
  //console.log(responseUser) //fetch () 함수의 실행 결과 promise 객체
  // promise 상태 pendding -> fulfilled 로 성취 이행됨
  // promise 객체의 메서드(.then(), /catch(), .fianlly())
  responseUser.then((response) => {
    //console.log(response)
    //const textData = response.text()
    const jsonData = response.json()
    return jsonData // 비동기 처리 후 응답 반환(promise)
  
  })
  .then((jsonData)=>{
    console.log(jsonData)//비동기 처리된 결과 확인
    
  })

})//()

;(() => {
  
  // 서버와 비동기 통신해서 응답받은 결과를 화면에 출력하고 싶다.
  // 데이터를 제공하는 서버 URL: https://api.github.com/users/yamoo9
  fetch('https://api.github.com/users/yamoo9')
    .then((response) => response.json()) // JSON 변환 후 반환 (비동기 처리)
    .then((data) => console.log(data)) // 먼저 진행된 비동기 작업 끝나면 처리된 데이터를 콘솔 출력

})//()

;(() => {
fetch(ENDPOINT)
//서버로부터 데이터 응답
//응답받은 데이터를 json()메서드로 객체화 (비동기 처리)
.then((res) => res.json())
//객체화된 사용자 데이터에서 필요한 것만 추출(구조 분해 할당)
.then(({name, bio}) => {
// 문서 객체 접근 및 참조
const prose = document.querySelector('.prose')
prose.querySelector('h1').textContent = name
prose.querySelector('p').textContent = bio
})
})//()


// GitHub 사용자의 저장소 정보 화면에 표시 (데이터 요청 → UI 업데이트)
;(() => {
  const controlGroup = document.querySelector('.control-group')
  const [input, button] = controlGroup.children // HTMLCollection

  button.addEventListener('click', () => {
    const username = input.value.trim()
    if (!username) return

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        // 데이터 마사지(정리)
        const massagedData = data.map(({ name, visibility, url }) => {
          return { name, visibility, url }
        })

        // 리스트 렌더링 함수(기능) 실행
        renderList(massagedData)
      })
  })

  // 화면에 리스트 렌더링(그림 그리기)
  function renderList(data) {
   const repoList = document.querySelector('.repo-list')
    const fragment = new DocumentFragment()
    
    const renderedListFragment = data.reduce((fragment, currentItem) => {
      const {name, url, visibility} = currentItem
      const item = document.createElement('li')
      const link = document.createElement('a')
      
      link.setAttribute('href', url)
      link.dataset.visibility = visibility ? 'public' : 'private'
      link.textContent = name
      item.append(link)
      fragment.append(item)
      return fragment
    }, fragment)

  repoList.append(renderedListFragment)
  }
})()

// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - fetch()는 호출 즉시 서버에 요청을 보내며 Promise를 반환합니다
// - response.json()은 읽기 가능한 스트림을 객체로 변환하며 이 역시 Promise입니다
// - .then() 체이닝을 통해 데이터 변환과 화면 렌더링 단계를 깔끔하게 분리할 수 있습니다
// - 데이터 정리(Massaging)를 통해 UI에 필요한 속성만 골라내어 코드를 간결하게 유지합니다
// --------------------------------------------------------------------------