import React from "react";

type FormProps = {
  label: string;
  value: string | undefined;
  setValue: any;
  type: string;
};

const InputForm: React.FC<FormProps> = ({ label, value, setValue, type }) => {
  return (
    <div>
      <label htmlFor='phone' className='mb-1 text-xs'>
        {label}
      </label>
      <input
        required
        type='text'
        value={value || ""}
        onChange={(e) => setValue((prev: any) => ({ ...prev, [type]: e.target.value }))}
        className='outline-none p-3 bg-[#e8f0fe] rounded h-[45px] text-2xl w-full font-semibold leading-[24px]'
      />
    </div>
  );
};

export default InputForm;
