const Alumnos = (props) => {
    console.log(props) //props es un objeto
    const {alumnos} = props //Hacemos destructuring para sacar el array
    console.log(alumnos)
    return (
        <>
            {
                alumnos.map((alumno)=>{
                    return (
                        <>
                        <p>{alumno.name}</p>
                        <span>{alumno.age}</span>
                        </>
                    )
                })
            }
        </>
    )
}

export default Alumnos;