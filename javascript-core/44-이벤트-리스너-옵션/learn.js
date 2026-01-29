// --------------------------------------------------------------------------
// 실습: 이벤트 리스너 고급 옵션 (Advanced Options)
// --------------------------------------------------------------------------

// [실습] passive 옵션을 이용한 스크롤 성능 최적화
// 1. window 객체에 'wheel' 또는 'touchmove' 이벤트를 등록하세요.
// 2. { passive: true } 옵션을 설정하여 브라우저의 렌더링 대기 시간을 줄이세요.
// 3. 리스너 내부에서 e.preventDefault()를 호출했을 때 발생하는 경고를 콘솔에서 확인하세요.
console.group('passive 옵션 및 스크롤 최적화')

// 이곳에 코드를 작성하세요.
globalThis.addEventListener(
  'scroll',
  function listener(e) {
    const globalObject = e.currentTarget
    const scrollY = globalObject.scrollY
    console.log({ y: scrollY })
    
    if (scrollY > 500) {
      globalThis.removeEventListener('scroll', listener)
    }
  }
)

console.groupEnd()

// [실습] AbortController와 signal을 이용한 일괄 제거
// 1. new AbortController()를 생성하여 제어권을 확보하세요.
// 2. 여러 요소(버튼, 박스 등)에 이벤트를 등록할 때 { signal: controller.signal }을 전달하세요.
// 3. 특정 버튼을 클릭했을 때 controller.abort()를 실행하여 등록된 모든 이벤트를 한 번에 종료시키세요.
console.groupCollapsed('signal 옵션을 이용한 우아한 이벤트 제거')

// 이곳에 코드를 작성하세요.
const logButton = document.querySelector('[data-log]')

// 왜? 이걸 배워야 하나?
// 리스너 함수를 분리해 이름을 부여하지 않고도
// 함수 외부에서 추가된 이벤트 리스너를 제거할 수 있다.

// 어떻게?

// 최신 브라우저에서 지원 중인 실험적 기능
// AbortController는 abort '(일을) 도중하차하다[중단시키다]'는 의미
// 일을 중단시킬 수 있는 조절 기능을 제공하는 객체
// 그런데 이 객체는 생성해야지만 사용 가능

// AbortController 객체를 생성하는 방법
const controller = new AbortController()

console.log(controller) // AbortController { signal }

// AbortController 객체의 signal 속성은 AbortSignal { aborted: boolean }

// addEventListener() 메서드의 세 번째 인자(옵션) 객체의 signal 키 값에 AbortSignal 객체 연결
// addEventListener(type, listener, options { signal: AbortSignal })

// 익명(이름이 없는) 함수를 리스너로 사용해서
// 리스너 제거가 가능하지 않은 상황
logButton.addEventListener(
  'click',
  () => {
    console.log('이벤트가 연결되어 있어요.')
    console.log(`
    현재는 문제는 이름 없는 함수가 
    직접 리스너로 등록되서 제거할 방법이 없어요.
  `)
  },
  {
    signal: controller.signal // AbortSignal { aborted, reason, onabourt }
  },
)


setTimeout(() => {
    console.log('이벤트 리스닝을 중단하라! ❌')
    controller.abort()
}, 4000)
console.groupEnd()

// [실습] 익명 함수와 signal의 시너지 테스트
// 1. 함수를 변수에 담지 않고 '익명 함수' 형태로 이벤트 리스너를 등록하세요. (signal 옵션 포함)
// 2. abort() 호출 후, 변수에 담기지 않은 익명 함수 리스너도 깔끔하게 제거되는지 검증하세요.
console.groupCollapsed('익명 함수 리스너의 간편한 제거')

// 이곳에 코드를 작성하세요.

console.groupEnd()

// [실습] 복합 옵션 설정 (once + passive)
// 1. 단 한 번만 실행되면서도(once), 성능 최적화(passive)가 적용된 이벤트를 만드세요.
// 2. 옵션 객체에 두 속성을 동시에 담아 전달하는 로직을 작성하세요.
console.groupCollapsed('여러 옵션 동시 적용')

// 이곳에 코드를 작성하세요.

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. passive: "나는 preventDefault()를 쓰지 않겠다"는 선언입니다. 
//    브라우저는 이를 믿고 스크롤을 즉시 처리하여 화면 버벅임을 방지합니다. 
//    (모바일 최적화의 필수!)
// 2. signal: AbortController를 통해 이벤트를 제어합니다. 
//    함수 참조를 일일이 기억하지 않아도 신호 하나로 수십 개의 이벤트를 
//    동시에 끊어낼 수 있어 코드가 아주 간결해집니다.
// 3. 성능과 편의성: passive는 성능을 위해, signal은 개발자의 편의와 
//    코드 품질을 위해 사용합니다.
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// 실습 1. passive 옵션 테스트
// --------------------------------------------------------------------------

{
  const targetBox = document.getElementById('target-box')
  const checkPassive = document.getElementById('check-passive')
  const log = document.getElementById('log')

  // 현재 어볼트 컨트롤러 = 비어있음
  let currentController = null

  // 초기 실행 (처음 로드될 때 attachListener 함수 실행)
  attachListener()
  // 체크박스 변경 시, 리스너 재등록
  checkPassive.addEventListener('change', attachListener)

  function attachListener() {
    // 기존 리스너 제거 (AbortController 활용)
    if (currentController !== null) {
      // 기존에 추가된 이벤트 리스너 작업 중단
      currentController.abort()
    }

    // 생성된 어볼트 컨트롤러를 currentController 변수에 할당
    currentController = new AbortController() // AbortController {}
    
    // 체크 상태 확인 (패시브 설정)
    const isPassive = checkPassive.checked

    log.textContent = '현재 옵션: { passive: ' + isPassive + ' }'
    
    // 삼항 연산자 식
    // log.style.color = isPassive ? '#00f' : '#f00'
    if (isPassive) {
      log.style.setProperty('color', '#00f')
    } else {
      log.style.setProperty('color', '#f00')
    }

    // 타겟 박스에 이벤트 리스너 추가
    // abortController에 의해 추가된 리스너 작동 중단될 수 있음
    // currentController.abort() (removeEventListener 대체)
    targetBox.addEventListener(
      'wheel',
      (eventObject) => {
        // 비동기 프로그래밍
        // try...catch 문
        try {
          // 브라우저에게 기본 작동 방지 명령
          // 브라우저는 스크롤을 막으려는 시도 (일시적 대기 상태 => 모바일 환경 성능 저하)
          eventObject.preventDefault()

          log.textContent = '스크롤 차단 성공! (preventDefault 작동)'
        } catch (errorObject) {
          // passive: true일 때 오류 발생 (콘솔 패널 확인)
          console.error(errorObject)
        }

        if (isPassive) {
          log.textContent = '스크롤 됨 (passive라 차단 실패, 콘솔 확인)'
        }
      },
      // [TODO] 여기에 옵션 객체를 작성하세요.
      // 1. passive 값을 isPassive 변수로 설정
      // 2. signal 값을 currentController.signal로 설정
      {
        passive: isPassive, /* checked */
        signal: currentController.signal, /* AbortSignal */
      }
    )
  }
}

/**
 * passive는 브라우저 렌더링을 우선시 하기 때문에 성능 최적화할 때 쓰이는데, 
 * preventDefault()를 넣어버리면 성능 최적화라는 취지와는 대치되기 때문에 저런 에러가 뜬다고 보시면 되어요
 */


// --------------------------------------------------------------------------
// 실습 2. 이벤트 일괄 중지
// --------------------------------------------------------------------------

{
  const buttonStart = document.getElementById('button-start')
  const buttonStop = document.getElementById('button-stop')
  const trackerArea = document.querySelector('.tracker-area')
  const statusText = document.getElementById('status-text')
  const coords = document.getElementById('coordinates')

  // 추후 생성될 AbortController를 참조할 변수
  let controller = null

  // 추적 시작
  buttonStart.addEventListener('click', () => {
    // [TODO] 1. 새로운 AbortController를 생성하여 controller 변수에 할당하세요.
    /* 여기에 코드 작성 */

    // UI 업데이트
    buttonStart.disabled = true
    buttonStop.disabled = false
    trackerArea.classList.add('active')
    statusText.textContent = '마우스를 움직이거나 클릭해보세요!'

    // 마우스 이동 이벤트
    trackerArea.addEventListener(
      'mousemove',
      (e) => {
        coords.textContent = 'X: ' + e.offsetX + ', Y: ' + e.offsetY
      },
      // [TODO] 2. signal 옵션을 설정하세요.
      /* 여기에 코드 작성 */
    )

    // 클릭 이벤트
    trackerArea.addEventListener(
      'click',
      () => {
        trackerArea.style.backgroundColor = '#bbf7d0'
        setTimeout(() => (trackerArea.style.backgroundColor = '#e0f2fe'), 200)
        console.log('클릭 감지됨!')
      },
      // [TODO] 3. signal 옵션을 설정하세요.
      /* 여기에 코드 작성 */
    )
  })

  // 추적 중지 (Abort 실행)
  buttonStop.addEventListener('click', () => {
    console.log(controller)
    if (controller) {
      // [TODO] 4. 추가된 모든 이벤트를 한 번에 제거하세요.
      /* 여기에 코드 작성 */

      // UI 초기화
      buttonStart.disabled = false
      buttonStop.disabled = true
      trackerArea.classList.remove('active')
      statusText.textContent = '추적이 중지되었습니다.'
      coords.textContent = 'X: 0, Y: 0'
      controller = null
    }
  })
}
