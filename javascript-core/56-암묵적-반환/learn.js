// --------------------------------------------------------------------------
// 실습: 화살표 함수의 암묵적 반환 (Implicit Return)
// --------------------------------------------------------------------------

// [실습 1] 배열 데이터를 객체로 변환
// 1. const names = ['우혁', '하민', '준식'] 배열을 만드세요.
// 2. map()과 소괄호(())를 활용한 암묵적 반환으로 { name: '이름' } 형태의 객체 배열을 만드세요.
console.groupCollapsed('1. 객체 변환 실습 (암묵적 반환)')

// 이곳에 코드를 작성하세요
const names = ['우혁', '하민', '준식']

// 명시적 반환
{
  const result = names.map((name) => {
    //const returnValue = { ['name']: name } // [name]: name 이렇게 하면 키값이 두번 나옴
    // const returnValue = { 'name': name }
    //const returnValue = { name: name } // 앞에 name은 변수 이름이여서, 코드 작성자가 원하는대로 할당 가능
    //const returnValue = { name }
    //return returnValue
    return { name } // 구조 분해를 하여서 변수명과 키값이 동일하기 때문에 naem 한번만 작성해주면 됨
  })

  // const result = [{ name: '우혁' },{ name: '하민' },{ name: '준식' }]
  console.log(result)
}



// 암묵적 반환
{
  // () => { return value }
  // () => (value)
  // 객체 리터럴의 중괄호와 함수 코드 블록 중괄호 모양이 같으므로,
  // 암묵적 반환을 하려면 소괄호로 객체를 감싸주어야 한다. 
 const result = names.map((name) => ({ name }))
  //const result = names.map((myName) => {
  //return {myName}
  //  
// })

  console.log(result)
}


console.groupEnd()



// --------------------------------------------------------------------------
// [실습 2] 성인 회원 필터링
// 1. const ages = [15, 22, 19, 30, 26, 17] 배열을 만드세요.
// 2. filter()와 조건식을 활용해 20세 이상만 추출하세요. (return 키워드 없이 작성)
console.groupCollapsed('2. 데이터 필터링 실습')

// 이곳에 코드를 작성하세요
const ages = [15, 22, 19, 30, 26, 17]

const result = ages.filter((age) => {
  if((age > 20))
    return {age}
})
console.log(result)

console.groupEnd()


// --------------------------------------------------------------------------
// [실습 3] 동적 렌더링
// 1. const fruits = ['사과', '배', '포도'] 배열을 만드세요.
// 2. map()을 사용해 <li> 태그 문자열을 암묵적 반환하세요.
// 3. join('')으로 결합 후 id가 fruitList인 요소의 innerHTML에 할당하세요.
console.groupCollapsed('3. 동적 렌더링 실습')

// 이곳에 코드를 작성하세요
const fruits = ['사과', '배', '포도'] 

const fruitsMarkup = fruits.map((data) => {
  const markup =
  `<li>${data}</li> `
  return markup
})

const fruitsHtmlCode = fruitsMarkup.join('')
console.log(fruitsHtmlCode)
const fruitContainer = document.querySelector('[data-container="fruit"]')

fruitContainer.innerHTML = fruitsHtmlCode

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 암묵적 반환 조건: 함수 본문이 한 줄이며 중괄호({})를 사용하지 않아야 합니다.
// 2. 객체 반환 주의사항: 객체 리터럴의 중괄호를 코드 블록으로 오해하지 않도록 소괄호(())로 감쌉니다.
// 3. 가독성: 짧은 변환 로직(map, filter)에서는 암묵적 반환이 코드 가독성을 크게 높여줍니다.
// 4. 명시적 반환 활용: 로직이 복잡해지거나 여러 줄의 코드가 필요할 때는 중괄호와 return을 쓰는 것이 더 안전합니다.
// --------------------------------------------------------------------------