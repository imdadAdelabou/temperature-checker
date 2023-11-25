import React from "react";
import { CardStateType } from "../../../utils/types";

const CardState: React.FC<CardStateType> = (props) => {
  return (
    <div className="font-poppins bg-white p-[37px] rounded-lg md:flex md:gap-[20px] items-start">
      <div className="bg-[#00B074] bg-opacity-[15%] w-[80px] h-[80px] rounded-full flex justify-center items-center m-auto md:m-0">
        <img src={props.icon} />
      </div>
      <div>
        <h3 className="text-[40px] text-[#464255] font-bold text-center md:text-start">
          {props.value}
        </h3>
        <h4 className="text-base text-[#464255] text-center">{props.label}</h4>
      </div>
    </div>
  );
};

export default CardState;
