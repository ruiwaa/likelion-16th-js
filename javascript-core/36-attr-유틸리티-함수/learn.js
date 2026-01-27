// --------------------------------------------------------------------------
// 실습: 속성 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getAttr() 함수
// 1. 요소(element)와 속성 이름(attributeName)을 인자로 받습니다.
// 2. getAttribute()를 사용하여 요소의 속성 값을 반환하는 로직을 작성하세요.
console.groupCollapsed('getAttr() 함수 작성')

// 이곳에 코드를 작성하세요.'
const pElement = document.querySelector('main p')
const strongElment = document.querySelector('p strong')
const prose = document.querySelector('.prose')
console.log(prose)

function getAttr(element, atrrName){
const getAttrValue = element.getAttribute(atrrName)
return getAttrValue
}
console.log(getAttr(pElement,'data-has-strong'))
console.log(getAttr(strongElment,'title'))

console.groupEnd()


// [실습] setAttr() 함수
// 1. 요소, 속성 이름, 속성 값을 인자로 받습니다.
// 2. 요소의 setAttribute() 메서드를 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('setAttr() 함수 작성')

// 이곳에 코드를 작성하세요.
function setAttr(element,attrName,setValue){
  const setAttrValue = element.setAttribute(attrName,setValue)
  return setAttrValue
}
setAttr(strongElment,'id', 'powerful')

console.groupEnd()


// [실습] removeAttr() 함수
// 1. 요소, 속성 이름 값을 인자로 받습니다.
// 2. 요소의 removeAttribute() 메서드를 활용하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('removeAttr() 함수 작성')

// 이곳에 코드를 작성하세요.
function removeAttr(element, removeName){
  element.removeAttribute(removeName)
}
removeAttr(strongElment,'id')
console.groupEnd()


// [실습] attr() 함수
// 1. 위에서 작성한 getAttr, setAttr, removeAttr을 내부에서 활용하세요.
// 2. attributeName이 객체({})인 경우, 재귀 호출을 통해 여러 속성을 한 번에 적용하세요.
// 3. attributeValue가 null이면 '삭제', 값이 있으면 '설정', 없으면 '읽기'를 수행하세요.
console.groupCollapsed('attr() 함수 작성')

// 이곳에 코드를 작성하세요.
attr(
  // element
  prose.querySelector('header'),
  // attributes (객체)
  {
    id: 'my-header',
    title: '머릿글',
    'data-target': 'main content',
    'aria-labelledby': 'main-heading',
  }
)
attr(prose.querySelector('h1'), 'id', 'main-heading')


  function attr(element, attrName, attrValue){
    if(attrValue === undefined){
      return getAttr(element, attrName)
    }
    
    if(attrValue === null){
      return removeAttr(element,attrName)
    }
    setAttr(element,attrName,attrValue)
  }
  
  // 속성 추가(쓰기)
  attr(prose, 'id', 'main-container')
  attr(prose, 'data-id', 'main-element')
  
  // 속성 확인(읽기)
  const proseId = attr(prose, 'id')
  const proseDataId = attr(prose, 'data-id')
console.log(proseId, proseDataId)

//속성 제거(삭제)
setTimeout(() => {
  // 2.4초 뒤에 제거
  attr(prose, 'id',null)
  attr(prose, 'data-id',null)
  console.log('prose 요소의 id, data-id 속성 모두 삭제')
}, 2400)



// attr() v2
// 함수 리팩토링 (외부적으로 변경 사항은 없지만, 내부적으로 개선)
// attr(element, attributeName, attributeValue)
// attr(element, attributes)

{
  
  function attr(element, attributeOrAttributes, attributeValue) {
    
    // 두 번째 인자가 객체인지 확인
    if (
      // typeof 데이터 값이 null, array, object인 경우만 걸러짐
    typeof attributeOrAttributes === 'object' && 
    // array, object만 걸러짐
    attributeOrAttributes &&
    // object만 걸러짐
    !Array.isArray(attributeOrAttributes)
  ) {
    // [속성 키:값 쌍의 집합(객체)] 명확한 변수명 설정
    const attributes = attributeOrAttributes
    // 객체 속성(key):값(value) 쌍을 반복 (for...in 문)
    for (const key in attributes) {
      const value = attributes[key]
      // 재귀(recursion) 호출 (함수 내부에서 자신(함수)을 다시 호출)
      // console.log(element, key, value)
      attr(element, key, value)
    }
  }
  
  // [속성 하나(문자열)] 명확한 변수명 설정
  const attributeName = attributeOrAttributes
  
  if (attributeValue === undefined) {
    return getAttr(element, attributeName)
  }
  
  if (attributeValue === null) {
    return removeAttr(element, attributeName)
  }
  
  setAttr(element, attributeName, attributeValue)
}
attr(
  // element
  prose.querySelector('header'),
  // attributes (객체)
  {
    id: 'my-header',
    title: '머릿글',
    'data-target': 'main content',
    'aria-labelledby': 'main-heading',
  }
)
  attr(prose.querySelector('h1'), 'id', 'main-heading')


}
console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getAttr (읽기): HTML 태그에 명시된 속성 값을 문자열로 가져옵니다. (getAttribute)
// 2. setAttr (쓰기): 속성 값을 변경하거나 추가하고, 요소를 반환합니다. (setAttribute)
// 3. removeAttr (삭제): 불필요한 속성을 완전히 제거합니다. (removeAttribute)
// 4. attr (만능): 인자에 따라 읽기/쓰기/삭제를 자동으로 판단합니다. (다형성)
//    - 객체를 주면? -> 여러 속성을 한 번에 설정 (재귀)
//    - 값을 안 주면? -> 속성 값을 읽어옴 (읽기)
//    - 값을 주면? -> 속성을 설정함 (쓰기)
//    - null을 주면? -> 속성을 삭제함 (삭제)
// --------------------------------------------------------------------------
