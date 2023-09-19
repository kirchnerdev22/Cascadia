import React from 'react';

const equipmentData = [
  { id: 1, name: 'Hario v60', price: 25.99 },
  { id: 2, name: 'Aeropress', price: 29.99 },
  { id: 3, name: 'Aeropress Clear', price: 32.99 },
  { id: 4, name: 'Kalita Wave 185', price: 27.99 },
  { id: 5, name: 'Hario v60 Scale', price: 39.99 },
  { id: 6, name: 'Chemex', price: 42.99 },
  { id: 7, name: 'Ode Brew Grinder', price: 149.99 },
  { id: 8, name: 'Stagg EKG Pro Electric Kettle', price: 149.99 },
];

function Equipment() {
  return (
    <div>
      <h1>Coffee Equipment Store</h1>
      <ul>
        {equipmentData.map((equipment) => (
          <li key={equipment.id}>
            <h2>{equipment.name}</h2>
            <p>Price: ${equipment.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
