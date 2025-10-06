//controller code.
export default async function getProducts(count) {
  return fetch('https://dummyjson.com/products?limit=' + count)
    .then(response => response.json())
    .then(data => data.products)
    .catch(error => {
      console.error('Fejl:', error);
    });
}

// eksempel i site.js eller script.js
import getProducts from './Modules/api.js';
import { view } from './Modules/view.js';

getProducts(10).then(products => {
  if (products) view(products);
});