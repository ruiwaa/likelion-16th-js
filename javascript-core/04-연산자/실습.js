// --------------------------------------------------------------------------
// 실습: 연산자
// --------------------------------------------------------------------------
// * 산술 연산자 (Arithmetic Operators)
// * 할당 연산자 (Assignment Operators)
// * 논리 연산자 (Logical Operators)
// * 비교 연산자 (Comparison Operators)
// --------------------------------------------------------------------------

let data = 80 
console.log(data)


// --------------------------------------------------------------------------
// [산술 연산] 기본 사칙연산
// --------------------------------------------------------------------------

// 덧셈 (+)
console.log(3 + 9)

// 뺄셈 (-)
console.log(9 - 3)
// 곱셈 (*)
console.log(9 * 3)
// 나눗셈 (/)
console.log(9 / 3)
// 나머지 (%)
console.log(9 % 3)
console.log(8 % 3)
console.log();

// --------------------------------------------------------------------------
// [산술 연산] 나머지 연산자 활용
// --------------------------------------------------------------------------

// 짝수/홀수 판별
console.log(13 % 2) // 홀수
console.log(12 % 2) // 짝수
console.log(11 % 2) // 홀수


// 3의 배수 확인
console.log(9 % 3)
console.log(18 % 3)

// 시계 계산 (12시간 형식. 예: 오후 3시)
console.log(10 % 12)
//시간이 12를 넘어가면 다시 1부터 시작해야 해서, % 12로 12를 기준으로 순환시키는 거임


// --------------------------------------------------------------------------
// [산술 연산] 문자열 연결
// --------------------------------------------------------------------------

// 문자열 + 문자열

// 문자열 + 숫자 (숫자가 문자열로 변환됨)

// 숫자 + 문자열


// --------------------------------------------------------------------------
// [산술 연산] 거듭제곱
// --------------------------------------------------------------------------

// 거듭제곱 (**)
// 8 (2의 3승)
console.log(2 ** 3);
// 9 (3의 2승)
console.log(3 ** 2);

//수학(Math) 객체
console.log(Math.pow(2, 10)); //Math 객체를 이용하여 거듭제곱을 나타낼 수도 있다.

//복리 계산
const principal = 1_000_000  // 원금 100만원
const rate = 0.5            // 연 50% 이자율
const years = 3              // 3년
const amount = principal * (1 + rate) ** years // 원금 * (1 + 이자율)몇년간(거듭제곱)
console.log(amount);
/* 공식:
n년 후 = 원금 × (1 + 이자율)ⁿ
*/



// --------------------------------------------------------------------------
// [산술 연산] 할당 연산자
// --------------------------------------------------------------------------

let x = 10
console.log(x)


// 기본 할당
x = 8
console.log(x)

// 더한 후, 할당
// x = x +10
//복합 할당 연산자 (할당  + 산술 연산자)
x += 2
console.log(x)

// 뺀 후, 할당
// x = x- 10
//복합 할당 연산자 (할당  + 산술 연산자)
x -= 5
console.log(x)

// 곱한 후, 할당
//x = x * 5
//복합 할당 연산자 (할당  + 산술 연산자)
x *= 5
console.log(x)

// 나눈 후, 할당
x//  = x / 2
//복합 할당 연산자 (할당  + 산술 연산자)
x /= 2
console.log(x)

// 나머지 후, 할당
// x = x % 3
//복합 할당 연산자 (할당  + 산술 연산자)
x %= 5
console.log(x)

// 거듭제곱 후, 할당
// x = x ** 3
//복합 할당 연산자 (할당  + 산술 연산자)
x **= 3
console.log(x)

// --------------------------------------------------------------------------
// [산술 연산] 증가/감소 연산자
// --------------------------------------------------------------------------

/**
 * 증가(++) 연산자
 * 감소(--) 연산자
 * ⚠️ 주의 !! 전위/후위 위치에 따라 작동 방식이 달라짐!
 */

let count = 3
console.log(count)

// 후 증가 (Post-increment)
//count = count + 1
count++  //count = 3 //후위 연산자(다음 라인에서 1 씩 증가/감소)
console.log(count);

// 전 증가 (Pre-increment)
console.log(++count)
console.log(count)

// 후 감소 (Post-decrement)
console.log(count--)
console.log(count)

// 전 감소 (Pre-decrement)
console.log(--count)
console.log(count)

// --------------------------------------------------------------------------
// [할당 연산] 점수 누적
// --------------------------------------------------------------------------
let totalScore = 0
totalScore += 70
totalScore += 85
console.log(totalScore)

// [할당 연산] 재고 감소
let stock = 100
// console.log(stock)

// [할당 연산] 가격 인상
let price = 10000
// console.log(price)

// --------------------------------------------------------------------------
// 문자열 연결
//

// 문자열 + 문자열
const 성 = '장'
const 이름 = '예지'
console.log(성 + 이름);

// 문자열 + 숫자 (숫자가 문자열로 변환됨)
const greetingMessage = '안녕'
const myFavoriteNumber = '9'
let result = greetingMessage + myFavoriteNumber
// const result = '안녕' + 9 //숫자 데이터를 이때 자바스크립트가 문자화시킴
// -> const result = '안녕!9'
console.log(result, typeof result)

//  숫자 + 문자열
result = myFavoriteNumber + greetingMessage
console.log(result, typeof result)


// --------------------------------------------------------------------------
// [논리 연산] AND (&&)
// --------------------------------------------------------------------------

// X && Y (X 그리고 Y)
// 모든 조건이 true여야 true

// 예제: 로그인 & 권한 검증
let is_logged_in = false
let has_permission = false
// 로그인 ❌ 권한 ❌ 출력 결과: false
console.log(is_logged_in && has_permission)
// 로그인 ✅ 권한 ❌ 출력 결과: false
is_logged_in = true
console.log(is_logged_in && has_permission)
// 로그인 ❌ 권한 ✅ 출력 결과: false
is_logged_in = false
has_permission = true
console.log(is_logged_in && has_permission)
// 로그인 ✅ 권한 ✅ 출력 결과: true
is_logged_in = true
has_permission = true
console.log(is_logged_in && has_permission)

// --------------------------------------------------------------------------
// [논리 연산] OR (||)
// --------------------------------------------------------------------------


// X || Y (X 또는 Y)
// 조건 중 하나만 true여도 true

// 예제: 이상형 확인
let is_handsome = false
let is_rich = false
// 잘생김 ❌ 부자 ❌ 출력 결과: false
is_handsome = false
is_rich = false
console.log(is_handsome || is_rich)
// 잘생김 ❌ 부자 ✅ 출력 결과: true
is_handsome = false
is_rich = true
console.log(is_handsome || is_rich)
// 잘생김 ✅ 부자 ❌ 출력 결과: true
is_handsome = true
is_rich = false
console.log(is_handsome || is_rich)
// 잘생김 ✅ 부자 ✅ 출력 결과: true
is_handsome = true
is_rich = true
console.log(is_handsome || is_rich)


// --------------------------------------------------------------------------
// [논리 연산] NOT (!)
// --------------------------------------------------------------------------

// 반대로 변환
let truthy = true
let reverse_truthy =!truthy
console.log(reverse_truthy)
// 출력 결과: false
let falsy = false
let reverse_falsy =!falsy
console.log(reverse_falsy)
// 출력 결과: true


// 예제: 로그인 상태 반전
let is_logged_out = !is_logged_in
console.log(is_logged_out)
// 출력 결과: is_logged_in 값 반전

// 이중 부정 (!!) - boolean 변환 (Boolean() 대체)
console.log(Boolean('자바스크립트'))
console.log(!!('자바스크립트'))

// '' 변환 출력 결과: false
console.log(Boolean(''))
console.log(!!'')

// ' ' 변환 출력 결과: true
console.log(Boolean(' '))
console.log(!!' ')

// 0 변환 출력 결과: false
console.log(Boolean(0))
console.log(!!0)

// '0' 변환 출력 결과: true
console.log(Boolean('0'))
console.log(!!'0')

// 1 변환 출력 결과: true
console.log(Boolean(1))
console.log(!!1)

// '1' 변환 출력 결과: true
console.log(Boolean('1'))
console.log(!!'1')

// null 변환 출력 결과: false
console.log(Boolean(null))
console.log(!!null)

// undefined 변환 출력 결과: false
console.log(Boolean(undefined))
console.log(!!undefined)

// --------------------------------------------------------------------------
// [비교 연산] 크기 비교
// --------------------------------------------------------------------------

// 숫자 비교
const a = 9, b = 4

// * 10이 5보다 큼
console.log(a > b)

// * 10이 5보다 작지 않음
console.log(a < b)

// * 10이 10보다 크거나 같음
console.log(a >= b)

// * 10이 5보다 작거나 같지 않음
console.log(a <= b)

// 문자열 비교 (사전순)
// * 'a', 'b' 비교
console.log('a' < 'b');

// * 'apple', 'banana' 비교
console.log('apple' < 'banana') 

// * 'A', 'a' 비교 (대문자가 소문자보다 작음)
console.log('A' < 'a')   //대문자가 소문자보다 작다  

console.log('a' > 'b') // 알파벳 순서 비교, a 뒷순서인 b가 더 크다
console.log('Z' > 'k') //대문자가 소문자보다 작다

const memberName = '김이현'
const partnerName = '이주인'
console.log(memberName < partnerName)  

// 문자열과 숫자 비교 (문자열이 숫자로 변환됨)
console.log('10' > 5)         // true (문자열 '10'이 숫자 10으로 변환됨)
// * '10'이 5보다 큼
console.log('100' < '20')       // true  ('1'과 '2'를 비교하므로)
// * '100'이 '20'보다 작음 (문자열끼리 비교하면 사전순!)


// --------------------------------------------------------------------------
// [비교 연산] 동등 비교 vs 일치 비교
// --------------------------------------------------------------------------
// * == (동등): 값만 비교 (타입 변환 후 비교)
0 == '0'

// 사용자가 작성한 코드
console.log(0 == '0')

//자바스크립트 엔진이 처리하는 코드
//console.log(0 == Number('0'))

// * === (일치): 타입과 값 모두 비교
0 === '0'
// 사용자가 작성한 코드
console.log(0 === '0')

//자바스크립트 엔진이 처리하는 코드
//console.log(0 === '0')

// --------------------------------------------------------------------------
// [비교 연산] 불일치 비교
// --------------------------------------------------------------------------
// * != (불일치): 값만 비교
console.log(5 != '5')      // false (타입 변환 후 같음)
console.log(5 != '6')      // true (타입 변환 후 다름)

// * !== (불일치): 타입과 값 모두 비교
console.log(5 !== '5')    // true (타입이 다름)
console.log(5 !== 5)   // false (타입과 값이 같음)

// --------------------------------------------------------------------------
// [논리 연산] 복합 조건
// --------------------------------------------------------------------------

// 예제: 할인 적용 조건
let is_member = true
let purchase_amount = 50000
// 멤버이고 구매 금액이 3만원 이상인 경우, 할인 적용
//멤버(true) 그리고(&&) b[구매 금액 >= 3e4]
let has_discount = is_member && (purchase_amount >=3e4)
console.log(has_discount)


// 예제: 접근 권한 조건
let is_admin = false
let is_owner = true
// 관리자이거나 주인인 경우, 접근 허용
let can_access = is_admin || is_owner
console.log(can_access);


// 예제: 신선 유지 온도 조건
let temperature = 25
// 온도가 18도 이상 26도 이하인 경우, 신선 유지
// 직접 평가 가능한 표현식으로 구현
// 조건 a, 조건 b
// 조건 a: 온도 >= 18 (temperature >= 18)
// 조건 b: 온도 <=26 (temperature <= 26)
let keep_fresh = temperature >= 18 && temperature <= 26
console.log(keep_fresh)


// --------------------------------------------------------------------------
// 연산자 우선 순위
// --------------------------------------------------------------------------
// 1. 괄호가 최우선
let result1 = (2 + 3) * 4  // 20
// 2. 곱셈/나눗셈이 덧셈/뺄셈보다 우선
let result2 = 2 + 3 * 4    // 14 (3 * 4를 먼저 계산)
// 3. 왼쪽에서 오른쪽으로
let result3 = 10 / 2 * 3   // 15 (10 / 2를 먼저, 그 다음 * 3)
// 4. 할당은 가장 나중
let y = 5 + 3 * 2          // x = 11 (5 + 6을 먼저 계산 후 할당)

console.log(result1, result2, result3, y)  // 20 14 15 11
// --------------------------------------------------------------------------
// 주의사항
// --------------------------------------------------------------------------
// * 문자열 + 숫자 (문자)
console.log('5' + 9)    // '53' (문자열 연결)
console.log(5 + '9')    // '53' (문자열 연결)
// * 다른 연산: 문자열 - 숫자 (숫자)
console.log('5' - 3)    // 2 (숫자 연산)
console.log('5' * 3)    // 15 (숫자 연산)
console.log('5' / 3)    // 1.6666... (숫자 연산)

// * 문제 해결 방법 (문자 → 숫자 변환 후 연산)
console.log(Number('5') + 3)  // 8
console.log(parseInt('5') + 3)  // 8
{
// * 증가, 감소 연산자 위치 (전/후)
let count = 5

// 전위: 먼저 증가/감소 후 사용
console.log(++count)  // 6 (count는 6이 됨)
console.log(count)    // 6

count = 5  // 초기화

// 후위: 먼저 사용 후 증가/감소
console.log(count++)  // 5 (출력 후 count가 6이 됨)
console.log(count)    // 6
}