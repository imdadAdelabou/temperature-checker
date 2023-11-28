import React from "react";
import { KitStatusType, StatusKit } from "../utils/types";

const KitStatus: React.FC<KitStatusType> = ({ label, status }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-[20px] h-[20px] rounded-full ${
          status === StatusKit.ON ? "bg-[green]" : "bg-[red]"
        } bg-opacity-10 flex justify-center items-center`}
      >
        <div
          className={`w-[10px] h-[10px] ${
            status === StatusKit.ON ? "bg-[green]" : "bg-[red]"
          } rounded-full`}
        ></div>
      </div>
      <span className="text-[grey]">{label}</span>
    </div>
  );
};

export default KitStatus;
