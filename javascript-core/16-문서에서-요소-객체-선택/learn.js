// --------------------------------------------------------------------------
// 실습: DOM 요소 선택 (Selecting Elements)
// --------------------------------------------------------------------------
// * querySelector() : CSS 선택자를 사용하여 가장 먼저 발견된 첫 번째 요소를 반환합니다.
// * document.querySelector() : 전체 문서에서 탐색합니다.
// * element.querySelector() : 특정 요소 내부에서만 탐색합니다.
// --------------------------------------------------------------------------

console.log(document.getElementById('content')) // 왜 null 값이 나올까?
// Element (찾은 경우) 또는 null (못찾은 경우)
// 브라우저에서 하는 일
// * HTML 파서(해석 프로그램) 
//   - *.html 파일 파싱(해석) -> DOM 생성
// * JavaScript 엔진 
//   - *.js 파일 처리 -> DOM에 접근/조작
//   - *.js 파일 처리하는 동안 HTML 파서는 대기 상태가 됨. (동기식: 일을 안하고 대기 중...)
// 해결방법 html <script> 요소를 바디 끝 부분에 옮겨주기
// <html> 요소(객체) 선택
console.log(document.documentElement)
// console.log(document.querySelector('html'))

// <head> 요소(객체) 선택
console.log(document.head)
// console.log(document.querySelector('head'))

// <title> 요소(객체) 선택
// console.log(document.querySelector('title'))

// <meta /> 요소(객체) 선택
// console.log(document.querySelector('meta'))

// <body> 요소(객체) 선택
console.log(document.body)
// console.log(document.querySelector('body'))

//<article> 요소 (객체) 선택
//console.log(document.querySelector('article'))
console.log(document.querySelector('#chapter'))
// --------------------------------------------------------------------------
// document.querySelector - 전체 문서 탐색
// --------------------------------------------------------------------------
// 공통적인 함수 만들기
// const elmentNotExist = function(selector){
//   if(selector === null){
//     console.warn(selector + '선택자로 요소를 찾을 수 없습니다.')
//   }
//   return elmentNotExist
// }

function checkElWarning(element, selector){
  if(element === null){
    console.warn(selector + '선택잘 문서에서 요소를 찾을 수 없습니다.')
  }
}

// 1. ID 선택자를 사용하여 '#chapter' 요소를 선택하고 콘솔에 출력하세요.
const chapterElement = document.querySelector('#chapter')
console.log(chapterElement) //Element 또는 null
// 조건 처리(문서에 요소가 존재하는지 검토)
checkElWarning(chapterElement, '#chapter' )

// 2. 클래스 선택자를 사용하여 '.sr-only' 요소를 선택하고 콘솔에 출력하세요.
// sr-only = screen reader only
const screenReaderOnlyEl = document.querySelector('.sr-only')
checkElWarning(screenReaderOnlyEl, '.sr-only')

// 3. 속성 선택자를 사용하여 title에 'Model'이 포함된([title*="Model"]) 요소를 선택하세요.
const modelElement = document.querySelector('[title*="Model"]')
checkElWarning(modelElement, '[title*="Model"]' )
// 설명:
// querySelector는 CSS와 동일한 선택자 방식을 사용하여 요소를 선택합니다.
// 일치하는 대상이 여러 개여도 '가장 먼저 발견된 첫 번째' 요소만 반환합니다.


// --------------------------------------------------------------------------
// element.querySelector - 특정 범위 내 탐색
// --------------------------------------------------------------------------

// 1. 먼저 부모 요소인 '.musicians'를 찾아 변수 musicianList에 할당하세요.


// 2. musicianList 변수(이미 선택된 요소) 내부에서만 'li' 요소를 찾아 출력하세요.


// 설명:
// 특정 서가(부모 요소)를 지정하고 그 안에서 책(자식 요소)을 찾는 방식입니다.
// 코드의 의도가 명확해지고, 다른 구역의 요소와 충돌할 버그를 예방하며, 성능 면에서도 효율적입니다.


// --------------------------------------------------------------------------
// 그 밖의 요소 선택 API (참고)
// --------------------------------------------------------------------------

// 1. getElementById()를 사용하여 '#chapter' 요소를 선택해 보세요.


// 2. getElementsByTagName()을 사용하여 모든 'li' 태그를 선택해 보세요.


// 설명:
// querySelector 이전에 사용되던 고전적인 주문들입니다. 
// ID 선택 시 getElementById는 매우 빠르지만, 유연함은 querySelector가 더 뛰어납니다.


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. querySelector(selector)는 첫 번째 매칭 요소만 가져옵니다.
// 2. 모든 요소를 가져오려면 querySelectorAll(selector)을 사용해야 합니다.
// 3. document는 전체를 대상으로, element는 그 내부를 대상으로 검색 범위를 좁힙니다.
// 4. 대상을 정확히 가리키는 것이 DOM 조작의 첫 번째 단계입니다.