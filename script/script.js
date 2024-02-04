/**
 * ! Call elements in HTML 
 */
const productContainer = document.getElementById("container");
const slideimg = document.getElementsByClassName("myGallary");
const galleryModal = document.getElementsByClassName("mySlide");


/**
 * !This and object that keeps our products data
 **/
const productsData = [
    {
        id: ["imageproduct1", "imageproduct2", "imageproduct3", "imageproduct4"],
        img: ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"],
        smallImg: ["images/image-product-1-thumbnail.jpg", "images/image-product-1-thumbnail.jpg", "images/image-product-1-thumbnail.jpg", 
        "images/image-product-1-thumbnail.jpg"],
        price: 125,
    },
];


/**
 * !This is an empty array that will hold our product with the sessionStorage
 */
let basket = JSON.parse(sessionStorage.getItem("data")) || [];


/**
 * ! This is a function that displays our product base on the data above
 */
const displayProducts = () => {
    return (productContainer.innerHTML) = productsData.map(((product) => {
        let {id, img, price} = product;
        const currencyEx = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        return (`
        <div class="gallarryContainer" id="gallarryContainer">
            <div class="product_container" id="product_container">
                <div class="myGallary" id=${product.id[0]}>
                    <img src=${product.img[0]} alt="image-product-1" onclick="displayImg();currentInd(0)" class="product">
                </div>
                <div class="myGallary">
                    <img src=${product.img[1]} alt="image-product-1" onclick="displayImg();currentInd(1)" class="product">
                </div>
                <div class="myGallary">
                    <img src=${product.img[2]} alt="image-product-1" onclick="displayImg();currentInd(2)" class="product">
                </div>
                <div class="myGallary">
                    <img src=${product.img[3]} alt="image-product-1" onclick="displayImg();currentInd(3)" class="product">
                </div>
            </div>

            <div class="thumbnail_img_gallary" id="thumbnail_img_gallary">
                <div class="gallaryColumn active">
                    <img src="images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail" onclick="currentImg(0)">
                </div>

                <div class="gallaryColumn active">
                    <img src="images/image-product-2-thumbnail.jpg" alt="image-product-2-thumbnail" onclick="currentImg(1)">
                </div>

                <div class="gallaryColumn active">
                    <img src="images/image-product-3-thumbnail.jpg" alt="image-product-3-thumbnail" onclick="currentImg(2)">
                </div>

                <div class="gallaryColumn active">
                    <img src="images/image-product-4-thumbnail.jpg" alt="image-product-4-thumbnail" onclick="currentImg(3)">
                </div>
            </div>

            <div class="galleryModal">
                <div class="displayModal" id="displayModal">
                    <div class="mySlide">
                        <img src=${product.img[0]} alt="image-product-1">
                    </div>
        
                    <div class="mySlide">
                        <img src=${product.img[1]} alt="image-product-2">
                    </div>
        
                    <div class="mySlide">
                        <img src=${product.img[2]} alt="image-product-3">
                    </div>
        
                    <div class="mySlide">
                        <img src=${product.img[3]} alt="image-product-4">
                    </div>
                </div>
        
                <div class="rowContainer">
                    <div class="gallaryRow active">
                        <img src="images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail" onclick="currentInd(0)">
                    </div>
        
                    <div class="gallaryRow active">
                        <img src="images/image-product-2-thumbnail.jpg" alt="image-product-2-thumbnail" onclick="currentInd(1)">
                    </div>
        
                    <div class="gallaryRow active">
                        <img src="images/image-product-3-thumbnail.jpg" alt="image-product-3-thumbnail" onclick="currentInd(2)">
                    </div>
        
                    <div class="gallaryRow active">
                        <img src="images/image-product-4-thumbnail.jpg" alt="image-product-4-thumbnail" onclick="currentInd(3)">
                    </div>
                </div>


                <div class="icons">
                    <div class="close">
                        <img src="images/icon-close.svg" alt="icon-close" onclick="closeModal()">
                    </div>

                <div class="prev_next">
                    <div class="preview">
                        <img src="images/icon-previous.svg" alt="icon-previous" onclick="nextPrevious(-1)">
                    </div>
        
                    <div class="next">
                        <img src="images/icon-next.svg" alt="icon-next"  onclick="nextPrevious(1)">
                    </div>
                </div>
            </div>
            </div>
        </div>


        <div class="product_details">
            <h1>Sneaker Company</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div class="price">
                <h3>${currencyEx.format(price)}<span>50%</span></h3>
                <del>$250.00</del>
            </div>

            <div class="buttons">
                <div class="btn_increment_decrement">
                    <img src="images/icon-minus.svg" alt="icon-minus" onclick="decrement(${id[0]})">
                    <div class="quantity" id="quantity">0</div>
                    <img src="images/icon-plus.svg" alt="icon-plus" onclick="increment(${id[0]})">
                </div>

                <div class="add_cart">
                    <img src="images/icon-cart.svg" alt="icon-cart" onclick="addToCart(${id[0]})">
                    <p>Add to cart</p>
                </div>
            </div>
      </div>
        `)
    })).join("");
}
displayProducts();

/**
 * !Open a lightbox gallery by clicking on the large product image
 **/
let currentImage = 0;

const currentImg = (value) => {
    slideImage(currentImage = value);
}

const slideImage = (value) => {
    if (value > slideimg.length) {
        return currentImage = 0;
    }
    if (value < 0) {
        return currentImage = slideimg.length;
    }
    for (let i = 0; i < slideimg.length; i++) {
        slideimg[i].style.display = "none";
    }
    slideimg[currentImage].style.display = "block";
}
slideImage(currentImage);

const currentInd = (value) => {
    modalImage(currentImage = value);
}

const modalImage = (value) => {
    if (value >= galleryModal.length) {
        currentImage = 0;
        console.log(currentImage)
    }
    if (value < 0) {
        return currentImage = galleryModal.length;
    }
    for (let i = 0; i < galleryModal.length; i++) {
        galleryModal[i].style.display = "none";
    }
    galleryModal[currentImage].style.display = "block";
}
modalImage(currentImage);


/**
 * !Create a function when clicked on the lightBox it displays the gallaryModal
 */
const displayImg = () => {
    const imageModal = document.querySelector(".galleryModal");
    const navBar = document.getElementById("navBar");
    const product_container = document.getElementById("product_container");
    const thumbnail_img_gallary = document.getElementById("thumbnail_img_gallary");
    const product_details = document.querySelector(".product_details");

    imageModal.style.display = "block";
    navBar.style.opacity = "0.5";
    product_container.style.opacity = "0.25";
    product_details.style.opacity = "0.25"
    thumbnail_img_gallary.style.opacity = "0.25";
    document.body.style.backgroundColor = "hsl(220, 13%, 13%)";
}

/**
 * !A function when clicked closes the gallaryModal
 */
const closeModal = () => {
    const imageModal = document.querySelector(".galleryModal");
    const navBar = document.getElementById("navBar");
    const product_container = document.getElementById("product_container");
    const thumbnail_img_gallary = document.getElementById("thumbnail_img_gallary");
    const product_details = document.querySelector(".product_details");


    imageModal.style.display = "none";
    navBar.style.opacity = "";
    product_container.style.opacity = "";
    product_details.style.opacity = "";
    thumbnail_img_gallary.style.opacity = "";
    document.body.style.backgroundColor = "";
}

/**
 * !A function when clicked swipe the image left and right
 */
function nextPrevious(value) {
    currentInd(currentImage += value)
   // console.log(currentInd);
}


/**
 * !A function that shows when an item has been added in the cart
**/

const shoppingCart = () => {
    const emptyCartMessage = document.getElementById("emptyCart")
    const addedCartMessage = document.getElementById("addedcart_message");
    const currencyEx = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    if (basket.length !== 0) {
        return (addedCartMessage.innerHTML) = basket.map((items) => {
            let {id, item} = items;
            let search = productsData.find(((data) => data.id[0] === id)) || [];
            let {smallImg, price, img} = search;
            addedCartMessage.style.display = "block";
            emptyCartMessage.innerHTML= "";
            return (`
            <div class="cartItem">
                <div class="details">
                    <img src=${smallImg[0]} alt="image-product-1-thumbnail">
                        <p>Fall Limited Edition Sneakers ${currencyEx.format(price)} x ${item} 
                        <span>${currencyEx.format(search.price * item)}</span></p>
                        <img src="images/icon-delete.svg" alt="icon-delete" onclick="delItem(${id})">
                 </div>
                <button type="button">Checkout</button>
            </div>`
            );
        }).join("");
    } else {
        addedCartMessage.innerHTML= "";
        emptyCartMessage.innerHTML = `
        <div class="message">
            <p>Your cart is empty.</p>
        </div>
        `;
    }
}
shoppingCart();

/**
 * !A function that increment the item quantity
**/

const increment = (id) => {
    let selectedItem = id;
    let search = basket.find(((product) => product.id === selectedItem.id));
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } 
    else if (search.item === 4) {
        return;
    } else {
        search.item += 1;
    }
    updateQuantity(selectedItem.id);
    cartItemCount();
    shoppingCart();
    sessionStorage.setItem("data", JSON.stringify(basket));
}

/**
 * !A function that decrement the item quantity
**/
const decrement = (id) => {
    let selectedItem  = id;
    let search = basket.find(((product) => product.id === selectedItem.id));
    if (search === undefined) {
        return;
    }
     else {
        search.item -= 1;
    }
    updateQuantity(selectedItem.id);
    basket = basket.filter(((product) => product.item !== 0));
    shoppingCart();
    cartItemCount();
    sessionStorage.setItem("data", JSON.stringify(basket));
}


/**
 * !A function that update everytime the user increment o decrement the product
 */
const updateQuantity = (id) => {
    const quantity = document.getElementById("quantity");
    let search = basket.find(((product) => product.id === id));
    quantity.innerHTML = search.item;
}

/**
 * !A function that count the number of item added in the cart
 */
const cartItemCount = () => {
    const cartItem = document.getElementById("cartCount");
    cartItem.innerHTML = basket.map(((item) => item.item))
    .reduce((item1, item2) => item1 + item2, 0);
}
cartItemCount();


/**
 * !A function that add elements to cart
 */
const addToCart = (id) => {
    let selectedItem = id;
    let search = basket.find(((product) => product.id === selectedItem.id));
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        alert("Seems like this item has already been added in your cart");
    }
    cartItemCount();
    shoppingCart();
    sessionStorage.setItem("data", JSON.stringify(basket));
}


/**
 * !A function that delete elements to cart
 */

const delItem = (id) => {
    let selectedItem = id;
    basket = basket.filter(((product) => product.id !== selectedItem.id));
    cartItemCount();
    shoppingCart();
    sessionStorage.setItem("data", JSON.stringify(basket));
}


/**
 * !A function that open the cartBox
 */

const openCartBox = () => {
    const cartBox = document.getElementById("cartBox");
    if (cartBox.style.display === "") {
        cartBox.style.display="block";
    } 
    else {
        cartBox.style.display="";
    }
   
}


/**
 * !A function that display the menu on smaller screen only
 */
const displayMenu = () => {
    const menuBars = document.getElementById("menuNav");
    const closeMenu = document.getElementById("closeMenu");

    if (menuBars.style.display === "") {
        menuBars.style.display="block";
    }
        closeMenu.addEventListener("click", () => {
            menuBars.style.display="";
        });
        
}