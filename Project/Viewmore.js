document.addEventListener("DOMContentLoaded", ()=>{
    let products = JSON.parse(localStorage.getItem("products"))
    let selectedProductId = localStorage.getItem("selectedProductId")
    let productDetails = document.getElementById("productDetails")

    if(products && selectedProductId){
        let selectedProduct = products.find((product)=> product.id==selectedProductId
        )
        if(selectedProduct){
            productDetails.innerHTML = `<main>
            <div id="tophalf">
              <div id="pimg">
               <img src="${selectedProduct.images[0]}"/>
              </div>
              <div id="pdetail">
                <h2 id="title">${selectedProduct.title}</h2>
                <p id="brand"><strong>Brand: </strong>${selectedProduct.brand}</p>
                <p id="category"><strong>Category: </strong>${
                  selectedProduct.category
                }</p>
                <p id="descrip"><strong>Description: </strong>${
                  selectedProduct.description
                }</p>
                <p id="price"><strong>Price: </strong>$${selectedProduct.price}</p>
               <div id="butn">
                 <button id="addToCart">Add to Cart</button>
                 <button id="backToHome">Back to Home</button>
                 <button id="viewCart" onclick="viewCart()">View Cart</button>
               </div>
              </div>
            </div>

        <div id="review">
            <h1>Customer reviews</h1>
            <hr>
            ${selectedProduct.reviews.map(
              (review) => `
                <div id="ratings">${"❤".repeat(review.rating)}${"🖤".repeat(
                5 - review.rating
              )}</div>
            <p id="comment">${review.comment}</p>
            <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(
                          review.date
                        )}</p>
                        <hr>
                `
            )}
        </div>
        

</main>`

document.getElementById("addToCart").addEventListener("click", ()=>{
    addToCart(selectedProduct)
})

document.getElementById("backToHome").addEventListener("click", ()=>{
    window.location.href = "./Home.html"
})

        }else{
            productDetails.innerHTML="<p>NoT Products Found</p>"
        }


    }else{
        productDetails.innerHTML = "<p>No Product Found</p>"
    }

})

function viewCart(){
  window.location.href = "./Cart.html"
}



function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Your Product Added to Cart Successfully")
}

