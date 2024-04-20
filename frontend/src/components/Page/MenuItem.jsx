import React from 'react';
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineSearch} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Menu = () => {
  return (
          <nav className='flex justify-between p-6 border-b-2 border-[#9e9a9a]'>

            <div className='pt-2 text-[25px] text-darkBlue font-bold'>
              Xaxathon
            </div>
                <div>
                <div className='flex'>
            <div className="flex items-center p-2 mt-2 rounded-lg text-blue-600 text-lg bg-blue-100">
            <AiOutlineTeam className="mr-3" />
            Университеты
            </div>
            {/* <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
            <AiOutlineTeam className="mr-3" />
            Студенты
            </div>
            <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
            <AiOutlineProject className="mr-3" />
            Галерея
            </div> */}
            <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
            <FiSettings className="mr-3" />
            Профиль
            </div>
            </div>
                </div>
        </nav>
  );
};

export default Menu;
