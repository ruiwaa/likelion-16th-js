// --------------------------------------------------------------------------
// 실습: 고유 식별자(Unique ID) 생성 및 활용
// --------------------------------------------------------------------------
;(() => {
  
  const list = document.querySelector('.web-tech-list')
  const webTeches = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vite', 'Webpack', 'Jest', 'Vitest', 'React', 'Next.js', 'Supabase']

  const listChildrenCode =webTeches.reduce((htmlCode, curWebTech) => {
    const uniqueId = generateUniqueString()
    htmlCode += `<li id="tech-${uniqueId}">${curWebTech}</li>`
    return htmlCode
  }, '')

  list.innerHTML = listChildrenCode

})//()

// DocumentFragment 버전 + append()
;(() => {
  
  const webTeches = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vite', 'Webpack', 'Jest', 'Vitest', 'React', 'Next.js', 'Supabase']
  
  const fragment = new DocumentFragment() // 가상 DOM 컨테이너 (메모리, 매우 가벼움)
  const list = document.querySelector('.web-tech-list')
  
  webTeches.forEach((techName) => {
    const item = document.createElement('li')
    item.textContent = techName
    item.id = `tech-${generateUniqueString()}`
    fragment.append(item) // 가상 DOM 컨테이너 내부 마지막 자식 요소로 삽입 (가벼움)
  })

  // 반복이 끝난 후, fragment 내부에 그려진 모든 li 아이템을 한 번에 list에 삽입 (1번만 그림 : 성능 최적화!)
  list.append(fragment)

})()
/**
 * 36진수를 활용한 고유 문자열 생성 함수
 * @param {number} length - 생성할 문자열 길이
 * @returns {string} - 생성된 고유 ID
 */
function generateUniqueString(length = 7) {
  // 1. Math.random() : 0~1 사이 난수 생성
  // 2. .toString(36) : 0~9, a~z를 사용하는 36진수로 변환
  // 3. .substring(2, 2 + length) : 앞의 '0.'을 자르고 원하는 길이만큼 추출
  
}

const techList = document.querySelector('.web-tech-list')
const techInput = document.getElementById('tech-input')
const addButton = document.querySelector('.button-add')
const idLog = document.getElementById('id-log')

addButton.addEventListener('click', () => {
  const techName = techInput.value.trim()
  
  if (!techName) {
    alert('기술 이름을 입력해 주세요!')
    return
  }

  // 고유 ID 발급 (학습한 36진수 방식 사용)
  // 여기에 코드를 작성합니다
  
  // 요소 생성
  // const li = 여기에 코드를 작성합니다
  
  // 목록에 추가
  // 여기에 코드를 작성합니다
  
  // 로그 출력
  // idLog.textContent = `성공! 신규 발급된 ID: ${uniqueId}`
  
  // 입력창 초기화
  techInput.value = ''
  techInput.focus()
})

// [참고] 최신 표준 브라우저 API 테스트
console.group('표준 UUID 생성 확인')

// crypto 코드 작성

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - 인덱스(Index)는 순서가 바뀌면 이름표도 바뀌어야 해서 관리가 힘들어요.
// - 36진수(.toString(36))는 숫자와 알파벳을 섞어 짧으면서도 강력한 ID를 만듭니다.
// - substring(2)를 쓰는 이유는 소수점 앞의 '0.'을 제거하기 위해서입니다.
// --------------------------------------------------------------------------