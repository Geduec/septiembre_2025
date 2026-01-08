const numeros = [1, 2, 3, 4, 5, 6];
const numerosPorDos = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  numerosPorDos.push(numero * 2);
}

console.log(numerosPorDos);

// FOR OF
const numerosPorDosFor = [];

for (const numero of numeros) {
  numerosPorDosFor.push(numero * 2);
}

console.log(numerosPorDosFor);

//FOR EACH
const numerosPorDosForEach = [];

numeros.forEach((numero, i) => {
  numerosPorDosForEach.push(numero * 2);
});

console.log(numerosPorDosForEach);