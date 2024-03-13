import React, { useEffect, useState } from "react";
import { InputForm, Button } from "../../components/Index";
import { useLocation, useNavigate } from "react-router-dom";
import { I_register } from "../../intefaces/register";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../store/slices/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [invalid, setInvalid] = useState<Array<any>>([]);
  const { isLoggedIn, msg } = useSelector((state: RootState) => state.auth);
  const [isRegister, setIsRegister] = useState<boolean>(location.state?.flag);
  const [payload, setPayload] = useState<I_register>({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg]);

  const handleSubmit = () => {
    let finalInvalids = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalInvalids);
    if (invalids === 0) isRegister ? dispatch(register(payload)) : dispatch(login(payload));
  };

  const validate = (payload: any) => {
    let inValids = 0;
    let fields: [string, any][] = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalid((prev: any) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này !",
          },
        ]);
        inValids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalid((prev: any) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải tối thiểu 6 ký tự",
              },
            ]);
            inValids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalid((prev: any) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            inValids++;
          }
          break;

        default:
          break;
      }
    });
    return inValids;
  };
  return (
    <div className='bg-white max-w-600 mx-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm border-[1px] mt-6'>
      <h3 className='text-3xl font-semibold mb-[15px]'>{!isRegister ? `Đăng nhập` : `Đăng ký`}</h3>
      <div className='w-full flex flex-col gap-5'>
        {isRegister && (
          <InputForm
            label={`HỌ TÊN`}
            value={payload?.name}
            setValue={setPayload}
            keyInput={"name"}
            inValids={invalid}
            setInvalid={setInvalid}
          />
        )}
        <InputForm
          label={`SỐ ĐIỆN THOẠI`}
          value={payload?.phone}
          setValue={setPayload}
          keyInput={"phone"}
          inValids={invalid}
          setInvalid={setInvalid}
        />
        <InputForm
          label={`MẬT KHẨU`}
          value={payload?.password}
          setValue={setPayload}
          keyInput={"password"}
          inValids={invalid}
          setInvalid={setInvalid}
          type='password'
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
                  setPayload({
                    name: "",
                    phone: "",
                    password: "",
                  });
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
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
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
