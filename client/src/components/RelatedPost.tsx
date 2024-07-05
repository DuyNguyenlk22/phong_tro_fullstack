import React from 'react';
import { Sitem } from './Index';

const RelatedPost: React.FC = () => {
  return (
    <div className='w-full bg-white p-5 border-[1px] border-[#dedede] rounded-lg'>
      <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
      <div>
        <Sitem />
        <Sitem />
        <Sitem />
      </div>
    </div>
  );
};

export default RelatedPost;
