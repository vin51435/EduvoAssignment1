import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-600">PEOPLE.CO</span>
          </a>
          <div className="gap-3 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <span className='text-xl'>
              <IoNotificationsOutline />
            </span>
            <div>
              <div className="flex py-4 first:pt-0 last:pb-0 items-center">
                <img className="h-9 w-9 rounded-full" src="https://avatars.githubusercontent.com/u/75722569?v=4" alt="" />
                <div className="ml-2 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">Jane Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;