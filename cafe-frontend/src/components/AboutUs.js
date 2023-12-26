import React from 'react';

const AboutUs = () => {
  return (
    <>
    <section id="about-us">
      <div className="about-us-content">
        <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/abt-indomiecafe2.jpg" alt="About us" className="about-us-image" />
        <div>
          <h2>About Us</h2>
          <p>Welcome to JustAda Kitchen! We are a unique dining destination in Nigeria, offering a blend of traditional and modern recipes. Our menu includes a variety of dishes such as yam and egg, jollof rice, fried rice, spaghetti, and local favorites like pap and akara. We are committed to providing a unique dining experience that celebrates the rich flavors and culinary traditions of our region. Come and explore our menu!</p>
          <button className="explore-button">Explore Menu</button>
        </div>
      </div>
    </section>
    <img src="https://assets.limetray.com/assets/image_manager/uploads/7834/mid11-indomiecafe.jpg" alt="Separator" className="separator-image" />
    </>
  );
};



export default AboutUs;
