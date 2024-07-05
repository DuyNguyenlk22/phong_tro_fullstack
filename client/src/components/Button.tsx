import React from 'react';
import { IconType } from 'react-icons';

type BtnProps = {
  text: string;
  textColor: string;
  bgColor: string;
  Icon?: IconType;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<BtnProps> = ({ text, textColor, bgColor, Icon, onClick }) => {
  return (
    <button
      type='button'
      className={`py-2 px-4 ${textColor} ${bgColor} rounded-md outline-none 
      ${Icon ? `flex items-center space-x-1` : ``} hover:underline`}
      onClick={onClick}>
      <span>{text}</span>
      <span> {Icon && <Icon />}</span>
    </button>
  );
};

export default Button;
