document.addEventListener("DOMContentLoaded", function(){
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuHamburger.addEventListener("click", () => {
        menuHamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });     

    // Seleciona todos os links internos do menu
    const navLinks = navMenu.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Executando no mobile e tablet
            if(window.innerWidth <= 1024) {
                const target = document.querySelector(link.getAttribute("href"));
                if(target) {
                    // Previne o pulo seco
                    e.preventDefault();
                    target.scrollIntoView({behavior: "smooth", block: "start"});

                    // Fecha o menu
                    menuHamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            }
        });
    });
});

// adiciona suporte para tecladono Menu Hamburguer
menuHamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
    }
});

//Função para alternar o estado do menu
menuHamburger.setAttribute("aria-expanded", String(isActive));

// Verifica o tamanho da tela e fecha o menu se necessário
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        menuHamburger.classList.remove("active");
        navMenu.classList.remove("active");
        menuHamburger.setAttribute("aria-expanded", "false");
    }
});
