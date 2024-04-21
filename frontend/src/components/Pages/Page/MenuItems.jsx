import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineSearch} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import PageUniver from './University/PageUniver';
import SettingsUser from './SettingsUser';

const MenuItems = () => {
    const [activeComponent, setActiveComponent] = useState('university');

    const handleComponentChange = (component) => {
      setActiveComponent(component);
    }
  return (
    <div>
       <nav className='flex justify-between p-6 border-b-2 border-[#9e9a9a]'>

        <div className='pt-2 text-[25px] text-darkBlue font-bold'>
        Xaxathon
        </div>
            <div>
            <div className='flex'>
            <div className={`flex items-center p-2 mt-2 rounded-lg cursor-pointer text-lg ${activeComponent === 'university' ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'}`} onClick={() => handleComponentChange('university')}>
              <AiOutlineTeam className="mr-3 " />
              Университеты
            </div>
            <div className={`flex items-center p-2 mt-2 rounded-lg cursor-pointer text-lg ${activeComponent === 'settings' ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'}`} onClick={() => handleComponentChange('settings')}>
              <FiSettings className="mr-3 " />
              Профиль
            </div>
        </div>
            </div>
            
        </nav>
        {activeComponent === 'university' && <PageUniver />}
        {activeComponent === 'settings' && <SettingsUser />}
    </div>
          
  );
};

export default MenuItems;
