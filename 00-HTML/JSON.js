/*JSON: JavaScript Object Notation
Es una especie de traductor que se encarga de intercambiar datos. Es como cuando en una pagina web tenemos un portal de pago,
imagina que el comercio esta hecho en lenguaje PHP y la entidad bancaria  Python, son lenguajes diferentes, JSON actua como
el traductor en donde se envian los datos que se requieren para la entidad bancaria como el numero de la tarjeta, el monto a 
cobrar, etc.

Todos los lenguajes deben soportar JSON porque este se ha vuelto el estandar para el intercambio de información.

Ejemplo:*/

const json = {
    "cadena": "Jon",
    "numero": "35",
    "booleano": "true",
    "arreglo": ["correr", "programar", "cocinar"],
    "objeto": {
        "twitter": "@jonmircha",
        "email": "jonmircah@gmail.com"
    },
    "nulo": null
}


/*Para codear JSON hay que hacerlo en un archivo con extension .json, ademas, tener en cuenta que este no reconoce la
comilla simple, solo las dobles, incluso para datos numericos y booleanos, las propiedades deben estar tambien entre comillas
(mriar el archivo JSON)

JSON es una interfaz de lenguaje con dos metodos: 

JSON.parse(): Analiza una candena de texto y lo transforma a un valor valido en JS, es decir si yo consologueara console.log("{}"), me va a devolver las llaves como un string, pero si yo hiciera
console.log(JSON.parse("{}")), me va a mostrar esas llaves pero como un objeto, lo mismo sucederia si pongo [], lo devolveria como una arreglo, o si le pongo true, lo entenderia como un booleano

JSON.stringify(): Convierte un objeto o valor de JS en una adena de testo JSON, es decir si yo consologueara console.log(JSON.stringify({})) lo transforma de un objeto {}, a cadena de texto,
lo mismo pasaria con los arreglos, los booleanos, etc.
*/


