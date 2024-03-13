import React from "react";
import { I_register } from "../intefaces/register";

type FormProps = {
  label: string;
  value: string | undefined;
  keyInput: string;
  inValids: I_register[] | any;
  type?: string;
  setInvalid: React.Dispatch<React.SetStateAction<I_register[]>>;
  setValue: React.Dispatch<React.SetStateAction<I_register | {}>>;
};

const InputForm: React.FC<FormProps> = ({
  label,
  value,
  keyInput,
  inValids,
  type,
  setValue,
  setInvalid,
}) => {
  return (
    <div>
      <label htmlFor='phone' className='mb-1 text-xs'>
        {label}
      </label>
      <input
        type={type || "text"}
        value={value || ""}
        onChange={(e) => setValue((prev: any) => ({ ...prev, [keyInput]: e.target.value }))}
        // [type] : object literal dùng để đặt tên thuộc tính
        onFocus={() => setInvalid([])}
        className='outline-none p-3 bg-[#e8f0fe] rounded h-[45px] text-2xl w-full font-semibold leading-[24px]'
      />
      {inValids?.length > 0 && inValids.some((i: any) => i.name === keyInput) && (
        <small className='text-red-500 italic'>
          {inValids?.find((i: any) => i.name === keyInput)?.message}
        </small>
      )}
    </div>
  );
};

export default InputForm;
