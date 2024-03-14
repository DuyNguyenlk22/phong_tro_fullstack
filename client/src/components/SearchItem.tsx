import React, { memo } from "react";
import { IconType } from "react-icons";

type Props = {
  IconPreffix: IconType;
  IconSuffix: IconType;
  text: string;
  fontWeight?: string;
};

const SearchItem: React.FC<Props> = ({ IconPreffix, IconSuffix, text, fontWeight }) => {
  return (
    <div className='bg-white w-full text-gray-400 px-2 py-[10px] rounded-[5px] h-[35px] flex items-center justify-between text-sm'>
      <div className='flex gap-1 items-center w-full'>
        {IconPreffix && <IconPreffix />}
        <span
          className={`${
            fontWeight && "font-medium text-black"
          } w-full overflow-hidden text-ellipsis whitespace-nowrap`}>
          {text}
        </span>
      </div>
      {IconSuffix && (
        <span>
          <IconSuffix />
        </span>
      )}
    </div>
  );
};

export default memo(SearchItem);
