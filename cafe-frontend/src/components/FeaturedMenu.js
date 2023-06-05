import React from 'react';


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
    {
        id: 5,
        name: 'Chicken Drumsticks',
        description: 'Deliciously seasoned chicken drumsticks for a mouth-watering experience.',
        price: 'N600',
        image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm4-indomiw-Chicken-Drumsticks.jpg'
    },
    {
        id: 6,
        name: 'Szechuan Spicy Mix',
        description: 'The irresistible blend of spicy, sweet and savory flavours will leave you wanting more!',
        price: 'N600',
        image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/fm5-indomie-Frizzled-Eggs.jpg'
    },
  ];


  const FeaturedMenu = () => {
    return (
      <section id="featured-menu" style={{ backgroundImage: `url('https://assets.limetray.com/assets/image_manager/uploads/6530/bg-texture-chalk.jpg')` }}>
        <div className="featured-menu-content">
          <h2>FEATURED MENU</h2>
          <p className="featured-menu-text">The heavenly range on our select menu awaits you!</p>
          <div className="featured-menu-grid">
            {dishes.map(dish => (
              <div className="menu-item" key={dish.id}>
                <div className="image-wrapper">
                  <img src={dish.image} alt={dish.name} />
                  <button className="order-online-button">Order Online</button>
                </div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            ))}
          </div>
          <button className="see-more-button">See More</button>
        </div>
      </section>
    );
  };
  
  
export default FeaturedMenu;