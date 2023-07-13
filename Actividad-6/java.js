/* Acceso A Los Valores De Un Objeto */

/* Ejercicio 1 */
/* 
let objeto_demo = {
    uno: 1,
    dos: 2,
    tres: 3
}

let uno = "tres"

console.log(objeto_demo['dos']); //Debe mostrar: 2
console.log(objeto_demo[uno]); //Debe mostrar: 3 ya que uno es un string, y toma que tiene que buscar con lo que dice el string 
 */

/* Ejercicio 2 */
/* 
let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
}
let lugar = 'Uruguay';
 
console.log(capitales['lugar']); //Debe mostrar undefined, ya que no fue encontrada la propiedad 'lugar'
console.log(capitales.lugar); //Debe mostrar undefined, ya que tampoco fue encontrada usando dot notation
console.log(capitales[lugar]); //Debe mostrar Montevideo, ya que lugar es un string, y busca la propiedad con el valor del string
console.log(capitales['Argentina']); //Debe mostrar Buenos Aires
console.log(capitales.Argentina); //Debe mostrar Buenos Aires tambien
console.log(capitales[Argentina]); //Debe mostrar un error, ya que así va a intentar buscar a Argentina como una variable, que no existe
*/

/* Registro */
/* 
console.log(registro( "Vimakro", 18, "Chetti 1234", "21/05/2005", "todoenminusculasTODOENMAYUSCULAS"));

function registro(usuario, edad, direccion, fechaNacimiento, contrasena){
    return {usuario: usuario, edad: edad, direccion: direccion, fechaDeNacimiento: fechaNacimiento, contraseña: contrasena}
} */

/* Variable miAuto */
/* 
let miAuto = {};
miAuto.marca = "mercedes";
miAuto.año = 1986;
miAuto.nuevo = true;

let propertyKey = "modelo";
miAuto[propertyKey] = "c200";

let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 25000;

let nextProperty = "color";
miAuto[nextProperty] = "blanco";

for (const key in miAuto) {
    console.log(`Propiedad: ${key}, Valor: ${miAuto[key]}`);
} */

/* Aumentar La Nota */
/* 
let estudiantes = [{Estudiante: "Juan", nota: 6}, {Estudiante: "Mario", nota: 8}, {Estudiante: "Julia", nota: 10}, {Estudiante: "Sofia", nota: 2}];

function aumentarNota(personas) {
    for (let i = 0; i < personas.length; i++) {
        let nota = personas[i].nota;
        if (nota > 5 && nota < 10){
            personas[i].nota = nota === 9 ? 10 : nota+2;
        }
    }
    return personas;
}

console.log(aumentarNota(estudiantes)); */

/* Base De Datos De Películas */
/* 
let pelicula = [{titulo: "Busqueda implacable", rating: 5, loHasVisto: "Viste"}, {titulo: "Norbit", rating: 3, loHasVisto: "No viste"}, {titulo: "Mini espias", rating: 2, loHasVisto: "Viste"}, {titulo: "La vida es bella", rating: 5, loHasVisto: "No viste"}]

for (let i = 0; i < pelicula.length; i++) {
    console.log(`${pelicula[i].loHasVisto} "${pelicula[i].titulo}" - ${pelicula[i].rating} Estrellas`)
} */

/* Números Duplicados */
/* 
let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

function duplicar_numeros(numero, duplicado) {
    for (let i = 0; i < numero.length; i++) {duplicado[numero[i]] = numero[i]*2}
    return duplicado;
}

console.log(duplicar_numeros(numeros, numeros_duplicados)); */

/* Desafío + 27 */
/* 
let personas = [{nombre: 'Ana',edad: '28'}, {nombre: 'María',edad: '24' }, {nombre: 'José',edad: '31' }];
let personasConMasDe27 = personas.filter(posicion => {return parseInt(posicion.edad) > 27});
console.log(personasConMasDe27); */

/* Camino Al Oscar */
/* 
let actoresVocales = [];
let actoresPrincipales = ["Tom Hanks", "Johnny Depp", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher"];

let peliculas = [];
let actoresPrincipalesPorPelicula = {
"Titanic": "Leonardo DiCaprio",
"El Padrino": "Al Pacino",
"Matrix": "Keanu Reeves",
"Iron Man": "Robert Downey Jr",
"Soy leyenda": "Will Smith",
"Bastardos sin gloria": "Brad Pitt"}

const vocales = ['A', 'E', 'I', 'O', 'U'];

actoresPrincipales.forEach(actor => {
  const nombreCompleto = actor.split(' ');
  const nombre = nombreCompleto[0];
  const apellido = nombreCompleto[1];

  if (vocales.includes(nombre[0].toUpperCase())||vocales.includes(apellido[0].toUpperCase())){actoresVocales.push(actor);}
});
console.log(actoresVocales);
const guardarActores = (actor) => {
    for (const key in actor) {
        actoresPrincipales.push(actor[key]);
    }
}
guardarActores(actoresPrincipalesPorPelicula);
console.log(actoresPrincipales);
const guardarPeliculas = (pelicula) => {
    for (const key in pelicula) {
        peliculas.push(key);
    }
}

guardarPeliculas(actoresPrincipalesPorPelicula);
console.log(peliculas);

let peliculaPorActor = {};

const guardarPeliculasXActores = (actor, pelicula) => {
    peliculaPorActor[actor] = peliculaPorActor[actor] === undefined ? pelicula : `${peliculaPorActor[actor]} - ${pelicula}`
}

guardarPeliculasXActores("Leonardo DiCaprio", "Titanic");
guardarPeliculasXActores("Leonardo DiCaprio", "El lobo de Wall Street");

console.log(peliculaPorActor); */

/* Posición Adecuada */
/* 
let nombres = [{nombre: "Alba", edad:15}, {nombre: "Estrella", edad: 30} ,{nombre: "Belen", edad: 20} ,{nombre: "Santiago", edad: 4}, {nombre: "Katherine", edad: 55} ]

const ordenar = (objeto) => {
    objeto.sort((a, b) => a.edad - b.edad);
    objeto.forEach((elemento, numero) => {elemento.posicion = numero});
    return objeto
}
ordenar(nombres);
console.log(nombres); */

/* Software Factory */
/* 
let ecommerce = [{nombre: "Samsung TV", precio: 6000, articulos:10},{nombre: "DELL notebook", precio: 4000, articulos:30 },{nombre : "Auriculares Sony", precio: 1500, articulos:15},{nombre : "Monitor Philips", precio:12000, articulos:20},{nombre : "Teclado logitech", precio: 3000, articulos:5}]
let ecommerceNew = [];
ecommerce.forEach((elemento, numero) => {
    for (const key in ecommerce[numero]) {
        if (key === "nombre"){ecommerceNew[ecommerce[numero][key]] = (ecommerce[numero].precio * ecommerce[numero].articulos) }
        else {break};
    }
});
console.log(ecommerceNew); */