
import avatarAnisha from '../../assets/images/avatar-anisha.png';
import avatarAli from '../../assets/images/avatar-ali.png';
import avatarRichard from '../../assets/images/avatar-richard.png';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      {/* Container to heading and testm blocks */}
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center'>
          Карточка ВУЗа
        </h2>
        {/* Testimonials Container */}
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          {/* Testimonial 1 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={avatarAnisha} className='w-16 -mt-14' alt='' />
            <div className='text-center bg-cyan-500 p-2 rounded-full px-3 text-white '>ГГНТУ</div>
            <h5 className='text-lg font-bold'>Айша Магмаева</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Выбрала этот универ и рада, что есть это”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarAli} className='w-16 -mt-14' alt='' />
            <div className='text-center bg-cyan-500 p-2 rounded-full px-3 text-white '>МФТИ</div>
            <h5 className='text-lg font-bold'>Екатерина Волкец </h5>
            <p className='text-sm text-darkGrayishBlue'>
              “СУПЕР ПУПЕР! Я БЛОГАДАРНА ВАМ!”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarRichard} className='w-16 -mt-14' alt='' />
            <div className='text-center bg-cyan-500 p-2 rounded-full px-3 text-white '>МГУ</div>
            <h5 className='text-lg font-bold'>Джамбуш Индус</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Поступил в универ, отлично все, МГУ В СЕРДЦЕ”
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='my-16'>
          <Link
            to='/signupForm'
            className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
