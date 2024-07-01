import React, { memo } from 'react';

type Props = {
  name: string;
  image: string;
};

const ProvinceBtn: React.FC<Props> = ({ name, image }) => {
  return (
    <div className='text-center shadow-md rounded-xl overflow-hidden cursor-pointer text-[#1266dd] hover:text-orange-500 duration-300'>
      <img src={image} alt={name} className='w-[220px] h-[110px] object-cover ' />
      <p className='font-semibold py-3 bg-white'>{name}</p>
    </div>
  );
};

export default memo(ProvinceBtn);
