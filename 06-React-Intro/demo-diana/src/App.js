import Titulo from "./componentes/titulo"; // importo el titulo del componente titulo.
import Alumnos from "./componentes/Alumnos";
import Boton from "./componentes/Boton";
import Boton2 from "./componentes/Boton2"

function App() { //APP es mi entry point. Aqui voy a colocar todos los componentes que queramos rendarizar o mostrar en pantalla
  const alumnos = [
    {name: 'Diana', age: 30},
    {name: 'Andres', age: 28},
    {name: 'Angie', age: 29},
  ]
    
  return (// todo lo que coloquemos en return debe ir en lenguaje HTML 
    <>
      <Titulo/> 

      <h3>Alumnos</h3>
      {/* Aqui muestro lo que importé, en este caso el titulo de mi pagina, debe ir en lenguaje HTML. */}
      <Alumnos alumnos={alumnos} />
      {/* Aquí estoy pasandole el array de arriba como propiedad al componente Alumnos*/}
      <Boton text='soy un boton'/>
      <Boton2 text='soy otro boton'/>
    </>
  );
}

export default App;
