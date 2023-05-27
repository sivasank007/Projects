const apple_1 = [
    {
        id:0,
        img:"/images/gadgets/camera/c-1.webp",
        pName:"SONY Alpha ILCE-7M4 Full Frame Mirrorless Camera 4K movie recording  (Black)",
        rating:"4.6",
        price:"₹2,13,249",
    },
    {
        id:1,
        img:"/images/gadgets/camera/c-2.webp",
        pName:"Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)",
        rating:"4.9",
        price:"₹35,499",
    },
    {
        id:2,
        img:"/images/gadgets/camera/c-3.webp",
        pName:"Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM  (Black)",
        rating:"4.3",
        price:"₹54,399",
    },
    {
        id:3,
        img:"/images/gadgets/camera/c-4.webp",
        pName:"SONY Alpha Full Frame ILCE-7M2K/BQ IN5 Mirrorless Camera Body with 28 - 70 mm Lens  (Black)",
        rating:"4.4",
        price:"₹84,599",
    },
    {
        id:4,
        img:"/images/gadgets/camera/c-5.webp",
        pName:"Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)",
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