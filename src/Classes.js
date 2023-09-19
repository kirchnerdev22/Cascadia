// classes.js

import React from 'react';

// Define an array of coffee classes
const coffeeClasses = [
  {
    id: 1,
    title: 'Espresso Technique',
    description: 'Learn the art of crafting the perfect espresso shot.',
  },
  {
    id: 2,
    title: 'Latte Art',
    description: 'Master the skills needed to create beautiful latte art designs.',
  },
  {
    id: 3,
    title: 'Espresso Masterclass',
    description: 'Dive deep into the world of espresso with this advanced class.',
  },
  {
    id: 4,
    title: 'Home Brew Methods',
    description: 'Discover various home brewing techniques for your favorite coffee.',
  },
  {
    id: 5,
    title: 'Iced Coffee Classes',
    description: 'Learn how to make refreshing iced coffee drinks in this class.',
  },
];

// CoffeeClasses component to display all classes using a loop
function CoffeeClasses() {
  return (
    <div>
      <h1>Coffee Classes</h1>
      <ul>
        {coffeeClasses.map((coffeeClass) => (
          <li key={coffeeClass.id}>
            <h2>{coffeeClass.title}</h2>
            <p>{coffeeClass.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoffeeClasses;
