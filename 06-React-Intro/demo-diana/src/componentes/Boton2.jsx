import React from 'react' // Cuando trabajo con compenentes de clase tengo que traerme a React

class Boton2 extends React.Component{ // esta es al sintaxis basica para crear el componente de clase
    constructor (props){
        super(props) // Siempre tengo que escribir esto, sirve para pasarle las propiedades a React.componente
    }

    render(){
        return(
            <>
                <button>{this.props.text}</button> 
                {/* Como trabajo con clases uso el this para referime el objeto Boton2 */}
            </>
        )
    }
}

export default Boton2;