import { NavLink } from "react-router-dom";
import { tempCheckerLogo } from "../assets";

const LogoCmp: React.FC = () => {
  return (
    <NavLink to={"/"}>
      <img src={tempCheckerLogo} className="w-[70px] md:mx-20 mt-4" />{" "}
    </NavLink>
  );
};

export default LogoCmp;
