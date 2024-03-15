import React from 'react';
import { text } from '../../ultils/constant';
import { Province } from '../../components/Index';

const HomePage: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-[28px] font-semibold text-center'>{text.HOME_TITLE}</h1>
        <p className='text-[#65676b] text-sm'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
    </div>
  );
};

export default HomePage;
