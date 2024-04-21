import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ReviewsList from './Reviews/ReviewsList';
import ReviewForm from './Reviews/ReviewForm';

function PageUniver() {

    const [reviews, setReviews] = useState([
        { id: 1, author: "Иван Иванов", content: "Отличная компания, рекомендую!", rating: 5 },
        { id: 2, author: "Петр Петров", content: "Хорошее обслуживание, но есть задержки в доставке.", rating: 3 }
      ]);
    
      const addReview = (review) => {
        // Добавление нового отзыва в массив
        const newReview = {
          id: reviews.length + 1,
          author: review.author,
          content: review.content,
          rating: review.rating
        };
        setReviews([...reviews, newReview]);
      };
    
  const slides = [
    {
      url: 'https://i.vuzopedia.ru/storage/app/uploads/public/62f/502/1f2/62f5021f2d45e827975715.jpg',
    },
    {
      url: 'https://grozmer.ru/images/photos/article3877.jpg',
    },
    {
      url: 'https://fastly.4sqi.net/img/general/600x600/54150284_craneJHeScruyxolZcjll7zKEv8i_mz2Ng0DBFcAcrc.jpg',
    },

    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx91VGR6AVywS7yH1VLK_COC5LlHhkLMyrN3lLV4pmgA&s',
    },
    {
      url: 'https://static.tildacdn.com/tild6431-6265-4135-b233-363162356164/DSC_8695.JPG',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
        <div className='max-w-[1400px] h-[600px] w-full m-auto py-1 px-4 relative group'>
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
            >
                <RxDotFilled />
            </div>
            ))}
        </div>
        </div>
        <p className="text-lg py-1 px-4 mt-10 text-center">ГГНТУ им. акад. М.Д. Миллионщикова – часть научной и инновационной структуры Чеченской Республики и СКФО. Основное преимущество университета заключается в сочетании научно-исследовательской, инновационной и образовательной деятельности, отвечающей современным потребностям общества и инфраструктуре региона.

В этом году в вузе реализуются:
 49 образовательных программ бакалавриата
 10 образовательных программ специалитета
 24 образовательные программы магистратуры
 11 образовательных программ аспирантуры

Подробную информацию о поступлении можно получить в разделе "Приемная кампания 2024"</p>

            <div className="container mx-auto mt-5">
                <ReviewForm onSubmit={addReview}  />
                <ReviewsList  reviews={reviews} />
            </div>
    </div>
   
  );
}

export default PageUniver;