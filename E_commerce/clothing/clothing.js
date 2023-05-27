const apple_1 = [
    {
        id:0,
        img:"/images/clothing/c-2.webp",
        pName:"Men Color Block Hooded Neck Red, Black T-Shirt",
        rating:"4.6",
        price:"₹199",
    },
    {
        id:1,
        img:"/images/clothing/c-1.webp",
        pName:"Men Slim Fit Checkered Spread Collar Casual Shirt",
        rating:"4.9",
        price:"₹349",
    },
    {
        id:2,
        img:"/images/clothing/c-3.webp",
        pName:"Men Printed Hooded Neck Red, Black T-Shirt",
        rating:"4.3",
        price:"₹269",
    },
    { 
        id:3,
        img:"/images/clothing/c-4.webp",
        pName:"Men Slim Fit Solid Spread Collar Casual Shirt",
        rating:"4.4",
        price:"₹349",
    },
    {
        id:4,
        img:"/images/clothing/c-5.webp",
        pName:"Woven Kanjivaram Jacquard, Pure Silk Saree  (Pink)",
        rating:"4.7",
        price:"₹369",
    },
    {
        id:5,
        img:"/images/clothing/c-6.webp",
        pName:"Printed, Geometric Print Kanjivaram Silk Blend Saree  (Pink, Beige)",
        rating:"4.7",
        price:"₹289",
    },
    {
        id:6,
        img:"/images/clothing/c-7.webp",
        pName:"Embroidered Banarasi Satin Saree  (Dark Green)",
        rating:"4.7",
        price:"₹849",
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