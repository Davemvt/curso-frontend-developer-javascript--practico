const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
};


const productList = [];

productList.push({
    name: 'Alimento Cat Chow Gato Adulto sabor Carne y Pollo',
    price: 6147,
    image: "https://cdn.shopify.com/s/files/1/0370/1823/9113/products/purina-cat-chow-adultos-carne-y-pollo_1000x.png?v=1653315137",
});
productList.push({
    name: 'Alimento Cat Chow Gato Adulto sabor Pescado y Pollo',
    price: 9.985,
    image: "https://cdn.shopify.com/s/files/1/0370/1823/9113/products/alimento-gato-adulto-purina-cat-chow-pescado-y-pollo_380x.png?v=1651175845",
});
productList.push({
    name: 'Alimento Cat Chow Gato Castrado Esterilizado',
    price: 12.042,
    image: "https://cdn.shopify.com/s/files/1/0370/1823/9113/products/purina-cat-chow-esterilizados-pescado_1000x.png?v=1653315069",
});
productList.push({
    name: 'Alimento Cat Chow Gatito Kitten',
    price: 6.835,
    image: "https://cdn.shopify.com/s/files/1/0370/1823/9113/products/alimento-gatito-purina-cat-chow-pescado-carne-y-vegetales_380x.png?v=1651175958",
});
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
    <div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div>

*/

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product name, price, image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$ ' + product.price;

        const productName = document.createElement('p');
        productName.innerHTML = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard)

    }
};

renderProducts(productList);

