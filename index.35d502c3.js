const slides = document.getElementsByClassName("review");
const dots = document.getElementsByClassName("reviews-block__dot");
let slidePosition = 0;
function updateReview(review_id) {
    for(let i = 0; i < slides.length; i++){
        const slide = slides[i];
        const dot = dots[i];
        slide.classList.remove("review_visible");
        dot.classList.remove("reviews-block__dot_active");
    }
    slidePosition = review_id;
    slides[slidePosition].classList.add("review_visible");
    dots[slidePosition].classList.add("reviews-block__dot_active");
}
let slideChangeInterval = setInterval(()=>{
    updateReview((slidePosition + 1) % dots.length);
}, 500);
function onButtonClick(event) {
    clearInterval(slideChangeInterval);
    updateReview(Array.prototype.indexOf.call(dots, event.currentTarget));
    const slideChangeInterval = setInterval(()=>{
        updateReview((slidePosition + 1) % dots.length);
    }, 500);
}
for (let dot of dots)dot.addEventListener("click", onButtonClick);

//# sourceMappingURL=index.35d502c3.js.map
