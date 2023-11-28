import React from "react";
import { APP_CONTENTS } from "../../../utils/constant";
import KitStatus from "../../../components/KitStatus";
import { StatusKit } from "../../../utils/types";
import EmptyAlerte from "../../../components/EmptyAlerte";

const Setting: React.FC = () => {
  return (
    <div className="font-poppins p-[57px]">
      <h3 className="font-bold text-[20px]">{APP_CONTENTS.statusKit}</h3>
      <div className="mt-1"></div>
      <KitStatus status={StatusKit.OFF} label={APP_CONTENTS.onLabel} />
      <hr className="my-5" />
      <div className="flex justify-center items-center h-[60vh]">
        <EmptyAlerte />
      </div>
    </div>
  );
};

export default Setting;
