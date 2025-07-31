function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const subtotal = document.getElementById("subtotal");

    let cart = JSON.parse(localStorage.getItem("cart"))||[];

    if(cart.length === 0) {
        cartItems.innerHTML ="<p>Your cart is empt</p>";
        subtotal.innerHTML = "";
        document.getElementById("checkoutBtn").style.display='none';
        return;
    }

    let total =0;
    cartItems.innerHTML = cart
    .map((item,index) => {
        total += item.price;
        return `
        <div class="cart-item">
            <div>
               <img class="image" src=${item.image}/>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">Rs ${item.price}</div>
                </div>
                <button onclick ="removeFormCart(${index})">Remove</button>
                </div>
                `;
    })
    .join("");

    subtotal.innerHTML =`<storage> subtotal:</strong> Rs ${total}`;
    document.getElementbyId("checkoutBtn").style.display ="inline-block";
}
function removerFormCart(index){
    let cart =JSON.parse(localstorage.getItem("cart")) || [];
    cart.splice(index,1);
    localstorage.setItem("cart", JSON.stringify(cart));
    loadcart();
}
document.getElementById("checkoutBtn").addEventListener("click", () => {
    window.location.href ="checkout.html";
});

loadCart();
                
