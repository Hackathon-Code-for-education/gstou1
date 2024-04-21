import React, { useState } from "react";
import { AiOutlineHome, AiOutlineTeam, AiOutlineProject, AiOutlineSearch} from 'react-icons/ai';
import PageUniver from "./UniverItem";
import Students from "./Students";
import { FaStar, FaRegStar } from 'react-icons/fa';
import {Router, Routes, Route } from 'react-router-dom';
import UniverItem from "./UniverItem";

const MenuUniver = () => {

  const [activeComp, setActiveCopm] = React.useState('university')

  let changeActiveCopm = (value) => {
    setActiveCopm(value)
    console.log(value);
  }

  const [open, setOpen] = useState(true);
  

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
            <li
              onClick={() => changeActiveCopm('university')}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <AiOutlineTeam className="mr-3" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Главное</span>
            </li>
            <li
              onClick={() => changeActiveCopm('students')}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <AiOutlineTeam className="mr-3" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Студенты</span>
            </li>
        </ul>
      </div>
        {activeComp == 'university' ? <UniverItem/> : <Students/>}
    </div>
  );
};
export default MenuUniver;