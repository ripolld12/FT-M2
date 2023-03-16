// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems=[]    // En este array se van a ir guardando los ToDos (tareas) pendientes por realizar.


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
  
  let spanCreatedBy = document.querySelector('#createdBy');    // Me voy a index y veo que el texto 'Aplicación creada por:' 
  // está contenido en el span cuyo id es createdBy, lo que hago es que la selecciono por ID y se la asigno a una variable
  // esto lo puedo hacer con querySelector o con getElementById
  spanCreatedBy.innerHTML='Aplicación creada por: Diana Ripoll'; // Uso el metodo .innerHTML para cambiar el texto
  // ahora, como ya la primera parte está, es decir 'Aplicación creada por: ', pude haber simplmente agregado mi nombre
  // a lo que ya se tenia, así: spanCreatedBy.innerHTML+=' Diana Ripoll'

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo (description) {  // Este constructor me va a crear la plantilla para las tareas que vaya ingresando, estas
                               // tareas van a tener una descripcion y una propiedad que me va a indicar si ya la hice o no.
                               // Va a iniciar en false, osea de entrada esa tarea no la he hecho, cuando se complete se cambia a true
  // Tu código acá:
  this.description = description;
  this.complete = false;
}


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:

ToDo.prototype.completeToDo = function(){    // Esta es la funcion que va a cambiar la propiedad complete a true, cuando la haya completado
  this.complete = true;
  // Si queremos que la tarea se pueda tachar y destachar hacemos:
  // this.complete=!this.complete
}

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {   // Esta funcion lo que va a hacer es que va a recibir una tarea que es un objeto 
  // que va a tener dos propiedades, una description y un complete y cuando la recibe crea un div que vamos a llamar
  // toDoShell y le asigna la clase toDoShell. Ese div va a ser un espacio.
  // Luego, va a colocar dentro de ese espacio la descripcion de la tarea, para eso, crea un span y con el metodo innerHTML
  // le asigna la description que trae el toDo y a ese span le asigno como id, el valor index que recibo como argumento.
  // Luego si la tarea ya se ha completó (this.complete===true) asignale la clase completeText, si es false no se hace nada
  // Luego para meter el span en div lo que hago es que uso el appenChild y listo
  // Tu código acá:
  let toDoShell =  document.createElement("div")
  toDoShell.className = 'toDoShell'
  let toDoText = document.createElement("span")
  toDoText.innerHTML = todo.description
  toDoText.id = index  // Este index lo voy a usar para saber la posicion que tenga esta tarea en el array que voy a crear despues
  if (todo.complete) toDoText.className = 'completeText'
  toDoShell.appendChild(toDoText)

  
  toDoText.addEventListener('click', completeToDo)  // El event listener se pone aqui porque aqui es donde yo estoy creando el 
  // div y span de cada tarea
  
  
  return toDoShell
 
  //Esto me va a crear esto:  <div><span> </span></div>    OJO: Lo retorna en el codigo HTML pero hasta 
  //                                                            aqui aun no lo muestra en la pagina 
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  // Tu código acá:
  let newArray=toDos.map(buildToDo) // El map me sirve para recorrer un array, siempre va a tener dentro de los parentesis
  // una funcion que bien puedo crear directamente ahi o llamarla como este caso, si yo la creo, esa funcion siempre va a 
  // tener dos parametros, el primer parametro representa al elemento que esta recorriendo y el segundo es el index, es decir,
  // la posicion donde se encuentra dicho elemento en el array, así: function (element, i){lo que quiero que haga con cada uno
  // de esos elementos}

  // es como decir:
  // let newArray=toDos.map(function(element,i){
  //  return buildToDo(todo, index)
  //})

  return newArray
  
  // Esto me va a crear esto:  [<div><span> </span></div>,
  //                            <div><span> </span></div>,
  //                            <div><span> </span></div>, ... ]

  // OJO: Hasta aqui he ido guardando en un array todos los divs y span de las tareas, hasta aqui estoy pasando esto
  // al codigo HTML del archivo index, pero aun no lo muestro en la pagina web.

  // Tambien pude haber usado el map como un arrow function, y retornala enseguida, así:

  // return toDos.map((todo, index)=>buildToDo(todo, index))

}

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {   // Con esto voy a empezar a mostrar todo lo que hice antes, en la pantalla/navegador, ahora, 
  // en este punto debo entender en qué momento se va mostrar, basicamente esto será cada vez que demos clic en el boton de agregar.

  // Voy a tomar un div que ya tengo que se llama toDoContainer y lo voy a poner vacio
  // Tu código acá:

    var toDoContainer = document.querySelector('#toDoContainer')
    toDoContainer.innerHTML = ''  // aca se pone vacio para el container se limpie cada que ingreso una tarea
    
    var resultado=buildToDos(toDoItems) // Aqui estoy generando un array  de divs y spans con todas las tareas del 
                                        // array toDoItems

    resultado.forEach(function(elemento){  // Luego a cada div y span del array resultado lo voy agregando dentro de toDoContainer
      toDoContainer.appendChild(elemento)
    })
  };




// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

// El input es el cuadro blanco donde escribo la tarea. el input.value seria la descripcion de la tarea
function addToDo() {
  // Tu código acá:
  var toDoInput = document.querySelector('#toDoInput')
  var nuevoToDo =  new ToDo (toDoInput.value)
  toDoItems.push(nuevoToDo)
  toDoInput.value=''
  displayToDos()
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

var button = document.querySelector('#addButton')
button.addEventListener('click', addToDo)  // el primer parametro es mi trigger y el segundo lo que quiero que ejecute


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;   // Con esto yo voy a saber cual tarea se esta cliqueando para que se cambie el complete
  // a true, el event es un objeto gigante con muchas propiedades que se crea cuando hago clic, target es una de esas
  // propiedades, target tambien es un objeto y dentro tiene otra propiedad llamda id que es la que me va a decir qué
  // tarea es la que se está cliqueando.

  // Tu código acá:

  toDoItems[index].completeToDo()  // Luego voy a usar el index para buscar en el array el todo (que es un objeto) y le voy
  // a aplicar el metodo completeTodo para cambiar la propiedad complete a true
  displayToDos();

  
}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'

displayToDos()
// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
