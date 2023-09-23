import React, { useState } from "react";
import EthiopiaImage from "./image-files/Ethiopia.png";
import KonaImage from "./image-files/Kona.png";
import SupremoImage from "./image-files/Supremo.png";
import CoffeeBeans from "./CoffeeBean";

function Coffee() {
  const [selectedRoast, setSelectedRoast] = useState("All"); // State for selected roast level
  const roastLevels = ["All", "Light", "Medium", "Medium-Dark", "Dark"];

  // Function to handle roast level selection
  const handleRoastChange = (event) => {
    setSelectedRoast(event.target.value);
  };

  // Filter coffee beans based on the selected roast level
  const filteredCoffeeBeans = selectedRoast === "All"
    ? CoffeeBeans
    : CoffeeBeans.filter((bean) => bean.roastLevel === selectedRoast);

  return (
    <div>
      <h1>Coffee Bean Collection</h1>

      {/* Roast level filter dropdown */}
      <div className="filter-container">
        <label htmlFor="roastFilter">Filter by Roast Level: </label>
        <select
          id="roastFilter"
          onChange={handleRoastChange}
          value={selectedRoast}
        >
          {roastLevels.map((roast) => (
            <option key={roast} value={roast}>
              {roast}
            </option>
          ))}
        </select>
      </div>

      <div className="product-container">
        {filteredCoffeeBeans.map((bean) => (
          <div className="product-tile" key={bean.id}>
            <h3>{bean.name}</h3>
            <p><strong>Origin:</strong> {bean.origin}</p>
            <p><strong>Roast Level:</strong> {bean.roastLevel}</p>
            <p><strong>Flavor Notes:</strong> {bean.flavorNotes}</p>
            {bean.name === "Ethiopian Yirgacheffe" && <img src={EthiopiaImage} alt={`${bean.name} `} />}
            {bean.name === "Hawaiian Kona" && <img src={KonaImage} alt={`${bean.name} `} />}
            {bean.name === "Colombian Supremo" && <img src={SupremoImage} alt={`${bean.name} `} />}
            <button className="add-to-cart">Add to Cart</button>          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Coffee;
