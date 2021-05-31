// The base code is from my professor, Caroline Barriere
// https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/

// This function is called when any of the tabs are clicked. Addapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function openInfo(event, tabName) {
    // Get all elems with the class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }

    // Get all elems with class="tab" and remove the class "active"
    tabs = document.getElementsByClassName("btnTab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }

    // Display current tab and add an "active" class to the button that was clicked
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Generates a checkbox list from a list of Products
// Makes each product name the label for its checkbox
function populateProductChoices(displayProduct) {

  // display represents the <div> in the Products tab, which shows the product list.
  // First set it to empty.
  let display = document.getElementById(displayProduct);
  display.innerHTML = "";

  // Get a reduced list of products based on restrictions
  var optionArray = restrictProducts();

  // For each item in array, create a checkbox elem.
  // It looks like this:
  // <input type="checkbox" name="product" value="Egg">
  // <label style="lblProduct" for="Egg">Egg</label>

  for (i = 0; i < optionArray.length; i++) {
    let product = optionArray[i];

    // Create the checkbox and add it in HTML DOM
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = product.name;
    display.appendChild(checkbox);

    // Create the label for the checkbox and add it in HTML DOM
    let label = document.createElement("label");
    label.htmlFor = product.name;
    label.appendChild(document.createTextNode(product.name + "\nPrice: $" + product.price.toFixed(2)));
    display.appendChild(label);

    //s2.appendChild(document.createElement("br"));
  }
}

// Function is called when "Add selected items to cart" button is clicked
// It builds the HTML to be displayed in a paragraph
// Build a paragraph to contain the list of selected items and total price
function selectedItems() {
  let productArray = document.getElementsByName("product");
  let chosenArray = [];

  let cart = document.getElementById("displayCart");
  cart.innerHTML = "";

  // Build list of selected items
  let displayResult = document.createElement("P");
  displayResult.innerHTML = "You selected: ";
  //displayResult.appendChild(document.createElement("br"));

  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].checked) {
      displayResult.appendChild(document.createTextNode(productArray[i].value));

      chosenArray.push(productArray[i].value);
    }
  }

  cart.appendChild(displayResult);
  cart.appendChild(document.createTextNode("Total Price is: " + getTotalPrice(chosenArray)));
}
