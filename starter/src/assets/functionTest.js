
const cherry = {
  name: 'Cherry',
  price: 0.50,
  quantity: 0,
  productId: 123,
  image: './images/cherry.jpg'
}

const orange = {
  name: 'Orange',
  price: 0.75,
  quantity: 0,
  productId: 124,
  image: './images/orange.jpg'
}

const strawberry = {
  name: 'Strawberry',
  price: 1.25,
  quantity: 0,
  productId: 125,
  image: './images/strawberry.jpg'
}

const products = [cherry, orange, strawberry];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function updateQuantity(items, id, value) {
  items.forEach ((item) => {
    if (item.productId === id) {
      if (cart.includes(item)) {
        if (value === +1) {
          item.quantity += 1;
        } else if (value === -1) {
            item.quantity -= 1;
            if (item.quantity === 0) {
              cart.splice(cart.indexOf(item), 1);
            }
        } else if (value === 0) {
            item.quantity = 0;
            cart.splice(cart.indexOf(item), 1);
        }       
      } else if (!cart.includes(item)) {
          cart.push(item);
          item.quantity += 1;
      } 
    }
  })
}



function addProductToCart(id) {
  console.log("Add productId: " + id);
  updateQuantity(products, id, +1);
/*   products.forEach ((product) => {
    // if product is in the cart increment quantity
    if (product.productId === id) {
      if (cart.includes(product)) {
        product.quantity += 1;
      } else {
        // if not in cart  the product is added to the cart and quantity incremented
        cart.push(product);
        product.quantity += 1;  
      }
    }
  })
 */}

  
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(id) {
  console.log("Increment productId: " + id);
  updateQuantity(cart, id, +1);
/*   cart.forEach ((product) => {
    // check if product is in the cart and increment quantity
    if (product.productId === id) {
      if (cart.includes(product)) {
        product.quantity += 1;
      } 
    }
  })
 */}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(id) {
  console.log("Decrement productId: " + id);
  updateQuantity(cart, id, -1); 
/*   cart.forEach ((product) => {
    // check if product is in the cart and decrement quantity
    if (product.productId === id) {
      if (cart.includes(product)) {
        product.quantity -= 1;
      } 
      // If quantity  = 0 remove product from cart
      if (product.quantity === 0) {
          cart.splice(cart.indexOf(product), 1);
      }
    }
  })
 */}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(id) {
  console.log("Remove productId " + id);
  updateQuantity(cart, id, 0);
/*   cart.forEach ((product) => {
    // check if product is in the cart and remove it
    if (product.productId === id) {
      if (cart.includes(product)) {
        product.quantity = 0;
        cart.splice(cart.indexOf(product), 1);
      }
    }
  })
 */}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  console.log("Cart Total requested");  
  let total = 0;
  cart.forEach(function(product) {
    total += product.price * product.quantity;
  }) 
  return total; 
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  console.log("Empty cart requested");
  while (cart.length > 0) {
    cart.shift();
  }
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  console.log("Payment for products");
  total = cartTotal();
  balance = amount - total;
  return balance;
}


addProductToCart(123);
addProductToCart(124);
addProductToCart(125);
console.log("Cart list ", cart);

increaseQuantity(124);
increaseQuantity(124);
console.log("Cart list ", cart);

decreaseQuantity(124);
console.log("Cart list ", cart);

removeProductFromCart(125);
console.log("Cart list ", cart);

console.log("Total: $" + cartTotal());

emptyCart();
console.log("Cart list ", cart);


