/* Reverse */
/* 
let letras = ["a", "b", "c"];

printReverse(letras);
reverse(letras);

function reverse(mostrarR = []){
    let reverse = mostrarR.reverse();
    return console.log(reverse);
}

function printReverse(mostrarR = []){
    for(let i = 0; i < mostrarR.length; i++){
        console.log(mostrarR[mostrarR.length - (i+1)]);
    }
} */

/* Poema Desordenado */
/* 
let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";
let arrayDesordenado = poemaDesordenado.split(' ')
let arrayOrdenado = []

while (arrayDesordenado.length > 0) {
    arrayOrdenado.push(arrayDesordenado.shift());
    if (arrayDesordenado.length > 0) {
      arrayOrdenado.push(arrayDesordenado.pop());
    }
}
let poemaOrdenado = arrayOrdenado.join(" ");
console.log(poemaOrdenado); */

/* Desafío isUniform() */
/* 
function isUniform(array = []){
    let Primero = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]!==Primero){
            return false;
        }
    }
    return true;
}

console.log(isUniform([1, 1, 1, 1]))
console.log(isUniform([1, 2, 1, 1]))
console.log(isUniform(["a", "b", "p"]))
console.log(isUniform (["b", "b", "b"])) */

/* Biggest Smallest */
/* 
function biggest_smallest(array = [0]){
    let grande = array[0], chico = array[0];
    array.forEach(elemento => {return elemento > grande ? grande = elemento : grande });
    array.forEach(elemento => {return elemento > chico ? chico : chico = elemento});
    array.splice(0, array.length, grande, chico);
    return array;
}


let minMax = biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58]);
console.log(`Max: ${minMax[0]}, Min ${minMax[1]}`); */

/* Filter: Ejercicio 1 */
/* 
let mayoresOIgualesA5 = arr => {
    return arr.filter(numero => numero > 5);
}

console.log(mayoresOIgualesA5([3, 6, 8, 21])); */

/* Filter: Ejercicio 2 */
/* 
let numeros = [3, 7, 6, 13, 2, 24, 99];

let pares = arr => {
    return arr.filter(numero => !(numero%2)) // !(numero % 2) => !(0 => false) = true | !(1 => true) = false
}

console.log(pares(numeros)); */

/* Filter: Ejercicio 3 */
/* 
let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']

const palabrasCortas = palabras.filter(palabra => palabra.length <= 3);

// !(palabra.length > 3)
// palabra.length < 3 

console.log(palabrasCortas); */

/* Filter: Ejercicio 4 */
/* 
const mix = ['Ut vero.',2,function () { console.log('hola mundo!') },56,'Diam rebum nonumy et.',true,false,'Kasd stet.','Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.'];

let soloStrings = mix.filter(elemento => typeof elemento === 'string')

console.log(soloStrings); */

/* Fibonacci */
/* 
let fibonacci = posicion => {
    let serieF = (max) => {
        let arr = [0 , 1];
        for (let i = 0; i < max; i++) {
            arr.push(arr[i] + arr[i+1]);

        }
        
        console.log(arr);
        return arr;
    }
    let serie = serieF(posicion);
    return serie[posicion-1];
}

console.log(fibonacci(8)); */

/* sumArray() */
/* 
let sumArray = arr => {
    let suma = arr.reduce((acumulador, actual) => acumulador + actual , 0);
    return suma;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5,100])); */