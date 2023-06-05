import React from 'react';


const OrderSteps = () => {
    const steps = [
      {
        logo: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/poke-search.png',
        step: 'Step 1',
        description: 'Search for your location'
      },
      {
        logo: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/poke-salads.png',
        step: 'Step 2',
        description: 'Choose your meals'
      },
      {
        logo: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/poke-pay.png',
        step: 'Step 3',
        description: 'Pay Online'
      },
      {
        logo: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/poke-party.png',
        step: 'Step 4',
        description: 'Sit back and relish the delicious meals daily'
      },
    ];
  
    return (
      <section id="order-steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.logo} alt={step.step} />
            <h3>{step.step}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>
    );
  };
  

export default OrderSteps;