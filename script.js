document.addEventListener('DOMContentLoaded', function() {
  fetch('me.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('my-data').innerHTML = data;
  })
  .catch(error => console.log('Error:', error));
});


let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartTotal += price;
    updateCartPreview();
}

function updateCartPreview() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

document.getElementById('cart-count').addEventListener('click', function() {
    document.getElementById('cart-preview').classList.toggle('show');
});

document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.size-option').forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');
    });
});
