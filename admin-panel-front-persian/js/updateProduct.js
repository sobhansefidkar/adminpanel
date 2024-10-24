const form = document.querySelector(".form")

const incBtn = (e) => {
    e.preventDefault()
    const btn = e.target
    const input = document.createElement("input")
    input.classList.add(btn.getAttribute("data-class"))
    input.setAttribute("type", btn.getAttribute("data-class") == "instock" ? "number" : "string")
    input.setAttribute("placeholder", "new")
    if (btn.parentElement.childElementCount == 7) {
        return console.log("hello")
    } else {
        btn.parentElement.append(input)
    }
}
const decBtn = (e) => {
    e.preventDefault()
    const btn = e.target
    if (btn.parentElement.childElementCount == 4) {
        return console.log("hello")
    } else {
        btn.parentElement.removeChild(btn.parentElement.lastChild)
    }
}
form.addEventListener("submit", async (e) => {
    let id = window.location.href.split("=")[1]
    const Pcode = document.querySelectorAll("#Pcode")
    const title = document.querySelectorAll("#title")
    const desc = document.querySelectorAll("#desc")
    const price = document.querySelectorAll("#price")
    const imgs = document.querySelectorAll(".img")
    const cats = document.querySelectorAll(".cat")
    const sizes = document.querySelectorAll(".size")
    const instocks = document.querySelectorAll(".instock")
    e.preventDefault()
    let product = {
        productCode: "",
        title: "",
        desc: "",
        price: "",
        img: [],
        cat: [],
        sizes: [],
        instock: []
    }
    for (const code of Pcode) {
        if (code.value) {
            product.productCode = code.value
        } else {
            return messageHandling("Error!" , "post code needed" , "error")
        }
    }
    for (const code of title) {
        if (code.value) {
            product.title = code.value
        } else {
            return messageHandling("Error!" , "title needed" , "error")
        }
    }
    for (const code of desc) {
        if (code.value) {
            product.desc = code.value
        } else {
            return messageHandling("Error!" , "description needed" , "error")
        }
    }
    for (const code of price) {
        if (code.value) {
            product.price = Number(code.value)
        } else {
            return messageHandling("Error!" , "price needed" , "error")
        }
    }
    for (const img of imgs) {
        if (img.value) {
            product.img.push(img.value)
        } else {
            return messageHandling("Error!" , "img needed" , "error")
        }
    }
    for (const cat of cats) {
        if (cat.value) {
            product.cat.push(cat.value)
        } else {
            return messageHandling("Error!" , "category needed" , "error")
        }
    }
    for (const size of sizes) {
        if (size.value) {
            product.sizes.push(size.value)
        } else {
            return messageHandling("Error!" , "size needed" , "error")
        }
    }
    for (const stack of instocks) {
        if (stack.value) {
            product.instock.push(stack.value)
        } else {
            return messageHandling("Error!" , "instock needed" , "error")
        }
    }
    
    messageHandling("success" , "باموفقیت بروزرسانی شد" , "success")
})
function messageHandling(title , text , type){
    return Swal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonText: 'ok'
      })
}