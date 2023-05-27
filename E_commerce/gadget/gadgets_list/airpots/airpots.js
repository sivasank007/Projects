const apple_1 = [
    {
        id:0,
        img:"/images/gadgets/airpots/a-1.webp",
        pName:"JBL Tune 230NCTWS with Active Noise Cancellation,40H Playtime (Black, True Wireless)",
        rating:"4.7",
        price:"₹5,099",
    },
    {
        id:1,
        img:"/images/gadgets/airpots/a-2.webp",
        pName:"OnePlus Nord Buds CE Truly Wireless Bluetooth Headset  (Misty Grey, True Wireless)",
        rating:"4.9",
        price:"₹1,999",
    },
    {
        id:2,
        img:"/images/gadgets/airpots/a-3.webp",
        pName:"boAt Airdopes 161 with ASAP Charge, Bluetooth Headset (Pebble Black, True Wireless)",
        rating:"4.3",
        price:"₹1,399",
    },
    {
        id:3,
        img:"/images/gadgets/airpots/a-4.webp",
        pName:"APPLE Airpods Pro Bluetooth Headset  (Pearl White, True Wireless)",
        rating:"4.4",
        price:"₹22,499",
    },
    {
        id:4,
        img:"/images/gadgets/airpots/a-5.webp",
        pName:"realme Buds Air 3 Bluetooth Headset  (Starry Blue, True Wireless)",
        rating:"4.6",
        price:"₹3,999",
    },
]

const apple_1_HTML = document.querySelector('.container');

function renderapple_1(){
    apple_1.forEach((product)=>{
        apple_1_HTML.innerHTML += ` 
        <div class="product">
                <div class="product-img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="product-description">
                    <h1>${product.pName}</h1>
                    <div class="star">
                        ${product.rating}
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                    ${product.price}
                    </div>
                    <ol class="description-list">
                        <li>With Mic:Yes</li>
                        <li>Wireless range: 10 m
                        </li>
                        <li>Nord Buds CE is a semi-in ear truly wireless earbuds with curved & rounded design.
                        </li>
                        <li>Get Up to 80 minutes of battery with fast charging in 10 minutes.
                        </li>
                        <li>1 Year Grant Warrrenty</li>
                    </ol>
                </div>
                <div class="add-to-cart">
                    <i class="fa-solid fa-cart-shopping header-shop"></i>
                    <h5 >
                        Add to cart
                    </h5>
                </div>
            </div>
        `
    })
}
renderapple_1();