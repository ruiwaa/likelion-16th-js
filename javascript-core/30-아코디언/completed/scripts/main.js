
// 각 요소들이 클릭을 하면 내용이 펼쳐지게 해야 함
// 1단계: 각 요소들에 is-open 클래스 네임을 부여
// 2단계: 각 요소들이 클릭할 때 핸들러 함수를 반복문이 담긴 함수로 연결
//-> 반복문 안에 이벤트를 생성하면 되었음

// // .accordion 클래스 이름으로 문서의 객체를 참조
// const firstAccordion = document.querySelector('.accordion')

// // console.log(firstAccordion)

// // 찾은 문서의 객체에 클릭 이벤트 리스너 추가
// firstAccordion.addEventListener('click', () => {
//   // 열기/닫기
// firstAccordion.classList.toggle('is-open')
// })

// 각 요소들 모두 선택 
const accodionList = document.querySelectorAll("div[data-theme]")
console.log(accodionList, typeof accodionList)

//for of 문 활용

// for(const accodienItem of accodionList){
//   accodienItem.addEventListener('click', () => {
//   accodienItem.classList.toggle('is-open')
// })  
// }


//for 문 사용
for(let i = 0, l = accodionList.length;i < l; i++){
  const accodienItem = accodionList[i]
  console.log(accodienItem)
  
  accodienItem.addEventListener('click', () => {
  accodienItem.classList.toggle('is-open')
})
}


//forEach 문 사용

// accodionList.forEach(accodienItem=>{
  
//   accodienItem.addEventListener('click',() => {
//     accodienItem.classList.toggle('is-open')
//   })
// })