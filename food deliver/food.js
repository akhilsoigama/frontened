const left = document.querySelector('#slider-left');
const right = document.querySelector('#slider-right');
const cards = document.querySelector('.cards');
const photos = document.querySelectorAll('.foods');
let slideNumber = 1;
const length = photos.length;
const nextSlide = ()=>{
    cards.style.transform = `translateX(-${slideNumber*210}px)`;
    slideNumber++;
}
const previousSlide = ()=>{
    cards.style.transform = `translateX(-${(slideNumber-2)*210}px)`;
    slideNumber--;
}
const getFristSlide = ()=>{
    cards.style.transform = `translateX(-0px)`;
    slideNumber = 1;
}
const getLastSlide = ()=>{
    cards.style.transform = `translateX(-${(length-1)*210}px)`;
    slideNumber = length;
}
right.addEventListener('click',()=>{
    slideNumber < length ? nextSlide() : getFristSlide();
});
left.addEventListener('click',()=>{
    slideNumber >1 ? previousSlide() : getLastSlide();
});
// second slider
const left_2 = document.querySelector('#left');
const right_2 = document.querySelector('#right');
const foodsImages = document.querySelector('.foods-images');
const image = document.querySelectorAll('.image');
let sliderNumber = 1;
const LENGTH = image.length;
const secondSlide = ()=>{
    foodsImages.style.transform = `translateX(-${sliderNumber*250}px)`;
    sliderNumber++;
}
const firstSlide = ()=>{
    foodsImages.style.transform = `translateX(-${(sliderNumber-2)*250}px)`;
    sliderNumber--;
}
const getSecondSlide = ()=>{
    foodsImages.style.transform = `translateX(-0px)`;
    sliderNumber = 1;
}
const getEndSlide = ()=>{
    foodsImages.style.transform = `translateX(-${(length-1)*250}px)`;
    sliderNumber = LENGTH;
}
right_2.addEventListener('click',()=>{
    sliderNumber < LENGTH ? secondSlide() : getSecondSlide();
});
left_2.addEventListener('click',()=>{
    sliderNumber >1 ? firstSlide() : getEndSlide();
});