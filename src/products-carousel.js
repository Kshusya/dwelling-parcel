const carousel = document.getElementsByClassName("product-block__list")[0];
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const gap = 30;
carousel.style.setProperty('--gap', `${gap}px`);

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.classList.add("product-block__circle_active");
    }
    if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.classList.remove("product-block__circle_active");
    }
});

prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.classList.remove("product-block__circle_active");
    }
    if (!carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.classList.add("product-block__circle_active");
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));