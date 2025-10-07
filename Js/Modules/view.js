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

export function renderProductDetails(product){
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