/* Ejercicio 1 - TEST EVALUATOR */
/* 
let mensaje;
let rangos = [[0, 2, "Muy Mal"], [2, 5, "Mal"], [5, 6, "Tan cerca pero tan lejos"], [6, 8, "Bien"], [8, 10, "Muy Bueno"]];

function calificacion(nota) {
    rangos.some(rango => {
        if (rango[0] < nota && nota <= rango[1]) {
            mensaje = rango[2];
            return true;
        }
    });
    return mensaje;
}

console.log(calificacion(6)); // El numero a evaluar es el que se pone aca para saber el mensaje
*/

/* Ejercicio 2 - THE BIGGEST ONE */
/* 
function biggest(uno, dos, palabra) {
    let primeraUltima;
    if (uno === dos){
        primeraUltima = `${palabra[0]}${palabra[palabra.length-1]}`
        return primeraUltima;
    }
    let grande = uno > dos ? uno : dos;
    return grande;
}

console.log(biggest(4, 4, "kaki")); //Aca se ingresan los numeros para que se comparen
*/

/* Ejercicio 3 - FROOTLOOP */
/* 
let frutasYVerduras = [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}];

function frootloop(comida) {
    let arrayFrutas = comida.filter(elemento => elemento.fruta !== undefined).map(elemento => elemento.fruta);
    let fruta = { frutas: arrayFrutas };
    return fruta;
}

console.log(frootloop(frutasYVerduras)); */

/* Ejercicio 4 - SODA DISPENSER */
/* 
function dispenserGaseosas(stock, producto) {
    let gaseosasEnStock = [];
    for (let i = 0; i < stock.length; i++) {
        gaseosasEnStock[i] = {stock: stock[i], producto: producto[i]};
    }
    return gaseosasEnStock;
}
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

console.log(dispenserGaseosas(unidades, gaseosas)); */

/* Ejercicio 5 - AÑO DE NACIMIENTO */
/* 
let Persona = [{nombre: "Juan", edad:19}, {nombre: "Mario", edad: 22}];

function propiedadExtra(nombreEdad){
    let convertido = [];
    for (let i = 0; i < nombreEdad.length; i++) {
        convertido.push({nombre: nombreEdad[i].nombre, edad: nombreEdad[i].edad, año: 2023 - nombreEdad[i].edad});
    }
    return convertido;
}

console.log(propiedadExtra(Persona)); */