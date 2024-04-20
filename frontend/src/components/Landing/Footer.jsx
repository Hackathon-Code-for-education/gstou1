
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
          <div className='pt-2 text-[25px] text-white font-bold pb-5'>
          Xaxathon
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

        {/* Input Container */}
        <div className='flex items-end'>
          <div className='hidden text-white md:block'>
            Компания © 2024, Созданная Xaxathon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
