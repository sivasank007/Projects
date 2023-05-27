
let slidePosition=0; //slider

const sliders = document.querySelectorAll('.slider-item');
const totalSlider = sliders.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

 

/* ---------Slider---------- */

btnPrev.addEventListener('click',function(){
    PrevSlide();
});
btnNext.addEventListener('click',function(){
    NextSlide();
});

function updatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliders[slidePosition].classList.add('active');  
}

function PrevSlide(){
    if(slidePosition==0){
        slidePosition=totalSlider-1;
    }
    else{
        slidePosition--;
    }
    updatePosition();    
}
function NextSlide(){
    if(slidePosition==totalSlider-1){
        slidePosition=0;
    }
    else{
        slidePosition++;
    }
    updatePosition();
}

/*set interval*/
setInterval(()=>{
    if(slidePosition==totalSlider-1){
        slidePosition=0;
    }
    else{
        slidePosition++;
    }
    updatePosition();
},3000)

/*navbar*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

bar.addEventListener('click',()=>{
    nav.classList.add('active') 
})

close.addEventListener('click',()=>{
    nav.classList.remove('active')
})
