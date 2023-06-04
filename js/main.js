let cart = [];
let orders = [];
const ui = document.querySelector('.userInfo');
const order = document.querySelector('.order');
const goods = document.querySelector('.goods');
const shopsList = document.querySelector('.shopsList');
const ordersList = document.querySelector('.ordersList');
const navShop = document.querySelector('.shop');
const navCart = document.querySelector('.cart');
const costTotal = document.querySelector('#price');
const orderTitle = document.querySelector('.orderTitle');
const orderTotal = document.querySelector('.orderTotal');
const sliderBlock =  document.querySelector('.slider');
let history = [];


let orderNum = 0;
let numShop;
showSlider();
let totalPrice = 0;
//  is LocalStorage fuel?

if (localStorage.length) {
   history = JSON.parse(localStorage.getItem('history'))
     
};
showShops();
navShop.addEventListener('click', showShops);
navCart.addEventListener('click', showCart);

