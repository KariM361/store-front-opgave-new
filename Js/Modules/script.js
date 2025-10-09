import { getProducts } from "./api.js";
import { renderProductcard, renderProductDetails } from "./view.js";
import { getSearchResults } from "./view.js";

const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('input', (event) => {
  getSearchResults(event.target.value);
});

// importerer funktionen getProducts fra din api.js modulfil.
getProducts(20)
.then((data)=>{
    console.log(data);
data.forEach(element => {
    renderProductcard(element)
});
})

 

//kalder getProducts med tallet 20 (henter 20 billeder).
//når billederne er hentet, kaldes view funktionen med data.




