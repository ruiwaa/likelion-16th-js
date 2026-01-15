// --------------------------------------------------------------------------
// 1번 문제
// --------------------------------------------------------------------------
const practice = document.querySelector('.practice')

// 실습 진행을 위한 메서드 이름 변수 작성
let methodName = 'add'

// .practice  .item-add 요소 찾기
const itemAdd = practice.querySelector('.item-add'), activeClassName = 'text-indigo-600'

// console.log(itemAdd)

// itemAdd 요소(객체)가 활성 클래스 이름을 가지고 있다면?
// 활성 클래스 이름을 제거해야 하니까 methodName 값을 'remove'로 변경
if (itemAdd.classList.contains(activeClassName)) methodName = 'remove'
// console.log('methodName =', methodName)

itemAdd.classList[methodName](activeClassName)

// --------------------------------------------------------------------------
// 2번 문제
// --------------------------------------------------------------------------
const itemRemove = practice.querySelector('.item-remove')
// console.log(itemRemove)
itemRemove.classList.remove('bg-yellow-100')


// --------------------------------------------------------------------------
// 3번 문제 한 번에 글자색, 두께, 배경색을 모두 바꿔보세요! (연쇄 조작)
// --------------------------------------------------------------------------
const itemMultiple = practice.querySelector('.item-multiple')
// console.log(itemMultiple)

// 모두 한 번에 적용
itemMultiple.classList.add(
  'bg-yellow-100', 
  'text-green-500', 
  'font-semibold'
)

// 배경색
// itemMultiple.classList.add('bg-yellow-100')
// 글자색
// itemMultiple.classList.add('text-green-500')
// 글자 두께
// itemMultiple.classList.add('font-semibold')

// --------------------------------------------------------------------------
// 4. "text-red-500"을 "text-green-500"으로 교체해 보세요! (교체)
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// 5. 없는 클래스를 다른 클래스로 바꾸려 하면 어떻게 될까요? (안정성)
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// 6. "text-indigo-600" 클래스가 있는지 확인하세요! (포함 여부 확인)
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// 7. "text-indigo-600" 클래스가 있다면 제거하고, 없다면 추가해보세요. (토글)
// --------------------------------------------------------------------------
