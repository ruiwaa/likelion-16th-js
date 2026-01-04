// --------------------------------------------------------------------------
// 실습: 변수와 상수
// --------------------------------------------------------------------------
// * 변수 및 상수를 선언하고 콘솔 패널에 출력
//   - var, let / const
//   - 변수는 값을 다시 할당할 수 있음
//   - 변수는 값 할당 없이, 선언만 가능
//   - 상수는 값을 다시 할당할 수 없음
//   - 상수는 선언과 할당이 모두 필요
//   - 변수, 상수 모두 여러 개를 동시 선언 가능
// * 변수 이름 작성 규칙
//   - 문자, 숫자, 기호(_, $)만 사용 가능
//   - 숫자로 시작할 수 없음
// * 변수 이름 작성 형식
//   - variablename → 소문자(lowercase) 
//   - VARIABLENAME → 대문자(UPPERCASE) 
//   - variable_name → 스네이크케이스(snake_case)
//   - variableName → 카멜케이스(camelCase) 
//   - VariableName → 파스칼케이스(ParscalCase)
//   - variable-name → 케밥케이스(kebab-case) ❌ 사용 못함
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// let을 사용한 변수 선언
// --------------------------------------------------------------------------

// 변수 선언과 동시에 값 할당

//변수 선언 (한국어, 현업에서는 권장하지 않음)
let 가지고_있는_사과_개수 = 4
let 추가_구매한_사과_개수 = 27

//변수 선언(영어, 현업에서 권장함)
let initialApples = 4
let init_apple_count = 27

console.log('가지고_있는_사과_개수:', 가지고_있는_사과_개수)
console.log('추가_구매한_사과_개수:', 추가_구매한_사과_개수)
console.log('initialApples:', initialApples)
console.log('init_apple_count:', init_apple_count)

// truthy ❌
// 변수 이름으로 truthy를 사용하면 ✅
let truthy = true
let falsy = false
let yes = true
let no = false
let 할게요 = true
let 안할게요 = false

console.log('truthy: ', truthy)
console.log('falsy: ', falsy)
console.log('yes: ', yes)
console.log('no: ', no)
console.log('할게요: ', 할게요)
console.log('안할게요: ', 안할게요)

// 변수 값 재할당 가능
truthy = false
console.log('truthy 변수에 재할당된 값:',truthy)

// 선언만 하고 나중에 할당
let gamePlayer  //변수 선언
gamePlayer = '라모스' //해당 값을 할당
console.log('선언 후 나중에 할당한 값:',gamePlayer)

// 여러 변수 동시 선언
// let width = 290
// let height = 842
//여러 번수 선언만 (값 없이)
let screen_width, screen_height

//이후에 선언된 변수에 값 할당
screen_width = 290
screen_height = 842
console.log('screen_width =', screen_width)
console.log('screen_height =', screen_height)


// --------------------------------------------------------------------------
// const를 사용한 상수 선언
// --------------------------------------------------------------------------

// 상수 선언과 동시에 값 할당 (필수!)
// 상수는 uppercase를 사용하여 입력한다.
const 상수 = '고정된 값'
console.log(상수)
// 상수는 재할당 불가능
// ❌ 에러 발생! TypeError: Assignment to constant variable.


// 상수는 선언과 동시에 할당 필수
// ❌ 에러 발생! SyntaxError: Missing initializer

// 여러 상수 동시 선언
const MIN_VALUE = 10, MAX_VALUE = 100
console.log(MIN_VALUE, MAX_VALUE)


// --------------------------------------------------------------------------
// var를 사용한 변수 선언 (사용 권장 안함)
// --------------------------------------------------------------------------

// var 변수 선언
var incrementCount = 9
console.log(incrementCount)


// var는 재선언 가능 (문제가 될 수 있음)
// ✅ 에러 없음 (하지만 위험!)
var incrementCount = 21
console.log(incrementCount)

// let은 재선언 불가능
// ❌ 에러 발생! SyntaxError


// --------------------------------------------------------------------------
// 변수 이름 작성 규칙
// --------------------------------------------------------------------------

// ✅ 올바른 변수 이름
let cross_meter
let fontSize
let px2rem
let $dollor
let _private
let unit25cm


// ❌ 잘못된 변수 이름 (주석 처리)
// * 공백 사용 불가
// let cross meter
// * _,$를 제외한 특수문자(-, #, @ 등) 사용 불가
// let font-size
// let @at
// let #em
// * 숫자로 시작 불가
//let 26cm
// * 예약어 사용 불가
//let break = '부숴!'



// --------------------------------------------------------------------------
// 변수 이름 작성 형식 (네이밍 컨벤션: Naming Convention)
// --------------------------------------------------------------------------

// 소문자 (lowercase) - 간단한 변수
let email

// 대문자 (UPPERCASE) - 상수
let ADMIN_ROLE
let BONUS_POINT = 100

// 스네이크 케이스 (snake_case) - 변수 이름 권장
let margin_block_start
let user_name

// 카멜 케이스 (camelCase) - 변수 또는 함수 이름 권장
let paddingInlineEnd, userName

// 파스칼 케이스 (PascalCase) - 클래스, 생성자
let SuperMario, ShoppingCart

// 케밥 케이스 (kebab-case) - JavaScript에서 사용 불가 ❌
// ❌ 에러 발생!
//let text-decoration

// --------------------------------------------------------------------------
// 사용자 정보 관리
// --------------------------------------------------------------------------

// 사용자 기본 정보 (let 사용 - 변경 가능)
// * 이름
// * 나이
// * 이메일

// 정보 업데이트

// 시스템 설정 (const 사용 - 변경 불가)
// * 시스템 이름
// * 시스템 버전
// * 최대 로그인 시도 횟수
// * 세션 타임아웃


// --------------------------------------------------------------------------
// 쇼핑몰 상품 관리
// --------------------------------------------------------------------------

// 상품 정보 (변경 가능한 변수)
// * 상품 이름
// * 상품 가격
// * 상품 재고
// * 상품 카테고리

// 시스템 상수 (변경 불가)
// * 부가세 10%
// * 무료배송 기준 40,000원
// * 최소 주문 금액 10,000원


// --------------------------------------------------------------------------
// let vs const 선택 가이드
// --------------------------------------------------------------------------

// const 사용
// 변경할 필요 없는 값

// let 사용
// 값이 변경될 수 있는 값


// --------------------------------------------------------------------------
// 실습 문제
// --------------------------------------------------------------------------

// 문제 1: 학생 정보를 저장하는 변수를 만드세요.
// - 이름 (변경 가능)
// - 학년 (변경 가능)
// - 학번 (변경 불가)
// - 학교 이름 (변경 불가)
const STUDENT_ID = '123456'
const SCHOOL_NAME = '멋쟁이 사자처럼 스쿨'
let studentName = '장예지'
let studentGrade = '3학년'

console.log(studentName, studentGrade, SCHOOL_NAME, STUDENT_ID)

// 문제 2: 도서관 책 정보를 저장하는 변수를 만드세요.
// - 책 제목 (변경 불가)
// - 저자 (변경 불가)
// - 대출 가능 여부 (변경 가능)
// - 대출 횟수 (변경 가능)

const BOOK_TITLE = '자바스크립트 16기 학습 노트'
const AUTHOR = '멋쟁이 사자처럼'
let canBorrow = true
let borrowCount = 4
console.log(
`도서명 : ${BOOK_TITLE} \n`,
`저자 : ${AUTHOR} \n`,
`대출 가능 여부 : ${canBorrow} \n`, 
`대출 횟수 : ${borrowCount}, 회`,
)

// 문제 3: 온라인 쇼핑몰 장바구니를 만드세요.
// - 상품명 (변경 불가)
// - 가격 (변경 불가)
// - 수량 (변경 가능)
// - 총 금액 (변경 가능)

const PRODUCT_NAME = '자바스크립트 학습서'
const PRODUCT_PRICE = 20000
let productCount = 5
let totalPrice = PRODUCT_PRICE * productCount

console.log('상품명:',PRODUCT_NAME)
console.log('가격:',PRODUCT_PRICE,'원')
console.log('수량:',productCount)
console.log('총 금액:',totalPrice,'원')


// --------------------------------------------------------------------------
// 요약 및 베스트 프랙티스
// --------------------------------------------------------------------------

/*
✅ let vs const 선택 가이드
1. 기본적으로 const 사용 (변경하지 않을 값)
2. 값이 변경되어야 할 때만 let 사용
3. var는 사용하지 않기 (구식, 문제 많음)

✅ 변수 이름 규칙
1. 의미 있는 이름 사용 (x, y 대신 user_name, totalPrice)
2. 카멜케이스 사용 (JavaScript 표준)
3. 상수는 대문자와 언더스코어 (MAX_COUNT, API_KEY)
4. 숫자로 시작 불가
5. 예약어 사용 불가

✅ 좋은 예시
const MAX_USERS = 100
const API_URL = 'https://api.example.com'
let current_user = 'hong@89'
let itemCount = 0

❌ 나쁜 예시
var x = 100               // 의미 없는 이름, var 사용
let user-name = 'hong@89' // 케밥케이스 사용 불가
let 1user = 'kim'         // 숫자로 시작 불가
*/