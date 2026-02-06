// --------------------------------------------------------------------------
// 실습: 폼 필드 종합 제어
// --------------------------------------------------------------------------

// 폼 입력 필드 이벤트 제어
;(() => {
  
  // 폼 요소에 이벤트 리스너 추가 (이벤트 위임, 버블링 단계 활용)
  // 폼에 설정하는 이벤트 리스너
  // - focusin, focusout
  const emailRegisterForm = document.querySelector('.email-register-form')

  emailRegisterForm.addEventListener('focusin', (event) => {
    const { target: eventTarget } = event
    console.log('폼 외부에서 내부로 초점이 이동될 때 focusin 이벤트 발생:', eventTarget)
  })

  emailRegisterForm.addEventListener('focusout', (event) => {
    const { target: eventTarget } = event
    console.log('폼 내부에서 외부로 초점 벗어날 때 focusout 이벤트 발생:', eventTarget)
  })

  
  // 이메일 입력 필드 찾기 (form.elements 객체 : HTMLFormControlsCollection)
  const emailInput = emailRegisterForm.elements.email
  
  // 입력 필드에 직접 이벤트 리스너 추가
  // - change, input, focus, blur
  emailInput.addEventListener('change', (e) => {
    const input = e.currentTarget
    console.log('초점 벗어날 때 change 이벤트 발생:', input.value)
  })

  emailInput.addEventListener('input', (e) => {
    const { value } = e.currentTarget
    console.log('입력할 때마다 input 이벤트 발생:', value)
  })

  emailInput.addEventListener('focus', (e) => {
    const input = e.currentTarget
    console.log('초점 이동 시 focus 이벤트 발생:', input)
  })

  emailInput.addEventListener('blur', (e) => {
    const input = e.currentTarget 
    console.log('초점이 벗어날 때 blur 이벤트 발생:', input)
  })

}) //()

// 체크박스 체크 상태(checked ⭐️) 및 값(value: 기본 값 'on') 접근(읽기)
;(() => {
  
  const container = document.querySelector('.checkbox-container')
  const checkboxes = Array
    .from(container.children) // HTMLCollection → Array
    .slice(1) // <p> 제외 나머지 .checkbox-field만 수집 (새 배열 반환)
    .map((fieldElement) => {
      const checkbox = fieldElement.querySelector('[type="checkbox"]')
      return checkbox // .checkbox-field > input:checkbox 반환
    })
  
  console.log(checkboxes) // [input#apple, input#grape, input#lemon]

  checkboxes.forEach(checkbox => {
    // console.log(checkbox.value) // 값: 'on' ????
    console.log(checkbox.checked) // 체크 유무
  })

  // Element.hasAttribute(attrName)
  let checkedList = checkboxes.filter((checkbox) => checkbox.hasAttribute('checked'))
  // HTMLInputElement.checked
  checkedList = checkboxes.filter(({ checked }) => checked)
  // CSS 가상 클래스(Pseudo Class) 선택자 + 전개 구문
  checkedList = [...container.querySelectorAll(':checked')]
  console.log(checkedList)

  const firstCheckedBox = checkboxes.find(({ checked }) => checked)
  console.log(firstCheckedBox)

}) //()

// 체크박스 이벤트 리스너 추가
;(() => {
  
  const container = document.querySelector('.checkbox-container')
  
  // 이벤트 위임
  container.addEventListener('change', (e) => {
    const checkbox = e.target.closest('[type="checkbox"]')
    if (!checkbox) return

    // 구조 분해 할당
    const { id, checked } = checkbox
    // 향상된 객체 리터럴
    console.log({ id, checked })
    
    // console.log({ 
    //   id: checkbox.id, 
    //   checked: checkbox.checked 
    // })
  })

}) ()

// 라디오 버튼 체크 상태 및 값 접근(읽기)
;(() => {
  
  const container = document.querySelector('.radio-button-container')
  const radioControls = Array.from(container.querySelectorAll('[type="radio"]'))
  const radioValues = radioControls.map(({ value }) => value) // value 속성이 지정되지 않은 경우 기본값: 'on'
  console.log(radioValues)

  // 가공된 데이터 배열 만들기 목적
  const radiosChecked = radioControls.map(({ checked }) => checked)
  console.log(radiosChecked)

  // 배열의 각 요소 순환해 값 출력 목적
  radioControls.forEach(({ checked }) => console.log(checked))
  
  // 배열 내부에서 체크 상태가 참인 라디오 버튼 찾기
  const checkedRadioButton = radioControls.find(({ checked })=> checked)
  
  // 방어적 프로그래밍
  if (checkedRadioButton) {
    const { id, checked } = checkedRadioButton
    console.log({ id, checked })
  }

  // 배열 내부에서 체크 상태가 참인 것만 필터링
  const checkedRadios = radioControls.filter(({ checked }) => checked)
  console.log(checkedRadios)


}) ()

// 라디오 버튼 이벤트 리스너 추가
;(() => {

  const container = document.querySelector('.radio-button-container')
  const radios = container.querySelectorAll('[type="radio"]') // NodeList { forEach }
  
  // 개별 라디오 버튼에 이벤트 리스너 추가 (반복 처리)
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const { id, checked } = e.currentTarget
      console.log({ id, checked })
    })
  })

}) //()

// Textarea 속성 접근(읽기)
// Textarea 이벤트 리스너 추가
;(() => {
  
  const container = document.querySelector('.textarea-container')
  const textarea = container.querySelector('textarea')

  textarea.value = '   여러 줄\n입력\n합니다.       ' // 쓰기
  console.log(textarea.value.trim())             // 읽기

  textarea.addEventListener('change', (e) => {
    console.log('change:', e.currentTarget.value)
  })

  textarea.addEventListener('input', (e) => {
    console.log('input:', e.currentTarget.value)
  })

  textarea.addEventListener('focus', (e) => {
    console.log('focus:', e.currentTarget.value)
  })

  textarea.addEventListener('blur', (e) => {
    console.log('blur:', e.currentTarget.value)
  })

  container.addEventListener('focusin', (e) => {
    const { target } = e
    console.log('focusin:', target)
  })
  
  container.addEventListener('focusout', (e) => {
    const { target } = e
    console.log('focusout:', target)
  })

})()

// 드롭다운 (select) 선택된 옵션 값, 이름 접근(읽기)
// 드롭다운 체인지 이벤트 리스너 추가
;(() => {
  
  const container = document.querySelector('.select-container')
  const select = container.querySelector('select')

  select.addEventListener('change', (e) => {
    const { currentTarget: select } = e
    
    // console.log(select) // 셀렉트 요소
    // console.log(select.options) // 포함된 옵션들 (HTMLOptionsCollection)
    // console.log(select.selectedIndex) // 선택된 옵션의 인덱스
    
    // 선택된 옵션의 값 가져오기
    console.log('선택된 옵션 값:', select.value)

    if (select.value === '') {
      console.log('빈공백: 지역을 선택하세요')
    }

    // 선택된 옵션의 레이블(이름) 가져오기
    const selectedOption = select.options[select.selectedIndex]
    console.log('선택된 옵션 이름:', selectedOption.text)
  })

})()


// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 실시간 반응이 필요할 땐 'input', 입력 완료 시점은 'change'
// - focusout은 버블링이 발생하므로 폼 전체의 포커스 상태를 관리하기 편리함
// - select의 'text'는 options[selectedIndex]를 통해 접근 가능
// --------------------------------------------------------------------------