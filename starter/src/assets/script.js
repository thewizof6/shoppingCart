/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [{
  name: 'Cherry',
  price: 0.50,
  quantity: 0,
  productId: 123,
  image: './images/cherry.jpg'
}, {
 name: 'Orange',
  price: 0.75,
  quantity: 0,
  productId: 124,
  image: './images/orange.jpg'
}, {
  name: 'Strawberry',
  price: 1.25,
  quantity: 0,
  productId: 125,
  image: './images/strawberry.jpg'
}];



/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];


/* Helper function -
Updates product quantities cart, by incrementing, decrementing,or removeing the product as needed.
Argument description:
  - 'items' Pass the array being modified
  - 'id procuctid of desireds product
  - 'action' determines action to take: increment (+1), decrement (-1), and remove (0)
*/

function updateQuantity(items, id, action) {
  items.forEach ((item) => { 
    if (item.productId === id) {  
      if (cart.includes(item)) {  
        if (action === +1) {  
          item.quantity += 1;
        } else if (action === -1) {  
            item.quantity -= 1;
            if (item.quantity === 0) { 
              cart.splice(cart.indexOf(item), 1);
            }
        } else if (action === 0) {   
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

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(id) {
  updateQuantity(products, id, +1);
}

  
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(id) {
  updateQuantity(cart, id, +1);
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(id) {
  updateQuantity(cart, id, -1); 
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(id) {
  updateQuantity(cart, id, 0);
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let total = 0;
  cart.forEach(function(product) {
    total += product.price * product.quantity;
  }) 
  return total; 
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
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
let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  let remainingBalance = totalPaid - cartTotal();
if (remainingBalance >= 0) {
    emptyCart();
    totalPaid = 0;
    return remainingBalance;
  } else {
    return remainingBalance;
  }
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
