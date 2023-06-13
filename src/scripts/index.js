const menuBurgerMobile = document.querySelector(".figure-burger");
const closeMenu = document.querySelector(".figure-close-burger")
const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav-desktop");

menuBurgerMobile.addEventListener("click", () => {
    navDesktop.setAttribute("id", "hidden");
    navMobile.removeAttribute("id", "hidden");
});

closeMenu.addEventListener("click", () => {
    navDesktop.removeAttribute("id", "hidden");
    navMobile.setAttribute("id", "hidden");
})
