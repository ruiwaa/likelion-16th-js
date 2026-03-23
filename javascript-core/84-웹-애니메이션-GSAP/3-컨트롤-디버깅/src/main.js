import './style.css'

checkLibraryCall(
  'gsap', 
  `GSAP 라이브러리를 불러와야 합니다. <script src="https://unpkg.com/gsap/dist/gsap.min.js"></script>`
)

const rocket = document.querySelector('[data-anim-target="rocket"]')
const statusIndicator = document.querySelector('[data-status-indicator]')
const logList = document.querySelector('[data-log-list]')
const playBtn = document.querySelector('[data-action="play"]')
const pauseBtn = document.querySelector('[data-action="pause"]')
const resumeBtn = document.querySelector('[data-action="resume"]')
const reverseBtn = document.querySelector('[data-action="reverse"]')
const restartBtn = document.querySelector('[data-action="restart"]')

playBtn.addEventListener('click', handlePlay)
pauseBtn.addEventListener('click', handlePause)
resumeBtn.addEventListener('click', handleResume)
reverseBtn.addEventListener('click', handleReverse)
restartBtn.addEventListener('click', handleRestart)


// --------------------------------------------------------------------------
// 애니메이션

// TODO 2: 타임라인 생성 및 콜백(디버깅 핵심 도구) 활용
// - paused: boolean
// - onStart: () => void
// - onUpdate: () => void
// - onComplete: () => void
// - onReverseComplete: () => void
const tl = gsap.timeline({
  id: 'main',
  // 시작할 때 일시정지 설정
  paused: true,
  // 애니메이션이 시작할 때 실행되는 이벤트 콜백
  onStart() {
    updateStatus('애니메이션 시작됨! 🚀', 'active')
  },
  // 애니메이션이 진행중일 때 실행되는 이벤트 콜백
  onUpdate() {
    console.log(this.progress()) // 현재 애니메이션되는 타임라인(tl) 객체
    const progress = Math.round(this.progress() * 100)
    if (progress % 20 === 0) addLog(`애니메이션 진행률: ${progress}%`)
  },
  // 애니메이션이 종료되었을 때 실행되는 이벤트 콜백
  onComplete() {
    updateStatus('애니메이션 완료! ✅', 'waiting')
  },
  // 애니메이션 역재생 종료되었을 때 실행되는 이벤트 콜백
  onReverseComplete() {
    updateStatus('애니메이션 역재생 완료! ☑️', 'waiting')
  }
})

tl
  .to(rocket, { id: 'start', x: 350, rotation: 45, duration: 2, ease: 'power2.inOut' })
  .to(rocket, { id: 'flying', y: -50, duration: 1.5, ease: 'back.out(2)' })
  .to(rocket, { id: 'fadeout', opacity: 0, scale: 0.5, duration: 0.5 })

// 일시정지 메서드
// tl.pause()

// TODO 3: 디버그 플러그인 타임라인에 연결
addDebugPlugin(tl)


// --------------------------------------------------------------------------
// 이벤트 리스너

function handlePlay() {
  console.log('타임라인 재생(play)')
  // TODO 1-1: 타임라인 재생 기능 실행 : 처음부터 또는 현재 지점에서 재생
  tl.play()
}

function handlePause() {
  console.log('타임라인 일시정지(pause)')
  // TODO 1-2: 타임라인 일시정지 기능 실행 : 잠시 멈춤
  tl.pause()
}

function handleResume() {
  console.log('타임라인 재개(resume)')
  // TODO 1-3: 타임라인 재개 기능 실행 : 멈춘 지점에서 이어서 재생
  tl.resume()
}

function handleReverse() {
  console.log('타임라인 역재생(reverse)')
  // TODO 1-4: 타임라인 역재생 기능 실행 : 거꾸로 감기
  tl.reverse()
}

function handleRestart() {
  console.log('타임라인 재시작(restart)')
  // TODO 1-5: 타임라인 재시작 기능 실행 : 다시 처음으로 돌아가서 재생
  tl.restart()
}


// --------------------------------------------------------------------------
// UI 업데이트

function updateStatus(message, state) {
  statusIndicator.textContent = message
  statusIndicator.dataset.currentState = state
  addLog(`[상태] ${message}`)
}

function addLog(message) {
  const li = document.createElement('li')
  li.textContent = `> ${new Date().toLocaleTimeString()} : ${message}`
  logList.prepend(li)
}


// --------------------------------------------------------------------------
// 유틸리티

function checkLibraryCall(libraryName, errorMessage) {
  if (!(libraryName in globalThis)) {
    throw new Error(errorMessage)
  }
}

function addDebugPlugin(timeline) {
  checkLibraryCall(
    'GSDevTools', 
    `GSDevTools 플러그인을 불러와야 합니다. <script src="https://unpkg.com/gsap/dist/GSDevTools.min.js"></script>`
  )

  gsap.registerPlugin(GSDevTools)
  GSDevTools.create({ animation: timeline })
}