import React, { memo, useState } from 'react';
import icons from '../ultils/icons';
import { NavLink } from 'react-router-dom';
import { I_Attributes } from '../intefaces/attributes';
import { I_User } from '../intefaces/user';

const { PiHeartStraightLight, PiHeartStraightFill, RiStarSFill } = icons;

type Props = {
  address: string;
  attributes: I_Attributes;
  images: string[];
  star: number;
  title: string;
  user: I_User;
  description: string;
};

const Item: React.FC<Props> = ({ address, attributes, images, star, title, user, description }) => {
  const [isHoverHeart, setIsHoverHeart] = useState<boolean>(false);

  return (
    <div className='w-full flex py-[15px] border-t border-t-orange-500'>
      <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
        {images.map((item, index) => {
          if (index < 4) {
            return (
              <img
                key={index}
                src={item}
                alt='preview'
                className='w-[120px] h-[100px] object-cover'
              />
            );
          }
        })}

        <span className='py-[3px] px-[5px] rounded bg-[#312F28] text-white text-sm absolute bottom-3 left-1'>
          {images.length} ảnh
        </span>
        <span
          className='absolute bottom-3 right-1'
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}>
          {isHoverHeart ? (
            <PiHeartStraightFill color='red' size={26} />
          ) : (
            <PiHeartStraightLight color='white' size={26} />
          )}
        </span>
      </div>
      <div className='w-3/5 '>
        <div>
          <div>
            {Array.from({ length: star }, (_, index: number) => {
              return (
                <RiStarSFill
                  key={index}
                  className=' text-yellow-400 text-xl inline-block align-baseline'
                />
              );
            })}
            <span className='text-red-600 font-semibold ml-1'>{title}</span>
          </div>

          <div>
            <span className='mr-5 text-[#16c784] font-bold'>{attributes.price}</span>
            <span className='mr-5'>{attributes.acreage}</span>
            <div className='flex justify-between'>
              <p className='hover:underline'>
                <NavLink to={'/'}>{address}</NavLink>
              </p>
              <time title='Thứ 4, 11:06 20/03/2024' className='text-[#aaa] text-sm'>
                {attributes.published}
              </time>
            </div>
          </div>

          <p className='text-[#8a8d91] w-full h-[50px] text-ellipsis overflow-hidden whitespace-pre-line'>
            {description}
          </p>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center'>
              <img
                src='https://phongtro123.com/images/default-user.png'
                alt='avatar'
                className='w-[30px] h-[30px] object-cover rounded-full mr-1'
              />
              <span className='text-[#8a8d91] text-sm'>{user.name}</span>
            </div>
            <div className='flex items-center'>
              <button className='p-1 bg-[#1266dd] rounded-md text-white inline-block text-sm mr-1'>
                Gọi {user.phone}
              </button>
              <button className='p-1 border border-[#1266dd] rounded-md text-[#1266dd] inline-block text-sm'>
                Nhắn Zalo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
