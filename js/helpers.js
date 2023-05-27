function showGoods(event){
    numShop = event.target.getAttribute('number');
    goodsList.textContent = "";
    const goods = shops[numShop].goods;
    goods.map(el => {
        goodsCard(el)
    })
    // goodsList.textContent = goods;
}
function goodsCard(article){
    const elem = document.createElement('div');
    elem.classList.add('goodsCard');
    elem.textContent = article.name;
    // const img = document.createElement('img');
    const elemImg = document.createElement('div');
    elemImg.classList.add('goods__img');
    elemImg.insertAdjacentHTML('beforeend', '<img src="'+ article.url +'">');
    elem.appendChild(elemImg);
    const elemPrice = document.createElement('div');
    elemPrice.textContent = "Price: " + article.price;
    elem.appendChild(elemPrice);

    btnCreate("add", article.id, elem, addToCart);

    // elem.setAttribute('number', i);
    goodsList.appendChild(elem);
    // elem.addEventListener('click', showGoods)
    
}

function addToCart(event){
    const id = event.target.getAttribute('article');
    cart.push(shops[numShop].goods[id]);
    
    console.log(cart)
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
    createList();
}
