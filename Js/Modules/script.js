// Importerer funktioner fra andre moduler
import { getProducts } from "./api.js";
import { renderProductcard, renderProductDetails } from "./view.js";
// import { getSearchResults } from "./view.js";

// Finder søgefeltet i DOM'en
const searchbar = document.getElementById('searchbar');

// Tilføjer en event listener til søgefeltet, så der søges mens brugeren skriver
searchbar.addEventListener('input', (event) => {
  getSearchResults(event.target.value);
});

// Henter 20 produkter fra API'et og viser dem som produktkort
getProducts(20)
.then((data) => {
    console.log(data); // Logger de hentede data til konsollen
    data.forEach(element => {
        renderProductcard(element); // Viser hvert produkt som et kort
    });
});

// Kaldet til getProducts henter 20 produkter og viser dem på siden




