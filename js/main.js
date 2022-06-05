var burgerBtn = document.querySelector(".header__menu")
var menu = document.querySelector(".header")


burgerBtn.addEventListener("click", (evt) => {
    menu.classList.toggle("burger--menu")
})