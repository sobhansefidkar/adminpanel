const chatSection = document.querySelector(".chat-section-container")
const pv = document.querySelector(".pv")
const pvContainer = document.querySelector(".pv-container")
const backTouserList = document.querySelector(".back-to-userList")
const lists = document.querySelectorAll(".list")
const topPv = document.querySelector(".top-pv")
window.addEventListener("load" , () => {
    chatSection.scrollTop = chatSection.scrollHeight
})
lists.forEach(list => {
    list.addEventListener("click" , () => {
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove("active")
        }
        list.classList.add("active")
        pv.classList.add("active")
    })
});
backTouserList.addEventListener("click" , () => {
    pv.classList.remove("active")
})
window.addEventListener("scroll" , () => {
    if(pageYOffset >= 100){
        pvContainer.classList.add("enable")
        topPv.style.top = pageYOffset - 100 + "px"
    }else{
        pvContainer.classList.remove("enable")
    }
})