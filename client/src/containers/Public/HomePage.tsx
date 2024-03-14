import React from "react";
import { SearchBar } from "./Index";
import { text } from "../../ultils/constant";

const HomePage: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <SearchBar />
      <div>
        <h1 className='text-[28px] font-semibold text-center'>{text.HOME_TITLE}</h1>
        <p className='text-[#65676b] text-sm'>{text.HOME_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default HomePage;
