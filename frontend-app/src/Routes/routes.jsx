import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebsiteLayout from '../Components/WebAppLayout';
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;