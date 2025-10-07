// eksempel i site.js eller script.js
import getProducts from './Modules/api.js';
import { view } from './Modules/view.js';

getProducts(10).then(products => {
  if (products) view(products);
});

//view code  

export function view(data) {
  const maincontainer = document.getElementById('main-container');
  maincontainer.innerHTML = data
    .map(product => `
      <div class="img-container">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="img-text">${product.title}</div>
      </div>
    `)
    .join('');
}