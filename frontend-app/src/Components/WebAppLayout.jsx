import React from 'react';
// import WebsiteFooter from '../common/WebsiteFooter';
import { Outlet } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import Sidebar from './Layouts/Sidebar';

const WebsiteLayout = () => {
  return (
    <>
      <Navbar />
      <main className='flex'>
      <Sidebar/>
        <Outlet />
      </main>
      {/* <WebsiteFooter /> */}
    </>
  );
};

export default WebsiteLayout;