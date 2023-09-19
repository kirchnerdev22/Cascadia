import React, { useState } from 'react';

const guides = [
    {
      id: 1,
      name: 'Hario V60',
      guide: `
        **Brewing Coffee with Hario V60**
  
        *Equipment Needed:*
        - Hario V60
        - Coffee filters
        - Freshly ground coffee
        - Kettle
        - Scale
        - Timer
  
        *Steps:*
        1. Place a filter in the Hario V60 and rinse it with hot water to remove any paper taste. Discard the water.
        2. Add your desired amount of coffee grounds to the V60. A common ratio is 1:16 (1 gram of coffee to 16 grams of water).
        3. Start your timer and begin pouring hot water (just off the boil) over the coffee grounds in a spiral motion. Ensure all grounds are evenly saturated.
        4. Allow the coffee to bloom for about 30 seconds.
        5. Continue pouring water in a slow, controlled manner, keeping the water level consistent.
        6. Once you've reached your desired coffee volume, remove the V60 from the cup or server.
        7. Enjoy your delicious brewed coffee!
  
        Adjust the grind size and water-to-coffee ratio to achieve your preferred taste.
      `,
    },
    {
      id: 2,
      name: 'Aeropress',
      guide: `
        **Brewing Coffee with Aeropress**
  
        *Equipment Needed:*
        - Aeropress
        - Aeropress filters
        - Freshly ground coffee
        - Kettle
        - Stirring paddle
        - Timer
  
        *Steps:*
        1. Insert a filter into the Aeropress cap and place it on a sturdy cup or server.
        2. Add finely ground coffee into the Aeropress. The amount depends on your taste, but a good starting point is 1 to 2 tablespoons.
        3. Heat water to about 200°F (93°C) and pour it over the coffee grounds, saturating them evenly.
        4. Stir the coffee and water mixture for about 10 seconds.
        5. Attach the plunger and press down gently and steadily. This should take about 20-30 seconds.
        6. Your brewed coffee is now ready to enjoy. You can dilute it with hot water if desired.
  
        Experiment with different coffee types and brew times to find your perfect cup.
      `,
    },
    {
      id: 3,
      name: 'Chemex',
      guide: `
        **Brewing Coffee with Chemex**
  
        *Equipment Needed:*
        - Chemex brewer
        - Chemex filter
        - Freshly ground coffee
        - Kettle
        - Scale
        - Timer
  
        *Steps:*
        1. Place the Chemex filter in the brewer with the thick side of the filter facing the spout. Rinse it with hot water to remove any paper taste. Discard the water.
        2. Add your desired amount of coffee grounds to the Chemex. A common ratio is 1:16 (1 gram of coffee to 16 grams of water).
        3. Start your timer and begin pouring hot water (just off the boil) over the coffee grounds in a circular motion. Ensure all grounds are evenly saturated.
        4. Allow the coffee to bloom for about 30 seconds.
        5. Continue pouring water in a slow, controlled manner, keeping the water level consistent.
        6. Once you've reached your desired coffee volume, remove the Chemex filter and discard it.
        7. Enjoy your delicious brewed coffee!
  
        Adjust the grind size and water-to-coffee ratio to achieve your preferred taste.
      `,
    },
    {
      id: 4,
      name: 'Kalita Wave',
      guide: `
        **Brewing Coffee with Kalita Wave**
  
        *Equipment Needed:*
        - Kalita Wave 185 dripper
        - Kalita Wave filter
        - Freshly ground coffee
        - Kettle
        - Scale
        - Timer
  
        *Steps:*
        1. Place the Kalita Wave filter in the dripper and rinse it with hot water to remove any paper taste. Discard the water.
        2. Add your desired amount of coffee grounds to the Kalita Wave. A common ratio is 1:16 (1 gram of coffee to 16 grams of water).
        3. Start your timer and begin pouring hot water (just off the boil) over the coffee grounds in a circular motion. Ensure all grounds are evenly saturated.
        4. Allow the coffee to bloom for about 30 seconds.
        5. Continue pouring water in a slow, controlled manner, keeping the water level consistent.
        6. Once you've reached your desired coffee volume, remove the Kalita Wave from the cup or server.
        7. Enjoy your delicious brewed coffee!
  
        Adjust the grind size and water-to-coffee ratio to achieve your preferred taste.
      `,
    },
  ];
  

function GuideTile({ guide }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="guide-tile">
      <h3 onClick={toggleModal}>{guide.name}</h3>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={toggleModal} className="close-button">
              Close
            </button>
            <div className="guide-info">
              <h2>{guide.name}</h2>
              <p>Price: ${guide.price}</p>
              <div className="brewing-guide" dangerouslySetInnerHTML={{ __html: guide.guide }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Guides() {
  return (
    <div className="guides-page">
      <h1>Coffee Brewing Guides</h1>
      <div className="guide-tiles">
        {guides.map((guide) => (
          <GuideTile key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
}

export default Guides;
