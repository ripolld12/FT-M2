// import style from './Cards.module.css'
// console.log(style)

import styled from 'styled-components' //Este componente lo tengo que instalar usando npm i styled-components

const ComponenteEstilizado = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: pink;
    padding: 1rem;
    border: 1px solid palevioletred;
    border-radius: 1 rem;
    gap: 1rem;
    margin: 1rem;`

    const Card = styled.div`
    width: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 10rem;
    background-color: palevioletred;
    color: black;
    border-radius: 2rem;`


const Cards = () =>{
    return (
        // <ComponenteEstilizado>
        //     {/* // <div className={style.contenedor}> */}
        //     <div className={style.card}>Esto es una Card</div>
        //     <div className={style.card}>Esto es una Card</div>
        //     <div className={style.card}>Esto es una Card</div>
        //     <div className={style.card}>Esto es una Card</div>
        //     <div className={style.card}>Esto es una Card</div>
        // </ComponenteEstilizado>

        <ComponenteEstilizado>
            <Card>Esto es una Card</Card>
            <Card>Esto es una Card</Card>
            <Card>Esto es una Card</Card>
            <Card>Esto es una Card</Card>
            <Card>Esto es una Card</Card>
        </ComponenteEstilizado>
        
        
    )
}

export default Cards