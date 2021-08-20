// create a variable to store the products 'database' in
let allProducts = [];

// grab the UI elements that we need to manipulate
const category    = document.querySelector('#category');
const searchTerm  = document.querySelector('#searchTerm');
const searchBtn   = document.querySelector('button');
const main        = document.querySelector('main');

// sets up the app logic, declares required variables
async function initialize() {
  const response  = await fetch('products.json');  // fetch all products
  allProducts     = await response.json();

  // run updateDisplay(), so ALL products are displayed initially.
  updateDisplay();

  // when the search button is clicked, invoke updateDisplay() to start
  // a search running to select the category of products we want to display
  searchBtn.onclick = e => updateDisplay(e).catch(alert);
}
initialize().catch(alert);

async function updateDisplay(e) {
  // Use preventDefault() to stop the form submitting
  e?.preventDefault();

  // Remove all products displayed at first
  while (main.firstChild) { main.removeChild(main.lastChild); }

  // Show matching products chosen in category and term
  let anyProduct = false;
  for (const product of filteredProducts()) {
    //console.log(product);
    await showProduct(product);
    anyProduct = true;
  }

  // Focus back to the term input form
  searchTerm.focus();

  // If no product matches, display a "No results to display" message
  if(!anyProduct) {
    const para = document.createElement('p');
    para.textContent = 'No results to display!';
    main.appendChild(para);
  }
}

function* filteredProducts() {
  const chosenCategory  = category.value.toLowerCase();           // get category
  const chosenTerm      = searchTerm.value.trim().toLowerCase();  // get term
  for (const product of allProducts) {  // iterate all products
    if(chosenCategory!='all' && product.type != chosenCategory) continue; // does category match?
    if(chosenTerm!='' && !product.name.includes(chosenTerm))    continue; // does term match?
    yield product // matching product!
  }
}

// Transparently fetch/cache images and return in URL
const blobCache = {};
async function fetchBlob(product) {
  if (!(product.name in blobCache)) {
    // Not yet loaded. Let it in cache.
    const response  = await fetch(`images/${product.image}`);
    const image     = await response.blob();
    // Convert the blob to an object URL - this is basically an temporary internal URL
    // that points to an object stored inside the browser
    const objectURL = URL.createObjectURL(image);
    blobCache[product.name] = objectURL;
  }
  return blobCache[product.name];
}

async function showProduct(product) {
  // create <section>, <h2>, <p>, and <img> elements
  const section   = document.createElement('section');
  const heading   = document.createElement('h2');
  const para      = document.createElement('p');
  const image     = document.createElement('img');

  // give the <section> a classname equal to the product "type" property so it will display the correct icon
  section.className = product.type;

  // Give the <h2> textContent equal to the product "name" property, but with the first character
  // replaced with the uppercase version of the first character
  heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

  // Give the <p> textContent equal to the product "price" property, with a $ sign in front
  // toFixed(2) is used to fix the price at 2 decimal places, so for example 1.40 is displayed
  // as 1.40, not 1.4.
  para.textContent = '$' + product.price.toFixed(2);

  // Set the src of the <img> element to the ObjectURL, and the alt to the product "name" property
  image.src = await fetchBlob(product);
  image.alt = product.name;

  // append the elements to the DOM as appropriate, to add the product to the UI
  main.appendChild(section);
  section.appendChild(heading);
  section.appendChild(para);
  section.appendChild(image);
}
