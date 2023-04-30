const slideContainer = document.querySelector(".slides_container");
const slide = document.querySelector(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener(("click"), () =>{
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
})

prev.addEventListener(("click"), () =>{
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
})