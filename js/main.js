let mobileNavBtn=document.querySelector('.mobile-nav-button')
let mobileNavBtnIcon=document.querySelector('.mobile-nav-button-icon')
let mobileNavWrp=document.querySelector('.mobile-nav-wrapper')

mobileNavBtn.addEventListener('click',()=>{
    mobileNavBtnIcon.classList.toggle('active')
    mobileNavWrp.classList.toggle('active')
})