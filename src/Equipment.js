import React from 'react';
import equipmentData from './EquipmentGear';


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
