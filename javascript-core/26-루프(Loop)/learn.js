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
  
  for (let i = 0; i < books.length; i++) {
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

for (const character of message) {
  console.log(character)
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

// '속성' in 객체

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

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------