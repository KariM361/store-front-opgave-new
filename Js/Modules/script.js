import getProducts from "./module/api.js"
import { view } from "./module/view/view.js"
// importerer funktionen getProducts fra din api.js modulfil.
getProducts()
.then((data)=>{
  view(data)
})
//kalder getProducts med tallet 15 (henter 15 billeder).
//når billederne er hentet, kaldes view funktionen med data.


import saveData from "./Modules/lokalStorage.js";
import {loadData} from "./Modules/localStorages.js";
import {getProducts} from "./Modules/api.js";

mainModuleInit()

    
    function mainModuleInit(){
        console.log("main module start");

        let mydata={name:"John", age:30, city:"New York"};
        saveData(myData);
        loadData();
        test()
        console.log();
    }

    function test(){
        console.log( "test function in main module");
    }

    console.log(mydataName);