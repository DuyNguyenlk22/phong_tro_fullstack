import React from 'react';
import Header from './Header';
import { Navbar, SearchBar } from './Index';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Header />
      <Navbar />
      <SearchBar />
      <div className='w-4/5 lg:w-3/5 flex flex-col justify-start items-start mt-3'>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
