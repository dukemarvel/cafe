import React from 'react';

const AboutUs = () => {
  return (
    <>
    <section id="about-us">
      <div className="about-us-content">
        <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/abt-indomiecafe2.jpg" alt="About us" className="about-us-image" />
        <div>
          <h2>About Us</h2>
          <p>Indomie Cafe is the first Noodle Bar in Nigeria which is making fusion food a big hit among many foodies! Our delicious and innovative recipes offer spicy taste and visual treats for all our customers. With our world-class experience, fresh ingredients, innovative recipes, affordable prices and vibrant and lively interiors— Indomie is going to be your go-to place for delicious food and a great time with friends and family. Get ready to taste the twist offered by the iconic brand of noodles. Our appetizing dishes include Yummie Rolls, Frittatas, Frizzled Eggs, Prawn Mie, refreshing drinks and a lot more.</p>
          <button className="explore-button">Explore Menu</button>
        </div>
      </div>
    </section>
    <img src="https://assets.limetray.com/assets/image_manager/uploads/7834/mid11-indomiecafe.jpg" alt="Separator" className="separator-image" />
    </>
  );
};



export default AboutUs;
