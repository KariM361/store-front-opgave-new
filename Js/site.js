import saveData from "./Modules/lokalStorage.js";
import {loadData} from "./Modules/localStorages.js";

mainMosuleInit()
    
    function mainMosuleInit(){
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

