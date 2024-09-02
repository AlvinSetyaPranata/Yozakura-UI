import React, { useRef, useState } from "react";
import { IFormProps } from "src/types/Forms";

const Forms: React.FC<IFormProps> = ({title, errorMessege}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [clearBtnState, setClearBtnState] = useState<boolean>(false);
  const [spanActive, setSpanActive] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement|null>(null)

  const handleClearState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (e.target.value) {
      setClearBtnState(true);
      setSpanActive(false)
    } else {
        setSpanActive(true)
      setClearBtnState(false);
    }
  };

  const handleClearInput = () => {
    setInputValue("")
    setSpanActive(true)
  }


  return (
    <div className="max-w-[350px] text-sm dark:text-white">
      <h3 className="text-gray-500 dark:text-gray-300">{title}</h3>
      <div className="flex gap-x-4 justify-between items-center w-full border-[1.5px] border-black dark:border-white px-2 py-2 mt-3 rounded-md">
        <input
          ref={inputRef}
          type="text"
          className="outline-none w-full bg-transparent"
          value={inputValue}
          onChange={handleClearState}
        />
        {clearBtnState && (
          <button onClick={handleClearInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
      </div>
      {spanActive && 
      <span className="block text-red-500 text-xs mt-2">{errorMessege}</span>
      }
    </div>
  );
};

export default Forms;
