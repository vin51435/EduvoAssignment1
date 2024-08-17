import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState();
  const location = useLocation();

  useEffect(() => {
    // Parse query parameters
    const queryParams = queryString.parse(location.search);
    
    // Update state with the query parameter
    const myParam = queryParams.page;
    setActiveMenu(myParam);
  }, [location.search]);

  return (
    <>
      {/* <div>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button> */}
      {/* -translate-x-full */}
      <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
            <Link to='/?page=overview'>
            {/* hover:bg-gray-100  */}
              <div  className="flex items-center p-2 text-gray-900 rounded-lg group">
                <span className={`p-1 text-white rounded ${activeMenu === 'overview' ? 'bg-violet-600' : 'bg-black '}`}>
                  <IoGrid />
                </span>
                <span className={`ms-3 ${activeMenu === 'overview' ? 'text-violet-600' : ''}`}>Overview</span>
              </div>
            </Link>
            </li>
            <li>
            <Link to='/?page=directory'>
            {/* hover:bg-gray-100  */}
              <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                <span className={`p-1 text-white rounded ${activeMenu==='directory' ? 'bg-violet-600' : 'bg-black '}`}>
                  <IoGrid />
                </span>
                <span className={`ms-3 ${activeMenu==='directory' ? 'text-violet-600' : ''}`}>People Directory</span>
                {/* <span className="flex-1 ms-3 whitespace-nowrap">People Directory</span> */}
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </div>
            </Link>
            </li>

          </ul>
        </div>
      </aside>
      {/* content */}
      {/* </div> */}
    </>
  );
};

export default Sidebar;