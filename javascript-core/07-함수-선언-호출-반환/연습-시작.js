
// 현재 년도
const CURRENT_YEAR = 2026

// --------------------------------------------------------------------------
// 연습 문제: 제곱 계산기
// --------------------------------------------------------------------------
// 숫자 하나를 입력받아 그 수의 제곱(n * n)을 반환하는 함수를 만드세요.

// 1. 함수 선언 (함수명: square)
function square (n){
  return n ** 2
}

// 2. 함수 호출 및 결과 확인 (입력값: 12)
// 출력 결과: 144 (number)
let resultSquare = square(12)
console.log(square(12))


// --------------------------------------------------------------------------
// 연습 문제: 나이 계산 및 자기소개
// --------------------------------------------------------------------------
// 이름과 태어난 연도를 입력받아, 나이를 계산하고 소개 문구를 반환하는 함수를 만드세요.

// 1. 함수 선언 (함수명: introduce)
// 매개변수: name, birthYear
function introduce(name, birthYear){
  return '제 이름은 ' + name + '이고, ' + '올해 ' + birthYear + '살입니다. '
}

// 출력 결과 (예시): "제 이름은 박한영이고, 올해 26살입니다."
let resultIntro = introduce('박한영',26 )
console.log(resultIntro)

// --------------------------------------------------------------------------
// 연습 문제: 구매 가능 여부 판독기 (Boolean 반환)
// --------------------------------------------------------------------------
// 가진 돈(budget), 물건 가격(price), 개수(quantity)를 입력받습니다.
// 물건을 살 수 있으면 true, 돈이 부족하면 false를 반환하는 함수를 만드세요.
// 힌트: 비교 연산자의 결과 자체를 반환

// 함수 표현식으로 작성 (변수명: canBuy)
// 매개변수: budget, price, quantity
function canBuy(budget,price, quantity){
  const totalcost = price * quantity
  //if문없이 비교 연산 결과(참/거짓) 반환
  return budget >= totalcost
}
// 구매 가능한 경우 테스트
// 가진 돈: 10,000원, 가격: 3,000원, 개수: 3개
// 출력 결과: true (boolean)
let checkSuccess = canBuy(10000, 3000, 3)
console.log(checkSuccess)

// 구매 불가능한 경우 테스트
// 가진 돈: 5,000원, 가격: 2,000원, 개수: 3개
// 출력 결과: false (boolean)
let checkFail = canBuy(5000, 2000, 3)
console.log(checkFail)

// 연습 문제: 비교 연산자 활용하기
// --------------------------------------------------------------------------

// 문제 1: 성인 판별기
// 나이(age)를 입력받습니다.
// 18세 이상이면 true, 18세 미만이면 false를 반환하세요.
function isAdult(age) {
  return age >= 18
}


console.log(isAdult(20))  // 예상 결과: true
console.log(isAdult(18))  // 예상 결과: true
console.log(isAdult(17))  // 예상 결과: false


// 문제 2: 합격 여부 판정기
// 점수(score)를 입력받습니다.
// 80점 이상이면 true(합격), 80점 미만이면 false(불합격)를 반환하세요.
function isPassed(score) {
  return (score >= 80 && '합격') || '불합격'
}

console.log(isPassed(85))   // 예상 결과: true
console.log(isPassed(80))   // 예상 결과: true
console.log(isPassed(79))   // 예상 결과: false


// 문제 3: 키 제한 확인기 (놀이기구 탑승 여부)
// 키(height)를 입력받습니다.
// 키가 140cm 이상이면 true(탑승 가능), 140cm 미만이면 false(탑승 불가)를 반환하세요.
function canRide(height) {
  return (height >= 140 && '탑승 가능') || '탑승 불가'
}

console.log(canRide(150))   // 예상 결과: true
console.log(canRide(140))   // 예상 결과: true
console.log(canRide(135))   // 예상 결과: false


// 문제 4: 온도 안전 검사기
// 온도(temperature)를 입력받습니다.
// 온도가 -10도 이상 40도 이하면 true(안전), 범위 밖이면 false(위험)를 반환하세요.
// 힌트: 논리 연산자(&&)를 사용하여 두 조건을 모두 만족하는지 확인
function isSafeTemperature(temperature) {
  return (temperature >=  -10 &&  temperature <= 40 && '안전' )|| '위험'
}

console.log("\n=== 문제 4: 온도 안전 검사기 ===")
console.log(isSafeTemperature(25))    // 예상 결과: true
console.log(isSafeTemperature(-10))   // 예상 결과: true
console.log(isSafeTemperature(40))    // 예상 결과: true
console.log(isSafeTemperature(-15))   // 예상 결과: false
console.log(isSafeTemperature(45))    // 예상 결과: false


// 문제 5: 회원 할인 대상 판별기
// 회원 가입 개월 수(memberMonths)와 구매액(purchaseAmount)을 입력받습니다.
// 다음 중 하나 이상을 만족하면 true(할인 대상), 모두 만족하지 않으면 false를 반환하세요.
//  - 회원 기간이 12개월 이상
//  - 구매액이 100,000원 이상
// 힌트: 논리 연산자(||)를 사용하여 둘 중 하나라도 만족하는지 확인
function getDiscount(memberMonths, purchaseAmount) {
  return ( memberMonths >= 12 || purchaseAmount >= 100_000) &&'할인 대상'|| '할인 불가'
  
}

console.log("\n=== 문제 5: 회원 할인 대상 판별기 ===")
console.log(getDiscount(15, 50000))    // 예상 결과: true
console.log(getDiscount(8, 120000))    // 예상 결과: true
console.log(getDiscount(12, 100000))   // 예상 결과: true
console.log(getDiscount(10, 50000))    // 예상 결과: false