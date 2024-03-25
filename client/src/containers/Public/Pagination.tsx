import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import PageNumber from '../../components/PageNumber';
import icons from '../../ultils/icons';

const { MdNavigateNext, MdChevronLeft } = icons;

type Props = {
  page: string | null;
};

const Pagination: React.FC<Props> = ({ page }) => {
  const { posts, count } = useSelector((state: RootState) => state.postSlice);
  const [arrPage, setArrPage] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false);
    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false);
  }, [count, posts, currentPage]);

  return (
    <div className='flex justify-center items-center gap-2 my-4'>
      {!isHideStart && <PageNumber text={<MdChevronLeft />} />}
      {!isHideStart && <PageNumber text={'...'} />}
      {arrPage.length > 0 &&
        arrPage.map((item) => {
          return (
            <PageNumber
              key={item}
              text={item}
              currentPage={Number(page) || 1}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      {!isHideEnd && <PageNumber text={'...'} />}
      {!isHideEnd && (
        <PageNumber
          icon={<MdNavigateNext />}
          text={Math.floor(count / posts.length)}
          setCurrentPage={setCurrentPage}
          type='end'
        />
      )}
    </div>
  );
};

export default Pagination;
