const apple_1 = [
    {
        id:0,
        img:"/images/mobile/categories/mi/mi-1.webp",
        pName:"Xiaomi 12 Pro 5G (Noir Black, 256 GB)  (12 GB RAM)",
        rating:"4.7",
        price:"₹59,840",
    },
    {
        id:1,
        img:"/images/mobile/categories/mi/mi-2.webp",
        pName:"Mi 11X (Cosmic Black, 128 GB)  (8 GB RAM)",
        rating:"4.9",
        price:"₹27,989",
    },
    {
        id:2,
        img:"/images/mobile/categories/mi/mi-3.webp",
        pName:"Redmi 10 Prime (Astral White, 64 GB)  (4 GB RAM)",
        rating:"4.3",
        price:"₹11,999",
    },
    {
        id:3,
        img:"/images/mobile/categories/mi/mi-4.webp",
        pName:"REDMI NOTE 10 LITE (Glacier White, 128 GB)  (4 GB RAM)",
        rating:"4.4",
        price:"₹13,790",
    },
    {
        id:4,
        img:"/images/mobile/categories/mi/mi-5.webp",
        pName:"Redmi Note 9 Pro (Interstellar Black, 64 GB)  (4 GB RAM)",
        rating:"4.6",
        price:"₹14,490",
    },
    {
        id:5,
        img:"/images/mobile/categories/mi/mi-6.webp",
        pName:"Redmi Note 11 PRO Plus 5G (Phantom White, 128 GB)  (8 GB RAM)",
        rating:"4.7",
        price:"₹22,999",
    },
    {
        id:6,
        img:"/images/mobile/categories/mi/mi-7.webp",
        pName:"Xiaomi 11i 5G (Purple Mist, 128 GB)  (6 GB RAM)",
        rating:"4.8",
        price:"₹24,999",
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