const sliderImgList = document.querySelectorAll('.slider-img')

const sliderContainer = document.querySelector('.product-showcase__container')

const cartQuantity = document.querySelector('.cart-quantity')

const cartProductQuantity = document.querySelector('.cart-product__totalQ')

const cartProductTotal = document.querySelector('.cart-product__totalP')

const cartProductPrice = document.querySelector('.cart-product__price')

const cartDeleteBtn = document.querySelector('.cart-product__delete img')

const cartProduct = document.querySelector('.cart-product')

const cartSummary = document.querySelector('.cart-summary');

const directionBtnAll = document.querySelectorAll('.direction-btn')

const buttonRight = document.querySelector('.right')
const buttonLeft = document.querySelector('.left')

const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const quantity = document.querySelector('.quantity')
const addCartBtn = document.querySelector('.add-cart-btn')

const salesPrice = document.querySelector('.sales-price span')

const cart = document.querySelector('.cart img')



function cartAction() {
    cartSummary.classList.toggle('show')

}

function productQuantity(e) {
    let price = Number(salesPrice.textContent)
    let oldPrice = 125
    if(e.target.classList == 'plus-btn') {
        quantity.textContent =  Number(quantity.textContent) + 1
        salesPrice.textContent = price + oldPrice

    } else if(e.target.classList == 'minus-btn' && quantity.textContent > '0' ) {
        quantity.textContent =  Number(quantity.textContent) - 1
        salesPrice.textContent = price - oldPrice
    }

    e.preventDefault()
}

function deleteAction() {
    cartProduct.style.display = 'none'
}


function addProduct(e) {

    cartQuantity.textContent = quantity.textContent
    cartQuantity.classList.add('show')

    cartProductQuantity.textContent = quantity.textContent
    cartProductTotal.textContent = Number(cartProductQuantity.textContent) * Number(cartProductPrice.textContent)

    cartProduct.style.display = 'flex'
    e.preventDefault()
}


cart.addEventListener('mouseover', cartAction)
cartDeleteBtn.addEventListener('click', deleteAction)
addCartBtn.addEventListener('click', addProduct)
plusBtn.addEventListener('click', productQuantity)    
minusBtn.addEventListener('click',  productQuantity)
buttonRight.addEventListener('click', sliderAction)




