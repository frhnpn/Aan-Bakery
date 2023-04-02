const product = [
    {
        id: 0,
        image: '1.png',
        title: 'Brownies Nutella',
        price: 15,
    },
    {
        id: 1,
        image: 'plate2.0.png',
        title: 'Manggo CheeseCake',
        price: 9,
    },
    {
        id: 2,
        image: 'plate3.0.png',
        title: 'Classic croissant',
        price: 4,
    },
    {
        id: 3,
        image: 'plate4.webp',
        title: 'Durian Crepe',
        price: 12,
    },
	{
        id: 4,
        image: 'plate5.0.png',
        title: 'Strawberry cheesecake',
        price: 9,
    },
	{
        id: 5,
        image: 'plate6.0.png',
        title: 'Tiramisu',
        price: 7,
    },
	{
        id: 6,
        image:'plate7.0.png',
        title: 'Blueberry Ice-cream Cake',
        price: 67,
    },
	{
        id: 7,
        image:'plate7.1.png',
        title: 'Chocolate Ripple Ice-cream Cake',
        price: 70,
    },
	{
        id: 8,
        image:'plate7.2.png',
        title: 'Chocolate Walnut Ice-cream Cake',
        price: 70,
    },
	{
        id: 9,
        image:'plate7.3.png',
        title: 'Mixed Fruits Ice-cream Cake',
        price: 65,
    },
	{
        id: 10,
        image:'plate8.0.jpg',
        title: 'Tart',
        price: 4,
    },
	{
        id: 11,
        image:'plate8.1.png',
        title: 'Chocolate Mousse Cup',
        price: 10,
    },
	{
        id: 12,
        image:'plate8.2.png',
        title: 'Strawberry Mousse Cup',
        price: 10,
    },
	{
        id: 13,
        image:'plate8.3.jpg',
        title: 'Puffs',
        price: 7,
    },
    {
        id: 14,
        image:'kek batik.jpg',
        title: 'Kek batik',
        price: 15,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>RM ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "RM "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RM "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>RM ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}