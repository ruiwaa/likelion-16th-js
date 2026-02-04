// --------------------------------------------------------------------------
// 실습: 조건 스위치 (switch statement)
// --------------------------------------------------------------------------

//switch 문
;(() => {
let hobby = '달리기'
  // switch 문
  {
    switch(hobby) {
      case '달리기': console.log('달립니다.'); break
      case '잠자기': console.log('잠잡니다.'); break
      case '캠핑하기': console.log('캠핑합니다.'); break
      case '서핑하기': console.log('서핑합니다.'); break
      default: console.log('쉽니다.')
    }
  }

  // if...else 문
  {
    if (hobby === '달리기') {
      console.log('달립니다.')
    } else if (hobby === '잠자기') {
      console.log('잠잡니다.')
    } else if (hobby === '캠핑하기') {
      console.log('캠핑합니다.')
    } else if (hobby === '서핑하기') {
      console.log('서핑합니다.')
    } else {
      console.log('쉽니다.')
    }
  }

})//()

;(() => {
  //여러 조건이 복합적인 경우
  // 취미가 수영 또는 배드민턴 또는 발레 -> 아파트 커뮤니티에서 진행
  // 취미가 축구 또는 농구 또는 야구 -> 초등학교 운동장에서 진행

  let hobby = ''
  
  //if else 문
  {
    if ( hobby === '수영' || hobby === '배드민턴' || hobby === '발레') {
      console.log('아파트 커뮤니티를 이용해주세요.')
    } else if ( hobby === '축구' || hobby === '농구' || hobby === '야구') {
      console.log('OO 초등학교 운동장을 이용해주세요.')
    } else {
      console.log('자택에서 조용하게 진행해주세요.')
    }
  }

  // switch 문
  {
    switch(hobby) {
      case '수영':
      case '배드민턴':
      case '발레':
        console.log('아파트 커뮤니티를 이용해주세요.')
        break
      case '축구':
      case '농구':
      case '야구':
        console.log('OO 초등학교 운동장을 이용해주세요.')
        break
      default:
        console.log('자택에서 조용하게 진행해주세요.')
    }
  }

})()

// 데이터 정의

const 푸드_카테고리 = {
  한식: '🍚 밥과 김치!',
  일식: '🍣 신선한 초밥!',
  중식: '🥡 맛있는 짜장면!',
  양식: '🍕 치즈 피자!'
}

// [실습 1] 요일 별 메시지 출력
// 1. 버튼 클릭 시 입력값(#day)을 읽어오세요.
// 2. switch 문을 사용하여 입력된 요일에 맞는 메시지를 .day-output에 출력하세요.
// 3. 목록에 없는 요일일 경우 "올바른 요일을 입력해주세요"라고 출력하세요.
console.groupCollapsed('1. 요일 메시지 실습')

// 이곳에 코드를 작성하세요
{
const practice = document.getElementById('practice1')
const input = document.getElementById('day')
const button = practice.querySelector('.btn-check-day')

button.addEventListener('click', () => {
  const day = input.value.trim()
  
  // if...else 문
  if (
    day === '월요일' ||
    day === '화요일' ||
    day === '수요일' ||
    day === '목요일' ||
    day === '금요일'
  ) {
    console.log('열심히 공부하자')
  } else if (
    day === '토요일' ||
    day === '일요일'
  ) {
    console.log('즐거운 휴식을 하자')

  }
  else {
    console.warn('월,화,수,목,금,토,일요일 중 하나를 입력해야 합니다.')
  }
  
})

button.addEventListener('click', () => {
  const day = input.value.trim()
  
  // switch 문
  switch (day) {
    case '월요일':
    case '화요일':
    case '수요일':
    case '목요일':
    case '금요일':
      console.log('열심히 공부하자')
      break
    case '토요일':
    case '일요일':
      console.log('즐거운 휴식을 하자')
      break
  default: 
    console.warn('월,화,수,목,금,토,일요일 중 하나를 입력해야 합니다.')
  }
})
}
console.groupEnd()


// --------------------------------------------------------------------------
// [실습 2] 음식 별 이모지 출력
// 1. select 요소의 값이 바뀔 때마다 실행하세요 (change 이벤트).
// 2. switch 문을 사용하여 선택된 카테고리에 맞는 이모지 문구를 .food-output에 출력하세요.
console.groupCollapsed('2. 음식 이모지 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// [실습 3] 취미 별 카테고리 출력
// 1. 취미 선택 시 switch 문을 활용해 범주를 분류하세요.
// 2. 예: '수영' 선택 시 -> '🏖 수상 스포츠' 출력
// 3. 여러 case를 묶어서 처리하는 'Fall-through' 기법을 활용해 보세요.
console.groupCollapsed('3. 취미 카테고리 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 정확한 값 비교: switch는 특정 변수가 어떤 '값'인지 확인할 때 가독성이 가장 좋습니다.
// 2. break의 역할: case 실행 후 탈출하기 위해 반드시 필요합니다. 생략하면 다음 case까지 연속 실행됩니다.
// 3. default의 중요성: 어떤 case에도 해당하지 않을 때 실행될 예외 처리를 항상 고려하세요.
// 4. 가독성: 수행할 코드가 많다면 중괄호({})로 블록을 만들어 변수 충돌을 방지하세요.
// --------------------------------------------------------------------------