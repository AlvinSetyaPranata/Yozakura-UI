import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="space-y-2 w-[300px] max-w-[300px] text-sm">
      <button
        onClick={() => setOpened((state) => !state)}
        className="flex justify-between items-center rounded-md w-full bg-white p-4 font-semibold shadow-md"
      >
        <p>Hello</p>
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
          <button className="hover:bg-gray-300 w-full text-start p-2 text-sm rounded-md">
            Options
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
