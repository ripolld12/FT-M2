import { useResolvedPath } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const Person = () =>{
    const[users, setUsers]=useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    },[])

    //Con esto lo que se hizo fue que al momento del montaje de la pagina person, se le indico que montara el listado de usuarios que se tomo de la ruta https://jsonplaceholder.typicode.com/users

    return(
        <div>
            <h1>Cohorte: FT-36b</h1>
            <label>Estudiante: Diana</label>
            <hr/>
            <h2>Users:</h2>
            <ul>
                {
                    users.map(user =>{
                        return(
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>

            
        </div>
    )
}

export default Person