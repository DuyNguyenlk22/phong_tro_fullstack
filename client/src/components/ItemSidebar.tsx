import React, { Fragment, memo } from 'react';
import icons from '../ultils/icons';
import { I_categories } from '../intefaces/categories';
import { NavLink, createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { formatVietnameseToString } from '../ultils/common/format';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { getPostsLimit } from '../store/slices/postSlice';
const { MdNavigateNext } = icons;

interface Props {
  content?: I_categories[] | [];
  title?: string;
  isDouble?: boolean;
  type?: any;
}

const ItemSidebar: React.FC<Props> = ({ content, title, isDouble, type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();
  const handleFilterPost = (code: string) => {
    dispatch(getPostsLimit({ [type]: code }));
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        type: code,
      }).toString(),
    });
  };
  return (
    <div className='w-full bg-white p-5 border-[1px] border-[#dedede] rounded-lg text-sm'>
      <h3 className='font-semibold text-lg mb-4'>{title}</h3>
      {isDouble ? (
        <div className='grid grid-cols-2 gap-y-3 text-sm'>
          {content &&
            content.map((item) => {
              return (
                <Fragment key={item.code}>
                  <div
                    onClick={() => handleFilterPost(item.code)}
                    className='flex items-center border-b-[1px] border-gray-200 border-dashed cursor-pointer hover:text-orange-500 duration-300'>
                    <MdNavigateNext size={14} color='#ccc' />
                    <p>{item.value}</p>
                  </div>
                </Fragment>
              );
            })}
        </div>
      ) : (
        <div className='flex flex-col gap-2 divide-y-[1px] divide-gray-200 divide-dashed'>
          {content &&
            content.map((item) => {
              return (
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className='flex items-center gap-2 cursor-pointer hover:text-orange-500 duration-300'>
                  <MdNavigateNext size={14} color='#ccc' />
                  <p>{item.value}</p>
                </NavLink>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
