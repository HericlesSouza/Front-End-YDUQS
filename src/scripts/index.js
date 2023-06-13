const menuBurgerMobile = document.querySelector(".figure-burger");
const closeMenu = document.querySelector(".figure-close-burger");
const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav-desktop");

menuBurgerMobile.addEventListener("click", () => {
    navDesktop.setAttribute("id", "hidden");
    navMobile.removeAttribute("id", "hidden");
    navMobile.classList.add("animate-in");
});

closeMenu.addEventListener("click", () => {
    navMobile.classList.remove("animate-in");
    navMobile.classList.add("animate-out");
    setTimeout(() => {
        navDesktop.removeAttribute("id", "hidden");
        navMobile.setAttribute("id", "hidden");
        navMobile.classList.remove("animate-out");
    }, 800);
});
