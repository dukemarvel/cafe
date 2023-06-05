import React from 'react';

const Dish = ({ dish }) => {
  return (
    <div>
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </div>
  );
};

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: 'Yummie Rolls',
      description: 'Delicious rolls filled with noodles and veggies.',
      price: 'N500',
      image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm1-indomei-Yummy-Rolls.jpg'
    },
    {
      id: 2,
      name: 'Frittatas',
      description: 'A tasty frittata made with fresh eggs and noodles.',
      price: 'N600',
      image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm6-indomie-SZECHUAN-SPICY-MIX.jpg'
    },
    {
      id: 3,
      name: 'Banana Latte',
      description: 'Thick, creamy and heavenly, our banana latte is a big hit among many coffee lovers.',
      price: 'N600',
      image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm3-indomie-BANANA-LATTE.jpg'
    },
    {
      id: 4,
      name: 'Frizzled Eggs',
      description: 'Delicious, crispy and frizzled eggs make up for one of the best breakfast options.',
      price: 'N600',
      image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm5-indomie-Frizzled-Eggs.jpg'
    },
  ];

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      {dishes.map(dish => <Dish key={dish.id} dish={dish} />)}
    </section>
  );
};

export default Menu;
