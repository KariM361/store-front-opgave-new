export function renderProductcard(product) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  let card = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardImage = document.createElement('img');
  let description = document.createElement('p')
  let cardPrice = document.createElement('p');


  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardImage.alt = product.title;
  cardPrice.innerText = product.price + " kr.";
  description.innerText = product.description;


  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);
  card.appendChild(description);
 

  // Tilføj klik-event for at vise detaljer
  card.addEventListener('click', () => renderProductDetails(product));

  productContainer.appendChild(card);
}

export function renderProductDetails(product) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  productContainer.innerHTML = '';

  let detail = document.createElement('div');
  let title = document.createElement('h2');
  let image = document.createElement('img');
  let price = document.createElement('p');
  let description = document.createElement('p');

  title.innerText = product.title;
  image.src = product.thumbnail;
  image.alt = product.title;
  price.innerText = product.price + " kr.";
  description.innerText = product.description;

  detail.appendChild(image);
  detail.appendChild(title);
  detail.appendChild(price);
  detail.appendChild(description);

  productContainer.appendChild(detail);
}

export function renderCart(cartItems) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  productContainer.innerHTML = '';

  cartItems.forEach(product => {
    let detail = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let price = document.createElement('p');
    let description = document.createElement('p');

    title.innerText = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    price.innerText = product.price + " kr.";
    description.innerText = product.description;

    detail.appendChild(image);
    detail.appendChild(title);
    detail.appendChild(price);
    detail.appendChild(description);

    productContainer.appendChild(detail);
  });
}
export async function renderCategories(categories){
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  productContainer.innerHTML = '';

  categories.forEach(product => {
    let detail = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let price = document.createElement('p');
    let description = document.createElement('p');

    title.innerText = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    price.innerText = product.price + " kr.";
    description.innerText = product.description;

    detail.appendChild(image);
    detail.appendChild(title);
    detail.appendChild(price);
    detail.appendChild(description);

    productContainer.appendChild(categories);
 })}

export async function getSearchResults(query){
  let searchbar = document.getElementById('searchbar');
  let container = document. getElementById('productContainer')
  searchbar.addeventListener('input',(event) => event.target.value)

  if (!productContainer) return;

container.innerHTML = '';
searchbar.product.forEach(element =>{
  renderProductcard()
})

  searchbar.forEach(product => {
    let detail = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let price = document.createElement('p');
    let description = document.createElement('p');

    title.innerText = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    price.innerText = product.price + " kr.";
    description.innerText = product.description;

    detail.appendChild(image);
    detail.appendChild(title);
    detail.appendChild(price);
    detail.appendChild(description);

    productContainer.appendChild(detail);
 })}
export async function renderRandomProducts(){
    // hent data
    //vælg 3 tilfældige items fra data-arrayet
    let data = await getProducts()
    console.log(data)
   
    let value1 = Math.floor (Math.random() * 30)
    let value2 = Math.floor (Math.random() * 30)
    let value3 = Math.floor (Math.random() * 30)
 
    console.log(data.products[value1],data.products[value2],data.products[value3])
 
    let randomArray = [data.products[value1],data.products[value2],data.products[value3]]
   
    let mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = ''
    randomArray.forEach((item) => {
        renderProductCard(item)
    });
}
 
