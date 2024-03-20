import React, { memo } from 'react';
import icons from '../ultils/icons';
import { NavLink } from 'react-router-dom';

const { PiHeartStraightLight, PiHeartStraightFill, RiStarSFill } = icons;

const Item: React.FC = () => {
  return (
    <div className='w-full flex py-[15px] gap-4 border-t-[1px] border-t-red-500 p-4'>
      <div className='w-[35%]'>
        <img
          src='https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/06/img-20231106-082351_1709737125.jpg'
          alt='...'
          className='w-[280px] h-[240px] object-cover'
        />
      </div>
      <div className='w-[65%]'>
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
            <span className='mr-5 text-[#16c784]'>4.3 triệu/tháng</span>
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

          <div className='text-[#8a8d91] my-[10px] text-sm'>
            <p>
              CHÍNH CHỦ CHO THUÊ PHÒNG - ĐƯỜNG NGUYỄN XÍ, Q. BÌNH THẠNH- Địa chỉ: 250/1 Nguyễn Xí,
              Phường 13, Q. Bình Thạnh.- Nhà trệt. Vị trí rất thuận tiện: Ngay…
            </p>
          </div>
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
              <button className='py-[3px] px-[7px] bg-[#1266dd] rounded-md text-white inline-block text-sm mr-1'>
                Gọi 0918673339
              </button>
              <button className='py-[3px] px-[7px] border-2 border-[#1266dd] rounded-md text-[#1266dd] inline-block text-sm'>
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
