window.addEventListener('load', function () {
    const carouselSlide = document.querySelector('.carousel__slide');
    const carouselImages = document.querySelectorAll('.carousel__slide img');
    const carouselDots = document.querySelector('.carousel__dots');
    const carouselDot = document.querySelectorAll('.carousel__dots--dot');

    //Buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //Counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;
    console.log(size);
//    carouselSlide.style.transform = `translateX(${(-size*counter)}px)`;
    carouselImages[counter].style.transform = 'scale(1)';
    carouselImages[counter].style.transition = '0';

    nextBtn.addEventListener('click', (e) => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = 'transform 0.15s ease';
        counter++;
        carouselSlide.style.transform = `translateX(${(-size*counter)}px)`;
        if (carouselImages[counter].id == 'lastImg') {
            nextBtn.style.opacity = '0';
        }
        if (prevBtn.style.opacity = '0') {
            prevBtn.style.opacity = '1';
        };
    });

    prevBtn.addEventListener('click', (e) => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.15s ease';
        counter--;
        carouselSlide.style.transform = `translateX(${(-size*counter)}px)`;
        if (carouselImages[counter].id == 'firstImg') {
            prevBtn.style.opacity = '0';
        }
        if (nextBtn.style.opacity = '0') {
            nextBtn.style.opacity = '1';
        };
    });
    carouselSlide.addEventListener('transitionend', (e) => {
        carouselImages[counter].style.transform = 'scale(1)';
        carouselImages.forEach((carouselImg) => {
            carouselImg.style.transform = 'scale(.8)';
            if (carouselImages[counter] = carouselImg) {
                carouselImages[counter].style.transform = 'scale(1)';
            }
        })
    })

    carouselDot[counter].style.transform = 'scale(1.5)';
    carouselDot[counter].style.transition = '0';
    prevBtn.addEventListener('click', (e) => {
        carouselDot[counter].style.transform = 'scale(1.5)';
        carouselDot[counter].style.transition = 'transform 0.3s ease';
        carouselDot.forEach((carDot) => {
            if (carDot != carouselDot[counter]) {
                carDot.style.transform = 'scale(1)';
            }
        })
    });
    nextBtn.addEventListener('click', (e) => {
        carouselDot[counter].style.transform = 'scale(1.5)';
        carouselDot[counter].style.transition = 'transform 0.3s ease';
        carouselDot.forEach((carDot) => {
            if (carDot != carouselDot[counter]) {
                carDot.style.transform = 'scale(1)';
            }
        })
    });
});
