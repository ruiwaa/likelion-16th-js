// --------------------------------------------------------------------------
// 실습: 효율적인 요소 선택 전략과 JavaScript 훅(Hook)
// --------------------------------------------------------------------------

// [실습] 다양한 선택자를 활용한 요소 선택
// 1. ID 속성이 'main-title'인 요소를 선택하여 콘솔에 출력하세요.
// 2. Class 속성이 'description'인 요소를 선택하여 콘솔에 출력하세요.
// 3. 'button' 태그 이름을 가진 모든 요소를 선택하여 콘솔에 출력하세요.
// 4. 'data-role' 속성값이 'confirm'인 요소를 선택하여 콘솔에 출력하세요.
console.group("1. 상황별 선택자 활용");

// 이곳에 코드를 작성하세요.

//1번
const mainTitle = document.querySelector("#main-title")
console.log(mainTitle)

//2번
const descriptionClassName = document.querySelector('.description')
console.log(descriptionClassName)

//3번
const buttonTagName = document.getElementsByTagName("button") //htmlCollection
//const buttonTagName = document.querySelectorAll('button') //nodeList
console.log(buttonTagName)

//4번
const is_confirmed = document.querySelector('[data-role = "confirm"]')
console.log(is_confirmed)
console.groupEnd()

// [실습] JS 훅(js-접두사)을 활용한 상호작용 구현
// 1. JS 훅 클래스 '.jsNotification'을 사용하여 알림창 요소를 선택하세요.
// 2. JS 훅 클래스 '.jsHideBtn'을 사용하여 버튼 요소를 선택하세요.
// 3. 버튼에 'click' 이벤트 리스너를 추가하여, 알림창에 'hidden' 클래스가 추가되도록 만드세요.
console.group("2. JS 훅과 이벤트 연결");

//1번
const notification = document.querySelector('.js-notification')
console.log(notification)
//2번
const hideBtn = document.querySelector('.js-hide-button')  
console.log(hideBtn)  

//3번
// 이곳에 버튼 클릭 시 알림을 숨기는 로직을 작성하세요.
hideBtn.addEventListener('click',()=>{
notification.classList.toggle('hidden')
})
console.groupEnd();

//[실습] 장바구니
//1. `id`를 사용하여"전체 선택" 버튼을 선택하세요.
//2. `class`를 사용하여 모든 "상품 아이템(.cart-item)"을 한 번에 선택하세요.
//3. 버튼을 클릭하면, 모든 상품 아이템에selected클래스가 추가되도록 코드를 작성하세요.
console.group("3. 장바구니: 전체 선택자 활용")
//1번
const btn_select_all = document.querySelector('#btn-select-all')
console.log(btn_select_all)
//2번
const cartItems = document.querySelectorAll('.cart-item')
console.log(cartItems)
//3번
//forEach문
// btn_select_all.addEventListener('click',()=>{
//   cartItems.forEach((item)=>{
//     item.classList.toggle('selected')

//   })
// })

//for문
// for(let i = 0, l= cartItems.length;i< l; i++){
//   btn_select_all.addEventListener('click', ()=>{
// cartItems[i].classList.toggle('selected')
//   })
 
// }

//for of문 
for(const item of cartItems){
  btn_select_all.addEventListener('click', ()=>{
    item.classList.toggle('selected')
})}
console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 요소가 하나인 경우 고유 식별이 가능한 ID 선택자를 사용하는 것이 가장 좋습니다.
// 2. 요소가 여러 개인 경우 클래스나 속성 선택자를 사용하며, 태그 선택은 지양합니다.
// 3. 태그 선택자는 범위가 너무 넓어 의도치 않은 요소까지 수정될 위험이 큽니다.
// 4. HTML을 직접 제어할 수 없을 때는 데이터 속성(attribute)이 유용한 대안이 됩니다.
// 5. JS 조작용 클래스에 'js-' 접두사를 붙이면 스타일과 기능을 명확히 분리할 수 있습니다.
// 6. JavaScript 훅을 사용하면 유지보수 시 기능 손상을 예방하고 협업 효율을 높입니다.
// --------------------------------------------------------------------------
