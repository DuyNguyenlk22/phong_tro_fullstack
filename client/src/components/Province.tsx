import React from 'react';
import { location } from '../ultils/constant';
import { ProvinceBtn } from './Index';

const Province: React.FC = () => {
  return (
    <div className='flex justify-center gap-5 my-5'>
      {location.map((item) => {
        return <ProvinceBtn key={item.id} name={item.name} image={item.img} />;
      })}
    </div>
  );
};

export default Province;
