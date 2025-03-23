/**Arreglo para poder obtener un conteo de vocales por palabra */

let palabras = ["computadora", "mesa", "silla", "mouse"];

for (let i = 0; i < palabras.length; i++) {
  let palabra = palabras[i];
  let vocales = (palabra.match(/[aeiou]/gi) || []).length;
  console.log(`${palabra}: ${vocales} vocales`);
}