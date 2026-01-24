// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// --------------------------------------------------------------------------
const draw = (n) => n + '번 그려 그려'
const repeat_count = 5
let count = 0

while (count < repeat_count){
  count += 1 //1,2,3,4,5(0,1,2,3,4 값 대입하여 나온 count 값)

  
  
  // --------------------------------------------------------------------------
  // while 문
  // --------------------------------------------------------------------------
  
  //조건문 
  // 변수가 5보다 작을 경우 참
  // 조건이 참일 경우 조건문 실행
  let ifCount = 0
  if(ifCount < 5){
    ifCount = ifCount + 1
    console.log(ifCount)
    
  }
  
  //while 문
  // 조건: whileCount가 5보다 작을 경우 "참"
  // 조건이 "참"일 동안, 코드 블록 반복 실행 🔄
  let iterationCount = 0
  while(iterationCount < 5){
    // iterationCount = iterationCount + 1
    console.log(++iterationCount)
    
  }
  
  
  // 만약, 조건이 참인 상태로 변경되지 않는다면 무한 루프(Infinite Loop) 되므로 주의
  // 콘솔창에 꼭 확인해보기 !!!!!!
  
  // --------------------------------------------------------------------------
  // 흐름 제어문
  // --------------------------------------------------------------------------
  
  //continue: 건너뛰어서 계속 (스킵)
  if(count >=3 && count <= 4){
    // continue // count =+ 1씩 증가해서 나온 값이 3과 4일 때 반환되지 않는다. 
    // 현재 코드에서 아래 코드 건너뛰고 다시 while 조건 확인 이동
    break   //반복문 종료
  }
  draw(count)

  console.log(count) // 3,4가 제외된 [1],[2],[5]가 출력됨 (continue)
                      // [1],[2]만 출력 (3이 되었을때 종료가 되니깐)
  
}
  // break를 활용한 반복문 예시
// 연명부
const people = ['한돌', '두돌', '세돌','네돌', '...', '백돌']
//                0      1      2     3 ,   ... , 100

// 연명부를 반복 순환 
// 찾는 사람이 있다면 반복을 그만 멈춰라.
const search = '백돌'

// 반복문
let index = 0, 
    personName = ''

while (index < people.length /* 0 < 4 */) {
  personName = people.at(index) // '한돌'
  // 검색한 who와 personName이 같다면?
  // 반복을 그만 멈춰라.
  if (personName === search) {
    break // 반복문 중단     
  }
  // 반복문 중단되면 아래 코드는 실행 안되요.
  index += 1
  
}

console.log(personName)


// --------------------------------------------------------------------------
// do...while 문
// --------------------------------------------------------------------------
// 구문 실행을 먼저하고 조건 평가를 나중에 한다.
//- 먼저 실행(do) 이후 조건(while) 확인
//do {
// 실행 코드 (최소 1회 실행됨)
//} while (조건)
//

let i = 0

do{
  i += 1
  console.log(i)
  
}while(i < 10)
  console.log(i)
  
// do ...while과 while의 차이점
// do ...while은 거짓이여도 최소 1번은 실행, while문은 실행안됨


// --------------------------------------------------------------------------
// for 문
// --------------------------------------------------------------------------
// while문 ---> for 문

{
 //while 문의 실행 흐름 
let whileCount = 0  // 반복 횟수
const TARGET_COUNT = 3 // 목표 값

// 20번 반복 (0~19)
// 변수 선언은 '한번만' 실행된다.
while (whileCount < TARGET_COUNT) {
  console.log(whileCount)
  whileCount += 1
}


  // for 문 (실행 흐름)
  for (/* 1 */ let forCount = 0; /* 2, 5 */forCount < TARGET_COUNT; /* 4, 7 */forCount += 1) {
    console.log(forCount) /* 3, 6 */
  }

for (let i = 0, l = 10; i < l; ++i) {
  console.log(i)
}

// for (
//   // 변수 선언
//   let forCount = 0; 
//   // 변수와 값 비교 (참 또는 거짓)
//   forCount < TARGET_COUNT; 
//   // 변수 값 변경
//   forCount += 1
// ) 
// {
//   // 비교 결과 조건이 참인 경우, 반복되는 코드 블록
//   console.log(forCount)
// }

}

// for문 -> while문 변신 단계: 0
// for (let forCount = 0; forCount < TARGET_COUNT; forCount += 1) {
//   console.log(forCount)
// }

// // for문 -> while문 변신 단계: 1
// let forCount = 0;
// for (forCount < TARGET_COUNT; forCount += 1) {
//   console.log(forCount)
// }

// // for문 -> while문 변신 단계: 2
// let forCount = 0
// for (forCount < TARGET_COUNT) {
//   console.log(forCount)
//   forCount += 1
// }

// // for문 -> while문 변신 단계: 3
// let forCount = 0
// while (forCount < TARGET_COUNT) {
//   console.log(forCount)
//   forCount += 1
// }


// --------------------------------------------------------------------------
// 배열 반복 (역순/정순)
// --------------------------------------------------------------------------
// 배열 반복 (정순:오름차순)
const numbers = ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱']

{ // while
  let i = 0
  while (i < numbers.length) {
    const number = numbers[i]
    console.log(number)
    i++
  }

  {
  // do...while
  let i = 0
  do {
    const number = numbers[i]
    console.log(number)
    i++
  } while(i < numbers.length)
}
{
  // for
  for (let i = 0; i < numbers.length; ++i) {
    const number = numbers[i]
    console.log(number)
  }
}

// for 문 추가 예시
{
  const books = ['HTML 공장', 'CSS 드레스샵', 'JavaScript 트레이닝룸', '리액트 마스터']
  // 도서 이름 출력 (반복)
  
  for (let i = 0; i < books.length; ++i) {
    const bookName = books[i]
    console.log(bookName)
  } 
}
}

//배열 반복 (역순:내림차순)

const webFrameworks = [
  'react',   //0
  'vue.js',   //1
  'svelte',   //2
  'angular',  //3
  'solid.js'  //4
]

// for 문
{for(let i = webFrameworks.length - 1; i >= 0; i = i -1){
  const frameWorkName = webFrameworks[i]
  console.log(i,frameWorkName)

}

// 다른 반복문 활용해서 배열 (역순) 반복문 만들어보기
}
// --------------------------------------------------------------------------
// for...of 문 [배열 또는 문자열 반복]
// --------------------------------------------------------------------------
// 장점: 가독성 높음 단점:
for (const frameworkName of webFrameworks) {
  console.log(frameworkName)
}

for (const n of [1, 2, 3, 10, 100, 1000, 1e8]) {
  console.log(n)
}

// 어떨때 for of문이 유용할까?

const personList =[
  { name: '박주영', age: 22 },
  { name: '최한나', age: 31 },
  { name: '김상준', age: 29 },
] 

for (const person of personList) {
  console.log(person.name)
  console.log(person.age)
}

for (let i = 0; i < personList.length; i++) {
  const person = personList[i]
  console.log(person.name)
  console.log(person.age)
}

//.length 속성을 이용하여 문자열 반복
const message = '오늘 하루 너무 추워염!'
// message 문자열을 하나 하나 순환(반복)해서 값을 출력해보고 싶어요.
// while, do...while, for, for...of

for (const text of message) {
  console.log(text)
} 

// length 속성 가짐
// 각 요소의 인덱스를 가짐
// for (const character /* character = '~' */ of '오늘 하루 너무 추워요~') {
//   console.log(character)
// }

for (let i = 0; i < message.length; i += 1) {
  const character = message[i]
  console.log(character)
}

// --------------------------------------------------------------------------
// for...in 문 (객체 반복)
// --------------------------------------------------------------------------
// for ...of는 반복 가능한 객체만 사용 가능
// 일반 객체는 반복 가능하지 않아서 사용할 수 없음

const teacher = {
  name: '김데레사',
  subjects: ['웹 표준/접근성', 'HTML', 'CSS', 'Tailwind CSS', 'Sass'],
}

 //const teachers = [teacher]

// teacher 객체를 반복(속성 별, 값을 출력)
// for...of 문 쉽던데? 이걸 써볼까?
//for (const property of teacher) {
//console.log(property)
//}
// 배열처럼 반복 가능한 객체만 for ... of 문을 사용할 수 있다. 

/// for ...in 문 사용하여 객체 순환
// '속성' in 객체 (객체 안에 속성의 존재여부에 대한 검토할 때 사용)
console.log(teacher)
console.log('name' in teacher)
console.log('subjects' in teacher)
console.log('age' in teacher)
console.log('career' in teacher)

for (const property in teacher) {
  const value = teacher[property]
  console.log(property)
  console.log(value)
}


{
  // 배열도 for...in문 사용 가능! (권장 안함, 비교적 느려서)
  const personList =[
    { name: '박주영', age: 22 },
    { name: '최한나', age: 31 },
    { name: '김상준', age: 29 },
  ] 

  // for...of문
  for (const person of personList) {
    console.log(person)
  }
  
  // for...in문
  // 배열에서 for...in문 사용할 수 있지만,
  // 성능이 좋지 않으니까 객체에 양보하세요.
  for (const index in personList) {
    // []
    // 0: {...}
    // 1: {...}
    // 2: {...}
    console.log(index)
    const person = personList[index]
    console.log(person)
  }
  
}
// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------

// 실습
// {
// 1 번 [짝수 출력] for 문을 사용해 1부터 100까지의 숫자 중, 짝수만 출력
// for(let i = 0; i <= 100; i += 2){
//   if(i > 0){
// console.log(i)
//   }
// }

// 2번 [카운트다운] while 문을 사용해 숫자 10부터 1까지 역순으로 출력
let countDown = 10
while(countDown > 0)
{
  console.log(countDown)
  countDown--
  
}
// 3번 과일바구니] for … of 문을 사용해 다음 배열의 과일 출력
const fruits = ['사과', '바나나', '귤', '복숭아']
for(const allFruits of fruits )
  console.log(allFruits)


//4번 [비밀번호 찾기] do … while 문을 사용해 입력된 비밀번호('3001') 매칭 검토 후 결과 출력
{
let i = 0
let attempt = null // undefined

const attempts = ['0124', '8291', '8259', '3001', '9073']
const input = '3001'

do {
  attempt = attempts[i++]
  console.log(attempt)
} while(input !== attempt)

console.log(attempt)
} 


//5번 [성적표 출력] for … in 문을 사용해 객체의 key, value 출력
const student = {
  name: '선호',
  grade: 'A',
  age: 22,
}
for (const key in student){
  console.log(key) // 키
  console.log(student[key]) //키값
  
}

//6번 6. [까다로운 반복문] `1`부터 `20`까지 반복
// 1. `5`부터 `10`까지는 건너띄고 나머지 출력
// 2. `17`이 되면 반복 종료
// for of 반복문
  {
  const numbers = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20'.split(', ')
  for (const numString of numbers) {
    const n = Number(numString)
    if (n > 4 && n < 11) continue
    if (n === 17) break
    console.log(n)
  }
  }
  //while 문 
  {
    const targetNum = 20
    let i = 0
    while(++i < targetNum){
      if(i > 4 && i < 11) continue
      if(i === 17) break
      console.log(i)
      
    }
  }
  
  //7번 [좋아요 누적] for … of 문을 사용해 각 게시물의 좋아요 수를 누적으로 출력
const likes = [15, 23, 8, 42, 17]
let likeCountCal = 0
for(const likeCount of likes){
  likeCountCal += likeCount
  console.log('좋아요:',likeCountCal)
}

// 8번 [점수 평가] do … while 문을 사용해 점수 배열에서 60점 이상인 경우 "합격", 미만이면 "불합격" 출력
const scores = [45, 78, 92, 55, 88]
let scoreIndex = 0

do{
  // 현재 점수를 변수에 저장
  const score = scores[scoreIndex]
  
  // 점수에 따라서 불/합격 판정
  if(score >= 60){
    console.log('합격:', score)
  }else{console.log('불합격:', score)}

  // 인덱스가 증가되어야만, 무한 루프에 빠지지 않음
  scoreIndex++
}while(scoreIndex < scores.length) // while 조건 바로 옆에 중괄호를 붙여야 함(do...while의 문법 규칙)

// 9번 [도서 목록] for … in 문을 사용해 도서관 정보 객체의 모든 정보 출력
const library = {
  name: '시립 도서관',
  location: '서울시 강남구',
  openHour: '09:00',
  closeHour: '22:00',
  totalBooks: 50000
}
for(const libraryInfo in library){
  console.log(`${libraryInfo}: ${library[libraryInfo]}`)
}

// 10번 [조건부 반복] 1부터 30까지 반복
//    - 3의 배수는 건너띄기 (컨티뉴)
//    - 25에 도달하면 반복 종료 (브레이크)

{
let i = 1
while(i < 31){
  if(i === 25) break // 25가 되었을때 비로소 중지시켜야함
  if(i % 3 === 0){ 
    // i가 3으로 나눴을 때 나머지값이 없으면 1씩 증가시키고, 그 값은 건너뛰어라
    i++
    continue
  }
  // 3의 배수가 아닌 값은 즉시 콘솔값에 출력 후에 1씩 증가 시켜라
    console.log(i)
    i++

}
}

// ============================================
// while 문 집중 훈련 - 문제지 (7개)
// ============================================

// 1. [while + 조건부 증감] 까다로운 while 반복
// 1부터 40까지 반복하면서:
// - 5의 배수는 2씩 증가
// - 나머지는 1씩 증가
// - 30에 도달하면 반복 종료

// 작성 공간
{
let i = 0
while(i < 40){
  console.log(i)
  if(i % 5 === 0){
    i += 2
  }else{
    i++
  }
  if(i === 30) break
}
}

// 2. [while + continue 주의] 건너뛰는 수 누적
// 1부터 50까지 반복하면서:
// - 7의 배수는 건너띄기
// - 나머지는 모두 더하기
// - 누적값 매번 출력

// 출력 예시:
// 누적값: 1
// 누적값: 3
// 누적값: 6
// (7은 건너띔)
// 누적값: 15
// ...

// 작성 공간
{
  let i = 1
  let sum = 0
  while(i <= 50){
    if(i % 7 === 0){
      i++
      continue
    }
    sum += i
    console.log(`누적값: ${sum}`)
    i++
  }
}


// 3. [do…while + 탈출 조건] 검색 시뮬레이션
// do…while을 사용해 배열에서 특정 값을 찾고:
// - 찾으면: "찾았습니다! 인덱스: X"
// - 못 찾으면: "검색 실패"

const items = ['apple', 'banana', 'orange', 'grape', 'mango']
const target = 'orange'

// 출력 예시:
// 검색 중: apple (0번 인덱스)
// 검색 중: banana (1번 인덱스)
// 검색 중: orange (2번 인덱스)
// 찾았습니다! 인덱스: 2

// 작성 공간
{
let searchIndex = 0
let found = false
  do{
    console.log(`검색중: ${items[searchIndex]},(${searchIndex}번) 인덱스`)
    if(items[searchIndex] === target){
    console.log(`찾았습니다! 인덱스: ${searchIndex}`);
    found = true
    }
    searchIndex++
  }while(searchIndex <items.length && !found)
    if(items[searchIndex] !== target){
      console.log('검색 실패')
    }
}
  


// 4. [for…in + 조건부 출력] 객체 필터링
// for…in을 사용해 객체에서 특정 값만 출력:
// - 값이 숫자면: "숫자: X"
// - 값이 문자면: "문자: X"

// const product = {
//   name: '노트북',
//   price: 1500000,
//   brand: 'Samsung',
//   warranty: 24,
//   color: '검정색'
// };

// 출력 예시:
// 문자: 노트북
// 숫자: 1500000
// 문자: Samsung
// 숫자: 24
// 문자: 검정색

// 작성 공간
// for(const key in product) {
//   
// }


// 5. [while + break 타이밍] 암호 해독
// while 반복 중 암호를 찾으면 즉시 종료:
// - 시도 횟수 표시
// - 맞은 암호 표시

// const password = 'secret123';
// const attempts = ['hello', 'world', 'test', 'secret123', 'wrong'];
// let tryCount = 0;

// 출력 예시:
// 시도 1: hello (틀림)
// 시도 2: world (틀림)
// 시도 3: test (틀림)
// 시도 4: secret123 (맞음!)
// 총 시도 횟수: 4

// 작성 공간
// let attemptIndex = 0;
// while(attemptIndex < attempts.length) {
//   
// }


// 6. [복합 while] 짝수와 홀수 분리 계산
// while을 사용해 1부터 50까지:
// - 짝수는 모두 더하기
// - 홀수는 개수 세기

// 출력 예시:
// 짝수의 합: 650
// 홀수의 개수: 25

// 작성 공간
// let i = 1;
// let evenSum = 0;
// let oddCount = 0;
// while(i <= 50) {
//   
// }


// 7. [응용] 중첩 반복문 - 구구단 필터링
// for 문으로 2단부터 9단까지 출력하되:
// - 각 단의 결과가 20 이상이면 출력 안 함
// - 결과가 20 미만이면 "X × Y = Z" 형식으로 출력
// - 각 단이 끝나면 빈 줄 삽입

// 출력 예시:
// 2 × 1 = 2
// 2 × 2 = 4
// ...
// 2 × 9 = 18
// (빈 줄)
// 3 × 1 = 3
// 3 × 2 = 6
// ...
// 3 × 6 = 18
// (빈 줄)
// ...

// 작성 공간
// for(let dan = 2; dan <= 9; dan++) {
//   
// }


// 8. [forEach 기본] 배열의 모든 요소 출력
// 다음 배열의 모든 과일 이름을 한 줄씩 출력하세요

// const fruits = ['딸기', '포도', '귤', '수박', '바나나'];

// 출력 예시:
// 딸기
// 포도
// 귤
// 수박
// 바나나

// 작성 공간
// fruits.forEach((fruit) => {
//   
// })


// 9. [forEach + index] 인덱스와 함께 출력
// 다음 배열의 각 학생 정보를 "번호. 이름"으로 출력하세요

// const students = ['김철수', '이영희', '박민준', '정수진'];

// 출력 예시:
// 1. 김철수
// 2. 이영희
// 3. 박민준
// 4. 정수진

// 작성 공간
// students.forEach((student, index) => {
//   
// })


// 10. [forEach + 조건문] 특정 조건만 출력
// 다음 배열에서 가격이 5000 이상인 상품만 출력하세요

// const products = [
//   { name: '커피', price: 3000 },
//   { name: '케이크', price: 7000 },
//   { name: '쿠키', price: 2500 },
//   { name: '샌드위치', price: 8000 },
//   { name: '주스', price: 4500 }
// ];

// 출력 예시:
// 케이크: 7000원
// 샌드위치: 8000원

// 작성 공간
// products.forEach((product) => {
//   
// })


// 11. [forEach + push] 새로운 배열 생성
// 다음 배열에서 각 숫자를 2배씩 한 새로운 배열을 만드세요

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// 출력 예시:
// [2, 4, 6, 8, 10]

// 작성 공간
// numbers.forEach((number) => {
//   
// })
// console.log(doubledNumbers);


// 12. [forEach + 필터링] 객체 배열에서 필터링
// 다음 배열에서 성적이 'A'인 학생들만 모아서 새로운 배열을 만드세요

// const classmates = [
//   { name: '최민호', grade: 'B' },
//   { name: '박수진', grade: 'A' },
//   { name: '김도연', grade: 'A' },
//   { name: '이준혁', grade: 'C' },
//   { name: '정지은', grade: 'A' }
// ];
// const aGradeStudents = [];

// 출력 예시:
// [ { name: '박수진', grade: 'A' },
//   { name: '김도연', grade: 'A' },
//   { name: '정지은', grade: 'A' } ]

// 작성 공간
// classmates.forEach((classmate) => {
//   
// })
// console.log(aGradeStudents);


// ============================================
// DOM 선택 및 조작 문제 (querySelectorAll + forEach)
// ============================================

// HTML 구조:
// <div id="star-wars">
//   <div class="character" data-type="good-guy">루크 스카이워커</div>
//   <div class="character" data-type="good-guy">요다</div>
//   <div class="character" data-type="villain">다스 베이더</div>
// </div>

// 13. [querySelectorAll + 속성 선택자] 좋은 사람 선택
// data-type="good-guy"인 모든 요소를 선택하세요

// 작성 공간
// const goodGuys = document.querySelectorAll('[data-type="good-guy"]');
// console.log(goodGuys);


// 14. [querySelectorAll + forEach + classList.add] 좋은 사람에게 클래스 추가
// data-type="good-guy"인 모든 요소에 "excellent" 클래스를 추가하세요

// 작성 공간
// document.querySelectorAll('[data-type="good-guy"]').forEach((goodGuy) => {
//   
// })


// 15. [querySelectorAll + 속성 선택자] 빌런 선택
// data-type="villain"인 모든 요소를 선택하세요

// 작성 공간
// const villains = document.querySelectorAll('[data-type="villain"]');
// console.log(villains);


// 16. [querySelectorAll + forEach + classList.add] 빌런에게 클래스 추가
// data-type="villain"인 모든 요소에 "naughty" 클래스를 추가하세요

// 작성 공간
// document.querySelectorAll('[data-type="villain"]').forEach((villain) => {
//   
// })


// 17. [querySelectorAll + 클래스 선택자] 모든 캐릭터 선택
// class="character"인 모든 요소를 선택하세요

// 작성 공간
// const allCharacters = document.querySelectorAll('.character');
// console.log(allCharacters);


// 18. [querySelectorAll + forEach + classList.add] 모든 캐릭터에게 클래스 추가
// class="character"인 모든 요소에 "star-wars" 클래스를 추가하세요

// 작성 공간
// document.querySelectorAll('.character').forEach((character) => {
//   
// })