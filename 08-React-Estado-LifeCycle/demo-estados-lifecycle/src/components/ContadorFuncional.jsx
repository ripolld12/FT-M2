import { useState } from "react" // Si voy a trabajar con componentes funcionales y no de clases, debo usar el hook useState
import { useEffect } from "react" // Con esto puedo usar un hook para trabajar con los ciclos de vida (mount, update y unmount)

const ContadorFuncional = () =>{

    const [counter, setCounter] = useState(0) // Le indico el valor inicial de mi estado, en la primera posicion el de array le doy el nombre al estado
    // Esto me retorna un array con dos posiciones, en la primera tenemos el estado y la segunda es la funcion que usamos para actualizar el estado
    // Estoy haciendo un destructuring del hook

    const aumentar = () =>{ 
        setCounter(counter+1)
    }

    const decrementar = () =>{ 
        counter>0 && setCounter(counter-1) // Si yo consologueo acca no voy a tener delay como pasa con los componenetes de clase
    }

    const reiniciar = () =>{ 
        setCounter(0)
    }

    useEffect( // Para este hook, siempre voy a tener que pasar dos argumentos, un callback donde voy a indicar loq ue quiero que pase cuando se monte el cmponenete y un array (array de dependencias)
        ()=>{
        console.log('Holis')
        }, []
    )

    return(
        <>
            <h3>Diana Funcional</h3>
            <p>{counter}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </>
    )
}

export default ContadorFuncional