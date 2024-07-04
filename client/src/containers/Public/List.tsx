import React, { useEffect } from 'react';
import { Button, Item } from '../../components/Index';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getPostsLimit } from '../../store/slices/postSlice';
import { useSearchParams } from 'react-router-dom';

const List: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state: RootState) => state.postSlice);

  useEffect(() => {
    let params: any[] = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamObject = {};
    params.map((i) => {
      searchParamObject = { ...searchParamObject, [i[0]]: i[1] };
    });
    dispatch(getPostsLimit(searchParamObject));
  }, [searchParams]);

  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md border-[1px] border-[#dedede] px-6'>
      <h1 className='text-xl font-semibold'>Tổng 122.075 kết quả</h1>
      <div className='space-x-2 my-3'>
        <span>Sắp xếp :</span>
        <Button
          text='Mặc định'
          textColor='text-sm underline text-[#333]'
          bgColor='font-bold bg-[#f1f1f1]'
        />
        <Button text='Mới nhất' textColor='text-sm text-[#333]' bgColor='bg-[#f1f1f1]' />
      </div>
      <div className='items'>
        {posts &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                address={item.address}
                attributes={item.attributes}
                images={JSON.parse(item.imagesArr.images)}
                star={+item.star}
                title={item.title}
                user={item.user}
                description={JSON.parse(item.description)}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
