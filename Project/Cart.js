document.addEventListener("DOMContentLoaded", ()=>{
    displayCart()
})

function displayCart(){
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    console.log(cart);

    cartContent.innerHTML=" ";
    let total = 0;
    if(cart.length===0){
        cartContent.innerHTML = `<p class="empty-message">Your Cart Is Empty. Start <span><a href="./Home.html">Shopping</a> Here</span><p>`
        totalPrice.innerHTML = "";
    }

    cart.map((product, index)=>{
        total += product.price;
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-info");
        productDiv.innerHTML = `<main>
        <img src="${product.images}" alt="${product.title}" class="product-image" />
        <div class="product-details">
          <h4>${product.title}</h4>
          <p>Price: $${product.price}</p>
          <button id="remove-btn" data-id="${product.id}" onclick="removeFromCart(${index})">Remove</button>
          <button id="backToHome" onclick="backToHome()">Back To Home</button>
        </div>
        </main>
        `
        document.getElementById("totalPrice").innerHTML=`<div>Total Price : <b>$${total.toFixed(2)}</b></div>`

        cartContent.appendChild(productDiv)
    })
}

function backToHome(){
    window.location.href = "./Home.html"
}

function removeFromCart(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if(confirm("Are you sure you want to delete this item from your shopping cart?")){
        cart.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cart))
        displayCart();
    }else{
        
    }

}
