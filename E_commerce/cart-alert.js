const cartBtn = document.querySelector(".cart-btn");
const box = document.querySelector(".maintanence");
const removeBtn = document.querySelector(".remove ");
const removeBtnText = document.querySelector(".remove-text ");

cartBtn.addEventListener('click',()=>{
    box.classList.add('active');       
})


removeBtn.addEventListener('click',()=>{
    box.classList.remove('active')
})
removeBtnText.addEventListener('click',()=>{
    box.classList.remove('active')
})