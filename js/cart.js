/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tbody = document.querySelectorAll('tbody>tr');
  for (let tr of tbody) {
    tr.remove();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableElem = document.querySelector('tbody');


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < cart.items.length; i++) {
    let storeElem = document.createElement('tr');
    storeElem.className = 'row'
    tableElem.appendChild(storeElem);
    let td1 = document.createElement('td');
    td1.textContent = 'X';
    td1.id = i
    storeElem.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = `${cart.items[i].quantity}`;
    storeElem.appendChild(td2);
    let td3 = document.createElement('td');
    td3.textContent = `${cart.items[i].product}`;
    storeElem.appendChild(td3);
  }
};



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let deleteRow = document.querySelectorAll('#row')
  for ( let row of deleteRow){
    row.remove()
  }
  if(event.target.textContent == 'X'){
    console.log(event.target.id);
    cart.removeItem(event.target.id);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart();
  }

}

// This will initialize the page and draw the cart on screen
renderCart();
