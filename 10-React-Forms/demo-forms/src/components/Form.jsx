import { useState, useEffect } from "react"

const Form = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const validate = () => {
        if (/\S+@\S+\.\S+/.test(form.email)){ // con esto valido que tenga la forma de un email (texto+arroba+punto+texto)
            setErrors({
                ...errors,
                email: 'Hay un error'
            })
        }
      
        if(form.password.includes('1')){
            setErrors({
                ...errors,
                password: 'No puede tener el uno'
            })
        }
    }

    useEffect(()=>{
        validate()
    }, [form]) // va a ejecutar validate cuando haya un cambio en el estado form

    const handleForm = (event) => {
        const name = event.target.name // Con esto se si estoy parada en el input email o en password, porque abajo, para cada input yo le puse un nombre, esa es la propiedad a la que estoy accediendo aqui
        const value = event.target.value  // Aqui estoy tomando el valor de lo que estoy ingresando en el input, sin importar cual es, porque el va a reconocerlo por lo que hice arriba
        // De esta forma tengo una sola funcion que aplique tanto para el input email como para el imput password
        
        setForm({
            ...form,
            [name]: value 
        })
    }

    const handleSubmit = (event) => { // Cuando yo le doy clic al boton enviar y este es de tipo submit, la info se envia pero se recarga la pagina, con esto evito que pase eso
        event.preventDefault();
        alert('Info enviada correctamente')
        setForm({
            email: '',
            password: ''
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/* este atributo hace que cuando se ciclee el buton de tipo submit, haa loq ue este estre parentesis, en este caso que no se recargue la pagina */}
                <h1>Soy el Form</h1>
                <hr/>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={form.email} //El valor del input sera igual al valor del estado email
                autoComplete="off"
                onChange={handleForm}></input>
                {errors.email !== '' ? <p>{errors.email}</p> : ''}
                <hr/>
                <label htmlFor='password'>Password: </label>
                <input type='text' name='password' value={form.password} //El valor del input sera igual al valor del estado password
                onChange={handleForm}></input>
                {errors.password !== '' ? <p>{errors.password}</p> : ''}
                <hr/>
                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    )
}

export default Form;