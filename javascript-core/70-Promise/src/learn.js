// --------------------------------------------------------------------------
// 실습: 프로미스(Promise) 객체 생성 및 체이닝
// --------------------------------------------------------------------------

;(() => {
const TIMEOUT = 3 // 3s

// Promise 생성자 함수를 사용해 인스턴스 생성
const promise = new Promise((resolve, reject) => {
  // console.log(typeof resolve) // 'function'
  // console.log(typeof reject) // 'function'

  // 비동기 작업 처리
  // 비동기 스케쥴링 (3초 뒤 타임아웃)
  setTimeout(() => {
    // 아직은 모르는 미결(pending) 상태
    // 둘 중 하나 성공(해결) 또는 실패(거절)
    if (Math.random() >= 0.05) {
      resolve('약속이 이행되었어! 😊')
    } else {
      reject(new Error('약속이... 거절되었어.. 😭'))
    }

  }, TIMEOUT * 1000)
})

// Promise 객체 (생성해야 사용 가능)
// Promise { then, catch, finally }
// pending (미결, 보류, pending) 
// 로딩바 표시
showLoading()

// Promise 객체 (생성해야 사용 가능)
// Promise { then, catch, finally }
// pending (미결, 보류, pending) 
promise/* 미결 상태인 약속이 이행되거나, 거절되는 것을 확인해 처리한다. */
  // -> fulfilled (이행, 해결, fulfilled) .then(callback)
  .then((response) => {
    renderList(response)
  })
  // -> rejected (거부, 거절, rejected) .catch(callback)
  .catch((error) => {
    printError(error)
  })
  .finally(() => {
    hideLoading()
    // console.log(`
    //   약속이 미결 상태에서 비동기 처리 후, 
    //   이행되거나 거절되거나 상관없이 항상 실행되어요! 
    //   파이널리~~
    // `)
  })

function showLoading() {
  console.log('로딩바 표시')
}

function hideLoading() {
  console.log('로딩바 감춤')
}

function renderList() {
  console.log('리스트 렌더링')
}

function printError() {
  console.log('오류 메시지 표시')
}


})//()

;(() => {
  
  // fetch(api_endpoint) 함수 -> promise 반환
  //   .then(onFulfillment)
  //   .catch(onRejected)

  // 클라이언트에 로딩 표시
  showLoading() 

  // 서버에 비동기 데이터 요청
  fetch('https://api.github.com/users/yamoo9/repos')
    // 해결(성공)
    // 클라이언트에 캐러셀 컴포넌트 렌더링
    .then((response) => response.json())
    .then((data) => renderCarousel(data))
    // 거절(실패)
    // 클라이언트에 오류 정보 표시
    .catch((error) => renderErrorInfo(error))
    // 최종(항상)
    // 클라이언트에 로딩 감춤
    .finally(() => hideLoading())



  function showLoading() {
    console.log('로딩 표시')
  }
  
  function hideLoading() {
    console.log('로딩 숨김')
  }

  function renderCarousel() {
    console.log('캐러셀 컴포넌트 렌더링')
  }
  
  function renderErrorInfo() {
    console.log('에러 정보 렌더링')
  }

})//()

;(() => {
fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(console.log);
})()

// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - 프로미스는 Pending(대기), Fulfilled(이행), Rejected(거부) 세 가지 상태를 가집니다.
// - .then()은 성공 시 실행되며, 반환된 값은 다음 .then()으로 전달(체이닝)됩니다.
// - .catch()는 실패(reject) 또는 체인 도중 발생한 에러(throw)를 잡아냅니다.
// - .finally()는 성공/실패 여부와 관계없이 항상 마지막에 실행되어 리소스를 정리합니다.
// - reject 시 문자열 대신 new Error()를 사용하면 디버깅에 유리한 콜 스택 정보를 얻습니다.
// --------------------------------------------------------------------------