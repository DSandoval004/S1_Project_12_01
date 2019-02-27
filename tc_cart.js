"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Diego Sandoval
   Date:   2/27/19
   
   Filename: tc_cart.js
	
*/
// DVARN: Total number of items in order
var orderTotal = 0;
// DVARS: Sets the intial value of the cartHTML value
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
// DLOOP: Puts the item in for each table cell from their corresponding arrays
for (var i = 0; i < item.length; i++) {
    // DVARS: Adds to the cartHTML the approiate HTML
    cartHTML += "<tr>"
    cartHTML += `<td><img src='tc_${item[i]}.png' alt='${item[i]}' /></td>`;
    cartHTML += `<td>${itemDescription[i]}</td>`;
    cartHTML += `<td>$${itemPrice[i]}</td>`;
    cartHTML += `<td>${itemQty[i]}</td>`;
    //DVARN: calculate the item cost
    var itemCost = itemPrice[i] * itemQty[i];
    // DVARS: Adds the itemCost to cartHTML
    cartHTML += `<td>$${itemCost}</td>`;
    // DVARN: Adds the itemCost to the orderTotal
    orderTotal += itemCost;
}
// DVARS: Adds the last part of the cartHTML HTML
cartHTML += `<tr><td colspan='4'>Subtotal</td><td>$${orderTotal}</td></tr></table>`;
// DDOES: Applys the HTML to the document
document.getElementById('cart').innerHTML = cartHTML;