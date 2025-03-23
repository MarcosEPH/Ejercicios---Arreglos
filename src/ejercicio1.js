/**Arreglo para eliminar nombres duplicados */

let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];
let nombresUnicos = [...new Set(nombres)];
console.log(nombresUnicos);