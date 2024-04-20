import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Landing;