import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Directory = lazy(() => import('../Components/Directory'));
const Landing = lazy(() => import('../Components/Landing'));

const Home = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const myParam = queryParams.page;

  let content;

  if (myParam === 'overview') {
    content = (
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    );
  } else if(myParam === 'directory'){
    content = (
      <Suspense fallback={<div>Loading...</div>}>
        <Directory />
      </Suspense>
    )
  } 
  else {
    content = <div>No Matching Page</div>;
  }

  return (
    <div className='p-3 h-auto w-full border border-gray-200 rounded-lg mt-3'>
      {content}
    </div>
  );
};

export default Home;
