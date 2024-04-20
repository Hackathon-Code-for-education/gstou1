import { useState } from 'react';


import companyLogo from '../../assets/images/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} alt='' />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <a to='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a to='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a to='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a to='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a to='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        {/* Button */}
        <a
          to='#'
          className='hidden p-3 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Зарегистрироваться
        </a>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <a to='#'>Pricing</a>
          <a to='#'>Product</a>
          <a to='#'>About Us</a>
          <a to='#'>Careers</a>
          <a to='#'>Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;