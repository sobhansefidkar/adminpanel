const api = "http://localhost:3000/api"

async function fetchOrder() {
    const id = window.location.href.split("=")[1]
    try {
        const res = await axios.get(`${api}/getOrder/${id}`)
        lists(res.data)
        orderList(res.data.products)
    } catch (err) {
        console.log(err)
    }
}
fetchOrder()

function lists(data) {
    const orderDetail = document.querySelector(".order-detail")
    const { _id, userId, createdAt, amount, address, products } = data
    orderDetail.innerHTML = `
        <div>
            <span>id :</span>
            <span>${_id}</span>
        </div>
        <div>
            <span>userId :</span>
            <span>${userId}</span>
        </div>
        <div>
            <span>date :</span>
            <span>${createdAt}</span>
        </div>
        <div>
            <span>amount :</span>
            <span>${amount}</span>
        </div>
        <div>
            <span>location :</span>
            <span style="font-size : small ;">${address[0].state.placeHolder + "/" + address[0].city + "/" + address[0].address + "/" + address[0].postCode + "/" + address[0].number + "/" + address[0].floor + "/" + address[0].transfreeFname + "/" + address[0].transfreeLname + "/" + address[0].transfreePhoneNumber}</span>
        </div>
        <div class="product-order">
            <span>products</span>
            <div class="product-order-container">
                <ul class="product-order-title">
                    <li>title</li>
                    <li>productCode</li>
                    <li>price</li>
                    <li>size</li>
                    <li>quentity</li>
                </ul>
            </div>
        </div>
    `
}
function orderList(data) {
    let order = document.querySelector(".product-order-container")
    data.forEach(item => {
        const ul = document.createElement("ul")
        ul.className = "product-order-value"
        ul.innerHTML = `
            <li>${item.name}</li>
            <li>${item.code}</li>
            <li>${item.price}</li>
            <li>${item.size}</li>
            <li>${item.qty}</li>
            `
        order.append(ul)
    });
}