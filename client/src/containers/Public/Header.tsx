import React, { useCallback } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Index";
import icons from "../../ultils/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLogOut } from "../../store/slices/authSlice";

const { CiCirclePlus } = icons;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const goLogin = useCallback((flag: boolean) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <header className='w-4/5 lg:w-3/5 mx-auto flex items-center justify-between'>
      <NavLink to={path.HOME}>
        <img src={Logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
      </NavLink>
      <div className='flex items-center gap-1'>
        {isLoggedIn ? (
          <div className='flex items-center gap-1'>
            <small>Tên</small>
            <Button
              text='Đăng xuất'
              textColor='text-white'
              bgColor='bg-red-600 hover:undeline'
              onClick={() => {
                dispatch(setLogOut());
              }}
            />
          </div>
        ) : (
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
          </div>
        )}
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
