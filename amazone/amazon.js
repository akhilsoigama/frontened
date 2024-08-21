let images = document.querySelector(".images");
let heroImg = document.querySelectorAll(".hero-img");
let right = document.querySelector("#slider-right");
let left = document.querySelector("#slider-left");

let slideNumber = 1;
const pic = heroImg.length;
const nextSlide = ()=>{
    images.style.transform = `translateX(-${slideNumber*100}%)`;
    slideNumber++;
}
const previousSlide = ()=>{
    images.style.transform = `translateX(-${(slideNumber-2)*100}%)`;
    slideNumber--;
}
const getFristSlide = ()=>{
    images.style.transform = `translateX(-0px)`;
    slideNumber = 1;
}
const getLastSlide = ()=>{
    images.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNumber = pic;
}
right.addEventListener('click',()=>{
    slideNumber < pic ? nextSlide() : getFristSlide();
});
left.addEventListener('click',()=>{
    slideNumber >1 ? previousSlide() : getLastSlide();
});