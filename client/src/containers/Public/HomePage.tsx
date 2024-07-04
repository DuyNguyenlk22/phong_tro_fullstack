import React, { useEffect } from 'react';
import { text } from '../../ultils/constant';
import { ItemSidebar, Province } from '../../components/Index';
import { List, Pagination } from './Index';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getAcreages, getPrices } from '../../store/slices/navSlice';

const HomePage: React.FC = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { categories, prices, acreages } = useSelector((state: RootState) => state.navSlice);
  useEffect(() => {
    dispatch(getPrices());
    dispatch(getAcreages());
  }, [params]);

  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-[28px] font-semibold text-center'>{text.HOME_TITLE}</h1>
        <p className='text-[#65676b] text-sm'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='flex gap-4 w-full'>
        <div className='w-[70%]'>
          <List />
          <Pagination />
        </div>
        <div className='w-[30%] flex flex-col justify-start items-center gap-5'>
          <ItemSidebar isDouble={false} content={categories} title='Danh mục cho thuê' />
          <ItemSidebar type='priceCode' isDouble={true} content={prices} title='Xem theo giá' />
          <ItemSidebar
            type='acreageCode'
            isDouble={true}
            content={acreages}
            title='Xem theo diện tích'
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
