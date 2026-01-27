// --------------------------------------------------------------------------
// 실습: 스타일 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getStyle() 함수
// 1. 요소(element)와 CSS 속성 이름(propertyName)을 인자로 받습니다.
// 2. getComputedStyle()을 사용하여 요소의 계산된 스타일 값을 반환하는 로직을 작성하세요.
console.groupCollapsed('4. getStyle() 함수 작성')

/* 추상화된 기능 구현 */
function getStyle(element, propertyName) {
  // 방어적 프로그래밍
  // 조건: element가 문서의 요소가 맞는가?
  // 틀리다면 아무 것도 없음을 명시적으로 반환
  //        경고 메시지를 콘솔 패널에 출력
  if (element === null || element.nodeType !== document.ELEMENT_NODE) {
    console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
    return null
  }
  
  // 맞다면 프로그램 계속 실행
  const elementStyleSnapshot = getComputedStyle(element)

  // 방어적 프로그래밍
  // 전달된 propertyName의 타입이 문자열이 아니라면?
  // 아무 것도 없음을 명시적으로 반환
  // 경고 메시지를 콘솔 패널에 출력
  if (typeof propertyName !== 'string') {
    console.warn('전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.')
    return null
  }

  const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
  return propertyVaue
}

const strongElment = document.querySelector('.prose p:first-of-type strong')
console.log(getStyle(strongElment,'font-size'))
console.log(getStyle(strongElment,'color'))
console.log(getStyle(strongElment, 'letter-spacing'))
console.log(getStyle(strongElment, 'word-spacing'))


console.groupEnd();


// [실습] setStyle() 함수
// 1. 요소, 속성 이름, 스타일 값을 인자로 받습니다.
// 2. 요소의 style 속성을 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('5. setStyle() 함수 작성')

// 기능을 추상화 없이 로직을 작성한다면?
// {
  const body = document.body
  const main = body.querySelector('main')

//   body.style.setProperty('background-color', 'gold')
//   main.style.setProperty('border', '6px solid currentColor')
//   main.style.setProperty('padding', 24 + 'px')

// }

// 기능을 추상화해 로직을 작성한다면?
{
  function setStyle(element, propertyName, propertyVaue){
    element.style.setProperty(propertyName,propertyVaue)
  }
  setStyle(body, 'border','5px solid black')
  setStyle(body,'background-color','tan')
  setStyle(main, 'padding', 24 + 'px')

}

// 방어적 프로그래밍 + 메서드 체이닝

{
  setStyle(document.body)
  setStyle(document.body, 'padding')
  setStyle(document.body, 'padding', '30px')
  
  function setStyle(element, propName, propValue) {
    if (element === null || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('element 인자로 전달된 것은 요소 노드가 아닙니다.')
      return null
    }

    if (!propName || !propValue) {
      console.warn('propName 또는 propValue 인자는 유효한 값 전달이 필요합니다.')
      return null
    }

    element.style.setProperty(propName,propName)
  }
}
console.groupEnd()

console.groupCollapsed('removeStyle() 함수 작성')
{

  
  // 기능 추상화 하여 사용할 경우
{
  const body = document.body
  const main = body.querySelector('main')

  // 요구사항: 특정 요소의 인라인 스타일을 삭제하고 싶다.
  // 스타일 유틸리티 함수
  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)  
  }

  removeStyle(body, 'padding')
  removeStyle(body, 'background-color')
  removeStyle(main, 'border')
  removeStyle(main, 'padding')
}
}

// 기능 추상화 + 방어적 프로그래밍(오류 가능성에서 코드 보호)
{
  const body = document.body

  function removeStyle(element, propertyName) {
    if (!element || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('element 인자는 문서의 요소 노드여야 합니다.')
      return null
    }

    if (!propertyName/* undefined | null */) {
      console.warn('propertyName 인자가 유효하지 않은 값입니다.')
      return null
    }

    element.style.removeProperty(propertyName)  
  }

  removeStyle()                // ❌ Error → ⚠️ Warning
  removeStyle(body)            // ❌ Error → ⚠️ Warning
  removeStyle(body, 'padding') // ✅

}

console.groupEnd()


/// [실습] css() 함수
// 1. 위에서 작성한 getStyle과 setStyle, removeStyle을 내부에서 활용하세요.
// 2. propertyValue가 있으면 '설정(set)'하고, 없으면 '읽기(get)'를 수행하도록 조건문을 작성하세요.
// 3. propertyValue가 null인 경우, 삭제(remove)하도록 조건 처리합니다.
// 4. (심화) propertyName이 객체({})인 경우, 재귀 호출을 통해 여러 스타일을 한 번에 적용하세요.

console.group('css() 함수 작성')

// 개별 유틸리티 함수를 사용하는 경우
// - getStyle
// - setStyle
// - removeStyle
{
  const tipBoxHeading = document.querySelector('.tip-box h3')
 

  // 스타일 설정(쓰기, 수정)
  setStyle(tipBoxHeading, 'font-size', 32 + 'px')
  
  // 스타일 확인(읽기, 조회)
  const tipBoxHeadingFontSize = getStyle(tipBoxHeading, 'font-size')
  console.log(tipBoxHeadingFontSize)

  // 스타일 삭제
  removeStyle(tipBoxHeading, 'font-size')

  function getStyle(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName)
  }

  function setStyle(element, propertyName, propertyValue) {
    element.style.setProperty(propertyName, propertyValue)
  }

  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)
  }
}

// 유틸리티를 통합한 css 함수를 사용하는 경우 (다형성)
// - 읽기 (인자 2개)
// - 쓰기 (인자 3개)
// - 삭제 (인자 3개, 값이 null)
{
  // 이곳에 코드를 작성하세요.
  const code = document.querySelector('.code-example code')
  
  // 다형성 특징을 가지는 통합 유틸리티 함수 css() 활용

  // 쓰기
  css(code, 'color', '#34a853')
  css(code, 'background-color', '#095325')

  // 읽기
  const codeColor = css(code, 'color')
  console.log(codeColor)
  const codeBGColor = css(code, 'background-color')
  console.log(codeBGColor)

  // 삭제
  css(code, 'color', null)
  css(code, 'background-color', null)



  function css(element, propertyName, propertyValue) {
    // [읽기] 마지막 인자가 undefined인 경우
    if (propertyValue === undefined) {
      return getStyle(element, propertyName)
    }
    
    // [삭제] 마지막 인자가 null인 경우
    if (propertyValue === null) {
      return removeStyle(element, propertyName)
    }

    // [쓰기] 그 외 나머지 경우
    setStyle(element, propertyName, propertyValue)
  }


  function getStyle(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName)
  }

  function setStyle(element, propertyName, propertyValue) {
    element.style.setProperty(propertyName, propertyValue)
  }

  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)
  }
}
console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!  
// --------------------------------------------------------------------------
// 1. getStyle: window.getComputedStyle(element)[propertyName] 활용
// 2. setStyle: element.style[propertyName] = propertyValue; return element; 활용
// 3. css: 인자(propertyValue)의 존재 여부에 따라 분기 처리 (if/else)
// --------------------------------------------------------------------------

 // --------------------------------------------------------------------------
// 타입 검사 유틸리티 함수 (추상화)
// --------------------------------------------------------------------------
// - isObject
// - isElement
// --------------------------------------------------------------------------

/**
 * 요소의 CSS 스타일을 가져오거나 설정합니다.
 * @param {HTMLElement} element - 대상 HTML 요소
 * @param {string|Object} propertyOrProperties - CSS 속성 이름 또는 속성-값 쌍의 객체
 * @param {string|number} [propertyValue] - CSS 속성 값 (propertyOrproperties가 문자열인 경우)
 * @returns {string|undefined} 값을 가져올 때는 CSS 속성 값을 반환하고, 설정할 때는 undefined를 반환
 */
{
function css(element, propertyOrProperties, propertyValue) {
  // 재귀 : '나(함수 자신)를 내 안에서 다시 부른다.'
  // 조건 : 두 번째 인자의 타입이 객체인 경우 → 객체 속성:값 순환(반복) → 재귀 호출
  if (isObject(propertyOrProperties)) {
    // 객체 속성(key):값(value) 순환(반복) 처리
    const properties = propertyOrProperties
    /* { key: value } */
    /* value = properties[key] */
    for(const prop in properties) {
      const value = properties[prop]
      // css(요소, 속성 이름, 속성 값)
      // console.log(element, prop, value)
      // 재귀 호출 (나 자신을 다시 부르자! 왜? 결국은 내가 그 일을 하는 기능이니까)
      css(element, prop, value)
    }
  }

  if (propertyValue === undefined) {
    // 스타일 속성 값 읽기 (값 반환)
     getStyle(element, propertyOrProperties)
  }
  
  if (propertyValue === null) {
    // 스타일 속성 삭제
    removeStyle(element, propertyOrProperties)
  }

  // 스타일 속성 설정
  setStyle(element, propertyOrProperties, propertyValue)
}
 function getStyle(element, propertyName) {
     getComputedStyle(element).getPropertyValue(propertyName)
  }

  function setStyle(element, propertyName, propertyValue) {
    element.style.setProperty(propertyName, propertyValue)
  }

  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)
  }

 // css 함수 활요
const code = document.querySelector('.code-example code')
// 쓰기
  css(code, 'color', '#34a853')
  css(code, 'background-color', '#054215')
  css(code, 'margin-block', '12px')
  css(code, 'padding', '24px')

   // 읽기
  const codeColor = css(code, 'color')
  console.log(codeColor)
  const codeBGColor = css(code, 'background-color')
  console.log(codeBGColor)

  // 삭제
  css(code, 'color', null)
  css(code, 'background-color', null)

}
// --------------------------------------------------------------------------
// 타입 검사 유틸리티 함수 (추상화)
// --------------------------------------------------------------------------
// - isObject
// - isElement
// --------------------------------------------------------------------------

/**
 * 주어진 데이터가 객체인지 확인합니다.
 * @param {any} data - 검사할 데이터
 * @returns {boolean} 객체 여부
 */
function isObject(data) {
  return typeof data === 'object' && data !== null && !Array.isArray(data)
}

/**
 * 요소 노드인지 확인해 결과를 불리언으로 반환합니다.
 * @param {Node} node - 문서의 노드 (요소, 텍스트, 주석, 도큐멘트 등)
 * @returns {boolean} 요소 노드 여부
 */
// eslint-disable-next-line no-unused-vars
function isElement(node) {
  return node && node.nodeType === document.ELEMENT_NODE
}

// --------------------------------------------------------------------------
// 함수 리팩토링(Refactoring)
// --------------------------------------------------------------------------

{
  const prose = document.querySelector('.prose')

  // getStyle
  function getStyle(el, prop) {
    // return getComputedStyle(el)[prop]
    return getComputedStyle(el).getPropertyValue(prop)
  }

  // setStyle
  function setStyle(el, prop, value) {
    // el.style[prop] = value
    el.style.setProperty(prop, value)
  }

  // removeStyle
  function removeStyle(el, prop) {
    // el.style[prop] = null
    el.style.removeProperty(prop)
  }

  // 세상에서 가장 사랑받는 라이브러리 jQuery 흉내내기!
  // 우리의 css() 유틸리티 함수 리팩토링
  css(prose, {
    'color': '#34a853',
    'background-color': '#051215',
    'margin-block': '12px',
    'padding': '24px',
  })

  // css
  function css(el, prop /* string or object */, value) {
    console.log({ el, prop, value })

    // A and B and C
    if (typeof prop === 'object' && prop && !Array.isArray(prop)) {
      //조건 데이터 타입이 객체이면서, 속성이 배열이 아닌 것
      // 재귀(recursion) 함수 활용
      // 객체를 순환(반복)하려면? -> for...in 문
      for (const key in prop) {
        const value = prop[key] // 객체의 속성에 접근하는 방법: 대괄호 표기법
        console.log(key/* 속성 */, value/* 값 */)
        // 재귀: 나(함수)를 내가 다시 불러요! (호출)
        // css(요소, 속성, 값)
        css(el, key, value)
      }

      // 함수 종료
      return
    }


    if (value === undefined) {
      return getStyle(el, prop)
    }

    if (value === null) {
      return removeStyle(el, prop)
    }

    setStyle(el, prop, value)
  }

}