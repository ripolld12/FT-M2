//REACT

/*Es una libreria de JS que es declarativa, eficiente y flexible y sirve para construir interfaces de usuarios. Esta libreria fue creada por el equipo de facebook e instagram, que fue liberada
y ahora es un proyecto open source */

//PROGRAMACION IMPERATIVA VS DECLARATIVA

//IMPERATIVA: Le digo lo que quiero y como lo tiene que hacer (ejemplo: el blucle FOR -- le indico cómo tien que recorrer el arreglo, desde que posicion a qué posicion y en cuanto va aumentando)
//DECLARATIVA: Le digo lo que quiero pero no cómo lo tiene que hacer (ejemplo: el metodo reduce -- no le indico cómo tiene que recorrer el arreglo)

/*A REACT no le indicamos como queremos que se hagan las cosas, el lo hace de forma declarativa.

REACT maneja algo llamado Virtual DOM, es una capa entre el DOM y el codigo HTML, es como una copia del DOM. Si yo quiero modificar algun nodo del DOM, le puedo pedir a REACT (sin yo recorrer el arbol) que lo modifique,
entonces el lo que hara sera hacer los cambios en el Virtual DOM y lo compara con el real y modifica el real. Es decir, los cambios se van relizando el el Virtual DOM y cuando yo lo decido entonces el 
modifica el DOM real solo lo que es distinto, lo demas lo deja igual.


En REACT vamos a estar trabajando con clases y funciones, y con unico archivo en donde vamos a tener toda la información.
Ese archivo se llamará componente, ese componente reciben props (propiedades que vienen en argumentos o parametros), dentro del componente tendremos un estado, este estado es propio del componente.
En este componente voy a indicar lo que quiero hacer, luego REACT realizará los cambios en el DOM virtual y luego los reflejará en el DOM real.


JSX

Nos va a permitir codigo de HTML con JS, asi que cuando estemos creado componentes en REACT vamos a estar trabajando con JSX


Con el comando 'npx create-react-app nombre-carpeta' creamos el proyecto de REACT, esto creara la carpeta con otras carpetas dentro, con todo lo que necesito, el archivo html, etc, etc,...
Me posiciono en al carpeta que acabo de crear y le doy npm start, en consola quedara webpack, es decir nosotros, no tenemos que instalar nada, REACT tiene todo por default.


*/


