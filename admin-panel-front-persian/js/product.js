var products = [
    { productCode: 1, img: "./images/product2-2.jpg", title: "product titles", sizes: ["48", "49", "50", "51"], colors: ["blue", "purple", "red", "green"], price: 1200000 },
    { productCode: 2, img: "./images/product4-1.jpg", title: "product title", sizes: ["48", "49", "50", "51"], colors: ["blue", "purple", "red", "green"], price: 1200000 },
    { productCode: 3, img: "./images/product5-1.jpg", title: "product title", sizes: ["48", "49", "50", "51"], colors: ["blue", "purple", "red", "green"], price: 1200000 },
    { productCode: 4, img: "./images/product6-2.jpg", title: "product title", sizes: ["48", "49", "50", "51"], colors: ["blue", "purple", "red", "green"], price: 1200000 },
    { productCode: 5, img: "./images/product7-1.jpg", title: "product title", sizes: ["48", "49", "50", "51"], colors: ["blue", "purple", "red", "green"], price: 1200000 },
]
const api = "http://localhost:3000/api"
const fetchProducts = async () => {
    try {
        const res = await axios.get(`${api}/getProductss`)
        
        
    } catch (err) {
        console.log(err)
    }
}
fetchProducts()
let perPage = 10
let currentPage = 1

const paginationProducts = document.querySelector(".pagination-products")
const paginationProductsBtn = document.querySelector(".pagination-products-btns")


function productPagination(products, paginationProducts, perPage, currentPage) {
    paginationProducts.innerHTML = ""

    let lastUser = currentPage * perPage
    let firstUser = lastUser - perPage

    const paginationItems = products.slice(firstUser, lastUser)
    paginationItems.forEach(item => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>
        ${item.productCode}
        </td>
        <td>
        <img class="product-image" src="${item.img}"/>
        </td>
        <td>
        ${item.title}
        </td>
        <td>
        ${item.sizes}
        </td>
        <td>
        <ul class="product-colors">
        <li>${item.colors}</li>
        </ul>
        </td>
        <td>
        ${item.price}
        </td>
        <td>
        <button class="remove-product">Remove</button>
        <a href="./updateProduct.html?id=${item.productCode}" class="detail-product">Update</a>
        </td>
        `
        paginationProducts.append(tr)
    });
}
productPagination(products, paginationProducts, perPage, currentPage)


function btnPagination(data, paginationBtn, perPage, currentPage) {
    paginationBtn.innerHTML = ""
    const qtyOfBtns = Math.ceil(data.length / perPage)

    for (let i = 1; i <= qtyOfBtns; i++) {
        let li = document.createElement("li")
        li.className = "user-list"
        li.innerHTML = `${i}`
        if (li.innerHTML == currentPage) {
            li.classList.add("active")
        }
        paginationBtn.append(li)
    }
    const listBtn = document.querySelectorAll(".user-list")
    listBtn.forEach(list => {
        list.addEventListener("click", () => {
            currentPage = Number(list.textContent)
            productPagination(products, paginationProducts, perPage, currentPage)
            for (let i = 0; i < listBtn.length; i++) {
                listBtn[i].classList.remove("active")
            }
            list.classList.add("active")
        })
    });
}
btnPagination(products, paginationProductsBtn, perPage, currentPage)

const searchUserInput = document.querySelector(".search-product-input")
const searchUserBtn = document.querySelector(".search-product-btn")
const userPageContainer = document.querySelector(".product-page-container")

searchUserBtn.addEventListener("click", async () => {
    const userFoundNothing = document.querySelector(".user-found-nothing")
    const filter = products.filter((item) => {
        return item.title.toLowerCase().includes(searchUserInput.value.toLowerCase())
    })
    productPagination(filter, paginationProducts, perPage, currentPage)
    btnPagination(filter, paginationProductsBtn, perPage, currentPage)
    if (userFoundNothing) {
        userFoundNothing.remove()
    }
    if (filter.length == 0) {
        const h1 = document.createElement("h1")
        h1.textContent = "found nothing"
        h1.className = "user-found-nothing"
        userPageContainer.appendChild(h1)
    }
    if (searchUserInput.value == "") {
        productPagination(products, paginationProducts, perPage, currentPage)
        btnPagination(products, paginationProductsBtn, perPage, currentPage)
        const userFoundNothing = document.querySelector(".user-found-nothing")
        if (userFoundNothing) {
            userFoundNothing.remove()
        }
    }
})