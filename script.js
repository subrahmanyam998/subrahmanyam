// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add product to cart and show popup
function addToCart(event) {
    // Get product information
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').textContent;

    // Display popup or alert with product name
    alert(`Added "${productName}" to cart!`);

    // You can also add additional logic to add the product to the cart here
}
