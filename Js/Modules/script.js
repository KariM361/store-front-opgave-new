import {getProducts} from "./api.js"
import { renderProductcard } from "./view.js";
// import { view } from "./Modules/view/view.js"
// importerer funktionen getProducts fra din api.js modulfil.
getProducts(10)
.then((data)=>{
    console.log(data);
data.forEach(element => {
    renderProductcard(element)
});
})

//kalder getProducts med tallet 10 (henter 10 billeder).
//når billederne er hentet, kaldes view funktionen med data.



