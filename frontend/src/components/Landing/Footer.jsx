
import companyLogoWhite from '../../assets/images/logo-white.svg';
import facebookLogo from '../../assets/images/icon-facebook.svg';
import youtubeLogo from '../../assets/images/icon-youtube.svg';
import twitterLogo from '../../assets/images/icon-twitter.svg';
import pinterestLogo from '../../assets/images/icon-pinterest.svg';
import instagramLogo from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src={companyLogoWhite} className='h-8' alt='' />
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <a to='#'>
              <img src={facebookLogo} className='h-8' alt='' />
            </a>
            {/* Link 2 */}
            <a to='#'>
              <img src={youtubeLogo} className='h-8' alt='' />
            </a>
            {/* Link 3 */}
            <a to='#'>
              <img src={twitterLogo} className='h-8' alt='' />
            </a>
            {/* Link 4 */}
            <a to='#'>
              <img src={pinterestLogo} className='h-8' alt='' />
            </a>
            {/* Link 5 */}
            <a to='#'>
              <img src={instagramLogo} className='h-8' alt='' />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a to='#' className='hover:text-brightRed'>
              Home
            </a>
            <a to='#' className='hover:text-brightRed'>
              Pricing
            </a>
            <a to='#' className='hover:text-brightRed'>
              Products
            </a>
            <a to='#' className='hover:text-brightRed'>
              About
            </a>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <a to='#' className='hover:text-brightRed'>
              Careers
            </a>
            <a to='#' className='hover:text-brightRed'>
              Community
            </a>
            <a to='#' className='hover:text-brightRed'>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright © 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
