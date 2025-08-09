document.addEventListener("DOMContentLoaded", function(){
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuHamburger.addEventListener("click", () => {
        menuHamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });     
});