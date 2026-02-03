// --------------------------------------------------------------------------
// 실습: 탐색 메서드 (findIndex & find)
// --------------------------------------------------------------------------

// [실습 1] 거주지 일치 인덱스 출력
// 1. users 배열에서 사용자가 입력한 거주지(location)와 일치하는 첫 번째 인덱스를 찾으세요.
// 2. findIndex를 활용하고, 결과가 없을 시 -1이 나오는지 확인하세요.
console.groupCollapsed('1. findIndex 실습')
// 정순:findIndex, 역순: findLastIndex
// 이곳에 코드를 작성하세요

{
const users = [
  {id:'user-kcls', name:'하영' , location:'서울'},
  {id:'user-ekx1', name: '준수', location:'이천'},
  {id:'user-cisk', name:'상준' , location:'원주'},
  {id:'user-ocls', name:'민주' , location:'서울'},
]

// 검색한 위치에 거주하는 사용자의 인덱스를 찾아 반환 
const findLocation = '서울'

// 단계 1.
let userInSeoulIndex = users.findIndex((user) => {
  if (user.location.includes(findLocation)) return true
  return false
})

// 단계 2.
userInSeoulIndex = users.findIndex((user) => {
  return user.location.includes(findLocation)
})

// 단계 3.
userInSeoulIndex = users.findIndex((user) => user.location.includes(findLocation))
// user.location 이렇게 점표기법으로 쓴 이유는 해당 배열 안에 각각의 객체가 존재하므로, 그 객체의 키값을 가지괴 오기위해서
// 점표기법을 활용함
console.log(userInSeoulIndex)
if (userInSeoulIndex > -1) {
  console.log(users.at(userInSeoulIndex).name)
}

// 배열을 역순으로 조회해서 일치하는 요소가 나오면 해당 요소의 인덱스를 반환
// 배열 findLastIndexIndex
userInSeoulIndex =users.findLastIndex((user) => user.location.includes(findLocation))
console.log(userInSeoulIndex)
if (userInSeoulIndex > -1) {
  console.log(users.at(userInSeoulIndex).name)
}
}

console.groupEnd()


// [실습 2] 국적 일치 사용자 이름 출력
// 1. users 배열에서 특정 국적(nationality)을 가진 첫 번째 사용자를 찾으세요.
// 2. find를 활용해 객체를 찾고, 해당 객체의 name만 출력해 보세요.
console.groupCollapsed('2. find 실습')

// 이곳에 코드를 작성하세요
// 간단한 배열에서 find() 메서드 사용

{
const numbers = [1,2,3,4,5,6,7,8,9,10]
const wantNumber = 10
// 단계 1.
let foundNumber = numbers.find(function(number) {
  if (number === wantNumber) return true
  return false
})

// 단계 2.
foundNumber = numbers.find(function(number) {
  return number === wantNumber
})

// 단계 3.
foundNumber = numbers.find((number) => {
  return number === wantNumber
})

// 단계 4.
foundNumber = numbers.find((number) => number === wantNumber)

if (foundNumber) {
  console.log(foundNumber)
} else {
  console.warn(`찾는 ${wantNumber} 숫자 값이 [${numbers}] 배열 안에 존재하지 않습니다.`)
}

}


// 복잡한 배열에서 find() 메서드 사용

{
  const users = [
    { id: 'users-kcls', name: '하영', hobby: '서핑', email: 'hay@naver.com', location: '서울' },
    { id: 'users-ekx1', name: '준수', hobby: '라이딩', email: 'jun@daum.net', location: '이천' },
    { id: 'users-cisk', name: '상준', hobby: '서핑', email: 'sang@gmail.com', location: '원주' },
    { id: 'users-ocls', name: '민주', hobby: '러닝', email: 'min@kakao.com', location: '서울' },
    { id: 'users-eika', name: '해영', hobby: '라이딩', email: 'hae@naver.com', location: '부산' },
    { id: 'users-2low', name: '민식', hobby: '서핑', email: 'sik@naver.com', location: '대전' },
  ]


  // [이름 취미 이메일 위치 중 ] 무엇으로 찾을 것인지?
  // 이메일이 min@kakao.com  또는 min을 포함한 사용자를 찾아라.

  let foundUser = null

  // 로직 (재사용 고려 -> 기능 작성 -> 함수 선언)
  // const searchTerm = '러닝'
  // const category = 'hobby'
  // foundUser = users.find((user) => user[category].includes(searchTerm))

  // findUser 함수 만들기 (list = 적용이 될 객체, {객체 매개변수})

  // {객채 매개변수} 안에 category = 'name'는 'name'이라는 객체의 기본값(실제 데이터가 가진 값) 설정
  // user 객체 내의 name 키과 동일한 것이다.
  // ->
  function findUser(list, { category = 'name', search = '' } = {}) {
  // find 메서드를 사용하여, user 객체 안에 카테고리 키안에 search가 포함된 키값을 찾기
    foundUser = users.find((user) => user[category].includes(search))
    return foundUser
  }
 
  // foundUser 변수에 findUser 함수 할당
  foundUser = findUser(users, { search: '서핑', category: 'hobby' })
 
  // 안전한 코드 프로그래밍
  if (foundUser) {
     // foundUser 안에 구조 분해 할당을 한 것임
    const { name, email, location } = foundUser
    console.log(name)
    console.log(email)
    console.log(location)
  } else {
    console.log('users 배열 안에는 찾는 사용자가 없습니다.')
  }
}



console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 가공 및 필터링 (filter & map)
// --------------------------------------------------------------------------

// [실습 3] 국적 일치 사용자 그룹 출력
// 1. filter를 사용하여 특정 국적을 가진 모든 사용자를 모은 새 배열을 만드세요.
// 2. JSON.stringify(result, null, 2)를 사용하여 화면에 예쁘게 출력해 보세요.
console.groupCollapsed('3. filter 실습')

// 이곳에 코드를 작성하세요

// [필터링] 간단한 데이터 필터링
{

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 24, 89, 903]
  
  // 3의 배수만 걸러내자.
  const multiplesOf3 = numbers.filter((number) => number % 3 === 0)
  console.log(multiplesOf3)
  
  // 2로 나눠 나머지가 0인 수만 걸러내자. (짝수)
  const filteredEven = numbers.filter((n) => n % 2 === 0)
  console.log(filteredEven)
  
  // 홀수만 걸러내자.
  const filteredOdd = numbers.filter((n) => n % 2 !== 0)
  console.log(filteredOdd)

}


// [필터링] 복잡한 데이터 필터링
{
  // 사용자 정보가 포함된 배열 users
  const users = [
    { id: 'USER-KCLS', name: '김하영', hobby: ['서핑', '요가'], email: 'hayoung@naver.com', location: '서울', age: 27 },
    { id: 'USER-EKX1', name: '박준수', hobby: ['라이딩', '등산'], email: 'junsu@daum.net', location: '이천', age: 32 },
    { id: 'USER-CISK', name: '이상준', hobby: ['서핑', '독서'], email: 'sangjun@gmail.com', location: '원주', age: 29 },
    { id: 'USER-OCLS', name: '최민주', hobby: ['러닝', '요가'], email: 'minju@kakao.com', location: '서울', age: 25 },
    { id: 'USER-EIKA', name: '정해영', hobby: ['라이딩', '수영'], email: 'haeyoung@naver.com', location: '부산', age: 31 },
    { id: 'USER-2LOW', name: '김민식', hobby: ['서핑', '클라이밍'], email: 'minsik@naver.com', location: '대전', age: 28 },
    { id: 'USER-9KMZ', name: '박지수', hobby: ['요가', '명상'], email: 'jisoo@gmail.com', location: '서울', age: 26 },
    { id: 'USER-7PQR', name: '이현우', hobby: ['등산', '캠핑'], email: 'hyunwoo@daum.net', location: '부산', age: 33 },
    { id: 'USER-3ABC', name: '최예지', hobby: ['서핑', '사진촬영'], email: 'jimin@naver.com', location: '제주', age: 30 },
    { id: 'USER-5XYZ', name: '정소희', hobby: ['러닝', '자전거'], email: 'sohee@kakao.com', location: '서울', age: 24 },
    { id: 'USER-8DEF', name: '김태호', hobby: ['요가', '명상'], email: 'taeho@gmail.com', location: '대구', age: 35 },
    { id: 'USER-4GHI', name: '박민지', hobby: ['라이딩', '수영'], email: 'minji@naver.com', location: '인천', age: 27 },
    { id: 'USER-1JKL', name: '이준호', hobby: ['등산', '낚시'], email: 'junho@daum.net', location: '서울', age: 31 },
    { id: 'USER-6MNO', name: '최세진', hobby: ['서핑', '스노우보드'], email: 'sejin@kakao.com', location: '부산', age: 29 },
    { id: 'USER-0PQR', name: '정유진', hobby: ['요가', '필라테스'], email: 'yujin@gmail.com', location: '광주', age: 28 },
    { id: 'USER-2STU', name: '김민수', hobby: ['러닝', '축구'], email: 'minsu@naver.com', location: '서울', age: 26 },
    { id: 'USER-5VWX', name: '박지훈', hobby: ['라이딩', '테니스'], email: 'jihoon@daum.net', location: '대전', age: 30 },
    { id: 'USER-7YZA', name: '이수진', hobby: ['등산', '요리'], email: 'soojin@kakao.com', location: '부산', age: 32 },
    { id: 'USER-9BCD', name: '최동현', hobby: ['서핑', '드론'], email: 'donghyun@gmail.com', location: '제주', age: 34 },
    { id: 'USER-4EFG', name: '정예지', hobby: ['요가', '그림'], email: 'yeji@naver.com', location: '서울', age: 25 }
  ]

  console.log(users.length)


  let foundPeople = null
  // 성이 '이'인 사람들만 걸러보세요.
  const firstName = '이'
  foundPeople = users.filter(({name}) => name.charAt(0) === firstName)
  console.log(foundPeople)


  // 이름이 '??'인 사람들을 걸러보세요.
  const lastName = '예지'
  // foundPeople = users.filter((user) => user.name.slice(1) === lastName)
  foundPeople = users.filter(({name}) => name.slice(1) === lastName)
  console.log(foundPeople.length)
  console.log(foundPeople)

  // 만약에 최예지만 걸러내고 싶다 하면 find 메서드 사용
  // find() 메서드 사용
  console.log(users.find((user) => user.name === '최예지'))


// 취미가 '??'인 사람들만 걸러보세요.
 const hobbyName = '러닝'
 // 구조분해 할당하지 않은 경우
 // foundPeople= users.filter((user) => user.hobby.includes(hobbyName) )

 // 구조 분해 할당을 한 경우
 foundPeople = users.filter(({hobby}) => hobby.includes(hobbyName))
 console.log(foundPeople.length)
 console.log(foundPeople)
  

 // 나이대가 20대인 사람들만 걸러보세요.
  foundPeople = users.filter(({age}) => age > 19 && age < 30 )
  console.log(foundPeople)

 // 지역이 '??'인 사람들만 걸러보세요.
  const region = '원주'
  foundPeople = users.filter(({location}) => location === region)
  console.log(foundPeople)
  

// NAVER 이메일을 사용하는 사람들만 걸러보세요.
  const emailService = 'NAVER'
  foundPeople = users.filter(({email})=> email.includes(emailService.toLocaleLowerCase()))
  console.log(foundPeople)
  
 
  
}



console.groupEnd()


// [실습 4] 고유 ID 설정 (데이터 변형)
// 1. map을 사용하여 모든 사용자의 id 앞에 접두사(prefix)를 붙인 새 배열을 만드세요.
// 2. 예: 1 -> 'user_1' (템플릿 리터럴 활용)
console.groupCollapsed('4. map 실습')

// 이곳에 코드를 작성하세요
// 간단한 데이터 가공
{
  // 숫자를 나타내는 단어로 구성된 배열
  const words = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열'.split(' ')
  console.log(words)

  // 가공된 결과: [{ 인덱스: 숫자를_표현한_단어 }, { 인덱스: 숫자를_표현한_단어 }, ...]
  const indexOfWords = words.map((word, index) => {
    // 배열을 순환해 각 요소 마다 가공한 결과를 내보낸다.
    // 가공한 요소 : { 인덱스: 숫자를_표현한_단어 }
    // 예시) { 0: '하나' }, { 1: '둘' }
    const mappedWord = { [index]: word }
    return mappedWord
  })

  // 가공된 각 요소를 포함하는 새로운 배열 반환
  // 예상된 결과: [{ 0: '하나' }, { 1: '둘' }, ...]
  console.log(indexOfWords)


  // 콜백 함수의 순서? 어떻게 지정되나?
// map() 메서드 흉내내기를 통해 
// 콜백 함수의 순서 지정하는 방법 학습
function customMap(array, callbackFn) {
  const mappedArray = []

  // for 문
  for (let index = 0, l = array.length; index<l; ++index) {
    const item = array.at(index)
    // const mappedItem = callbackFn(index, item, array)
    const mappedItem = callbackFn(item, index, array)
    mappedArray.push(mappedItem)
  }
  
  // map() 함수 흉내내기
  // 반환값 가공된 요소들로 구성된 새로운 배열 반환
  return mappedArray
}

// const customResult = customMap(words, (index, item) => {
const customResult = customMap(words, (item, index) => {
  // 콜백 함수에서 가공된 각 요소의 결과를 반환
  const mappedWord = { [index]: item }
  return mappedWord
})

console.log(customResult)

}

// 복잡한 데이터 가공 
{

    const users = [
    { id: 'USER-KCLS', name: '김하영', hobby: ['서핑', '요가'], email: 'hayoung@naver.com', location: '서울', age: 27 },
    { id: 'USER-EKX1', name: '박준수', hobby: ['라이딩', '등산'], email: 'junsu@daum.net', location: '이천', age: 32 },
    { id: 'USER-CISK', name: '이상준', hobby: ['서핑', '독서'], email: 'sangjun@gmail.com', location: '원주', age: 29 },
    { id: 'USER-OCLS', name: '최민주', hobby: ['러닝', '요가'], email: 'minju@kakao.com', location: '서울', age: 25 },
    { id: 'USER-EIKA', name: '정해영', hobby: ['라이딩', '수영'], email: 'haeyoung@naver.com', location: '부산', age: 31 },
    { id: 'USER-2LOW', name: '김민식', hobby: ['서핑', '클라이밍'], email: 'minsik@naver.com', location: '대전', age: 28 },
    { id: 'USER-9KMZ', name: '박지수', hobby: ['요가', '명상'], email: 'jisoo@gmail.com', location: '서울', age: 26 },
    { id: 'USER-7PQR', name: '이현우', hobby: ['등산', '캠핑'], email: 'hyunwoo@daum.net', location: '부산', age: 33 },
    { id: 'USER-3ABC', name: '최예지', hobby: ['서핑', '사진촬영'], email: 'jimin@naver.com', location: '제주', age: 30 },
    { id: 'USER-5XYZ', name: '정소희', hobby: ['러닝', '자전거'], email: 'sohee@kakao.com', location: '서울', age: 24 },
    { id: 'USER-8DEF', name: '김태호', hobby: ['요가', '명상'], email: 'taeho@gmail.com', location: '대구', age: 35 },
    { id: 'USER-4GHI', name: '박민지', hobby: ['라이딩', '수영'], email: 'minji@naver.com', location: '인천', age: 27 },
    { id: 'USER-1JKL', name: '이준호', hobby: ['등산', '낚시'], email: 'junho@daum.net', location: '서울', age: 31 },
    { id: 'USER-6MNO', name: '최세진', hobby: ['서핑', '스노우보드'], email: 'sejin@kakao.com', location: '부산', age: 29 },
    { id: 'USER-0PQR', name: '정유진', hobby: ['요가', '필라테스'], email: 'yujin@gmail.com', location: '광주', age: 28 },
    { id: 'USER-2STU', name: '김민수', hobby: ['러닝', '축구'], email: 'minsu@naver.com', location: '서울', age: 26 },
    { id: 'USER-5VWX', name: '박지훈', hobby: ['라이딩', '테니스'], email: 'jihoon@daum.net', location: '대전', age: 30 },
    { id: 'USER-7YZA', name: '이수진', hobby: ['등산', '요리'], email: 'soojin@kakao.com', location: '부산', age: 32 },
    { id: 'USER-9BCD', name: '최동현', hobby: ['서핑', '드론'], email: 'donghyun@gmail.com', location: '제주', age: 34 },
    { id: 'USER-4EFG', name: '정예지', hobby: ['요가', '그림'], email: 'yeji@naver.com', location: '서울', age: 25 }
  ]

  // 사용자 이름 목록 만들기(가공해 새로운 배열 생성)
  // 구조 분해 할당하지 않은 버전
  //const userNames = users.map((user) => user.name)
  const userNames = users.map(({name}) => name) 
  console.log(userNames)


  // 사용자 이메일 목록 만들기 (가공해 새로운 배열 생성)
  // 구조 분해 할당한 버전
  //const userEmails = users.map((user) => user.email)
  const userEmails = users.map(({email}) => email)
  console.log(userEmails)
  

  // 배열 가공 목적
  // users 배열을 순환해 각 user에 새로운 속성을 추가
  // ex) index,role 속성이 추가된 배열을 생성한다면?

  const neoUsers = users.map((user,index)=> {
    const neoUser = {
      ...user,
      index,
      role:'GUEST',
    }
    return neoUser
  })
  console.log(users)
  console.log(neoUsers)
  

  // 카드 데이터 (배열)
const cards = [
  { id: 'card-naver', title: '네이버', link: 'https://naver.com' },
  { id: 'card-google', title: '구글', link: 'https://google.com' },
  { id: 'card-daum', title: '다음', link: 'https://daum.net' },
  { id: 'card-coupang', title: '쿠팡', link: 'https://coupang.com' },
]


// 카드 데이터를 순환해 카드 마크업을 포함하는 새로운 배열
// 카드 배열의 각 요소를 순환해 동적 렌더링을 위한 마크업 코드 생성 
let cardMarkups = cards.map((card) => {
  const markup = `
    <div class="card" data-id="${card.id}">
      <a href="${card.link}" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 16 16">...</svg>
        ${card.title}
      </a>
    </div>
  `
  return markup
})

 // 구조 분해 할당을 사용한 경우
 cardMarkups = cards.map(({id, title, link}) => {
  const markup = `
    <div class="card" data-id="${id}">
      <a href="${link}" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 16 16">...</svg>
        ${title}
      </a>
    </div>
  `
  return markup
})

console.log(cardMarkups.length)
console.log(cardMarkups)

}
console.groupEnd()


// --------------------------------------------------------------------------
// 다이내믹 렌더링
// --------------------------------------------------------------------------
// JavaScript로 마크업 -> 화면 렌더링(그림 그리기)
// --------------------------------------------------------------------------
console.group('5. 다이내믹 마크업')

// 버튼 데이터
const buttonData = [
  { id: 'button-register', type: 'submit', label: '회원가입', message: '성공적으로 회원가입되었습니다.' },
  { id: 'button-login', type: 'submit', label: '로그인', message: '사용자 계정으로 로그인되었습니다.' },
  { id: 'button-login', type: 'reset', label: '초기화', message: '입력 내용을 모두 초기화했습니다.' },
  { id: 'button-readmore', type: 'button', label: '더보기', message: '감춰진 데이터를 더보기합니다.' },
]
const p = [{id: 'p-info' ,  class: '정보유형',label : '버튼 정보란', } ]

// 데이터 순환해 동적으로 HTML 마크업을 JavaScript 프로그래밍으로 생성
const buttonMarkups = buttonData.map((button) => {
  const markup = `
    <button
      type="${button.type}"
      data-id="${button.id}"
      data-message="${button.message}"
    >
      ${button.label}
    </button>
  `
  
  return markup
})
const pMarkup = p.map((p) => {
  const markupv2 = `
  <p id = ${p.id} class = ${p.class}>${p.label}</p>`
  return markupv2
})

// 프로그래밍적으로 생성된 마크업 코드 배열
const buttonsHTMLCode = buttonMarkups.join('')
const pHTMLCode = pMarkup.join('')
// 가공된 데이터를 웹 문서 화면에 그리기
const dynamicMarkupContainer = document.querySelector('[data-dynamic-markup]')

// 'property' in Element
// console.log('innerHTML' in dynamicMarkupContainer)

dynamicMarkupContainer.innerHTML = buttonsHTMLCode
dynamicMarkupContainer.innerHTML = pHTMLCode

// 화면에 그려진 집합 요소들을 순환해서 이벤트 리스너 추가
// 컨테이너 요소의 자식들(children) 수집
const dynamicButtons = Array.from(dynamicMarkupContainer.children)
dynamicButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonElement = e.currentTarget
    const message = buttonElement.dataset.message
    alert(message)
  })
})

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 심화 체이닝 및 이벤트 위임
// --------------------------------------------------------------------------

// [실습 6] 국적 일치 & 고유 ID 설정 (체이닝)
// 1. filter로 특정 국적 유저를 먼저 거르고, map으로 ID를 변형하는 체이닝을 구현하세요.
// 2. 이벤트 위임을 활용해 컨테이너 하나에서 모든 입력을 처리해 보세요.
console.groupCollapsed('6. 메서드 체이닝 실습')

// 이곳에 코드를 작성하세요



console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 반환값 확인: find 계열은 단일값(혹은 인덱스), map/filter는 항상 배열을 반환합니다.
// 2. 불변성: 이 메서드들은 원본 배열을 변경하지 않고 항상 새로운 값을 반환해 안전합니다.
// 3. 체이닝: 배열을 반환하는 메서드끼리는 기차처럼 연결하여 복잡한 로직을 한 줄로 끝낼 수 있습니다.
// 4. forEach vs map: 값을 반환하여 다음 단계로 넘겨야 한다면 무조건 map을 사용하세요!
// --------------------------------------------------------------------------