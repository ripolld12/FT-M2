import React from 'react'; //React importa React
import ReactDOM from 'react-dom/client'; //React importa ReactDOM (DOM virtual)
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // Aqui se esta trayendo el elemento root del HTML (que es un div, segun lo que se ve en el archivo html index)
root.render( // y en ese root va a renderizar o mostrar en pantalla lo que esté en App
    <App />
);



