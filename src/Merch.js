import React from 'react';

const merchandiseData = [
  { id: 1, name: 'Coffee Shirt', price: 19.99 },
  { id: 2, name: 'Coffee Sweater', price: 29.99 },
  { id: 3, name: 'Coffee Hat', price: 14.99 },
  { id: 4, name: 'Coffee Beanie', price: 12.99 },
  { id: 5, name: 'Coffee Cup', price: 9.99 },
  { id: 6, name: 'Coffee Mug', price: 11.99 },
  { id: 7, name: 'Honey', price: 7.99 },
  { id: 8, name: 'Chai Mix', price: 6.99 },
  { id: 9, name: 'Other Item', price: 15.99 },
];

function Merch() {
  return (
    <div>
      <h1>Coffee Store Merchandise</h1>
      <ul>
        {merchandiseData.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Merch;
