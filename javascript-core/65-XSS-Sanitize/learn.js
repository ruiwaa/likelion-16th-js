// --------------------------------------------------------------------------
// 실습: XSS(Cross-Site Scripting) 공격 방어
// --------------------------------------------------------------------------

const xssForm = document.querySelector('#xss-form')
const inputField = document.querySelector('#user-input')

// 출력 대상 요소들
const outputDanger = document.querySelector('#output-danger')
const outputSafe = document.querySelector('#output-safe')
const outputSanitize = document.querySelector('#output-sanitize')
const linkArea = document.querySelector('#link-area')

xssForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const value = inputField.value.trim()
  if (!value) return

  // [실습 1] innerHTML 사용 (⚠️ 매우 위험)
  // 입력된 값을 HTML 태그로 해석하여 그대로 렌더링하도록 작성하세요.
  // 이곳에 코드를 작성하세요
  // outputDanger.innerHTML = value


  // [실습 2] textContent 사용 (✅ 텍스트만 출력)
  // 입력된 값을 단순 문자열로만 취급하여 출력하도록 작성하세요.
  // 이곳에 코드를 작성하세요
  // outputSafe.textContent = value


  // [실습 3] DOMPurify 사용 (✨ 안전하게 살균)
  // DOMPurify.sanitize()를 사용하여 악성 코드를 제거한 뒤 innerHTML로 출력하세요.
  // 이곳에 코드를 작성하세요
  /* global DOMPurify */
  const safeCode = DOMPurify.sanitize(value)
  console.log({ safeCode, dangerCode: value })
  outputDanger.innerHTML = safeCode

  // [실습 4] 안전한 링크 생성 함수 호출
  // 아래에 정의된 createSafeLink 함수를 호출하여 결과를 linkArea에 추가하세요.
  createSafeLink(value)
})


function createDangerLink(url) {
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.textContent = url
  return link
}

function createSafeLink(url) {
  const link = document.createElement('a')

  if (url.startsWith('javascript:')) {
    console.warn('❌ 악성코드!!')
    link.textContent = '악속 코드가 포함되어 링크 생성에 문제가 있습니다.'
    return link
  }

  link.setAttribute('href', DOMPurify.sanitize(url))
  link.textContent = url
  return link
}

// --------------------------------------------------------------------------
// 🛡️ 핵심 방어 원칙 요약
// --------------------------------------------------------------------------
// - HTML 구조가 필요 없다면 textContent를 선택합니다.
// - 부득이하게 HTML을 써야 한다면 검증된 살균 라이브러리를 거칩니다.
// - 사용자가 입력한 URL은 반드시 프로토콜(http, https)을 검증합니다.
// --------------------------------------------------------------------------

;(() => {
  
  const form = document.getElementById('create-link-form')
  const list = document.getElementById('created-link-list')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = form.elements.url.value.trim()
    // const createdLink = createDangerLink(input)
    const createdLink = createSafeLink(input)

    const item = document.createElement('li')
    item.append(createdLink)
    list.append(item)

  })

})()