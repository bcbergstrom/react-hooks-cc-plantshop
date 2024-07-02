import React from "react";

function NewPlantForm({setIsRendered}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => {
          e.preventDefault()
          const tempPlant = {
            name: e.target["name"].value,
            image: e.target["image"].value,
            price: e.target["price"].value
          }
          fetch("http://localhost:6001/plants",
            {
              method:"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(tempPlant)
            }
          )
          .then(r => r.json())
          .then(data => {
            setIsRendered(false)
          })
}}> 
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
