const html = document.querySelector("html")
const menuBtn = document.querySelector(".active-menu")
const aside = document.querySelector(".aside")
const bg = document.querySelector(".bg")
const lightBtn = document.querySelector(".switch-light")
const darkBtn = document.querySelector(".switch-dark")
const imgWidget = document.querySelectorAll(".img-widget")

// ASIDE TOGGLE
menuBtn.addEventListener("click", () => {
    aside.classList.add("open")
    bg.classList.add("open")
})
bg.addEventListener("click", () => {
    aside.classList.remove("open")
    bg.classList.remove("open")
})
///////END ASIDE TOGGLE////////////////
window.addEventListener("load" , () => {
    const mode = localStorage.getItem("mode")
    html.setAttribute("data-theme", mode)
})
// LIGHT & DARK MODE
lightBtn.addEventListener("click", () => {
    localStorage.setItem("mode" , "light")
    html.setAttribute("data-theme", "light")
})
darkBtn.addEventListener("click", () => {
    localStorage.setItem("mode" , "dark")
    html.setAttribute("data-theme", "dark")
})
/////////END LIGHT & DARK MODE//////////////



