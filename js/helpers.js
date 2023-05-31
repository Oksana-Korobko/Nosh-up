function createElement(elType, parent, text, attr) {
    const element = document.createElement(elType);
    if (elType === 'div') {
        element.textContent = text
    };
    if (attr) {
        element.setAttribute( `${attr}`, attr);
    }
    parent.appendChild(element);
    return element;
};

function showGoods(event){
    numShop = event.target.getAttribute('number');
    goods.textContent = "";
    const goodsList = shops[numShop].goods;
    goodsList.map(el => {
        goodsCard(el)
    })
  
}
function goodsCard(article){
    const elem = document.createElement('div');
    elem.classList.add('goodsCard');
    elem.textContent = article.name;
    const elemImg = document.createElement('div');
    elemImg.classList.add('goods__img');
    elemImg.insertAdjacentHTML('beforeend', '<img src="'+ article.url +'">');
    elem.appendChild(elemImg);
    const elemPrice = document.createElement('div');
    elemPrice.textContent = "Price: " + article.price;
    elem.appendChild(elemPrice);
    btnCreate("add", article.id, elem, addToCart);
    goods.appendChild(elem);
      
}

function addToCart(event){
    const id = event.target.getAttribute('article');
   
    if (! cart.includes(shops[numShop].goods[id-1])) {
        const order = shops[numShop].goods[id-1];
        order.cost = shops[numShop].goods[id-1].price;
        order.quantity = 1
        cart.push(order);   
           
    }
   
}

function btnCreate (attr, article, parent, handler){
    const btn = document.createElement('button');
    btn.setAttribute("user-operation", attr);
    btn.setAttribute("article", article);
    btn.textContent = attr;
    btn.addEventListener('click', handler);
    parent.appendChild(btn);
}



function createList(){
    const shopsList = document.querySelector('.shopsList');
    for (let i = 0; i< shops.length; i++){
        const elem = document.createElement('div');
        elem.textContent = shops[i].name;
        elem.classList.add("shops");
        elem.setAttribute('number', i);
        shopsList.appendChild(elem);
        elem.addEventListener('click', showGoods)
    }
    
}

function showShops(){
    ui.style.display = "none";
    order.style.display = "none";
    goods.style.display = "flex";
    shopsList.style.display = "block";
    shopsList.textContent = "";
    createList();
}

function showCart(){
    ui.style.display = "block";
    order.style.display = "block";
    goods.style.display = "none";
    shopsList.style.display = "none";
    
    showUserInfo();
    showOrder();

};
// User Info
function showUserInfo(){
    ui.innerHTML = "<h2>Introduction</h2>";
    const userForm = document.createElement('form');
    createElement('div', userForm, 'Name', undefined);
    createElement('input', userForm, undefined, 'uName');
    createElement('div', userForm, 'Email', undefined);
    createElement('input', userForm, undefined, 'uEmail');
    createElement('div', userForm, 'Phone', undefined);
    createElement('input', userForm, undefined, 'uPhone');
    createElement('div', userForm, 'Address', undefined);
    createElement('input', userForm, undefined, 'uAddress');
    ui.appendChild(userForm);
}


function showOrder () { 

    ordersList.textContent = "";
    if (cart.length === 0) {
        orderTitle.textContent = 'Shopping cart is empty';
        orderTotal.style.display = 'none';
    } else {
        orderTitle.textContent = "Your order:"
        orderTotal.style.display = 'block';
        for (let i = 0; i< cart.length; i++){
        const numOrder = i;  
        calcTotalPrice ();
        const orderCard = createElement('div', orderTotal);
        const elemImg = document.createElement('div');
        elemImg.classList.add('orders__img');
        orderCard.appendChild(elemImg);
        elemImg.insertAdjacentHTML('beforeend', '<img src="'+ cart[i].url +'">');
        const orderInfo = createElement('div', orderCard);
        createElement('div', orderInfo, cart[i].name);        
        createElement('div', orderInfo, 'Quantity: ');  
        const quantityInput = createElement('input',orderInfo); 
        quantityInput.setAttribute("type", "number"); 
        quantityInput.setAttribute('numOrder', numOrder);
        quantityInput.value =  cart[i].quantity;
        quantityInput.classList.add('quantity_input');
        quantityInput.addEventListener('change', costCalc); 
        }  
    
    }
    
   
}

function costCalc(event){
    const orderNumber = event.target.getAttribute('numOrder');

    
    cart[orderNumber].cost = Number(cart[orderNumber].price) * Number(event.target.value);
  
    cart[orderNumber].quantity = event.target.value;
    calcTotalPrice ();

    

    
}

function calcTotalPrice (){
    totalPrice = 0;
    for (let i = 0; i<cart.length; i++){
        totalPrice += Number(cart[i].cost);
    }        
    
    costTotal.textContent = totalPrice;

}
function submitOrder(){
    orders.push(cart);
    console.log(orders)
}

