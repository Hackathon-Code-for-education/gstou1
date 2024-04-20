import React from 'react';
import Menu from './MenuItem';

const PageSer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
  {/* Боковая панель */}
  <div className="flex flex-row min-h-full">
    <aside className="w-64" aria-label="Sidebar">
      <div className="">
        <Menu />
      </div>
    </aside>
  </div>
</div>

  );
}

export default PageSer;