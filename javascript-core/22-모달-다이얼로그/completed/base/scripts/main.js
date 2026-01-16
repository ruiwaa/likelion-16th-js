globalThis.addEventListener('DOMContentLoaded',() =>{
  const modalOpenel = document.querySelector('.modal-overlay')
  console.log(modalOpenel)
  const isOpenClassName = 'is-open'
  const buttonOpen = document.querySelector('.modal-open-button')
  //확인(테스트)
  // console.log(buttonOpen)

  buttonOpen.addEventListener('click',()=> {
    modalOpenel.classList.toggle(isOpenClassName)
  })
  
  

  
})