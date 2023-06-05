import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomePage = () => {
  return (
    <section id="home">
      <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="https://assets.limetray.com/assets/image_manager/uploads/7834/indomiecafe-large-slide-2.jpg" />
          </div>
          <div>
            <img src="https://assets.limetray.com/assets/image_manager/uploads/7834/indomiecafe-large-slide-1.jpg" />
          </div>
          <div>
            <img src="https://assets.limetray.com/assets/image_manager/uploads/7834/indomiecafe-large-slide-3.jpg" />
          </div>
          {/* Add more images as needed */}
        </Carousel>
        <button className="order-button">Order Now</button>
      </div>
      {/*<h1>Welcome to Indomie Cafe</h1>
      <p>Indomie Cafe is the first Noodle Bar in Nigeria which is making fusion food a big hit among many foodies!</p>
      <button>Explore Menu</button>*/}
    </section>
  );
};

export default HomePage;
