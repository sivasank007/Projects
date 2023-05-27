const apple_1 = [
    {
        id:0,
        img:"/images/gadgets/pendrive/p-1.webp",
        pName:"SanDisk SDDDC3-064G-I35 64 GB OTG Drive  (Black, Type A to Type C)",
        rating:"4.7",
        price:"₹699",
    },
    {
        id:1,
        img:"/images/gadgets/pendrive/p-2.webp",
        pName:"SanDisk Dual Drive Go 128 GB OTG Drive  (Blue, Type A to Type C)",
        rating:"4.9",
        price:"₹1,089",
    },
    {
        id:2,
        img:"/images/gadgets/pendrive/p-3.webp",
        pName:"Simmtronics Ultra Speed USB 2.0 64 GB Pen Drive  (Silver)",
        rating:"4.3",
        price:"₹499",
    },
    {
        id:3,
        img:"/images/gadgets/pendrive/p-4.webp",
        pName:"HP V215B 32 GB Pen Drive  (Multicolor)",
        rating:"4.4",
        price:"₹349",
    },
    {
        id:4,
        img:"/images/gadgets/pendrive/p-5.webp",
        pName:"SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)",
        rating:"4.6",
        price:"₹399",
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
                        <li>USB 2.0|32 GB</li>
                        <li>For Laptop and may many devices
                        </li>
                        <li>Color:Multicolor
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