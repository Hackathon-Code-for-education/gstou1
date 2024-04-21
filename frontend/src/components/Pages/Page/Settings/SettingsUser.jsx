import React from 'react';
import { Link } from 'react-router-dom';

import Abiturent from './Abiturent'
import StudentApplication from './StudentApplication';
import University from './University'

const SettingsUser = () => {

    const [activeCopm, setActiveComp] = React.useState('abiturent')

    let changeActive = (value) => {
        setActiveComp(value)
        console.log(value);
    }
    const logOut = () => {
        localStorage.clear()     
    }

    return (
        <div className=''>
            <div className="bg-white w-full flex flex-col gap-5 px-3 mx-auto md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Настройки</h2>

                    <ul>
                        <li onClick={() => changeActive("abiturent")} className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">Абитуриент</li>
                        <li onClick={() => changeActive("studentApplication")} className='"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"'>Студент</li>
                        <li onClick={() => changeActive("university")} className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">ВУЗ</li>
                        <li onClick={logOut} className="flex items-center px-3 py-2.5 mt-[20px] font-bold text-[18px] text-[#ff2929]  hover:text-indigo-900 hover:border hover:rounded-full">Выйти</li>
                    </ul>
                    
                </div>
            </aside>

            {activeCopm === 'abiturent' && <Abiturent/>}
            {activeCopm === 'studentApplication' && <StudentApplication/>}
            {activeCopm === 'university' && <University/>}
            
        </div>
        </div>
    );
};

export default SettingsUser;