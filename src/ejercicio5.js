/**Arreglo para poder obtener elemenos en orden ascendente */

let secuencia = [2, 4, 6, 6, 9];
let ascendente = secuencia.every((val, i, arr) => i === 0 || val >= arr[i - 1]);
console.log("¿Es ascendente?", ascendente);