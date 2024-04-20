import React from 'react';
import Menu from './MenuItem';
import Search from './Search';
import Univer from './Univer';
import {Router, Routes, Route } from 'react-router-dom';

const PageSer = () => {
  return (
    <div>
        <Routes>
            <Route path="/university" element={<Menu />} />
        </Routes>
    </div>

  );
}

export default PageSer;