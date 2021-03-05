const sushi = [{
    name: "Hotroll",
    image: "assets/sushi/hotroll.jpg",
    description: "O Hot roll é um sushi empanado recheado com salmão e cream cheese. Faz parte da família dos makis ou seja dos sushis enrolados.",
    price: 19.99
}, {
    name: "Philadelphia",
    image: "assets/sushi/philadelphia.jpg",
    description: "Os makis são um tipo de sushi enrolados em forma de cilindro. Podem ser pequenos no diâmetro como os tradicionais hossomakis ou maiores como o futomaki (rolinhos grandes) e cortados com um ou dois centímetros de espessura.",
    price: 24.99
}]
sushi.map((item, index) => {
    let card = document.querySelector(".card").cloneNode(true)
        //preencher card
    card.querySelector(".card-head-title").innerHTML = item.name
    card.querySelector(".card-head-image img").src = item.image
    card.querySelector(".card-body-description").innerHTML = item.description
    card.querySelector(".card-footer-price .price").innerHTML = "R$ " + item.price
    document.querySelector(".card-area").append(card)
})