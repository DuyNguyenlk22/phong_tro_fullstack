import React, { memo } from 'react';
import icons from '../ultils/icons';
import { I_categories } from '../intefaces/categories';
const { MdNavigateNext } = icons;

interface Props {
  content?: I_categories[] | [];
  title?: string;
  isDouble?: boolean;
}

const ItemSidebar: React.FC<Props> = ({ content, title, isDouble }) => {
  return (
    <div className='w-full bg-white p-5 border-[1px] border-[#dedede] rounded-lg text-sm'>
      <h3 className='font-semibold text-lg mb-4'>{title}</h3>
      {!isDouble && (
        <div className='flex flex-col gap-2 divide-y-[1px] divide-gray-200 divide-dashed'>
          {content &&
            content.map((item: I_categories) => {
              return (
                <div
                  key={item.code}
                  className='flex items-center gap-2 hover:text-orange-500 duration-300'>
                  <MdNavigateNext size={14} color='#ccc' />
                  <p>{item.value}</p>
                </div>
              );
            })}
        </div>
      )}
      {isDouble && (
        <div className='grid grid-cols-2 gap-3 text-sm'>
          {content &&
            content.map((item) => {
              return (
                <>
                  <div
                    key={item.code}
                    className='flex items-center hover:text-orange-500 duration-300'>
                    <MdNavigateNext size={14} color='#ccc' />
                    <p>{item.value}</p>
                  </div>
                </>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
