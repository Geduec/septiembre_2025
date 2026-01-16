const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(lista) {
    let palabraMasLarga = "";
    
    for (const palabra of lista) {
        if(palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        } else if (palabra.length === palabraMasLarga.length) {
            console.log(palabra + " es igual a " + palabraMasLarga);
        }
    }

    console.log(palabraMasLarga)
}

findLongestWord(avengers)
