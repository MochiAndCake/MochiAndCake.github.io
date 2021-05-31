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
  let optionArray = restrictProducts();

  // For each item in array, create a checkbox elem.
  // It looks like this:
  // <input type="checkbox" name="product" value="Egg">
  // <label style="lblProduct" for="Egg">Egg</label>

  // Learned to make table using Javascript from StackOverflow: https://stackoverflow.com/questions/14643617/create-table-using-javascript/14644462
  let table = document.createElement("table");
  table.classList.add("tblProduct");
  display.appendChild(table);

  for (i = 0; i < optionArray.length; i++) {
    let product = optionArray[i];

    let row = document.createElement("tr");
    let cell1 = document.createElement("td");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = product.name;
    cell1.appendChild(checkbox);

    let label = document.createElement("label");
    label.htmlFor = product.name;
    label.appendChild(document.createTextNode(product.name));
    label.classList.add("lblProduct");
    cell1.appendChild(label);

    row.appendChild(cell1);

    let cell2 = document.createElement("td");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Price: $" + product.price.toFixed(2)));
    cell2.appendChild(p);

    row.appendChild(cell2);
    table.appendChild(row);
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
  let displayResult = document.createElement("p");
  displayResult.innerHTML = "You selected: ";

  let table = document.createElement("table");
  table.classList.add("tblResult");
  displayResult.appendChild(table);

  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].checked) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");

      let label = document.createElement("label");
      label.htmlFor = productArray[i].value;
      label.appendChild(document.createTextNode(productArray[i].value));
      label.classList.add("lblResult");
      cell.appendChild(label);
      row.appendChild(cell);
      table.appendChild(row);

      chosenArray.push(productArray[i].value);
    }
  }

  cart.appendChild(displayResult);
  cart.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice(chosenArray).toFixed(2)));
}
