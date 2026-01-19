// --------------------------------------------------------------------------
// 무엇을 먼저 해야 하나?
// --------------------------------------------------------------------------
// - [✅] DOM → 문서(document)의 객체(Object, Element)를 찾아 변수(또는 상수)에 참조
// - [✅] 사용자와 상호작용 → 이전/다음 탐색 버튼에 클릭 이벤트 리스너(Event Listener) 추가
// - [✅] 기능(함수, Function) 구현 → 슬라이드 아이템을 감싼 리스트(<ul>)를 좌/우로 이동
// - [✅] 필요한 것을 구상/구현
//   - [✅] 상수(Constant Variables) 선언 (값이 고정된 경우: 바뀌지 않는 값)
//   - [✅] 변수(Variables) 선언 (값이 변하는 경우: 시간의 흐름에 따라 바뀌는 값)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 캐러셀 컴포넌트의 상수 선언
// --------------------------------------------------------------------------
const ITEM_WIDTH = 160 // 캐러셀 아이템의 너비: 160px
const GAP = 16 // 캐러셀 아이템 사이 간격: 16px
const ITEM_TOTAL_COUNT = 6 // 캐러셀 아이템의 총 개수: 6개
const ITEM_VIEW_COUNT = 2 // 화면에 표시되는 캐러셀 아이템의 개수: 2개
const INIDICATOR_TOTAL = Math.ceil(ITEM_TOTAL_COUNT / ITEM_VIEW_COUNT)
const DISTANCE = (ITEM_WIDTH + GAP) * ITEM_VIEW_COUNT // 이동 거리 = (아이템 너비 + 아이템 사이 간격) * 표시되는 아이템 개수

// --------------------------------------------------------------------------
// 캐러셀 컴포넌트의 변수 선언
// --------------------------------------------------------------------------
let currentIndex = 0 // 사용자가 보고 있는 현재(current) 인덱스(index)

// --------------------------------------------------------------------------
// 캐러셀 컴포넌트의 요소(객체) 참조
// --------------------------------------------------------------------------
// .carousel 문서 객체 참조
const carousel = document.querySelector('.carousel')

// .carousel__list 문서 객체 참조
const carouselList = carousel.querySelector('.carousel__list')

// .carousel__footer 문서 객체 참조
const carouselFooter = carousel.querySelector('.carousel__footer')
// [data-current] / [data-total] 문서 객체 참조
const carouselIndicator = carouselFooter.querySelector('.carousel__indicator')
const indicatorCurrent = carouselFooter.querySelector('[data-current]')
const indicatorTotal = carouselFooter.querySelector('[data-total]')
// [data-direction="previous"] / [data-direction="next"] 문서 객체 참조
const prevButton = carouselFooter.querySelector('[data-direction^="prev"]')
const nextButton = carouselFooter.querySelector('[data-direction="next"]')

// --------------------------------------------------------------------------
// 캐러셀 컴포넌트의 버튼에 이벤트 리스너 추가
// --------------------------------------------------------------------------

// 클릭(click) 이벤트 리스너 추가
prevButton.addEventListener('click', () => {
  goToCarouselList(-1)
})

nextButton.addEventListener('click', () => {
  goToCarouselList(1)
})

// --------------------------------------------------------------------------
// 캐러셀 컴포넌트의 기능(들)
// --------------------------------------------------------------------------

// 캐러셀 리스트(<ul>) 이동 기능(함수)
function goToCarouselList(direction) {
  // 현재 인덱스 값 수정(update)
  currentIndex = (currentIndex + direction + INIDICATOR_TOTAL) % INIDICATOR_TOTAL
  // carouselList.style 인라인 스타일 설정
  carouselList.style.translate = 'calc(-' + DISTANCE + 'px * ' + currentIndex + ') 0'

  // 인디케이터 업데이트 (기능 실행)
  updateIndicator()
}

// 캐러셀 인디케이터 업데이트 기능(함수)
// - 현재 인덱스 변경
// - aria-label="현재 {currentIndex + 1}페이지 (전체 3페이지)" 값 변경
function updateIndicator() {
  const nextCurrentIndex = currentIndex + 1
  // 인디케이터의 현재 인덱스 값 수정
  indicatorCurrent.textContent = nextCurrentIndex
  carouselIndicator.setAttribute('aria-label', '현재 '+ nextCurrentIndex +'페이지 (전체 '+ INIDICATOR_TOTAL +'페이지)')
}