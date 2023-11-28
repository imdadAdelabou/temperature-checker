import React from "react";
import CircularLoading from "./CircularLoading";

const CustomPageLoading: React.FC = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <CircularLoading />
    </div>
  );
};

export default CustomPageLoading;
