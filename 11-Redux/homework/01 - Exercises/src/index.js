const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor=document.querySelector('#valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  let counter = store.getState().contador;
  valor.innerHTML = counter
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la función 'renderContador':
renderContador()
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador) // La funcion renderContador queda atenta a los cambios que se hagan en el store y cuando hayan cambios el actua asignandole al span la propiedad contador del estado

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

let botonIncremento=document.querySelector('#incremento')
botonIncremento.addEventListener('click', ()=> store.dispatch(incremento()))

let botonDecremento=document.querySelector('#decremento')
botonDecremento.addEventListener('click', ()=> store.dispatch(decremento()))

let botonIncrementoImpar=document.querySelector('#incrementoImpar')
botonIncrementoImpar.addEventListener('click', ()=> 
store.getState().contador%2 !==0 && store.dispatch(incremento())
)

let botonIncrementoAsync=document.querySelector('#incrementoAsync')
botonIncrementoAsync.addEventListener('click', ()=> 
setTimeout(()=>{
  store.dispatch(incremento())
},1000))
