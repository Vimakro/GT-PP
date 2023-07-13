/* Lista De Súper - Parte 1, 2 y 3 */
/* 
let listaDeSuper = [];

listaDeSuper.push("Manzanas");
listaDeSuper.push("Leche");
listaDeSuper.push("Pan");
listaDeSuper.push("Arroz");
listaDeSuper.push("Pasta");

let primerElemento = listaDeSuper[0];
let ultimoElemento = listaDeSuper.length;
let elementoFinal = listaDeSuper[ultimoElemento - 1];

listaDeSuper.push("Cereal");
listaDeSuper.push("Aceite");

listaDeSuper.unshift("Azúcar");
listaDeSuper.unshift("Huevos");

let longitudActual = listaDeSuper.length;

let noHabia = listaDeSuper.pop(listaDeSuper.length - 1);

let comprado = listaDeSuper.shift(listaDeSuper.length - 2);

let longitudActualizada = listaDeSuper.length;

console.log(`Primer elemento: ${primerElemento}`);
console.log(`Ultimo elemento: ${ultimoElemento}`);
console.log(`Elemento final: ${elementoFinal}`);
console.log(`Longitud: ${longitudActual}`);
console.log(`No hay: ${noHabia}`);
console.log(`Comprado: ${comprado}`);
console.log(`Longitud actualizada: ${longitudActualizada}`);

logItems(listaDeSuper)

function logItems(lista = []){
    lista.forEach(elemento => console.log(elemento));
} */

/* Map: Ejercicios - Ejercicio 1 */
/* 
let number = [1, 2, 3, 4, 5];

let dobles = number.map(numero => numero * 2);

console.log(dobles) */

/* Map: Ejercicios - Ejercicio 2 */
/* 
let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frasesExclamadas = frases.map(frase => `¡${frase}!` );

console.log(frasesExclamadas); */

/* Reduce: Ejercicios - Ejercicio 1 */
/* 
let numbers = [6, 1, 34, 94, 3, 17];

const mul = numbers.reduce((acc, numero) => {return acc *= numero}, 1);

console.log(mul) */

/* Reduce: Ejercicios - Ejercicio 2 */
/* 
let numeros = [3, 7, 6, 13, 2, 24, 99];

let impares = numeros.reduce((numerosimpares, numero) => {if(numero%2===1){numerosimpares.push(numero)} return numerosimpares}, [])

console.log(impares) */

/* Reduce: Ejercicios - Ejercicio 3 */
/* 
let numbers = [5, 4, 1, 2, 9]

let max = numbers.reduce((max, numero) => {return numero > max ? numero : max;})

console.log(max) */

/* Reduce: Ejercicios - Ejercicio 4 */
/* 
let join = arr => {
    return arr.join("");
}

console.log( join([1,2,3]) ) */
   
/* Reduce: Ejercicios - Ejercicio 5 */
/* 
let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];
let sinRepetidos = numeros.reduce((array, numero) => {if(array.indexOf(numero) === -1){array.push(numero);}return array;}, []);
console.log(sinRepetidos); */

/* Reduce: Ejercicios - Ejercicio 6 */
/* 
let notasDeTPs = [4, 7, 8, 5, 10]
let notaFinal = notasDeTPs.reduce((acc, nota)=>{return notasDeTPs.indexOf(nota)<notasDeTPs.length - 1 ? acc+nota : (acc + nota) / notasDeTPs.length}, 0);
console.log(notaFinal); */