import React, { memo } from 'react';
import { text } from '../utils/dataIntro';
import icons from '../utils/icons';
import { Button } from '../components/Index';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NavLink } from 'react-router-dom';
import { formatVietnameseToString } from '../utils/common/format';
const { RiStarSFill } = icons;

const Intro: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.navSlice);

  return (
    <section className='w-[90%] lg:w-[70%] text-center text-[#333] pt-10 pb-[70px] px-[70px] mb-5 bg-fifth border-1 border-[#dedede] rounded-lg shadow-sm'>
      <h3 className='text-xl font-bold '>{text.title}</h3>
      <p className='my-4 text-sm'>
        <span>{text.desc}</span>
        <span>
          {categories &&
            categories.map((item) => {
              return (
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className={'text-blue-500 hover:text-orange-500 font-semibold'}>
                  {`${item.value.toLowerCase()}, `}
                </NavLink>
              );
            })}
        </span>
        <span>{text.desc2}</span>
      </p>
      <div className='grid grid-cols-4 gap-5'>
        {text.statistic.map((item, index) => {
          return (
            <div key={index}>
              <h4 className='font-bold text-xl'>{item.number}</h4>
              <span className='text-sm'>{item.info}</span>
            </div>
          );
        })}
      </div>
      <p className='mt-4 font-bold text-lg'>{text.price}</p>
      <div>
        {Array.from({ length: 5 }, (_, index: number) => {
          return (
            <RiStarSFill
              key={index}
              size={24}
              className=' text-yellow-400 text-xl inline-block align-baseline'
            />
          );
        })}
      </div>
      <p className='text-center text-sm italic'>"{text.comment}"</p>
      <h5 className='my-4'>{text.author}</h5>
      <h2 className='font-bold text-lg'>{text.question}</h2>
      <p className='text-sm my-4'>{text.answer}</p>
      <Button
        text='Đăng tin ngay'
        textColor='text-white font-semibold text-sm'
        bgColor='bg-third'
      />
    </section>
  );
};

export default memo(Intro);
