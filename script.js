// Handle cart in localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function addToCart(product) {
    const cart = loadCart();
    cart.push(product);
    saveCart(cart);
    
  }
  
  function clearCart() {
    localStorage.removeItem("cart");
  }
  