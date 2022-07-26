

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

