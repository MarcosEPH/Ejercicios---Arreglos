/**Arreglo para poder rotar elementos */

let datos = [1, 2, 3, 4, 5, 6];
let rotado = [datos.pop(), ...datos];
console.log(rotado);