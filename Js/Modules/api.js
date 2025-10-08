//controller code.
export async function getProducts(count) {
   return fetch('https://dummyjson.com/products?limit=' + count)
    .then(response => response.json())
    .then(data => data.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

export async function getCategories(count) {
   return fetch('https://dummyjson.com/products/categories' + count)
    .then(response => response.json())
    .then(data => data.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

export async function renderCart(cartItems){
  fetch('https://dummyjson.com/carts')
  .then(response => response.json())
    .then(data => data.carts[0].products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}