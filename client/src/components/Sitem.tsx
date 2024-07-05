import React from 'react';

const Sitem: React.FC = () => {
  return (
    <div className='flex items-center justify-between border-b-1 border-[#eee]'>
      <figure className=' w-[65px] h-[65px] mr-3'>
        <img
          src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/05/1i1s66s7l-45bfq0_1720168180.jpg'
          alt='ảnh'
          className='object-cover w-full h-full rounded'
        />
      </figure>
      <div className='mb-2 pb-1'>
        <h4 className='text-blue-500'>Căn hộ studio cho sinh viên tdtu , rmit ,ntt….</h4>
        <div className='flex justify-between items-center text-sm'>
          <p className='text-green-500 font-semibold'>6 triệu/tháng</p>
          <p className='text-[#aaa]'>11 giây trước</p>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
