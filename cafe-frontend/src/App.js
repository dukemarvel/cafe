import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
//import Menu from './components/Menu';
import Footer from './components/Footer';
import FeaturedMenu from './components/FeaturedMenu';
import OrderSteps from './components/OrderSteps';
import './styles/NavBar.css';
import './styles/HomePage.css';
import './styles/AboutUs.css';
import './styles/FeaturedMenu.css';
import './styles/Footer.css';
import './styles/OrderSteps.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <OrderSteps />
      <AboutUs />
      <FeaturedMenu />
      <Footer />
    </div>
  );
};

export default App;
