import React from 'react';
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineCalendar, AiOutlineFile, AiOutlineBarChart } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Menu = () => {
  return (
      <div className="px-2 py-4 flex flex-col space-y-[20px]">
        <div className="flex items-center p-2 rounded-lg text-blue-600 text-lg bg-blue-100">
          <AiOutlineHome className="mr-3" />
          Главная
        </div>
        <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
          <AiOutlineTeam className="mr-3" />
          Университеты
        </div>
        <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
          <AiOutlineTeam className="mr-3" />
          Студенты
        </div>
        <div className="flex items-center p-2 mt-2 rounded-lg text-lg hover:bg-gray-100">
          <AiOutlineProject className="mr-3" />
          Галерея
        </div>
        <div className="flex items-center p-2 mt-4 rounded-lg text-lg hover:bg-gray-100">
          <FiSettings className="mr-3" />
          Настройки
        </div>
      </div>
  );
};

export default Menu;
