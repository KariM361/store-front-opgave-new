// Funktion til at vise et produktkort i oversigten
export function renderProductcard(product) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  // Opretter HTML-elementer til produktkortet
  let card = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardImage = document.createElement('img');
  let description = document.createElement('p');
  let cardPrice = document.createElement('p');

  // Sætter indhold på elementerne
  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardImage.alt = product.title;
  cardPrice.innerText = product.price + " kr.";
  description.innerText = product.description;

  // Tilføjer elementerne til kortet
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);
  card.appendChild(description);

  // Tilføjer klik-event for at vise detaljer
  card.addEventListener('click', () => renderProductDetails(product));

  // Tilføjer kortet til containeren
  productContainer.appendChild(card);
}

// Funktion til at vise detaljer for et enkelt produkt
export function renderProductDetails(product) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  // Rydder containeren
  productContainer.innerHTML = '';

  // Opretter HTML-elementer til detaljevisning
  let detail = document.createElement('div');
  let title = document.createElement('h2');
  let image = document.createElement('img');
  let price = document.createElement('p');
  let description = document.createElement('p');

  // Sætter indhold på elementerne
  title.innerText = product.title;
  image.src = product.thumbnail;
  image.alt = product.title;
  price.innerText = product.price + " kr.";
  description.innerText = product.description;

  // Tilføjer elementerne til detaljevisningen
  detail.appendChild(image);
  detail.appendChild(title);
  detail.appendChild(price);
  detail.appendChild(description);

  // Tilføjer detaljevisningen til containeren
  productContainer.appendChild(detail);
}

// Funktion til at vise alle produkter i kurven
export function renderCart(cartItems) {
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  // Rydder containeren
  productContainer.innerHTML = '';

  // Gennemløber alle varer i kurven og viser dem
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

// Funktion til at vise kategorier (bemærk: denne funktion er ikke korrekt, hvis kategorier kun er strings)
export async function renderCategories(categories){
  let productContainer = document.getElementById('productContainer');
  if (!productContainer) return;

  productContainer.innerHTML = '';

  // Gennemløber alle kategorier og forsøger at vise dem som produkter (kan give fejl)
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
  })
}

// (Din getSearchResults-funktion er ikke korrekt implementeret og bør rettes)

