const menuIcon = document.querySelector(".fas")
const navMenu = document.querySelector(".nav-menu")

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
