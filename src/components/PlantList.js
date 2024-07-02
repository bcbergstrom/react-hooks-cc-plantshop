import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, isRendered, search, setIsRendered}) {
  const filteredPlants = plants.filter((plant) => search === "" || plant.name.toLowerCase().includes(search.toLowerCase()))
  const element = filteredPlants.map((plant) => <PlantCard name={plant.name} 
  image={plant.image} setIsRendered={setIsRendered} price={plant.price} key={plant.id}  id={plant.id} isRendered={isRendered} />)
  return (
    <ul className="cards">{element}</ul>
  );
}

export default PlantList;
