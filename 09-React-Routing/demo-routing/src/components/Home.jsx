import { Button } from "bootstrap"
import { Link, NavLink } from "react-router-dom"

const Home = () => {
    return(
        <>
        <h1>Este es el componente Home</h1>

        <button>
        <Link to='/about'>ABOUT</Link>
        </button>

        <br/>

        <NavLink to='/profile'
        style={({ isActive }) => isActive ? {backgroundColor: 'red'} : {backgroundColor: 'pink'}}
        >PROFILE</NavLink>
        
        </>
    )
}

export default Home
