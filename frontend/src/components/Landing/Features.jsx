import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col space-y-2 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
          Чем мы занимаемся?
          </h2>
          <p className='max-w-sm text-center text-[20px] text-darkGrayishBlue md:text-left'>
            Мы поможем вам сделать правильный выбор ВУЗа
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Личный кабинет абитуриента с диалогами со студентами университета
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Личный кабинет абитуриента с диалогами со студентами университета
              </h3>
              <p className='text-darkGrayishBlue'>
              Эта функция позволит абитуриентам не только получать информацию о университете, но и общаться с текущими студентами. Для поддержки открытости и честности, можно ввести анонимный режим в диалогах, чтобы студенты могли свободно делиться своим мнением.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Панорамные изображения вуза с возможностью перехода между картинками: 
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Панорамные изображения вуза с возможностью перехода между картинками: 
              </h3>
              <p className='text-darkGrayishBlue'>
              Интерактивные панорамные туры по учебным корпусам, столовой и общежитиям университета могут значительно улучшить ориентацию будущих студентов и дать им лучшее представление о жизни в университете. 
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Личный кабинет университетов с возможностью расширения виртуального тура: 
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Личный кабинет университетов с возможностью расширения виртуального тура: 
              </h3>
              <p className='text-darkGrayishBlue'>
              Это дает университетам возможность управлять своими профилями, обновлять информацию и добавлять новые разделы тура, такие как лаборатории, библиотеки, или спортивные объекты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
