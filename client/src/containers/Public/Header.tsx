import React, { useCallback } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Index";
import icons from "../../ultils/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const { CiCirclePlus } = icons;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const goLogin = useCallback((flag: boolean) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <header className='w-1100 mx-auto flex items-center justify-between'>
      <NavLink to={path.HOME}>
        <img src={Logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
      </NavLink>
      <div className='flex items-center gap-1'>
        <small>Phòng trọ 123 xin chào !</small>
        <Button
          text='Đăng nhập'
          textColor='text-white'
          bgColor='bg-secondary'
          onClick={() => goLogin(false)}
        />
        <Button
          text='Đăng ký'
          textColor='text-white'
          bgColor='bg-secondary'
          onClick={() => goLogin(true)}
        />
        <Button
          text='Đăng tin miễn phí'
          textColor='text-white'
          bgColor='bg-third'
          Icon={CiCirclePlus}
        />
      </div>
    </header>
  );
};

export default Header;
