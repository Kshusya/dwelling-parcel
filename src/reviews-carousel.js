const slides = document.getElementsByClassName("review");
const dots = document.getElementsByClassName("reviews-block__dot");

let slidePosition = 0;
const totalSlides = slides.length;

function updateSlides() {
    slides[slidePosition].classList.add("review_visible");
    dots[slidePosition].classList.add("reviews-block__dot_active");
}

function onButtonClick(event) {
    const clickedButton = event.currentTarget;
    
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const dot = dots[i];

        slide.classList.remove("review_visible");
        dot.classList.remove("reviews-block__dot_active");

        if (dot === clickedButton)
            slidePosition = i;
    }

    clickedButton.classList.add("reviews-block__dot_active");
    updateSlides();
}

for (let dot of dots) {
        dot.addEventListener("click", onButtonClick);
    }

