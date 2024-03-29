import React from 'react';
import { text } from '../../ultils/constant';
import { Province } from '../../components/Index';
import { List, Pagination } from './Index';
import { useSearchParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [param] = useSearchParams();
  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-[28px] font-semibold text-center'>{text.HOME_TITLE}</h1>
        <p className='text-[#65676b] text-sm'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='flex gap-4 w-full'>
        <div className='w-[70%]'>
          <List page={param.get('page')} />
          <Pagination page={param.get('page')} />
        </div>
        <div className='w-[30%] border-2 border-green-500'>SideBar</div>
      </div>
    </div>
  );
};

export default HomePage;
