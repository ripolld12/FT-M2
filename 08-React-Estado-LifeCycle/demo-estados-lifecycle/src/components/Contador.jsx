import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props)
        // this.count = 0 //Si quiero declarar una variable tengo que usar this porque estoy trabajando con clases 
        this.state = { // Asi declaro el estado, este siempre sera un objeto, en este caso un contador
            counter: 0
        } 
    }

    aumentar = () =>{ // Esta funcion sirve para cambiar estado (que inicialmente esta en cero)
        this.setState(
            {counter: this.state.counter + 1},
            () => console.log(this.state.counter) // el segundo argumento es un callback, si yo quiero consologuear y ver en tiempo real, debo indicarlo aqui
        )  
        // console.log(this.state.counter)//Cuando consologueamos el valor del estado apenas se actualiza siempre va a tener un pequeño delay     
    }

    decrementar = () =>{
        this.state.counter > 0 && this.setState({counter: this.state.counter - 1})
    } 
    // Esta es una forma de cortar la ejecucion, porque si encuentra que el primer argumento es falso no se ejecuta, no hace falta que usemos un IF

    reiniciar = () =>{
        this.setState({counter: 0})
    }

    componentDidMount(){ // Aqui podemos indicar todo lo que queramos que suceda cuando se monte el componente (ciclo de vida: Montaje)
        console.log('Soy el componente, me monté')
    }

    componentDidUpdate(){ // Aqui podemos indicar todo lo que queramos que suceda cuando se actualice el componente (ciclo de vida: Actualizacion)
        console.log('Soy el componente, me actualicé') // en este caso se va a consologuear cuando yo haga clic, porqui aqui fue donde el componente cambio de estado
    }

    render(){
        return(
            <div>
                <h3>Diana Class</h3>
                <p>{this.state.counter}</p>
            
                <div>
                    <button onClick={this.aumentar}>Aumentar</button>
                    <button onClick={this.decrementar}>Decrementar</button>
                    <button onClick={this.reiniciar}>Reiniciar</button>
                </div>
            </div>
        )
    }
}

export default Contador