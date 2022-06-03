var burgerBtn = document.querySelector(".header__menu")
var nav = document.querySelector(".header__nav")


burgerBtn.addEventListener("click", (evt) => {
    nav.classList.toggle("nav--open")
})