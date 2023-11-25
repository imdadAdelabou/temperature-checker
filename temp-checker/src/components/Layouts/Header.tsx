import { tempCheckerLogo } from "../../assets";
import React from "react";
import CustomBtn from "../CustomBtn";
import { loginBtnProps, registerBtnProps } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center md:px-20 mt-4">
      <img src={tempCheckerLogo} className="w-[70px]" />
      <nav className="md:w-[30%]">
        <div className="hidden  md:flex md:gap-4">
          <CustomBtn {...loginBtnProps} action={() => navigate("/login")} />
          <CustomBtn
            {...registerBtnProps}
            action={() => navigate("/register")}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
