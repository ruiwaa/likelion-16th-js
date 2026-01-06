// --------------------------------------------------------------------------
// 연습: 다음 코드의 출력 결과를 예측해 주석으로 작성하세요.
// --------------------------------------------------------------------------

console.log(typeof 'JavaScript')      // 예측 값 작성: string
console.log(typeof 24)                // 예측 값 작성: number
console.log(typeof true)              // 예측 값 작성: boolean
console.log(typeof undefined)          // 예측 값 작성: undefined
console.log(typeof null)              // 예측 값 작성: object
console.log(typeof Symbol('id'))      // 예측 값 작성: symbol
console.log(typeof 123n)              // 예측 값 작성: bigint
console.log(typeof [4, 7, 3])         // 예측 값 작성: object (array)
console.log(typeof { name: '우인' })   // 예측 값 작성: object
console.log(typeof function() {})     // 예측 값 작성: function


// --------------------------------------------------------------------------
// 연습: 각 타입에 맞는 값을 변수에 할당하세요.
// --------------------------------------------------------------------------

// 당신의 이름을 저장하는 문자열 변수 my_name
let my_name = '장예지'

// 당신의 나이를 저장하는 숫자 변수 my_age
let my_age = 30

// 학생인지 여부를 저장하는 불리언 변수 is_student
let is_student = false

// 아파트 호수가 없음을 나타내는 null 변수 apt_number
let apt_number = null

// 아직 값이 정해지지 않은 변수 future_job
let future_job
// 좋아하는 과일 3개를 담은 배열 favorite_fruit
let favorite_fruit = ['수박', '멜론' ,'체리']
console.log(favorite_fruit, typeof(favorite_fruit))



// 당신의 정보를 담은 객체 my_info (이름, 나이 포함)
const my_info = {
  MYNAME: 'jang_yeji',
  MYAGE:30
}
console.log(my_info)
// "안녕하세요"를 출력하는 함수 sayHello
function sayHello(){
console.log("안녕하세요!")
}

// 각 변수의 타입을 확인해보세요. 
console.log('my_age의 타입:', typeof my_age) // my_age의 타입: number
console.log('is_student의 타입:', typeof is_student) //is_student의 타입: boolean
console.log('apt_number의 타입:', typeof apt_number) //apt_number의 타입: object
console.log('future_job의 타입:', typeof future_job) // future_job의 타입: undefined
console.log('favorite_fruit의 타입:', typeof favorite_fruit) //favorite_fruit의 타입: object
console.log('my_info의 타입:', typeof my_info) //my_info의 타입: object
console.log('sayHello의 타입:', typeof sayHello) //sayHello의 타입: function


// --------------------------------------------------------------------------
// 연습: 다음 코드를 실행하고 결과를 예측한 후 확인하세요.
// --------------------------------------------------------------------------

// null의 타입
let user = null
console.log('user의 타입:', typeof user)
// 질문: null의 타입이 'object'인 이유는 무엇일까요?
// 답: null이 자바스크립트 초기 구현에서 object와 동일한 타입 태그로 인식되는 오류로 인해 나온 데이터 타입 값이다.


// 문자 vs 숫자
let score1 = '100'
let score2 = 100

console.log('score1 =', score1, 'score1의 타입:', typeof score1)
console.log('score2 =', score2, 'score2의 타입:', typeof score2)
// 질문: 두 변수의 값은 같아 보이지만 타입이 다릅니다. 왜 그럴까요?
// 답:score 1의 데이터 타입은 문자열이고, score2의 데이터 타입은 숫자값이기 때문이다.


// undefined vs null
let user_name
let user_age = null

console.log('user_name의 값 =', user_name, 'user_name의 타입:', typeof user_name)
console.log('user_age의 값 =', user_age, 'user_age의 타입:', typeof user_age)
// 질문: undefined와 null의 차이는 무엇일까요?
// 답: null은 개발자가 의도적으로 비운 값이고, undefined은 변수를 선언하는 과정에서 값을 할당하지 않은 값이기 때문이다. 


// 배열과 객체의 타입
const numbers = [1, 2, 3, 4, 5]
const person = { name: '지서현', age: 19 }
const sayHi = function() { console.log('안녕!') }

console.log('numbers의 타입:', typeof numbers)
console.log('person의 타입:', typeof person)
console.log('sayHi의 타입:', typeof sayHi)
// 질문: 배열, 객체, 함수의 typeof 결과를 정리해보세요.
// 배열: object
// 객체: object
// 함수: fuction


// 타입 변환 실험
const num1 = 10
const num2 = '10'

console.log('num1 + 5 =', num1 + 5, 'num1의 타입:', typeof num1)
console.log('num2 + 5 =', num2 + 5, 'num2의 타입:', typeof num2)
// 질문: 결과가 다른 이유는 무엇인가요?
// 답: num1은 숫자이기 때문에 산술 덧셈이 수행되어 15가 나오고, num2는 문자열이기 때문에 숫자 5와 덧셈 연산이 될 때, 숫자 5는 문자열로 변환되어 "10" + "5"가 되어 "105"가 출력된다.

// BigInt vs Number
const big_number = 9007199254740991n
const normal_number = 100

console.log('big_number:', big_number, 'big_number의 타입:', typeof big_number)
console.log('normal_number:', normal_number, 'normal_number의 타입:', typeof normal_number)
// 질문: BigInt 뒤에 'n'이 붙는 이유는 무엇일까요?
// 답: BigInt는 Number 타입과 구분하기 위해 숫자 뒤에 n을 붙여 명시적으로 BigInt 리터럴임을 나타낸다. 


// Symbol의 고유성
const id1 = Symbol('id')
const id2 = Symbol('id')

console.log('id1:', id1, 'id1의 타입:', typeof id1)
console.log('id2:', id2, 'id2의 타입:', typeof id2)
console.log('id1.description:', id1.description)
console.log('id2.description:', id2.description)
// 질문: 같은 'id'로 만들었는데 id1과 id2는 같을까요, 다를까요?
// 답: Symbol이라는 데이터 타입은 본래 각각의 고유한 값을 가지고 있으므로, 동일한 값의 형태로 보이지만, 생성될 때마다 서로 다른 고유한 값을 생성한다.
// 마치, html에서 id 속성처럼 각 symbol의 값은 고유한 값을 나타낸다.  따라서 id1과 id2는 같지 않다.