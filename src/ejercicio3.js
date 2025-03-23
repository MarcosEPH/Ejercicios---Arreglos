/**Arreglo para obtener valores positivos, negativos y ceros */

let numeros = [0, -2, 5, 3, 0, -7, 9];
let NumPositivos = numeros.filter(n => n > 0).length;
let Numnegativos = numeros.filter(n => n < 0).length;
let ceros = numeros.filter(n => n === 0).length;
console.log("Positivos:", NumPositivos, "Negativos:", Numnegativos, "Ceros:", ceros);