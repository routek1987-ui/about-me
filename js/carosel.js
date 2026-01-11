document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".carosel");
    const btnNext = document.querySelector(".interests__button-next");
    const btnPrev = document.querySelector(".interests__button-previous");

    btnNext.addEventListener("click", () => {
        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: "smooth"
        });
    });
    btnPrev.addEventListener("click", () => {
        carousel.scrollBy({
            left: -carousel.offsetWidth,
            behavior: "smooth"
        });
    });
});