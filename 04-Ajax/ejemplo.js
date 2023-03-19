const handlerResponse = (response) =>{
    const usersList = $('#usersList')[0]; // pongo la posicion cero porque cuando consologueaba sin ella me doy cuenta que me retorna un array, 
    // en donde en la posicion 0 está la etiqueta ul con sus datos, esto tambien pude haberlo hecho usando el destructuring, que lo que hace es que
    // si el valor retornado es un array, me muestra lo que esta dentro, sería así: const [usersList] = $('#usersList')
    console.log(response)
    
    response.forEach((user)=>{
        const newLi = document.createElement('li');
        newLi.innerText = user.name;

        usersList.appendChild(newLi)
    })
  
}

const [loadUsers] = $('#loadUsers')

const fetchUsers = () =>{
    $.get("https://jsonplaceholder.typicode.com/users", handlerResponse)
}

loadUsers.addEventListener('click', fetchUsers)

