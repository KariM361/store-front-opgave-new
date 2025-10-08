export function renderProductcard(product) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  let card = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardImage = document.createElement('img');
  let cardPrice = document.createElement('p');
  let description = document.createElement('p')

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

export function renderCart(cartItems){
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
