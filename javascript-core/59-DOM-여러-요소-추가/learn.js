// --------------------------------------------------------------------------
// 실습: 효율적인 요소 추가
// --------------------------------------------------------------------------

// 데이터 정의
const users = [
  { name: '김민수', age: 28, job: '웹개발자' },
  { name: '이수진', age: 32, job: '디자이너' },
  { name: '박지훈', age: 24, job: '대학생' },
  { name: '최유리', age: 29, job: '마케터' },
  { name: '정우성', age: 35, job: '교사' },
  { name: '한지민', age: 27, job: '간호사' },
  { name: '오세훈', age: 31, job: '회계사' },
  { name: '유나영', age: 26, job: '바리스타' },
  { name: '장동건', age: 38, job: '영업사원' },
  { name: '서지수', age: 23, job: '학생' },
]

{
  // 제어할 요소들
  const container = document.querySelector('.container')
  const button = container.firstElementChild
  const list = container.lastElementChild

  // 성능 저하를 유발하는 사례
  ;(() => {
    
    button.addEventListener('click', () => {
      users.forEach(({ job, name }) => {
        const item = document.createElement('li')
        item.textContent = `${job} ${name}`
        // 성능 저하를 유발하는 렌더링 (반복하는 동안 계속)
        list.append(item)
      })
    })

  })//()

 // 성능 최적화 사례 (요소 생성 및 삽입)
;(() => {
  
  button.addEventListener(
    'click', 
    () => {
      const items = users.map(({ job, name }) => {
        const item = document.createElement('li')
        item.textContent = `${job} ${name}`
        return item
      })

      // list.append(item0, item1, item2, ..., item9)
      // 전개 연산자를 사용하여 배열을 펼칠 수 있다. 
      // list.append(...items)
      list.append(...items) // item[]
    },
    { once: true },
  )

})//()

// 성능 최적화 사례 (HTML 문자열 DOM에 삽입)
  ;(() => {


    // list의 개별 요소에 이벤트 리스너 추가
    // 문제점: 새로 추가된 요소들의 내용을 가져올 수 없음 (동적이지 않음)
    // Array.from(list.children).forEach((child) => {
    //   child.addEventListener('click', (e) => {
    //     const item = e.currentTarget
    //     const itemContent = item.textContent
    //     alert(itemContent)
    //   })
    // })

    // 이벤트 위임의 위대함(?) 👏
    // 동적으로 추가된 요소들에게
    list.addEventListener('click', (e) => {
      const listItem = e.target.closest('li')
      if (!listItem) return
      alert(listItem.textContent)
    })
    
    button.addEventListener(
      'click', 
      () => {
        // ❌ 나쁜 코드 (성능 저하 )
        // users.forEach(({ job, name }) => {
        //   // HTML 코드 생성
        //   const htmlCode = `<li>${job} ${name}</li>`
        //   list.innerHTML += htmlCode // 그려라! x 10
        // })

        // ✅ 좋은 코드 (성능 저하 없음)
        // const liItemsHTMLCode = users
          // 메서드 체이닝
          // .map(({ job, name }) => `<li>${job} ${name}</li>`)
          // .join('')

        const liItemsHTMLCode = users
          .reduce((htmlCode, { job, name }) => {
            htmlCode += `<li>${job} ${name}</li>`
            return htmlCode
          }, '')

        // console.log(liItemsHTMLCode)
        list.innerHTML += liItemsHTMLCode // 그려라! x 1
      }
    )

  })()
}

const todaysMenu = [
  { name: '김치찌개', price: 9000 },
  { name: '비빔밥', price: 9500 },
  { name: '불고기', price: 12000 },
  { name: '제육볶음', price: 10000 },
  { name: '떡볶이', price: 7000 },
]

const newReviews = [
  { author: '김민수', content: '생각보다 매콤해서 입맛에 딱 맞아요!' },
  { author: '이수진', content: '냉동이라 큰 기대 안 했는데 맛있었어요.' },
  { author: '박지훈', content: '양념이 진해서 밥반찬으로 딱이에요.' },
]

// [실습 1] 사용자 정보 검색 및 추가 (개별 요소 생성)
// 1. form submit 시 입력값을 가져와 users에서 find 하세요.
// 2. 일치하는 사용자가 있다면 createElement로 li를 만들어 추가하세요.
console.groupCollapsed('1. 사용자 검색 및 추가')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// [실습 2] 메뉴 목록 렌더링 (innerHTML & map/join)
// 1. 버튼 클릭 시 todaysMenu 배열을 map과 join('')으로 <li> 문자열로 만드세요.
// 2. .menu 요소의 innerHTML에 한 번에 할당하세요.
console.groupCollapsed('2. 메뉴 일괄 렌더링')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// [실습 3] 리뷰 목록 추가 (DocumentFragment)
// 1. 버튼 클릭 시 createDocumentFragment()로 가상 바구니를 만드세요.
// 2. newReviews를 순회하며 li 요소를 만들어 바구니에 담으세요.
// 3. 마지막에 바구니를 .comments 목록의 맨 앞에 prepend 하거나 append 하세요.
console.groupCollapsed('3. Fragment 활용 리뷰 추가')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. DOM 접근 최소화: 반복문 안에서 appendChild를 호출하는 것은 지양해야 합니다.
// 2. innerHTML: 구조가 단순하고 기존 이벤트를 보존할 필요가 없을 때 가장 빠릅니다.
// 3. DocumentFragment: 기존 요소를 건드리지 않고 성능을 챙길 때 가장 안전한 바구니입니다.
// 4. map & join: 배열 데이터를 HTML 문자열로 바꿀 때 사용하는 환상의 콤비입니다.
// --------------------------------------------------------------------------