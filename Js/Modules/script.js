import {getProducts} from "./Modules/api.js"
import { view } from "./Modules/view/view.js"
// importerer funktionen getProducts fra din api.js modulfil.
getProducts(10)
.then((data)=>{
  view(data)
})
//kalder getProducts med tallet 10 (henter 10 billeder).
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