import React, { memo, useState } from 'react';
import icons from '../ultils/icons';
import { NavLink } from 'react-router-dom';

const { PiHeartStraightLight, PiHeartStraightFill, RiStarSFill } = icons;

const Item: React.FC = () => {
  const [isHoverHeart, setIsHoverHeart] = useState<boolean>(false);

  return (
    <div className='w-full flex py-[15px] border-t border-t-orange-500'>
      <div className='w-2/5 relative cursor-pointer'>
        <img
          src='https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/06/img-20231106-082351_1709737125.jpg'
          alt='...'
          className='w-[280px] h-[240px] object-cover'
        />
        <span className='py-[3px] px-[5px] rounded bg-[#312F28] text-white text-sm absolute bottom-3 left-1'>
          5 ảnh
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
      <div className='w-3/5 ml-[15px]'>
        <div>
          <div>
            {Array.from({ length: 5 }, (_, index: number) => {
              return (
                <RiStarSFill
                  key={index}
                  className=' text-yellow-400 text-xl inline-block align-baseline'
                />
              );
            })}
            <span className='text-red-600 font-semibold ml-1'>
              Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh
            </span>
          </div>

          <div>
            <span className='mr-5 text-[#16c784] font-bold'>4.3 triệu/tháng</span>
            <span className='mr-5'>40m²</span>
            <div className='flex justify-between'>
              <p className='hover:underline'>
                <NavLink to={'/'}>Quận Bình Thạnh, Hồ Chí Minh</NavLink>
              </p>
              <time title='Thứ 4, 11:06 20/03/2024' className='text-[#aaa] text-sm'>
                9 giờ trước
              </time>
            </div>
          </div>

          <p className='text-[#8a8d91] w-full h-[50px] text-ellipsis overflow-hidden'>
            CHÍNH CHỦ CHO THUÊ PHÒNG - ĐƯỜNG NGUYỄN XÍ, Q. BÌNH THẠNH- Địa chỉ: 250/1 Nguyễn Xí,
            Phường 13, Q. Bình Thạnh.- Nhà trệt. Vị trí rất thuận tiện: Ngay…
          </p>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center'>
              <img
                src='https://phongtro123.com/images/default-user.png'
                alt='avatar'
                className='w-[30px] h-[30px] object-cover rounded-full mr-1'
              />
              <span className='text-[#8a8d91] text-sm'>Nguyen Van Hang</span>
            </div>
            <div className='flex items-center'>
              <button className='p-1 bg-[#1266dd] rounded-md text-white inline-block text-sm mr-1'>
                Gọi 0918673339
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
