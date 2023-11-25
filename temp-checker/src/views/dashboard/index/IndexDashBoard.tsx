import React from "react";
import { APP_CONTENTS } from "../../../utils/constant";
import CardState from "./CardState";
import { bellIcon, humidtyIcon, temperatureIcon } from "../../../assets";
import Chart from "../chart/Chart";
import { HumidityDataType, TemperatureDataType } from "../../../utils/types";

const dataTemp: TemperatureDataType[] = [
  { time: "00:00", temperature: 20 },
  { time: "03:00", temperature: 22 },
  { time: "06:00", temperature: 25 },
  { time: "09:00", temperature: 28 },
  { time: "12:00", temperature: 30 },
  { time: "15:00", temperature: 26 },
  { time: "18:00", temperature: 24 },
  { time: "21:00", temperature: 22 },
];
const dataHumidity: HumidityDataType[] = [
  { time: "00:00", humidity: 20 },
  { time: "03:00", humidity: 22 },
  { time: "06:00", humidity: 25 },
  { time: "09:00", humidity: 28 },
  { time: "12:00", humidity: 30 },
  { time: "15:00", humidity: 26 },
  { time: "18:00", humidity: 24 },
  { time: "21:00", humidity: 22 },
];

const IndexDashBoard: React.FC = () => {
  const firstName: string = "John";

  return (
    <div className="font-poppins p-[57px]">
      <h2 className="font-bold text-[20px] text-[#464255] mb-1">
        {APP_CONTENTS.dashBoardLabel}
      </h2>
      <p className="text-[#464255] font-medium">
        {APP_CONTENTS.hiLabel} {firstName}.{" "}
        {APP_CONTENTS.welcomeBackOnDashBoardLabel}
      </p>
      <div className="grid md:grid-cols-3 gap-[20px] mt-[40px]">
        <CardState
          icon={temperatureIcon}
          label={APP_CONTENTS.temperatureLabel}
          value={20}
        />
        <CardState
          icon={humidtyIcon}
          label={APP_CONTENTS.humidityLabel}
          value={30}
        />
        <CardState icon={bellIcon} label={APP_CONTENTS.alerteLabel} value={5} />
      </div>
      <div className="mt-[40px] md:grid md:grid-cols-2 md:gap-4">
        <Chart dataKey="temperature" data={dataTemp} />
        <Chart dataKey="humidity" data={dataHumidity} />
      </div>
    </div>
  );
};

export default IndexDashBoard;
