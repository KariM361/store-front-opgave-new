//KURV


let mydataName="data"
//  gem data fra localstorage.
export default function saveData(data){
    localStorage.setItem(mydataName,JSON.stringify(data));

}
//henter data fra localstorage
export function loadData(){
    const data = localStorage.getItem(mydataName);
    console.log(data);

    //to do error checking
    return JSON.parse(data)
}