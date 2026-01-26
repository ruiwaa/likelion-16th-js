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

console.group('removeStyle() 함수 작성')
{
  const body = document.body
  const main = body.querySelector('main')
  
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


// [실습] css() 함수
// 1. 위에서 작성한 getStyle과 setStyle을 내부에서 활용하세요.
// 2. propertyValue가 있으면 '설정(set)'하고, 없으면 '읽기(get)'를 수행하도록 조건문을 작성하세요.
console.groupCollapsed('6. css() 함수 작성')

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getStyle: window.getComputedStyle(element)[propertyName] 활용
// 2. setStyle: element.style[propertyName] = propertyValue; return element; 활용
// 3. css: 인자(propertyValue)의 존재 여부에 따라 분기 처리 (if/else)
// --------------------------------------------------------------------------