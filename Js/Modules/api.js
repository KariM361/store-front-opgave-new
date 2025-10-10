// Funktion til at hente et bestemt antal produkter fra API'et
export async function getProducts(count) {
   return fetch('https://dummyjson.com/products?limit=' + count)
    .then(response => response.json())
    .then(data => data.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

// Funktion til at hente kategorier fra API'et (count bruges ikke korrekt her)
export async function getCategories(count) {
   return fetch('https://dummyjson.com/products/categories' + count)
    .then(response => response.json())
    .then(data => data.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

// Funktion til at hente kurv-data fra API'et (henter første kurv)
export async function renderCart(cartItems){
  fetch('https://dummyjson.com/carts')
  .then(response => response.json())
    .then(data => data.carts[0].products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

// Funktion til at hente kategorier fra API'et (forkert brug af data.categories.products)
export async function renderCategories(categories){
  fetch('https://dummyjson.com/products/categories')
  .then(response => response.json())
    .then(data => data.categories.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

// Funktion til at søge efter produkter via API'et (forkert brug af data.query.products)
export async function searchProducktResults(query){
  fetch(`https://dummyjson.com/products/search?q=${query}`)
  .then(response => response.json())
    .then(data => data.query.products)
    .catch(error => {
      console.error('Fejl:', error)
    });
}
