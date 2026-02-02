// --------------------------------------------------------------------------
// 실습: 객체 구조 분해 할당 (Object Destructuring)
// --------------------------------------------------------------------------

// [실습] 기본 객체 분해 및 이름 변경
// 1. user 객체를 선언하고 name, email 속성을 담으세요.
// 2. 구조 분해 할당을 통해 name은 그대로, email은 userEmail이라는 이름으로 할당하세요.
// 3. 존재하지 않는 nickname 속성을 가져오되, 기본값으로 '익명'을 설정하세요.
console.groupCollapsed('객체 구조 분해 할당 실습')

// 이곳에 코드를 작성하세요
const myNotebook = {
  brand: 'Macbook Pro',
  processor: 'M4',
  ram:'32GB',
  ssd:'2TB',
  maker:'Apple'
}

// 구조 분해 할당: 더 펀리하고 많이 사용되는 방법
{
  // myNotebook 객체의 구조: { brand, processor, ram, ssd, maker }
  const { 
    brand: name,  // myNotebook 객체의 brand 속성 값을 지역 변수 name 할당
    processor: cpu, 
    memory, // myNotebook 객체에 없는 속성 이름 (값: undefined)
    ssd, 
    maker } = myNotebook

  // console.log(brand, processor, ram, ssd, maker)
  console.log(name, cpu, memory, ssd, maker)
}

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 배열 구조 분해 할당 (Array Destructuring)
// --------------------------------------------------------------------------

// [실습] 순서에 따른 배열 분해
// 1. [x, y, z] 좌표 값을 담은 배열을 생성하세요.
// 2. 구조 분해 할당을 사용하여 각 좌표를 개별 변수에 담아 출력하세요.
// 3. 배열에 값이 두 개뿐일 경우를 대비해 세 번째 변수에 기본값 0을 설정하세요.
console.groupCollapsed('배열 구조 분해 할당 실습')

// 이곳에 코드를 작성하세요
const points = [92, -24, 0]

{
  const x = points.at(0)
  const y = points.at(1)
  const z = points.at(-1)

  console.log(x, y,z)
}

{
  const[x,y,z] = points
  console.log(x,y,z)
}

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 함수 매개변수 구조 분해 (Function Parameter Destructuring)
// --------------------------------------------------------------------------

// [실습] 함수 인수에서의 활용
// 1. 상품명(title)과 가격(price)을 속성으로 가진 객체를 인자로 받는 printProduct 함수를 만드세요.
// 2. 함수의 매개변수 자리에서 즉시 구조 분해를 수행하세요.
// 3. 템플릿 리터럴을 사용하여 상품 정보를 출력해 보세요.
console.groupCollapsed('함수 매개변수 구조 분해 실습')

// 이곳에 코드를 작성하세요
// 객체 타입을 매개변수로 받는 경우
function printProduct(product) {
  // 전통적인 객체.속성 방식으로 값에 접근
  return `"${product.title}" 제품의 가격은 ${product.price.toLocaleString()}원입니다.`
}

// 객체 타입을 매개변수로 받은 경우
function printProductDA(product) {
  // 객체 타입 매개변수의 구조를 분해해 지역내 변수로 할당
  const { title, price } = product // { title, price }
  return `"${title}" 제품의 가격은 ${price.toLocaleString()}원입니다.`
}

// 객체 타입을 매개변수로 받은 경우
// 매개변수를 바로(즉시) 구조 분해 할당하여 지역내 변수로 선언
function printProductDAinParams({ title, price }) {
  return `"${title}" 제품의 가격은 ${price.toLocaleString()}원입니다.`
}

console.log(printProduct({ title: '샘표 진간장', price: 10500 }))
console.log(printProductDA({ title: '샘표 진간장', price: 10500 }))
console.log(printProductDAinParams({ title: '샘표 진간장', price: 10500 }))

// 함수가 배열 타입을 매개변수로 전달받는다면?

function printFriendsStep1(friends) {
  const friend1 = friends.at(0)
  const friend2 = friends.at(1)
  const friend3 = friends.at(2)
  const friend4 = friends.at(3)
  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}

function printFriendsStep2(friends) {
  const [friend1, friend2, friend3, friend4] = friends // [친구이름1, 친구이름2, 친구이름3, 친구이름4]

  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}

function printFriendsStep3([friend1, friend2, friend3, friend4]) {

  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}

console.log(printFriendsStep1(['박한영', '김준수', '장하준', '이현종']))
console.log(printFriendsStep2(['박한영', '김준수', '장하준', '이현종']))
console.log(printFriendsStep3(['박한영', '김준수', '장하준', '이현종']))


console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 객체 분해: {}를 사용하며, '키(Key) 이름'이 일치해야 합니다.
// 2. 배열 분해: []를 사용하며, '순서(Index)'에 따라 값이 할당됩니다.
// 3. 이름 변경: { 원본키: 새이름 } 구문으로 변수명을 바꿀 수 있습니다.
// 4. 기본값: = 기호를 사용하여 데이터가 없는 상황(undefined)을 안전하게 대비합니다.
// 5. 함수 활용: 매개변수 위치에서 바로 분해하면 함수 내부가 훨씬 깔끔해집니다.
// --------------------------------------------------------------------------