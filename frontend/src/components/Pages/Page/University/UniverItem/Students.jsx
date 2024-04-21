import {AiOutlineSearch} from 'react-icons/ai';

const people = [
    {
      name: 'Leslie Alexander',
      curses: 'ИПИТ',
      link: 'ТУТ ДОЛЖЕН БЫТЬ ЛИНК ЧАТА ЧЕРЕЗ react-router',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Foster',
      curses: 'ИПИТ',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Dries Vincent',
      curses: 'ИПИТ',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Lindsay Walton',
      curses: 'ИцитЭП',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Courtney Henry',
      curses: 'ИНГ',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tom Cook',
      curses: 'ИНГ',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  
  export default function Students() {
    return (
        <div className='space-y-20'>
        <div className='flex items-center justify-center space-x-5'>
          <div className='bg-gray-200 rounded-full flex mt-2 py-3  items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={30} />
          <input
            className='bg-transparent p-2 w-full focus:outline-none'
            type='text'
            placeholder='Найти конкретного студента'
          /> 

          </div>
          <div className='flex space-x-4'>
            <div className='bg-gray-300 p-3 px-8 text-lg rounded-full border-gray-500 border-[2px]'>ВСЕ</div>
            <div className='bg-gray-300 p-3 px-8 text-lg rounded-full'>ИПИТ</div>
            <div className='bg-gray-300 p-3 px-8 text-lg rounded-full '>ИцитЭП</div>
            <div className='bg-gray-300 p-3 px-8 text-lg rounded-full '>ИНГ</div>
          </div>
        </div>
            
             <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="text-sm font-semibold leading-6 text-gray-500">{person.curses}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              <a href={person.link} className="flex items-center shrink-0 bg-darkBlue text-white px-3 h-[50px] rounded-full hover:bg-slate-500 cursor-pointer">
            Перейти к чату
          </a>
            </div>
          </li>
        ))}
      </ul>
        </div>
     
    )
  }
  