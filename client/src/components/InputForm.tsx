import React from "react";

type FormProps = {
  label: string;
};

const InputForm: React.FC<FormProps> = ({ label }) => {
  return (
    <div>
      <label htmlFor='phone' className='mb-1 text-xs'>
        {label}
      </label>
      <input
        type='text'
        id='phone'
        name='phone'
        placeholder=''
        className='outline-none p-3 bg-[#e8f0fe] rounded h-[45px] text-2xl w-full font-semibold leading-[24px]'
      />
    </div>
  );
};

export default InputForm;
