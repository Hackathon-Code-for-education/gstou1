import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from "axios"



const people = [
    {
      name: 'ГГНТУ',
      local: 'Грозный ул-Адамова',
      link: `/page/univer`,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
    {
        name: 'ГГНТУ',
        local: 'Грозный ул-Адамова',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7EOT1lTbm4-GalvHC7izIhMnf770aGy7mgxYpPQFCA&s',
    },
]

const PageUniver = () => {

  const [universities, setUniversities] = useState([])

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = fetch('http://ashabars.beget.tech/api/universities/search?name=S')
        if (!response.ok) {
          throw new Error('Something went wrong');  // Ошибка, если ответ не успешен
          const data = await response.json(); // Преобразование ответа в JSON
          setUniversities(data); // Обновление состояния списка университетов
        }
      } catch (error) {
        console.error('Failed to fetch universities:', error); // Логирование ошибки
      }
    }
    fetchUniversities()
  },[])
 
    return (
        <>
        <div className='flex justify-center mt-10'>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Найти университет'
        />
            </div>
        </div>

        <ul role="list" className=" mx-auto mt-5  divide-y divide-gray-400 max-w-[1200px]">
      {people.map((person) => (
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto items-center">
              <p className="text-[20px] font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="text-[14px] font-semibold leading-6 text-gray-500">{person.local}</p>
            </div>
          </div>
          <Link to={person.link} className="flex items-center shrink-0 bg-darkBlue text-white px-3 h-[50px] rounded-full hover:bg-slate-500 cursor-pointer">
            Посмотреть
          </Link>
        </li>
      ))}
    </ul>

        </>
    );
};

export default PageUniver;