// USER PAGINATION
var data = [
    {_id : "1" , username :"sobhan" , family : "sefidkar" , phoneNumber : "09123456788"},
    {_id : "2" , username :"sajjad" , family : "fadaee" , phoneNumber : "09123456789"},
    {_id : "3" , username :"saeed" , family : "baghishani" , phoneNumber : "09123462789"},
    {_id : "4" , username :"hossein" , family : "rezaee" , phoneNumber : "09123456789"},
    {_id : "5" , username :"mohammad" , family : "mosavi" , phoneNumber : "09123456789"},
    {_id : "6" , username :"hasan" , family : "kermani" , phoneNumber : "09123456789"},
    {_id : "7" , username :"ali" , family : "sheidaee" , phoneNumber : "09123456789"},
    {_id : "8" , username :"reza" , family : "ravanbakhsh" , phoneNumber : "09123456789"},
    {_id : "9" , username :"masih" , family : "lorestani" , phoneNumber : "09123456789"},
    {_id : "10" , username :"mohsen" , family : "zakeri" , phoneNumber : "09123456789"},
    {_id : "11" , username :"melika" , family : "khodaparast" , phoneNumber : "09123456789"},
    {_id : "12" , username :"tanaz" , family : "babaee" , phoneNumber : "09123456789"},
    {_id : "13" , username :"mehti" , family : "kavandari" , phoneNumber : "09123456789"},
    {_id : "14" , username :"mohsen" , family : "karimi" , phoneNumber : "09123456789"},
]

let perPage = 10
let currentPage = 1

const paginatonData = document.querySelector(".pagination-datas")
const paginationBtn = document.querySelector(".pagination-btns")

function pagination(data, paginatonData, perPage, currentPage) {
    paginatonData.innerHTML = ""

    let lastUser = currentPage * perPage
    let firstUser = lastUser - perPage

    const paginationItems = data.slice(firstUser, lastUser)
    paginationItems.forEach(item => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>
        ${item._id}
        </td>
        <td>
        ${item.username}
        </td>
        <td>
        ${item.family}
        </td>
        <td>
        ${item.phoneNumber}
        </td>
        <td>
        <button class="remove-user">Remove</button>
        <a href="./userDetail.html?id=${item._id}" class="detail-user">Detail</a>
        </td>
        `
        paginatonData.append(tr)
        const removeUser = document.querySelectorAll(".remove-user")
        removeUser.forEach(Element => {
            Element.addEventListener("click" , async ()=> {
                console.log(Element)
                const res = await axios.delete(`${api}/deleteUser/${item._id}`)
                Swal.fire({
                    title: "success",
                    text: res.data.massage,
                    icon: res.data.type,
                    confirmButtonText: 'ok'
                })
            })
        });
    });
}
pagination(data, paginatonData, perPage, currentPage)
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
            pagination(data, paginatonData, perPage, currentPage)
            for (let i = 0; i < listBtn.length; i++) {
                listBtn[i].classList.remove("active")
            }
            list.classList.add("active")
        })
    });
}
btnPagination(data, paginationBtn, perPage, currentPage)

const searchUserInput = document.querySelector(".search-user-input")
const searchUserBtn = document.querySelector(".search-user-btn")
const userPageContainer = document.querySelector(".user-page-container")

searchUserBtn.addEventListener("click", async () => {
    const userFoundNothing = document.querySelector(".user-found-nothing")
    const filter = data.filter((item) => {
        return item.phoneNumber.includes(searchUserInput.value)
    })
    pagination(filter, paginatonData, perPage, currentPage)
    btnPagination(filter, paginationBtn, perPage, currentPage)
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
        pagination(data, paginatonData, perPage, currentPage)
        btnPagination(data, paginationBtn, perPage, currentPage)
        const userFoundNothing = document.querySelector(".user-found-nothing")
        if (userFoundNothing) {
            userFoundNothing.remove()
        }
    }
})