/**Arreglo para poder filtrar palabras por su longitud */

let palabras = ["sol", "ventilador", "mesa", "lampara", "computadora"];
let largas = palabras.filter(palabra => palabra.length > 5);
console.log(largas);