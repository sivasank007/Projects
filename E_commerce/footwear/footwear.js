const apple_1 = [
    {
        id:0,
        img:"/images/footwear/f-1.webp",
        pName:"FIRST Running Shoes For Men  (White)",
        rating:"4.6",
        price:"₹1,349",
    },
    {
        id:1,
        img:"/images/footwear/f-2.webp",
        pName:"Cricup 21 Cricket Shoes For Men  (White)",
        rating:"4.9",
        price:"₹2,699",
    },
    {
        id:2,
        img:"/images/footwear/f-3.webp",
        pName:"Synthetic Leather |Lightweight| Comfort| Summer|Trendy|Daily Use Derby For Men  (Black)",
        rating:"4.3",
        price:"₹1,199",
    },
    { 
        id:3,
        img:"/images/footwear/f-4.webp",
        pName:"SYRUS Running Shoes For Men  (Blue)",
        rating:"4.4",
        price:"₹1,249",
    },
    {
        id:4,
        img:"/images/footwear/f-5.webp",
        pName:"SIMBA PRO Running Shoes For Men  (Blue)    ",
        rating:"4.7",
        price:"₹2,499",
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