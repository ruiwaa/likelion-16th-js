// --------------------------------------------------------------------------
// 실습: 템플릿 리터럴 (Template Literals)
// --------------------------------------------------------------------------

// [실습] 멀티라인 문자열과 변수 삽입
// 1. 객체(product)를 만들고 이름과 가격을 담으세요.
// 2. 백틱(``)을 사용하여 여러 줄로 구성된 HTML 마크업 문자열을 생성하세요.
// 3. ${} 문법을 사용하여 상품 정보를 동적으로 삽입하세요.
console.groupCollapsed('템플릿 리터럴 기본 실습')

// 예전 방법의 문자열 생성 함수
function generateOldHTMLCode(data) {

  // 방법 1. 문자열 연결(접합)
  let htmlCode = ''
  htmlCode += '<div class="form-input">'
  htmlCode += '<label for="'+ data.id +'">'+ data.label +'</label>'
  htmlCode += '<input type="'+ data.type +'" id="'+ data.id +'" placeholder="'+ data.placholder +'" />'
  htmlCode += '</div>'

  console.log('문자열 연결(접합) 결과\n', htmlCode)

  // 방법 2. 템플릿 비슷하게 이스케이프 처리
  htmlCode = '<div class="form-input">\
    <label for="'+ data.id +'">'+ data.label +'</label>\
    <input\
      type="'+ data.type +'"\
      id="'+ data.id +'"\
      placeholder="'+ data.placholder +'"\
    />\
  </div>'

  console.log('템플릿 비슷하게 이스케이프 처리\n', htmlCode)  


  // 방법 3. 배열 사용해 문자열로 조인(join)
  htmlCode = [
    '<div class="form-input">',
      '<label for="' + data.id + '">' + data.label + '</label>',
      '<input',
        ' type="' + data.type + '"',
        ' id="' + data.id + '"',
        ' placeholder="' + data.placholder + '"',
      '/>',
    '</div>',
  ].join('')

  console.log('배열 사용해 문자열로 조인(join)\n', htmlCode)  

  return htmlCode
}

console.log(
  generateOldHTMLCode({
    id: 'i@sodkckd-82',
    label: '이름',
    type: 'text',
    placholder: '하월곡',
  }),
)

// 템플릿 리터럴 방법을 사용한 문자열 생성 함수
function generateHTMLCode(data) {
  // 템플릿(Template) 리터럴(Literal, 값)
  // JavaScript를 사용해 HTML 코드 구조화 (Markup)
  const htmlTemplate = `
    <div class="form-input">
      <label for="${data.id}">${data.label}</label>
      <input
        type="${data.type}"
        id="${data.id}"
        placeholder="${data.placholder}"
      />
    </div>
  `

  return htmlTemplate
}

const emailInputTemaplte = generateHTMLCode({
  id: 'isockd@dk-03',
  label: 'user-email',
  type: 'email',
  placholder: 'user@company.io',
})

const passwordInputTemaplte = generateHTMLCode({
  id: 'ocidsk!kd-82',
  label: 'user-password',
  type: 'password',
  placholder: '숫자, 영어, 특수 문자 조합 8자리 이상 입력',
})

const passwordConfirmInputTemaplte = generateHTMLCode({
  id: 'ocidsk!kd-81',
  label: 'user-password-confirm',
  type: 'password',
  placholder: '입력한 패스워드와 일치하는 값 입력',
})

console.log(emailInputTemaplte)
console.log(passwordInputTemaplte)
console.log(passwordConfirmInputTemaplte)

console.groupEnd()

// [실습] 템플릿 리터럴 내부의 연산
// 1. 장바구니에 담긴 물건의 가격(price)과 수량(quantity) 변수를 선언하세요.
// 2. 템플릿 리터럴 내부 ${} 안에서 직접 곱셈 연산을 수행하여 총액을 출력하세요.
console.groupCollapsed('표현식 삽입 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()

// --------------------------------------------------------------------------
// 실습: 태그드 템플릿 (Tagged Templates)
// --------------------------------------------------------------------------

console.group('태그드 템플릿 심화 실습')

const person = '최재훈'
const job = '프론트엔드 개발자'

// 함수 이름(myTag)을 템플릿 리터럴 앞에 붙여서 실행합니다.
const result = myTag`${person}은 ${job}입니다.`
console.log(result) // '프론트엔드 개발자, 최재훈입니다.'

function myTag(strings, person, job) {
  console.log(strings) // ['', '은 ', '입니다.']
  console.log(person)  // '최재훈'
  console.log(job)     // '프론트엔드 개발자'
  
  // 순서를 바꾸거나 문자를 추가하여 반환
  // strings.at(-1)은 배열의 마지막 요소 '입니다.'를 가져옵니다.
  return `${job}, ${person}${strings.at(-1)}`
}

// [실습] 태그 함수 정의 및 파싱
// 1. 문자열 배열과 변수들을 인자로 받는 태그 함수(highlight)를 정의하세요.
// 2. 템플릿 리터럴 앞에 태그 함수 이름을 붙여 실행하세요.
// 3. 변수 부분에만 <strong> 태그를 감싸서 반환하는 로직을 작성해 보세요.

// 태그 함수 호출 (역따옴표 활용)
highlight`
  ${document.body}
  font-weight: 700; 
  ${document.querySelector('main')}
  font-size: 20px;
  ${document.querySelector('h1')}
  background-color: #ff0;
  ${document.querySelector('section')}
`

// 태그 함수
function highlight(strings, body, main, h1, section) {
  // 힌트: strings 배열과 values 배열을 결합해 보세요
  const elements = [body, main, h1, section]
  elements.forEach((element) => {
    element.style.cssText = strings.join('')
  })
}

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 백틱(``): 따옴표 대신 백틱을 사용하면 줄바꿈이 자유롭고 가독성이 좋아집니다.
// 2. 보간법(${}): 문자열 중간에 변수나 JavaScript 표현식을 직접 삽입할 수 있습니다.
// 3. 태그드 템플릿: 템플릿 리터럴을 함수 인자로 분해하여 전달하며, 커스텀 파싱이 가능합니다.
// 4. 구조: 태그 함수(strings, v1, v2...) 순서로 인자가 들어오며 strings는 정적 문자열 배열입니다.
// --------------------------------------------------------------------------