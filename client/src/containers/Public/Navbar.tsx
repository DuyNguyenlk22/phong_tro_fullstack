import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { I_categories } from "../../intefaces/categories";

const Navbar: React.FC = () => {
  const nav = [
    { value: "Trang chủ", path: "/" },
    { value: "Cho thuê phòng trọ", path: "chothuephongtro" },
    { value: "Nhà cho thuê", path: "nhachothue" },
    { value: "Cho thuê căn hộ", path: "chothuecanho" },
    { value: "Mặt bằng, văn phòng", path: "chothuematbang" },
  ];

  const active = `block bg-third h-[40px] px-3 flex items-center text-center`;
  const notActive = `hover:bg-third duration-300 block h-[40px] px-3 flex items-center text-center`;

  return (
    <nav id='navbar-menu' className='w-full h-[40[px] bg-secondary'>
      <ul className='mx-auto w-1100 flex text-white font-bold text-sm'>
        {nav &&
          nav.map((item: I_categories, index: number) => {
            return (
              <NavLink
                key={index}
                to={item.path}
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
