// slider header

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.header-text');
    const dots = document.querySelectorAll('.carousel-dot_header');
    const header = document.querySelector('.header');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        switch (index) {
            case 0:
                header.style.backgroundImage = "url('images/mainBg1.jpg')";
                break;
            case 1:
                header.style.backgroundImage = "url('images/mainBg2.jpg')";
                break;
            case 2:
                header.style.backgroundImage = "url('images/mainBg3.jpg')";
                break;
            default:
                break;
        }
    }

    showSlide(currentSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

// slider why us

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.carousel-dot_whyWe');
    const arrowRight = document.querySelector('.arrow-right');


    let currentIndex = 0;

    function showSlide(n) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    showSlide(currentIndex);


    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    arrowRight.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});

// show more photos

const screenWidth = window.screen.width;

if (screenWidth < 548) {
    document.addEventListener("DOMContentLoaded", function() {
        const showMoreButton = document.getElementById('show-more');
        const hiddenPictures = document.querySelectorAll('.picture-4, .picture-5, .picture-6');

        showMoreButton.addEventListener('click', function() {
            hiddenPictures.forEach(picture => {
                picture.style.display = 'inline-block';
            });
            showMoreButton.style.display = 'none';
        });
    });
}

// burger



