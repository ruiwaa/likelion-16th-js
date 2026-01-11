

const BOOK_PAGE = '256쪽'     // 책 페이지 수
const SHELF_NUMBER = '12'    // 서가 번호
const BOOK_COUNT = 145       // 보유 도서 수
const BOOK_PRICE = '18500원' // 책 가격
const BOOK_RATING = '4.5점'  // 도서 평점
const LOAN_PERIOD = '14'    // 대출 기간


// --------------------------------------------------------------------------
// 연습 문제: 문자 → 숫자 변환
// --------------------------------------------------------------------------

// parseInt()를 사용해서 BOOK_PAGE를 숫자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
console.log(parseInt(BOOK_PAGE), typeof(parseInt(BOOK_PAGE)))


// Number()를 사용해서 SHELF_NUMBER를 숫자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
console.log(Number(SHELF_NUMBER), typeof(Number(SHELF_NUMBER)))


// + 연산자를 사용해서 LOAN_PERIOD를 숫자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
const loan_period = +LOAN_PERIOD
console.log('loan_period =', loan_period, typeof loan_period)

// --------------------------------------------------------------------------
// 연습 문제: 숫자 → 문자 변환
// --------------------------------------------------------------------------

// toString()을 사용해서 BOOK_COUNT를 문자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
let bookCount = BOOK_COUNT.toString()
console.log(bookCount, typeof(bookCount))

// String()을 사용해서 BOOK_COUNT를 문자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
bookCount = String(BOOK_COUNT)
console.log(bookCount, typeof(bookCount))


// 빈 문자('')를 더해서 BOOK_COUNT를 문자로 변환하고, 변환된 값과 값의 타입을 확인합니다.
bookCount = BOOK_COUNT + ''
console.log(bookCount, typeof(bookCount))

// --------------------------------------------------------------------------
// 연습 문제: 문자 → 실수 변환
// --------------------------------------------------------------------------

const PRICE = '81.56만원'
const RATING = '4.8점'

// parseFloat()를 사용해서 PRICE를 실수로 변환하고, 변환된 값과 값의 타입을 확인합니다.
let price = parseFloat(PRICE)
console.log(price, typeof(price))


// parseFloat()를 사용해서 RATING을 실수로 변환하고, 변환된 값과 값의 타입을 확인합니다.
let rating = parseFloat(RATING)
console.log(rating, typeof(rating))

// --------------------------------------------------------------------------
// 연습 문제: 숫자 → 불리언 변환
// --------------------------------------------------------------------------

const STOCK = 10
const SOLD_OUT = 0

// Boolean()을 사용해서 STOCK을 불리언으로 변환하고, 변환된 값과 값의 타입을 확인합니다.
let stock = Boolean(STOCK)
console.log(stock, typeof(stock))

// Boolean()을 사용해서 SOLD_OUT을 불리언으로 변환하고, 변환된 값과 값의 타입을 확인합니다.
let soldOut = Boolean(SOLD_OUT)
console.log(soldOut, typeof(soldOut))

// --------------------------------------------------------------------------
// 연습 문제: Falsy 값 → 불리언 변환
// --------------------------------------------------------------------------

// 다음 값들을 Boolean()으로 변환하고 결과를 예측하세요.

// Boolean(0)           // 예측: false
// Boolean('')          // 예측:false
// Boolean(false)       // 예측:false
// Boolean(null)        // 예측:false
// Boolean(undefined)    // 예측:false
// Boolean(NaN)         // 예측:false


// 위 코드의 실제 결과를 확인하세요.
console.log(Boolean(0)         )  // 예측: false
console.log(Boolean('')        )  // 예측:false
console.log(Boolean(false)     )  // 예측:false
console.log(Boolean(null)      )  // 예측:false
console.log(Boolean(undefined) )   // 예측:false
console.log(Boolean(NaN)       )  // 예측:false


// --------------------------------------------------------------------------
// 연습 문제: 숫자가 아님(NaN)
// --------------------------------------------------------------------------


// Math.sqrt(-1)을 사용해서 NaN을 만드세요.
console.log(Math.sqrt(-1))

// 1 + NaN을 사용해서 NaN을 만드세요.
console.log(1 + NaN)

// undefined + undefined를 사용해서 NaN을 만드세요.
console.log(undefined + undefined)


// '안녕' / 2를 사용해서 NaN을 만드세요.
console.log( '안녕' / 2)


// --------------------------------------------------------------------------
// 연습 문제: NaN 확인
// --------------------------------------------------------------------------


const INVALID_NUMBER = '안녕' * 3

// typeof 연산자로 INVALID_NUMBER의 타입을 확인하세요.
// (힌트: NaN도 'number' 타입입니다!)
console.log(typeof INVALID_NUMBER)

// Number.isNaN()을 사용해서 INVALID_NUMBER가 NaN인지 확인하세요.
console.log(Number.isNaN(INVALID_NUMBER))

// --------------------------------------------------------------------------
// 연습 문제: 상품 가격 변경
// --------------------------------------------------------------------------

const PRODUCT_PRICE = '50000원'

// 상품 가격(문자열)을 숫자로 변환하고 10% 할인된 가격을 계산한 후, '원'을 붙여 출력하세요.
let productPrice = parseInt(PRODUCT_PRICE) - (parseInt(PRODUCT_PRICE)  * 0.1) + '원'
console.log(productPrice)