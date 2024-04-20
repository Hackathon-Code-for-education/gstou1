
import illustrationIntro from '../../assets/images/illustration-intro.jpg';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className=' relative flex flex-col mb-32 space-y-5 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
          Сервис
          </h1>
          <p className='max-w-sm text-[18px] text-center text-darkGrayishBlue md:text-left'>
          по онлайн экскурсиям   в
          университеты с возможностью
        узнать информацию у студентов и
              приемной комиссии
          </p>
          <div className='flex  flex-col w-[190px] justify-center md:justify-start'>
            <a
              to='#'
              className='p-3 pt-2 mt-10 cursor-pointer text-center  text-white bg-darkBlue rounded-full baseline hover:bg-darkGrayishBlue'
            >
              Зарегистрироваться

            </a>
            <a
              to='#'
              className='p-4 mt-3 font-bold text-center cursor-pointer text-darkBlue rounded-full baseline hover:text-darkGrayishBlue'
            >
              Войти

            </a>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2 blur-sm'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
