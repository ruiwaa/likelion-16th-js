// --------------------------------------------------------------------------
// 실습: 기본 매개변수 (Default Parameters)
// --------------------------------------------------------------------------

// [실습] 기본적인 수식 함수에서의 활용
// 1. 상품 가격(price)과 수량(quantity)을 인수로 받는 calculateTotal 함수를 만드세요.
// 2. 수량이 입력되지 않을 경우를 대비해 기본값을 1로 설정하세요.
// 3. 인수를 하나만 넣었을 때와 두 개 모두 넣었을 때의 결과를 비교해 보세요.
console.groupCollapsed('기본 매개변수 실습')

// 이곳에 코드를 작성하세요
function px2rem(pxValue, baseValue = 16){
  // (이전 방식)const baseNumberValue = parseFloat(baseValue || 16)
  const baseNumberValue = parseFloat(baseValue)
  const pxNumberValue = parseFloat(pxValue)
  const remValue = `${pxNumberValue / baseNumberValue} rem`
  return remValue

}

// 테스트 코드
console.log(px2rem(20))             // '1.25rem'
console.log(px2rem('20px'))         // '1.25rem'
console.log(px2rem(20, 10))         // '2rem'
console.log(px2rem('20px', '10px')) // '2rem'

function rem2px(remValue, baseValue = 16) {
  const remNumberValue = parseFloat(remValue)
  const baseNumberValue = parseFloat(baseValue)
  const pxValue = `${remNumberValue * baseNumberValue}px`
  return pxValue
}

// 테스트 코드
console.log(rem2px(2.475)) // '39.6px'
console.log(rem2px('2.475rem')) // '39.6px'
console.log(rem2px(3.145, 10)) // '31.45px'
console.log(rem2px('3.145px', '10px')) // '31.45px'

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 객체 매개변수 패턴 & 구조 분해 (Object Destructuring)
// --------------------------------------------------------------------------

// [실습] 구조 분해 할당과 기본값의 결합
// 1. 사용자 정보를 출력하는 showProfile 함수를 만드세요.
// 2. 매개변수 위치에서 직접 구조 분해({ name, role, theme })를 수행하세요.
// 3. theme의 기본값은 'light', role의 기본값은 'guest'로 설정하세요.
// 4. 함수 호출 시 빈 객체조차 전달하지 않을 상황을 대비해 매개변수 전체 기본값으로 빈 객체({})를 할당하세요.
console.groupCollapsed('객체 매개변수 및 구조 분해 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()


// [실습] 두 가지 패턴의 차이점 확인
// 1. '객체 전체'를 사용하는 방식과 '분해된 변수'만 사용하는 방식을 각각 작성해 보세요.
// 2. 어떤 상황에서 어떤 방식이 더 유리할지 주석으로 의견을 남겨보세요.
console.groupCollapsed('매개변수 패턴 비교')

// 이곳에 코드를 작성하세요
// 사용자 정보를 포함하는 객체 생성 함수

{
  //단계 1 사용자 정보를 포함하는 객체 생성 함수
  function createUser(name, age, job, location, email, password) {
    // 사용자 생성 (객체 구조)
    const createdUser = {
      name: name,
      age: age,
      job: job,
      address: location,
      email: email,
      password: password,
    }
  
    return createdUser
  }
  
  const userMin = createUser('박중민', 22, '학생', '대전시', 'jungmin@naver.com', 'jomkdi@31')
  const userYoun = createUser('어수연', 31, '행정복지사', '이천시', 'suyoun@kakao.com', 'dkcisl!92')
  
  console.log(userMin)
  console.log(userYoun)

}

{
  // 단계 2. 사용자 정보를 포함하는 객체 생성 함수
  function createPremiumUser(userInfo) {
    const premiumUser = {
      grade: 'Premium',
      name: userInfo.name,
      age: userInfo.age,
      job: userInfo.job,
      address: userInfo.location,
      email: userInfo.email,
      password: userInfo.password,
    }

    return premiumUser
  }

  const userMin = createPremiumUser({
    name: '박중민', 
    age: 22, 
    job: '학생', 
    location: '대전시', 
    email: 'jungmin@naver.com', 
    password: 'jomkdi@31',
  })

  const userYoun = createPremiumUser({
    name: '어수연', 
    age: 31, 
    job: '행정복지사', 
    location: '이천시', 
    email: 'suyoun@kakao.com', 
    password: 'dkcisl!92',
  })

  console.log(userMin)
  console.log(userYoun)
}

// 단계 3. 사용자 정보를 포함하는 객체 생성 함수
{
  function createPremiumUser(userInfo) {
    // 매개변수(객체 타입) 구조 분해 할당
    const { 
        name, 
        age = 1, 
        job = '학생', 
        location: address = '서울시', 
        email = null, 
        password = null,
    } = userInfo

    const premiumUser = {
      grade: 'Premium',
      name: name,
      age: age,
      job: job,
      address: address,
      email: email,
      password: password,
    }

    return premiumUser
  }

  const userMin = createPremiumUser({
    name: '박중민', 
    age: 22, 
    job: '학생', 
    location: '대전시', 
    email: 'jungmin@naver.com', 
    password: 'jomkdi@31',
  })

  const userYoun = createPremiumUser({
    name: '어수연', 
    age: 31, 
    job: '행정복지사', 
    location: '이천시', 
    email: 'suyoun@kakao.com', 
    password: 'dkcisl!92',
  })

  const userHoon = createPremiumUser({
    name: '최지훈', 
    age: 42, 
    job: '변호사',
  })

  console.log(userMin)
  console.log(userYoun)
  console.log(userHoon)
}

{
  // 단계 4. 사용자 정보를 포함하는 객체 생성 함수
  // 매개변수(객체 타입) 구조 분해 할당
  function createPremiumUser({
    name,
    age = 1,
    job = '학생',
    location: address = '서울시',
    email = null,
    password = null,
  } = {}) {
    return {
      grade: 'Premium',
      name: name,
      age: age,
      job: job,
      address: address,
      email: email,
      password: password,
    }
  }

  const userMin = createPremiumUser({
    name: '박중민',
    age: 22,
    job: '학생',
    location: '대전시',
    email: 'jungmin@naver.com',
    password: 'jomkdi@31',
  })

  const userYoun = createPremiumUser({
    name: '어수연',
    age: 31,
    job: '행정복지사',
    location: '이천시',
    email: 'suyoun@kakao.com',
    password: 'dkcisl!92',
  })

  const userHoon = createPremiumUser({
    name: '최지훈',
    age: 42,
    job: '변호사',
  })

  console.log(userMin)
  console.log(userYoun)
  console.log(userHoon)
}
console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 기본값 설정: 매개변수 = 기본값 구문으로 인수가 undefined일 때를 대비합니다.
// 2. 객체 전달: 인수가 3개 이상일 때는 객체로 묶어 전달하는 것이 가독성과 유지보수에 좋습니다.
// 3. 구조 분해: 함수 내부에서 userInfo.name처럼 쓰지 않고 name으로 바로 접근해 코드를 줄입니다.
// 4. 안전장치: ({ ... } = {}) 처럼 전체 기본값으로 빈 객체를 주면 함수 호출 시 인수를 아예 안 써도 에러가 나지 않습니다.
// --------------------------------------------------------------------------