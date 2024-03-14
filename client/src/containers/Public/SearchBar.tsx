import React from "react";
import { SearchItem } from "../../components/Index";
import icons from "../../ultils/icons";

const {
  HiOutlineBuildingOffice,
  LuDelete,
  HiOutlineLocationMarker,
  BsChevronRight,
  GrTag,
  LiaCropSolid,
  CiSearch,
} = icons;

const SearchBar: React.FC = () => {
  return (
    <div className='p-[10px] bg-fourth rounded-lg gap-2 flex-col lg:flex-row flex items-center justify-around '>
      <SearchItem
        text={"Phòng trọ, nhà trọ"}
        IconPreffix={HiOutlineBuildingOffice}
        IconSuffix={LuDelete}
        fontWeight='700'
      />
      <SearchItem
        text={"Toàn quốc"}
        IconPreffix={HiOutlineLocationMarker}
        IconSuffix={BsChevronRight}
      />
      <SearchItem text={"Chọn giá"} IconPreffix={GrTag} IconSuffix={BsChevronRight} />
      <SearchItem text={"Chọn diện tích"} IconPreffix={LiaCropSolid} IconSuffix={BsChevronRight} />
      <button className='outline-none px-2 w-full bg-secondary flex items-center justify-center text-white text-sm font-medium h-full rounded-[5px]'>
        <CiSearch /> Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
