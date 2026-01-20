// --------------------------------------------------------------------------
// 실습: 배열 조작 (Array Manipulation)
// --------------------------------------------------------------------------
// * indexOf() : 손님의 방 번호(인덱스)를 찾는 탐지기
// * push / pop : 호텔 끝방(마지막) 관리
// * unshift / shift : 호텔 입구(처음) 관리
// * splice() : 장부 중간을 수정하는 만능 도구
// * slice() : 원본 보존을 위한 장부 복사본 생성
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 손님 위치 파악하기
// --------------------------------------------------------------------------

const guestList = ['지율', '상연', '야무', '범쌤']

// [퀴즈] '야무' 손님은 몇 번 방에 계실까요?
// [정답]: 2번방
console.log(guestList.indexOf('야무'))
console.log(guestList.indexOf('슬비'))

// 사용자 정의 함수 hasItem 또는 hasElment
function hasElment(arryObject, checkItem) {
const value = arryObject.indexOf(checkItem)
return value > -1 // -1이 나오는 것은 없다는 의미여서 -1이상이여야 값이 존재하는 것
}

// 테스트 코드
console.log(hasElment(guestList,'야무'))
console.log(hasElment(guestList,'슬비'))


// --------------------------------------------------------------------------
// 손님 관리 (Push, Pop, Unshift, Shift)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 앞방에 추가 (unshift)
// --------------------------------------------------------------------------
guestList.unshift('서현', '민주', '지호')
console.log(guestList)

// --------------------------------------------------------------------------
// 앞방에 제거 (shift)
// --------------------------------------------------------------------------
guestList.shift('서현')
guestList.shift('민주')
guestList.shift('지호')
console.log(guestList)

// 2. 입구(첫 번째) 손님 배웅하기
// '지율' 퇴실
// console.log('방금 체크아웃하신 분:', leavingGuest)

// --------------------------------------------------------------------------
// 끝방에 추가 (push)
// --------------------------------------------------------------------------
// 1. 끝방(마지막)에 새로운 손님 모시기
// ['지율', '상연', '야무', '범쌤', '심선생님']
guestList.push('심선생님', '슬비쌤')
console.log(guestList)


// 끝방에 제거 (pop)
// --------------------------------------------------------------------------
guestList.pop('슬비쌤')
guestList.pop('심선생님')
console.log(guestList)


// --------------------------------------------------------------------------
// 만능 도구 splice()로 장부 중간 수정하기
// --------------------------------------------------------------------------
// 공식: splice(시작_인덱스, 제거_개수, 추가_할_항목)

const numbers = [1, 2, 5]

// 중간(인덱스 2)에 3, 4를 추가하고 싶다면?
numbers.splice(2, 0, 3, 4) // (시작 인덱스: 2, 제거할 개수: 없음, 추가할 항목: 3,4)
console.log(numbers)

// const lastNumber = numbers.pop()
// console.log(lastNumber)
// numbers.push(3,4,lastNumber)
// console.log(numbers)

console.log('장부 중간 수정 결과:', numbers) // [1, 2, 3, 4, 5]

// 배열의 끝에서 [n]개 제거하는 함수(기능) 구현
// removeItemsFromLast
// function removeItemsFromLast(count) {
//   // 코드 로직 작성
// }
const removeItemsFromLast = function(objectArray, deleteNum){
  const startIndex = objectArray.length - deleteNum // 항목 개수에서 - 삭제 숫자 = 끝 부분의 항목 순서이다. 
  const removedItems = objectArray.splice(startIndex, deleteNum)
  return removedItems
}
console.log(removeItemsFromLast(numbers, 1))

// 특정 구간(인덱스 1부터 3개)의 손님을 배웅하려면?
// [2, 3, 4] 제거
numbers.splice(1, 3)
console.log('남은 장부:', numbers) // [1, 5]

// 마지막 인덱스 제거 : [5] 제거
numbers.splice(numbers.length -1, 1) // 안전하게 끝자리 순서 입력: length + (음수값) 활용
console.log(numbers)



 // 삭제된 항목이 포함된 새로운 배열 [2, 3, 4]

// 처음과 끝부분의 제거 메서드를 사용해서 중간값 제거하는 방법
// 0 인덱스부터 시작해서 2개 제거
// numbers 배열에서 1, 2 항목(0, 1인덱스) 제거
// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// const removedNumbers = numbers.splice(0, 2)
// console.log(removedNumbers)
// console.log(numbers)

// 마지막 인덱스 - 3에서 3개 제거
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)

// --------------------------------------------------------------------------
// 안전한 백업 장부 만들기 (slice)
// --------------------------------------------------------------------------

const originalLog = ['데이터1', '데이터2', '데이터3']
let backupLog = originalLog.slice(0)// 원본과 똑같은 사본 생성

originalLog.splice(originalLog.length - 2, 2)

// 사본(배열)에 끝에 '데이터4' 추가
backupLog.push('데이터4')

// 사본을 수정해도 원본은 안전합니다. (불변성 유지)
console.log('원본 장부:', originalLog) 
console.log('백업 장부:', backupLog)


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. indexOf는 원시 값(문자, 숫자)을 찾을 때 최적입니다.
// 2. splice는 원본 배열을 직접 수정(Mutable)하므로 주의해서 사용해야 합니다.
// 3. slice는 원본을 건드리지 않고 새로운 배열을 반환(Immutable)합니다.
// 4. 배열의 시작 조작(unshift, shift)은 끝 조작(push, pop)보다 컴퓨터에게 더 힘든 작업입니다.
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 린터(Linter) 점검 실습: 아래 코드의 '잠재적 버그'를 예측해보세요.
// --------------------------------------------------------------------------

const fruits = ['사과', '바나나']
console.log(fruits)


// ⚠️ 린터가 'no-unused-vars' 경고를 보낼 수 있습니다.
const lastFruit = fruits.pop()
console.log(lastFruit)



// 만약 pop()을 한 번 더 실행한다면, fruits는 어떤 상태가 될까요?


// --------------------------------------------------------------------------
// 실습
// --------------------------------------------------------------------------

const people = [
  '세종대왕',
  '이순신',
  '김구',
  '유관순',
  '장영실',
  '신사임당',
]

// 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
console.log(people.indexOf('이순신'))

// 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다. 
// unshift() 활용
people.unshift('정약용', '지석영')
// splice() 활용
//people.splice(people.length, 0 ,'정약용','지석영')
//console.log(people)

//3.people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다. 
// push() 활용
//people.push('김유신', '을지문덕')
console.log(people)
// splice() 활용
people.splice(people.length, 0 , '정약용','을지문덕')
console.log(people)

// 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
people.splice(people.length - 8, 2)
console.log(people);

// 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
people.splice(people.length - 4, 2)
console.log(people)


// --------------------------------------------------------------------------
// 연습 문제
// --------------------------------------------------------------------------

/**
1. push() 연습 문제
초급: 빈 배열 colors를 만들고, push를 사용해 "red", "blue"를 순서대로 추가한 뒤의 배열 상태를 적으세요.
중급 1: const nums = [1, 2, 3]; 이 있을 때, nums.push(4, 5)를
실행한 후 변수 nums의 값과 이 식 자체가 반환하는 값(Return value)은 각각 무엇일까요?

 */
// Q1
const color = []
color.push("red", "blue")
console.log(color)

// Q2
const nums = [1, 2, 3]
nums.push(4,5)
console.log(nums)

/*
 * unshift() 연습 문제
초급: const grades = ["B", "C"]; 배열 맨 앞에 "A"를 추가하는 코드를 작성하세요.
중급 1: const site = ["Naver"];에 unshift("Google", "Daum")을 실행하면 배열의 순서가 어떻게 될까요? ("Google"과 "Daum" 중 무엇이 맨 앞일까요?)
중급 2: unshift는 요소를 추가한 후 무엇을 반환하는지 적어보세요.
 */

// Q3
const grades = ['B', 'C']
grades.unshift('A')
console.log(grades)

const site = ['Naver']
site.unshift( 'Google', 'Daum')
console.log(site)


/*
 * 4. shift() 연습 문제
초급: ["월", "화", "수"] 배열에서 맨 앞의 "월"을 제거하세요.
중급 1: const queue = ["1번", "2번", "3번"];에서 맨 앞 요소를 꺼내 nowServing이라는 변수에 담고, 남은 배열의 길이를 확인하세요.
중급 2: shift()와 pop()의 공통점과 차이점을 "인덱스 변화"의 관점에서 설명해보세요.
 */

// Q4
const week = ["월", "화", "수"] 
week.shift('월')
console.log(week)

// Q5
const queue = ["1번", "2번", "3번"]
const queueFirstItem = queue.shift('1번')
console.log(queueFirstItem)

console.log(queue)

// Q6
// pop(): 항목의 끝 부분 제거
//shift(): 항목의 첫 부분 제거


/*
 * 5. splice() 연습 문제
초급: const fruits = ["apple", "banana", "cherry", "orange"];에서 인덱스 1번부터 2개의 요소를 제거하세요.
중급 1: const hobby = ["축구", "농구", "야구"];에서 "농구"를 지우고 그 자리에 "배구", "테니스"를 동시에 추가해보세요.
중급 2: splice를 사용하여 배열의 중간에 요소를 삭제하지 않고 추가만 하고 싶을 때, 두 번째 인자(삭제 개수)에 어떤 값을 넣어야 할까요?
 */

// Q7
const fruits_1 = ["apple", "banana", "cherry", "orange"]
fruits_1.splice(0,2)
console.log(fruits_1)

// Q8
const hobby = ["축구", "농구", "야구"]
hobby.splice(1, 1, '배구', '테니스')
console.log(hobby)

// ============================================
// 배열 메서드 연습 문제
// ============================================

// 문제 1: 할일(Todo) 목록 관리
// 상황: 간단한 할일 앱을 만들고 있습니다.
// 요구사항:
// - todoList 배열을 생성하세요. (초기값: ["숙제하기", "운동하기"])
// - "쇼핑가기"를 목록 맨 뒤에 추가하세요.
// - "숙제하기"를 목록에서 삭제하세요.
// - 현재 todoList를 출력하세요.

// 여기에 코드를 작성하세요
const todoList =['숙제하기', '운동하기']
todoList.push('쇼핑하기')
todoList.pop('숙제하기')

console.log("===== 문제 1: 할일 목록 관리 =====")
console.log(todoList)

// 문제 2: 로그인한 사용자 목록 관리
// 상황: 채팅 앱에서 로그인한 사용자를 관리합니다.
// 요구사항:
// - users 배열을 생성하세요. (초기값: ["철수", "영희", "민준"])
// - "새로운 사용자가 로그인했습니다" → "준호"를 배열 맨 앞에 추가하세요.
// - "준호"가 배열의 어느 위치에 있는지 확인하세요. (indexOf 사용)
// - 다시 "준호"가 로그인을 해제해서 배열 맨 앞 요소를 삭제하세요.
// - 최종 users 배열을 출력하세요.

console.log("===== 문제 2: 로그인한 사용자 목록 =====")
// 여기에 코드를 작성하세요
const users = ['철수', '영희', '민준']
users.unshift('준호')
console.log(users.indexOf('준호'))
users.shift('준호')
console.log(users)



// 문제 3: 콘텐츠 댓글 관리
// 상황: SNS 게시물의 댓글 목록을 관리합니다.
// 요구사항:
// - comments 배열을 생성하세요. (초기값: ["좋아요!", "공감합니다", "멋져요"])
// - "스팸입니다"라는 댓글을 2번째 위치에 추가하세요. (splice 사용)
// - 최종 comments 배열을 출력하세요.
// - "공감합니다"가 배열의 어디에 있는지 찾아서 출력하세요.

console.log("\n===== 문제 3: 댓글 관리 =====")
// 여기에 코드를 작성하세요
const comments = ['좋아요!', '공감합니다', '멋져요']
comments.splice(1, 0 , '스팸입니다.')
console.log(comments)
console.log(comments.indexOf('공감합니다'))



// 문제 4: 장바구니 상품 관리
// 상황: 온라인 쇼핑몰 장바구니입니다.
// 요구사항:
// - cart 배열을 생성하세요. (초기값: ["노트북", "마우스", "키보드"])
// - "모니터"를 맨 뒤에 추가하세요.
// - 실수로 맨 뒤에 추가한 "모니터"를 삭제하세요.
// - 맨 앞의 "노트북"을 다른 상품으로 교체합니다. 맨 앞을 삭제하고 "헤드폰"을 맨 앞에 추가하세요.
// - 최종 cart 배열을 출력하세요.
// - "마우스"의 위치를 찾아서 출력하세요.

console.log("\n===== 문제 4: 장바구니 관리 =====")
// 여기에 코드를 작성하세요
const cart = ['노트북', '마우스', '키보드']
cart.push('모니터')
cart.splice(0,1, '헤드폰')
console.log(cart)



// ============================================
// 배열 메서드를 활용한 함수 구현 문제
// ============================================

// 문제: 배열에서 특정 항목 제거하기
// 상황: 할일 목록에서 완료한 항목을 제거하는 함수를 만들어야 합니다.
// 요구사항:
// - removeItem(array, item) 함수를 만드세요
// - 배열에서 item과 일치하는 첫 번째 요소를 찾아서 제거하세요
// - 제거되었으면 true, 없었으면 false를 반환하세요
// 
// 사용 예시:
// let todos = ["운동하기", "공부하기", "청소하기"];
// console.log(removeItem(todos, "공부하기")); // true
// console.log(todos); // ["운동하기", "청소하기"]
// console.log(removeItem(todos, "밥먹기")); // false

let todos = ['운동하기', '공부하기', '청소하기']
function removeFirst(objectArray, item)  {
  const findFirstArray = objectArray.indexOf(item)
  if(findFirstArray > -1){
    todos.splice(0,1)
    return true
  }
  return false
}
console.log(todos)
console.log(removeFirst(todos, '밥먹기'))


