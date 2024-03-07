import React from "react";
import { InputForm, Button } from "../../components/Index";

const Login: React.FC = () => {
  return (
    <div className='bg-white max-w-600 mx-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm border-[1px]'>
      <h3 className='text-3xl font-semibold mb-[15px]'>Đăng nhập</h3>
      <div className='w-full flex flex-col gap-5'>
        <InputForm label={`SỐ ĐIỆN THOẠI`} />
        <InputForm label={`MẬT KHẨU`} />
        <Button
          text='Đăng Nhập'
          textColor='text-white w-full py-3 font-bold text-sm'
          bgColor='bg-secondary'
        />
      </div>
      <div className='flex justify-between mt-4'>
        <small className='text-[blue] hover:text-[orange] cursor-pointer'>
          Bạn quên mật khẩu ?
        </small>
        <small className='text-[blue] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>
      </div>
    </div>
  );
};

export default Login;
