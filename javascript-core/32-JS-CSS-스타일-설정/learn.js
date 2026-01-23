// --------------------------------------------------------------------------
// 실습: JavaScript를 활용한 CSS 스타일 동적 제어
// --------------------------------------------------------------------------

// [실습] 기본 스타일 설정 (style 속성 활용)
// 1. '.change-style-button' 버튼과 '.box' 요소를 선택하세요.
// 2. 버튼 클릭 시 다음 스타일을 적용하세요:
//    - 글자색(color): 'white'
//    - 배경색(backgroundColor): '#ed4c67'
//    - 너비(width): '200px'
//    - 높이(height): '150px'
console.groupCollapsed('1. 기본 스타일 설정 (CamelCase)')

// 이곳에 코드를 작성하세요.
const box = document.querySelector('.box')
const changeStyleButton = document.querySelector('.change-style-button')
console.log(box)
console.log(changeStyleButton)

// changeStyleButton.addEventListener('click',()=>{
//   //박스 요소에 스타일링 조작
//   box.style.color = 'white'

//   //JS 타이픈 쓸 수 없음
//   // 1)CSS 속성 이름을 카멜케이스로 변경 (일반적으로 많이 쓰임)
//   //box.style.backgroundColor = '#ed4c67' 
//   // 2)CSS 속성 이름을 대괄호 표기법에 넣어서 그대로 사용
//   box.style['background-color'] =  '#ed4c67' 

//   //너비 또는 높이 변경
//   box.style.width = 142 +'px'  // 숫자와 단위 따로 표기해주는 것을 권장

// })
//-스타일 속성 사용
//-CSS 속성 이름(카멜 케이스 또는 대괄호 표기법)
//-단위를 포함하는 숫자값은 단위와 따로 구성하는 것이 유지 관리 용이

console.groupEnd()


// [실습] 사용자 정의 속성 설정 (setProperty 활용)
// 1. '.change-theme-button' 버튼과 '.themed-box' 요소를 선택하세요.
// 2. 버튼 클릭 시 setProperty()를 사용하여 '--theme-color'를 '#A3CB38'로 변경하세요.
console.groupCollapsed('2. 사용자 정의 속성 설정 (Hyphen-case)')

// 이곳에 코드를 작성하세요.
console.dir(box.style) // CSSStyleDeclaration { setProperty }

changeStyleButton.addEventListener('click',()=>{
 box.style.setProperty('color', '#fff')
 box.style.setProperty('background-color', '#ed4c67','important')
 box.style.setProperty('width', 142 + 'px')


  // CSS 변수(커스텀 속성) style 속성으로 설정한다면?
  // --border-color, --width, --height 변수 값을 변경
  // box.style.--border-color = 'red'
  // box.style['--border-color'] = 'red'
  //style 속성으로 지정할 수 없음
  box.style.setProperty('--border-color', 'red')

})
console.groupEnd()


// [실습] 실무 패턴: 진행률 바(Progress Bar) 제어
// 1. '#button-50' 클릭 시: .progress-bar 너비 '50%', 텍스트 '50%'로 변경
// 2. '#button-100' 클릭 시: .progress-bar 너비 '100%', 텍스트 '완료!', 배경색 '#2196f3'로 변경
console.groupCollapsed('3. 실무 응용: Progress Bar')

// 이곳에 코드를 작성하세요.


console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. style 속성 접근: '요소.style.속성명'으로 접근하며, 이름은 카멜 케이스로 작성합니다.
//    (예: background-color -> backgroundColor)
// 2. 단위의 중요성: px, %, rem 등 단위를 생략하면 스타일이 적용되지 않습니다.
// 3. setProperty()의 강점: CSS 변수(--)를 제어할 수 있고, 하이픈 케이스를 그대로 사용합니다.
// 4. 우선순위: JS로 설정한 스타일은 HTML의 style 속성에 직접 삽입되어 CSS 파일보다 우선순위가 높습니다.
// --------------------------------------------------------------------------

// 실습
const box_1 = document.querySelector('.box-1')
console.log(box_1)

const button_1 = document.querySelector('.change-style-button-1')
console.log(button_1)

button_1.addEventListener('click',()=>{
  box_1.style.setProperty('background-color', '#ed4c67')
  box_1.style.setProperty('width', 200 + 'px')
  box_1.style.setProperty('height', 200 + 'px')
})

//-----
const theme_box = document.querySelector('.themed-box')
const theme_button = document.querySelector('.change-theme-button')

theme_button.addEventListener('click', ()=>{
  theme_box.style.setProperty('--theme-color', '#ed4c67')
  theme_box.style.setProperty('width', 100 +'px')
})

//-- 3번 실습
{

  const button50 = document.getElementById('button-50') 
  const button100 = document.getElementById('button-100')
  const progressBar = document.querySelector('.progress-bar') 
  
 
  // 1. `id`가 `button-50`인 버튼을 클릭하면
  //     - `.progress-bar`의 너비를 `'50%'`로 설정합니다.
  //     - `.progress-bar`의 텍스트 내용을 `'50%'`로 변경합니다.
  button50.addEventListener('click', () => {
    const nextValue = 50 + '%'
    progressBar.style.width = nextValue
    progressBar.textContent = nextValue
  })
  
  // 2. `id`가 `button-100`인 버튼을 클릭하면
  //     - `.progress-bar`의 너비를 `'100%'`로 설정합니다.
  //     - `.progress-bar`의 텍스트 내용을 `'완료!'`로 변경합니다.
  //     - 배경색을 파란색(`#2196f3`)으로 변경해봅니다.
  button100.addEventListener('click', () => {
    const nextValue = 100 + '%'
    progressBar.style.width = nextValue
    progressBar.textContent = nextValue
  })
}