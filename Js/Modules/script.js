// Importerer funktioner fra andre moduler
import { getProducts } from "./api.js";
import { renderProductcard} from "./view.js";
import {renderRandomProducts} from "./view.js";



// Henter 20 produkter fra API'et og viser dem som produktkort
getProducts(20)
.then((data) => {
    console.log(data); // Logger de hentede data til konsollen
    data.forEach(element => {
        renderProductcard(element); // Viser hvert produkt som et kort
    });
});
getseachbar()
.then((data) => {
    console.log(data); // Logger de hentede data til konsollen
    data.forEach(element => {
        renderProductcard(element); // Viser hvert produkt som et kort
    });
});
renderRandomProducts() // den skal være efter"innitapp" ellers virker den ikke
 


 




