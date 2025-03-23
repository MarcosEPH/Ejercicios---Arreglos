/**Arreglo para poder obtener una combinación intercalada */

let a = ["a", "b", "c"];
let b = [1, 2, 3];
let intercalado = a.flatMap((v, i) => [v, b[i]]);
console.log(intercalado);