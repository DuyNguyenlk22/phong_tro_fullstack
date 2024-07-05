import React from 'react';
import { SearchBar } from './Index';
import { Outlet } from 'react-router-dom';
import { Navbar, Intro, Contact, Header } from '../../components/Index';

const Home: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Header />
      <Navbar />
      <SearchBar />
      <div className='w-[90%] lg:w-[70%] flex flex-col justify-start items-start mt-3'>
        <Outlet />
      </div>
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
