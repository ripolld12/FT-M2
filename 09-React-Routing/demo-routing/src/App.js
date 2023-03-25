import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; //Me traigo estas librerias
//El BrowserRouter es lo que va a indicar que vamos a tener varias rutas en nuestra aplicación y entabla la comunicacion con el servidor
// Routes agrupa todas las rutas y, ante un evento, determina cual crresponde seguir
// Route, representa una ruta y el componenteq ue en ella se renderia, mediante los atributos path y element


import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Person from './components/Person';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/> 
        {/*el path esta vacio porque estoy ubicada en el home (localhost:3000) y luego en element le indico el componente que quiero que se renderice en esa ruta */}
        {/* <Route path='about' element={<About/>}/>  */}
        {/* Los paths no son sensibles a las mayusculas, si quiero que las distinga debo agregar un atributo a la ruta llamada caseSensitive */}
        <Route path='profile' element={<Profile/>}>
          <Route path=':person' element={<Person/>}/>
          {/* Esta es una forma de meter una ruta dentro de otra pongo los dos punto para que react lo tome como una variable, yo podria pasar esto como props si quiero*/}
          {/* <Route path='profile/person' element={<Person/>}/> Esto lo hacemos para meter una ruta dentro de otra en la version anterior, tambien sirve*/}          
        </Route>

        <Route path=':about' element={<About/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
