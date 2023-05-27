const apple_1 = [
    {
        id:0,
        img:"/images/laptop/l-7.webp",
        pName:"APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS) (16.2 inch, Space Grey, 2.1 kg)",
        rating:"4.7",
        price:"₹2,41,799",
    },
    {
        id:1,
        img:"/images/laptop/l-6.webp",
        pName:"APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS ) (13.3 Inch, Space Grey, 1.38 Kg)",
        rating:"4.9",
        price:"₹1,39,899",
    },
    {
        id:2,
        img:"/images/laptop/l-1.webp",
        pName:"acer Nitro 5 Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11)(15.6 inch, Shale Black, 2.2 kg)",
        rating:"4.3",
        price:"₹63,990",
    },
    {
        id:3,
        img:"/images/laptop/l-2.webp",
        pName:"acer Aspire 5 Core i5 11th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) A515-56 Thin Light Laptop  (15.6 inch, Pure Silver, 1.65 kg, MS Office)",
        rating:"4.4",
        price:"₹59,990",
    },
    {
        id:4,
        img:"/images/laptop/l-3.webp",
        pName:"ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA 1650/144 Hz) Gaming Laptop  (15.6 inch, 2.30 kg kg)",
        rating:"4.6",
        price:"₹49,999",
    },
    {
        id:5,
        img:"/images/laptop/l-4.webp",
        pName:"RedmiBook Pro Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Thin and Light Laptop  (15.6 inch, Charcoal Gray, 1.8 kg, With MS Office)",
        rating:"4.7",
        price:"₹36,999",
    },
    {
        id:6,
        img:"/images/laptop/l-5.webp",
        pName:"HP Pavilion Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows 10/4 GB Graphics/NVIDIA 1650/144 Hz) (15.6 inch, Shadow Black, 1.98 kg)",
        rating:"4.8",
        price:"₹49,990",
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
                        <li>17.3 Inch FHD, Value IPS-level, anti-glare display (Brightness 250nits, NTSC 45%, SRGB 62.5%)</li>
                        <li>1Light Laptop without Optical Disk Drive
                        </li>
                        </li>
                        <li>Gaming A17 is a feature-rich
                        </li>
                        <li>Cash on Delivery 7 Days Replacement Policy
                        
                        <li>All Screen FHD+ Display</li>
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