import React from 'react';
import MainHeadline from './components/MainHeadline';
import ContactUs from './components/ContactUs';
import FeatureSection from './components/feature';
import Testimonial from './components/testimonial';
import FooterSection from './components/FooterSection';

const Home = () => {
  return (
    <div>
      <MainHeadline />
      <ContactUs />
      <div className="bg-main-backgound">
        <FeatureSection />
        <Testimonial />
      </div>
      <FooterSection />
    </div>
  );
};

export default Home;
