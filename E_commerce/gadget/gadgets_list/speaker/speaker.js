const apple_1 = [
    {
        id:0,
        img:"/images/gadgets/speaker/s-5.webp",
        pName:"JBL Flip Essential IPX7 Waterproof 16 W Bluetooth Speaker  (Grey, Stereo Channel)",
        rating:"4.6",
        price:"₹5,999",
    },
    {
        id:1,
        img:"/images/gadgets/speaker/s-2.webp",
        pName:"SONY SRS-XB13 Bluetooth Speaker  (Pink, Mono Channel)",
        rating:"4.9",
        price:"₹3,789",
    },
    {
        id:2,
        img:"/images/gadgets/speaker/s-3.webp",
        pName:"Aroma Studio 35 Faster 10 Hours Playing Time (Black, Stereo Channel)",
        rating:"4.3",
        price:"₹599",
    },
    {
        id:3,
        img:"/images/gadgets/speaker/s-4.webp",
        pName:"realme Pocket Speaker with Bass Radiator 3 W Bluetooth Speaker  (Classic Black, Stereo Channel)",
        rating:"4.4",
        price:"₹799",
    },
    {
        id:4,
        img:"/images/gadgets/speaker/s-1.webp",
        pName:"Aroma Studio 33 Funky 10 Hours Playing Bluetooth Speaker  (Blue, Stereo Channel)",
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