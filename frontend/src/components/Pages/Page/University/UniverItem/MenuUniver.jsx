import { useState } from "react";
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineSearch} from 'react-icons/ai';
import PageUniver from "./UniverItem";
import Students from "./Students";
import { FaStar, FaRegStar } from 'react-icons/fa';
import {Router, Routes, Route } from 'react-router-dom';

const MenuUniver = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Главное",},
    { title: "Студенты"}
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-[#ff0000333]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ></div>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Xaxathon
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <AiOutlineTeam className="mr-3" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MenuUniver;