// The base code is from my professor, Caroline Barriere
// https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/

// Array of products
// The prices were taken from Walmart.ca
var products = [
  {
    name: "Yogurt",
    lactoseFree: false,
    nutFree: true,
    organic: true,
    price: 4.20,
    image: "assets/yogurt.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Almond Granola Bars",
    lactoseFree: true,
    nutFree: false,
    organic: false,
    price: 5.00,
    image: "assets/almond-granola-bars.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Salmon",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    ingredients: "ATLANTIC SALMON.",
    price: 14.00,
    image: "assets/salmon.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Butter",
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 5.21,
    image: "assets/butter.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Celery",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 2.52,
    image: "assets/celery.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Canned Trail Mix",
    lactoseFree: true,
    nutFree: false,
    organic: true,
    price: 1.50,
    image: "assets/trail-mix.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Chocolate Bars",
    lactoseFree: false,
    nutFree: false,
    organic: false,
    price: 3.86,
    image: "assets/chocolate.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Ham",
    lactoseFree: true,
    nutFree: true,
    organic: false,
    price: 3.00,
    image: "assets/ham.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Canned Soup",
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 1.17,
    image: "assets/canned-soup.jpg",
    selected: 0,
    safe: true
  },
  {
    name: "Potato",
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 0.89,
    image: "assets/potato.jpg",
    selected: 0,
    safe: true
  }
];

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcrm.org%2Fgood-nutrition%2Fplant-based-diets%2Frecipes%2Fberries-and-nondairy-plain-yogurt&psig=AOvVaw01t22PZOSb7GyUk1CM7KcH&ust=1623105075686000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCLCW5PuHhPECFQAAAAAdAAAAABAD
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cookingclassy.com%2Fchewy-almond-poppy-seed-granola-bars-lemon-poppy-seed-variation-too%2F&psig=AOvVaw3ZMM4En2DwCaCFOXlN2717&ust=1623105298143000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCNDJlMuIhPECFQAAAAAdAAAAABAK
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jessicagavin.com%2Ftypes-of-salmon%2F&psig=AOvVaw2S3sTRuDHI_cVJEydZ3vn3&ust=1623105482707000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCKi_7KSJhPECFQAAAAAdAAAAABAK
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.realsimple.com%2Ffood-recipes%2Fshopping-storing%2Ffood%2Ftypes-of-butter&psig=AOvVaw2lLcINh2F0tKuyqKdM1F7u&ust=1623105674284000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCOig8YCKhPECFQAAAAAdAAAAABAE
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.earth.com%2Fnews%2Fcelery-heart-disease-cancer%2F&psig=AOvVaw2W7ULy-hd3AQxVInHSo-Tx&ust=1623105795845000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCKiBlbeKhPECFQAAAAAdAAAAABAD
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Fis-trail-mix-healthy&psig=AOvVaw09Mx2Uoc1hLG2B2DD4fX4c&ust=1623105895140000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCPCc8eaKhPECFQAAAAAdAAAAABAE
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.huffpost.com%2Fentry%2Ffancy-chocolate-expensive_n_5b7d8c4de4b07295150f25c6&psig=AOvVaw3f4Rbt6FPWawa5zNS43BeO&ust=1623106072790000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCPC1t7yLhPECFQAAAAAdAAAAABAK
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Free-drummond%2Fhoney-glazed-ham-3075404&psig=AOvVaw1usogRabq2hq9L8Kx0JUeg&ust=1623106249975000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCJD9-5CMhPECFQAAAAAdAAAAABAg
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.purewow.com%2Ffood%2Fhealthy-canned-soups&psig=AOvVaw3KSv4U9b1AXs3pu_JUjX_B&ust=1623106362841000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCICxgsaMhPECFQAAAAAdAAAAABAF
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FGolden-Yellow-Potato_1600112860751.html&psig=AOvVaw17PWag3d7AfiwUGQ3fTDun&ust=1623106483782000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCNDL_f2MhPECFQAAAAAdAAAAABAD



function priceCompare(product1, product2) {
  return product1.price - product2.price;
}



function changePreference(){
  let cbxLactose = document.getElementById("cbxLactose").checked;
  let cbxNutAllergy = document.getElementById("cbxNutAllergy").checked;
  let cbxOrganic = document.getElementById("cbxOrganic").checked;

  // Learned to use filter from w3schools.com: https://www.w3schools.com/jsref/jsref_filter.asp
  // If the person is lactose intolerant, we remove all lactose containing products.
 
  
  for (i = 0; i < products.length; i++) {
    let show = true; // All products are shown, and will be not shown accordingly below

    // If the person is allergic to nuts and the product contains nuts, it shouldn't show.
    if (cbxLactose && !products[i].lactoseFree) {
      show = false;
    }

    // If the person is lactose intolerant and the product contains lactose, it shouldn't show.
    if (cbxNutAllergy && !products[i].nutFree) {
      show = false;
    }

    // If the person wants organic food and the product isn't organic, it shouldn't show.
    if (cbxOrganic && !products[i].organic) {
      show = false;
    }

    products[i].safe = show;
  }

  // Learned to use sort from w3schools.com: https://www.w3schools.com/js/js_array_sort.asp
  products.sort(priceCompare);// Sort the array

  return products; // Return the array of safe products.
}



function getTotalPrice() {
  totalPrice = 0;
  for (i = 0; i < products.length; i++) {
    if ( products[i].selected > 0){
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
