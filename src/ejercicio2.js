/**Arreglo que de promedios sin los extremos */

let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];
notas.sort((a, b) => a - b); 
notas.shift(); 
notas.pop();   
let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
console.log("Promedio:", promedio);