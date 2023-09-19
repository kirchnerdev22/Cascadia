import React, { useState } from "react";

const coffeeBeans = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Yirgacheffe, Ethiopia",
    roastLevel: "Light",
    flavorNotes: "Bright citrus, floral aroma, and tea-like body."
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    roastLevel: "Medium",
    flavorNotes: "Rich chocolate, caramel sweetness, and a nutty finish."
  },
  {
    id: 3,
    name: "Kenyan AA",
    origin: "Nyeri, Kenya",
    roastLevel: "Medium-Dark",
    flavorNotes: "Bold berry acidity, wine-like complexity, and hints of blackcurrant."
  },
  {
    id: 4,
    name: "Guatemalan Antigua",
    origin: "Antigua, Guatemala",
    roastLevel: "Medium",
    flavorNotes: "Spicy, smoky, and full-bodied with notes of cocoa and cinnamon."
  },
  {
    id: 5,
    name: "Costa Rican Tarrazu",
    origin: "Tarrazu, Costa Rica",
    roastLevel: "Light-Medium",
    flavorNotes: "Crisp acidity, bright citrus, and a honey-sweet finish."
  },
  {
    id: 6,
    name: "Brazilian Santos",
    origin: "Santos, Brazil",
    roastLevel: "Medium-Dark",
    flavorNotes: "Nutty, mild acidity, and hints of dark chocolate."
  },
  {
    id: 7,
    name: "Sumatra Mandheling",
    origin: "Mandheling, Sumatra",
    roastLevel: "Dark",
    flavorNotes: "Earthy, full-bodied, and notes of spice and herbs."
  },
  {
    id: 8,
    name: "Mexican Chiapas",
    origin: "Chiapas, Mexico",
    roastLevel: "Light-Medium",
    flavorNotes: "Bright acidity, medium body, and hints of caramel and cinnamon."
  },
  {
    id: 9,
    name: "Hawaiian Kona",
    origin: "Kona, Hawaii",
    roastLevel: "Light",
    flavorNotes: "Smooth, nutty, and a touch of tropical fruitiness."
  }
];

function Coffee() {
  const [selectedRoast, setSelectedRoast] = useState("All"); // State for selected roast level
  const roastLevels = ["All", "Light", "Medium", "Medium-Dark", "Dark"];

  // Function to handle roast level selection
  const handleRoastChange = (event) => {
    setSelectedRoast(event.target.value);
  };

  // Filter coffee beans based on the selected roast level
  const filteredCoffeeBeans = selectedRoast === "All"
    ? coffeeBeans
    : coffeeBeans.filter((bean) => bean.roastLevel === selectedRoast);

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
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffee;
