import {Swiper, Navigation, Pagination} from "swiper";

document.addEventListener('DOMContentLoaded', ()=> {
    /*nav menu burger*/

    const burger = document.querySelector(".burger")
    burger.addEventListener("click", clickBurger)
    const navBody = document.querySelector(".header__nav") 
    const body = document.querySelector('body')
    
    function clickBurger(e) {
    let event = e.target
    
    navBody.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle("body-fixed")
    }
    /* END ///nav menu burger*/

    /* Slider banner */
    const sliderBanner = new Swiper('.banner', {
        modules: [ Navigation, Pagination ],
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          spaceBetween: 0,
          loop: true,
          grabCursor: true,
          enabled: false,
        
            breakpoints: {
              1024: {
                slidesPerView: 1,
                //slidesPerGroup: 1,
                watchOverflow: false, 
                enabled: true,
                loop: false,
                grabCursor: true,
              }, 
            },
    })
    /* END ///Slider banner*/

})


