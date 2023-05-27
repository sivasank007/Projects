const apple_1 = [
    {
        id:0,
        img:"/images/gadgets/headphones/h-1.webp",
        pName:"TXOR CORE PC780, Gaming Headphones with 40 mm Gaming Headset (Blue, Black)",
        rating:"4.6",
        price:"₹1,249",
    },
    {
        id:1,
        img:"/images/gadgets/headphones/h-2.webp",
        pName:"Cosmic Byte G2050 RGB 7.1 Wired Gaming Headset  (Multicolor, On the Ear)",
        rating:"4.9",
        price:"₹1,189",
    },
    {
        id:2,
        img:"/images/gadgets/headphones/h-3.webp",
        pName:"PunnkFunnk K20 Gaming Headset (Black, On the Ear)",
        rating:"4.3",
        price:"₹1,399",
    },
    { 
        id:3,
        img:"/images/gadgets/headphones/h-4.webp",
        pName:"Casa Tech Best Extra bass Headphones  (Black, On the Ear)",
        rating:"4.4",
        price:"₹399",
    },
    {
        id:4,
        img:"/images/gadgets/headphones/h-5.webp",
        pName:"Matlek Gaming Headphones With Adjustable Mic (Blue, On the Ear)",
        rating:"4.7",
        price:"₹599",
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
                        <li>Power Output(RMS): 5 W</li>
                        <li>Wireless music streaming via Bluetooth
                        </li>
                        <li>Mobile/Tablet Speaker
                        </li>
                        <li>Cash on Delivery available and 7 Days Replacement Policy
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