import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { I_categories } from "../../intefaces/categories";
import { apiCategories } from "../../services/category";
import { formatVietnameseToString } from "../../ultils/constant";

const Navbar: React.FC = () => {
  const active = `block bg-third h-[40px] px-3 flex items-center text-center`;
  const notActive = `hover:bg-third duration-300 block h-[40px] px-3 flex items-center text-center`;

  const [categories, setCategories] = useState<I_categories[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res: any = await apiCategories();
      if (res.data.err === 0) setCategories(res.data.response);
    };
    fetchCategories();
  }, []);

  return (
    <nav id='navbar-menu' className='w-full h-[40[px] bg-secondary'>
      <ul className='mx-auto w-4/5 lg:w-3/5 flex text-white font-bold text-sm'>
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
