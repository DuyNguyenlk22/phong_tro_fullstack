import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { formatVietnameseToString } from '../../ultils/common/format';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getCategories } from '../../store/slices/navSlice';

const Navbar: React.FC = () => {
  const active = `block bg-third h-[40px] px-3 flex items-center text-center`;
  const notActive = `hover:bg-third duration-300 block h-[40px] px-3 flex items-center text-center`;

  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.navSlice);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <nav id='navbar-menu' className='w-full h-[40[px] bg-secondary'>
      <ul className='mx-auto w-[90%] lg:w-[65%] flex text-white font-bold text-sm'>
        <NavLink to={`/`} className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink>
        {categories &&
          categories.map((item) => {
            return (
              <NavLink
                key={item.code}
                to={`${formatVietnameseToString(item.value)}`}
                className={({ isActive }) => (isActive ? active : notActive)}>
                {item.value}
              </NavLink>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
