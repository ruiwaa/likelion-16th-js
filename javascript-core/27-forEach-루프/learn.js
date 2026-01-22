// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while    : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for      : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// * forEach  : 배열의 각 항목을 함수형 스타일로 우아하게 순회합니다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// while 문
// --------------------------------------------------------------------------

// 로비의 대기 손님이 모두 입장할 때까지 반복
let waitingGuests = 5

while (waitingGuests > 0) {
  console.log('손님이 입장했습니다. 남은 대기자: ' + --waitingGuests)
}


// --------------------------------------------------------------------------
// do...while 문
// --------------------------------------------------------------------------

// 청소 상태 점검 (최소 1번은 무조건 실행)
let isClean = false

do {
  console.log('방 상태를 1회 점검합니다.')
} while (isClean)


// --------------------------------------------------------------------------
// for 문

// --------------------------------------------------------------------------

// 1층부터 5층까지 엘리베이터 점검
for (let floor = 1; floor <= 5; floor++) {
  console.log(floor + '층 엘리베이터 점검 완료')
}


// --------------------------------------------------------------------------
// 배열 반복 (역순/정순)
// --------------------------------------------------------------------------

const fruitBasket = ['체리망고', '토마토', '스트로베리']

// 정순 반복 (일반적)
for (let i = 0, l = i < fruitBasket.length; i < l; ++i) {
  console.log('정순: ' + fruitBasket[i])
}

// 역순 반복 (미세하게 빨라 끝에서부터 처리할 때 유용)
for (let i = fruitBasket.length - 1; i >= 0; --i) {
  console.log('역순: ' + fruitBasket[i])
}


// --------------------------------------------------------------------------
// for...of 문 (배열 반복)
// --------------------------------------------------------------------------

// 인덱스 없이 손님 이름만 깔끔하게 출력
for (const fruit of fruitBasket) {
  console.log('오늘의 과일: ' + fruit)
}


// --------------------------------------------------------------------------
// for...in 문 (객체 반복)
// --------------------------------------------------------------------------

// VIP 손님의 상세 정보 장부 확인
const vipGuest = {
  name: '지민',
  room: 1001,
  grade: '다이아몬드',
}

for (const key in vipGuest) {
  console.log(key + ' 정보: ' + vipGuest[key])
}


// --------------------------------------------------------------------------
// forEach 메서드 활용
// - 배열의 모든 항목을 함수형 스타일로 반복 처리
// --------------------------------------------------------------------------

// 배열의 forEach 메서드(함수)
// console.log(typeof list.forEach) 'function'
// list.forEach((item, index) => {
//   console.log(index)
//   console.log(item)
// })

// for 문
// for (let index = 0; index < list.length; ++index) {
//   console.log(index)
//   const item = list[index]
//   console.log(item)
// }

// for...of 문
// for (const item of list) {
//   console.log(item)
// }

// for each 문
const orders = ['아이스 아메리카노', '따뜻한 라떼', '자바칩 프라푸치노']

orders.forEach((menu,order) => {
  console.log('주문하신 "'+(++order) +'번째 '+ menu + '" 나왔습니다!')
})

// 1. 기본 사용 (아이템만 사용)
// forEach를 사용해 과일 이름 출력

// 2. 인덱스까지 활용
// forEach를 사용해 인덱스 번째 바구니 과일 이름 출력
// '[ ]번째 바구니의 과일은 [     ]입니다.'


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. forEach는 break/continue를 쓸 수 없지만 코드가 매우 간결해집니다.
// 6. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------

// 실습
const players = [
  {
    name: '차범근',
    position: '공격수',
    strength: '폭발적인 스피드와 강한 슈팅',
    weakness: '조금 직선적인 플레이 스타일'
  },
  {
    name: '박지성',
    position: '미드필더',
    strength: '왕성한 활동량과 팀워크',
    weakness: '골 결정력 부족'
  },
  {
    name: '손흥민',
    position: '공격수',
    strength: '양발 슈팅 능력과 스피드',
    weakness: '볼 간수력 부족 시 논란 있음'
  },
  {
    name: '홍명보',
    position: '수비수',
    strength: '정확한 패스와 리더십',
    weakness: '순간적인 스피드 부족'
  },
  {
    name: '이운재',
    position: '골키퍼',
    strength: '경험과 안정감 있는 리딩',
    weakness: '하체 반응 속도 부족 지적'
  },
  {
    name: '조광래',
    position: '미드필더',
    strength: '패스와 경기 조율 능력',
    weakness: '몸싸움 약점'
  },
  {
    name: '김남일',
    position: '수비형 미드필더',
    strength: '터프한 수비와 투지',
    weakness: '거친 플레이로 카드 다수'
  },
  {
    name: '이영표',
    position: '풀백',
    strength: '지능적인 수비와 정확한 크로스',
    weakness: '공격 가담 시 존재감 약하다는 평도 있음'
  },
  {
    name: '기성용',
    position: '미드필더',
    strength: '롱패스와 시야',
    weakness: '수비 집중력 기복'
  },
  {
    name: '정성룡',
    position: '골키퍼',
    strength: '공중볼 처리 능력',
    weakness: '큰 경기에서의 불안감'
  },
  {
    name: '황선홍',
    position: '공격수',
    strength: '위치 선정과 침착한 슈팅',
    weakness: '부상 빈도'
  },
  {
    name: '안정환',
    position: '공격수',
    strength: '화려한 기술과 센스',
    weakness: '경기 외적 이슈로 평가 갈림'
  },
  {
    name: '김진수',
    position: '풀백',
    strength: '왕성한 오버래핑과 크로스',
    weakness: '수비 시 위치 선정'
  },
  {
    name: '이강인',
    position: '공격형 미드필더',
    strength: '창의적인 패스와 킥 능력',
    weakness: '수비 가담 부족'
  },
  {
    name: '황희찬',
    position: '공격수',
    strength: '돌파력과 피지컬',
    weakness: '결정력 기복'
  }
]
// 1. players 배열에 포함된 각 선수 이름을 콘솔 패널에 출력
players.forEach((player) => {
  console.log(player['name'])
  // 객체이므로, 객체 키값의 표기법으로 불러올 수 있음!(점 표기법, 대괄호 표기 모두 가능)
  // 단, 대괄호 표기법을 사용할 경우 키값의 실제 형태와 일치 시켜야함
})
// 2. players 배열의 각 항목 중 name 값이 "안정환"인 정보가 위치하는 인덱스 출력
players.forEach((player, index) => {
  if(player.name === '안정환'){
    console.log(index)
  }
})

// 3. players 배열에 포함된 모든 선수의 이름만 포함한 playerNames 배열 생성
const playerNames = []

players.forEach((player) => {
  playerNames.push(player.name)
})

console.log(playerNames)

// 4. players 배열에서 골키퍼 포지션 선수만으로 구성된 goalkeepers 배열을 새롭게 생성
const goalkeepers = []

players.forEach((player) => {
  if(player.position === '골키퍼') {
    goalkeepers.unshift(player) // 기존 객체의 차례대로 가져올 때는 unshift 사용, 역순으로 가져올 경우 push로 가져옴
  }
})

console.log(goalkeepers)

