const apple_1 = [
    {
        id:0,
        img:"/images/mobile/categories/iphone/14 pro max (purple).webp",
        pName:"APPLE iPhone 14 Pro Max (Deep Purple, 128 GB)",
        rating:"4.7",
        price:"₹1,04,799",
    },
    {
        id:1,
        img:"/images/mobile/categories/iphone/14 pro max (gold).webp",
        pName:"APPLE iPhone 14 Pro Max (Gold, 128 GB)",
        rating:"4.9",
        price:"₹1,32,999",
    },
    {
        id:2,
        img:"/images/mobile/categories/iphone/14 pro (silver).webp",
        pName:"APPLE iPhone 14 Pro (Silver, 128 GB)",
        rating:"4.3",
        price:"₹1,22,999",
    },
    {
        id:3,
        img:"/images/mobile/categories/iphone/14 pro (purple).webp",
        pName:"APPLE iPhone 14 Pro (Deep Purple, 128 GB)",
        rating:"4.4",
        price:"₹1,22,999",
    },
    {
        id:4,
        img:"/images/mobile/categories/iphone/14 (midnight).webp",
        pName:"APPLE iPhone 14 (Midnight, 128 GB)",
        rating:"4.6",
        price:"₹66,999",
    },
    {
        id:5,
        img:"/images/mobile/categories/iphone/14 (blue).webp",
        pName:"APPLE iPhone 14 (Blue, 128 GB)",
        rating:"4.7",
        price:"₹66,999",
    },
    {
        id:6,
        img:"/images/mobile/categories/iphone/13 pro max (green).webp",
        pName:"APPLE iPhone 13 Pro Max (Alpine Green, 512 GB)",
        rating:"4.8",
        price:"₹1,34,999", 
    },
]

const apple_1_HTML = document.querySelector('.container');

function renderapple_1(){
    apple_1.forEach((product)=>{
        apple_1_HTML.innerHTML += ` 
        <a href="product_details.html" target="_blank" class="product"  onclick="productImg('${product.img}')"> 
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
                    <i class="  fa-solid fa-cart-shopping header-shop"></i>
                    <h5 >
                        Add to cart
                    </h5>
                </div>
            </a>
        ` 
    })
}
renderapple_1();