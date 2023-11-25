import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navBarItemsContent } from "../../utils/constant";
import LogoCmp from "../../components/LogoCmp";
import Hamburger from "../../components/hamburger_bar/Hamburger";
import "../../components/hamburger_bar/hamburgerBar.css";

const DashBoard: React.FC = () => {
  const location = useLocation();
  const [openClass, setOpenClass] = React.useState<string>("");

  return (
    <div className="bg-[#F3F2F7] flex font-poppins">
      {/* Header */}
      <div id="nav" className={`nav nav--${openClass}`}>
        <div className="backdrop"></div>
      </div>

      <nav className="md:max-w-[260px] fixed bg-white h-[100vh] hidden sm:block">
        <div className="">
          <LogoCmp />
          <ul style={{ listStyle: "none" }} className="mt-[30px]">
            {navBarItemsContent.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    `flex items-center gap-[24px] mb-[20px] px-8 ${
                      isActive ? "font-bold text-greenPrimary" : "font-medium"
                    }`
                  }
                >
                  <img
                    src={
                      item.route == location.pathname
                        ? item.activeIcon
                        : item.inactiveIcon
                    }
                  />
                  <span className="text-[18px]">{item.content}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Custom Body */}
      <div className="w-[100%] sm:w-[80%] sm:ml-[218px] overflow-hidden">
        <div className="flex justify-end">
          <Hamburger getOpenClassFun={(value) => setOpenClass(() => value)} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
