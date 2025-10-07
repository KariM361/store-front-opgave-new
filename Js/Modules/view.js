export function renderProductcard(product){
let productContainer = document.getElementById('productContainer')

  let card = document.createElement('div')
  let cardTitle = document.createElement('h2')
   let cardImage = document.createElement('img')
    let cardPrice= document.createElement('p')

    cardTitle.innerText = product.title
    cardImage.src = product.thumbnail
    cardPrice.innerText = product.price
    
    card.appendChild(cardImage)
    card.appendChild(cardTitle)
    card.appendChild(cardPrice)

   productContainer.appendChild(card)


}

// // eksempel i site.js eller script.js
// import getProducts from './Modules/api.js';
// import { view } from './Modules/view.js';

// getProducts().then(products => {
//   if (products) view(products);
// });

// //view code  

// export function view(data) {
//   const maincontainer = document.getElementById('main-container');
//   maincontainer.innerHTML = data
//     .map(product => `
//       <div class="img-container">
//         <img src="${product.thumbnail}" alt="${product.title}">
//         <div class="img-text">${product.title}</div>
//       </div>
//     `)
//     .join('');
// }