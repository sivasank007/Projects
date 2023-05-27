const apple_1 = [
    {
        id:0,
        img:"/images/mobile/categories/oppo/oppo-1.webp",
        pName:"PPO Reno8 5G (Shimmer Black, 128 GB)  (8 GB RAM)",
        rating:"4.7",
        price:"₹29,999",
    },
    {
        id:1,
        img:"/images/mobile/categories/oppo/oppo-2.webp",
        pName:"OPPO F21s Pro 5G (Starlight Black, 128 GB)  (8 GB RAM)",
        rating:"4.9",
        price:"₹25,989",
    },
    {
        id:2,
        img:"/images/mobile/categories/oppo/oppo-3.webp",
        pName:"OPPO A17 (Lake Bule, 64 GB)  (4 GB RAM)",
        rating:"4.3",
        price:"₹12,699",
    },
    {
        id:3,
        img:"/images/mobile/categories/oppo/oppo-4.webp",
        pName:"OPPO F19 (Midnight Blue, 128 GB)  (6 GB RAM)",
        rating:"4.4",
        price:"₹13,790",
    },
    {
        id:4,
        img:"/images/mobile/categories/oppo/oppo-5.webp",
        pName:"OPPO F19 Pro+ 5G (Fluid Black, 128 GB)  (8 GB RAM)",
        rating:"4.6",
        price:"₹19,490",
    }
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
                        <li>512 GB ROM</li>
                        <li>17.02 cm (6.7 inch) Super Retina XDR Display
                        </li>
                        <li>12MP + 12MP + 12MP | 12MP Front Camera
                        </li>
                        <li>A14 Bionic Chip with Next Generation Neural Engine Processor
                        </li>
                        <li>All Screen OLED Display</li>
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