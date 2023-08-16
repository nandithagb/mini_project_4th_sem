// Cart data
let cartItems = [];

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsElement = document.querySelector('.cart-items');
  const cartTotalElement = document.querySelector('.cart-total');

  cartItemsElement.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
    total += item.price;
  });

  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Add item to cart
function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCartDisplay();
}

// Add to cart button event listener
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
  const productName = 'KAIVARA'; // Replace with actual product name
  const productPrice = 218; // Replace with actual product price
  addToCart(productName, productPrice);
});