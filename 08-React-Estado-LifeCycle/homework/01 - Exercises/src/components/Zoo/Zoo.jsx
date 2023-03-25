import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [], 
  })

  const handleInputChange = (event) => { //event es un objeto que aparece automaticamente cada vez que hay un cambio, por ejemplo, cuando se hace clic en un boton, cuando hay un cambio (onChange)
    //Entre las propiedades del event, hay una que se llama target que tambien es un objeto y dentro de ella hay una propiedad que se llama value, este value es lo que el usuario escribe en el input
    setZoo({
      ...zoo, // // Si solo modifico la propiedad zooName, las demas se van a borrar, por anto hago una copia de zoo
      zooName: event.target.value
    }) 
  }


const handleSpecies = (event) => {
  setZoo({
    ...zoo,
    animals: zoo.allAnimals.filter(animal => animal.specie === event.target.value)
  })
}

const handleAllSpecies = () => {
  setZoo({
    ...zoo,
    animals: zoo.allAnimals
  })

}

  React.useEffect(()=>{
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
      setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
      })
    )
    .catch((error) => console.log(error))
  },[])
  

  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species 
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}/>
      <Animals 
        animals={zoo.animals}/>
    </div>
  );
}
