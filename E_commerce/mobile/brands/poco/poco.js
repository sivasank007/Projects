const apple_1 = [
    {
        id:0,
        img:"/images/mobile/categories/poco/poco-1.webp",
        pName:"POCO X4 Pro 5G (Laser Black, 128 GB)  (6 GB RAM)",
        rating:"4.7",
        price:"₹16,499",
    },
    {
        id:1,
        img:"/images/mobile/categories/poco/poco-2.webp",
        pName:"POCO X4 Pro 5G (Laser Blue, 128 GB)  (6 GB RAM)",
        rating:"4.9",
        price:"₹16,399",
    },
    {
        id:2,
        img:"/images/mobile/categories/poco/poco-3.webp",
        pName:"POCO M4 5G (Cool Blue, 128 GB)  (6 GB RAM)",
        rating:"4.3",
        price:"₹13,999",
    },
    {
        id:3,
        img:"/images/mobile/categories/poco/poco-4.webp",
        pName:"POCO C31 (Shadow Gray, 64 GB)  (4 GB RAM)",
        rating:"4.4",
        price:"₹7,749",
    },
    {
        id:4,
        img:"/images/mobile/categories/poco/poco-5.webp",
        pName:"POCO M4 Pro (Cool Blue, 128 GB)  (6 GB RAM)",
        rating:"4.6",
        price:"₹13,999",
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