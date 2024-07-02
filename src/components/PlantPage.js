import React,{useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [isRendered, setIsRendered] = useState(true)
  const [search, setSearch] = useState("")
  const [plants, setPlants] = useState([])
  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {
      setPlants(data)
      setIsRendered(true)
    })
  },[isRendered])

  return (
    <main>
      <NewPlantForm setIsRendered={setIsRendered}/>
      <Search setSearch={setSearch} />
      <PlantList setIsRendered={setIsRendered} isRendered={isRendered} search={search} plants={plants}/>
    </main>
  );
}

export default PlantPage;
