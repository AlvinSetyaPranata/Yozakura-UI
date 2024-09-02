import React, { useState } from "react";
import { IDropdownProps } from "src/types/Dropdown";

const Dropdown: React.FC<IDropdownProps> = ({defaultValue, options=[]}) => {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState(defaultValue);

  const handleSelect = (item: string) => {
    setOpened(false)
    setData(item)
  }

  return (
    <div className="space-y-2 w-[300px] max-w-[300px] text-sm">
      <button
        onClick={() => setOpened((state) => !state)}
        className="flex justify-between items-center rounded-md w-full bg-white p-4 font-semibold shadow-md"
      >
        <p>{data}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className={`size-4 duration-200 ease-in ${opened ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {opened && (
        <div className="rounded-md w-full bg-white p-2 flex flex-col gap-y-4 items-start shadow-md">
          {options.map((item, index) => (
          <button
          onClick={() => handleSelect(item)}
          className="hover:bg-gray-300 w-full text-start p-2 text-sm rounded-md" key={index}>
              {item}
          </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
