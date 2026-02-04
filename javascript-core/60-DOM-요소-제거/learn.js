// --------------------------------------------------------------------------
// 실습: 요소 제거 및 이동 (remove, removeChild, insertBefore)
// --------------------------------------------------------------------------

// [실습 1] 멤버 제거
// 1. 모든 제거 버튼에 클릭 이벤트를 연결하세요.
// 2. 클릭된 버튼의 부모 요소인 <li>를 찾아 remove()를 사용해 제거하세요.
console.groupCollapsed("1. 요소 스스로 삭제하기 (remove)");

// 이곳에 코드를 작성하세요
// 요소 제거
(() => {
  const members = document.querySelector(".members");
  const removeButton = document.querySelector(" .remove-button");
  console.log(removeButton);

  removeButton.addEventListener("click", () => {
    members.removeChild(members.children[2]);
  });
}) ;//();

//removeChild() vs remove()
//removechild 삭제한 값 반환됨(삭제된 정보 저장)
//remove() 값을 완전히 삭제, 반환값 undefined

// 요소 이동
(() => {
  // 제거한 '최상준'을 박현일 앞, 이지아 뒤 위치로 이동
  const members = document.querySelector(".members");
  const [lee, park, choi] = members.children; // HTMLCollection [0, 1, 2, 3]
  // console.log({ lee, park, choi})

  const moveButton = document.querySelector(".move-button");

  moveButton.addEventListener("click", () => {
    // 최상준 제거 (최상준 반환됨)
    const removedChoi = members.removeChild(choi);
    console.log(removedChoi);

    // <박현일 앞>에 제거한 최상준 삽입
    members.insertBefore(removedChoi, park);

    // 이지아 뒤
    insertAfter(lee, removedChoi);

    // 부모요소 중심 메서드
    // 부모요소.appendChild()
    // 부모요소.insertBefore()
    // 부모요소.removeChild()

    // 요소 중심 메서드
    // 요소.prepend()
    // 요소.append()
    // 요소.before()
    // 요소.after()
    // 요소.remove()
  });

  // 사용자 정의 함수(기능)
// insertAfter(위치요소, 삽입요소)
function insertAfter(targetElement, insertElement) {
  // insertBefore() + appendChild() = insertAfter()
  // 위치요소의 부모 찾기
  const parentElement = targetElement.parentElement
  if (!parentElement) return
  // 부모의 자식: targetElement
  // targetElement의 다음 요소 찾자.
  const nextElement = targetElement.nextElementSibling
  if (nextElement) {
    // 있을 경우: 그 뒤 요소의 앞에 삽입 요소를 추가 (insertBefore)
    parentElement.insertBefore(insertElement, nextElement)
  } else {
    // 없을 경우: 부모의 마지막 자식 요소로 삽입 요소 추가 (appendChild)
    parentElement.appendChild(insertElement)
  }
}
})();

//[실습1]
{
  const practice = document.getElementById('practice1')
    practice.addEventListener('click', (e) => {
      const removeButton = e.target.closest('.btn-remove')
      // if (!removeButton) return
      if (removeButton) {
        console.log('리무브 버튼 클릭했어요!')
      } else {
        console.log('다른 데 클릭했어요...')
      }
    })
}
console.groupEnd();

// --------------------------------------------------------------------------
// [실습 2] 순서 이동
// 1. 위로 이동 버튼을 클릭하면 현재 li 요소를 바로 이전 li 요소 앞으로 이동시키세요.
// 2. '이전 요소'는 element.previousElementSibling을 활용해 찾을 수 있습니다.
// 3. 이동 후, 맨 위의 요소 버튼은 aria-disabled="true"로, 나머지는 "false"로 업데이트 하세요.
console.groupCollapsed("2. 요소 위치 이동 (insertBefore)");

// 이곳에 코드를 작성하세요

console.groupEnd();

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 간편한 삭제: 현대적인 브라우저에서는 부모를 찾을 필요 없는 .remove()가 선호됩니다.
// 2. 자동 이동: insertBefore나 appendChild를 쓰면 기존 위치에서 떼어내는 과정이 자동으로 일어납니다.
// 3. 반환값의 차이: removeChild는 떼어낸 요소를 반환하므로 나중에 재사용(재부착)할 때 유용합니다.
// 4. 접근성 고려: 요소의 순서가 바뀌면 스크린 리더 사용자를 위해 상태값(aria-disabled)을 갱신해주는 배려가 필요합니다.
// --------------------------------------------------------------------------
