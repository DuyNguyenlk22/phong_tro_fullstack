import React, { useEffect, useState } from "react";
import { InputForm, Button } from "../../components/Index";
import { useLocation } from "react-router-dom";
import { I_register } from "../../intefaces/register";
import { apiRegister } from "../../services/auth";

const Login: React.FC = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState<boolean>(location.state?.flag);
  const [payload, setPayload] = useState<I_register>();

  const handleSubmit = async () => {
    const response = await apiRegister(payload);
    console.log("🐼🐸 ~ handleSubmit ~ response🚀", response);
  };

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  return (
    <div className='bg-white max-w-600 mx-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm border-[1px] mt-6'>
      <h3 className='text-3xl font-semibold mb-[15px]'>{!isRegister ? `Đăng nhập` : `Đăng ký`}</h3>
      <div className='w-full flex flex-col gap-5'>
        {isRegister && (
          <InputForm label={`HỌ TÊN`} value={payload?.name} setValue={setPayload} type={"name"} />
        )}
        <InputForm
          label={`SỐ ĐIỆN THOẠI`}
          value={payload?.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <InputForm
          label={`MẬT KHẨU`}
          value={payload?.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          text={isRegister ? `Đăng ký` : "Đăng Nhập"}
          textColor='text-white w-full py-3 font-bold text-sm'
          bgColor='bg-secondary'
          onClick={handleSubmit}
        />
      </div>
      <div className={`${isRegister ? `space-y-5` : `flex justify-between`} mt-4`}>
        {isRegister ? (
          <>
            <p className='text-sm'>
              Bấm vào nút đăng ký tức là bạn đã đồng ý với quy định sử dụng của chúng tôi
            </p>
            <p className='text-sm'>
              Bạn đã có tài khoản?{" "}
              <span
                className='text-[blue] hover:underline cursor-pointer'
                onClick={() => {
                  setIsRegister(false);
                }}>
                Đăng nhập ngay
              </span>
            </p>
          </>
        ) : (
          <>
            <small className='text-[blue] hover:text-[orange] cursor-pointer'>
              Bạn quên mật khẩu ?
            </small>
            <small
              className='text-[blue] hover:text-[orange] cursor-pointer'
              onClick={() => {
                setIsRegister(true);
              }}>
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
