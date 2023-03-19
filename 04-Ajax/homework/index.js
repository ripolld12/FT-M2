const url = 'http://localhost:5000/amigos'

const showAmigos = (response) => {
    const [lista] = $('#lista')
    lista.innerHTML='' // Con esto la reinicio para cuando ejecute el delete, debe ser antes de que muestre los amigos para que primero identifique el que esta borrado y luego muestra la lista
    response.forEach((amigo)=>{
        const newLi = document.createElement('li')
        newLi.innerText=amigo.name

        lista.appendChild(newLi)
    })
}

const getAmigos = () =>{
    $.get(url,showAmigos)
}

const [verAmigos] = $('#boton')
verAmigos.addEventListener('click', getAmigos)


const getID = () =>{
    const [input]=$('#input')
    const id = input.value

    $.get(`${url}/${id}`, (response)=>{
        const [span]=$('#amigo')
        span.innerText=response.name
    })
    input.value=''
}

const [searchFriend] = $('#search')
searchFriend.addEventListener('click', getID)


const removeFriend = () =>{
    const [inputDelete]=$('#inputDelete')
    const id = inputDelete.value

    $.ajax({ //Esta peticion es tipo Delete
        url: `${url}/${id}`,
        type: 'DELETE',
        success: (response) => { // aca recibo la respuesta del servidor, es decir, el array con el objeto eliminado
            showAmigos(response) // la lista que me salia antes ya no va a tener a la persona indicada
        }
    })
}

const [deleteFriend] = $('#delete')
deleteFriend.addEventListener('click', removeFriend)


