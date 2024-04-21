import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Image from '../Image';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
      {/* <Image /> */}
    </>
  );
}

export default Landing;