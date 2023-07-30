// Wait for the DOM to be fully loaded before running the JavaScript code
document.addEventListener("DOMContentLoaded", function (event) {

  // Get the order button element by its ID
  var orderButton = document.getElementById("order-btn");

  // Add a click event listener to the order button
  orderButton.addEventListener("click", function () {

    // Get the selected values for size, crust, and sauce from their respective elements
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var sauce = document.querySelector('input[name="sauce"]:checked');

    // Check if a sauce is selected; if not, show an alert and prevent further processing
    if (!sauce) {
      alert("Please select a sauce!");
      return; // Exit the function and prevent further processing
    }

    // Get the value of the selected sauce
    sauce = sauce.value;

    // Get all the selected toppings checkboxes
    var toppings = document.querySelectorAll('input[type="checkbox"]:checked');

    // Get the value of the "delivery" checkbox
    var delivery = document.getElementById("delivery").checked;

    // Get the selected payment method
    var paymentMethod = document.getElementById("payment-method").value;

    // Initialize a variable to store the order details as a string
    var orderDetails = "Order Details:\n";

    // Add size, crust, sauce, and delivery information to the order details string
    orderDetails += "Size: " + size + "\n";
    orderDetails += "Crust: " + crust + "\n";
    orderDetails += "Sauce: " + sauce + "\n";
    orderDetails += "Delivery: " + (delivery ? "Yes" : "No") + "\n";

    // Initialize variables to store toppings display string and total toppings price
    var toppingsDisplay = "";
    var toppingsPrice = 0;

    // Loop through the selected toppings and add them to the order details and toppings display string
    // Also, calculate the total toppings price ($0.99 per topping)
    for (var i = 0; i < toppings.length; i++) {
      orderDetails += toppings[i].value + " ";
      toppingsDisplay += toppings[i].value + ", ";
      toppingsPrice += 0.99;
    }
    orderDetails += "\n";

    // Calculate the base price based on the selected pizza size
    var basePrice = 0;
    if (size === "small") {
      basePrice = 9.99;
    } else if (size === "medium") {
      basePrice = 12.99;
    } else if (size === "large") {
      basePrice = 15.99;
    }

    // Calculate the total price by adding the base price and toppings price
    var totalPrice = basePrice + toppingsPrice;

    // Calculate the tax (assuming a 10% tax rate) and add it to the total price
    var tax = totalPrice * 0.1;
    totalPrice += tax;

    // Add information about the base price, toppings price, tax, and total price to the order details string
    orderDetails += "Price (Base): $" + basePrice.toFixed(2) + "\n";
    orderDetails += "Price (Toppings): $" + toppingsPrice.toFixed(2) + "\n";
    orderDetails += "Tax (10%): $" + tax.toFixed(2) + "\n";
    orderDetails += "Total Price: $" + totalPrice.toFixed(2) + "\n";
    orderDetails += "Payment Method: " + paymentMethod + "\n";

    // Show the order details in an alert
    alert(orderDetails);

    // Update the toppings display element to show the selected toppings
    document.getElementById("toppings-display").textContent = toppingsDisplay.slice(0, -2); // Remove the trailing comma and space

    // Update the total price element in the payment section to display the calculated total price
    document.getElementById("total-price").value = totalPrice.toFixed(2);
  });
});
