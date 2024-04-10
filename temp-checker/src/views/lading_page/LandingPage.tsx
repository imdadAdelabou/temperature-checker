import Header from "../../components/Layouts/Header";
import { APP_CONTENTS, advantagesSection } from "../../utils/constant";
import { mockupIphon } from "../../assets";
import Hamburger from "../../components/hamburger_bar/Hamburger";
import BackDrop from "../../components/hamburger_bar/Backdrop";
import React from "react";

const LadingPage: React.FC = () => {
  const [openClass, setOpenClass] = React.useState("");
  return (
    <div>
      <BackDrop openClass={openClass} />
      <div className="flex justify-between">
        <Header />
        <Hamburger getOpenClassFun={(value) => setOpenClass(() => value)} />
      </div>
      <section className="mt-16 px-3">
        <h1 className="font-bold  leading-10 text-[55px] text-orangeVariant">
          {APP_CONTENTS.temperature}
        </h1>
        <h1 className="font-bold text-[55px] text-primary">
          {APP_CONTENTS.checker}
        </h1>
        <p className="text-greyColorVariant">
          {APP_CONTENTS.prodcutDescription}
        </p>
        <img src={mockupIphon} alt={APP_CONTENTS.altMockupIphone} />
        <ul className="mx-3">
          {advantagesSection.map((cron, index) => (
            <li
              key={index}
              className={`card bg-white rounded-[14px] pr-[18px] pt-[42px] pl-[44px] pb-[40px] ${
                index !== advantagesSection.length - 1 ? "mb-6" : 0
              } card--shadow`}
            >
              <img src={cron.icon} className="w-[40px] h-[40px] mb-7" />
              <h3 className="text-blackVariant text-xl font-medium mb-2">
                {cron.title}
              </h3>
              <p className="text-greyColorVariant text-base">{cron.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LadingPage;
