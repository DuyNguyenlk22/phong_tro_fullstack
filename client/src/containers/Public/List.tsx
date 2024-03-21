import React from 'react';
import { Button, Item } from '../../components/Index';
const List: React.FC = () => {
  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md border-[1px] border-[#dedede] px-6'>
      <h1 className='text-xl font-semibold'>Tổng 122.075 kết quả</h1>
      <div className='space-x-2 my-3'>
        <span>Sắp xếp :</span>
        <Button
          text='Mặc định'
          textColor='text-sm underline text-[#333]'
          bgColor='font-bold bg-[#f1f1f1]'
        />
        <Button text='Mới nhất' textColor='text-sm text-[#333]' bgColor='bg-[#f1f1f1]' />
      </div>
      <div className='items'>
        <Item />
      </div>
    </div>
  );
};

export default List;
