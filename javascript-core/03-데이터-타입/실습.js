/prettier-ignore/
// --------------------------------------------------------------------------
// 실습: 데이터 타입
// --------------------------------------------------------------------------
// * 기본 타입 (Primitive Types)
//   - String (문자): 텍스트 데이터
//   - Number (숫자): 실수 또는 정수, 소수 데이터
//   - Boolean (논리): true 또는 false
//   - Null (널): 의도적으로 비어있는 값
//   - Undefined (언디파인드): 값이 할당되지 않음
// ---> 다섯 가지 타입에 관한 설명을 할 수 있어야함 !!!
//   - Symbol (심볼): 고유한 식별자
//   - BigInt (빅인트): 매우 큰 정수
// * 참조 타입 (Reference Types)
//   - Object (객체): 키-값 쌍의 집합
//   - Array (배열): 여러 값의 목록
//   - Function (함수): 실행 가능한 코드 블록
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 문자 (String)
// --------------------------------------------------------------------------

// 작은따옴표로 문자열 생성
const 작은_따옴표 = '작은 따옴표'
// 큰따옴표로 문자열 생성
const 큰_따옴표 = "큰 따옴표"

// 역따옴표로 문자열 생성
const 역따옴표 = `역따옴표`


// 문자열 안에 따옴표 사용
let greetingMessage = 'i\'m fine!'
greetingMessage = "i'm fine"

let recoredTime = '5\ 32"'
recoredTime =  `5' 32"`

// 이스케이프 문자
// * \n -new line
console.log('줄바꿈\n문자');

// * \t -tab
console.log('탭\t문자');

// 문자 + 문자 (문자 연결)
const materialType = '아이언'
const heroGender = '맨'
const hero = materialType + heroGender
console.log(hero); // '아이언' + '맨' = '아이언맨'
console.log('Java' + 'Script');

console.log('1' + '1') // '11' 이라는 문자열이 만들어진다.



// --------------------------------------------------------------------------
// 숫자 (Number)
// --------------------------------------------------------------------------

// 정수
1076840
console.log(107840);


// 가독성을 위한 언더스코어 (ES2021)
1_076_840
console.log(1_076_840);


// 실수 (정수 + 소수)
console.log(823 + 0.73);

// 음수
console.log(-100);

// 큰 숫자

// 과학적(지수) 표기법
// 2.5 × 10^6 = 2,500,000
console.log(25e5);


// 특수 숫자 값
// * Infinity
// * -Infinity
// * NaN(Not a Number)

//자바스크립트에서 허용하는 큰/작은 정수
// NUMBER.MAX_SAFE_INTEGER
// NUMBER.MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//숫자 데이터 타입 & 산술 연산자 
//프로그래밍 산술 연산자 (+, -, *, /)
// 덧셈(add) 연산
console.log(9 +1);
console.log(-100 + 90);
console.log(0.9 + 0.2);

// 뺄셈(substract) 연산
console.log(90 - 10);
console.log(0.5 - 0.3);

// 곱셉(multiple) 연산
console.log(90 * 10);
console.log(0.5 * 0.3);

// 나눗셈(divide) 연산
console.log(90 / 10);
console.log(0.5 / 0.3);

//나머지(modulus) 연산
console.log(9 % 3);
console.log(100 % 20);
console.log(9 % 2);



// --------------------------------------------------------------------------
// 불리언 (Boolean)
// --------------------------------------------------------------------------

// true 값
console.log(true);
console.log(3 == '3'); //비교 연산자(참,거짓 비교하는 것)

// false 값
console.log(false);
console.log(3 === '3'); //비교 연산자



// --------------------------------------------------------------------------
// 널 (Null)
// --------------------------------------------------------------------------

// null 값 - 의도적으로 비어있음
// 예시:
// * 선택된 인덱스
let selectedIndex = null // 개발자가 의도를 가지고 값을 비운 경우를 나타냄
console.log(selectedIndex);
selectedIndex = 3 // 4번째 박스가 선택됨 (상태)
console.log(selectedIndex);
selectedIndex = 1 // 2번째 박스가 선택됨 (상태: 시간의 흐름에 따라 변경된 값)
console.log(selectedIndex);

// * 로그인 사용자
let signInUser = null //로그인된 사용자가 없다. (의도를 가지고 있음)
// 로그인 시도
// 로그인 성공
signInUser = '예지'
console.log('로그인 사용자:', signInUser);
// 로그아웃
signInUser = null // 로그인 사용자가 없다. (상태 변경)
console.log('로그인 사용자: ', signInUser)


// --------------------------------------------------------------------------
// 언디파인드 (Undefined)
// --------------------------------------------------------------------------
let xMark ='엑스 마크'
let yMark
console.log(yMark)

// 선언만 하고 값을 할당하지 않음 (의도를 가지고 설정하는 값이 아님.)
// 1. 선언
// 2. 초기화: 의도적으로 값을 할당하지 않음

// undefined vs null 비교
// undefined → 값이 없음 (자동)
// null     → 값이 없음 (의도적)


// --------------------------------------------------------------------------
// 심볼 (Symbol)
// --------------------------------------------------------------------------
// 문자값의 경우, 같은 키 값인 경우 동일한 값이다.
const ProductAId = 'abc',
      ProductBId = 'abc'

// 심볼 생성 - 항상 고유한 값
// 심볼인 경우, 같은 키 값을 사용해도 각각 고유한 값이다.

const productAIDSymbol = Symbol('abc')
const productBIDSymbol = Symbol('abc')

// 고유한 값인가? (조건 : productAId와 productBId가 값이 달라야 한다.)
// 비교 연산자(두 값을 비교 -> 불리언 값 평가)
console.log('문자열을 사용할 때 고유하지 않은가?:', ProductAId == ProductBId)
console.log('심볼을 사용할 때 고유하지 않다?:', productAIDSymbol == productBIDSymbol);

// --------------------------------------------------------------------------
// 빅인트 (BigInt)
// --------------------------------------------------------------------------

// 일반 숫자의 한계
// * Number.MAX_SAFE_INTEGER (9007199254740991)
// * +1 한계 초과
// * +2 정확하지 않음

// BigInt 생성 - 숫자 뒤에 n 붙이기
const bigIntLiteral = 1000n
console.log(bigIntLiteral)

// BigInt() 사용
const bigInt =  BigInt(1000)
console.log(bigInt)
// BigInt와 Number는 섞을 수 없음
// ❌ 숫자와 빅인트를 더할 경우 에러!
//console.log(1000 + 1000n) ❌
// ✅ 빅인트끼리 더할 경우 가능
console.log(100n + 1000n)


// --------------------------------------------------------------------------
// 참조 타입 (Reference Types)
// --------------------------------------------------------------------------

// 함수 (기능, 작업 정의))
function 커피_만들기(원두, 물, 얼음){
// 절차
console.log('1. 원두를 갈고 있습니다.')
console.log('2. 물을 끓이고 있습니다.')
console.log('3. 커피를 추출하고 있습니다.')
  
}

// 기능 사용(실행, 호출)
console.log(커피_만들기('케냐', '뜨거운 물', true))

// 객체
const coffeeMenu = {
  name: '아메리카노',
  price: 4500,
  size: 'Large',
  isHot:true,
  ingredients: ['에스프레소', '물', '크림'],
}
console.log(coffeeMenu);

// 배열 (순서가 중요한 집한 데이터)
const 장바구니 = ['우유', '김', '치즈', '라면', '빵']
console.log(장바구니);

// --------------------------------------------------------------------------
// typeof 연산자
// --------------------------------------------------------------------------

// 기본 타입
// * null
// * undefined
// * String
// * Number
// * Boolean
// * BigInt
// * Symbol

// 참조 타입
// * Object
// * Array
// * Function