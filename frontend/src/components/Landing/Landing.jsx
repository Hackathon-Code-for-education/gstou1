import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Landing = () => {

  console.log(localStorage.getItem('authToken'));
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />

    </>
  );
}

export default Landing;