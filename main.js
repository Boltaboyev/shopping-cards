const productContainer = document.querySelector(".products-container")
const err = document.querySelector(".error404")

const response = new XMLHttpRequest()

response.open("GET", "./db.json")

response.send()
response.addEventListener("readystatechange", () => {
    if (response.readyState === 4) {
        getData(JSON.parse(response.responseText))
        err.style.display = "none"
    } else if (response.readyState !== 4) {
        err.style.display = "flex"
    }
})

function getData(data) {
    data.forEach((value) => {
        const card = document.createElement("div")
        card.classList.add("product-info")
        card.innerHTML = `
            <div class="product-img">
                <div class="category">
                    <a href="#!">${value.category}</a>
                </div>
                <img src="${value.image}">
            </div>

            <div class="product-name">
                <h3>${value.title.slice(0, 36)}</h3>
            </div>

            <div class="product-desc">
                <p>${value.description.slice(0, 50)}..</p>
            </div>

            <div class="product-price">
                <h1><span>${value.price}</span>$</h1>
                <h2><span>${
                    Math.floor(value.price) + Math.round(Math.random() * 50)
                }</span>$</h2>
            </div>

            <div class="bottom-info">
                <div class="product-rate">
                    <p>(${value.rating})</p>
                    <i class="fa-solid fa-star"></i>
                </div>

                <p>${value.count} pcs</p>
            </div>

            <button>Add to cart <i class="fa-solid fa-cart-shopping ml-[5px] text-[12px]"></i></button>
    `
        productContainer.append(card)
    })
}
