import React from "react";
import { I_register } from "../intefaces/register";

type FormProps = {
  label: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<I_register | {}>>;
  type: string;
  inValids: I_register[] | any;
  setInvalid: React.Dispatch<React.SetStateAction<I_register[]>>;
};

const InputForm: React.FC<FormProps> = ({ label, value, setValue, type, inValids, setInvalid }) => {
  return (
    <div>
      <label htmlFor='phone' className='mb-1 text-xs'>
        {label}
      </label>
      <input
        type='text'
        value={value || ""}
        onChange={(e) => setValue((prev: any) => ({ ...prev, [type]: e.target.value }))}
        // [type] : object literal dùng để đặt tên thuộc tính
        onFocus={() => setInvalid([])}
        className='outline-none p-3 bg-[#e8f0fe] rounded h-[45px] text-2xl w-full font-semibold leading-[24px]'
      />
      {inValids?.length > 0 && inValids.some((i: any) => i.name === type) && (
        <small className='text-red-500 italic'>
          {inValids?.find((i: any) => i.name === type)?.message}
        </small>
      )}
    </div>
  );
};

export default InputForm;
