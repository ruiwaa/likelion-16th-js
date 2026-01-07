// --------------------------------------------------------------------------
// 실습: 타입 변환
// --------------------------------------------------------------------------
// * 문자 → 숫자(정수) 변환
// * 문자 → 실수(소수) 변환
// * 숫자 → 문자 변환
// * 숫자 → 불리언 변환
// * 문자 → 불리언 변환
// * 숫자가 아님(NaN)
// * NaN 확인
// * Falsy 값 (6가지)
// * 권장 사항
// --------------------------------------------------------------------------


const LAST_YEAR = '2025년', 
      CURRENT_YEAR = '2026', 
      NEXT_YEAR = 2027,
      PI = '3.141592',
      RATING = '9.24점'


// --------------------------------------------------------------------------
// 문자 → 숫자(정수) 변환
// --------------------------------------------------------------------------
// * parseInt(str): 정수 변환 (앞에서부터 숫자 추출)
// * Number(str): 순수 숫자 문자열만 변환
// * +str: Number(str)과 동일 결과 출력
// --------------------------------------------------------------------------

// 출력 결과: '2025년' → 2025
console.log(parseInt(LAST_YEAR))

// 출력 결과: '2026' → 2026
//전역(Global scope) 함수(내장)
console.log(parseInt(LAST_YEAR, 10) + 1 + '년')

console.log(parseInt('1280px',10) + 5 + 'px')
console.log(parseInt('4rem',10) + 5 + 'rem')
// 단위를 제거하여, 값을 추가 연산하도록 하게 할 수 있다.
// parseInt() 안에 10진수를 넣어주는 걸 권장한다.

console.log(parseInt('123abc')) // 123 (앞의 숫자만 추출)
console.log(parseInt('abc123')) // NaN (숫자로 시작하지 않음)
console.log(parseInt('12.34'))  // 12 (정수 부분만)


// * Number(str): 순수 숫자 문자열만 변환
const n1 = '1274', n2 = '1274년', n3 ='1247.457'

console.log(Number(n1))
console.log(Number(n2)) //문자와 결합되어 있기 때문에 출력 안됨
console.log(Number(n3))

const a1 = '1', a2 = '2', a3 = '3'

// 단항 연산자를 활용하여 number() 값과 동일한 값 출력 가능, 하지만 명시적이지 않음.
console.log('1' + '2' + '3')
console.log(a1 + a2 + a3)
console.log(Number(a1) + Number(a2) + Number(a3))
console.log(+a1 + +a2 + +a3)

// --------------------------------------------------------------------------
// 문자 → 실수(소수) 변환
// --------------------------------------------------------------------------
// * parseFloat(str): 실수 변환
// --------------------------------------------------------------------------

// 출력 결과: '3.141592' → 3.141592
console.log(parseFloat('3.141592'))

// 출력 결과: '9.24점' → 9.24
console.log(parseFloat('9.24점'))

// --------------------------------------------------------------------------
// 숫자 → 문자 변환
// --------------------------------------------------------------------------
// * String(num): 함수
// * num + '': 빈 문자 더하기
// * num.toString(radix?): 메서드 (진법 변환 가능)
// --------------------------------------------------------------------------

// 출력 결과: 2027 → '2027'
console.log(NEXT_YEAR)
console.log(String(NEXT_YEAR)) //string(num) 함수
console.log(NEXT_YEAR + '') //빈문자열 더하기
console.log(NEXT_YEAR.toString()) //num.toString(radix?)


// 출력 결과: 2027 → '2027년'
console.log(2027 + '년')

// 빈 문자 더하기를 활용한 실생활 활용 예시
const temperature = 25
const humidity = 60
console.log(temperature + '°C')  // '25°C'
console.log(humidity + '%')      // '60%'


// * num.toString(radix?): Method (진법 변환 가능)
// 출력 결과: 255 → '11111111' (2진수)
const number = 255
// 숫자 -> 문자열 변환(기본기능)
console.log(number.toString())     // '255' (10진수)

// 진법 변환 (2진수)
console.log(number.toString(2))    // '11111111' (2진수)

console.log(number.toString(16))    // 'ff' (16진수) (진법 변환을 활용해 색깔을 설정할 수도 있음)
console.log(number.toString())     // '255' (10진수)

// 색상 값(일상, 10진수) → 색상 코드(컴퓨터, 16진수) 변환
const red = 255, green = 120, blue = 30

let hexCode = '#'
const redHexValue = red.toString(16).padStart(2,'0')
console.log(redHexValue)
const greenHexValue = green.toString(16).padStart(2,'0')
console.log(greenHexValue)
const blueHexValue = blue.toString(16).padStart(2,'0')
console.log(blueHexValue)

// 복합 할당 연산자 (+=)
// hexCode = hexCode + redHexValue
hexCode += redHexValue
hexCode += greenHexValue
hexCode += blueHexValue

// 출력 결과 (예시): '#ff8000'
console.log(hexCode)
// 출력 결과: 255 → 'ff' (16진수)

// 다른 방법
//const tempHexCode = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')
//console.log(tempHexCode)

// --------------------------------------------------------------------------
// 숫자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(num): 0은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: 0 → false

// 출력 결과: 1 → true

// 출력 결과: -1 → true

// 출력 결과: 0.1 → true

// 출력 결과: -0.1 → true


// --------------------------------------------------------------------------
// 문자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(str): ''은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: '' → false

// 출력 결과: ' ' → true

// 출력 결과: '0' → true


// --------------------------------------------------------------------------
// 숫자가 아님(NaN): 숫자 연산 실패 시, 생성
// --------------------------------------------------------------------------
// * Math.sqrt(-1)
// * 숫자 + NaN
// * undefined + undefined
// * 문자를 숫자로 나누기
// * Number(str), parseInt(str), parseFloat(str)
// * 0 / 0
// * Infinity - Infinity
// --------------------------------------------------------------------------

// 출력 결과: Math.sqrt(-1) → NaN

// 출력 결과: 숫자 + NaN → NaN

// 출력 결과: undefined + undefined → NaN

// 출력 결과: 문자 / 숫자 → NaN

// 출력 결과: Number(str) → NaN

// 출력 결과: parseInt(str) → NaN

// 출력 결과: parseFloat(str) → NaN

// 출력 결과: 0 / 0 → NaN

// 출력 결과: Infinity - Infinity → NaN


// --------------------------------------------------------------------------
// NaN 확인
// --------------------------------------------------------------------------
// * typeof 연산자 ('number' 반환) ⚠️
// * isNaN(): 타입 변환 후 판단 (부정확) ⚠️
// * Number.isNaN(): 진짜 NaN만 판단 (정확) ✅
// --------------------------------------------------------------------------

// 출력 결과: typeof NaN → 'number' (⚠️ NaN이지만, number 타입으로 인식)

// 출력 결과: isNaN(1) → false (✅ NaN 아님)

// 출력 결과: isNaN('3') → false (✅ NaN 아님)

// 출력 결과: isNaN([]) → false (✅ NaN 아님)

// 출력 결과: isNaN(null) → false (✅ NaN 아님)

// 출력 결과: isNaN(NaN) → true (✅ NaN 맞음)

// 출력 결과: isNaN('3n') → true (⚠️ NaN 맞음? 부정확한 이유: 타입 변환 후, 검사)

// 출력 결과: isNaN(undefined) → true (⚠️ NaN 맞음?)

// 출력 결과: isNaN({}) → true (⚠️ NaN 맞음?)

// 출력 결과: Number.isNaN('3n') → false (✅ NaN 아님, 정확한 이유: 타입 변환 없이 검사)

// 출력 결과: Number.isNaN(undefined) → false (✅ NaN 아님)

// 출력 결과: Number.isNaN({}) → false (✅ NaN 아님)


// --------------------------------------------------------------------------
// Falsy & Truthy
// --------------------------------------------------------------------------
// * Falsy 값 (6가지): 0, '', false, null, undefined, NaN
// * 나머지 값은 모두 Truthy
// --------------------------------------------------------------------------

// 출력 결과: 0 → false

// 출력 결과: '' → false

// 출력 결과: false → false

// 출력 결과: null → false

// 출력 결과: undefined → false

// 출력 결과: NaN → false


// --------------------------------------------------------------------------
// 권장 사항
// --------------------------------------------------------------------------
// * 문자 변환: String() 또는 toString()
// * 숫자 변환: Number() 또는 parseInt()/parseFloat()
// * NaN 확인: Number.isNaN() 사용
// --------------------------------------------------------------------------