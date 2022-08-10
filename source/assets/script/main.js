import {Swiper, Navigation, Pagination} from "swiper";

document.addEventListener('DOMContentLoaded', ()=> {
    /*nav menu burger*/

    const burger = document.querySelector(".burger");
    const burgerInner = document.querySelector('.burger-inner').addEventListener('click', clickBurger)
    burger.addEventListener("click", clickBurger);
    const navBody = document.querySelector(".header__nav");
    const body = document.querySelector('body');
    const navLink = document.querySelectorAll('.nav-link');
    
    for(let i =0; i<navLink.length; i++) {
      navLink[i].addEventListener('click', clickBurger)
    }
    
    function clickBurger(e) {
      let event = e.target
      
      if (window.innerWidth < 960) {
      navBody.classList.toggle('nav_active');
      body.classList.toggle("body-fixed");
      }

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

   /* Button scroll top */

const scrollTop = document.querySelector(".scroll-top")
scrollTop.addEventListener("click", clickScrollTop)

function clickScrollTop(){
  window.scrollTo({
    top,
    behavior: "smooth"
  })
}
window.addEventListener("scroll", windowScroll)

function windowScroll(){

  if (window.pageYOffset > 800 && !scrollTop.classList.contains("scroll-top_active")) {
    
    scrollTop.classList.toggle("scroll-top_active")
  } else if (window.pageYOffset < 800 && scrollTop.classList.contains("scroll-top_active")) {
    scrollTop.classList.toggle("scroll-top_active")
  }
}

 /* END ///Button scroll top */

  /* Pop up */
  const buttonPopUp = document.querySelectorAll('#buttonPopUp');
  
    for (let i=0; i < buttonPopUp.length; i++) {
      buttonPopUp[i].addEventListener("click", clickPopUp);
}
// const widgetLinkBut = document.querySelector(".widget-link-butt").addEventListener("click", clickPopUp)
const popUp = document.querySelector("#popUp");
const widgetLinkBut = document.querySelector(".widget-link-butt").addEventListener("click", clickPopUp);
const popUpBtnClose = document.querySelector(".pop-up__close");
popUpBtnClose.addEventListener("click", clickPopUp);

function clickPopUp() {
  popUp.classList.toggle("pop-up_acive");
  body.classList.toggle("body-fixed");

  popUp.focus();
  let popUpBtnSend = document.querySelector('.pop-up__button');
  popUpBtnSend.onblur = ()=> {
    popUpBtnClose.focus()
  }

}
   /* END ///Pop up */


   /*    wiget-nav*/
const wigetNav = document.querySelector(".widget-navigation");
const widgetNavButton = document.querySelector(".widget-navigation-button")
widgetNavButton.addEventListener("click", clickWidget)

function clickWidget() {
  wigetNav.classList.toggle("widget-navigation_active");
  widgetNavButton.classList.toggle("widget-but_active")
}


/* END   wiget-nav*/
})


