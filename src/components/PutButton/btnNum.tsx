import React from "react";

interface BtnNumProps {
  ITEM: number[]; // ITEMはnumber型の配列として指定します
  handleEvent: (num: number) => void; // handleEventは引数としてnumberを受け取る関数として指定します
}

export function BtnNum(props: BtnNumProps) {
  const { ITEM, handleEvent } = props;

  const handleClick = (num: number) => {
    handleEvent(num);
  };

  return (
    <div className="h-12 md:h-16 xl:h-20 2xl:h-24 container flex justify-center items-center flex-wrap bg-orange-100">
      {ITEM.map((num) => (
        <button
          className="btn border-blue-700 bg-white border-2 text-blue-700  hover:bg-blue-700 hover:text-white rounded-lg shadow-lg"
          onClick={() => handleClick(num)}
          key={num}
          value={num}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
