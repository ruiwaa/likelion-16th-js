// --------------------------------------------------------------------------
// 실습: 화살표 함수 표현식 (Arrow Function Expression)
// --------------------------------------------------------------------------
// * 화살표 함수 : function 키워드 대신 '=>' 기호를 사용하여 함수를 간결하게 정의합니다.
// * 매개변수 규칙 : 매개변수의 개수에 따라 소괄호 () 생략 여부가 달라집니다.
// * 암묵적 반환 : 중괄호 {}를 생략하면 코드가 한 줄일 때 자동으로 값을 반환합니다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 기본 구문 비교 (함수 표현식 vs 화살표 함수)
// --------------------------------------------------------------------------

// 일반 함수 표현식으로 sum 함수 정의 (매개변수 x, y / function 키워드 사용)
const sum = function(x, y){
  return parseFloat(x) +parseFloat(y)
}
console.log(sum('5px','20px'))

// 화살표 함수 표현식으로 add 함수 정의 (매개변수 x, y / => 기호 사용)
// 함수 선언문
// function add(x, y){
//   return parseFloat(x) +parseFloat(y)
// }

// 화살표 함수 표현식
const add = (x, y) => {
  return parseFloat(x) +parseFloat(y)
}

// sum 함수와 add 함수를 각각 호출하여 결과 콘솔 출력

// 설명:
// 화살표 함수는 function 키워드를 제거하고, 
// 매개변수와 본문 사이에 '=>'를 추가하여 작동합니다.

// 출력 결과: 
// 두 함수 모두 동일한 덧셈 결과 출력
console.log(sum(5,10))
console.log(add(10, 20))

// --------------------------------------------------------------------------
// 매개변수 개수에 따른 구문 변화
// --------------------------------------------------------------------------

// 1. 매개변수가 없는 경우
// 빈 소괄호 () 또는 밑줄 _ 을 사용하여 log 함수 정의 ('로그' 출력)
// log 함수 호출

// 소괄호를 사용할 경우
// const helloJS = () => {
//   return 'Hello JavaScript! 😃'
// }
//console.log(helloJS())

// 밑줄(언더스코어)을 사용할 경우(암묵적으로 아무 값도 받지 않음을 나타냄.)
const helloJS = (_) => {
  return 'Hello JavaScript! 😃'
}
console.log(helloJS())

// 달러($)기호도 가능은 하지만, 거의 안 씀
// const helloJS = $ => {
//   return 'Hello JavaScript! 😃'
// }
// console.log(helloJS())


// 2. 매개변수가 1개인 경우 (소괄호 생략 가능)
// 소괄호를 생략하고 매개변수(value)만 작성하여 double 함수 정의 (값 2배 반환)
// double 함수 호출 및 결과 출력
const double = value => {
  return value * value
}
console.log(double(88))

// 3. 매개변수가 2개 이상인 경우
// 소괄호를 반드시 포함하여 multiply 함수 정의 (두 값의 곱 반환)
// multiply 함수 호출 및 결과 출력
const multiply = (z, k) => {
  return Number(z) * Number(k)
}
console.log(multiply(5, 5))

// 설명:
// 매개변수가 1개일 때만 소괄호를 생략할 수 있어 코드가 더 간결하게 작동합니다.
// 출력 결과:
// - 로그
// - 입력값의 2배
// - 입력값의 곱


// --------------------------------------------------------------------------
// 암묵적 반환 (Implicit Return)
// --------------------------------------------------------------------------

// 일반적인 화살표 함수 (중괄호 {}와 return 키워드 사용)
// 명시적 반환(Explicit Return) 함수 정의 (x + y 반환)
const px2rem =(pxValue) =>{
  return parseFloat(pxValue) / 16 + 'rem'
}
console.log(px2rem('16px'))
console.log(px2rem(16))

// 암묵적 반환을 사용하는 화살표 함수 (중괄호 {}와 return 생략)
// 암묵적 반환(Implicit Return) 함수 정의 (x + y 반환)

// 명시적 반환
// const rem2px = (remValue) => {
//   return parseFloat(remValue) * 16 + 'px'
// }
// console.log(rem2px(3))

// 암묵적 반환 (힌 줄 코드의 중괄호와 return 생략된 화살표 함수 표현식)
const rem2px = (remValue) => parseFloat(remValue) * 16 + 'px'

console.log(rem2px(3))

// 두 함수의 결과 비교 출력
console.log(px2rem('16px'))
console.log(px2rem(16))
console.log(rem2px(3))

// 설명:
// 본문이 한 줄이고 중괄호가 없으면, 자동으로 계산된 값이 반환되도록 작동합니다.
// 출력 결과: 두 함수 모두 동일한 덧셈 결과 출력

// 함수 표현식 (⭐️⭐️)
// const plus = function (x, y) { return x + y }
// const minus = function (x, y) { return x - y }
// const multiple = function (x, y) { return x * y }
// const divide = function (x, y) { return x / y }

// 화살표 함수 표현식 (⭐️⭐️⭐️⭐️⭐️)
const plus = (x, y) => x + y
const minus = (x, y) => x - x
const multiple = (x, y) => x * y
const divide = (x, y) => x / y

// --------------------------------------------------------------------------
// 객체(Object) 반환 시 주의사항
// --------------------------------------------------------------------------

// 문자열 value를 받아 객체 { key: value }를 반환하는 createObject 함수 정의

// 함수 선언문
// function createPerson(name, age, hobby){
//   //사람(인간) 추상화한 객체 생성
//   const 사람_객체 = {
//     이름 : name,
//     나이 : age + '살',
//     취미 : hobby,
//   }
//   return 사람_객체 // 반환: 사람 객체 { 이름: name, 나이: age, 취미: hobby }
// }
// console.log(createPerson('장예지',30,'고양이랑 낮잠자기'))
// console.log(createPerson('구름이',9,'간식 먹기'))

// 함수 표현식
const createPerson = function(name, age, hobby){
  return {
    이름 : name,
    나이 : age + '살',
    취미 : hobby,
  }
}
console.log(createPerson('장예지',30,'고양이랑 낮잠자기'))
console.log(createPerson('구름이',9,'간식 먹기'))

// 화살표 함수 표현식
//집(하우스) 만드는 기능(함수)
//집의 유형, 면적, 빌트인 여부
// const createHouse = (이름, 유형, 면적, 빌트인_여부) => {
//   // 집(house) 객체 생성
//   const house = {
//     name: 이름,
//     type: 유형,
//     area: parseFloat(면적) + '㎡',
//     isBuiltIn: 빌트인_여부,
//   }

//   // 생성된 집 객체 반환
//   return house
// }

//중요!!!//
//createHouse() 함수 정의 / 반환할 값의 타입이 객체인 경우
//  함수의 블록({)과 객체의 블록({) 표현 문제로 오류가 발생하는 것을 해결하려면 값을 소괄호로 감싸면 된다.
const createHouse = (이름, 유형, 면적, 빌트인_여부) => ({
    name: 이름,
    type: 유형,
    area: parseFloat(면적) + '㎡',
    isBuiltIn: 빌트인_여부,
 })

const 서초동_아파트 = createHouse('데샹 아티스트', '아파트', 114, true)
console.log(서초동_아파트)

const 길음동_오피스텔 = createHouse('해초름', '오피스텔', 56, false)
console.log(길음동_오피스텔)

// 주의: 객체 리터럴의 중괄호 {}를 함수 본문 블록으로 착각하지 않도록 소괄호 ()로 감싸야 함

// createObject 함수 호출 및 결과 출력

// 설명:
// 객체를 암묵적으로 반환하려면 ({ key: value }) 형태처럼 소괄호로 감싸야 정상적으로 작동합니다.
// 출력 결과: { key: "입력한 값" }


// --------------------------------------------------------------------------
// 핵심!
// --------------------------------------------------------------------------
// 1. function 키워드 대신 화살표(=>)를 사용해 코드를 간결하게 만듭니다.
// 2. 매개변수가 1개면 소괄호 생략 가능, 0개거나 2개 이상이면 필수입니다.
// 3. 중괄호 {}를 생략하면 return 없이도 값이 자동으로 반환(암묵적 반환)됩니다.
// 4. 객체를 바로 반환할 때는 소괄호 ()로 감싸주어야 합니다.