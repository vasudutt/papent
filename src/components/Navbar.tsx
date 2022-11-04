import React from 'react';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-8 border-b border-b-slate-700">
      <CiSearch className="text-3xl text-slate-700 cursor-pointer hover:scale-125" />
      <h1 className="text-xl text-slate-700 tracking-widest font-semibold cursor-pointer">
        PAPENT
      </h1>

      <div>
        <button className="relative group">
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-stone-300 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-stone-300 h-[1px] rounded"></div>
              <div className="bg-stone-300 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
