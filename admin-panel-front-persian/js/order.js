var data = [
    {userId : 121684264 , createdAt : "1383/12/23" , amount : 2000000, location : {state : "خراسان رضوی" , city : "مشهد" , address : "الاهیه 38" , postCode : "1234567890" , number : "131" , floor : "سوم" , transfreeFname : "سبحان" , transfreeLname : "سفیدکار" , transfreePhoneNumber : "09017401234"} , products : [{title : "title" , productCode : "1000" , price : 1200000 , size : "48" , quentity : "2"}]},
    {userId : 121684264 , createdAt : "1383/12/23" , amount : 2000000, location : {state : "خراسان رضوی" , city : "مشهد" , address : "الاهیه 38" , postCode : "1234567890" , number : "131" , floor : "سوم" , transfreeFname : "سبحان" , transfreeLname : "سفیدکار" , transfreePhoneNumber : "09017401234"} , products : [{title : "title" , productCode : "1000" , price : 1200000 , size : "48" , quentity : "2"}]},
    {userId : 121684264 , createdAt : "1383/12/23" , amount : 2000000, location : {state : "خراسان رضوی" , city : "مشهد" , address : "الاهیه 38" , postCode : "1234567890" , number : "131" , floor : "سوم" , transfreeFname : "سبحان" , transfreeLname : "سفیدکار" , transfreePhoneNumber : "09017401234"} , products : [{title : "title" , productCode : "1000" , price : 1200000 , size : "48" , quentity : "2"}]},
]

const table = document.querySelector(".table")

function lists(datas) {
    table.innerHTML = ""
    datas.forEach(item => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="table-row">
        <ul class="uhead">
            <li class="order-userId">userID</li>
            <li class="order-date">date</li>
            <li class="order-amount">amount</li>
            <li class="order-products">products</li>
            <li class="order-operation">operation</li>
        </ul>
        <ul class="ubody">
            <li class="order-userId">${item.userId}</li>
            <li>${item.createdAt}</li>
            <li>${item.amount}</li>
            <li class="order-products-list">
                <ul class="order-products-titles">
                    <li>title</li>
                    <li>code</li>
                    <li>price</li>
                    <li>size</li>
                    <li>qty</li>
                </ul>
            </li>
            <li class="detail-btn">
                <a href="./orderDetail.html">detail</a>
            </li>
        </ul>
        <ul class="title-of-location">
            <li>location</li>
        </ul>
        <ul class="location-titles">
            <li>state</li>
            <li>city</li>
            <li class="location-address">address</li>
            <li>Pcode</li>
            <li>number</li>
            <li>floor</li>
            <li>Fname</li>
            <li>Lname</li>
            <li>Pnumber</li>
        </ul>
        <ul class="location-infos">
            <li>${item.location.state}</li>
            <li>${item.location.city}</li>
            <li class="location-address">${item.location.address}</li>
            <li>${item.location.postCode}</li>
            <li>${item.location.number}</li>
            <li>${item.location.floor}</li>
            <li>${item.location.transfreeFname}</li>
            <li>${item.location.transfreeLname}</li>
            <li>${item.location.transfreePhoneNumber}</li>
        </ul>
    </div>
        `
        table.append(div)
    });
}
lists(data, table)

function orderList(data) {
    data.forEach((element, i) => {
        let order = document.querySelectorAll(".order-products-list")
        element.products.forEach(item => {
            const ul = document.createElement("ul")
            ul.className = "order-details"
            ul.innerHTML = `
            <li>${item.title}</li>
            <li>${item.productCode}</li>
            <li>${item.price}</li>
            <li>${item.size}</li>
            <li>${item.quentity}</li>
            `
            order[i].append(ul)
        });
    })
}
orderList(data)
// SEARCH ORDER
const searchOrderInput = document.querySelector(".search-order-input")
const searchOrderBtn = document.querySelector(".search-order-btn")

searchOrderBtn.addEventListener("click", () => {
    const userFoundNothing = document.querySelector(".order-found-nothing")
    const filter = data.filter((item) => {
        return item.userId == searchOrderInput.value
    })
    lists(filter)
    if (userFoundNothing) {
        userFoundNothing.remove()
    }
    if (filter.length == 0) {
        const h1 = document.createElement("h1")
        h1.textContent = "found nothing"
        h1.className = "order-found-nothing"
        table.appendChild(h1)
    }
    if (searchOrderInput.value == "") {
        lists(data)
        const userFoundNothing = document.querySelector(".order-found-nothing")
        if (userFoundNothing) {
            userFoundNothing.remove()
        }
        orderList(data)
    }
    orderList(filter)
})
//////////////////////END SERACH ORDER/////////////////////////

function select() {
    const select = document.querySelector("#select")
    const date = new Date()
    const lastDay = new Date(date.setHours(date.getHours() - 24))
    const lastWeek = new Date(date.setHours(date.getHours() - 168))
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const lastYear = new Date(date.setMonth(date.getMonth() - 12))
    const times = ["", lastYear, lastMonth, lastWeek, lastDay]
    const labels = ["all", "lastYear", "lastMonth", "lastWeak", "lastDay"]
    for (let i = 0; i < times.length; i++) {
        const option = document.createElement("option")
        option.value = times[i]
        option.innerHTML = labels[i]
        select.append(option)
    }
}
select()