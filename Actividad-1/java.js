/* Actividad 3 - Parte 1 */
/* 
function triplicador(x){
    console.log(x*3);
    return x*3;
}

function multiplicador(x, y){
    console.log(x*y);
    return x*y;
}

function division(x, y){
    console.log(x/y);
    return x/y;
}

function resta(x, y){
    console.log(x%y);
    return x%y;
}


console.log(resta(division(multiplicador(triplicador(5), 12), 12), 3)); */

/* Actividad 3 - Parte 2 */
/* 
function contarDeA_n(contar_hasta, contar_de_a){
    for (let i = 0; i <= contar_hasta; i+=contar_de_a){

        console.log(i)
    }
}
contarDeA_n(parseInt(prompt('Hasta que numero debe contar')), parseInt(prompt('De a cuantos numeros debe contar')) ); */

/* Actividad 3 - Parte 3 */
/* 
function FizzBuzzII(palabra1 = "", palabra2 = ""){
    let numeros = [""];
    let hasta = parseInt(prompt('Ingrese hasta que numero contar'));
    for (let i = 1; i <= hasta; i++) {
        let mensaje = "";
        if (i % 3 === 0) {
          mensaje += palabra1;
        }
        if (i % 5 === 0) {
          mensaje += palabra2;
        }
        numeros.push(mensaje || i);
    }
    return numeros.join(", ");
}
console.log(FizzBuzzII(prompt('Ingrese la palabra a cambiar por "Fizz"'), prompt('Ingrese la palabra a cambiar por Buzz'))); */
