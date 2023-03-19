/*ECMASCRIPT 6

ECMAScript v6 (Abreviado como ES6 o ES2015) es el estándar que sigue JavaScript desde Junio de 2015. Hasta ese momento 
la versión de JS que estábamos usando en nuestros navegadores y Node.js, era la v5.

VAR: Tienen alcance de CONTEXTO DE EJECUCIÓN
LET y CONST: Tienen alcance de llaves
*/

const miArr = []
miArr.push(5)

console.log(miArr)

//A pesar de ser const puedo agregarle al array el elemento 5 porque no estoy modificando la variable sino el contenido


/*ARROW FUNCTION:

*/

function sumar1(a,b){
    const resultado = a+b
    return resultado
}

const sumar2 = (a,b) => {
    const resultado = a+b
    return resultado
}

// Si no tiene llaves no es necesario hacer return, así:

const sumar = (a,b) => a+b

// FILTER CON FUNCTION
const arr =[1,2,3,4,5,6,7,8,9]
const pares1 = arr.filter(function(num){
    return num%2===0; // Esta es la condicion 
})

// FILTER CON ARROW FUNCTION
const pares2 = arr.filter((num)=>{
    return num%2===0; // Esta es la condicion 
})


// ARROW FUNCTON CON THIS

const bob = {
    nombre: 'Bob',
    amigos: ['Diana', 'Andres', 'Angie'],

    printFriends(){
        this.amigos.forEach(function(friend){ // El this esta funcionando pero no esta tomando el objeto BOB, es necesario hacer un bind
            console.log(this.nombre,'conoce a',friend)
        });
    }
} 


// Con las ARROW FUNCTION el this se toma del lugar donde fueron definidas

const bob2 = {
    nombre: 'Bob',
    amigos: ['Diana', 'Andres', 'Angie'],

    printFriends(){
        this.amigos.forEach((friend)=>{  // Aqui el this si seria el objeto BOB
            console.log(this.nombre,'conoce a',friend)
        });
    }
} 

// OBJETOS

let bob3 = {
    name: "Bob",
    friendas: [],
    printFriends(){
        this.friends.forEach(f => console.log(this.name+" knows "+ f ))
    }
}

// CLASES

//Antes: Funcion constructora

function Persona(name){  // En los tres puntos sobre la P de persona, puedo convertirlo a clase
    this.person=name;
}

Persona.prototype.add = (name) => this.person=name

//Despues: Clase

class Persona{
    constructor(name){
        this.person=name;
    }

    add(name){
        this.person=name;
    }
}


// OBJETO LITERAL



