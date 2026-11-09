const carousel = document.querySelector('.carrosel_box');
const btnNext = document.querySelector('#nextPage');
const btnPrev = document.querySelector('#prevPage');

btnNext.addEventListener('click', () => {
    const widthPage = carousel.clientWidth;
    console.log(widthPage);
    carousel.scrollBy({
        left: widthPage,
        behavior: 'smooth'
    });
});

btnPrev.addEventListener('click', () => {
    const widthPage = carousel.clientWidth;
    console.log(widthPage);
    carousel.scrollBy({
        left: -widthPage,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const widthPage = carousel.clientWidth;
        const currentPosition = carousel.scrollLeft + widthPage;

        if (currentPosition >= carousel.scrollWidth) {
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        carousel.scrollBy({
            left: widthPage,
            behavior: 'smooth'
        });

    }, 3000);
})