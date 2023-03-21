// MODULO:
// Un modulo es un bloque de codigo que se va a encargar de ejecutar una tarea. La modularizacion es tener archivos separados para realizar las tareas 
// (cuando estas requieren muchas lineas de codigo) y así tener todo mas organizado. Ejemplo: Yo puedo tener un archivo donde voy a colocar todas las 
//funciones, otro donde voy a colocar todas las constantes. Luego, debo vincular ambos archivos porque hasta este punto ambos archivos no se conocen. 

//Para vincularlos uso la palabra reservada exports, exports es un objeto al que puedo agregarle propiedades. EJEMPLO:

// ARCHIVO FUNCIONES

const suma = (a,b) => a + b;

const printName = (name) => {
    console.log(name);
}

suma(num1, num1);
printName(nombre);


// ARCHIVO CONSTANTES

const num1 = 5;
const num2 = 3;
const nombre = 'FT-36b';

// Luego para vincular ambos archivos, hago esto en el archivo de las constantes:

exports.num1 = num1;
exports.num2 = num2;
exports.nombre = nombre;

// Al hacer esto dejo disponible esta info para que otros archivos puedan usarlo.

// Luego, en el archivo funciones debo acceder a ellas usando la palabra reservada require y se la asigno a una variable, es decir, en el archivo funciones escribo:

const contantes = require('./constantes')    

// Aqui estoy asignandole los datos que exporte desde el archivo constantes, pero recordemos que este exports es un objeto, por tanto para acceder a los datos, debo hacer esto:


suma(constantes.num1, constantes.num2)
printName(constantes.nombre)


//Ahora, para que esto sea mas sencillo puedo hacer uso del destructures, asi:

const {num1, num2, nombre} = require('./constantes')    

suma(num1, num2)
printName(nombre)



// OTRA FORMA ES USANDO EL OBJETO MODULE EN EL ARCHIVO CONSTANTES:

module.exports = {
    num1: num1,
    num2: num2,
    nombre: nombre
}

//Ahora, como esto es un objeto literal, yo podria pasar las propiedades directamente, asi:

module.exports = {
    num1,
    num2,
    nombre
}

//La diferencia entre module.exports y exports es que con el primero estoy trabajando con todo el objeto, mientras que el segundo solo hace referencia al objeto y al trabajar con referencias
//se puede perder informacion si se le llega a asignar un nuevo objeto, por tanto el MODULE.EXPORTS ES MEJOR



// AHORA, CON ECMA, NO SE USA ESTO EN EL FRONT, LO QUE SE USA ES QUE SE USA LA PALABRA CLAVE DELANTE DE LO QUE QUIERO USAR, ES DECIR, ASI QUEDARIAN NUESTROS ARCHIVOS:


// ARCHIVO CONSTANTES

export const num11 = 5;
export const num22 = 3;
export const nombree = 'FT-36b'; // le pongo la palabra export a lo que quiero dejar disponible

// ARCHIVO FUNCIONES

import{num11, num22, nombree} from "./constantes"; // con esto importo los datos que necesito en este archivo y le indico de qué archivo lo debe tomar

const sumaa = (a,b) => a + b;

const printNamee = (name) => {
    console.log(name);
}

sumaa(num11, num11);
printNamee(nombree);

// Ahora, yo podria crear un archivo INDEX donde se ejecuten las funciones, en lugar de tenerlas declaradas y ejecutadas en el archivo funciones, quedaria así
 
// ARCHIVO CONSTANTES

export const num111 = 5;
export const num222 = 3;
export const nombreee = 'FT-36b';

// ARCHIVO FUNCIONES

export const sumaaa = (a,b) => a + b;

export const printNameee = (name) => {
    console.log(name);
}

// ARCHIVO INDEX    

import{num111, num222, nombree} from "./constantes" //recibo las constantes porque yo soy quien ejecuta las funciones, ya no es el archivo funciones
import{sumaaa, printNameee} from "./funciones" // recibo las funciones porque yo soy quien ejecuta las funciones

sumaaa(num111, num111);
printNameee(nombreee);

//El archivo INDEX es nuestro entry point, el solo recibe informacion pero no exporta nada, podemos encontrarlo por convencion con el nombre INDEX.js O APP.js

//Los archivos CONSTANTES y FUNCIONES son INDEPENDIENTES, mientras que el ENTRY POINT es DEPENDIENTE

//Como estamos trabajando en el front-end, debemos crea un archivo HTML en donde vamos a referenciar los archivos js que estamos usando, así

//<script src="./app.js"></script>
//<script src="./constantes.js"></script>
//<script src="./funciones.js"></script> 


// Si yo estoy usando varios archivos js, queda desorganizado tener que llamarlos a todos, entonces uso BUNDLERS que es un archivo en donde estan todos estos archivos guardados, y entonces en 
// codigo HTML solo referencio ese archivo bundler, para eso instalo Webpack y Webpack-cli y luego en el archibo JSON escribo creo un archivo webpack.config.js y escribo:"build": "webpack"
// luego creo un archivo webpack.config.js y escribo

module.exports = {
    entry: "./app.js", //Aqui coloco el entry point
    output: {
        path: __dirname + "/browser2", //donde quiero que quede. Con _dirname indico la carpeta actual y le digo que me cree en esta carta un folder llamado browser2 donde quedara almacenado el archivo
        filename: "bundle.js"

    }
}

// Por ultimo ejecuto en la consola npm run build y esto va a crear la carpeta browser 2 en donde va a estar almancenado el archivo bundle y con esto, me voy al codigo HTML y con un script
// src relaciono este archivo y listo.

