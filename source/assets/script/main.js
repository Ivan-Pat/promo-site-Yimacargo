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

     /* Slider feedback */
    const sliderFeedback = new Swiper('.feedback__slider', {
        modules: [ Navigation, Pagination ],
        navigation: {
          nextEl: '.feedback-prev',
          prevEl: '.feedback-next',
      
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // bulletActiveClass: "123",
        },
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        grabCursor: true,
        // enabled: false,
      
          breakpoints: {
            960: {

              slidesPerView: 2,
              spaceBetween: 20,

            }, 
            1200: {
              slidesPerView: 3,
              spaceBetween: 180,
              centerInsufficientSlides: true,
              centeredSlides: true,
              centeredSlidesBounds: true,
            }
          },
  })



  /* END ///Slider feedback */

  /* Slider news */

  const sliderNews = new Swiper('.news__slider', {
    modules: [ Navigation, Pagination ],
    navigation: {
      nextEl: '.news-prev',
      prevEl: '.news-next',
  
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    // enabled: false,
  
      breakpoints: {
        960: {

          slidesPerView: 2,
          spaceBetween: 20,

        }, 
        1200: {
          slidesPerView: 3,
          spaceBetween: 180,
          centerInsufficientSlides: true,
          centeredSlides: true,
          centeredSlidesBounds: true,
        }
      },
})
  /* END ///Slider news */
})


