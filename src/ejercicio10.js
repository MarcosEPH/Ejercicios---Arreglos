/**Arreglo para poder buscar el número que más se repita */

let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];
let conteos = datos.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});
let Repetido = Object.keys(conteos).reduce((a, b) => conteos[a] > conteos[b] ? a : b);
console.log(`Número que mas se repite: ${Repetido} (${conteos[Repetido]} veces)`);