import React, { memo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

type Props = {
  text?: number | string | any;
  icon?: any;
  type?: string;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<any>;
};

const notActive = `w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-200 rounded`;
const active = `w-[46px] h-[48px] flex justify-center items-center bg-[#e13427] text-white rounded`;
const PageNumber: React.FC<Props> = ({ text, icon, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const handleChangePage = () => {
    if (!(text === '...')) {
      setCurrentPage?.(text);
      navigate({
        pathname: '/',
        search: createSearchParams({
          page: text,
        }).toString(),
      });
    }
  };

  return (
    <button
      onClick={handleChangePage}
      className={
        text === currentPage
          ? active
          : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
      }>
      {icon || text}
    </button>
  );
};

export default memo(PageNumber);
