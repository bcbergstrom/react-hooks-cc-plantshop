import { useState } from "react";
import React from "react";

function PlantCard({name, image, price, isRendered, id, setIsRendered}) {
  const [inStock, setInStock] = useState(true)
  return (
    <li className="card" data-testid="plant-item">
      <img src={isRendered ? image: "https://via.placeholder.com/400"} alt={isRendered ? image:"plant name"} />
      <h4>{isRendered? name:"plant name"}</h4>
      <p>Price: {isRendered? price : "plant price"}</p>
      {inStock ? (
        <button className="primary" onClick={()=> setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <form onSubmit={(e) => {
        e.preventDefault()
        fetch(`http://localhost:6001/plants/${id}`, {
          method:"PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "price": e.target["price"].value
          })
        })
        .then(r=> r.json())
        .then(data => setIsRendered(false))

      }}>
      <input 
      name="price"
      type="float"
      id="search"
      placeholder="Edit Price..."
      />
      </form>
      <button onClick={() => {
        fetch(`http://localhost:6001/plants/${id}`, {method:"DELETE"})
        .then(r=> r.json())
        .then(data => setIsRendered(false))
      }}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
