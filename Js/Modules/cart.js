// KURV

let mydataName = "data";

// Funktion til at gemme data i localStorage
export default function saveData(data) {
    // Gemmer data som en JSON-streng under nøglen 'data'
    localStorage.setItem(mydataName, JSON.stringify(data));
}

// Funktion til at hente data fra localStorage
export function loadData() {
    // Henter JSON-strengen fra localStorage
    const data = localStorage.getItem(mydataName);
    console.log(data);

    // Konverterer JSON-strengen tilbage til et objekt og returnerer det
    // TODO: Tilføj fejlhåndtering hvis data ikke findes eller ikke kan parses
    return JSON.parse(data);
}