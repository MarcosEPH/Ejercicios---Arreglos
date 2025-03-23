/**Arreglo para poder obtener un subarreglo de una secuencia */

let numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];
let subarreglos = numeros.join(' ').split('0').map(s => s.trim().split(' ').map(Number));
let masLargo = subarreglos.reduce((max, sub) => sub.length > max.length ? sub : max, []);
console.log(masLargo);