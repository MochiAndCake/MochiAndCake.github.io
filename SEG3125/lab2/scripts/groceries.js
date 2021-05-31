// The base code is from my professor, Caroline Barriere
// https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/

// Array of products
// The prices were taken from Walmart.ca
var products = [
  {
    name: "Yogurt",
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 3.00
  },
  {
    name: "Almond Granola Bars",
    lactoseFree: true,
    nutFree: false,
    organic: false,
    price: 5.00
  },
  {
    name: "Salmon",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    ingredients: "ATLANTIC SALMON.",
    price: 14.00
  },
  {
    name: "Butter",
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 5.21
  },
  {
    name: "Celery",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 2.52
  },
  {
    name: "Canned Trail Mix",
    lactoseFree: true,
    nutFree: false,
    organic: false,
    price: 1.50
  },
  {
    name: "Chocolate Bars",
    lactoseFree: false,
    nutFree: false,
    organic: false,
    price: 3.86
  },
  {
    name: "Ham",
    lactoseFree: true,
    nutFree: true,
    organic: false,
    price: 3.00
  },
  {
    name: "Canned Soup",
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 1.17
  },
  {
    name: "Potato",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 0.89
  }
];



function priceCompare(product1, product2) {
  return product1.price - product2.price;
}



// Used check if a product is lactose free.
// Returns true if it's lactose free, otherwise, false.
function isLactoseFree(x) {
  return x.lactoseFree;
}

// Used check if a product is nut free.
// Returns true if it's nut free, otherwise, false.
function isNutFree(x) {
  return x.nutFree;
}

// Used check if a product is organic.
// Returns true if it's organic, otherwise, false.
function isOrganic(x) {
  return x.organic;
}



// Given restructions, reduce the list of products
function restrictProducts() {
  // Create a new array to hold the safe products.
  let safeProducts = [];

  // Add all products in the store to the safe product array.
  for (i = 0; i < products.length; i++) {
    safeProducts.push(products[i]);
  }

  // If the person is lactose intolerant, we remove all lactose containing products.
  if (document.getElementById("cbxLactose").checked == true) {
    safeProducts = safeProducts.filter(isLactoseFree);
  }

  // If the person is allergic to nuts, we remove all nut containing products.
  if (document.getElementById("cbxNutAllergy").checked == true) {
    safeProducts = safeProducts.filter(isNutFree);
  }

  // If the person wants organic food, we remove all inorganic products.
  if (document.getElementById("cbxOrganic").checked == true) {
    safeProducts = safeProducts.filter(isOrganic);
  }

  safeProducts.sort(priceCompare);// Sort the array
  return safeProducts; // Return the array of safe products.
}



function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (i = 0; i < products.length; i++) {
    if (chosenProducts.indexOf(products[i].name) > -1){
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
