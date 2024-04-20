import { useState } from 'react';


const Navbar = () => {

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2 text-[25px] text-darkBlue font-bold'>
          Xaxathon
        </div>
        <div className='flex'>
          <a
            to='#'
            className='hidden p-3 px-6 pt-2 text-center mb-1 cursor-pointer text-white bg-darkBlue rounded-full baseline hover:bg-darkGrayishBlue md:block'
          >
            Зарегистрироваться
          </a>
          <a
            to='#'
            className='hidden p-3 px-6 pt-2 font-bold text-darkBlue hover:text-darkGrayishBlue md:block cursor-pointer'
          >
            Войти
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;