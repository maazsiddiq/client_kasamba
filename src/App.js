import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/navbar/header';
import Navb_ from './component/navbar/navbar';
import TopMainImage from './component/top_images_section/top_main_image';
import BottomImage from './component/top_images_section/bottom_image';
import ProfileCards from './component/profile_cards_section/profile_cards';
import AboutUs from './component/about_us_section/about_us';
import FeaturedContent from './component/featured_content_section/featured_content';
import Footer from './component/footer_section/footer';


function App() {
  return (
    <div>
      <Header />
      <Navb_ />
      <TopMainImage />
      <BottomImage />
      <ProfileCards />
      <AboutUs />
      <FeaturedContent />
      <Footer />
    </div>
  );
}

export default App;
