// The base code is from my professor, Caroline Barriere
// https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/

// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.addEventListener("load", startUp());



function openModal(modalID) {
  document.getElementById(modalID).style.display = "block";
}

function closeModal(modalID) {
  document.getElementById(modalID).style.display = "none";
}



// This function is called when any of the tabs are clicked. Adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
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



function changeFont(num){
  switch(num){
    case 1:
      document.getElementById("body").style.fontSize = "small";
      break;
    case 2:
      document.getElementById("body").style.fontSize = "medium";
      break;
    case 3:
      document.getElementById("body").style.fontSize = "large";
      break;
    case 4:
      document.getElementById("body").style.fontSize = "xx-large";
      break;
    default:
      document.getElementById("body").style.fontSize = "medium";
      break;
  }
}




function showProducts(displayProduct) {

  // display represents the <div> in the Products tab, which shows the product list.
  // First set it to empty.
  let display = document.getElementById(displayProduct);
  display.innerHTML = "";

  // Get a reduced list of products based on restrictions
  let products = changePreference();

  for (i = 0; i < products.length; i++) {
    if (products[i].safe){
      let card = document.createElement("div");
      card.classList.add("card");

      let image = document.createElement("img");
      image.src = products[i].image;
      image.alt = products[i].name;
      card.appendChild(image);

      let description = document.createElement("div");
      description.classList.add("container")
      card.appendChild(description);

      let name = document.createElement("h3");
      name.appendChild(document.createTextNode(products[i].name));
      description.appendChild(name);

      let price = document.createElement("p");
      price.appendChild(document.createTextNode("$" + products[i].price.toFixed(2)));
      description.appendChild(price);

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "product";
      checkbox.value = i;
      if (products[i].selected > 0) {
        checkbox.checked = true;
      }
      description.appendChild(checkbox);

      display.appendChild(card);
    }
  }
}



function startUp() {
  //openModal("modalPreference");
  showProducts("displayProduct");
  document.getElementById("Main").style.display = "block";
}



// Function is called when "Add selected items to cart" button is clicked
// It builds the HTML to be displayed in a paragraph
// Build a paragraph to contain the list of selected items and total price
function selectedItems() {
  let productArray = document.getElementsByName("product");

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

      products[productArray[i].value].selected++;

      let label = document.createElement("label");
      label.htmlFor = products[productArray[i].value].name;
      label.appendChild(document.createTextNode(products[productArray[i].value].name));
      label.classList.add("lblResult");
      cell.appendChild(label);
      row.appendChild(cell);
      table.appendChild(row);
    } else {
      products[productArray[i].value].selected = 0;
    }
  }

  cart.appendChild(displayResult);
  cart.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice().toFixed(2)));
}
