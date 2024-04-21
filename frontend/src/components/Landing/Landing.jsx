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
<<<<<<< HEAD

=======
      
>>>>>>> 832bd1e13d591814bc43c3bb1e6febbb1f0d194e
    </>
  );
}

export default Landing;