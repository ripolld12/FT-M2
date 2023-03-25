import logo from './logo.svg';
import Componente from './components/Componente/Componente'
import Cards from './components/Cards/Cards';
import './App.css';


function App() {
  return (
    <>
      {/*<div className='Contenedor'> 
      En react no existe class o id, tiene que ser class para identificar elementos 
        <div>Otro texto</div>
        <div>Otro texto</div>
        <div>Otro texto</div>
      </div>*/}

      <Componente/>
      <Cards/>
    </>
  );
}

export default App;
