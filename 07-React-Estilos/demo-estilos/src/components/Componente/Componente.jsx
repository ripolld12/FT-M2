// import './componente.css'

// const containerVioleta = { // esta es otra forma de dar estilo, creamos un objeto con las propiedades
//     backgroundColor: '#a0dheb',
//     color: 'white',
// }

import style from './Componente.module.css'
console.log(style)

const Componente=()=>{
    return (
        <div className={style.contenedor}>
            {/* style={containerVioleta}
            className='Container' */}
        
            <p>Acá hay texto</p>
            <p>Acá hay texto</p>
            <p>Acá hay texto</p>
            <p>Acá hay texto</p>
            <p>Acá hay texto</p>
        </div>
    )
}

export default Componente