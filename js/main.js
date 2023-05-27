
const shops = [
    {
        "name": "Summer Treat",
        "goods": [
            {
               "id": 1,
               "name": "Classic Pizza",
               "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/23/0/FNM_100116-Classic-Crust_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480972867043.jpeg", 
               "price": '$10' 
            },
            {
               "id": 2, 
               "name": "Pineapple Glazed Ham",
                "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/04/06/FNK_Pineapple-Apricot-Glazed-Ham_H_4x3.jpg.rend.hgtvcom.826.620.suffix/1586200112476.jpeg" , 
                "price": '$12' 
             },
             {
               "id": 3, 
               "name": "Classic Shrimp Scampi",
                "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/16/0/FNM_090120-Classic-Shrimp-Scampi_s4x3.jpg.rend.hgtvcom.826.620.suffix/1594915956100.jpeg", 
                "price": '$13'  
             },
             {
               "id": 4, 
               "name": "Linguine and Clams",
                "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/15/0/CASH_1_s4x3.jpg.rend.hgtvcom.826.620.suffix/1408128762992.jpeg" , 
                "price": '$15' 
             }
             
        ]
    },
    {
        "name": "Epic",
        "goods": [
            {
               "id": 1,
               "name": "Garlic Burger Patties",
               "url": "https://www.thespruceeats.com/thmb/RggxXasgBcaHExtv4ZInuFvJbkQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg", 
               "price": '$8'  
            },
            {
               "id": 2, 
               "name": "Butter Burgers",
                "url": "https://www.thespruceeats.com/thmb/LXtz21QVUFStKKa9qxmYGX-_EEg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butter-burger-4799859-hero-01-fe7fb6a623524539a6d52185160dfe94.jpg", 
                "price": '$12'  
             },
             {
               "id": 3, 
               "name": "Mini Burgers",
                "url": "https://www.thespruceeats.com/thmb/8aOa2rgIMk8CLCvSTJvXI1ia-O0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-american-sliders-479161-hero-04-8b32f8aa35ad462e9a8c701a1beddea3.jpg" , 
                "price": '$11' 
             },
             {
                
               "id": 4,
               "name": "Hamburger Hot Dogs",
                "url": "https://www.thespruceeats.com/thmb/cEXszR5dA2c4cCeoW59RfPjS9f8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hamburger-hot-dogs-480688-hero-01-806dc82af5a44b3ea3704e298b7c81c1.jpg" , 
                "price": '$9' 
             }
             
        ]
    }

    
    
];

const cart = [];
const ui = document.querySelector('.userInfo');
const order = document.querySelector('.order');
const goodsList = document.querySelector('.goods');
let numShop;
//  is LocalStorage empty?
if (localStorage.length === 0) {
   localStorage.setItem('shops', JSON.stringify(shops));
};

showShops();
