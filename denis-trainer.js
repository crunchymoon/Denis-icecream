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


//Google maps
function initMap() {
                    //Map options
                    let options = {
                        zoom: 9,
                        center: {
                            lat: 46.2530,
                            lng: 20.1414
                        }
                    }

                    //New map
                    let map = new google.maps.Map(document.getElementById('map'), options);

                    //Add a custom icon
                    let image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

                    //Add any markers function 
                    function addMarker(props) {
                        let marker = new google.maps.Marker({
                            position: props.coords,
                            map: map,
                            icon: props.iconImg
                        });
                        if (props.content) {
                            let infoWindow = new google.maps.InfoWindow({
                                content: props.content
                            });
                            marker.addListener('click', (e) => {
                                infoWindow.open(map, marker);
                            })
                        }
                    }

                    let markers = [{
                            coords: {
                                lat: 46.2530,
                                lng: 20.1414
                            },
                            iconImg: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                            content: '<h1>szegde</h1>'
                        },
                        {
                            coords: {
                                lat: 46.0616,
                                lng: 20.0470
                            },
                            content: '<h1>kanizsaa</h1>'
                        }
                    ];
                    
                    markers.forEach(marker=>{
                        addMarker(marker);
                    })
//                    addMarker({
//                        coords: {
//                            lat: 46.2530,
//                            lng: 20.1414
//                        },
//                        iconImg: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//                        content: '<h1>szegde</h1>'
//                    })
//
//                    addMarker({
//                        coords: {
//                            lat: 46.0616,
//                            lng: 20.0470
//                        },
//                        content: '<h1>kanizsaa</h1>'
//                    })


                    //Add a single marker
                    /*
                    let marker = new google.maps.Marker({
                        position: {
                            lat: 46.2530,
                            lng: 20.1414
                        },
                        map: map,
                        icon: image
                    });
                    
                    //Add info window
                    let infoWindow = new google.maps.InfoWindow({
                        content: '<h1> Szegeeed </h1>'
                    });
                    marker.addListener('click',(e)=>{
                        infoWindow.open(map, marker);
                    })*/

                }