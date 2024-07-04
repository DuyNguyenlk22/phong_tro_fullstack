import React, { memo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

type Props = {
  text?: number | string | any;
  icon?: any;
  type?: string;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
};

const notActive = `w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-200 rounded`;
const active = `w-[46px] h-[48px] flex justify-center items-center bg-[#e13427] text-white rounded`;
const PageNumber: React.FC<Props> = ({ text, icon, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [paramSearch] = useSearchParams();
  let entries = paramSearch.entries();
  const append = (entries: any) => {
    let params = [];
    paramSearch.append('page', text);
    for (let entry of entries) {
      params.push(entry);
    }
    let a = {};
    params.map((i) => {
      a = { ...a, [i[0]]: i[1] };
    });
    return a;
  };

  const handleChangePage = () => {
    if (!(text === '...')) {
      setCurrentPage?.(text);
      navigate({
        pathname: '/',
        search: createSearchParams(append(entries)).toString(),
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
