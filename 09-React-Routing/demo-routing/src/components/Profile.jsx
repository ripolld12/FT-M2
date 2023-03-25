import { Link, Outlet, useParams} from "react-router-dom"
// Outlet me permite mostrar las rutas hijas, las debo poner en el padre, con esto le indico que Profile tiene un hijo para mostrar

const Profile = () =>{

    const params = useParams()
    console.log(params)
    // Es un objet oque se me va a cargar con la info que el usuario va a cargar

    return (
        <div>
            <h1>Este es perfil de Diana</h1>

            <button>
            <Link to='person'>Person</Link>
            </button>

            <br/>

            <button>
            <Link to=''>Back</Link>
            {/* Para que me retorne a Home debo poner la barra / */}
            </button>

            <br/>

            <button>
            <Link to='/'>Home</Link>
            {/* Para que me retorne a Home debo poner la barra / */}
            </button>

            <Outlet/>
            {/* Me permite mostrar al hijo de un componente en la misma pagina del padre */}

        </div>
    )
}

export default Profile